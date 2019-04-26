import React, {Component} from 'react'
import LanguageContext from '../contexts/LanguageContexts'

 class Button extends Component{
    static contextType = LanguageContext

     render(){
         console.log(this.context)
         return (
             <div className=" ui button primary">
                Submit
             </div>
         )
     }
 }

 export default Button