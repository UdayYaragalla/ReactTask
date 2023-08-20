import React, { Component } from "react"
import '../Styles/PersonalContact.css'

class OptionalInfo extends Component{
    constructor(props){
        super(props)
        this.state={
            isVisible : false
        }
    }
    render(){
        return(
                <form className="OptionalForm">
                    <table>
                        <tr>
                        <td className="label"> <label>Address</label></td>
                        <td className="input"><input type='text'/></td>
                        </tr>
                        <tr>
                        <td className="label"> <label>City State Zip</label></td>
                        <td className="input"><input type='text'/></td>
                        </tr>
                        <tr>
                        <td className="label"> <label>2nd Phone Number</label></td>
                        <td className="input"><input type='tel'/></td>
                        </tr>
                        <tr>
                        <td className="label"> <label>Job Title</label></td>
                        <td className="input"><input type='text'/></td>
                        </tr>
                        <tr>
                        <td className="label"> <label>Department</label></td>
                        <td className="input"><input type='text'/></td>
                        </tr>
                        <tr>
                        <td className="label"> <label>Relationship</label></td>
                        <td className="input" onClick={this.handleRelationship}><input type='text'/></td>
                        </tr>
                    </table>
                 </form>
        )
    }
}
export default OptionalInfo