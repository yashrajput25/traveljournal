
export default function Entry({country , placeName,locationLink,img, date, description}){

    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={img.src} alt={img.alt} />
                </div>
           
            <div className="text-container">
                <div className="location-container"> 
                <span className="country-location-text">
                    <img className="location" src="./media/location.webp" alt="error" />
                    {country}
                    </span>
                <a href={locationLink}>View on Google Maps</a></div>
               
                <h2 >{placeName}</h2>
                <p className="date">{date}</p> 
                <p>{description}</p>
            </div>
        </article>
    );
}