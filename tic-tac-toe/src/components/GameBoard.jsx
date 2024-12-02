import { useState } from "react"
const initialGameBoard = [[null,null,null],[null,null,null],[null,null,null]]

export default function GameBoard({onSelectSquare, activePlayerSymbol}){
const [gameBoard,setGameBoard] = useState(initialGameBoard)
function handleSelectedSquare(rowIndex,colIndex){
setGameBoard((prevGameBoard) => {
    const updatedBorard = [...prevGameBoard.map(innerArray => [...innerArray])] //Creating a new nested array object in memory
    updatedBorard[rowIndex][colIndex] =activePlayerSymbol
    return updatedBorard
})
onSelectSquare()
}
return <ol id ="game-board">
    {gameBoard.map((row,rowIndex) => (
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => 
                    (<li key={colIndex}><button onClick={() => handleSelectedSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>
        ))}
            </ol>
        </li>
    ))}
</ol>
}
