import React, { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "Lahore",
    "Islamabad",
    "Karachi",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Multan",
    "Gujranwala",
    "Bahawalpur",
    "Faisalabad",
  ];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1 className="text-center">Cities</h1>
      {items.length === 0 && <p>No Cities Founds</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li key={index} className="list-group-item" onClick={handleClick}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
