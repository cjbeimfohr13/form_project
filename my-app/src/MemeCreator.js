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
      this.handleSubmit= this.handleSubmit.bind(this)
      
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
        const {name, value} = event.target
        this.setState({[name]:value})
    }
    handleSubmit(event){
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randomNum].url
        this.setState({ randomImg: randMemeImg})
    }
   
    render(){
        return(
            <div>
            <form className="" onSubmit={this.handleSubmit}>
                <input name="topText" placeholder="Top Text" value={this.state.topText} type="text" onChange={this.handleChange}/>
                <input name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} type="text" onChange={this.handleChange}/>
                <button onSubmit={this.handleSubmit}>NEW PIC</button>
            </form>
            <div className="">
                <img src={this.state.randomImg} alt=""/>
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
           </div>
        )
    }
}
export default MemeCreator
