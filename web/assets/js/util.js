$(window).on('load', function(e) {
    'use strict';

    // Page Preloader
    $('.page-preloader').fadeOut('slow');
});

// Smooth Scroll Effect
function smoothScroll() {
    'use strict';

    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            // Smooth Page Scroll to Target
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
}

// Toggle Navigation Menu
function toggleNavigation(visibility) {
    'use strict';

    $('.pr-nav-container, .pr-overlay').toggleClass('is-visible', visibility);

    $('main').toggleClass('scale-down', visibility);
}

// Contact Form Submission
function submitContact(contactForm) {
    'use strict';

    var check = true;

    var firstNameField = $('#first-name');
    var lastNameField = $('#last-name');
    var emailField = $('#email');
    var phoneField = $('#phone');
    var messageField = $('#message');

    if ($.trim(firstNameField.val()) == '') {
        showValidate(firstNameField);

        check = false;
    } else {
        hideValidate(firstNameField);
    }

    if ($.trim(lastNameField.val()) == '') {
        showValidate(lastNameField);

        check = false;
    } else {
        hideValidate(lastNameField);
    }

    if ($.trim(emailField.val()) == '') {
        showValidate(emailField);

        check = false;
    } else if ($.trim(emailField.val()).match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        showValidate(emailField);

        check = false;
    } else {
        hideValidate(emailField);
    }

    if ($.trim(messageField.val()) == '') {
        showValidate(messageField);

        check = false;
    } else {
        hideValidate(messageField);
    }

    if (check) {
        var responseDisplay = $('#response-message');
        responseDisplay.removeClass('alert-success').removeClass('alert-danger').addClass('alert-primary').html('Please Wait...');

        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: contactForm.serialize(),
            success: function(response) {
                var output = $.parseJSON(response);

                if (output.Type == 'Success') {
                    responseDisplay.removeClass('alert-danger').addClass('alert-success').html(output.Messsage);
                } else if (output.Type == 'Error') {
                    responseDisplay.removeClass('alert-success').addClass('alert-danger').html(output.Messsage);
                }
            }
        });
    }
}

// Show Contact Form Validaton Message
function showValidate(input) {
    'use strict';

    var thisAlert = $(input).parent();

    $(thisAlert).addClass('validate-alert');
}

// Hide Contact Form Validaton Message
function hideValidate(input) {
    'use strict';

    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('validate-alert');
}

// Google Map
function initMap() {
    'use strict';

    // Read Map Settings from HTML
    var lat = $('#contact_map').data('lat');
    var lng = $('#contact_map').data('lng');
    var title = $('#contact_map').data('title');
    var content = $('#contact_map').data('content');

    var latLng = { lat: lat, lng: lng };

    // Set Map Options and Theme
    var contact_map = new google.maps.Map($('#contact_map')[0], {
        center: latLng,
        zoom: 10,
        scrollwheel: false,
        mapTypeControl: false,
        styles: [{
            'elementType': 'geometry',
            'stylers': [{
                'color': '#222222'
            }]
        }, {
            'elementType': 'labels.icon',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#757575'
            }]
        }, {
            'elementType': 'labels.text.stroke',
            'stylers': [{
                'color': '#222222'
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#757575'
            }]
        }, {
            'featureType': 'administrative.country',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#9e9e9e'
            }]
        }, {
            'featureType': 'administrative.land_parcel',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'administrative.locality',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#bdbdbd'
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#757575'
            }]
        }, {
            'featureType': 'poi.park',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#181818'
            }]
        }, {
            'featureType': 'poi.park',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#616161'
            }]
        }, {
            'featureType': 'poi.park',
            'elementType': 'labels.text.stroke',
            'stylers': [{
                'color': '#1b1b1b'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#2c2c2c'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#8a8a8a'
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#373737'
            }]
        }, {
            'featureType': 'road.highway',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#3c3c3c'
            }]
        }, {
            'featureType': 'road.highway.controlled_access',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#4e4e4e'
            }]
        }, {
            'featureType': 'road.local',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#616161'
            }]
        }, {
            'featureType': 'transit',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#757575'
            }]
        }, {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#000000'
            }]
        }, {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#3d3d3d'
            }]
        }]
    });

    // Create a Custom Map Marker
    var marker = new google.maps.Marker({
        position: latLng,
        map: contact_map,
        icon: 'images/marker.png',
        title: title
    });

    // Generate Map Information Tip from HTML
    var infowindow = new google.maps.InfoWindow({
        content: '<strong>' + title + '</strong><p>' + content + '</p>'
    });

    // Set Marker on the Map
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(contact_map, marker);
    });

    infowindow.open(contact_map, marker);
}

// Color Theme Selector
function changeThemeColor() {
    var colorSheets = [{
            color: '#a67b5b',
            title: 'Beige',
            href: './assets/css/color-scheme/color-beige.css'
        },
        {
            color: '#2980b9',
            title: 'Blue',
            href: './assets/css/color-scheme/color-blue.css'
        },
        {
            color: '#ccb366',
            title: 'Brown',
            href: './assets/css/color-scheme/color-brown.css'
        },
        {
            color: '#d2691e',
            title: 'Chocolate',
            href: './assets/css/color-scheme/color-chocolate.css'
        },
        {
            color: '#6f4e37',
            title: 'Coffee',
            href: './assets/css/color-scheme/color-coffee.css'
        },
        {
            color: '#ad6f69',
            title: 'Copper',
            href: './assets/css/color-scheme/color-copper.css'
        },
        {
            color: '#d3af37',
            title: 'Gold',
            href: './assets/css/color-scheme/color-gold.css'
        },
        {
            color: '#229954',
            title: 'Green',
            href: './assets/css/color-scheme/color-green.css'
        },
        {
            color: '#6e7f80',
            title: 'Metal',
            href: './assets/css/color-scheme/color-metal.css'
        },
        {
            color: '#d68910',
            title: 'Orange',
            href: './assets/css/color-scheme/color-orange.css'
        },
        {
            color: '#ff69b4',
            title: 'Pink',
            href: './assets/css/color-scheme/color-pink.css'
        },
        {
            color: '#a569bd',
            title: 'Purple',
            href: './assets/css/color-scheme/color-purple.css'
        },
        {
            color: '#cd6155',
            title: 'Red',
            href: './assets/css/color-scheme/color-red.css'
        },
        {
            color: '#d42b47',
            title: 'Ruby',
            href: './assets/css/color-scheme/color-ruby.css'
        },
        {
            color: '#fdd835',
            title: 'Yellow',
            href: './assets/css/color-scheme/color-yellow.css'
        }
    ];

    ColorSwitcher.init(colorSheets);
}