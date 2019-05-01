import React, {Component} from 'react'
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContexts'
import ColorContext from '../contexts/ColorContext'


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
                    <i className="flag es" onClick={() => this.onLanguageChange('Spanish')}/>
                </div>
                Current Language: {this.state.language}
                <ColorContext.Provider value="purple">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}
export default App