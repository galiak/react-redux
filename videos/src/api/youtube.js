import axios from 'axios';

const KEY = 'AIzaSyBqllHapJwGCfLD2c54KB3U38q1aU1k_ug';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video', //to filter out videos without videoId
    maxReasults: 5,
    key: KEY
  }
});
