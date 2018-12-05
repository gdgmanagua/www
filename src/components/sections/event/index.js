import { Component } from 'preact';

export default class Event extends Component {
  state = {
    date: '',
    time: '',
    place: '',
    link: '',
    lat: 0,
    lon: 0
  };

  componentDidMount() {
    this.getEvent();
  };

  getEvent = () => {
    fetch('https://chicorita.now.sh')
      .then(response => response.json())
      .then(data => {
        let baseDate = new Date(data['start_date']);
        let timeType = baseDate.getHours() > 12 ? 'PM' : 'AM';
        this.setState({
          date: baseDate.toLocaleDateString(),
          time: `${baseDate.toLocaleTimeString()} ${timeType}`,
          place: data['location']['name'],
          link: data['url'],
          lat: data['location']['lat'],
          lon: data['location']['lon']
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <section className="section is-paddingless">
        <div className="columns is-gapless">
          <div className="column">
            <div style="width: 100%">
              <iframe width="100%" height="500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2790042574807!2d-86.24330968507037!3d12.09304223681707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f73fe2dc6f5a13f%3A0x48251c1b07bf3e2b!2sRain+Nicaragua!5e0!3m2!1ses!2sni!4v1543281812017" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div>
          </div>
          <div className="column event">
            <h1 className="title is-size-1 has-text-black has-text-centered">Proximo Evento</h1>
            <div className="content">
              <ul className="timeline">
                <li className="timeline--content"><strong>Fecha:</strong>{' '}{this.state.date}</li>
                <li className="timeline--content"><strong>Hora:</strong>{' '}{this.state.time}</li>
                <li className="timeline--content"><strong>Lugar:</strong>{' '}{this.state.place}</li>
                <li className="timeline--content"><strong>Enlace:</strong> <a href={this.state.link} target="_blank">{this.state.link}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
};
