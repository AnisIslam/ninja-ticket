//................For first class section...........
//For Plus Button
const plusButton = document.getElementById('firstPlus');
plusButton.addEventListener('click', function () {
    updateTicketNumber('firstClassBox', 1);
    updateSubTotal('subTotal', 150);
    vatCalculation();
    fullTotal();
})

//
//For Minus Button
const minusButton = document.getElementById('firstMinus');
minusButton.addEventListener('click', function () {
    if (ticketNumber > 0) {
        updateTicketNumber('firstClassBox', -1);
        updateSubTotal('subTotal', -150);
        vatCalculation();
        fullTotal();
    }

})

//................For economy class section...........
//For Plus Button
const secondPlusButton = document.getElementById('secondPlus');
secondPlusButton.addEventListener('click', function () {
    updateTicketNumber('EconomyClassBox', 1);
    updateSubTotal('subTotal', 100);
    vatCalculation();
    fullTotal();
})

//
//For Minus Button
const secondMinusButton = document.getElementById('secondMinus');
secondMinusButton.addEventListener('click', function () {
    if (ticketNumber > 0) {
        updateTicketNumber('EconomyClassBox', -1);
        updateSubTotal('subTotal', -100);
        vatCalculation();
        fullTotal();
    }

})
function updateTicketNumber(id, counter) {
    ticketNumber = parseFloat(document.getElementById(id).value) + counter;
    document.getElementById(id).value = ticketNumber;
    return ticketNumber;

}

function updateSubTotal(id, price) {
    document.getElementById(id).innerText = parseFloat(document.getElementById(id).innerText.replace(/,/g, '')) + price;
}
function vatCalculation(tax) {
    tax = parseFloat(document.getElementById('subTotal').innerText.replace(/,/g, '')) * 0.1;
    document.getElementById('vat').innerText = tax.toFixed(1)
}
function fullTotal() {
    vat = parseFloat(document.getElementById('vat').innerText)
    subTotal = parseFloat(document.getElementById('subTotal').innerText.replace(/,/g, ''))
    document.getElementById('total').innerText = vat + subTotal;

}

