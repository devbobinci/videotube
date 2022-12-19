import axios from "axios";

const KEY = "AIzaSyAiXBJMzZB29vdGlrLM0vRK421yvmES0AE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
