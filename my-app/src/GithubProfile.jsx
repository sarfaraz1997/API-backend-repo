
import React from "react";
import "./GithubProfile.css";

const user = {
  login: "mojombo",
  id: 1,
  avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  html_url: "https://github.com/mojombo",
  type: "User",
  site_admin: false,
};

export default function GithubProfile() {
  return (
    <div className="github-container">
      <div className="github-card">
        <div className="github-header">
          <span className="github-logo">GH</span>
          <span className="public-badge">Public Profile</span>
        </div>

        <img
          src={user.avatar_url}
          alt={user.login}
          className="github-avatar"
        />

        <h2>{user.login}</h2>
        <p className="github-username">@{user.login}</p>

        <div className="github-info">
          <div className="info-item">
            <span>🆔</span>
            <div>
              <small>User ID</small>
              <strong>{user.id}</strong>
            </div>
          </div>

          <div className="info-item">
            <span>👤</span>
            <div>
              <small>Account Type</small>
              <strong>{user.type}</strong>
            </div>
          </div>

          <div className="info-item">
            <span>🛡️</span>
            <div>
              <small>Site Admin</small>
              <strong>{user.site_admin ? "Yes" : "No"}</strong>
            </div>
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View GitHub Profile ↗
        </a>

        <p className="github-footer">
          Powered by GitHub API
        </p>
      </div>
    </div>
  );
}
