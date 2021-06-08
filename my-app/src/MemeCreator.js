import React, {Component} from "react"

class MemeCreator extends Component {
    constructor(){
      super()
      this.state={
        topText:"",
        bottomText:"",
        randomImg:"http://i.imgflip.com/1bij.jpg",
        allMemeImgs:[]
      }
      this.handleChange=this.handleChange.bind(this)
      
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response=>response.json())
            .then(response=>{
                const {memes}= response.data
                this.setState({
                    allMemeImgs:memes
                })
            })
        
     
    }
    handleChange(event){
        const {name, value}= event.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit(){

    }
    render(){
        return(
            <div>
            <form>
                <input name="topText" placeholder="Top Text" value={this.state.topText} type="text" onChange={this.handleChange()}/>
                <input name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} type="text" onChange={this.handleChange()}/>
                <button>SUBMIT</button>
            </form>
           </div>
        )
    }
}
export default MemeCreator
