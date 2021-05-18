import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function Contact() {
  const [formArgs, setFormArgs] = useState({
    name: "",
    email: "",
    message: "",
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
            position: "top-right",
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
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );

    setFormArgs({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <Container>
      <h1>Contact Us</h1>
      <ContactInfo>
        <Info>
          <h2>Vanna Makeup Artistry</h2>
          <a>info@vannamakeup.com</a>
          <a>416-123-4567</a>
        </Info>
        <Social>
          <Wrap>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </Wrap>
          <Wrap>
            <FontAwesomeIcon icon={["fab", "pinterest-p"]} />
          </Wrap>
          <Wrap>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </Wrap>
          <Wrap>
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </Wrap>
        </Social>
      </ContactInfo>
      <h3>We cant wait to hear from you!</h3>
      <FormSection>
        <p>
          Let's discuss your special day and how we can help! To get in touch or
          book an appointment, please fill out our inquiry form here.
        </p>
        <FormContainer>
          <form id="contact-form" onSubmit={sendMessage}>
            <FormGroup>
              <label>Name</label>
              <input
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
                type="email"
                name="user_email"
                placeholder='Email Address'
                value={formArgs.email}
                onChange={(event) =>
                  setFormArgs({ ...formArgs, email: event.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <label>Phone Number</label>
              <input type="tel" name="contact_number" 
              placeholder="Contact Number"/>
            </FormGroup>
            <FormGroup>
              <label>Event Date</label>
              <input type="date" name="event_date" min="2021-01-01"></input>
            </FormGroup>
            <FormGroup>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Addiontional information"
                value={formArgs.message}
                onChange={(event) =>
                  setFormArgs({ ...formArgs, message: event.target.value })
                }
              ></textarea>
            </FormGroup>
            <SubmitButton type="submit">
                Send
            </SubmitButton>
          </form>
        </FormContainer>
      </FormSection>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Social = styled.div`
  display: flex;
`;

const Wrap = styled.div``;

const FormSection = styled.div`

p {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }

`;

const FormContainer = styled.div`
  // flex: 1;
`;

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
    box-shadow:0 0 0px 4px rgba(0,0,0,0.06);

    &:focus {
      outline: thick double #808080;
      outline-radius: 10px;
    }
  }

  textarea {
    height: 10em;
    padding: 5px;
    margin: 5px 0;
    border: 0;
    border-radius: 10px;
    box-shadow:0 0 0px 4px rgba(0,0,0,0.06);

    &:focus {
      outline: thick double #808080;
      outline-radius: 10px;
    }

    ::placeholder {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    }
  }
`;

const SubmitButton = styled.input`
  padding: 10px 10px;
  margin: 10px;
`;
