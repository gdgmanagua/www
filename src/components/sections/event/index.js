const Event = () => (
  <section className="section is-paddingless">
    <div className="columns is-gapless">
      <div className="column">
        <div style="width: 100%">
          <iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Managua+(Mi%20nombre%20de%20egocios)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>
      <div className="column">
        <h1 className="title is-size-1 has-text-black has-text-centered">Proximo Evento</h1>
        <div className="content">
          <ul>
            <li><strong>Fecha:</strong> 22/Mayo/2018</li>
            <li><strong>Hora:</strong> 09:00 AM</li>
            <li><strong>Lugar:</strong> Rain Agency</li>
            <li><strong>Enlace:</strong> https://meetup.com/es/gdgmanagua</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Event;
