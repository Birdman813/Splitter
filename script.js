const billInput = document.querySelector('.bill');
const peopleInput = document.querySelector('.people');
const tipButtons = Array.from(document.querySelectorAll('.btn-label button'));
const customInput = document.querySelector('.custom');
const tipPerPerson = document.querySelector('.tip-amount');
const totalPerPerson = document.querySelector('.total-amount');
const error = document.getElementById('error');


let billValue = 0;
let peopleValue = 0;
let percent = 0;
let tipamount = 0;
let total = 0;

billInput.addEventListener('input', (event) => {
    if (!event.target.value) {
        billValue = 0;
    } else {
        billValue = parseFloat(event.target.value);
    }
    calculation();
})

peopleInput.addEventListener('input', (event) => {
    peopleValue = parseInt(event.target.value);
    if (event.target.value == 0) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
    calculation();
})

tipButtons.map((button) => {
    button.addEventListener('click', (event) => {
        percent = parseInt(event.target.innerText);
        calculation();
    })
})

customInput.addEventListener('input', (event) => {
    if (event.target.value) {
        percent = parseInt(event.target.value)
    } else {
        tipPerPerson.innerText = "$0.00";
        totalPerPerson.innerText = "$0.00";
    }
    calculation();
} )

function calculation() {
    if (!peopleValue || !percent) {
        tipPerPerson.innerText = "$0.00";
        totalPerPerson.innerText = "$0.00";
    } else {
        tipamount = billValue * (percent / 100) / peopleValue;
        total = billValue / peopleValue + tipamount;
        tipPerPerson.innerText = `$${tipamount.toFixed(2)}`;
        totalPerPerson.innerText = `$${total.toFixed(2)}`;
    }
    
}
// function tipAmount(percent) {
//     let tipAmount;
//     let total;
//     tipAmount = Math.round(((Number(bill.value) * percent) / people.value) * 100) / 100;
//     total = Math.round(((Number(bill.value) / Number(people.value)) + tipAmount) * 100) / 100;
//     tipPerPerson.textContent = tipAmount;
//     totalPerPerson.textContent = total;
// }

function reset() {
    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
    customInput.value = "";
    bill.value = "0";
    people.value = "0";
}

