import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledForm = styled.form`
  & {
    max-width: 450px;
    margin: 0 auto;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1.4rem;
    border: 1px solid var(--primary-black);
    font-size: 1rem;
  }

  textarea {
    min-height: 100px;
  }

  input[type="submit"] {
    padding: 0.5rem 3rem;
    text-transform: uppercase;
    color: var(--primary-black);
    padding-top: 0.6rem;
    background: #fff;
    box-shadow: none;

    &:hover {
      color: var(--color-white);
      background: var(--primary-black);
      transition: background 0.4s ease;
    }

    &:disabled {
      background: #eee;
      color: #ccc;
      border: #ccc;
      cursor: not-allowed;
    }
  }
`;

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = (props) => {
  const [data, setData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    axios
      .post("https://barun.website/contact.php", data)
      .then(function (response) {
        if (response.data === 1) {
          toast.success("Got your message. Thanks for contacting.");
          setData(initialState);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.message);
      })
      .then(function () {
        setIsSubmitting(false);
      });
  };

  return (
    <Layout h1="Contact me">
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={data.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Write your message here..."
          value={data.message}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" value="SEND" disabled={isSubmitting} />
        {isSubmitting && <div>Sending. Please wait...</div>}
      </StyledForm>

      <ToastContainer />
    </Layout>
  );
};

export default Contact;
