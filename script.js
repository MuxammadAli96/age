var age = prompt('Введите ваш возраст')

if (age<=18){
alert ('Вы ещё молоды .Вам нужно учится');
}
else if(age<18 || age<=50){
alert ('Вам нужно работать');
}
 else if (age<50 || age<=59){
alert ('Вам скоро на пенсию');
}
else if (age<59 || age<=150){
alert ('Вы пенсионер');
}
else {
alert ('Что-то пошло не так');
}

