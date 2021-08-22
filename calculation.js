function allTotal() {
    let bestPrice = document.getElementById('best-price');
    let bestPriceText = parseInt(bestPrice.innerText);
    let extraPemory = document.getElementById('extra-memory');
    let extraPemoryText = parseInt(extraPemory.innerText);
    let extraStorage = document.getElementById('extra-storage');
    let extraStorageText = parseInt(extraStorage.innerText);
    let deliveryCharge = document.getElementById('delivery-charge');
    let deliveryChargeText = parseInt(deliveryCharge.innerText);

    let addSum = bestPriceText + extraPemoryText + extraStorageText + deliveryChargeText;

    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = addSum; 

    let totalPricehare = document.getElementById('totalPricehare');
    totalPricehare.innerText = addSum;
}
// product function
function productTotal(productNum, price) {
    let productNumber = document.getElementById(productNum);
    let productNumberText = parseInt(productNumber.innerText = price);
    allTotal();
}
// discount function
function steveKaku() {
    let inputHare = document.getElementById('inputHare');
    let inputHareValue = inputHare.value;
    if(inputHareValue == 'stevekaku'){
        let totalPricehare = document.getElementById('totalPricehare');
        let totalPricehareText = parseInt(totalPricehare.innerText);
        let discount = totalPricehareText / 100 * 20;
        totalPricehare.innerText = totalPricehareText - discount;
    }
}

// all functional caller 

document.getElementById('eightGB').addEventListener('click', function() {
    productTotal('extra-memory', 0);
});

document.getElementById('sixteenGB').addEventListener('click', function() {
    productTotal('extra-memory', 180);
});

document.getElementById('ssd256').addEventListener('click', function() {
    productTotal('extra-storage', 0);
});

document.getElementById('ssd512').addEventListener('click', function() {
    productTotal('extra-storage', 100);
});

document.getElementById('ssd1').addEventListener('click', function() {
    productTotal('extra-storage', 180);
});

document.getElementById('delivery-id1').addEventListener('click', function() {
    productTotal('delivery-charge', 0);
});

document.getElementById('delivery-id2').addEventListener('click', function() {
    productTotal('delivery-charge', 20);
});