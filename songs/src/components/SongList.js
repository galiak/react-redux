import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongList extends React.Component {
  renderList() {
    // this.props === {songs: state.songs}

    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div className="ui divided list">{this.renderList()}</div>
    );
  }
};

// state --> all the data in the redux store
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    songs: state.songs
  };
}

// the connect function automatically calls the dispatch function
// so - to call action creators from within a component, pass it in to the connect function
export default connect(mapStateToProps, {selectSong})(SongList);
