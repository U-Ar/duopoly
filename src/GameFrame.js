import React, { useContext, useEffect } from "react";

import axios from "axios";

import { AppContext } from "./AppProvider";
import { apiConfig } from "./config";

import { Button } from "@mui/material";

export default function GameFrame() {
  const { appState, dispatch } = useContext(AppContext);

  /*
  useEffect(() => {
    const apiUrl = apiConfig.apiURL + "/api/rooms";
    console.log(apiUrl+" にリクエストを出します");
    const response = axios.get(apiUrl);
    if (response.status === 200) {
      console.log("レスポンスが返ってきたのでゲームフレームを表示します");
      console.log(response.data);
    } else {
      alert("リクエストに失敗したのでauth=falseにします");
      console.log(response.data);
      dispatch({
        type: "SET_AUTHENTICATED",
        payload: false
      });
    }
  },[appState.authenticated]);
  */


  const handleOnClickLogout = async () => {
    const logoutUrl = apiConfig.apiURL + "/auth/logout";
    console.log(logoutUrl+" にリクエストを出します");
    const response = await axios.get(logoutUrl);
    if (response.status === 200) {
      alert("正常にログアウトしました");
    } else {
      alert("ログアウトに失敗しました");
    }
    dispatch({
        type: "SET_AUTHENTICATED",
        payload: false
    });
  };

  const handleOnClickApitest = async () => {
    const apiUrl = apiConfig.apiURL + "/api/rooms";
    console.log(apiUrl+" にリクエストを出します");
    const response = await axios.get(apiUrl);
    if (response.status === 200) {
      alert("正常にリクエストが出せました");
      console.log(response.data);
    } else {
      alert("リクエストに失敗しました");
      console.log(response.data);
    }
  };

  return (<div>
    GameFrame
    <Button onClick={handleOnClickApitest}>apitest</Button>
    <Button onClick={handleOnClickLogout}>logout</Button>
  </div>);
}

/*
export default function GameFrame() {
    const { appState, dispatch } = useContext(AppContext);

    const handleOnClickLogout = async () => {
      const logoutUrl = apiConfig.apiURL + "/auth/logout";
      console.log(logoutUrl+" にリクエストを出します");
      const response = await axios.get(logoutUrl);
      if (response.status === 200) {
        alert("正常にログアウトしました");
      } else {
        alert("ログアウトに失敗しました");
      }
      dispatch({
          type: "SET_AUTHENTICATED",
          payload: false
      });
    };

    const handleOnClickApitest = async () => {
      const apiUrl = apiConfig.apiURL + "/api/";
      console.log(apiUrl+" にリクエストを出します");
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        alert("正常にリクエストが出せました");
        console.log(response.data);
      } else {
        alert("リクエストに失敗しました");
      }
    };

    return (<div>
      GameFrame
      <Button onClick={handleOnClickApitest}>apitest</Button>
      <Button onClick={handleOnClickLogout}>logout</Button>
    </div>);
}*/