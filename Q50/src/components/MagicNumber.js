import { Component } from "react";

class MagicNumber extends Component{

    constructor(){
        super();

        this.state={
            number:0
        }
    }

    componentDidMount= ()=>{
        const ranNumber = Math.floor(Math.random()*10+1);
        console.log(ranNumber);

        this.setState(
            {number:ranNumber}
        )
    }

    render(){
        return(
            <div>
                <h1>Magic Number: {this.state.number}</h1>
            </div>
        )
    }

}

export default MagicNumber;