import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, matchstatus, result} = details

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="match-card-text">{competingTeam}</p>
      <p className="match-card-text small">{result}</p>
      <p className={`match-card-text ${matchstatus}`}>{matchstatus}</p>
    </li>
  )
}

export default MatchCard
