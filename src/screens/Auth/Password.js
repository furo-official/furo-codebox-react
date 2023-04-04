import React, { useState } from "react";
import styles from "../../styles/form.module.css";
import { hashPlainText } from "../../utils/crypto";
import { login } from "../../api/authAPI";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (!email || !password) {
      return;
    }
    const hashedPassword = await hashPlainText(password);

    try {
      const { code, error } = await login(email, hashedPassword);
      if (error) throw error;
      navigate("/success", { state: code });
    } catch (error) {
      navigate("/fail");
    }
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>로그인</h2>
      <input
        type="email"
        className={styles.input}
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className={styles.input}
        placeholder="비밀번호"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className={styles.btn} onClick={onSubmit}>
        로그인
      </button>
      <span className={styles.text}>
        계정이 없으신가요?{" "}
        <a href="/signup" className={styles.link}>
          회원가입
        </a>
      </span>
    </div>
  );
};

export default Password;
