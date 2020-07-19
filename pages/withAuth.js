import React, { useEffect } from "react";
import cookies from "next-cookies";
import { useRouter, Router } from "next/router";
import { getCookie } from "../config/cookies";

const withAuth = (Component) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { isAuth } = props;
    useEffect(() => {
      if (!props.isAuth) {
        window.location.href = `${window.location.origin}/auth?continueUrl=${
          window.location.origin + router.route
        }`;
      }
    }, [isAuth]);
    // eslint-disable-next-line react/jsx-props-no-spreading
    return isAuth ? <Component {...props} /> : "";
  };
  Wrapper.getInitialProps = async (ctx) => {
    const { req } = ctx;
    const { idToken } = cookies(ctx);
    const { sessionId } = cookies(ctx);
    if (!sessionId || !idToken) {
      return {
        isAuth: false,
        sessionId: req.headers.cookie,
        idToken,
      };
    }
    return {
      isAuth: true,
    };
  };
  return Wrapper;
};
export default withAuth;
