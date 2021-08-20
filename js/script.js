const Div1 = document.getElementById('first');
const Div2 = document.getElementById('second');
const Div3 = document.getElementById('third');

const img = document.getElementById('art');
const desc = document.getElementById('desc');
const price = document.getElementById('price');
const free = document.getElementById('free');
const express = document.getElementById('express');
const shippingField = document.getElementById('Shipping');
const total = document.getElementById('total');


function isContain (elem){
    return elem.classList.contains('selected')
}

express.addEventListener('click',function(){
    if(!isContain(express)){
        free.classList.remove('selected')
        express.classList.add('selected')
    }
    shippingField.innerText = '30'
    //update Total
    updateTotal()
})
free.addEventListener('click', function(){
    if(!isContain(free)){
        free.classList.add('selected')
        express.classList.remove('selected')
    }
    shippingField.innerText = '5'
       //update Total
       updateTotal()
})

function updateTotal(){
    const shippingCharge = parseInt(shippingField.innerText);
    const productPrice = parseInt(price.innerText)
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal; 
  
}

Div1.addEventListener('click',function(){
    if(!isContain(Div1)){
        Div1.classList.add('selected')
        Div2.classList.remove('selected')
        Div3.classList.remove('selected')
    }
  img.src = "images/1.jpg"
  desc.innerText = "first - 1";
  price.innerText = '750'
     //update Total
     updateTotal()
 })
Div2.addEventListener('click',function(){
    if(!isContain(Div2)){
        Div1.classList.remove('selected')
        Div2.classList.add('selected')
        Div3.classList.remove('selected')
    }
    img.src = "images/2.jpg"
    desc.innerText = "second-2";
    price.innerText = '550'
       //update Total
       updateTotal()
})
Div3.addEventListener('click',function(){
    if(!isContain(Div3)){
        Div1.classList.remove('selected')
        Div2.classList.remove('selected')
        Div3.classList.add('selected')
    }
    img.src = "images/3.jpg"
    desc.innerText = "third - 1";
  price.innerText = '330'
     //update Total
     updateTotal()
})