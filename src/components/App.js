import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

export default App;
