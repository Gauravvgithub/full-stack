

export default function Child1({sendData}){
    const dataTransfer=()=>{
        sendData("Hello World")
    }
    return(
        <div>
            <button onClick={dataTransfer}>Click Me to Send Data to Parent</button>
        </div>

    )
}