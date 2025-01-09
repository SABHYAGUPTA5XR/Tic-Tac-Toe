let boxes = document.querySelectorAll('.boxes');
let heading = document.querySelector('#heading');
let reset = document.querySelector('#reset');
let newgame = document.querySelector('#newgame');
let msg = document.querySelector('.msg');
let msgNewgame = document.querySelector('.msgNewgame');

let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
console.dir(boxes[0]);
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = '';
        count = 0;
    })
    heading.classList.remove('highlight');
})

newgame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = '';
        count = 0;
        box.disabled = false;
    }
    )
    heading.classList.remove('highlight');
    msgNewgame.classList.add('hide');
})

const disablebtns = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const winner = () => {
    for (let pattern of arr) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != '' && p1 == p2 && p2 == p3) {
            msg.innerText = `Congratulations, ${p1} won!`;
            disablebtns();
            return true;
        }
    }
    return false;
}

console.log(boxes);

let isX = true;
let count = 0;
for (let box of boxes) {
    box.addEventListener("click", () => {
        if (box.innerText == '') {
            count = count + 1;
            if (isX) {
                box.innerText = 'X';
                isX = false;
            }
            else {
                box.innerText = 'O';
                isX = true;
            }
            // }
            // box.disabled = true;
        }
        if (winner()) {
            msgNewgame.classList.remove('hide');
            msgNewgame.classList.add('fullPage');
        }
        else if (!winner() && count === 9) {
            count = count + 1;
            heading.innerText = "It's a draw!";
            console.dir(heading);
            heading.classList.add('highlight');
        }
    })
}


