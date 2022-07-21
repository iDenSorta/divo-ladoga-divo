const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

// Устанавливаем текущий день
var dateControl = document.querySelectorAll('input[type="date"]');

for (var i=0; i<dateControl.length; i++){
    
    dateControl[i].value = dayjs().format('YYYY-MM-DD')
    dateControl[i].min = dayjs().format('YYYY-MM-DD')
    
}

//Слушаем поле Checkin, чтобы при изменении выставить Checkout не меньше чем Checkin
document.getElementsByName('book-day-checkin').forEach(item => {
    item.addEventListener('input', event => {


     item.parentElement.querySelector('#date_checkout').min = item.value;

     let a = item.parentElement.querySelector('#date_checkout').min;
     let b = item.parentElement.querySelector('#date_checkout').value;
     
    // Проверяем минимальное значение для выбора в Checkout и если оно больше значения указанного в поле, то приравниваем второе к первому.
     if (a > b){
        console.log('aaa')
        item.parentElement.querySelector('#date_checkout').value = item.parentElement.querySelector('#date_checkout').min;
     }
    
    })
  })


