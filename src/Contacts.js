import React , {Component} from 'react';
import Contactitem from './Contactitem';
import AddContact from './AddContact';

class Contacts extends Component{


    constructor(){
        super()
        this.state={
            contacts:[
                {
                    key:1,
                    name:'salah',
                    phone:'5466465655',
                },
                {
                    key:2,
                    name:'khalid',
                    phone:'2154852855',
                },
                {
                    key:3,
                    name:'omar',
                    phone:'2251236542',
                }
            ]
        }
    }

    addContact = (contact) =>{
        let updatedContact = this.state.contacts;
        updatedContact.push(contact);
        this.setState({contacts:updatedContact});
       
    }

    removeContact = (name) =>{
        let oldContact = this.state.contacts;
       let updatedContact = oldContact.filter((contact)=> contact.name !== name);
        this.setState({contacts:updatedContact});
       
    }


    render(){
        return(
            <div className='container'>
                 <AddContact  addContact={this.addContact}/>
                <div className="row my-5">
                    <div className=" mx-auto table-responsive">
                        <p className='card p-2 text-center fs-4 fw-lighter text-primary'>Affiche les information contact </p>
                            <table className='table  text-center table-bordered shadow p-5 mb-5 bg-body rounded'>
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">nom & prenom</th>
                                    <th scope="col">telephone</th>
                                    <th scope="col">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.contacts.map((contact,index)=>(
                                        <Contactitem key={index} removeContact={this.removeContact}  contact={contact}/>
                                    ))}
                                    
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        )
    }
}



export default Contacts;



