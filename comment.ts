// VPS va VPC o'zi nima? 📌
// Serverlarning o'zaro bog'lanishi bo'yicha turlari 📌
// Authentication nima va uni tashkillashtirish usullari 📌
// Session authentication qanday ishlashini nazariy taxlil qilamiz 📌
// Browserlarning xotiralarini o'rganamiz 📌


// VPS(Virtual Private Server) va VPC(Virtual Private Cloud) o'zi nima? 📌
//      🟢 Data center dagi ma'lum bir yacheyka VPS hisoblanadi! Hostinger kabi 
// kompaniyalar VPS ni arendaga beradi
//      ❌ VPS da bitta yacheykani tanlagandan keyin uni scaling qila olmaysiz!
// Katta hajmdagi ma'lumot kerak bo'lsa boshqa yacheyka tanlash kerak!

//      🟢 VPC aynan bir yacheykaga bog'langan bo'lmaydi! bir nechta o'nlab, yuzlab
// yacheykalarni run qilish natijasida environment hosil qilinadi! Bu Cloud deyiladi va 
// foydalanuvchilarga bo'lib beriladi!


// Serverlarning o'zaro bog'lanishi bo'yicha turlari 📌
//      🟢 Client Server va Peer to Peer
// Client Server da markaziy server tushunchasi bo'ladi. NodeJS da express orqali qurgan
// serverimiz markazda joylashadi!

//      🟢 Peer to peer Blockchain texnologiyaga xos hisoblanadi! Markaziy server tushunchasi mavjud bo'lmaydi!
// Har bir qatnashgan serverlar Nod deyiladi! Ma'lumotlar aynan bir joyda saqlanmaydi!


// Authentication nima va uni tashkillashtirish usullari 📌
//      🟢 Kim murojat qilyotganini server aniqlash jarayoni Authentication!

//      🟢 Authentication hosil qilish usullari:
//                  1. Sessions(Cookies)
//                  2. Tokens(Cookies)
//                  3. Tokens(Headers)

// =====================================================================


// Architectural pattern: MVC(Model-View-Controller), 
//                  DI(Dependency Injection), MVP(Model View Presenter)

// Design pattern: Middleware, Decorat

// ========================================



// Environmental Variables: 
//                          Ayrim GIT HUB ga joylashtirilmaydigan
// ma'lumotlarni aynan .env ga yozamiz! Misol uchun Database connection linki.
// Bunday ma'lumotlar foydalanuvchilarga chiqib ketmasligi kerak!
// .env dan foydalanishimiz uchun maxsus package kerak bo'ladi. >>> ("npm i dotenv")


// Mongoose:        << mongoosejs.com >>
//           Mongoose bu MongoDB bilan ishlash uchun xosil qilingan maxsus package!
//  SQL singari TABLE ga o'xshagan data larni MONGOOSE ning schema lari orqali xosil qilamiz!