import React, {Component} from 'react'


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
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
                </div>
                {this.state.language}
            </div>
        )
    }
}
export default App