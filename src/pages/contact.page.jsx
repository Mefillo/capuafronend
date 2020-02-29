

import React from 'react'

import './contact.style.scss'

import NavBar from '../components/navbar/navbar.component'
const Contact = () => (
    <>
    <NavBar/>
    <div className="baner">
        <div className="slogan">
            <div className="contact">
                <h3>Do you have any suggestion, concerns or feedback?</h3>
                <h5>Do not hasitate any second! We are thrilled to hear from you!</h5>
                <h5><a href="mailto:support@capua.store">Contact Us:</a> support@capua.store</h5>
            </div>
        </div>
    </div>
   {/* <div className="App">
   <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>     */}
    </>
)

export default Contact;