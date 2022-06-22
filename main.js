const randomBtn = document.getElementById('btn-random');
    const submitBtn = document.getElementById('btn-submit');

    //random number

    function handleRandom(repeat) {
        return parseInt(Math.random() * repeat);
    }

    randomBtn.onclick = function() {
        let timerId;
        let count = 0;
        timerId = setInterval(() => {
            n1.value = handleRandom(9);
            n2.value = handleRandom(9);
            n3.value = handleRandom(9);

            console.log(n1.value)
            count ++;
            console.log(count)
            if(count >= 900)
                clearInterval(timerId);
                if(parseInt(n1.value) >= 5) {
                    n1.value = handleRandom(4)
                }
        })
    }
    
