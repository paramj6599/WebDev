import Profile from "./Profile";
import Signin from "./Signin";
import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

import Signup from "./Signup";
import AccountNavigation from "./Navigation";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-screen">
      <h2>Account</h2>
      <h3> Name :- Param Rajesh Joshi</h3>
      <h4> Section: 2</h4>
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
      <Routes>
        <Route path="/" element={<Navigate to={currentUser ? "/Kanbas/Account/Profile" : "Kanbas/Account/Signin" }/>} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      </td>
        </tr>
      </table>

    </div>
  );
}

