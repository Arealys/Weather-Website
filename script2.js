async function choose() {
    

    try {
        const meteoapi = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e9be9b16bb1c77b67a4ccc4a77b2f66a';
        const meteoresponse = await fetch(meteoapi)
        const meteodata = await meteoresponse.json();
        const name = meteodata.name
        const country = meteodata.sys.country
        const tempC = (meteodata.main.temp - 273.15).toFixed(2);
        const Vent = (meteodata.wind.speed *3.6).toFixed(1);

        document.getElementById("Results").innerHTML = `
        <h2> ${name}, ${country} </h2>
        <p>Température : ${tempC}°C</p>
        <p>Vent : ${Vent}Km/h</p>
        `;

        if (!meteoresponse.ok) {
            throw new Error(`Erreur HTTP : ${meteoresponse.status}`);
        }
        

    } catch (error) {
    console.error("Erreur :", error)};

}