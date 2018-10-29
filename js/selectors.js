function paragraphSelector() {
  $('p');
}

function lastImageSelector() {
  $('img:last');
}

function ninjaBabySelector() {
  $('#baby-ninja');
}

function divSelector() {
  $('.pics');
}

function firstListItem() {
  return $('#pic-list ul li:first-child');
}

$(document).ready(function() {

  paragraphSelector();
  lastImageSelector();
  ninjaBabySelector();
  divSelector();
  firstListItem();

});
