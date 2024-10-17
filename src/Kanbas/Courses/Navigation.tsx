import React from "react";
import { Link, useParams, useLocation, } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Retrieve the current course's ID
  const location = useLocation(); // Retrieve the current pathname
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`;
        const isActive = location.pathname === path;

        return (
          <Link
            key={link}
            to={path}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}