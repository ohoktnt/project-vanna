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
    <form id="contact-form" onSubmit={sendMessage}>
      <FormGroup>
        <label>Name</label>
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
      </FormGroup>
      <FormGroup>
        <label>Email</label>
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
      </FormGroup>
      <FormGroup>
        <label>Phone Number</label>
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
      </FormGroup>
      <FormGroup>
        <label>Event Date</label>
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
      </FormGroup>
      <FormGroup>
        <label>Message</label>
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
        <span>Send</span>
      </SubmitButton>
    </form>
  );
}

export default Form;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  label {
    text-align: left;
    padding: 5px;
  }

  input {
    padding: 5px;
    margin: 5px 0;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 0 0px 4px rgba(0, 0, 0, 0.06);

    &:focus {
      outline: thick double #808080;
      outline-radius: 10px;
    }

    ::placeholder {
      padding-left: 2px;
    }
  }

  textarea {
    height: 10em;
    padding: 5px;
    margin: 5px 0;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 0 0px 4px rgba(0, 0, 0, 0.06);

    &:focus {
      outline: thick double #808080;
      outline-radius: 10px;
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
  margin: 10px;
  padding: 12px 14px;
  border-radius 4px;
  font-size: 1em;
  letter-spacing: 1.2px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  transform-origin: left center;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    background: rgb(0,0,0)
    // border: 1px solid black;
    // background: white;
    // color: black;
  }

  span {
    margin: 5px;
  }
`;
