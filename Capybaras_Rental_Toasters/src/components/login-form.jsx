import React from "react";

function LoginForm() {
  return (
    <>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <br />
      <input type="submit" value="Submit" id="login-button" />
    </>
  );
}

export default LoginForm;
