"use strict";

// links
const sideLInksEl = document.querySelectorAll(
    ".sidebar .side-menu li a:not(.logout)",
);

sideLInksEl.forEach((links) => {
    const li = links.parentElement;
    links.addEventListener("click", () => {
        sideLInksEl.forEach((i) => {
            i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
    });
});

// sidebar
const menuBar = document.querySelector(".content nav .cls-sidebar");
const sideBarEl = document.querySelector(".sidebar");

// menus
menuBar.addEventListener("click", () => {
    sideBarEl.classList.toggle("close");
});

const searchbtn = document.querySelector(
    ".content nav form .form-input button",
);
const searchIcon = document.querySelector(
    ".content nav form .form-input button .bx",
);
const searchForm = document.querySelector(".content nav form");

searchbtn.addEventListener("click", function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle("show");

        if (searchForm.classList.contains("show")) {
            searchIcon.classList.replace("bx-search", "bx-x");
        } else {
            searchIcon.classList.replace("bx-x", "bx-search");
        }
    }
});

// resize
window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        sideBarEl.classList.add("close");
    } else {
        sideBarEl.classList.remove("close");
    }
});

// dark and light mode
const darkEl = document.querySelector(".side-menu ul li a");
const darkIcon = document.querySelector(".side-menu ul li .bx.bx-moon");

darkEl.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkIcon.classList.replace("bx-moon", "bx-sun");
    } else {
        darkIcon.classList.replace("bx-sun", "bx-moon");
    }
});

// navigator
document.addEventListener('DOMContentLoaded', function () {
    const mainDash = document.querySelector(".sidebar .side-menu li.active a");
    const listings = document.querySelector(".sidebar .side-menu li:nth-child(2) a");
    const potentialbuyers = document.querySelector(".sidebar .side-menu li:nth-child(3) a");
    const buyingoffers = document.querySelector(".sidebar .side-menu li:nth-child(4) a");

    const main = document.getElementById("main-1");
    const main2 = document.getElementById("main-2");
    const main3 = document.getElementById("main-3");
    const main4 = document.getElementById("main-4");

    if (mainDash) {
        mainDash.addEventListener("click", () => {
            hideAll();
            main.classList.remove("d-none");
        });
    } else {
        console.log("mainDash element not found")
    }

    if (listings) {
        listings.addEventListener("click", () => {
            hideAll();
            main2.classList.remove("d-none");
        });
    } else {
        console.log("Listings element not found");
    }


    if (potentialbuyers) {
        potentialbuyers.addEventListener("click", () => {
            hideAll();
            main3.classList.remove("d-none");
        });
    } else {
        console.log("potentialbuyers element not found");
    }

    if (buyingoffers) {
        buyingoffers.addEventListener("click", () => {
            hideAll();
            main4.classList.remove("d-none");
        });
    } else {
        console.log("Buying Offers element not found");
    }

    function hideAll() {
        if (main) main.classList.add("d-none");
        if (main2) main2.classList.add("d-none");
        if (main3) main3.classList.add("d-none");
        if (main4) main4.classList.add("d-none");
    }
});

//listings navigato:
document.addEventListener('DOMContentLoaded', function () {
    console.log('script is loaded')
    const createListing = document.querySelector('.add_btn')
    const backToListing = document.querySelector('.back_btn')
    const resultcontainer = document.querySelector(".result-container");
    const filtercard = document.querySelector(".form-card");
    const listingcard = document.querySelector(".listing-card");
    const listingheader = document.querySelector(".listing-header");

    if (createListing) {
        console.log('Create listing Element found')
        createListing.addEventListener("click", () => {
            hideAll();
            if (listingheader) {
                listingheader.classList.remove("d-none")
            } else {
                console.log('listing-header not-found')
            }
            if (listingcard) {
                listingcard.classList.remove("d-none");
            } else {
                console.log('listing-card not-found')
            }

            if (createListing) {
                createListing.classList.add('d-none')
            } else {
                console.log('This action is not allowed')
            }

            if (backToListing) {
                backToListing.classList.remove('d-none')
            }
        });
    } else {
        console.log("Create Listing element not found")
    }

    if (backToListing) {
        backToListing.addEventListener('click', () => {
            revealAll()
            hide()
        });
    } else {
        console.log('Back to listing class not found')
    }

    function hideAll() {
        if (resultcontainer) resultcontainer.classList.add("d-none");
        if (filtercard) filtercard.classList.add("d-none");
        if (listingcard) listingcard.classList.add("d-none");
        if (listingheader) listingheader.classList.add("d-none")
    }

    function revealAll() {
        if (resultcontainer) resultcontainer.classList.remove("d-none");
        if (filtercard) filtercard.classList.remove("d-none");
        if (createListing) createListing.classList.remove("d-none")
    }

    function hide() {
        if (listingcard) listingcard.classList.add("d-none");
        if (listingheader) listingheader.classList.add("d-none")
        if (backToListing) backToListing.classList.add("d-none")
    }

});



//profile dropdown scripts
let card = document.querySelector(".card"); //declearing profile card element
let profilePicture = document.querySelector(".profile"); //declearing profile picture

profilePicture.addEventListener("click", function () { //on click on profile picture toggle hidden class from css
    card.classList.toggle("hidden")
})