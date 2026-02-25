import { AccessToken } from './../../node_modules/@aws-sdk/nested-clients/dist-types/submodules/signin/models/models_0.d';
import { HttpCode } from './../libs/Errors';
import {Request, Response} from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";


// REACT
const memberService = new MemberService()
const authService = new AuthService;

const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
    try{
        console.log("signup");
        const input:MemberInput = req.body,
            result: Member = await memberService.signup(input);
            const token = await authService.createToken(result);
        
        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER * 3600 * 1000, 
            httpOnly: false,
        });

        res.status(HttpCode.CREATED).json({ member: result, AccessToken: token });
    } catch (err) {
        console.log("Error, signup:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};

memberController.login = async (req: Request, res: Response) => {
    try{
        console.log("login");
        const input: LoginInput = req.body,
            result = await memberService.login(input),
            token = await authService.createToken(result);
        
        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER * 3600 * 1000, 
            httpOnly: false,
        });

        res.status(HttpCode.OK).json({ member: result, AccessToken: token });
    } catch (err) {
        console.log("Error, login:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
    }
};


export default memberController;