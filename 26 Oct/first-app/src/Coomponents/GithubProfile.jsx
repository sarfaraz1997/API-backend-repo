
import "./GithubProfile.css";

function GithubProfile({ user }) {
  return (
    <div className="user-card">
      <img
        src={user.avatar_url}
        alt={user.login}
      />

      <h2>{user.login}</h2>

      <p>User ID: {user.id}</p>
      <p>Type: {user.type}</p>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile ↗
      </a>
    </div>
  );
}

export default GithubProfile;
