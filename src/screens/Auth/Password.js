import React from "react";
import styles from "../../styles/form.module.css";

const Password = () => {
  return (
    <div>
      <form className={styles.container}>
        <h2 className={styles.title}>로그인</h2>
        <input type="email" className={styles.input} placeholder="이메일" />
        <input
          type="password"
          className={styles.input}
          placeholder="비밀번호"
        />
        <button type="submit" className={styles.btn}>
          로그인
        </button>
        <span className={styles.text}>
          계정이 없으신가요?{" "}
          <a href="/signup" className={styles.link}>
            회원가입
          </a>
        </span>
      </form>
    </div>
  );
};

export default Password;
