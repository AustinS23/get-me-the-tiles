import React from "react";
import { useTilesQuery } from "../graphql/_generated";
import './logos.css';

const Logos = () => {
  const { loading, data, error } = useTilesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>error: {error?.message || "no data"}</div>;
  }

  return (
    <div className="container">
      {data.tiles.map(({ id, attributes: { currentTileUrl, name } }) => (
        <div className="logo-container" key={id} >
          <img className="logo" src={currentTileUrl!} alt={`logo for ${name}`} />
          <div className="name">{name}</div>
        </div>
      ))}
    </div>
  );
};

export default Logos;
