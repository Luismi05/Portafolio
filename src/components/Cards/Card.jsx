
const Card = ({ icon = '', alt = '' }) => {
  return (
    <div className="card text-center me-3" style={{ width: '10rem' }}>
      {icon}
      <div className="card-body">
        <p>{alt}</p>
      </div>
    </div>
  )
}

export default Card