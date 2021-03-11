
/* Formulário de contato */

(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    var main_wind = $(window);

    main_wind.on('scroll', function () {
        var consultScroll = $('#top');
        if ($(this).scrollTop() > 400) {
            consultScroll.fadeIn();
            consultScroll.removeClass('invisivel');
        } else {
            consultScroll.fadeOut();
        }
    });

    var goScroll = $('#top');
    goScroll.on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 800);

    });
})();

