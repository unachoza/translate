import React, {Component} from 'react'
import LanguageContext from '../contexts/LanguageContexts'
import ColorContext from '../contexts/ColorContext'

 class Button extends Component{
   //  static contextType = LanguageContext

     render(){
         // console.log(this.context)
         // const text = this.context === 'english'? 'Submit' : 'Enviar'
         // const text = (this.context) ; {
         //    switch( this.context ){
         //        case "english":
         //           return "Submit" 
         //        case "spanish":
         //           return 'Enviar'
         //        case "swedish":
         //           return 'Lämna'
         //        case "french":
         //           return 'Soumettre'
         //    }
         //    console.log(text)
         // }
         
         return (
            <ColorContext.Consumer>
               {(color: string) => 
               <button className={`ui button ${color}`}>
               <LanguageContext.Consumer>
                  {(value) => value === "english" ? "Submit" : "Enviar" }
               </LanguageContext.Consumer>
               </button>
               }
               
             </ColorContext.Consumer>  
         )
     }
 }

 export default Button