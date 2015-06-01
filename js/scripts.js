$(document).ready(function() {
  $("#add-places").click(function() {
    $("#new-location").append('<div class="new-location">' +
    '<div class="form-group">' + '<label for="new-city">City</label>' +
    '<input type="text" class="form-control new-city">' + '</div>' +
     '<div class="form-group">' + '<label for="new-country">Country</label>' +
     '<input type="text" class="form-control new-country">' + '</div>' +
     '</div>');
  });

  $("form#new-location").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#new-first-name").val();
    var newPerson = {firstName: inputtedName, locations: []};

  $(".new-location").each(function(){
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedCountry = $(this).find("input.new-country").val();

      var newLocation = {city: inputtedCity, country: inputtedCountry};
      newPerson.locations.push(newLocation);
    });
  $("ul#person").append("<li><span class='person-li'>" + newPerson.firstName +"</span></li>");

  $(".person-li").last().click(function() {
    $(".hidden-list").show();
    $(".name").text(newPerson.firstName);
    $("ul#kewl-places").text("");
      newPerson.locations.forEach(function(location) {
        $("ul#kewl-places").append("<li>" + location.city + "," + location.country + "</li>");
      });
  });


    $("input#new-first-name").val("");
    $("input.new-city").val("");
    $("input.new-country").val("");


  });
});
