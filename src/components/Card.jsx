

const Card = ({ customCard,user,followers,today,icon,arrow,toggle }) => {
  return (
    <div className={toggle ? `card__dark ${customCard}` : `card__light ${customCard}`}>
        <div className="card__body">
            <span className="card__account">{icon} {user}</span>
            <h1 className={toggle ? `card__number__light` : `card__number__dark`}>{followers}</h1>
            <span className="card__follower">FOLLOWERS</span>
            <span className="card__today">{arrow} {today} Today</span>
        </div>
    </div>
  )
}

export default Card