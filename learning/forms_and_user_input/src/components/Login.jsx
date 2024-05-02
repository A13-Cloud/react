import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import useInput from "../hooks/useInput.js";

export default function Login() {
  const {
    value: enteredEmail,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailIsInvalid
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: enteredPassword,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordIsInvalid
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit (event) {
    event.preventDefault();

    if (emailIsInvalid || passwordIsInvalid) {
      console.log("Error !");
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailIsInvalid && "Please enter a valid mail."}
          value={enteredEmail}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordIsInvalid && "Please enter a valid password."}
          value={enteredPassword}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
        />
      </div>
      
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
