import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          padding: "5px",
          margin: "5px",
          fontSize: "20px",
          color: match ? "red" : "white",
          textDecoration: "none",
          borderBottom: match ? "2px solid red" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
