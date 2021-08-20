//  images id
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');
const div4 = document.getElementById('fourth');

// Show images id
const img = document.getElementById('art');
const artName = document.getElementById('art-name');

// images description id
const description = document.getElementById('desc');

// images price id
const artPrice = document.getElementById('art-price');

// shipping Button id
const normalBtn = document.getElementById('normal');
const expressBtn = document.getElementById('express');

// shipping Filed id
const shippingFiled = document.getElementById('shipping');

// Total id
const total = document.getElementById('total');

// shipping Button event handler
normalBtn.addEventListener('click', function(){
    shippingFiled.innerText = '10';
    updateTotal();
})
expressBtn.addEventListener('click', function(){
    shippingFiled.innerText = '30';
    updateTotal();
})

// update Total function 
function updateTotal(){
    const shippingCharge = Number(shippingFiled.innerText);
    const productPrice = Number(artPrice.innerText);
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;
}
// images event handler
div1.addEventListener('click', function(){
    img.src = 'images/1.jpg';
    artName.innerHTML = 'Happy';
    description.innerText = 'Happy hails from the Middle English word hap, meaning "good luck." Many of the early European words for happy actually referred to good luck, rather than a feeling of joy.'
    artPrice.innerText = '150';
    updateTotal();
}) 
div2.addEventListener('click', function(){
    img.src = 'images/2.jpg';
    artName.innerHTML = 'Christian Cross';
    description.innerText = 'The Christian cross, seen as a representation of the instrument of the crucifixion of Jesus, is the best-known symbol of Christianity.';
    artPrice.innerText = '350';
    updateTotal();
}) 
div3.addEventListener('click', function(){
    img.src = 'images/3.jpg';
    artName.innerHTML = 'Art';
    description.innerText = 'Art is a diverse range of human activities involving creative imagination to express technical proficiency, beauty, emotional power, or conceptual ideas.';
    artPrice.innerText = '400';
    updateTotal();
}) 
div4.addEventListener('click', function(){
    img.src = 'images/4.jpg';
    artName.innerHTML = 'Piazza dei Miracoli';
    description.innerText = 'The Piazza dei Miracoli, formally as Piazza del Duomo, is a recognized as an important centre of European medieval art architectural complexes in the world.';
    artPrice.innerText = '450';
    updateTotal();
}) 

