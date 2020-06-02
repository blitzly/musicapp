import React from 'react';

export default function SongInfo(props) {
  const song = props.song;
  // console.log('[SONG_INFO] song array: ', song);
  const songImage = props.catImageAsSongImage ? props.catImage : song.songImg;
  return (
    <div id='mp-header-container'>
      <div id='mp-cat-img'>
        <img src={songImage} alt='Elvis' />
      </div>
      <div id='mp-cat-details'>
        <div id='mp-cat-title'>
          <h3>{song.songName}</h3>
        </div>
        <div id='mp-cat-artist'>
          <h4>{song.songArtist}</h4>
        </div>
        <div id='mp-cat-share'>
          <i className='fa fa-share-alt'></i> Share
        </div>
        {/* <div id='mp-cat-info'>{song.songDescription}</div> */}
      </div>
    </div>
  );
}
