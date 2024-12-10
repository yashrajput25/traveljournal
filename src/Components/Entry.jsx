
export default function Entry(){

    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src="./media/mount_fuji.webp" alt="error" />
                </div>
           
            <div className="text-container">
                <div className="location-container"> 
                <span className="country-location-text">
                    <img className="location" src="./media/location.webp" alt="error" /> Japan
                    </span>
                <a href="https://maps.app.goo.gl/6DK8BpbrA7uGepzi9">View on Google Maps</a></div>
               
                <h2 >Mount Fuji</h2>
                <p className="date">12 Jan, 2021 - 24 Jan, 2021</p> 
                <p>Mount Fuji is the tallest mountain in Japan, 
                    standing at 3,776 meters (12,380 feet). 
                    Mount Fuji is the single most popular tourist site in Japan, 
                    for both Japanese and foreign tourists.</p>
            </div>
        </article>
    );
}