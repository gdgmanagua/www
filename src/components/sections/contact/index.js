import ContactForm from '../../contact_form'

const Contact = () => (
  <section className="section is-paddingless contact" id="contact">
    <div className="columns is-gapless">
      <div className="column">
        <div className="contact_form">
          <h1 className="title is-size-1 has-text-white">Contáctanos</h1>
          <ContactForm />
        </div>
      </div>
      <div className="column contact_image"></div>
    </div>
  </section>
);

export default Contact;
