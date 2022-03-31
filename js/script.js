const $input = $("input")
const $button = $("button")
const $aside = $("aside")
const $textInput = $("[type='text']")
const $body = $("body")

function readyFn() {
  $.ajax("https://api.openweathermap.org/data/2.5/weather?q=los%20angeles&units=imperial&appid=822e8a53eb4f6095234b8854578f20b7")
      .then((data) => {
        $(".city").html(`<span>Los Angeles</span>`)
        $(".temp").html(`<span>${Math.floor(data.main.temp)}℉</span> `)
        $(".feels-like").html(`Feels like:<br> <span>${Math.floor(data.main.feels_like)}℉</span>`)
        $(".high").html(`Today's high:<br> <span>${Math.floor(data.main.temp_max)}℉</span>`)
        $(".low").html(`Today's low:<br> <span>${Math.floor(data.main.temp_min)}℉</span>`)
        $(".description").html(`<span>${data.weather[0].description}</span>`)
      })
     }
$(document).ready( readyFn )


$button.on ("click", () =>{
    const $searchCity = $input.val();
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${$searchCity}&units=imperial&appid=822e8a53eb4f6095234b8854578f20b7`)
    .then((data) => {
      $(".city").html(`<span>${data.name}</span>`)
      $(".temp").html(`<span>${Math.floor(data.main.temp)}℉</span> `)
      $(".feels-like").html(`Feels like:<br> <span>${Math.floor(data.main.feels_like)}℉</span>`)
      $(".high").html(`Today's high:<br> <span>${Math.floor(data.main.temp_max)}℉</span>`)
      $(".low").html(`Today's low:<br> <span>${Math.floor(data.main.temp_min)}℉</span>`)
      $(".description").html(`<span>${data.weather[0].description}</span>`)
    }).catch((error) => {
       alert("Try searching for a valid city");
       $textInput.val("")
         })
     $textInput.val("")
})

//try again
