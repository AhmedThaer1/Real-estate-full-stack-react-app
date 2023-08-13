import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import classes from './contact.module.css'

const Contact = () => {
    const [messageStatus, setMessageStatus] = useState(null);
    const form = useRef();


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_sgk0dfq", "template_o90frf3", form.current, "4z1voJswi785d6GZe")
        .then((result) => {
            console.log(result.text);
            setMessageStatus("success")
            setTimeout(() => {
              setMessageStatus(null)
            }, 4000);
        }, (error) => {
            console.log(error.text);
            setMessageStatus("error")
            setTimeout(() => {
              setMessageStatus(null)
            }, 4000);
        });
    };


    const textareaRef = useRef(null);

    const handleTextareaInput = () => {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

  return (
    <div className={classes.container}>
      <div className={classes.Title}>
        <h1>بيع بيتك ويانه</h1>
      </div>
      <div className={classes.formContainer}>
      <div className={classes.formWrapper}>
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
          <div className={`${classes.inputContainer} ${classes.d1}`}>
            <label htmlFor="user_name">UserName</label>
            <input type="text" id="user_name" name="user_name" placeholder="UserName..." />
          </div>
          <div className={`${classes.inputContainer} ${classes.d2}`}>
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" placeholder="Email..." />
          </div>
          <div className={`${classes.inputContainer} ${classes.d3}`}>
            <label htmlFor="user_phone">Phone Number</label>
            <input type="number" id="user_phone" name="user_phone" placeholder="PhoneNumber..." />
          </div>
          <div className={`${classes.inputContainer} ${classes.d4}`}>
            <label htmlFor="property_title">Title</label>
            <input type="text" id="property_title" name="property_title" placeholder="Title..." />
          </div>
          <div className={`${classes.inputContainer} ${classes.d5}`}>
            <label htmlFor="property_location">Location</label>
            <input type="text" id="property_location" name="property_location" placeholder="Location..." />
          </div>
          <div className={`${classes.inputContainer} ${classes.d6}`}>
            <label htmlFor="property_price">Price</label>
            <input type="text" id="property_price" name="property_price" placeholder="Price..." />
          </div>
          <div className={`${classes.inputContainer} ${classes.d7}`}>
            <label htmlFor="property_area">Area</label>
            <input type="text" id="property_area" name="property_area" placeholder="Area..." />
          </div>
          <div className={`${classes.inputContainer} ${classes.d7}`}>
            <label htmlFor="code_area">LocationCode</label>
            <input type="text" id="code_area" name="code_area" placeholder="Optional: LocationCode..." />
          </div>
          <div className={`${classes.inputContainer} ${classes.d8}`}>
            <label htmlFor="message">Description</label>
              <textarea
                id="message"
                name="message"
                placeholder="Description..."
                ref={textareaRef}
                onInput={handleTextareaInput}
              ></textarea>
            </div>
              <div className={`${classes.inputContainer} ${classes.d9}`}>
                <input type="submit" value="تقديم طلب" />
              </div>
               {/* Render success or error message based on the messageStatus */}
                  {messageStatus === "success" && (
                    <p className={classes.successMessage}>Message sent successfully!</p>
                  )}
                  {messageStatus === "error" && (
                    <p className={classes.errorMessage}>Something went wrong. Please try again.</p>
                  )}
            </form>
          </div>
        </div>
        <div className={classes.waves}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,96L40,122.7C80,149,160,203,240,197.3C320,192,400,128,480,106.7C560,85,640,107,720,128C800,149,880,171,960,160C1040,149,1120,107,1200,90.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
    </div>
  )
}

export default Contact
