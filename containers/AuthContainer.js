import React, { useState } from "react";
import { useRouter, Router } from "next/router";
import Auth from "../components/Auth";
import axios from "../config/axios";
import sendNotification from "../config/notification";
import * as ENDPOINTS from "../config/endpoints";
import { setCookie } from "../config/cookies";

const extractContinueUrl = (router) => {
  const { continueUrl } = router.query;
  return continueUrl;
};

export default function AuthContainer(props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const addTokensToCookies = (sessionId, idToken) => {
    setCookie("sessionId", sessionId);
    setCookie("idToken", idToken);
  };
  const onSignUp = async ({ username: email, password, firstName, lastName }, isSignUp) => {
    setLoading(true);
    const payload = { email, password, firstName, lastName };
    try {
      const signUpResponse = await axios.post(
        isSignUp ? ENDPOINTS.SIGNUP : ENDPOINTS.LOGIN,
        payload
      );
      if (!isSignUp) {
        const { sessionId } = signUpResponse.data;
        const { IdToken: idToken } = signUpResponse?.data?.tokens;
        addTokensToCookies(sessionId, idToken);
      }
      sendNotification({
        message: "Signup successful",
        description: `Sign up is successful. Please check your email to confirm yourself.`,
      });
      window.location.href = extractContinueUrl(router);
      setLoading(false);
    } catch (error) {
      console.log("Error is...", error);
      setLoading(false);
      sendNotification({
        message: "Signup failed",
        description: `Some error has occurred while signing up. Please try again later.`,
      });
    }
  };
  return <Auth loading={loading} onSignUp={onSignUp} />;
}
