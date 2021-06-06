import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deposit,
  withdraw,
  collectInterest,
  deleteAccount,
  toggleAccount,
} from "../actions/bankingActions";
const Banking = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const handleDeposit = () => {
    dispatch(deposit(amount));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(amount));
  };
  const handleCollectInterest = () => {
    dispatch(collectInterest());
  };
  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
  };
  const handleAccountChange = () => {
    dispatch(toggleAccount());
  };

  return (
    <div className="form-group">
      <input
        onChange={(e) => setAmount(e.target.value)}
        type="text"
        className="form-control"
      />
      <button onClick={handleDeposit} className="btn btn-success">
        Deposit
      </button>
      <button onClick={handleWithdraw} className="btn btn-primary">
        withdraw
      </button>
      <button onClick={handleCollectInterest} className="btn btn-warning">
        collect Interest
      </button>
      <button onClick={handleDeleteAccount} className="btn btn-danger">
        Delete Account{" "}
      </button>
      <button onClick={handleAccountChange} className="btn btn-secondary">
        change Account type{" "}
      </button>
    </div>
  );
};
//ACTIONS WE NEEED
// const deposit = {
//   type: "DEPOSIT",
//   amount: 20,
// };
// const withdraw = {
//   type: "WITHDRAW",
//   amount: 10,
// };
// const collectInterest = {
//   type: "COLLECT_INTEREST",
// };
// const deleteAccount = {
//   type: "DELETE_ACCOUNT",
// };
export default Banking;
