import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((x) => x.json())
      .then((d) => {
        setUsers(d.data);
      });
  }, []);
  return (
    <div>
      {users.map((e) => (
        <p>
          <img src={e.avatar} />
          <br />
          {e.first_name}
          <br />
          {e.last_name}
          <br />
          <br />
          {e.email}
        </p>
      ))}
    </div>
  );
};

/*
  <img src={e.avatar} />
          <br />
          {e.first_name}
          <br />
          {e.last_name}
          <br />
          <br />
          {e.email}
 */
