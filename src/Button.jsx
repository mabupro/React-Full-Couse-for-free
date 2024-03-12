
function Button() {

    const styles = {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
    }

    const handleClick = () => {
        console.log("OUCH!")
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`)
    }

    let count = 0
    const handleClick3 = (name) => {
        if (count < 3) {
            count++
            console.log(`${name} you clicked me ${count} tome/s`)
        } else {
            console.log(`${name} stop clicking me`)
        }
    }

    const handleClick4 = (e) => {
        console.log(e)
        e.target.textContent = "OUCH! 🤧"
    }

    return (
        <div className={styles}>
            <button onClick={handleClick}>Click me🥺</button>
            {/* 引数がある時、アロー関数にしないとリロード後すぐに実行されてしまう */}
            {/* <button onClick={handleClick2("Bro code")}>Click me🥺</button> */}
            <button onClick={() => handleClick2("Bro code")}>Click me🥺</button>
            <button onClick={() => handleClick3("Bro code")}>Click me🥺</button>
            <button onClick={(e) => handleClick4(e)}>Click me🥺</button>
        </div>
    )
}
export default Button