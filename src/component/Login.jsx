import { useEffect, useState } from "react";
import LoginStyle from "./LoginStyle.module.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsChatFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const User = {
  email: "react3215@naver.com",
  pw: "1BM4-5TY6-QC21-Z8PJ",
  name: "마리마리얍",
};

export default function Login() {
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

  const onClickSend = () => {
    alert("The code has been sent to that email");
  };

  const onClickconfirmBut = () => {
    if (email === User.email && pw === User.pw) {
      alert("Welcome " + User.name + "!");
      window.location.href = "/empty_page";
    } else if (email === User.email) {
      alert("The code number does not match. Please check again.");
    } else {
      alert("Who is it?");
    }
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
          <p className={LoginStyle.title}>
            <b>Login</b>
          </p>
        </h3>
      </div>

      <div>
        <input
          className={LoginStyle.email}
          value={email}
          onChange={handleEmail}
          type="text"
          id="email"
          placeholder="Login by Email"
        />
        <div className={LoginStyle.error}>
          {!emailValid && email.length > 0 && <div>Email is not valid</div>}
        </div>
      </div>

      <div>
        <button type="submit" className={LoginStyle.send} onClick={onClickSend}>
          Send code
        </button>

        <input
          value={pw}
          onChange={handlePw}
          type="text"
          id="password"
          className={LoginStyle.pw}
          placeholder="Enter Code"
          disabled={notAllow}
        />
        <div className={LoginStyle.error}>
          {!pwValid && pw.length > 0 && (
            <div>
              Please enter 19 characters including alphabet, number, and '-'.
            </div>
          )}
        </div>

        <button
          onClick={onClickconfirmBut}
          type="submit"
          className={LoginStyle.check}
        >
          Login
        </button>

        <div className={LoginStyle.line}></div>

        <div className={LoginStyle.but_1}>
          <button
            className={LoginStyle.google}
            onClick={() => window.open("https://google.co.kr")}
          >
            <AiFillGoogleCircle />
          </button>
        </div>

        <div>
          <button
            className={LoginStyle.kakao}
            onClick={() => window.open("https://kakaocorp.com")}
          >
            <BsChatFill />
          </button>
        </div>
        <div className={LoginStyle.box1}>
          <Link to="/sign_up" className={LoginStyle.link}>
            Forgot password?
          </Link>
        </div>
        <div className={LoginStyle.box2}>
          <Link to="/sign_up" className={LoginStyle.link}>
            Don’t have an account? Sign up!
          </Link>
        </div>
      </div>
    </div>
  );
}
