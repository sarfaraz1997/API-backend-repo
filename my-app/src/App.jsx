
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>GitHub Users</h1>

      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar_url} alt={user.login} />

            <h2>{user.login}</h2>
            <p>ID: {user.id}</p>
            <p>Type: {user.type}</p>

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
