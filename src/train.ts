console.log("TASK AREA!")

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

function getHighestIndex(num: number[]): number {

    let maxValue = num[0];
    let index = 0;

    for (let i = 1; i < num.length; i++) {
        if(num[i] > maxValue) {
            maxValue = num[i];
            index = i;
        }
    }

    return index;
}

console.log("Result:", getHighestIndex([5, 21, 12, 21, 8]))