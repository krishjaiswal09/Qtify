import React from "react";

export default function Carousel({ data, renderComponent }) {
    return (
      <div>
        {data.map(item => renderComponent(item))}
      </div>
    );
  }