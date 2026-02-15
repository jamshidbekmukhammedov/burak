console.log("TASK AREA!")

// TASK-S:

// Shunday function yozing, u numberlardan tashkil topgan 
// array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni 
// topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

function missingNumber(numbers: number[]): number {
  numbers.sort((a, b) => a - b);
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== i) {
      return i; 
    }
  }
  return numbers.length;
}

console.log(missingNumber([3, 0, 1]));

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