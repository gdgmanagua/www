import NewsletterForm from '../../newsletter_form'

const Newsletter = () => (
  <section className="section" style="background-color: grey;">
    <div className="container">
      <h1 className="title is-size-1 has-text-white has-text-centered">Suscribete a nuestra lista</h1>
      <h2 className="title has-text-white has-text-centered">para estar al tanto</h2>
      <NewsletterForm />
    </div>
  </section>
);

export default Newsletter;
