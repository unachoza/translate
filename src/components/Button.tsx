import React, {Component} from 'react'
import LanguageContext from '../contexts/LanguageContexts'
import ColorContext from '../contexts/ColorContext'

 class Button extends Component{
   static contextType = LanguageContext

   renderButton(color: string){
      return(
         <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
               {value => value === "English" ? "Submit" : "Enviar" }
            </LanguageContext.Consumer>
         </button>
      )
   }

     render(){
          
         
         return (
            <ColorContext.Consumer>
               { color => this.renderButton("color")}
             </ColorContext.Consumer>  
         )
     }
 }

 export default Button