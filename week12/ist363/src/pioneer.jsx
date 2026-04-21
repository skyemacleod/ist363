

function Pioneer({ pioneer, onBack }) {
    return (
      <div className="detail-card">
        <h2>{pioneer.name}</h2>
        <img src={pioneer.img}/>
        <p><strong>Age:</strong> {pioneer.age}</p>
        <p><strong>Known For:</strong> {pioneer.bio}</p>
        <button onClick={onBack}>Return to Directory</button>
      </div>
    );
  }
  
  export default Pioneer;