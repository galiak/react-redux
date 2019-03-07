import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'sweet home alabama',
      duration: '2:30'
    },
    {
      title: 'layla',
      duration: '4:05'
    },
    {
      title: 'smoke on the water',
      duration: '3:15'
    },
    {
      title: 'i will survive',
      duration: '1:45'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});