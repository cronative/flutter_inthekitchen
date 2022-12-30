import React, { useState } from "react";
import { useLoginFormValidator } from "./validation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import clsx from "clsx";

import styles from "./login.css";
const Login = props => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = e => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="container">
        <div className="form-box">
        <label className="formLabel"><h1>Login</h1></label>
    <form className="form" onSubmit={onSubmitForm}>
      <div className="formGroup">
        <label className="formLabel">Email</label>
        <input
          className={clsx(
            "formInputField",
            errors.email.dirty && errors.email.error && styles.formFieldError
          )}
          type="text"
          placeholder="admin@gmail.com"
          name="email"
          value={form.email}
          onChange={onUpdateField}
          onBlur={onBlurField}
        />
        {/* {errors.email.dirty && errors.email.error ? (
          <p className={styles.formFieldErrorMessage}>{errors.email.message}</p>
        ) : null} */}
      </div>
      <div className="formGroup">
        <label className="formLabel"> <FontAwesomeIcon icon={["fal", "coffee"]} />Password</label>
        <input
          className={clsx(
           "formInputField",
            errors.password.dirty &&
              errors.password.error &&
              styles.formFieldError
          )}
          type="password"
          placeholder="******"
          name="password"
          value={form.password}
          onChange={onUpdateField}
          onBlur={onBlurField}
        />
        {/* {errors.password.dirty && errors.password.error ? (
          <p className={styles.formFieldErrorMessage}>
            {errors.password.message}
          </p>
        ) : null} */}
      </div>
      <div className={styles.formActions}>
        <button className="loginBtn" type="submit">
          Login
        </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Login;