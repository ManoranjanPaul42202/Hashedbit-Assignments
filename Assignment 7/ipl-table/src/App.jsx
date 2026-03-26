import { useEffect, useState } from "react";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {

        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>IPL 2022 Points Table</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Team</th>
            <th>M</th>
            <th>W</th>
            <th>L</th>
            <th>NRR</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={index} style={index < 4 ? styles.topTeam : {}}>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

const styles = {
  container: {
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  table: {
    margin: "auto",
    borderCollapse: "collapse",
    width: "80%",
  },
  topTeam: {
    backgroundColor: "#1e293b",
    fontWeight: "bold",
  },
};