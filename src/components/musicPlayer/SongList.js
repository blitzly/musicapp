import React from 'react';
import SongRow from './SongRow';

export default function SongList(props) {
  // Map through the songs
  const songs = props.songs;
  let i = 0;
  const songNode = songs.map((song) => {
    i++;
    return (
      <SongRow
        key={song.songID}
        listNumber={i}
        id={song.songID}
        name={song.songName}
        file={song.songFile}
        length={song.songLength}
        playing={props.playing}
        play={props.play}
        pause={props.pause}
        setCurrentSong={props.setCurrentSong}
      />
    );
  });
  return <div id='mp-song-list-container'>{songNode}</div>;
}
