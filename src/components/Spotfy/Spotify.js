
export const authENDPoint = "https://accounts.spotify.com/authorize"; 
const redirecetURI = "http://localhost:3000/";
const clientID = "690801ac14d648fca9cc73d701d92ebd";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((init, item) => {
      let partes = item.split('=');
      init[partes[0]] = decodeURIComponent(partes[1])

      return init;
    }, {})
}

export const loginURL = `${authENDPoint}?client_id=${clientID}&redirect_uri=${redirecetURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
