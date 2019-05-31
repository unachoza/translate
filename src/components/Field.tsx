import React, {Component} from 'react'
import LanguageContext from '../contexts/LanguageContexts'

class Field extends Component{
    static contextType = LanguageContext

    render(){
        const text = this.context === 'english' ? 'Name' : 'Nombre'

        console.log('from field',text)
        return (
            <div className="ui form">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}
export default Field