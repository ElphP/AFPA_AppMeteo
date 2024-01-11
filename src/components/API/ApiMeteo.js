

export async function ApiMeteo (zipCode)  {
    
    let APIKEY= "5bf5a9bf9e937c3b88149e7f8e50b106";
    let url = "https://api.openweathermap.org/data/2.5/weather?zip=" +zipCode+",fr&appid=" +APIKEY+"&units=metric";
    
    try {
        const response = await fetch(url);
        return await response.json();
        
    } catch (error) {
        return console.log(error);
    }
}