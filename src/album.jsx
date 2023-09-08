import "./album.css";
export default function Album({ data }) {
  const { id, title } = data;
  return (
    <div className="album">
      <h2>User Id : {id}</h2>
      <h3>Title : {title}</h3>
    </div>
  );
}
