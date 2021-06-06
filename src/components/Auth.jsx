import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleAuth } from "../actions/bankingActions";
const Auth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const handleAuth = () => {
    dispatch(toggleAuth());
  };
  return (
    <div>
      <button onClick={handleAuth} className="btn btn-info">
        {isLoggedIn ? "Logout" : "login"}
      </button>
    </div>
  );
};

export default Auth;
