import React, { useState } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addNewAccount } from "../../redux/usersSlice";
import { useNavigate } from "react-router-dom";
import "./AddAccount.css";

const AddAcount = () => {
  const user = useSelector((state) => state.users.loggedInUser);
  const [accountName, setAccountName] = useState("");
  const [amount, setAmmount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addAccount = (e) => {
    e.preventDefault();
    dispatch(
      addNewAccount({
        accountName: accountName,
        amount: Number(amount),
      }),
    );
    navigate("/dashboard");
  };
  return (
    <>
      <Header />
      <div className="add_account_container">
        <div className="add_account_wrapper">
          <h1>Add New Account</h1>
          <p>Create a new account to manage your finances</p>
          <form className="add_account_form" onSubmit={addAccount}>
            <div className="form_group_add">
              <label>Account Name</label>
              <input
                type="text"
                placeholder="e.g Savings"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                required
              />
            </div>

            <div className="form_group_add">
              <label>Initial Amount</label>
              <input
                type="number"
                placeholder="e.g 20000"
                value={amount}
                onChange={(e) => setAmmount(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="add_account_btn">
              Add Account
            </button>
          </form>
          <div className="add_account_back_link">
            <p
              style={{ margin: 0, fontSize: "13px", color: "var(--gray-600)" }}
            >
              <a href="/dashboard">← Back to Dashboard</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAcount;
