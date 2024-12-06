import Password from "./Password";
import Username from "./Username";
import SubmitBtn from "./SubmitBtn";

export function FinalForm(){
    return(
        <div>
            <Username/>
            <Password/>
            <SubmitBtn/>
        </div>
    )
}