import { useState} from 'react';
import './Input.css'


function  Input ({chargementMeteo, setMeteo, onCheck}) {
    
    const [zipCode,setZipCode]= useState("");

  return (
      <div id="input">
          <h1>Aplication : informations sur la météo (par CP)</h1>
          <div className="inputTab">
              <label htmlFor="CP">Indiquez ici votre Code Postal:</label>
              <input
                  type="number"
                  id="CP"
                  value={zipCode}
                  onChange={(e) => {
                      setZipCode(e.target.value);
                      if (zipCode !== 5) {
                          setMeteo([]);
                      }
                  }}
              />
              <h2>Sélectionnez les données souhaitées:</h2>
              <div className="checkBox">
                  <div>
                      <label htmlFor="coord">Coordonnées GPS</label>
                      <input
                          type="checkbox"
                          name="coord"
                          id="coord"
                          onClick={(e) => {
                              onCheck(0);
                          }}
                      />
                      <label htmlFor="weather">Météo</label>
                      <input
                          type="checkbox"
                          name="weather"
                          id="weather"
                          onClick={() => {
                              onCheck(1);
                          }}
                      />
                  </div>
                  <div className="temp">
                      <p>Températures</p>
                      <label htmlFor="temp">Température réelle</label>
                      <input
                          type="checkbox"
                          name="temp"
                          id="temp"
                          onClick={() => {
                              onCheck(2);
                          }}
                      />
                      <label htmlFor="feel_like">Température ressentie</label>
                      <input
                          type="checkbox"
                          name="feel_like"
                          id="feel_like"
                          onClick={() => {
                              onCheck(3);
                          }}
                      />
                  </div>
                  <div className="vent">
                      <p>Vent</p>
                      <label htmlFor="vent_vitesse">Vitesse du vent</label>
                      <input
                          type="checkbox"
                          name="vent_vitesse"
                          id="vent_vitesse"
                          onClick={() => {
                              onCheck(4);
                          }}
                      />
                      <label htmlFor="vent_direction">Direction du vent</label>
                      <input
                          type="checkbox"
                          name="vent_direction"
                          id="vent_direction"
                          onClick={() => {
                              onCheck(5);
                          }}
                      />
                  </div>
                  <div className="autre">
                      <label htmlFor="pressure">Pression atmosphérique</label>
                      <input
                          type="checkbox"
                          name="pressure"
                          id="pressure"
                          onClick={() => {
                              onCheck(6);
                          }}
                      />
                      <label htmlFor="humidity">Taux d'humidité de l'air</label>
                      <input
                          type="checkbox"
                          name="humidity"
                          id="humidity"
                          onClick={() => {
                              onCheck(7);
                          }}
                      />
                     
                  </div>
              </div>
              {zipCode.length === 5 && (
                  <button
                      onClick={() => {
                          chargementMeteo(zipCode);
                      }}
                  >
                      Valider
                  </button>
              )}
          </div>
      </div>
  );
}

export default Input