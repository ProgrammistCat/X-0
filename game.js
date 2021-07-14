// Selectors
const markerXContainerSelector = '.cross'
const markerXSelector = '.cross h1'

const markerOContainerSelector = '.zero'
const markerOSelector = '.zero h1'

const cellSelector = ".cell"

const modalContainerSelector = '.win-modal-window'
const modalMessageSelector = '.win-modal-window .message'
const modalBlurSelector = '.win-modal-window .blur'



// Html's Links
const $markerXContainer = document.querySelector(markerXContainerSelector)
const $markerX = document.querySelector(markerXSelector)

const $markerOContainer = document.querySelector(markerOContainerSelector)
const $markerO = document.querySelector(markerOSelector)

const $modalContainer = document.querySelector('.win-modal-window')
const $modalMessage = document.querySelector('.win-modal-window .message')
const $modalBlur = document.querySelector('.win-modal-window .blur')

const $cells = document.querySelectorAll(cellSelector)




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
        $markerXContainer.style.backgroundColor = '#91a2ef'
        $markerXContainer.style.borderColor = '#7286e2'
        $markerX.style.color = '#c5cee7'

        // Удаление
        $markerOContainer.style.backgroundColor = '#7d90e7'
        $markerOContainer.style.borderColor = '#5a6cbd'
        $markerO.style.color = '#eceff8'

        return
    }

    if (whosePlayer === O) {
        whosePlayer = X

        // Установка
        $markerOContainer.style.backgroundColor = '#91a2ef'
        $markerOContainer.style.borderColor = '#7286e2'
        $markerO.style.color = '#c5cee7'

        // Удаление
        $markerXContainer.style.backgroundColor = '#7d90e7'
        $markerXContainer.style.borderColor = '#5a6cbd'
        $markerX.style.color = '#eceff8'

        return
    }
}


function checkTie() {

    let acc = 0

    for (let i = 0; i < gameStatus.length; i++) {
        for (let j = 0; j < gameStatus[i].length; j++) {
            if (gameStatus[i][j] !== null) {
                acc++
            }
        }
    }

    return acc == 9
}


function checkWin() {

    let player = null

    function win(player) {

        if (player == X) {
            WinX()
        } else if (player == O) {
            Win0()
        }
    }

    for (let i = 0; i <= 2; i++) {

        if (i === 0) player = X
        if (i === 1) player = O

        if (gameStatus[0][0] === player && gameStatus[1][1] === player && gameStatus[2][2] === player) {
            win(player)
        }

        if (gameStatus[0][2] === player && gameStatus[1][1] === player && gameStatus[2][0] === player) {
            win(player)
        }

        for (let i = 0; i <= 2; i++) {
            if (gameStatus[i][0] === player && gameStatus[i][1] === player && gameStatus[i][2] === player) {
                win(player)
            }
        }

        for (let i = 0; i <= 2; i++) {
            if (gameStatus[0][i] === player && gameStatus[1][i] === player && gameStatus[2][i] === player) {
                win(player)
            }
        }
    }

    // Если все поля занято
    if (checkTie()) {
        Tie()
    }
}

function WinX() {
    openModalWindow('Победа за X!')
}

function Win0() {
    openModalWindow('Победа за O!')
}

function Tie() {
    openModalWindow('Ничья!')
}






function openModalWindow(message) {
    setTimeout(function () {
        $modalContainer.style.display = 'block'

        $modalMessage.innerHTML = message
    }, 500)
}

function closeModalWindow() {
    $modalContainer.style.display = 'none'
}

function endGame() {
    closeModalWindow()
    reloadPage()
}

function reloadPage() {
    document.location.href = ''
}



$modalBlur.addEventListener('click', function () {
    endGame()
})




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





