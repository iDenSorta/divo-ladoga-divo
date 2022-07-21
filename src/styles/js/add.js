function b(){

let divadd = document.getElementById('divadd')


let div2 = divadd.cloneNode(true);

divadd.id = 'divadd' + (i++);
divadd.after(div2);
}
var i = 0;
let a = document.getElementById('addlink');

a.onclick = b;

