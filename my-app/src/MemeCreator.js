import React, {Component} from "react"

class MemeCreator extends Component {
    constructor(){
      super()
      this.state={
        topText:"",
        bottomText:"",
        randomImg:"http://i.imgflip.com/1bij.jpg"
      }
      
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response=>response.json())
            .then()
        
     
    }
    handleChange(){
     
    }
    render(){
        return(
            <h1>Hey!</h1>
        )
    }
}
export default MemeCreator
