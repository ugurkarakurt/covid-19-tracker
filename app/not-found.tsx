import React from "react";
import Link from "next/link";

function Custom404() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff"
      }}
    >
      <h1>We couldn&apos;t find <u>the page</u> you're looking for!</h1>
      <Link
        href="/"
        style={{ borderBottom: "1px solid", fontSize: 20, marginTop: 8 }}
      >
        Go Home Page
      </Link>
    </div>
  );
}

export default Custom404;