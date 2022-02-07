import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import { getTokenFromURL } from "./components/Spotfy/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useSpotifyValues } from "./Context/SpotifyProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useSpotifyValues();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
      spotify.getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          })
        });

      spotify.getPlaylist()
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          })
        });
    } 
  }, [])

  return (
   <div className="App"> 
    {token ? <Player spotify={spotify} /> : <Login />}  
   </div>
  );
}

export default App;
