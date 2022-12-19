import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("funny cats");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="max-w-7xl mx-auto">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="mt-5 px-2">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-2/3">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="w-full md:w-1/3">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
