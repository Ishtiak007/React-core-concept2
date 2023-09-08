import { useEffect, useState } from "react";
import Friend from "./friend";

export default function Friends() {
  const style = {
    border: "3px solid coral",
    padding: "35px",
    borderRadius: "15px",
    marginTop: "10px",
  };
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div style={style}>
      <h2>Friends : {friend.length}</h2>
      {friend.map((friend) => (
        <Friend friendData={friend}></Friend>
      ))}
    </div>
  );
}
