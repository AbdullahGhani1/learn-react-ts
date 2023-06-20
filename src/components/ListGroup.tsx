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
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
