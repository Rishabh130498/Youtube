import React from "react";
import YtClient from "../apis/YtClient";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const Response = await YtClient.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: Response.data.items });
  };

  onVideoSelect = (video) => {
    console.log(video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
