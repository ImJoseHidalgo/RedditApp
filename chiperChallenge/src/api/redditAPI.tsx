import axios from "axios";

const redditApi = axios.create({
  baseURL: 'https://api.reddit.com/r/pics',
})

export default redditApi;