
export default function Tab({children,buttons,ButtonsContainer= "menu"}){
    // const ButtonContainer = buttonsContainer //Here ButtonContainer is used as custom component using the value of ButtonContainer
    //In this we we can send some container/custom components etc
    return(
    <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {children}
    </>
    )
}