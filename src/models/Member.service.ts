import { MemberStatus } from './../libs/enums/member.enum';
import { MemberType } from '../libs/enums/member.enum';
import MemberModel from '../schema/Member.model';
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from '../libs/Errors';
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObjectId } from '../libs/config';

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    }

    /* SPA*/ 
    // Signup qilish mantig'i
    public async signup(input: MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
       
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result.toJSON();
        } catch (err) {
            console.log("Error, model: signup", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
        }
    }

    // Login qilish mantig'i!
    public async login(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
        .findOne(
            {memberNick: input.memberNick, 
            memberStatus: {$ne: MemberStatus.DELETE}
            },   // FILTER
            {memberNick: 1, memberPassword: 1, memberStatus: 1}  // PROJECTION
        )
        .exec();
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
        else if(member.memberStatus === MemberStatus.BLOCK) {
            throw new Errors(HttpCode.FORBIDDEN, Message.BLOCKED_USER);
        }

        // BCRYPT ni compare methodi orqali database dagi password bilan 
        // input passwordni solishtiryapti!
        const isMatch = await bcrypt.compare(
            input.memberPassword, 
            member.memberPassword
        );
        if(!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }
        
        return await this.memberModel.findById(member._id).lean().exec();
    }

    public async getMemberDetail(member: Member): Promise<Member> {
        const memberId = shapeIntoMongooseObjectId(member._id);
        const result = await this.memberModel
        .findOne({_id: memberId, memberStatus: MemberStatus.ACTIVE})
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result;
    }

    /* BSSR*/
    // Signup qilish mantig'i!
    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({memberType: MemberType.RESTAURANT})
            .exec();
        if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED); 

        // Kirib kelayotgan Password ni BCRYPT orqali o'qib bo'lmas holatga o'zgartirilyapti!
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

        try {
            const result = await this.memberModel.create(input);
        result.memberPassword = "";
        return result;
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
        }
    }

    // Login qilish mantig'i!
    public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
        .findOne(
            {memberNick: input.memberNick, MemberType: MemberType.RESTAURANT},   // FILTER
            {memberNick: 1, memberPassword: 1}  // PROJECTION
        )
        .exec();
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
        // BCRYPT ni compare methodi orqali database dagi password bilan 
        // input passwordni solishtiryapti!
        const isMatch = await bcrypt.compare(
            input.memberPassword, 
            member.memberPassword);
        
        if(!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }
        
        return await this.memberModel.findById(member._id).exec();
    }

    public async getUsers(): Promise<Member[]> {
        const result = await this.memberModel
        .find({memberType: MemberType.USER})
        .exec();

        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result;
    }

    public async updateChosenUser(input: MemberUpdateInput): Promise<Member> {
        input._id = shapeIntoMongooseObjectId(input._id);
        const result = await this.memberModel
        .findByIdAndUpdate(
            { _id: input._id },     // FILTER
            input,                  // UPDATE
            { new: true, runValidators: true })   // OPTION
        .exec();

        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

        return result;
    }
};

export default MemberService;