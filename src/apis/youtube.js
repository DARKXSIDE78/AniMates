import axios from "axios";

const KEY = "AIzaSyA2tAFHnhA1Cgfdeg3AgCuzlUxOrpFLIBY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 10,
  },
});
