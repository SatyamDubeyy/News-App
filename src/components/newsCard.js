import "./newscard.css"
function NewsCard({title,description,urlImage,urlContent,source,mode}) {
    return (
        <>
    <div className={`card ${mode}`} style={{width:"18rem"}}>
        <img className="card-img-top" src={urlImage} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={urlContent} className="btn btn-primary" target="_blank">Read More
            </a>
        </div>
        <div className="sourcee">{source}</div>
    </div>
   
    </>
    )
}

export default NewsCard;