import React, { useContext, useEffect } from "react";

import GameFrame from "./GameFrame";
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";
import { AppContext } from "./AppProvider";
import { getCookie } from "./utils";

import { Container } from "@mui/material";

export default function ContentContainer() {
    const { appState, dispatch } = useContext(AppContext);

    useEffect(() => {
        console.log("ContentContainerのuseEffectが呼び出されました");

        console.log("クッキーの値: "+document.cookie);
        let auth = getCookie(document.cookie,"auth");
        console.log("クッキーのauth値: "+document.cookie);

        if (!auth) {
            if (appState.authenticated)
                dispatch({
                    type: "SET_AUTHENTICATED",
                    payload: false
                });
        } else {
            if (!appState.authenticated)
                dispatch({
                    type: "SET_AUTHENTICATED",
                    payload: true
                });
        }
    });

    return (
        <Container fixed style={{marginTop:"10px"}}>
            <Header/>
            Hello, world!
            {
              appState.authenticated 
              ?
              (<GameFrame></GameFrame>)
              :
              (<Login></Login>)
            }
            <Footer/>
        </Container>
    );
}

