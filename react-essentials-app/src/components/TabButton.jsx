export default function TabButton({children,onSelect}){
    function handleClick() {
            console.log("Clicked")
    }

    return (
    <li>
        <button onClick={onSelect}>{children}</button>
    </li> )
}