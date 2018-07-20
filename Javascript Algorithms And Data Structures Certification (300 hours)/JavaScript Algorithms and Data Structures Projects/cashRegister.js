function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let total = cid.map(item => item[1]).reduce((a, b) => a + b, 0);
    let cashCID = convertToCashObject(cid);
    let cashBack = checkValidAmount(change, cashCID);
    let moneyBack = cashBack[1].filter(item => item[1] > 0);
    if (total < change || !cashBack[0]) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    if (cashBack[2].map(item => item.amount).reduce((a, b) => a + b, 0) === 0) {
        return {status: "CLOSED", change: cashBack[1].map(item => {
            item[1] = +(item[1].toFixed(2));
            return item;
            })}
    } else {
        return {status: "OPEN", change: moneyBack}
    }
}

function convertToCashObject(arr) {
    let order = [
        {name: "ONE HUNDRED", amount: 0, value: 100},
        {name: "TWENTY", amount: 0, value: 20},
        {name: "TEN", amount: 0, value: 10},
        {name: "FIVE", amount: 0, value: 5},
        {name: "ONE", amount: 0, value: 1},
        {name: "QUARTER", amount: 0, value: 0.25},
        {name: "DIME", amount: 0, value: 0.10},
        {name: "NICKEL", amount: 0, value: 0.05},
        {name: "PENNY", amount: 0, value: 0.01}
    ];
    for (let i = 0; i < order.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let item = arr[j];
            if (order[i].name === item[0]) {
                order[i].amount = item[1];
            }
        }
    }
    return order
}

function checkValidAmount(change, cashCID) {
    let i = 0;
    let newArr = [];
    let valid = true;
    while (change > 0 && i <= cashCID.length - 1) {
        let amount = 0;
        while (change - cashCID[i].value >= 0 && cashCID[i].amount - cashCID[i].value >= 0) {
            change = +(change.toFixed(2));
            change -= cashCID[i].value;
            amount += cashCID[i].value;
            cashCID[i].amount -= cashCID[i].value;
            cashCID[i].amount = +(cashCID[i].amount.toFixed(2));

        }
        newArr.push([cashCID[i].name, amount]);
        i++;
    }
    if (change > 0) {
        return [!valid, newArr, cashCID];
    }
    return [valid, newArr, cashCID];
}


