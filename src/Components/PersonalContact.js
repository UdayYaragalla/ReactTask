import React, { Component } from "react";
import '../Styles/PersonalContact.css'
import myIcon from '../Images/circle.png'
import OptionalInfo from "./OptionalInfo";

class PersonalContact extends Component{
    constructor(props){
        super(props)
        this.state={
            isVisible : false
        }
    }

    handleOptionalInfo = () =>{
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }))
    }

    render(){
        const { isVisible } = this.state;
        return(
            <form className="personalContact">
                <table>
                    <tr>
                    <td className="label"> <label>First Name</label></td>
                    <td className="input"><input type='text'/></td>
                    </tr>
                    <tr>
                    <td className="label"> <label>Last Name</label></td>
                    <td className="input"><input type='text'/></td>
                    </tr>
                    <tr>
                    <td className="label"> <label>Phone Number</label></td>
                    <td className="input"><input type='tel'/></td>
                    </tr>
                    <tr>
                    <td className="label"> <label>Email-ID</label></td>
                    <td className="input"><input type='email'/></td>
                    </tr>
                </table>
                <div className="optionalInfoContainer">
                    <div className="infoBtn">
                        <img onClick={this.handleOptionalInfo} ref={myIcon} alt="Plus Icon"/>
                        <div>OPTIONAL INFORMATION</div>
                    </div>
                </div>
                <div className="Optional">
                    {isVisible ? <OptionalInfo/> : null}
                </div>
            </form>
        )
    }
}

export default PersonalContact