import React, { useState, useMemo, useEffect, useCallback } from "react";
import moment from "moment";
import axios from "axios";
import { envConfig } from "@/configs";
import { useLocalStorage } from "../context/localstoragecontext";
import { userStorageKey } from "../helpers/storage";
import { useNavigate } from "react-router-dom";

const apiUrl = envConfig.api.url;

// create context
export const authcontext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isLoaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const setLocalStorage = useLocalStorage(userStorageKey)[1];

  const refreshTokens = useCallback(() => {
    return axios
      .post(`${apiUrl}/v1/auth/refresh-tokens`, {})
      .then((response) => {
        setAccessToken(response.data.token);
        setUser(response.data.user);
        return response;
      })
      .catch((error) => {
        setUser(null);
        setAccessToken(null);
        return error;
      });
  }, []);

  const startSilentRefresh = useCallback(() => {
    if (accessToken) {
      const tokenExpires = moment(accessToken.expires);
      const tokenMaxAge = tokenExpires.diff(moment().add(1, "minutes"));
      setTimeout(() => {
        refreshTokens();
      }, tokenMaxAge);
    }
  }, [accessToken, refreshTokens]);

  const syncLogout = (event) => {
    if (event.key === "logout") {
      setAccessToken(null);
      setUser(null);
    }
  };

  useEffect(() => {
    const interceptorId = axios.interceptors.request.use(
      (config) => {
        config.withCredentials = true;
        config.credentials = "include";
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(interceptorId);
    };
  }, [accessToken]);

  useEffect(() => {
    refreshTokens().then((response) => {
      setLoaded(true);
    });
  }, [refreshTokens]);

  useEffect(() => {
    startSilentRefresh();
  }, [accessToken, startSilentRefresh]);

  useEffect(() => {
    window.addEventListener("storage", syncLogout);
    return function cleanup() {
      window.removeEventListener("storage", syncLogout);
    };
  }, []);

  const value = useMemo(() => {
    const register = (user) => {
      return axios.post(`${apiUrl}/v1/auth/register`, user).then((response) => {
        console.log(response.data);
        setAccessToken(response.data.token);
        setUser(response.data.user);
        startSilentRefresh();
        setLocalStorage(response.data.user);
        navigate("/dashboard/home");
      });
    };

    const login = (email, password) => {
      return axios
        .post(`${apiUrl}/v1/auth/login`, {
          email: email,
          password: password,
        })
        .then((response) => {

          setAccessToken(response.data.token.token);
          setUser(response.data.user);
          startSilentRefresh();
          setLocalStorage(response.data.user);
          navigate("/dashboard/home");
        });
    };

    const logout = () => {
      setAccessToken(null);
      setUser(null);
      return axios
        .post(`${apiUrl}/v1/auth/logout`, {})
        .then((response) => {
          window.localStorage.setItem("logout", moment());
        })
        .catch((err) => {});
    };

    const forgotPassword = (email) => {
      return axios.post(`${apiUrl}/v1/auth/forgot-password`, {
        email: email,
      });
    };

    const resetPassword = (password, resetToken) => {
      return axios.post(
        `${apiUrl}/v1/auth/reset-password?token=${resetToken}`,
        {
          password: password,
        }
      );
    };

    const verifyEmail = (emailVerificationToken) => {
      return axios.post(
        `${apiUrl}/v1/auth/verify-email?token=${emailVerificationToken}`,
        {}
      );
    };

    const isConnectedToHubspot = () => {
      if (user.hubspotToken && user.hubspotToken.token_type) {
        return true;
      } else return false;
    };

    const isSubscriptionActive = () => {
      if (user.subscription && user.subscription.subscriptionType != "free") {
        return true;
      } else return false;
    };

    const isOptionalIPActive = () => {
      if (user.subscription && user.subscription.subscriptionType != "free") {
        console.log(user.optionalAddOnSubscriptions);
        if (user.optionalAddOnSubscriptions) {
          for (let i = 0; i < user.optionalAddOnSubscriptions.length; i++) {
            if (
              user.optionalAddOnSubscriptions[i].subscriptionType == "option_ip"
            ) {
              return true;
            }
          }
        }
      }
      return false;
    };

    return {
      user,
      setUser,
      register,
      login,
      logout,
      forgotPassword,
      resetPassword,
      verifyEmail,
      isConnectedToHubspot,
      isSubscriptionActive,
      isOptionalIPActive,
    };
  }, [user, startSilentRefresh]);

  return <authcontext.Provider value={value}>{children}</authcontext.Provider>;
};
