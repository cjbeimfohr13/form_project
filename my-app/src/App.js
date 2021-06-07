import React, {Component} from "react"

class App extends Component {
  constructor(){
    super()
    this.state={
      firstName:"",
      loading:true,
      person:{}
    }
    this.handleChange=this.handleChange.bind(this)
  }
  componentDidMount(){
    this.setState({loading: true})
    fetch("https://swapi.dev/api/people/")
      .then(response=>response.json())
      .then(data=>
        this.setState({
          loading: false,
          person: data
        }))
  }
  handleChange(event){
    this.setState({
      firstName: event.target.value
    })
  }
  render(){
    return(
      <form>
        <input type="text" placeholder="First Name" onChange={this.handleChange}/>
        <h1>{this.state.firstName}</h1>
      </form>
    )
  }
}


export default App;
