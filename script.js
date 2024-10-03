import TermekekPublikusController from './controller/TermekekPublikusController.js';

let controller;

function init() {
  controller = new TermekekPublikusController();
}

// Menüpontok megjelenítése
function showTermekek() {
  $('#termekek-container').show();
  $('#kosar-container').show();
}

function showAdmin() {
  $('#termekek-container').hide();
  $('#kosar-container').hide();
}

$(document).ready(function() {
  init();

  // Menüpontok eseménykezelői
  $('nav button').on('click', function() {
    const buttonText = $(this).text();
    if (buttonText === 'Termékek') {
      showTermekek();
    } else if (buttonText === 'Admin') {
      showAdmin();
    }
  });
});