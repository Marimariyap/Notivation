import { useEffect, useState } from "react";
import SignupStyle from "./SignupStyle.module.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsChatFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const User = {
  email: "react3215@naver.com",
  pw: "1BM4-5TY6-QC21-Z8PJ",
  name: "마리마리얍",
};

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{18,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickconfirmBut = () => {
    if (email === User.email && pw === User.pw) {
      alert("Welcome " + User.name + "!");
      window.location.href = "/profile";
    } else if (email === User.email) {
      alert("The code number does not match. Please check again.");
    }
  };

  const onClickSend = () => {
    alert("The code has been sent to that email");
  };

  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]);

  return (
    <div>
      <div>
        <h3>
          <p className={SignupStyle.title}>
            <b>Sign Up</b>
          </p>
        </h3>
      </div>

      <div>
        <input
          className={SignupStyle.email}
          value={email}
          onChange={handleEmail}
          type="text"
          id="email"
          placeholder="Sign Up by Email"
        />
        <div className={SignupStyle.error}>
          {!emailValid && email.length > 0 && <div>Email is not valid</div>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className={SignupStyle.send}
          onClick={onClickSend}
        >
          Send code
        </button>

        <input
          value={pw}
          onChange={handlePw}
          type="text"
          id="password"
          className={SignupStyle.pw}
          placeholder="Enter Code"
          disabled={notAllow}
        />
        <div className={SignupStyle.error}>
          {!pwValid && pw.length > 0 && (
            <div>
              Please enter 19 characters including alphabet, number, and '-'.
            </div>
          )}
        </div>

        <button
          onClick={onClickconfirmBut}
          type="submit"
          className={SignupStyle.check}
        >
          Sign Up
        </button>

        <div className={SignupStyle.line}></div>

        <div className={SignupStyle.but_1}>
          <button
            className={SignupStyle.google}
            onClick={() => window.open("https://google.co.kr")}
          >
            <AiFillGoogleCircle />
          </button>
        </div>

        <div>
          <button
            className={SignupStyle.kakao}
            onClick={() => window.open("https://kakaocorp.com")}
          >
            <BsChatFill />
          </button>
        </div>
        <div className={SignupStyle.box2}>
          <Link to="/profile" className={SignupStyle.link}>
            Already have an account? Login!
          </Link>
        </div>
      </div>
    </div>
  );
}
