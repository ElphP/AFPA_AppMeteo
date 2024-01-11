import { ApiMeteo } from "../API/ApiMeteo";
import DonneesMeteo from '../DonneesMeteo/DonneesMeteo';
import Input from "../Input/Input";
import "./InterfaceMeteo.css";
import { useState} from 'react';


function InterfaceMeteo() {

    const [meteo, setMeteo] = useState([]);
    const [verifCheck, setVerifCheck] = useState([false,false,false,false,false,false,false,false,false]);
    
        function chargementMeteo(zipCode)  {
         
        ApiMeteo(zipCode).then((object) => {
            
          setMeteo(
              meteo.concat(
                  object.name,
                  object.coord,
                  object.weather[0].description,
                  object.main.temp,
                  object.main.feels_like,
                  object.wind.speed,
                  object.wind.deg,
                  object.main.pressure,
                  object.main.humidity
                //   Données erronées
                //   object.sys.sunrise,
                //   object.sys.sunset
              )
          );
               
            }
            
            );
            
                }

        function onCheck(index)  {
            const nextState = verifCheck.map((state,i) =>  {
                if (i===index)  {
                    return !state
                }
                else return state
            })  
            setVerifCheck(nextState) 
        }

    return <>
   <Input  chargementMeteo={chargementMeteo} setMeteo={setMeteo} verifCheck={verifCheck} onCheck={onCheck}/>
    {meteo[0]!==undefined && (<DonneesMeteo meteo={meteo} verifCheck={verifCheck} />)
    }
</>
}

export default InterfaceMeteo