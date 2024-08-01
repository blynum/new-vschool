



function Contact({img, name, phone, email}) {
    return (
        <section className="contacts">
       
            <div className="contact-card">

                <img src={img}/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="src/assets/phone-icon.png" />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img src="src/assets/mail-icon.png" />
                    <p>{email}</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
