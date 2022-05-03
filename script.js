

// Задание 1


let counter = 0;
while (counter < 5) {
    let firstNumber = +prompt("Введите первое число:");
    let secondNumber = +prompt("Введите второе число:");
    console.log("Первое число: " + firstNumber);
    console.log("Второе число: " + secondNumber);
    let nuumbersRange = Math.abs(firstNumber - secondNumber);
    if ( firstNumber < secondNumber && (nuumbersRange >= 5)) {
        for (let i = (firstNumber + 1); i < secondNumber; i++) {
            counter++;
            console.log(+i);
        };
    };
    if ( secondNumber < firstNumber && (nuumbersRange >= 5)) {
        for (let i = (firstNumber - 1); i > secondNumber; i--) {
            counter++;
            console.log(+i);
        };
    };
    if(nuumbersRange < 5) {
        alert("Диапазон чисел включает в себя менее пяти значений!")
    };
};


// Задача 2  


let password = 123;
let attempts = 3;
let outProg = 1;
while (attempts >= outProg) {
    let inputPass = +prompt("Введите пароль:")
    console.log(`Введённый пароль: ${inputPass}`)
    if (inputPass == password) {
        alert("Вы вошли")
        console.log("Пороль верны, вход произведён")
        break
    }
    else if (attempts > outProg) {
        alert(`У вас осталось ${attempts - outProg} попыток`);
    } else {
        alert('У вас закончились попытки!');
    }
    outProg += 1;
}

// Задача 3

let numberFirst = 95;
let numberSecond = 105;
for (let i = numberFirst; i < (numberSecond + 1); i++) {
  let oneHundred = i > 100 ? "больше ста" : "меньше ста";
  let even = i % 2 == 0 ? "чётеное число" : "нечётное число";
  let fraction = i % 1 == 0 ? "не дробное" : "дробное число";
  let positive = i > 0 ? "положительное число" : "отрицательное число";
  console.log(
    `Введённое вами число ${i}: ${oneHundred}, ${even}, ${fraction}, ${positive}`
  );
}

// Задача 4

let numberOne = +prompt("Введите первое число:");
let numberTwo = prompt("Введите второе число:");
let count = 0;
if (numberOne < numberTwo) {
  for (let i = numberOne; i < numberTwo; i++) {
    count++;
    console.log(`Итерация №${count}: ${i}`);
    if (count === 7) {
      console.log("Конец итерации");
      break;
    }
  }
} else if (numberOne > numberTwo) {
  for (let i = numberOne; i > numberTwo; i--) {
    count++;
    console.log(`Итерация №${count}: ${i}`);
    if (count === 7) {
      console.log("Конец итерации");
      break;
    }
  }
} 