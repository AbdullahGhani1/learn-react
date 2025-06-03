function ListGroup() {
  const ohioCities = [
    "Cleveland",
    "Toledo",
    "Akron",
    "Lorain",
    "Elyria",
    "Sandusky",
    "Mentor",
    "Parma",
    "Lakewood",
    "Youngstown",
  ];
  return (
    <>
      <h1 className="display-1">List</h1>
      {ohioCities.length === 0 && <p className="display-6">No City Found</p>}
      <ul className="list-group">
        {ohioCities.map((city, index) => (
          <li className="list-group-item" key={index}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
