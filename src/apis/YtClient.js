import axios from "axios";

const KEY = "AIzaSyCJwRzX5eTXDEjGOIpo_l4nMtA6Lx9Blm4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 5,
    type: "video",
  },
});
