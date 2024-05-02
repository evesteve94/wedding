import React from "react";
//för att kunna länka inom react-bubblan vi skapat (blir en a-tagg i inspektorn)
import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <main>
      <h2>Page not found</h2>
      <p>Well, that's disapointing</p>
      <br />
      <Link to="/">Back to Home Page</Link>
    </main>
  );
};

export default MissingPage;
