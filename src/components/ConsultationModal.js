import React from 'react'

const ConsultationModal = () => {
    return (
        <div>
            
            <div id="modal1" class="modal">
                <div class="modal-content">
                
                    <form className="contact-form">
                            <label>Name</label>
                            <div className = "form-section name-form">
                                
                                <input type="text" name="from_name" />
                            </div>
                            <label>Email</label>
                            <div className = "form-section email-form">
                                
                                <input type="email" name="Email" />
                            </div>
                            <label>Phone</label>
                            <div className = "form-section subject-form">
                                <input type="text" name="Phone" />
                            </div>
                            <div className = "message-header"><label>Tell us about your ideas...</label></div>
                            <div className = "form-section message-form">
                                <textarea name="Message" />
                            </div>
                            <div className = "form-section send-form">
                                
                            </div>
                    </form>
                </div>
                <div class="modal-footer submit ">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat "><input type="submit" value="Submit" className = "quote-form-submit" /></a>
                </div>
            </div>
        
        </div>
    )
}

export default ConsultationModal
