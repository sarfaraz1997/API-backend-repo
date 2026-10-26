
import { useEffect, useState } from "react";
import "./App.css";
import GithubProfile from "./Coomponents/GithubProfile.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Users fetch nahi ho sake");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="message">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="message">{error}</h2>;
  }

  return (
    <div className="container">
      <h1>GitHub Users</h1>

      <div className="user-grid">
        {users.map((user) => (
          <GithubProfile key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
