import React , {Component} from 'react';


class AddContact extends Component{

    constructor(props){
        super(props)
        this.state={
            name:'',
            phone:'',
        }
    }

    submitForm=(event) => {
        event.preventDefault();
        const contact ={
            name:this.state.name,
            phone: this.state.phone,
        }
        this.props.addContact(contact);
        this.setState({name:'',phone:''});
    }

    render(){
        return(
            <div className="row">
                    <div className="col-md-8 mx-auto">
                    <div className='card p-3 my-5 shadow-sm p-4 mb-5 bg-body rounded'>
                            <p className='text-center text-primary fs-2 fw-lighter'>Add Contact</p> 
                            <form method='post' onSubmit={(event)=> this.submitForm(event)}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">name & prenom</label>
                                    <input name='name' value={this.state.name} onChange={(event)=> this.setState({name:event.target.value})} type="text" className="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">telephone</label>
                                    <input name='phone' value={this.state.phone} onChange={(event)=> this.setState({phone:event.target.value})} type="text" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary rounded-pill">valider</button>
                            </form>
                    </div>
                    </div>
                </div>
          
        )
    }
}

export default AddContact;