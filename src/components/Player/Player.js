
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import "./Player.css";

function Player({ spotify }) {
  return(
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Main spotify={spotify} />
      </div>
      <Footer />
    </div>
  )
}

export default Player;