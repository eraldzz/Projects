num1 = 8
num2 = 2
sum = document.getElementById("sum")
document.getElementById("num1").innerText = num1
document.getElementById("num2").innerText = num2



function add(){
    add1 =  num1 + num2 
    sum.innerText = "Sum: " + add1
}

function sub(){
    sub1 = num1 - num2
    sum.innerText = "Difference: " + sub1
}

function div(){
    div1 = num1 / num2
    sum.innerText = "Quotient: " + div1
}

function mul(){
    mul1 = num1 * num2
    sum.innerText = "Product: " + mul1
}






