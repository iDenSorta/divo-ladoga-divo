
var radio = document.getElementsByName('route-switch');

for (var i=0; i<radio.length; i++){
    
    radio[i].onchange = testRadio;
    
}

function testRadio(){
    let mas = document.getElementById('switch');
    

    if (mas.className == 'routes-img-wrapper left'){
        mas.className = 'routes-img-wrapper right';
    }
    else {
    mas.className = 'routes-img-wrapper left';}
    
}




