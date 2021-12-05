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
//10500

// console.log(cash);


//checking total money func
var total_ATMoney = 0;
money_display =  document.getElementById("Tmoney_display");

function check_money(){
    for(var bill of cash){
        total_ATMoney = total_ATMoney + (bill.value * bill.amount);
    }

    money_display.innerHTML += total_ATMoney;
}

check_money();
//console.log(total_ATMoney);

/* --- the powerfull algorithm --- */
button = document.getElementById("extract");
button.addEventListener("click", give_money);
result = document.getElementById("result"); //te <p> to put the result

var b_amount; //var to save the amount of bills we deliver
var div; //var of the division
var money;
var count_movs = 1;

function read_money(){
    var input = document.getElementById("quantity");
    money = parseInt(input.value);
    return money;
}

money = read_money();
console.log(money);

//array to push the bills of the given amount of money
var delivered = [];

function give_money(){
    console.log(money);
    //result.innerHTML = "";
    
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
        result.innerHTML += "Movement #" + count_movs + "<br />";
        for( var del of delivered){
            if(del.amount > 0){
                result.innerHTML += del.amount + " bills of $" + del.value + "<br />";
            }
        }
        count_movs += 1;
        result.innerHTML += "<br /><br />";

        console.log(delivered);
        //show the delivered bills and amount
    }
}