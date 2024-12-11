import Child from "./Child";


export default function Parent(){
    let name="Gaurav";
    let age=21;
    let classSubject="React";
    return(
        <div>
            <Child name={name} age={age} classSubject={classSubject}/>
        </div>
    )
}