import Profile from "./Profile";
import Signin from "./Signin";
import { Routes, Route, Navigate } from "react-router";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
export default function Account() {
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
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
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

