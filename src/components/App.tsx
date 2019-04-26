import React, {Component} from 'react'
import UserCreate from './UserCreate';


interface MyState {
    language?: string
}

class App extends Component<MyState>{
    state = { language: 'english'}

    onLanguageChange = (language: string) => {
        this.setState({language})
    }
       render(){
        return(
            <div className="ui container">
                <div>
                    Select a language :
                    <br></br>  
                    <i className="flag us" onClick={() => this.onLanguageChange('English')}/>
                    <i className="flag fr" onClick={() => this.onLanguageChange('French')}/>
                    <i className="flag es" onClick={() => this.onLanguageChange('Spanish')}/>
                    <i className="flag se" onClick={() => this.onLanguageChange('Swedish')}/>
                </div>
                Current Language: {this.state.language}
                <UserCreate />
            </div>
        )
    }
}
export default App