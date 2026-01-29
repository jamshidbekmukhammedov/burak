console.log("TASK AREA!")

// TASK K: 

// Shunday function yozing, u string qabul qilsin va 
// string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

function countVowels(findVowel: string): number {
  const vowels = "aeiouAEIOU";

  return [...findVowel].reduce((count, char) => {
    return vowels.includes(char) ? count + 1 : count;
  }, 0);
}

console.log("result:", countVowels("string"));


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