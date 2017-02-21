var showView = function(viewClass) {
    var view = document.querySelector(viewClass);
    if (!!view) {
        view.classList.add("show");
    }
}

var closeView = function(viewClass) {
    var view = document.querySelector(viewClass);
    if (!!view) {
        view.classList.remove("show");
    }
}

var showModalView = function(viewClass) {
    showView(".modal_overlay");
    showView(viewClass);
}

var closeModalView = function(viewClass) {
    closeView(".modal_overlay");
    closeView(viewClass);
}

var closeAllView = function() {
    closeModalView(".modal-added-product");
    closeModalView(".modal-write-us");
    closeModalView(".modal-map");
}

var modalOverlayView = document.querySelector(".modal_overlay");
modalOverlayView.addEventListener("click", function(event){
    event.preventDefault();
    closeAllView();
});

window.addEventListener("keydown", function(event){
    if (event.keyCode === 27) {
        closeAllView();
    }
});

// Покупка товара
var buyButtons = document.querySelectorAll(".product-item__buy");
var continueBuyButton = document.querySelector(".model-added-product__continue");
var closeBuyButton = document.querySelector(".model-added-product__close");

for (var i=0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function(event) {
        event.preventDefault();
        showModalView(".modal-added-product")
    })
}

closeBuyButton.addEventListener("click", function(event) {
    event.preventDefault();
    closeModalView(".modal-added-product")
});

continueBuyButton.addEventListener("click", function(event) {
    event.preventDefault();
    closeModalView(".modal-added-product")
});

// Напишите нам
var contactsButton = document.querySelector(".contacts__btn");
var contactUsCloseButton = document.querySelector(".modal-write-us__close");

if (!!contactsButton) {
    contactsButton.addEventListener("click", function(event) {
        event.preventDefault();
        showModalView(".modal-write-us");
    });
}

if (!!contactUsCloseButton) {
    contactUsCloseButton.addEventListener("click", function(event) {
        event.preventDefault();
        closeModalView(".modal-write-us")
    });
}

// Карта
var mapButton = document.querySelector(".contacts__our-location");
if (!!mapButton) {
    mapButton.addEventListener("click", function(event) {
        event.preventDefault();
        showModalView(".modal-map");
    });
}