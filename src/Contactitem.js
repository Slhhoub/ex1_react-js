import React , {Component} from 'react';


class Contactitem extends Component{

    render(){
        return(
            <tr>
                <th scope="row">{this.props.contact.key}</th>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.phone}</td>
                <td>
                    <button onClick={()=>this.props.removeContact(this.props.contact.name) } style={{cursor:'pointer'}} type="button" className='btn btn-danger '>Remove</button>
                </td>
            </tr>
        )
    }
}

export default Contactitem;