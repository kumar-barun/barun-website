import React, { useEffect } from "react";
import Layout from "./Layout";

const Education = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <Layout h1="Education">
      <h2>Master of Computer Application (MCA)</h2>
      <p>2011 - 2013</p>
      <p>IGNOU</p>

      <h2>Bachelor of Computer Application (BCA)</h2>
      <p>2008 - 2011</p>
      <p>IGNOU</p>
    </Layout>
  );
};

export default Education;
