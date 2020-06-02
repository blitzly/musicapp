import React from 'react';
import SongInfo from './SongInfo';
import PlayerControls from './PlayerControls';
import SongList from './SongList';

function MusicPlayer(props) {
  const curSong = props.getCurrentSong(props.catId, props.songId);
  // console.log(
  //   '[MUSIC PLAYER] getCurrentSong',
  //   props.getCurrentSong(props.catId, props.songId)
  // );
  // console.log(
  //   '[CURRENT SONG - MUSIC PLAYER]',
  //   props.getCurrentSong(props.songId, props.songs)
  // );
  //THE ERROR COMES FROM THIS VAR: props.songId
  return (
    <div>
      {/* <h2>{props.catName}</h2> */}
      <br />
      <SongInfo
        song={curSong}
        catImageAsSongImage={props.catImageAsSongImage}
        catImage={props.catImage}
      />
      <PlayerControls
        song={curSong}
        action={props.handleControlsClick}
        play={props.playSong}
        pause={props.pauseSong}
        playing={props.playing}
        timer={props.minuteTimer}
      />
      <SongList
        songs={props.songs}
        action={props.handleClick}
        play={props.playSong}
        pause={props.pauseSong}
        playing={props.playing}
        timer={props.minuteTimer}
        setCurrentSong={props.setCurrentSong}
      />
    </div>
  );
}

export default MusicPlayer;
