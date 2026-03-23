import { useState, useEffect } from 'react'
import posicionesData from '../data/posiciones.json'

interface Ranking {
  rank: number
  contestantName: string
  points: number
  matchesPlayed: number
}

function Home() {
  const [ranking, setRanking] = useState<Ranking[]>([])

  useEffect(() => {
    setRanking(posicionesData.standings[0].ranking)
  }, [])

  return (
    <div className="tabla-container">
      <h2>{posicionesData.standings[0].competitionName} — {posicionesData.standings[0].name}</h2>
      <table className="tabla-posiciones">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((equipo) => (
            <tr key={equipo.rank}>
              <td>{equipo.rank}</td>
              <td>{equipo.contestantName}</td>
              <td>{equipo.matchesPlayed}</td>
              <td>{equipo.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home