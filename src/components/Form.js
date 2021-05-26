import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function Form() {
  const [formArgs, setFormArgs] = useState({
    name: "",
    email: "",
    message: "",
    number: null,
    date: null,
  });

  function sendMessage(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_vanna",
        "contact_form_Vanna",
        event.target,
        "user_KfxuJhk0XBkwOnueLvJYq"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sucessfully sent!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error Notification!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      );

    setFormArgs({
      name: "",
      email: "",
      message: "",
      number: "",
      date: "",
    });
  }

  return (
    <Container id="contact-form" onSubmit={sendMessage}>
      <FormGroup>
        <input
          required
          type="text"
          name="user_name"
          placeholder="First and Last Name"
          value={formArgs.name}
          onChange={(event) =>
            setFormArgs({ ...formArgs, name: event.target.value })
          }
        />
        <input
          required
          type="email"
          name="user_email"
          placeholder="Email Address"
          value={formArgs.email}
          onChange={(event) =>
            setFormArgs({ ...formArgs, email: event.target.value })
          }
        />
        <input
          required
          type="tel"
          name="contact_number"
          placeholder="Contact Number"
          value={formArgs.number}
          onChange={(event) =>
            setFormArgs({ ...formArgs, number: event.target.value })
          }
        />
        <input
          required
          type="date"
          name="event_date"
          min="2021-01-01"
          value={formArgs.date}
          onChange={(event) => {
            setFormArgs({ ...formArgs, date: event.target.value });
          }}
        ></input>
        <textarea
          required
          name="message"
          placeholder="Addiontional information"
          value={formArgs.message}
          onChange={(event) =>
            setFormArgs({ ...formArgs, message: event.target.value })
          }
        ></textarea>
      </FormGroup>
      <SubmitButton type="submit" value="Send">
        <FontAwesomeIcon icon={faEnvelope} />
        <span> Send</span>
      </SubmitButton>
    </Container>
  );
}

export default Form;

const Container = styled.form`
  padding: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  // width: 50%;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-colour: white;

  input {
    padding: 0px 15px 0px 15px;
    width: 470px;
    height: 50px;
    border: solid 1px #a6a6a6;
    border-bottom: none;

    &:focus {
      outline: none;
    }

    &:hover {
      background: #a6a6a6;
      color: white;
      ::placeholder {
        color: white;
      }
    }

    ::placeholder {
      padding-left: 2px;
    }
  }

  textarea {
    width: 470px;
    max-width: 470px;
    height: 110px;
    max-height: 110px;
    padding: 15px;
    // margin: 5px 0;

    border: 1px solid #a6a6a6;
    outline: none;
    // border-radius: 10px;
    // box-shadow: 0 0 0px 4px rgba(0, 0, 0, 0.06);

    &:focus {
      outline: none;
    }

    &:hover {
      background: #a6a6a6;
      color: white;
      ::placeholder {
        color: white;
      }
    }

    ::placeholder {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      padding-left: 2px;
    }
  }
`;

const SubmitButton = styled.button`
  width: 502px;
  height: 50px;

  margin: -5px 0px 0px 0px;
  
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  color: #a6a6a6;
  background: inherit;
  letter-spacing: 1.5px;
  
  outline:none;
  cursor: pointer;
  
  border: solid 1px #a6a6a6;
  border-top: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #a6a6a6;
    color: white;
    ::placeholder {
      color: white;
    }
  }

`;
