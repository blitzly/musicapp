import React, { Component } from 'react';
import MusicPlayer from './MusicPlayer';
import SongCategory from './SongCategory';
import './MusicPlayer.scss';

class Songs extends Component {
  state = {
    categories: [
      {
        id: 1,
        name: 'Elvis',
        songs: [
          {
            songID: 1,
            songName: 'Stuck On You',
            songArtist: 'Elvis Presley/Cover by Luis Aldrey',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/stuck_on_you.mp3',
            songDescription: '',
            songImg: '',
            songLength: '02:27',
          },
          {
            songID: 20,
            songName: "It's Now Or Never",
            songArtist: 'Elvis Presley',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/its_now_or_never.mp3',
            songDescription: '',
            songImg: '',
            songLength: '03:11',
          },
          {
            songID: 3,
            songName: 'Let Me Be Your Teddy Bear',
            songArtist: 'Elvis Presley',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/let_me_be_your_teddy_bear.mp3',
            songDescription: '',
            songImg: '',
            songLength: '01:51',
          },
        ],
        image: 'img/mp-category-elvis.jpg',
      },
      {
        id: 2,
        name: 'Pop Rock Music',
        songs: [
          {
            songID: 201,
            songName: 'Crazy Little Thing Called Love',
            songArtist: 'Queen',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/crazy_little_thing_called_love.mp3',
            songDescription: '',
            songImg: '',
            songLength: '02:39',
          },
          {
            songID: 202,
            songName: 'The Letter',
            songArtist: 'The Box Tops',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/the_letter.mp3',
            songDescription: '',
            songImg: '',
            songLength: '02:09',
          },
          {
            songID: 203,
            songName: 'It Never Rains In Southern California',
            songArtist: 'Albert Hammond',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/it_never_rains_in_southern_california.mp3',
            songDescription: '',
            songImg: '',
            songLength: '03:59',
          },
        ],
        image: 'img/classic_rock.png',
      },
      {
        id: 3,
        name: 'Classic Country',
        songs: [
          {
            songID: 301,
            songName: 'Is Anyone Going To San Antone',
            songArtist: 'Charlie Pride',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/is_anyone_going_to_san_antone.mp3',
            songDescription: '',
            songImg: '',
            songLength: '02:29',
          },
          {
            songID: 302,
            songName: 'Ring of Fire',
            songArtist: 'Johnny Cash',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/ring_of_fire.mp3',
            songDescription: '',
            songImg: '',
            songLength: '02:38',
          },
          {
            songID: 303,
            songName: 'Another Somebody Done Somebody Wrong Song',
            songArtist: 'BJ Thomas',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/another_somebody_done_somebody_wrong_song.mp3',
            songDescription: '',
            songImg: '',
            songLength: '03:25',
          },
        ],
        image: 'img/classic-country.jpg',
      },
      {
        id: 4,
        name: 'Latin Music',
        songs: [
          {
            songID: 401,
            songName: 'Amorcito Corazon',
            songArtist: 'Popular Latin Music',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/amorcito_corazon.mp3',
            songDescription: '',
            songImg:
              'httpss://d31wxntiwn0x96.cloudfront.net/rzgade/productimages/1634.jpg',
            songLength: '03:01',
          },
          {
            songID: 402,
            songName: 'Somos Novios',
            songArtist: 'Armando Manzanero',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/somos_novios.mp3',
            songDescription: '',
            songImg: '',
            songLength: '03:09',
          },
          {
            songID: 403,
            songName: 'Besame Mucho',
            songArtist: 'Andrea Bocelli',
            songFile:
              'https://www.luisaldreymusic.com/assets/songs/besame_mucho.mp3',
            songDescription: '',
            songImg: '',
            songLength: '04:03',
          },
        ],
        image: 'img/latino-int-music.jpg',
      },
    ],
    curCategoryId: 1,
    curSongId: 1,
    arrIndex: 0,
    playing: false,
    timer: 0,
    minuteTimer: '00:00',
  };

  intervalID = 0;
  audio = null;

  componentDidMount() {
    this.audio = new Audio(
      this.getCurrentSong(
        this.state.curCategoryId,
        this.state.curSongId
      ).songFile
    );
  }

  handleControlsClick = (action) => {
    let nextArrIndex = this.state.arrIndex + 1;
    let prevArrIndex = this.state.arrIndex - 1;

    const arrSong = this.getCatSongs();

    switch (action) {
      case 'forward':
        if (nextArrIndex <= arrSong.length - 1) {
          this.setCurrentSong(arrSong[nextArrIndex].songID, nextArrIndex);
        }
        break;

      case 'backward':
        if (prevArrIndex >= 0) {
          this.setCurrentSong(arrSong[prevArrIndex].songID, prevArrIndex);
        }
        break;

      default:
    }
  };

  getCurrentSong = (catId, songId) => {
    const arrSong = this.state.categories
      .filter((cat) => cat.id === catId)[0]
      .songs.filter((song) => song.songID === songId);
    // console.log('[GET CURRENT SONG]', arrSong);
    return arrSong[0];
  };

  setCurrentSong = (songId, arrayIndex) => {
    this.pauseSong();
    this.setState({
      curSongId: songId,
      arrIndex: arrayIndex,
      timer: 0,
      minuteTimer: '00:00',
    });
    this.audio = new Audio(
      this.getCurrentSong(this.state.curCategoryId, songId).songFile
    );
    // if (this.state.playing) this.playSong();
    this.playSong();
  };

  getCurrentCat = (catId) => {
    const arrCat = this.state.categories.filter((cat) => cat.id === catId)[0];
    return arrCat;
  };

  getCatSongs = () => {
    return this.state.categories.filter(
      (cat) => cat.id === this.state.curCategoryId
    )[0].songs;
  };

  playSong = () => {
    this.setState({
      playing: true,
      audio: this.audio.play(),
    });

    this.intervalID = setInterval(this.timer.bind(this), 1000);
  };

  pauseSong = () => {
    this.setState({
      playing: false,
      audio: this.audio.pause(),
    });
    clearInterval(this.intervalID);
  };

  timer() {
    const ms = this.getCurrentSong(
      this.state.curCategoryId,
      this.state.curSongId
    ).songLength; // your input string
    const a = ms.split(':'); // split it at the colons
    const songLength = +a[0] * 60 + +a[1];
    const nextTime = this.state.timer + 1;
    if (nextTime <= songLength) {
      const minutes = Math.floor(nextTime / 60);
      const seconds = nextTime - minutes * 60;
      const finalTime =
        this.str_pad_left(minutes, '0', 2) +
        ':' +
        this.str_pad_left(seconds, '0', 2);
      this.setState({
        timer: nextTime,
        minuteTimer: finalTime,
      });
    } else {
      clearInterval(this.intervalID);
      this.setState({
        timer: 0,
        minuteTimer: '00:00',
      });
    }
  }

  str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  onClickCategory = (catId, catName = '') => {
    const filteredSongs = this.state.categories
      .filter((category) => {
        return category.id === catId;
      })
      .map((song) => {
        return song.songs;
      });

    this.pauseSong();
    this.setState({
      curCategoryId: catId,
      arrIndex: 0,
      curSongId:
        filteredSongs[0][0] !== 'undefined'
          ? filteredSongs[0][0]['songID']
          : undefined,
    });
    this.audio = new Audio(filteredSongs[0][0]['songFile']);
    this.setState({
      timer: 0,
      minuteTimer: '00:00',
    });
    if (this.state.playing) this.playSong();
  };

  getCatValue(value) {
    return this.state.categories.filter(
      (cat) => cat.id === this.state.curCategoryId
    )[0][value];
  }
  render() {
    let musicPlayer = (
      <MusicPlayer
        catId={this.state.curCategoryId}
        catName={this.getCatValue('name')}
        catImage={this.getCatValue('image')}
        songId={this.state.curSongId}
        songs={this.getCatValue('songs')}
        getCurrentSong={(curCatId, curSongId) =>
          this.getCurrentSong(curCatId, curSongId)
        }
        setCurrentSong={(songId, songFile, arrayIndex) =>
          this.setCurrentSong(songId, songFile, arrayIndex)
        }
        handleControlsClick={(action) => this.handleControlsClick(action)}
        playSong={() => this.playSong()}
        pauseSong={() => this.pauseSong()}
        playing={this.state.playing}
        minuteTimer={this.state.minuteTimer}
        catImageAsSongImage
      />
    );
    // if (this.state.curCategorySongs.length === 0) {
    //   musicPlayer = <h3>No songs for this category</h3>;
    // }
    return (
        <section className='songs'>
            <div className="container">
                <div className='music-player-container'>
                    <div className='categories'>
                        <SongCategory
                        categories={this.state.categories}
                        clicked={this.onClickCategory}
                        />
                    </div>
                    <div className='music-player'>{musicPlayer}</div>
                </div>
            </div>
        </section>
    );
  }
}

export default Songs;
