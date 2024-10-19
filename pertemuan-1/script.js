const popup = document.getElementById("popup");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const popup4 = document.getElementById("popup4");
const popup5 = document.getElementById("popup5");
const popup6 = document.getElementById("popup6");

function showPopup() {
  popup.classList.add("show-add-popup");
}

function showPopup2() {
  popup2.classList.add("show-confirmed-add");
  closePopup();
}

function showPopup3() {
  popup3.classList.add("show-edit-popup");
}

function showPopup4() {
  popup4.classList.add("show-confirmed-edit");
  closePopup3();
}

function showPopup5() {
  popup5.classList.add("show-confirmed-delete");
}

function showPopup6() {
  popup6.classList.add("show-confirmed-deleted");
  closePopup5();
}

function closePopup() {
  popup.classList.remove("show-add-popup");
}

function closePopup2() {
  popup2.classList.remove("show-confirmed-add");
}

function closePopup3() {
  popup3.classList.remove("show-edit-popup");
}

function closePopup4() {
  popup4.classList.remove("show-confirmed-edit");
}

function closePopup5() {
  popup5.classList.remove("show-confirmed-delete");
}

function closePopup6() {
  popup6.classList.remove("show-confirmed-deleted");
}
