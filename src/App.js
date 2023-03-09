import React , {Component} from 'react';
import AddContact from './AddContact';
import Contacts from './Contacts';


class App extends Component{
    render(){
        return(
            <div className='container'>
               

                <Contacts/>
                
            </div>
            

        )
    }
}

export default App;