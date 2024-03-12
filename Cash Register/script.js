const result = document.getElementById('change-due');
const input = document.getElementById('cash');
const btn = document.getElementById('purchase-btn');
const total_price = document.getElementById('price');
const cash_drawer = document.getElementById('cid');

let price = 19.5;
total_price.innerText = 'Total: $' + price.toFixed(2);

let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

// Initialize an empty array to store the change to be given back
let changeToReturn = [];

btn.addEventListener('click', () => {
    errors();
})

cash_drawer.innerHTML = '';
for (let i = 0; i < cid.length; i++) {
    const rowElement = document.createElement('p');
    rowElement.innerText = cid[i][0] + ': $' + cid[i][1];
    cash_drawer.appendChild(rowElement);
}

let sum = 0;
for (let i = 0; i < cid.length; i++) {
    sum += cid[i][1];
}

function errors() {
    if (input.value < price && input.value != '') {
        alert('Customer does not have enough money to purchase the item');
    } else if (input.value == price) {
        result.innerHTML = 'No change due - customer paid with exact cash';
    } else if (input.value == '') {
        result.innerHTML = '';
    } else {
        cashRegister();
    }
}

function cashRegister() {
    let cashProvided = parseFloat(input.value);
    let change = cashProvided - price;

    changeToReturn = [];

    for (let i = cid.length - 1; i >= 0; i--) {
        const currencyName = cid[i][0];
        const currencyValue = cid[i][1];
        const currencyUnit = getCurrencyUnit(currencyName);

        let currencyAmountToReturn = Math.min(Math.floor(change / currencyUnit) * currencyUnit, currencyValue);

        change -= currencyAmountToReturn;
        change = parseFloat(change.toFixed(2));
        currencyAmountToReturn = parseFloat(currencyAmountToReturn.toFixed(2));

        cid[i][1] -= currencyAmountToReturn;

        if (currencyAmountToReturn > 0) {
            changeToReturn.push([currencyName, currencyAmountToReturn]);
        }
    }


    let drawerEmpty = cid.every(currency => currency[1] === 0);
    if (sum < cashProvided || change > 0) {
        result.innerHTML = 'Status: INSUFFICIENT_FUNDS';
    } else if (drawerEmpty || change > 0 || cashProvided == sum) {
        result.innerHTML = 'Status: CLOSED';
        if (changeToReturn.length > 0) {
            // Display the change to be given back
            changeToReturn.forEach(currency => {
                result.innerHTML += currency[0] + ': $' + currency[1] + '<br>';
            });
        } else {
            // If no change is needed, simply display PENNY with the remaining amount
            result.innerHTML += 'PENNY: $' + (change + 0.01) + '<br>';
        }
    } else {
        result.innerHTML = 'Status: OPEN' + '<br>';
        // Display the change to be given back
        changeToReturn.forEach(currency => {
            result.innerHTML += currency[0] + ': $' + currency[1] + '<br>';
        });
    }
}


function getCurrencyUnit(currencyName) {
    switch (currencyName) {
        case "PENNY":
            return 0.01;
        case "NICKEL":
            return 0.05;
        case "DIME":
            return 0.1;
        case "QUARTER":
            return 0.25;
        case "ONE":
            return 1;
        case "FIVE":
            return 5;
        case "TEN":
            return 10;
        case "TWENTY":
            return 20;
        case "ONE HUNDRED":
            return 100;
        default:
            return 0;
    }
}
