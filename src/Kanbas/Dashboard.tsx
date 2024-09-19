import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/React.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/Azure.jpeg" width={200} />
            <div>
              <h5>
                 CS6666 Azure
              </h5>
              <p className="wd-dashboard-course-title">
                Cloud Computing
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">  
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/AWS.jpeg" width={200} />
            <div>
              <h5>
                 CS3456 AWS
              </h5>
              <p className="wd-dashboard-course-title">
                Cloud Computing
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">  
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/python.jpeg" width={200} />
            <div>
              <h5>
                 CS6576 Python
              </h5>
              <p className="wd-dashboard-course-title">
                Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">  
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/Java.jpeg" width={200} />
            <div>
              <h5>
                 CS4674 Java
              </h5>
              <p className="wd-dashboard-course-title">
                Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">  
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/SQL.jpeg" width={200} />
            <div>
              <h5>
                 CS6736 SQL
              </h5>
              <p className="wd-dashboard-course-title">
                Database Management
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">  
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/download (1).jpeg" width={200} />
            <div>
              <h5>
                 CS6500 Machine Learning
              </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">  
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="images/NLP.png" width={200} />
            <div>
              <h5>
                 CS8788 Natural Language Processing
              </h5>
              <p className="wd-dashboard-course-title">
               Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

