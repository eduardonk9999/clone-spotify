import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import { useSpotifyValues } from "../../Context/SpotifyProvider";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";

function Main({ spotify }) {
const [{ playlists }, dispatch] = useSpotifyValues();
/*
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
*/
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <div className="body_infoText">
          <h2>Public Playlists</h2>
        </div>
      </div>

      <div className="body_songs">
        
       <div className="boxsItens">
        {
            playlists?.items?.map(playlist => (
              <div className="BoxPlayList">
                <img src={playlist.images[0].url} alt="" />
                <h2>{playlist.name}</h2>
              </div>
            ))
          }
       </div>
        
      </div>
    </div>
  );
}

export default Main;