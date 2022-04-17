import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import breakpoints from "./../utils/breakpoints";
import Layout from "./Layout";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr 1fr;
  }

  & figure {
    margin: 0;
  }

  & figure img {
    max-width: 100%;

    &:hover {
      opacity: 0.9;
    }
  }

  & figcaption {
    font-size: 0.9rem;
    text-align: center;
    font-style: italic;
    color: #333;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  & a {
    text-decoration: none;
    box-shadow: 0 0 5px #d7d5d5;
  }
`;

const StyledError = styled.div`
  color: red;
  text-align: center;
`;

const MyWork = (props) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.title = props.title || "";

    setIsLoading(true);
    axios("https://barun.website/my-works.php")
      .then(response => {        
        setItems(response?.data || []);
      })
      .catch(function (error) {        
        setError(error.message);
      })
      .then(function () {
        setIsLoading(false);
      });   
  }, [props.title]);

  return (
    <Layout h1="My Works">
      {isLoading ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : (
        <StyledGallery>
          {items.length>0 && items.map((item, key) => (
            <a key={key} href={item.url} target="_blank" rel="noreferrer">
              <figure>
                <img src={item.thumbnail} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            </a>
          ))}
        </StyledGallery>
      )}
      {error && <StyledError>{error}</StyledError>}
    </Layout>
  );
};

export default MyWork;
