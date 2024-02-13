import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = details
  console.log(details)

  return (
    <div className="latest-match">
      <div className="latest-match-container-1">
        <div className="latest-match-details">
          <p className="latest-match-text bold-text">{competingTeam}</p>
          <p className="latest-match-text large-text">{date}</p>
          <p className="latest-match-text">{venue}</p>
          <p className="latest-match-text">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-img"
        />
      </div>
      <hr className="line" />
      <div className="latest-match-details match-details">
        <p className="latest-match-text right">First Innings</p>
        <p className="latest-match-text right">{firstInnings}</p>
        <p className="latest-match-text right">Second Innings</p>
        <p className="latest-match-text right">{secondInnings}</p>
        <p className="latest-match-text large-text right">Man Of The Match</p>
        <p className="latest-match-text right">{manOfTheMatch}</p>
        <p className="latest-match-text right">Umpires</p>
        <p className="latest-match-text right">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
