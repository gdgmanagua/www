import ContactForm from '../../contact_form'

const Contact = () => (
  <section className="section is-paddingless contact" id="contact">
    <div className="columns is-gapless">
      <div className="column">
        <div className="contact_form">
          <h3 className="title has-text-white">Contactanos</h3>
          <ContactForm />
        </div>
      </div>
      <div className="column contact_image"></div>
    </div>
  </section>
);

export default Contact;
