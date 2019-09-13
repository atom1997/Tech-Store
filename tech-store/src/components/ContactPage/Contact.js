import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"/>
                    <form className="mt-5"
                        action="https://formspree.io/pourushchoudhary3@gmail.com" 
                        method="POST">
                    
                        {/* first */}
                        <div className="form-group">
                            <input type="text" name="firstName" 
                            className="form-control" placeholder="Pourush"/>
                        </div>
                        {/* {Email} */}
                        <div className="form-group">
                            <input type="email" name="email"
                                className="form-control" 
                                placeholder="username@gmail.com" />
                        </div>
                        {/* {Subject} */}
                        <div className="form-group">
                            <input type="text" name="subject"
                                className="form-control" 
                                placeholder="important!!" />
                        </div>
                        {/* {Message} */}
                        <div className="form">
                            <textarea
                             name="message"
                             className="form-control"
                             rows="10"
                             placeholder="hello there buddy"
                            />
                        </div>
                        {/* {Submit} */}
                        <div className="form-group mt-3">
                            <input 
                               type="submit"
                               value="SEND"
                               className="form-control bg-primary text-white"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
