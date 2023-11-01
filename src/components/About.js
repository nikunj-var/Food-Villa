import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile";
import { Component } from "react";
const About2 = () => {
  return (
    <>
      <h1>About Us Page</h1>
      <p> This is the Namaste React Course.</p>
      <Profile name={"Nikunj"} xyz="nikunj" />
      <ProfileFunctional name={"Nikunj"} />
    </>
  );
};

class About extends Component {
  constructor(props) {
    super(props);

    // initialize your states here
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent component did nount");
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <h1>About Us Page</h1>
        <p> This is the Namaste React Course.</p>
        <Profile name={"First Child"} xyz="nikunj" />
        <Profile name={"Second Child"} xyz="nikunj" />
        {/* <ProfileFunctional name={"Nikunj"} /> */}
      </>
    );
  }
}
export default About;

// Parent Constructur (Render Phase)
// Parent Render (Render Phase)
// First child constructor (Render Phase)
// First child render (Render Phase)
// second child constructor (Render Phase)
// second child render (Render Phase)

// Dom updated

// First child ComponentDidMount
// Second child ComponentDidMount
// Parent ComponentDidMount
