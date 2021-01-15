import logo from './logo.svg';
import './App.css';
import React from "react";



class App extends React.Component{
  state = {
    fullName : "Ahmed goddi",
    Age : 21,
    Email : "ahmedmouda@gmail.com",
    Address : "Rue othmane Day",
    profession : "intern at GoMyCode",
    image : "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58483.jpg",
    isShow : false,
    isLoding : true,
    
    
  }

  handleShow = () => this.setState({isShow :  !this.state.isShow })

  componentDidMount = () => 
  setInterval(() => {
    this.setState({isLoding : false})
    
  }, 3000);
    

    
    
  









  render(){
    if (this.state.isLoding) {
      return <h1 className="loading"> Loading ........</h1>
      
    }
    return(
    <div>
      
      <button className="toggle" onClick={() => this.handleShow()}> <span> Toggle </span> </button>
      
      {this.state.isShow ?
      (
      <div className="container">
      <img className="avatar" src={this.state.image} />
      <div className='profile'>
      <div className="f1"> FullName : <span className="b1">{this.state.fullName} </span></div>
      <div className="f1"> Age : <span className='b1'>{this.state.Age}</span></div>
      <div className="f1"> Email :<span className="b1"> {this.state.Email}</span></div>
      <div className="f1"> Address : <span className="b1">{this.state.Address}</span></div>
      <div className="f1"> profession : <span className="b1"> {this.state.profession}</span></div> 
      </div>
    </div>
    
      ): null
    
      }
    
    </div>
    )

      
    
    
    
  }

}

export default App;
