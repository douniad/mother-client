import React from 'react'
import './App.css'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import LoginForm from '../LoginForm/LoginForm'

class App extends Component {

    render() {
        return <div>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
        </div>
    }


}

export default App;
