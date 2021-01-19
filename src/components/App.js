import React from "react";
import YtClient from "../apis/YtClient";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  onTermSubmit = async (term) => {
    const Response = await YtClient.get("/search", {
      params: {
        q: term,
      },
    });

    console.log(Response.data.items);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList />
      </div>
    );
  }
}

export default App;
