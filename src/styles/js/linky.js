
// Слушаем наведение на блоки с домами или турами, чтобы при нажатии на них выполнить нажатие на кнопку в данном блоке.
ocument.querySelectorAll('.info-item').forEach(item => {
    item.addEventListener('click', event => {
               
        item.querySelector('a').click();
        
       
    })
  })


