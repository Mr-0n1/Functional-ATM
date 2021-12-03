class Bills{
    constructor(value, amount){
        this.value = value;
        this.amount = amount;
    }
}

//money in the ATM (bill value  - bill count)
var cash = [];
cash.push(new Bills(100, 50)); //5000
cash.push(new Bills(50, 30));  //1500
cash.push(new Bills(20, 100)); //2000
cash.push(new Bills(10, 100)); //1000
cash.push(new Bills(5, 200)); //1000

// console.log(cash);



/* --- the powerfull algorithm --- */

input = document.getElementById("quantity");
var money = parseInt(input.value);
button = document.getElementById("extract");
button.addEventListener("click", give_money);
result = document.getElementById("result"); //te <p> to put the result

var b_amount; //var to save the amount of bills we deliver
var div; //var of the division

//array to push the bills of the given amount of money
var delivered = [];

function give_money(){
    for(var bill of cash){
        if(money > 0){
            div = Math.floor(money / bill.value);
            if(div > bill.amount){
                b_amount = bill.amount;
            }
            else{
                b_amount = div;
            }

            delivered.push(new Bills(bill.value, b_amount));
            money -= (bill.value * b_amount);
        }
    }
    if(money > 0){
        result.innerHTML = "I cannot deliver your requested amount, not enough bills";
    }
    else{
        for( var del of delivered){
            if(del.amount > 0){
                result.innerHTML  += del.amount + " bills of $" + del.value + "<br />";
            }
        }

        console.log(delivered); //show the delivered bills and amount
    }
}