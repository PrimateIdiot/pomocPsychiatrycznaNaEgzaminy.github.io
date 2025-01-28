// Categories and their subjects
const categories = {
    "Percepcja wzrokowa": ["Subject A", "Subject B", "Subject C"],
    "Podstawy samokształcenia": ["Subject X", "Subject Y", "Subject Z"]
};

// Dynamic question container
const $container = $("#questions-container");

let disableClickFlag = false;
let currentCategory = null; 
let currentSubject = null; 
let currentPage = 'categories'; 

// Detect scrolling and disable clicks during scrolling
$(window).on("scroll", function () {
    disableClickFlag = true;
    clearTimeout($.data(this, "scrollTimer"));
    $.data(this, "scrollTimer", setTimeout(function () {
        disableClickFlag = false;
    }, 150));
});

// Setup dark mode toggle
function setupDarkModeToggle() {
    $("#dark-mode-toggle").on("change", function () {
        $("body").toggleClass("dark-mode");
        console.log($("body").hasClass("dark-mode") ? "Dark mode enabled" : "Dark mode disabled");
    });
}

// Show category buttons
function showCategoryButtons() {
    $container.empty();
    Object.keys(categories).forEach((category) => {
        $("<button>")
            .fadeIn(200)
            .addClass("category-button")
            .text(category)
            .on("click", () => showSubjectButtons(category))
            .appendTo($container);
    });

    currentPage = 'categories';

    // Handle reshuffle button visibility
    toggleReshuffleButton(false);
}

// Show subject buttons for the selected category
function showSubjectButtons(category) {
    $container.empty();
    categories[category].forEach((subject) => {
        $("<button>")
            .addClass("subject-button")
            .text(subject)
            .on("click", () => loadQuestions(category, subject))
            .appendTo($container);
    });

    currentCategory = category;
    currentSubject = null; 

    currentPage = 'subjects';

    // Handle reshuffle button visibility
    toggleReshuffleButton(false);
}

// Load questions from a JSON file based on the subject
function loadQuestions(category, subject) {
    $container.empty();
    const jsonFileName = subject.replace(" ", "_").toLowerCase() + ".json";

    $.getJSON(jsonFileName)
        .done((data) => {
            data.forEach((pair) => {
                const $qaContainer = $("<div>").addClass("qa-container");

                const $questionDiv = $("<div>").addClass("question").text(pair.question);
                const $answerDiv = $("<div>").addClass("answer").text(pair.answer).hide();

                $qaContainer.append($questionDiv, $answerDiv).appendTo($container);

                $questionDiv.on("click", function (e) {
                    if (disableClickFlag) {
                        e.preventDefault();
                        return;
                    }
                    $answerDiv.stop(true, true).slideToggle();
                });
            });

            currentSubject = subject;
            currentPage = 'questions';

            // Show reshuffle button
            toggleReshuffleButton(true);
        })
        .fail(() => {
            $container.append("<p>Could not load questions. Please try again later.</p>");
        });
}

// Attach or detach reshuffle button functionality
function toggleReshuffleButton(shouldShow) {
    if (shouldShow) {
        $("#reshuffle-questions").fadeIn(200);
        $("#reshuffle-questions").off("click").on("click", reshuffleQuestions);
    } else {
        $("#reshuffle-questions").fadeOut(200);
    }
}

// Reshuffle questions
function reshuffleQuestions() {
    const questionsDivs = $(".question").toArray().sort(() => Math.random() - 0.5);
    $("#questions-container").empty().append(questionsDivs);

    // Add spinning animation to the reshuffle button
    const $reshuffleButton = $("#reshuffle-questions");
    $reshuffleButton.addClass("spinning");
    setTimeout(() => $reshuffleButton.removeClass("spinning"), 500); // Remove spin after animation
}

// Initialize the application
$(document).ready(function () {
    setupDarkModeToggle();
    showCategoryButtons();
    toggleReshuffleButton(false);  // Initially hide reshuffle button
});
