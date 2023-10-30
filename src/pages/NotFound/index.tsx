import "./NotFound.scss"
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
    <body className="Not_Found_Body">
      <h2 className="Not_Found_Error">404</h2>
      <p className="Not_Found_Paragraph">Page not found!</p>
      <p className="Not_Found_Paragraph">The page you trying to reach does not exist, or has been moved.</p>
      <Link to="/" className="Not_Found_Link">To Main Page</Link>
    </body>
    </>
  );
};
