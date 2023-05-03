import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const findErrors = () => {
    const errors = [];

    //check for each field
    if (!email || !password || !passwordConfirm)
      errors.push("All fields must be filled in");
    if ([...email].filter((i) => i === "@").length !== 1) {
      errors.push("An email must have exactly one @ symbol");
    }
    if (password.length > 8)
      errors.push("Password must be at least 8 characters long");
    if (passwordConfirm !== password) errors.push("Passwords must match");

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = findErrors();
    setMessage(errors.length ? errors.join(", ") : "Success! User created");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        required
        type='text'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        required
        minLength={8}
        type='password'
        name='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        required
        type='password'
        name='password-confirm'
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      {message}
      <input type='submit' id='submit' value='Submit' />
    </form>
  );
}
