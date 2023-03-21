import { MdOutlineFingerprint } from "react-icons/md";
import { Link } from "react-router-dom";
import MainStyle from "./MainStyle.module.css";

function Main() {
  function handleClick(e) {
    window.location.href = "/login";
  }
  return (
    <div>
      <div>
        <Link to="/main">
          <MdOutlineFingerprint className={MainStyle.icon} />
        </Link>
      </div>
      <div className={MainStyle.main}>
        <span className={MainStyle.value}>Notivation</span>
        <span className={MainStyle.value_2}>
          Note + Motivation = Notivation
        </span>
        <p className={MainStyle.key}>
          Tempor magna velit culpa magna eu aute anim minim anim fugiat. Ea
          dolor amet nostrud eu in labore. Excepteur enim irure ex mollit. Id
          labore cupidatat labore est aliqua occaecat aliquip labore elit
          nostrud elit culpa. Anim laboris pariatur id eiusmod proident fugiat
          ea nulla. Commodo sint et cillum nulla laboris culpa. Non et Lorem
          consequat dolor elit excepteur pariatur. Consectetur deserunt pariatur
          minim eu excepteur sit enim consectetur duis proident quis laborum
          consequat ea. Laboris ex culpa aute sint officia sunt nisi fugiat
          voluptate ut. Occaecat culpa non elit occaecat aliqua sunt laboris
          Lorem adipisicing irure sunt officia ut qui. Deserunt pariatur
          occaecat elit aliqua quis elit mollit cillum esse sit esse voluptate.
          Nisi quis ad commodo voluptate velit do cupidatat voluptate
          adipisicing. Culpa fugiat sit nulla consectetur elit officia labore ut
          officia.
        </p>
        <div>
          <button className={MainStyle.button} onClick={handleClick}>
            L o g i n
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
