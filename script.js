const cells = document.querySelectorAll('.cell');
const playerTurn = document.querySelector('h1');
const restartButton = document.querySelector('button')
let currentPlayer = "X";
const squares = []
squares.fill(null)
const winningPossibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', () =>{
        playerTurn.innerHTML = `${currentPlayer}'s Turn`
        if(cells[i].innerHTML != ""){
            cells[i].style.pointerEvents = "none"
        }else{
            currentPlayer = currentPlayer === "X"? "O": "X"
            squares[i] = currentPlayer
            cells[i].innerHTML = currentPlayer
        }
        for(let i = 0; i < winningPossibilities.length; i++){
            const [a,b,c] = winningPossibilities[i]
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                playerTurn.innerHTML = `${squares[a]} Wins!`
                cells.forEach(item => item.style.pointerEvents = 'none')
                restartButton.classList.add('active')
            }
        }
    })
}

restartButton.addEventListener('click', () =>{
    window.location.reload()
})