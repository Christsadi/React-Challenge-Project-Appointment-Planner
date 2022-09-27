import React from "react";

export const Tile = ({tiles}) => {

  return (
    <div className="tile-container">
      {
        Object.values(tiles).map(
          (value, idx) => (
           <p key={value} className={`${idx === 0 ? "title-title" : ""} tile`} > {value}</p> 
          )
        )
      }
    </div>
  );
};
