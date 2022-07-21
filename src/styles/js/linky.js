document.querySelectorAll('.info-item').forEach(item => {
    item.addEventListener('click', event => {
               
        item.querySelector('a').click();
        
       
    })
  })


