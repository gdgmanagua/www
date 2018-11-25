
const COMMENTS_LIST = [
  {
    'author': 'David Blanchard',
    'image': 'https://secure.meetupstatic.com/photos/member/3/1/b/f/member_271512735.jpeg',
    'description': 'Es un grupo muy bueno; muestran temas de interes y dinámicos.',
    'color': 'is-primary',
  },
  {
    'author': 'Paulo McNally',
    'image': 'https://secure.meetupstatic.com/photos/member/5/7/0/9/member_248962281.jpeg',
    'description': 'Van muy bien, son chicos con ganas de aprender y enseñar lo que saben.',
    'color': 'is-warning',
  },
  {
    'author': 'Christian Torres',
    'image': 'https://secure.meetupstatic.com/photos/member/6/1/3/2/member_51324882.jpeg',
    'description': 'Siempre con temas bastante interesantes; explorando nuevas tecnologias.',
    'color': 'is-info',
  }
];

const Comment = () => (
  <section className="section" id="comment" style="background-color: #81ecec">
    <div className="container">
      <h1 className="title is-size-1 has-text-white has-text-centered">Que Dicen Sobre Nosotros</h1>
      <div className="tile is-ancestor">
        {COMMENTS_LIST.map(comment => (
          <div className="tile is-parent">
            <article className={`tile is-child box notification ${comment['color']}`}>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img className="is-rounded" src={comment['image']} alt={comment['author']} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p className="is-marginless">
                      <strong>{comment['author']}</strong>
                      {' '}-{' '}<small>@temporal</small>
                    </p>
                    <p className="content">{comment['description']}</p>
                  </div>
                </div>
              {/* <p class="title"></p>
               <p class="subtitle">What is up?</p> */}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Comment;
