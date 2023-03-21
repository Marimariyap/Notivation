import { useRef, useState, useEffect } from "react";
import ProfileStyle from "./ProfileStyle.module.css";

const User = {
  name: "마리마리얍",
  name1: "뿌슝뿌슝얍",
};

function Profile() {
  const [imgFile, setImgFile] = useState("");
  const [id, setId] = useState("");
  const [idValid, setIdValid] = useState("");
  const [notAllow, setNotAllow] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^[가-힣a-zA-Z]{4,20}$/;
    if (regex.test(id)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  useEffect(() => {
    if (idValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid]);

  function handleClick(e) {
    if (id === User.name && id === User.name1) {
      alert(
        "The nickname is the same nickname. Please use a different nickname."
      );
    } else if (id !== User.name) {
      alert("Welcome " + id + "!");
      window.location.href = "/empty_page";
    }
  }

  return (
    <div>
      <div className={ProfileStyle.wel}>Welcome to Notivation</div>
      <div className={ProfileStyle.come}>
        Would you like to introduce yourself?
      </div>
      <div
        className={ProfileStyle.profile}
        style={{ background: "url(./hello.png)" }}
      >
        <img
          className={ProfileStyle.proimg}
          src={imgFile ? imgFile : `/images/icon/user.png`}
        />
      </div>

      <div>
        <input
          className={ProfileStyle.file}
          type="file"
          accept="image/*"
          id="profileImg"
          onChange={saveImgFile}
          ref={imgRef}
        />
        <label htmlFor="profileImg">
          <div className={ProfileStyle.file_but}>Upload a picture</div>
        </label>
      </div>
      <div className={ProfileStyle.nick}>What nickname would you like?</div>
      <input
        className={ProfileStyle.name}
        value={id}
        onChange={handleId}
        type="text"
        placeholder="Please enter the nickname you want to use."
      />
      <div className={ProfileStyle.error}>
        {!idValid && id.length > 0 && <div>NickName is not valid</div>}
      </div>
      <button
        disabled={notAllow}
        className={ProfileStyle.start}
        onClick={handleClick}
      >
        Start
      </button>
    </div>
  );
}

export default Profile;
