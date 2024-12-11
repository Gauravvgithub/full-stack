import { Component } from "react";
import Username from "./Username";
import Password from "./Password";
import SubmitBtn from "./SubmitButton";

export default class FinalForm extends Component{
    render(){
        return(
            <div>
                <Username></Username>
                <Password/>
                <SubmitBtn/>
            </div>
        )
    }
}