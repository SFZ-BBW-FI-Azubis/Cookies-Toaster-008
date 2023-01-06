import React, { useRef } from "react";

function LoginForm({ loginHandler }) {
  // { loginHandler } = destructuring
  const usernameRef = useRef(""); // useRef = wenn der wert verändert wird, findet kein rerendering statt
  const passwordRef = useRef("");

  function btnLogin() {
    loginHandler(usernameRef.current.value, passwordRef.current.value);
  }

  return (
    <>
      <section id="LoginForm">
        <label id="usernametxt" htmlFor="username">
          Benutzername:
        </label>
        <br />
        <input type="text" id="username" name="username" ref={usernameRef} />
        <br />
        <label id="passwordtxt" htmlFor="password">
          Password:
        </label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
        />
        <br />
        <input
          type="submit"
          value="Einloggen"
          id="button"
          onClick={btnLogin}
        />
      </section>
    </>
  );
}

export default LoginForm;
