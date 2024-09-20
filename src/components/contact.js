import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react';


  
const Contact = () => {
    return (
        <div className='container center-div'>
        <form id="contact-form">
            <p className="contact">Contact Form</p>
            <div className="form-group center-div">
                <label>Name </label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" required></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
              </div>
             <div className="form-group " >
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                <div className="center-div"> <button type="submit" className="btn-primary submit">Submit</button> </div>
               
              </div>
              
            </form>
        </div>
    )
}

let contactForm = document.getElementById('contact-form')

function formSubmit() {
    alert('Message Sent.');
    contactForm.reset();
}

if (contactForm) {
    contactForm.addEventListener('submit', formSubmit)
  }

export default Contact
