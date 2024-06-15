import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_gvkymq7', 'template_ymk8w93', form.current, '-r9-m9ZoneHZeQkI1')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="d-flex justify-content-center min-vh-100 align-items-center mb-4">
        <div className="text-center w-100">
          <h2>CONTACT</h2>
          <h3>Have a question or want to work together?</h3>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group mb-2">
                    <input type="text" name="name" placeholder="Name" className="form-control" />
                  </div>
                  <div className="form-group mb-2">
                    <input type="text" name="email" placeholder="Email" className="form-control" />
                  </div>
                  <div className="form-group mb-2">
                    <textarea name="message" placeholder="Enter Message" className="form-control"></textarea>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
