import React, {Component} from 'react'
import LanguageContext from '../contexts/LanguageContexts'

 class Button extends Component{
    static contextType = LanguageContext

     render(){

         const text = (this.context) ; {
            switch( this.context ){
                case "english":
                   return "Submit" 
                case "spanish":
                   return 'Enviar'
                case "swedish":
                   return 'Lämna'
                case "french":
                   return 'Soumettre'
            }
            console.log(text)
         }
         
         return (
             <div className=" ui button primary">
                {text(this.context)}  
             </div>
         )
     }
 }

 export default Button