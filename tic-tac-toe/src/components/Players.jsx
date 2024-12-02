import { useState } from "react"

export default function Player({initialName,symbol,isActive}){

    const [isEditing, setIsEditing] = useState(false);
    const [playerName,setPlayerName] = useState(initialName)

    function handleEditClicked(){
        // setIsEditing(!isEditing) // ==>true
        // setIsEditing(!isEditing) // ==>false We will expect it to be immedeiately set to false so eventually nothing should happen
        //But as react is scheduling the state updates, it does not work as expected. Both lines are scheduling the state update to true
        //This is why this approach is not correct and both isEditing are based on current value of isEditing. This is why no change in behaviour is there.
        
        //Best practice to update/toggle state
        setIsEditing(editing => !editing)

    }    

    function handleChange(event){
        console.log(event.target.value)
        setPlayerName(event.target.value)
    }

    let editablePlayername  = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'
    if (isEditing) {
        editablePlayername  = <input type='text' required defaultValue={playerName} onChange={handleChange}></input>
        btnCaption = 'Save'
    }

    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player" >
        {editablePlayername}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => handleEditClicked()}>{btnCaption}</button>
      </li>
    )
}