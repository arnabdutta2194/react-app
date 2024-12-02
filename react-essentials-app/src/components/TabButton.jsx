export default function TabButton({children,onSelect,isSelected}){
    function handleClick() {
            console.log("Clicked")
    }

    return (
    <li>
        <button className={isSelected ? 'active' : null} onClick={onSelect}>{children}</button> 
    </li> )
}