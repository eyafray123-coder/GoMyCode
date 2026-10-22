import { Component } from "react";
import heroImg from "./assets/hero.png";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "emma Doe",
      bio: "A passionate developer.",
      imgSrc: "public/download (3).jpg",
      profession: "Software Engineer",
    },
    show: false,
    elapsedTime: 0,
  };

  componentDidMount() {
    this.startTime = Date.now();

    this.timer = setInterval(() => {
      this.setState({
        elapsedTime: Math.floor((Date.now() - this.startTime) / 1000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {this.state.show ? "Hide" : "Show"}
        </button>

        {this.state.show && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Hero" width="200" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
