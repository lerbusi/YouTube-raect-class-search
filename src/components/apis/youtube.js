import axios from "axios";

const KEY = "AIzaSyB8hNOi1TrJk6EvQHu_Wd-_3P6n0AosQTI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
