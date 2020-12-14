import React from "react";
import { useTilesQuery } from "../graphql/_generated";

const Logos = () => {
  const { loading, data, error } = useTilesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>error: {error?.message || 'no data'}</div>;
  }

  return (
    <div>
      {data.tiles.map(({ id }) => (
        <div key={id}>{id}</div>
      ))}
    </div>
  );
};

export default Logos;