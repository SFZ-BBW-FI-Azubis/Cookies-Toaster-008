import React from "react";

function LoginForm({loginHandler}) {
  return (
    <>
      <label id="usernametxt" for="username">
        Benutzername:
      </label>
      <br />
      <input type="text" id="username" name="username" />
      <br />
      <label id="passwordtxt" for="password">
        Password:
      </label>
      <br />
      <input type="password" id="password" name="password" />
      <br />
      <input type="submit" value="Einloggen" id="login-button" />
    </>
  );
}

export default LoginForm;
