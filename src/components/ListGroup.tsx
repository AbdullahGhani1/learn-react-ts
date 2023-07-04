import React, { MouseEvent, useState } from "react";

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
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="text-center">Cities</h1>
      {items.length === 0 && <p>No Cities Founds</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => setSelectedIndex(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
