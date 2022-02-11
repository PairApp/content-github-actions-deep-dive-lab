import React, { Component } from "react";
import AboutModal from "../components/AboutModal";
import './index.css'

class IndexPage extends Component {
  state = {
    modal: false,
  };

  selectModal = (info) => {
    this.setState({ modal: !this.state.modal }); // true/false toggle
  };

  render() {
    return (
      <div className="landing">
        <div className="videoContainer">
          <div className="overlay"></div>
          <div>
            <button onClick={this.selectModal}>about</button>
           
          </div>
          
          <div className="login">
            {/* <Login
              postUser={this.props.postUser}
              setCurrentUser={this.props.setCurrentUser}
              users={this.props.users}
            /> */}
          </div>
          
          <h1 className="title">
            Welcome 
          </h1>

          <p className="description">
            Join The Waiting List!
            <br />
            <input type="text"></input>
            <br />
            <button style={{backgroundColor: 'grey'}}>Submit</button>
          </p>
          <div className="about">
  
            <AboutModal
              displayModal={this.state.modal}
              closeModal={this.selectModal}
            />
          </div>
          
          <div className="logo">
            {/* <center><img src='http://cdn.shopify.com/s/files/1/0484/9460/8550/files/Pairup_logo2_1200x1200.png?v=1605598534' alt="logo" /></center> */}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;



