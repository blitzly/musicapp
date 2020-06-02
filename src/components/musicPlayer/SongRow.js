import React from 'react';

export default function SongRow(props) {
  // console.log('[SONG ROW][PROPS]', props);
  const song = props;
  const clicked = () => {
    props.setCurrentSong(props.id, song.listNumber - 1);
    // return props.playing === false ? () => props.play() : () => props.pause();
    // if (props.playing === false) {
    //   return () => props.play();
    // } else {
    //   return () => props.pause();
    // }
  };
  return (
    <div className='mp-song-item'>
      <div id='mp-song-item-number' className='text-light'>
        {song.listNumber}
      </div>
      <div id='mp-song-item-title'>
        {song.name} <span className='text-light'>{song.length}</span>
      </div>
      <div id='mp-song-item-play'>
        <i className='fa fa-play' onClick={clicked}></i>
      </div>
    </div>
  );
}
