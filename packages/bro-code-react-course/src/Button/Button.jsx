function Button(){
    const style = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    const buttonTextContent = "Click me 😊"

    let count = 1

    const handleClick = (e) => {
    e.target.textContent = `Clicked times: ${count++}`
    }


    return (<button style={style} onClick={(e) => handleClick(e)}>{buttonTextContent}</button>)
}

export default Button
