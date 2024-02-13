import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <Link to={`/team-matches/${id}`} className="team-matches">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
