import Child1 from './Child1'

export default function Parent1(){
    
    const receiveData=(value)=>{
        console.log("Data Coming From Child To Parent",value);
    }
    return(
        <div>
            <Child1 sendData={receiveData}/>
        </div>
    )
}