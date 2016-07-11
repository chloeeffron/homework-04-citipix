$(function(){

  // trigger function if the user clicks submit //

  $("#submit-btn").click(handleClick);

  function handleClick(event) {
    
    // prevent form from sending info to a server that isn't there //

    event.preventDefault();

    // take what the user typed in and make it a variable //
    // change case of value to upper case so it isn't case sensitive and gives the result regardless //

    var city = $("#city-type").val().toUpperCase();

    // make if statements to define background change based on entry //
    // use "OR" to allow multiple entries to trigger same result //
    
    if (city === "NEW YORK" || city === "NEW YORK CITY" || city === "NYC") {
      $("body").attr("class", "nyc");
    }

    else if (city === "SAN FRANCISCO" || city === "SF" || city === "BAY AREA") {
      $("body").attr("class", "sf");
    }

    else if (city === "LOS ANGELES" || city === "LA" || city === "LAX") {
      $("body").attr("class", "sf");
    }

    else if (city === "AUSTIN" || city === "ATX") {
      $("body").attr("class", "austin");
    }

    else if (city === "SYDNEY" || city === "SYD") {
      $("body").attr("class", "sydney");
    }

  // remove class and make default again if entered text doesn't match any of the 5 cities
    else {
      $("body").attr("class", "");
    }
  }


});