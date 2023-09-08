export default function Friend({ friendData }) {
  const box = {
    border: "2px solid blue",
    padding: "10px",
    borderRadius: "15px",
    marginTop: "10px",
  };
  const { name, email } = friendData;
  return (
    <div style={box}>
      <h2>Name : {name}</h2>
      <p>Email : {email}</p>
    </div>
  );
}
