
export default function Child(props){
    // console.log("coming from parent to child",props);
    
    return(
        <div>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{props.classSubject}</h2>
        </div>
    )
}