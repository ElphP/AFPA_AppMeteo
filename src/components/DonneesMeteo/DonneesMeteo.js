import "./DonneesMeteo.css";

const DonneesMeteo = ({ meteo, verifCheck }) => {
    console.log(meteo);

    function directionVent(value)  {
        let direction =""
        if(meteo[6]>337.5 || meteo[6]<=22.5)   {
            direction ="N"
        }
        if(meteo[6]>22.5 && meteo[6]<=67.5)
        {
            direction = "NE"
        }
       
        if(meteo[6]>67.5 && meteo[6]<=112.5)
        {
            direction = "E"
        }
        if(meteo[6]>112.5 && meteo[6]<=157.5)
        {
            direction = "SE"
        }
        if(meteo[6]>157.5 && meteo[6]<=202.5)
        {
            direction = "S"
        }
        if(meteo[6]>202.5 && meteo[6]<=247.5)
        {
            direction = "SO"
        }
        if(meteo[6]>247.5 && meteo[6]<=292.5)
        {
            direction = "O"
        }
        if(meteo[6]>292.5 && meteo[6]<=337.5)
        {
            direction = "NO"
        }
        return direction
    }

    function changeTime(value) {
        let date= new Date();
         date.setTime(value);
         
        let horaire = "";
        date.setTime(value);
        horaire = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return horaire
    }

    return (
        <div className="affichMeteo">
            <h1>Météo actuelle à {meteo[0]} :</h1>
            <ul>
                {verifCheck[0] && (
                    <li>
                        Coordonnées GPS de {meteo[0]}: <br/>
                        Longitude : {meteo[1].lon}, Latitude : {meteo[1].lat}
                    </li>
                )}
                {verifCheck[1] && <li>Météo : {meteo[2]}</li>}
                {verifCheck[2] && <li>Température : {meteo[3].toFixed(1)}°C</li>}
                {verifCheck[3] && <li>Température ressentie : {meteo[4].toFixed(1)}°C</li>}
                {verifCheck[4] && <li>Vitesse du vent : {Math.round((meteo[5]/1000)*3600)} km/h </li>}
                {verifCheck[5] && <li>Direction du vent : {
                directionVent(meteo[6])
                } </li>}
                {verifCheck[6] && (
                    <li>Pression atmosphérique : {meteo[7]} hPa</li>
                )}
                {verifCheck[7] && <li>Humidité de l'air : {meteo[8]}%</li>}
                
                {/* Données erronnées.... */}
                {/* {verifCheck[8] && (
                    <li>
                        Horaire de lever du soleil : {changeTime(meteo[9])}
                        <br/> 
                        Horaire du
                        coucher du soleil :{changeTime(meteo[10])}
                    </li>
                )} */}
            </ul>
        </div>
    );
};

export default DonneesMeteo;
