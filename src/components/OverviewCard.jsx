
const OverviewCard = ({ title,icon,number,percent,iconColor,percentColor,arrowIcon,toggle }) => {
  return (
    <div className={toggle ? 'overview-card__dark' : 'overview-card__light' }>
        <div className="overview-card__header">
            <h1 className='overview-card__title'>{title}</h1>
            <span className={`overview-card__icon ${iconColor}`}>{icon}</span>
        </div>
        <div className="overview-card__header">
            <h1 className={toggle ? "overview-card__number-dark" : 'overview-card__number-light'}>{number}</h1>
            <span className={`overview-card__percent ${percentColor}`}>{arrowIcon} {percent}</span>
        </div>
    </div>
  )
}

export default OverviewCard