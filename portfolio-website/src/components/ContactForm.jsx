import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm('mldrooll');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section>
      <h1 id='contact'>Contact</h1>
      <div className={styles.formContainer}>
        <h3 className={styles.formHeading}>Get in touch</h3>
        <form onSubmit={handleFormSubmit} ref={formRef}>
          <div className={styles.formGroup}>
            <label htmlFor="first-name" className={styles.label}>
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              name="first-name"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="last-name" className={styles.label}>
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              name="last-name"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className={styles.input}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={styles.textarea}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className={styles.submitButton}
          >
            Submit
          </button>
        </form>

        {state.succeeded && (
          <p className={styles.successMessage}>Thanks for your message!</p>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
