// All product price sum
function allPriceSum(){
    let bestPrice = document.getElementById('best-price');
    let bestPriceAmount = parseInt(bestPrice.innerText);
    let extraMemory = document.getElementById('extra-memory');
    let extraMemoryAmount = parseInt(extraMemory.innerText);
    let extraStorage = document.getElementById('extra-storage');
    let extraStorageAmount = parseInt(extraStorage.innerText);
    let deliveryCharge = document.getElementById('delivery-charge');
    let deliveryChargeAmount = parseInt(deliveryCharge.innerText);

    // getting total cost and set to total
    let totalPriceOfProduct = bestPriceAmount + extraMemoryAmount + extraStorageAmount + deliveryChargeAmount;
    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalPriceOfProduct;

    // lst total price
    let lastTotalPrice = document.getElementById('last-total-price');
    lastTotalPrice.innerText = totalPriceOfProduct
};

// Product price set function
function produtPrice(productid, price){
    let productName = document.getElementById(productid);
    let productPrice = parseInt(productName.innerText = price);
    allPriceSum();
};

// apply 20% discount promo code
function promoCode(){
    let getInput = document.getElementById('inputHare');
    let getInputText = getInput.value;
    if(getInputText == 'stevekaku'){
        let getLastTotalPrice = document.getElementById('last-total-price');
        let getLastTotalPriceAmount = parseInt(getLastTotalPrice.innerText);
        let discount = getLastTotalPriceAmount * 20 / 100 ;
        getLastTotalPrice.innerText = getLastTotalPriceAmount - discount;
    }
    getInput.value = '';
};

// all button and function caller
document.getElementById('eightGB').addEventListener('click', function(){
    produtPrice('extra-memory', 0);
});
document.getElementById('sixteenGB').addEventListener('click', function(){
    produtPrice('extra-memory', 180);
});
document.getElementById('ssd256GB').addEventListener('click', function(){
    produtPrice('extra-storage', 0);
});
document.getElementById('ssd512GB').addEventListener('click', function(){
    produtPrice('extra-storage', 100);
});
document.getElementById('ssd1TB').addEventListener('click', function(){
    produtPrice('extra-storage', 180);
});
document.getElementById('delivery-id-free').addEventListener('click', function(){
    produtPrice('delivery-charge', 0);
});
document.getElementById('delivery-id-premium').addEventListener('click', function(){
    produtPrice('delivery-charge', 20);;
});