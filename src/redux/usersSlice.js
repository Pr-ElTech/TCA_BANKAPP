import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    signedUpUsers: [],
    loggedInUser: null,
  },
  reducers: {
    transferFunds: (state, action) => {
      const {
        userID,
        senderAccountID,
        recipientAccountNumber,
        reciepientID,
        amount,
        memo,
      } = action.payload;
      const sender = state.signedUpUsers.find((users) => users.id === userID);
      // console.log(sender)
      const senderAccount = sender.accounts.find(
        (account) => account.id === senderAccountID,
      );

      if (senderAccount.balance > amount) {
        // console.log(sender)
        senderAccount.balance -= amount;
        state.loggedInUser.balance -= amount;
        const recipient = state.signedUpUsers.find(
          (user) => user.id === reciepientID,
        );
        const recipientAccount = recipient.accounts.find(
          (account) => account.accountNumber === recipientAccountNumber,
        );
        recipientAccount.balance += amount;
        sender.transactions.push({
          id: sender.transactions.length + 1,
          type: "debit",
          amount: amount,
          memo: memo,
          date: new Date().toISOString(),
        });

        state.loggedInUser.transactions.push({
          id: sender.transactions.length + 1,
          type: "debit",
          amount: amount,
          memo: memo,
          date: new Date().toISOString(),
        });
        recipient.transactions.push({
          id: recipient.transactions.length + 1,
          type: "credit",
          amount: amount,
          memo: memo,
          date: new Date().toISOString(),
        });
        toast.success("Funds transferred successfully");
        return state;
      } else {
        toast.error("Insufficient balance");
        return state;
      }
    },
    signUp: (state, action) => {
      const newUser = action.payload;
      state.signedUpUsers.push(newUser);
    },
    logIn: (state, action) => {
      const { email, password } = action.payload;
      const user = state.signedUpUsers.find(
        (user) => user.email === email && user.password === password,
      );
      if (user) {
        state.loggedInUser = user;
        toast.success("Login successful");
      } else {
        toast.error("Invalid email or password");
      }
    },
    logOut: (state) => {
      state.loggedInUser = null;
      toast.success("Logged out successfully");
    },
    deleteAccount: (state, action) => {
      const userID = action.payload;
      const userIndex = state.signedUpUsers.findIndex(
        (user) => user.id === userID,
      );
      if (userIndex !== -1) {
        state.signedUpUsers.splice(userIndex, 1);
        toast.success("Account deleted successfully");
      }
    },
    addNewAccount: (state, action) => {
      const { accountName, amount } = action.payload;
      const userId = state.loggedInUser.id;
      const user = state.signedUpUsers.find((user) => user.id === userId);
      const userAccounts = user.accounts;
      const amountAllowable = user.amountAllowable;

      if (!amountAllowable) {
        const balance = userAccounts[0].balance;
        const allowableValue = 500000 - balance;

        if (amount < allowableValue) {
          userAccounts.push({
            id: userAccounts.length + 1,
            accountNumber: `ACC${Math.floor(100000 + Math.random() * 900000)}`,
            accountName: accountName,
            balance: amount,
          });

          user.amountAllowable = 500000 - (allowableValue + amount);
        } else {
          toast.error(`Your allowed amount is ${allowableValue}`);
        }
      } else if (amount < amountAllowable) {
        userAccounts.push({
          id: userAccounts.length + 1,
          accountNumber: `ACC${Math.floor(100000 + Math.random() * 900000)}`,
          accountName: accountName,
          balance: amount,
        });
      } else {
        toast.error(`Your allowed amount is ${amountAllowable}`);
      }
    },
  },
});

export const {
  transferFunds,
  signUp,
  logIn,
  logOut,
  deleteAccount,
  addNewAccount,
} = usersSlice.actions;
export default usersSlice.reducer;
