import React, { Component } from "react";
import axios from "axios";
import RenderUsers from './RenderUsers'
class GetUsers extends Component {
  state = {
    users: [],
    isLoading: true
  };
  componentDidMount = () => {this.getUsers()};

  getUsers = async () => {
    await axios.get("https://api.github.com/search/repositories",{
        params:{
            q:"users"
        }
    }).then(response => {
      this.setState({
        users: response.data,
        isLoading: false
      },()=>this.props.getUserInput(this.state.users));
    });

    
  };

  render() {
    const { users, isLoading } = this.state;

    return (<div><button onClick={this.getUsers}>CLICK</button>{!isLoading ? <RenderUsers users = {users} /> : <p>Loading</p>}</div>);
  }
}

export default GetUsers;
