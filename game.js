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
        document.querySelector('.cross').style.backgroundColor = '#000'

        // Удаление
        document.querySelector('.zero').style.backgroundColor = '#6fadd7'

        return
    }


    if (whosePlayer === O) {
        whosePlayer = X



        // Установка
        document.querySelector('.zero').style.backgroundColor = '#000'

        // Удаление
        document.querySelector('.cross').style.backgroundColor = '#6f82d7'

        return
    }
}



function checkWin() {
    if (gameStatus[0][0] == X && gameStatus[1][1] == X && gameStatus[2][2] == X) {
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


