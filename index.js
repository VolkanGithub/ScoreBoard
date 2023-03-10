let countHome = 0;
let countGuest = 0;

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

function home1() {
  countHome += 1;
  homeEl.textContent = countHome;
}

function home2() {
  countHome += 2;
  homeEl.textContent = countHome;
}

function home3() {
  countHome += 3;
  homeEl.textContent = countHome;
}

function guest1() {
  countGuest += 1;
  guestEl.textContent = countGuest;
}

function guest2() {
  countGuest += 2;
  guestEl.textContent = countGuest;
}
function guest3() {
  countGuest += 3;
  guestEl.textContent = countGuest;
}

function reset() {
  countHome = 0;
  countGuest = 0;
  homeEl.textContent = countHome;
  guestEl.textContent = countGuest;
}
