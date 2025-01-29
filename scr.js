// Categories and their subjects
const categories = {
    "Percepcja wzrokowa": ["Kolokwium 1", "Egzamin 1 (książka)", "Egzamin 1 (prezentacja)"],
    "Podstawy samokształcenia": ["Tu", "Nic", "Nie","Ma"]
};

// Dynamic question container
const $container = $("#questions-container");
const $goBackButton = $("#go-back-button"); // Get the go back button

// Function to setup the dark mode toggle
function setupDarkModeToggle() {
    $("#dark-mode-toggle").on("change", function () {
        $("body").toggleClass("dark-mode");
    });
}

// Show category and subject buttons
function showCategoryButtons() {
    $container.empty(); // Clear existing content
    
    Object.keys(categories).forEach((category) => {
        // Create a category button
        const $categoryButton = $("<button>")
            .addClass("category-button")
            .text(category)
            .on("click", function () {
                showSubjectButtons(category);
            });
        $container.append($categoryButton);
    });

    // Hide the "Go Back" button when in category view
    $goBackButton.hide();
}

// Show subject buttons for the selected category
function showSubjectButtons(category) {
    $container.empty(); // Clear existing content
    
    categories[category].forEach((subject) => {
        // Create a subject button that links to the sub-website with query parameters
        const $subjectButton = $("<a>")
            .addClass("subject-button")
            .text(subject)
            .attr(
                "href",
                `subject.html?category=${encodeURIComponent(category)}&subject=${encodeURIComponent(subject)}`
            ); // Add query parameters to the link
        $container.append($subjectButton);
    });

    // Show the "Go Back" button when in subject view
    $goBackButton.show();

    // Add an event listener to the "Go Back" button to go back to category view
    $goBackButton.off().on("click", function () {
        showCategoryButtons(); // Show categories again
    });
}

// Detect scrolling and set the disableClickFlag
$(window).on("scroll", function () {
    disableClickFlag = true;

    // Clear any existing timer
    clearTimeout($.data(this, "scrollTimer"));

    // Reset the flag 150ms after scrolling stops
    $.data(this, "scrollTimer", setTimeout(function () {
        disableClickFlag = false;
    }, 150));
});

// Initialize the application
$(document).ready(function () {
    setupDarkModeToggle();
    showCategoryButtons(); // Show categories on page load
});
