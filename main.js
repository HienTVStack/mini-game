const randomBtn = document.getElementById('btn-random');
    const submitBtn = document.getElementById('btn-submit');
    const fecth = document.getElementById('fecth');
    const n1 = document.getElementById('n1');
    const n2 = document.getElementById('n2');
    const n3 = document.getElementById('n3');

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
            if(count >= 500)
                clearInterval(timerId);
                if(parseInt(n1.value) >= 5) {
                    n1.value = handleRandom(4)
                }
        })
    }
    submitBtn.onclick = function() {
        const name = document.createElement('td');
        name.textContent = 'Tran Van Hien';
        
        const number = document.createElement('td');
        number.textContent = (n1.value + n2.value + n3.value);

        const main = document.createElement('tr');
        main.appendChild(name);
        main.appendChild(number)
        fecth.appendChild(main)
    }

    function countdownTimer() {
        const difference = +new Date("2022-07-01") - +new Date();
        let remaining = "Time's up!";

        if (difference > 0) {
          const parts = {
            'Ngày': Math.floor(difference / (1000 * 60 * 60 * 24)),
            'Giờ': Math.floor((difference / (1000 * 60 * 60)) % 24),
            'Phút': Math.floor((difference / 1000 / 60) % 60),
            'Giây': Math.floor((difference / 1000) % 60)
          };
          remaining = Object.keys(parts)
            .map(part => {
              if (!parts[part]) return;
              return `${parts[part]} ${part}`;
            })
            .join(" ");
        }
        // console.log(remaining);
        document.getElementById('countdown').textContent = remaining
      }

      countdownTimer();
      setInterval(countdownTimer, 1000);
