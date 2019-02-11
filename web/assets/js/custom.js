$(function() {
    'use strict';

    // Smooth Scroll Effect
    smoothScroll();

    // Open Navigation Menu
    $('.pr-nav-trigger').on('click', function(event) {
        event.preventDefault();

        toggleNavigation(true);
    });

    // Close Navigation Menu
    $('.pr-close-nav, .pr-overlay').on('click', function(event) {
        event.preventDefault();

        toggleNavigation(false);
    });

    // Select a New Section
    $('.pr-nav').on('click', function(event) {
        event.preventDefault();

        // Detect Exact Element of the Event (Delegate)
        if ($(event.target).is('a') || $(event.target).parents('a').length) {
            var target = $(event.target).closest('li');

            if (!target.hasClass('pr-selected')) {
                // Update Navigation Menu for Assigning .pr-selected Class to Selected Item and Remove from Old One
                target.addClass('pr-selected').siblings('.pr-selected').removeClass('pr-selected');

                var link = target.children(':first').attr('href');

                setTimeout(function() { window.location = link }, 400);
            }

            // Close Navigation Menu
            toggleNavigation(false);
        }
    });
});