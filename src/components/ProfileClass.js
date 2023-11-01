import React, { Component } from "react";
class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name, " Constructor");
    this.state = {
      count: 0,
      count2: 0,
    };
    this.state = {
      userInfo: {
        name: "Chsmeli",
        location: " CHsmelu",
      },
    };
  }
  async componentDidMount() {
    // API Calls

    console.log(this.props.name, " Component Did Mount");

    const data = await fetch("https://api.github.com/users/nikunj-var");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    const { count } = this.state;
    console.log(this.props.name, " render");
    return (
      <>
        <h1>---Class Based----</h1>
        <h1>Profile Class Component</h1>;<h2>{this.props.name}</h2>
        <h3>{this.props.xyz}</h3>
        <h1>{this.state.count}</h1>
        <h2>{this.state.count2}</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h1>Name : {this.state.userInfo.name}</h1>
        <h1>Location : {this.state.userInfo.location}</h1>
        <button
          onClick={() => {
            this.setState({ count: 1, count2: 2 });
          }}
        >
          SetCount
        </button>
      </>
    );
  }
}

export default Profile;

// parent constructor
// parent render
// child constructor
// child render
// parentdidmount called
// Dom update
// api call
// json is logged in console
// child componentDidMount
// <update cycles>
// re-render
// component did update
