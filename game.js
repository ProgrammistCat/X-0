// State
const X = 'X'
const O = 'O'


let gameStatus = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

let whosePlayer = X

function changePlayer() {

    if (whosePlayer === X) {
        whosePlayer = O

        // Установка
        document.querySelector('.cross').style.backgroundColor = '#91a2ef'
        document.querySelector('.cross').style.borderColor = '#7286e2'
        document.querySelector('.cross h1').style.color = '#c5cee7'

        // Удаление
        document.querySelector('.zero').style.backgroundColor = '#7d90e7'
        document.querySelector('.zero').style.borderColor = '#5a6cbd'
        document.querySelector('.zero h1').style.color = '#eceff8'

        return
    }

    if (whosePlayer === O) {
        whosePlayer = X

        // Установка
        document.querySelector('.zero').style.backgroundColor = '#91a2ef'
        document.querySelector('.zero').style.borderColor = '#7286e2'
        document.querySelector('.zero h1').style.color = '#c5cee7'

        // Удаление
        document.querySelector('.cross').style.backgroundColor = '#7d90e7'
        document.querySelector('.cross').style.borderColor = '#5a6cbd'
        document.querySelector('.cross h1').style.color = '#eceff8'

        return
    }
}



function checkWin() {
    if (gameStatus[0][0] === X && gameStatus[1][1] === X && gameStatus[2][2] === X) {
        console.log('X - Win')

    }
}



const cellSelector = ".cell"

const $cells = document.querySelectorAll(cellSelector)

for (let i = 0; i < $cells.length; i++) {
    $cells[i].addEventListener("click", function () {

        const x = Math.floor((i + 3) / 3) - 1
        const y = (i + 3) % 3

        if (whosePlayer === X) {

            if ($cells[i].innerHTML === '') {
                $cells[i].innerHTML = X

                gameStatus[x][y] = X

                changePlayer()
            }

        } else if (whosePlayer === O) {

            if ($cells[i].innerHTML === '') {
                $cells[i].innerHTML = O

                gameStatus[x][y] = O

                changePlayer()
            }

        } else {
            console.error("Error: Whose Player is " + whosePlayer)
            return
        }

        checkWin()

    })
}


