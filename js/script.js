// Copyright (c) 2020 Mark Palfi All rights reserved
//
// Created by: Mark Palfi
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const localStorage = 0

  //process
  if (localStorage.hits)(
    localStorage.hits = Number(localStorage.hits) + 1
  )
  else (
    localStorage.hits = 1
  )
  
  // output
  document.getElementById("Clicks").innerHTML =
    "You've Clicked " + localStorage + " time(s)"
}
