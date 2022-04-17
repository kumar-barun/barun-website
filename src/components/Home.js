import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "./Layout";
import skillSet from "./../utils/skillSet";

const StyledUl = styled.ul`
  line-height: 1.5rem;

  & li {
    margin-bottom: 0.3rem;
  }
`;

const StyledButton = styled.a`
  border: 1px solid var(--primary-black);
  padding: 0.5rem 3rem;
  text-transform: uppercase;
  margin-top: 2rem;
  display: inline-block;
  color: var(--primary-black);
  text-decoration: none;
  padding-top: 0.6rem;

  &:hover {
    color: var(--color-white);
    background: var(--primary-black);
    transition: background 0.4s ease;
  }
`;

const Home = (props) => {
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  const h1 = (
    <React.Fragment>
      Barun Kumar, <br />a Web Developer
    </React.Fragment>
  );
  const sub = "Front End Developer / PHP Developer";

  const skillSetLi = skillSet.map((skill, i) => <li key={i}>{skill}</li>);

  return (
    <Layout h1={h1} sub={sub}>
      <p>
        A front-end developer with 8+ years of experience in web application
        development, administration, maintenance and support. Skills and
        experience include:
      </p>
      <StyledUl>{skillSetLi}</StyledUl>
      <StyledButton href="/contact">Contact Me</StyledButton>
    </Layout>
  );
};

export default Home;
