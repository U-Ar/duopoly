import React, { useContext } from "react";

import axios from "axios";

import { AppContext } from "./AppProvider";
import { apiConfig } from "./config";

import GoogleLoginButton from "./buttons/GoogleLoginButton";
import TwitterLoginButton from "./buttons/TwitterLoginButton";
import GithubLoginButton from "./buttons/GithubLoginButton";

import { Button } from "@mui/material";

export default function Login() {
    const { appState, dispatch } = useContext(AppContext);

    const handleOnClickLogin = (provider) => 
        async () => {
            const loginUrl = apiConfig.apiURL + "/auth/login/"+provider;
            console.log(loginUrl+" にリクエストを出します");
            const response = await axios.get(loginUrl);
            if (response.status === 201) {
                alert("正常にリダイレクト先をもらいました");
                console.log(response);
                console.log("URL:" ,response.headers["location"]);
                window.location.href = response.headers["location"];
            } else {
                alert("リダイレクト先をもらえませんでした");
            }
        };
    

    return (<div>
        <GoogleLoginButton onClick={handleOnClickLogin("google")}/>
        <TwitterLoginButton onClick={handleOnClickLogin("twitter")}/>
        <GithubLoginButton onClick={handleOnClickLogin("github")}/>
    </div>);

    /*
    return (<div>
      <Button onClick={handleOnClickLoginGoogle}>Google</Button>
      <Button>Twitter</Button>
      <Button>GitHub</Button>
    </div>);
    */
}