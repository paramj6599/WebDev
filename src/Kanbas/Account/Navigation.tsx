<<<<<<< Updated upstream
import { Link } from "react-router-dom";
=======
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
    const { pathname } = useLocation();
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    const acc_links = ["Signin", "Signup", "Profile"];
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"]
>>>>>>> Stashed changes

export default function AccountNavigation()
{
    return (
<<<<<<< Updated upstream
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link to={'/Kanbas/Account/Signin'} className="list-group-item active border border-0">Signin</Link>          
            <Link to={'/Kanbas/Account/Signup'} className="list-group-item text-danger border border-0">Signup</Link>   
            <Link to={'/Kanbas/Account/Profile'} className="list-group-item text-danger  border border-0">Profile</Link>                   
            
=======
        <div id="wd-account-navigation" style={{marginTop:"10px"}} className="wd list-group fs-5 rounded-0">
            {acc_links.map((acc_link) => (
                <Link key={`/Kanbas/Account/${acc_link}`} to={`/Kanbas/Account/${acc_link}`} className={`list-group-item border border-0
                ${pathname.includes(acc_link) ? "active" : "text-danger"}`}>
                    {acc_link}
                </Link>
            ))}
            {currentUser && currentUser.role === "ADMIN" && (
                <Link to={`/Kanbas/Account/Users`} className={`list-group-item border-0 border-white ${active("Users")}`}> Users </Link>
            )}
>>>>>>> Stashed changes
        </div>




    );
}