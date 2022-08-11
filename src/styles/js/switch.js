//Кнопки смены карты маршрута 

var radio = document.getElementsByName('route-switch');

for (var i=0; i<radio.length; i++){
    
    radio[i].onchange = testRadio;
    
}

function testRadio(){
    let mas = document.getElementById('switch');
    let txt_left = document.getElementById('txt-left');
    let txt_right = document.getElementById('txt-right');
    

    if (mas.className == 'routes-img-wrapper left'){
        mas.className = 'routes-img-wrapper right';
        txt_left.className = 'routes-text-wrapper route-txt';
        txt_right.className = 'routes-text-wrapper';
    }
    else {
    mas.className = 'routes-img-wrapper left';
    txt_right.className = 'routes-text-wrapper route-txt';
    txt_left.className = 'routes-text-wrapper';

}
    
}




