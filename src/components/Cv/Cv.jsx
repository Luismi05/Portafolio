import './Cv.css'

const Cv = ({ data, title }) => {
  return (
    <section className="flowcv">
      <h3 className="flowcv__title">{title}</h3>

      <div className="flowcv__list">
        {data.map((item, index) => (
          <article key={index} className="flowcv__item">
            
            <div className="flowcv__img">
              <img src={item.img} alt={item.empresa} />
            </div>

            <div className="flowcv__content">
              <span className="flowcv__date">{item.fecha}</span>
              <h4 className="flowcv__role">{item.cargo}</h4>
              <h5 className="flowcv__company">{item.empresa}</h5>
              <p className="flowcv__desc">{item.descripcion}</p>
            </div>

          </article>
        ))}
      </div>
    </section>
  )
}

export default Cv
