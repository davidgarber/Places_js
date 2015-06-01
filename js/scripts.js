$(document).ready(function() {
  $("#add-places").click(function() {
    $("#new-location").append('<div class="new-location">' +
    '<div class="form-group">' + '<label for="new-city">City</label>' +
    '<input type="text" class="form-control new-city">' + '</div>' +
     '<div class="form-group">' + '<label for="new-landmark">Landmark</label>' +
     '<input type="text" class="form-control new-landmark">' + '</div>' +
      '<div class="form-group">' + '<label for="new-timeOfYear">Time of Year</label>' +
      '<input type="text" class="form-control new-timeOfYear">' + '</div>' +
       '<div class="form-group">' + '<label for="new-notes">Notes</label>' +
       '<input type="text" class="form-control new-notes">' + '</div>' +
       '</div>' );
  });

  $("form#new-location").submit(function(event){


    event.preventDefault();
    var inputtedCountry = $("input#new-country").val();
    var newPlace = {country: inputtedCountry, locations: []};

  $(".new-location").each(function(){
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedLandmark = $(this).find("input.new-landmark").val();
      var inputtedTimeOfYear = $(this).find("input.new-timeOfYear").val();
      var inputtedNotes = $(this).find("input.new-notes").val();


      var newLocation = {city: inputtedCity, landmark: inputtedLandmark, timeOfYear: inputtedTimeOfYear, notes: inputtedNotes};

      newPlace.locations.push(newLocation);
    });

  $("ul#country").append("<li><span class='country-li'>" + newPlace.country +"</span></li>");

  $(".country-li").last().click(function() {
    $(".hidden-list").show();
    $(".name").text(newPlace.country);
    $("ul#kewl-places").text("");
      newPlace.locations.forEach(function(location) {
        $("ul#kewl-places").append("<li>" + location.city + "," + location.landmark + "," + location.timeOfYear + "," + location.notes + "</li>");
      });
  });

    $("input#new-country").val("");
    $("input.new-city").val("");
    $("input.new-landmark").val("");
    $("input.new-timeOfYear").val("");
    $("input.new-notes").val("");
  });
});
