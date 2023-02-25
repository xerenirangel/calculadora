let botonSuma = document.getElementById('sumar');
let respuestaSuma = document.getElementById('respuesta');

botonSuma.addEventListener('click', hacersuma);
function hacersuma(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 =n1+n2;
    respuestaSuma.innerHTML= `El resultado de la suma es: ${n3}` ;
}

let botonResta = document.getElementById('restar');
let respuestaResta = document.getElementById('respuesta');

botonResta.addEventListener('click', hacerresta);
function hacerresta(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 =n1-n2;
    respuestaResta .innerHTML= `El resultado de la resta es: ${n3}` ;
}

let botonMulti = document.getElementById('multiplicar');
let respuestaMulti = document.getElementById('respuesta');

botonMulti.addEventListener('click', hacermultiplicación);
function hacermultiplicación(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 =n1*n2;
    respuestaMulti .innerHTML= `El resultado de la multiplicación es: ${n3}` ;
}

let botonDivi = document.getElementById('dividir');
let respuestaDivi = document.getElementById('respuesta');

botonDivi.addEventListener('click', hacerdivisión);
function hacerdivisión(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 =n1/n2;
    respuestaDivi .innerHTML= `El resultado de la división es: ${n3}` ;
}