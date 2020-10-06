import axios from "axios";

const KEY = "AIzaSyCsi2tKA90CMvqTuFu7HkpIeuqUAtBtTSE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 5,
  },
});
