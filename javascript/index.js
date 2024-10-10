
function updateTime() {

    // Toronto

    let torontoElement = document.querySelector("#toronto");

    if (torontoElement) {
        let torontoDateElement = torontoElement.querySelector(".date");
        let torontoTimeElement = torontoElement.querySelector(".time");
        let torontoTime = moment().tz("America/Toronto");

        torontoDateElement.innerHTML = torontoTime.format("dddd MMMM Do YYYY");
        torontoTimeElement.innerHTML = `${torontoTime.format("h:mm:ss [<small>]A[</small>]")}`;
    }


    // Seoul

    let seoulElement = document.querySelector("#seoul");

    if (seoulElement) {
        let seoulDateElement = seoulElement.querySelector(".date");
        let seoulTimeElement = seoulElement.querySelector(".time");
        let seoulTime = moment().tz("Asia/Seoul");

        seoulDateElement.innerHTML = seoulTime.format("dddd MMMM Do YYYY");
        seoulTimeElement.innerHTML = `${seoulTime.format("h:mm:ss [<small>]A[</small>]")}`;
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;

    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    let cityTime = moment().tz(cityTimeZone);

    let citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `
    <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("dddd MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
            </div>
            `
}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
