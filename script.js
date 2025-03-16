const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e9be9b16bb1c77b67a4ccc4a77b2f66a';

fetch(apiUrl)
    .then(response => {
        if(!response.ok) {
            throw new  Error('Network is taking holidays');
        }
        return response.json();
        })
    .then(data => {
        console.log(data);
    })
    .catch(error =>{
        console.error('Error:', error);
    });
    