window.addEventListener('load', () => {
    let long;
    let lat;
    let = tempDescription = document.querySelector{
        
    }

    // to validate for browser functionality
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "";
            // const api = `link from darksky.net`;
            console.log(position);
        });
    } else{
        h1.textContent = "Unable to properly load due to current permissions."
    }

    // draws from information source, the runs only after data is retreived
    fetch(api)
        .then(data =>{
            return Response.json();
        })
        .then(data =>{
            console.log(data);
            const { temp, summary } = data.currently;
        });
});