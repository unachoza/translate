import React, {Component} from 'react'
import LanguageContext from '../contexts/LanguageContexts'


class Field extends Component{
    static contextType = LanguageContext


    render(){
    const text:string = this.context 

        return (
            <div className="ui form">
             <LanguageContext.Consumer>
               {value => value === "English" ? "Name" : "Nombre" }
            </LanguageContext.Consumer>
                <input />
            </div>
        )
    }
}
export default Field