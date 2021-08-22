function allButton(){
    let bestPrice = document.getElementById('best-price');
    let bestPriceValue = parseInt(bestPrice.innerText);
    let extraMemory = document.getElementById('extra-memory');
    let extraMemoryValue = parseInt(extraMemory.innerText);
    let extraStorage = document.getElementById('extra-storage');
    let extraStorageValue = parseInt(extraStorage.innerText);
    let deliveryCharge = document.getElementById('delivery-charge');
    let deliveryChargeValue = parseInt(deliveryCharge.innerText);
};
function allPrice(allProduct, allPrice){
    let allProductNumber = document.getElementById(allProduct);
    let allProductNumbertext = parseInt(allProductNumber.innerText = allPrice);
    allButton();
};
document.getElementById('eightGB').addEventListener('click', function(){
    allButton('extra-memory', 0);
});
document.getElementById('sixteenGB').addEventListener('click', function(){
    allButton('extra-memory', 180);
});
document.getElementById('ssd256').addEventListener('click', function(){

});
document.getElementById('ssd512').addEventListener('click', function(){

});
document.getElementById('ssd1').addEventListener('click', function(){

});
document.getElementById('delivery-id1').addEventListener('click', function(){

});
document.getElementById('delivery-id2').addEventListener('click', function(){

});

