let total = 0;


// onclick function
function CTarget(target) {

    let productName = target.parentNode.childNodes[11].childNodes[3].childNodes[3].innerText;

    let li = document.createElement('li');

    li.innerText = productName;

    let showingContainer = document.getElementById('select-container');
    showingContainer.appendChild(li)

    let price = target.parentNode.childNodes[11].childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);

    let getTotal = document.getElementById('normal-total');
    getTotal.innerText = total;

// cupon code functionality

    let purchaseButton = document.getElementById("product-purchase")

    if (total > 0) {
        purchaseButton.removeAttribute('disabled')
    }

    let couponButton = document.getElementById('button-cupon');

    if (total >= 200) {

        couponButton.removeAttribute('disabled');
        document.getElementById('button-cupon').addEventListener('click', function () {
            let coupodCode = document.getElementById('coupon-code');
            let value = coupodCode.value;
            if (value === 'SELL200') {
                let discountAmount = (total * 20) / 100;
                let discountAmountTotal = document.getElementById('discount20');
                discountAmountTotal.innerText = discountAmount;
                let discountedPrice = total - discountAmount;
                let discountTotalPrice = document.getElementById('discounted-price');
                discountTotalPrice.innerText = discountedPrice;
            }
            else {
                alert('Please enter the coupon code to get 20% off')
            }
        })

    }
}

function resetBrowser() {
    window.location.reload();
}






