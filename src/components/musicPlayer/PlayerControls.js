import React from 'react';

export default function PlayerControls(props) {
  const song = props.song;
  return (
    <div id='mp-player-container'>
      <div id='mp-controls' style={{ textAlign: 'right' }}>
        <div>
          <i
            className='fa fa-fast-backward'
            id='backward'
            onClick={() => props.action('backward')}
          ></i>
        </div>
      </div>

      <div id='mp-song-play-btn-container'>
        <div id='mp-play-btn'>
          <i
            className={
              props.playing === false
                ? 'fa fa-play-circle fa-2x'
                : 'fa fa-pause-circle fa-2x'
            }
            onClick={
              props.playing === false ? () => props.play() : () => props.pause()
            }
          ></i>
        </div>
        <div id='mp-timer'>
          {props.timer} / {song.songLength}
        </div>
      </div>

      <div id='mp-controls' style={{ textAlign: 'left' }}>
        <div>
          <i
            className='fa fa-fast-forward'
            id='forward'
            onClick={() => props.action('forward')}
          ></i>
        </div>
      </div>
    </div>
  );
}
