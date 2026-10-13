import React, { Component } from 'react'


export default class Login extends Component {  
  nameInput = React.createRef();
  emailInput = React.createRef();

    
  handleSubmit = (e) => {
    e.preventDefault(); 
    const nameValue = this.nameInput.current.value;
    const emailValue = this.emailInput.current.value;
    this.props.onLoginSuccess(nameValue); 
    this.props.onLoginSuccessEmail(emailValue); 
    this.props.closeLogin(); 
  }
  componentDidMount() {

  }

  

  render() {
    return (
      <div className='container' style={{
        width: "320px",
        height: "350px", 
        backgroundColor: "gray",
        padding: "25px",
        borderRadius: "8px",
        position: "relative"
      }}>
        <span 
          style={{ position: "absolute", top: "5px", right: "15px", cursor: "pointer", fontSize: "20px", color: "white" }}
          onClick={this.props.closeLogin}
        >
          &times;
        </span>
        <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-white">Name</label>
                <input type="name" className="form-control" id="exampleInputName" required ref={this.nameInput} maxLength={"20"} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" required ref={this.emailInput} maxLength={"50"} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-white" >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" required autoComplete="current-password"  />
            </div>
            <center><button type="submit" className="btn btn-primary my-3" >Submit</button></center>
        </form>
      </div>
    )
  }
}
