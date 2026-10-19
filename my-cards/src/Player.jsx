import React from "react";

function Player({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  image = "https://placehold.co/400x400?text=Player",
}) {
  return (
    <div
      className="card h-100 shadow border-0"
      style={{
        width: "100%",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{
          height: "230px",
          objectFit: "cover",
        }}
      />

      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{name}</h5>

        <p className="card-text mb-2">
          <strong>Team:</strong> {team}
        </p>

        <p className="card-text mb-2">
          <strong>Nationality:</strong> {nationality}
        </p>

        <p className="card-text mb-2">
          <strong>Jersey Number:</strong> #{jerseyNumber}
        </p>

        <p className="card-text mb-0">
          <strong>Age:</strong> {age}
        </p>
      </div>
    </div>
  );
}

export default Player;
