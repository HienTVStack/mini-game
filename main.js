const randomBtn = document.getElementById('btn-random');
const numberResult = document.getElementById('number-result');
const submitBtn = document.querySelector('.btn-submit');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');
const result5 = document.getElementById('result5');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
//random number

function handleRandom(repeat) {
    return Math.floor(Math.random() * repeat);
}
randomBtn.onclick = function() {
    let timerId;
    let count = 0;
    timerId = setInterval(() => {
        n1.value = handleRandom(9);
        n2.value = handleRandom(9);
        n3.value = handleRandom(9);

        count ++;
        if(count >= 900) {
            clearInterval(timerId);
            modal.style.display = "block";
            if(parseInt(n1.value) >= 5) {
                n1.value = handleRandom(4);
            }
            if(n1.value == 0 && n2.value == 0) {
                n3.value = Math.floor(Math.random()*(9-1+1)+1);
            }
                numberResult.textContent = n1.value + n2.value + n3.value;
        }
    })
}
let array = [];
submitBtn.onclick = function() {
    // handleCloseModal();
    modal.style.display = "none";
    array.push(numberResult.textContent)

    for(let i = 0; i < array.length; i ++) {
        if(i === 0) {
            result1.textContent = array[i];
        }
        if(i === 1) {
            result2.textContent = array[i];
        }
        if(i === 2) {
            result3.textContent = array[i];
        }
        if(i === 3) {result4.textContent = array[i]}
        if(i === 4) {result5.textContent = array[i]}
    }
}
function handleCloseModal() {
    modal.style.display = "none";
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = handleCloseModal;
document.querySelector('.btn-close').onclick = handleCloseModal;

window.onclick = function(event) {
    if (event.target == modal) {
        handleCloseModal();
    }
}