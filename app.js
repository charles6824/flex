let input = document.getElementById('input'); 
let num1 = document.getElementById('one');
let num2 = document.getElementById('two');
let num3 = document.getElementById('three');
let num4 = document.getElementById('four');
let num5 = document.getElementById('five');
let num6 = document.getElementById('six');
let num7 = document.getElementById('seven');
let num8 = document.getElementById('eight');
let num9 = document.getElementById('nine');
let num0 = document.getElementById('zero');
let plus = document.getElementById('add');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let equal = document.getElementById('equal');
let dot = document.getElementById('dot');
let clear = document.getElementById(`clear`)
let del = document.getElementById(`del`)
let bracOpen = document.getElementById(`bracOpen`)
let bracClose = document.getElementById(`bracClose`)


num1.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 1;
})
num2.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 2;
})
num3.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 3;
})
num4.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 4;
})
num5.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 5;
})
num6.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 6;
})
num7.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 7;
})
num8.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 8;
})
num9.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 9;
})
num0.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + 0;
})

plus.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + '+';
})
minus.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + '-';
})
multiply.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + '*';
})
divide.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + '/';
})
equal.addEventListener('click', ()=>{
    input.value = eval(input.value)
})
clear.addEventListener('click', ()=>{
    input.value = ""
})
del.addEventListener('click', ()=>{
    let x = input.value
    input.value = x.substring(0, x.length-1)
})

bracOpen.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + '(';
})
bracClose.addEventListener('click', ()=>{
    let x = input.value;
    input.value = x + ')';
})

