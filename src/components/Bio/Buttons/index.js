export default function Button({ langChange, name, url }) {
  return (
    <div>
      <button className="bio-button mr-50" onClick={langChange}>
        <img width={30} height={20} src={url} alt="..." />
        {name}
      </button>
    </div>
  );
}
