console.log("TASK AREA!")

// TASK-ZF:

// Shunday function yozing, uni string parametri bolsin. 
// String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin 
// lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') 
// return 'Name Should be a String'

function capitalizeWords(input: string): string {
    return input.split(' ').reduce((result, current) => {
        const fixed = current.length <= 2 
            ? current 
            : current.charAt(0).toUpperCase() + current.slice(1);
        return result ? `${result} ${fixed}` : fixed;
    }, '');
}

console.log("return:", capitalizeWords('hello my name is marco!'));


// =========================================================================

// TASK ZE:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

// const removeDuplicate = (input: string): string =>
//   input.split('').filter((char, index) => input.indexOf(char) === index).join('');

// console.log("return:", removeDuplicate('stringg'));

// =======================================================================

// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.


// function changeNumberInArray(
//   fNumber: number, arr: number[], changeNum: number
// ): number[] {
//   const changedArr = [...arr];
//   changedArr[fNumber] = changeNum;
//   return changedArr;
// }

// console.log("return:", changeNumberInArray(1, [1,3,7,2], 2))

// =======================================================================

// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

// function celsiusToFahrenheit(celsius: number): number {
//   const factor = 9 / 5;
//   const offset = 32;
//   return celsius * factor + offset;
// }

// console.log("returnFirst:", celsiusToFahrenheit(0));
// console.log("returnSec:", celsiusToFahrenheit(10));

// ==========================================================================

// TASK-ZB:

// Shunday function yozing, uni 2 ta number 
// parametri bolsin va berilgan sonlar orasidan random raqam return qilsin

// MASALAN: randomBetween(30, 50) return 45

// function randomBetween(minNum: number, maxNum: number): number {
//     return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// };    

// console.log("random number return:", randomBetween(30, 50));


// ==========================================================================

// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.



// function sumEvens(findEvens: number[]): number {
//     let sum = 0;

//     for(const number of findEvens) {
//         if(number % 2 === 0) sum += number;  
//     }

//     return sum;
// }
// console.log("ex1:", sumEvens([1, 2, 3]));
// console.log("ex2:", sumEvens([1, 2, 3, 2]));



// ============================================================================

// TASK Y

// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.

// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda.


// function findIntersection <T>(firstArr: T[], secArr: T[]): T[] {
//   const result: T[] = [];
//   let i = 0;
//   while(i < firstArr.length) {
//       if(secArr.includes(firstArr[i])) {
//           result.push(firstArr[i]);
//       }
//       i++;
//   }

//   return result;
// }

// console.log("return:", findIntersection([1,2,3], [3,2,0]));


// =============================================================================

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida 
// ikkinchi string parametri necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: 
// countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// function countOccurrences(object: any, searchString: string): number {
//   let count = 0;

//   if (typeof object !== "object" || object === null) {
//     return 0
//   }
//   for (const key in object as Record<string, any>) {
//     if (key === searchString) {
//       count++
//     }
//     const value = (object as Record<string, any>)[key];

//     if (typeof value === "object" && value !== null) {
//       count += countOccurrences(value, searchString);
//     }
//   }

//   return count;
// }

// console.log("return:", countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, "model"));


// ======================================================================

// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti



// function chunkArray<T>(existingArray: T[], chunkSize: number): T[][] {
//   const chunks: T[][] = []
//   let i = 0;

//   while (i < existingArray.length) {
//     chunks.push(existingArray.slice(i, i + chunkSize))
//     i += chunkSize;
//   }

//   return chunks;
// }

// console.log("chankArray:", chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))

// =============================================================


// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.


// function countChars(string: string): Record<string, number> {
//   const result: Record<string, number> = {};
  
//   [...string].forEach(letter => {
//     result[letter] = (result[letter] ?? 0) + 1;
//   });
//   return result;
// }

// console.log("return:", countChars("hello"))



// ==============================================================================

// TASK U

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.


// function sumOdds(searchOddNum: number): number {
//   let count = 0;

//   for (let i = 1; i < searchOddNum; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log("result:", sumOdds(9));


// ===============================================================================

// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); 
// return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, 
// tartib raqam bo'yicha tartiblab qaytarmoqda.


// function mergeSortedArrays(firstArray: number[], secondArray: number[]): number[] {
//   return [...firstArray, ...secondArray].sort((a, b) => a - b);
// }

// const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// console.log("result:", result);


// ========================================================================

// TASK-S:

// Shunday function yozing, u numberlardan tashkil topgan 
// array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni 
// topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(numbers: number[]): number {
//   numbers.sort((a, b) => a - b);
  
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== i) {
//       return i; 
//     }
//   }
//   return numbers.length;
// }

// console.log(missingNumber([3, 0, 1]));

// =========================================================================

// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.


// function calculate(equalNum: string): number {
//   let num1 = '';
//   let operator = '';
//   let num2 = '';
//   let foundOperator = false;
  
//   for (let char of equalNum) {
//     if (char === ' ') continue; 

//     if (['+', '-', '*', '/'].includes(char)) {
//       operator = char;
//       foundOperator = true;
//     } else if (!foundOperator) {
//       num1 += char;
//     } else {
//       num2 += char;
//     }
//   }
  
//   const n1 = Number(num1);
//   const n2 = Number(num2);
  
//   switch (operator) {
//     case '+': return n1 + n2;
//     case '-': return n1 - n2;
//     case '*': return n1 * n2;
//     case '/': return n1 / n2;
//     default: return 0;
//   }
// }

// console.log(calculate(" 1 + 3"));


// =====================================================================

// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// function hasProperty(value: object, key: string): boolean {
//   if (typeof value !== "object" || value === null) return false;

//   return key in value;
// }

// console.log("result:", hasProperty({ name: "BMW", model: "M3" }, "model"));



// =========================================================================

// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]


// function objectToArray(input: {[key: string]: number}): [string, number][] {
//     const result: [string, number][] = [];
    
//     for (let key in input) {
//         result.push([key, input[key]]);
//     }
    
//     return result;
// }

// console.log(objectToArray({a: 10, b: 20, c: 30}));

// ===========================================================================

// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud 
// bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

// function calculateSumOfNumbers(calculateOnlyNum: any[]): number {
//     let currentNum = 0;
    
//     for (let i = 0; i < calculateOnlyNum.length; i++) {
//         if (typeof calculateOnlyNum[i] === "number") {
//             currentNum += calculateOnlyNum[i];
//         }
//     }
    
//     return currentNum;
// }

// console.log("result", calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); 


// ===========================================================================

// TASK N:

// Shunday function yozing, u string qabul qilsin va string palindrom 
// yani togri oqilganda ham, orqasidan oqilganda ham bir hil 
// oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.

// MASALAN: palindromCheck("dad") return true;  
// palindromCheck("son") return false;

// function palindromCheck(palindromWord: string): boolean {
//   const result = [...palindromWord].reverse().join('');
//   return palindromWord === result;
// }

// console.log("result1:", palindromCheck("dad"));
// console.log("result2:", palindromCheck("son"));



// ==========================================================================

// TASK M: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va 
// array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni 
// kvadratidan tashkil topgan object hosil qilib, 
// hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, 
// {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(numbers: number[]): 
// { number: number; square: number }[] {
//   return [...numbers].map(num => ({
//     number: num,
//     square: num ** 2  
//   }));
// }

// console.log("result:", getSquareNumbers([1, 2, 3]));


// ==============================================================================


// TASK L: 

// Shunday function yozing, u string qabul qilsin va string 
// ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini 
// buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";


// function reverseSentence(sentence: string): string {
//   let result = "";
//   let curentWord = "";
  
//   for (let i = 0; i < sentence.length; i++) {
//     const char = sentence[i];
    
//     const checkNotSymble = 
//     (char >= 'a' && char <= 'z') || 
//     (char >= 'A' && char <= 'Z') || 
//     (char >= '0' && char <= '9');
    
//     if (char === " ") {
//       for (let j = curentWord.length - 1; j >= 0; j--) {
//         result += curentWord[j];
//       }
//       result += " ";
//       curentWord = "";
//     } else if (checkNotSymble) {
//       curentWord += char;
//     }
//   }
  
//   for (let j = curentWord.length - 1; j >= 0; j--) {
//     result += curentWord[j];
//   }
  
//   return result;
// }

// console.log("result:", reverseSentence("we like coding!"));

// ======================================================================

// TASK K: 

// Shunday function yozing, u string qabul qilsin va 
// string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(findVowel: string): number {
//   const vowels = "aeiouAEIOU";

//   return [...findVowel].reduce((count, char) => {
//     return vowels.includes(char) ? count + 1 : count;
//   }, 0);
// }

// console.log("result:", countVowels("string"));


// =========================================================================

// TASK J:

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"
// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

// function findLongestWord(targetWord: string): string {
//   let currentWord = "";
//   let longestWord = "";
  
//   for (let i = 0; i < targetWord.length; i++) {
//     const char = targetWord[i];
    
//     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//       currentWord += char;
//     } else {
//       if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//       }
//       currentWord = "";
//     }
//   }
  
//   if (currentWord.length > longestWord.length) {
//     longestWord = currentWord;
//   }
//   return longestWord;
// }

// console.log(findLongestWord("I came from Uzbekistan!"));


// =====================================================================

// TASK-I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 
// 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.


// function majorityElement(finddbnum: number[]): number {
//   let maxCount = 0;
//   let result = finddbnum[0];
  
//   for (let i = 0; i < finddbnum.length; i++) {
//     let count = 0;
    
//     for (let j = 0; j < finddbnum.length; j++) {
//       if (finddbnum[i] === finddbnum[j]) {
//         count++;
//       }
//     }
    
//     if (count > maxCount) {
//       maxCount = count;
//       result = finddbnum[i];
//     }
//   }
  
//   return result;
// }

// console.log("Result:", majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));



// ========================================================================

// TASK H2: 

// Shunday function tuzing, unga string argument pass bolsin.
//  Function ushbu agrumentdagi digitlarni yangi stringda return qilsin

// MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(digit: string): string {
//   const result = [...digit]
//     .filter(char => char >= '0' && char <= '9')
//     .join('');

//   return result;
// }

// console.log("Result:", getDigits("m14i1t"));

// ==========================================================

// TASK H: 

// shunday function tuzing, u integerlardan iborat arrayni 
// argument sifatida qabul qilib, faqat positive qiymatlarni 
// olib string holatda return qilsin

// MASALAN: getPositive([1, -4, 2]) return qiladi "12"


// function getPositive(num: number[]): number[] {
//     for(let i = num.length -1; i >=0; i--) {
//         if(num[i] < 0) {
//             num.splice(i, 1);
//         }
//     }
//     return num;
// }

// console.log("Result:", getPositive([1, -4, 2]));


// =====================================================================

// TASK G:
// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga 
// ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi 
// eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta 
// son hisobladi va bizga uning indeksi 1 qaytadi.

// function getHighestIndex(num: number[]): number {

//     let maxValue = num[0];
//     let index = 0;

//     for (let i = 1; i < num.length; i++) {
//         if(num[i] > maxValue) {
//             maxValue = num[i];
//             index = i;
//         }
//     }

//     return index;
// }

// console.log("Result:", getHighestIndex([5, 21, 12, 21, 8]))