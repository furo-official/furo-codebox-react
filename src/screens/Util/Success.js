import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authenticate } from "../../api/authAPI";
import { getUserInfo } from "../../api/userAPI";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "../../styles/util.module.css";

const Success = () => {
  const { state: code } = useLocation();
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [result, setResult] = useState("Success");
  const navigate = useNavigate();

  const fetchTokens = async () => {
    const response = await authenticate(code);
    setAccessToken(response.accessToken);
    fetchUserInfo(response.accessToken);
  };

  const fetchUserInfo = async (accessToken) => {
    const response = await getUserInfo(accessToken);
    setUserInfo(response.user);
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <AiFillCheckCircle size={50} color="#52C41A" />
        <h2 className={styles.success}>{result}</h2>
        <p className={styles.text}>
          {result === "Success"
            ? "로그인에 성공했습니다."
            : "로그인에 실패했습니다."}
        </p>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Email</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userInfo?.email}</td>
            <td>{result}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Success;
