decrease = document.getElementById('decrease');
increase= document.getElementById('increase');
reset = document.getElementById('reset');
label = document.getElementById('label');
count = 0;

decrease.onclick = function(){
    count--;
    label.textContent = count;
}

increase.onclick = function(){
    count++;
    label.textContent = count;
}

reset.onclick = function(){
    count=0;
    label.textContent = count;
}