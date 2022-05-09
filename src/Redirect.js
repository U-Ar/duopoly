import React, { useContext, useEffect } from "react";

import Loading from "./Loading";
import { AppContext } from "./AppProvider";

import axios from "axios";

import { apiConfig } from "./config";



export default function Redirect() {
    const { appState, dispatch } = useContext(AppContext);

    

    useEffect(() => {
        axios
        .get(apiConfig.apiURL + "/api/rooms")
        .then(response => {
            console.log("api/rooms からのレスポンス");
            console.log(response);
            if (response.status===200) {
                console.log("レスポンスが返ってきたのでゲームフレームを表示します");
                console.log(response.data);
                dispatch({
                    type: "SET_AUTHENTICATED",
                    payload: true
                });
                window.location.href = "/";
            } else {
                dispatch({
                    type: "SET_AUTHENTICATED",
                    payload: false
                });
                window.location.href = "/";
            }
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: "SET_AUTHENTICATED",
                payload: false
            });
            window.location.href = "/";
        });
    }, [appState, dispatch]);

    return (<Loading/>);
}