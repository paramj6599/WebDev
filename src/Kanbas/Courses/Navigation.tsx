import { Link, useLocation, useParams } from "react-router-dom";
// import { courses } from "../Database";
export default function CoursesNavigation() {
    const { cid } = useParams();
    // const course = courses.find((course) => course._id === cid);
    const {pathname} = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const course_link = `/Kanbas/Courses/${cid}/`;
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link key={course_link + link} to={course_link + link} className={`list-group-item border border-0
                ${pathname.includes(link) ? "active" : "text-danger"}`}>
                    {link}
                </Link>
            ))}
           
        </div>
    );
}