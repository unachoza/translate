import React, {Component} from 'react'
import LanguageContext from '../contexts/LanguageContexts'
import ColorContext from '../contexts/ColorContext'

 class Button extends Component{

   renderSubmit(value:string){
      return value === "English" ? "Submit" : "Enviar"
   }

   renderButton(color: string){
      return(
         <button className={ `ui button ${color}` }>
            <LanguageContext.Consumer>
               { value => this.renderSubmit(value) }
            </LanguageContext.Consumer>
         </button>
      )
   }

     render(){
         return (
            <ColorContext.Consumer>
               { color => this.renderButton(color) }
             </ColorContext.Consumer>  
         )
     }
 }

 export default Button