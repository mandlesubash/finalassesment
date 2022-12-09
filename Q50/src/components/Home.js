import { Component } from "react";
import {Link} from 'react-router-dom'

class Home extends Component{

    render(){
        return(
            <div>
                <h3>Click below button to generate magic number</h3>
                <Link to="/magicnumber"><button 
                //onClick={this.generateNumber}
                >Magic Number</button></Link>
            </div>
        )
    }

}

export default Home;