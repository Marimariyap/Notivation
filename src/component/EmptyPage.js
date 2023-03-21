import React, { useState } from "react";
import EmptyPageStyle from "./EmptyPageStyle.module.css";
import { MdPlaylistAdd } from "react-icons/md";

function Article(props) {
  return (
    <article className={EmptyPageStyle.main}>
      <h2 className={EmptyPageStyle.h2}>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id} className={EmptyPageStyle.lis}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol className={EmptyPageStyle.ol}>{lis}</ol>
    </nav>
  );
}

function Create(props) {
  return (
    <article>
      <h2>작성해주세요</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="제목"
            className={EmptyPageStyle.title}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="내용"
            className={EmptyPageStyle.value}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="작성완료"></input>
        </p>
      </form>
    </article>
  );
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>수정하기</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            className={EmptyPageStyle.title}
            type="text"
            name="title"
            placeholder="제목"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            className={EmptyPageStyle.value}
            name="body"
            placeholder="내용"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />
        </p>
        <p>
          <input type="submit" value="수정완료"></input>
        </p>
      </form>
    </article>
  );
}

function EmptyPage() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(2);
  const [topics, setTopics] = useState([
    { id: 0, title: "", body: "" },
    { id: 1, title: "빈페이지", body: "만들어보세요" },
  ]);

  let content = null;
  let contextControl = null;

  if (mode === "WELCOME") {
    content = <Article title="빈페이지" body="목록 만들기" />;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
    contextControl = (
      <>
        <li className={EmptyPageStyle.li}>
          <button
            className={EmptyPageStyle.toggle}
            href={"/update/" + id}
            onClick={(event) => {
              event.preventDefault();
              setMode("UPDATE");
            }}
          >
            수정하기
          </button>
        </li>
        <li className={EmptyPageStyle.li}>
          <input
            className={EmptyPageStyle.toggle}
            type="button"
            value="삭제하기"
            onClick={() => {
              const newTopics = [];
              const Del = window.confirm("삭제하겠습니까?");

              if (Del) {
                for (var i = 0; i < topics.length; i++) {
                  if (topics[i].id !== id) {
                    newTopics.push(topics[i]);
                  }
                }
                setTopics(newTopics);
                setMode("WELCOME");
              }
            }}
          />
        </li>
      </>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const newTopics = [...topics];
          const updatedTopic = { id: id, title: title, body: body };

          for (var i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode("READ");
        }}
      />
    );
  }
  return (
    <div>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      {content}
      <ul>
        <li className={EmptyPageStyle.li}>
          <button
            className={`${EmptyPageStyle.to} ${EmptyPageStyle.button}`}
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            <MdPlaylistAdd className={EmptyPageStyle.icon} />
          </button>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default EmptyPage;
