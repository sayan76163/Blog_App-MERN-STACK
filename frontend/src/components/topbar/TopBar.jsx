import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="thoughts"><h1>Ready to write your thoughts....
      </h1>
      </div>
      <div className="topCenter">
        <div className="topList">
          <h3 className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </h3>
         
          <h3 className="topListItem">
            <Link className="link" to="/login">
             MY POSTS
            </Link>
          </h3>
          <h3 className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </h3>
          <h3 className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </h3>
        </div>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            
          </Link>
        ) : (
          <div className="topList">
            <h3 className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </h3>
            <h3 className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </h3>
          </div>
        )}
       
      </div>
    </div>
  );
}
