import React, { useState } from "react";
import styles from "../../styles/form.module.css";
import { hashPlainText } from "../../utils/crypto";
import { signup } from "../../api/furoAPI";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState(false);

  const onSubmit = async () => {
    if (!email || !password) {
      return;
    }
    const hashedPassword = await hashPlainText(password);
    const { response, error } = await signup(email, hashedPassword);
    console.log(response);
  };

  const confirmPassword = (pwd) => {
    setWarning(password !== pwd);
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>회원가입</h2>
      <input
        id="email"
        name="email"
        type="email"
        className={styles.input}
        placeholder="이메일"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="password"
        name="password"
        type="password"
        className={styles.input}
        placeholder="비밀번호"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        id="password-confirm"
        name="password-confirm"
        type="password"
        className={styles.input}
        placeholder="비밀번호 확인"
        onChange={(e) => confirmPassword(e.target.value)}
        required
      />
      {warning && (
        <span className={styles.warning}>비밀번호가 일치하지 않습니다.</span>
      )}
      <button className={styles.btn} onClick={onSubmit}>
        회원가입
      </button>
      <span className={styles.text}>
        이미 계정이 있으신가요?{" "}
        <a href="/" className={styles.link}>
          로그인
        </a>
      </span>
    </div>
  );
};

export default Signup;
