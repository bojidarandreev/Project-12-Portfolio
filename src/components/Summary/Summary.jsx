import "./summary.scss";

const Summary = function ({ title, details, author, authorTitle }) {
  const hasDetails = details[0].length <= 1;
  

  if (hasDetails) {
    return <details className="summary">
    <summary className="summary__title">{title}</summary>        
      <p className="summary__details summary__single">{details}</p>
  </details>;
    }
    return <details className="summary">
    <summary className="summary__title">{title}</summary>
    {details.map((detail) => (
      <p key={Math.random()} className="summary__details summary__multiple">{detail}</p>
    ))}
    <div className="summary__author">
    <p className="summary__author__host__name">{author}</p>
    <p className="summary__author__host__job">{authorTitle}</p>
    </div>
    
  </details>;


};

export default Summary;

