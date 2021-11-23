(function() {
    //===== Prealoder

    window.onload = function() {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    // window.onscroll = function() {
    //     var header_navbar = document.querySelector(".navbar-area");
    //     var sticky = header_navbar.offsetTop;

    //     var logo = document.querySelector('.navbar-brand img')
    //     if (window.pageYOffset > sticky) {
    //         header_navbar.classList.add("sticky");
    //         logo.src = 'assets/images/logo/logo.svg';
    //     } else {
    //         header_navbar.classList.remove("sticky");
    //         logo.src = 'assets/images/logo/white-logo.svg';
    //     }

    //     // show or hide the back-top-top button
    //     var backToTo = document.querySelector(".scroll-top");
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         backToTo.style.display = "flex";
    //     } else {
    //         backToTo.style.display = "none";
    //     }
    // };



    // section menu active
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };

    window.document.addEventListener('scroll', onScroll);

    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    // WOW active
    new WOW().init();

    let filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
    filterButtons.forEach(e =>
        e.addEventListener('click', () => {

            let filterValue = event.target.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            });
        })
    );

    var elements = document.getElementsByClassName("portfolio-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function() {
            var el = elements[0];
            while (el) {
                if (el.tagName === "BUTTON") {
                    el.classList.remove("active");
                }
                el = el.nextSibling;
            }
            this.classList.add("active");
        };
    };
})();



function dirtyPandaUi() {

    var scrollPos = 0;

    // scroll-based functions
    document.addEventListener(`scroll`, function() {
        showHidePaw();
    });

    // run when page load
    showHidePaw();

    function showHidePaw() {
        var page = document.getElementsByTagName(`html`)[0];
        var scrollPos = page.scrollTop;

        if (scrollPos < 700) {
            $(`.mobile-open-paw`).addClass(`desktop-hide`);
        } else {
            $(`.mobile-open-paw`).removeClass(`desktop-hide`);
        }
    }

    $('body').on('click', '.add-spinner', function() {
        var var1 = $(this).html();
        var var2 = '<div class="spinner-content">' + var1 + '</div>';
        var var3 = '<div class="spinner-contain"><div class="spinner-border"></div></div>';
        $(this).html(var2 + var3);
    });

    $('body').on('click', '.js-toggle-menu', function() {
        var var1 = $(`.mobile-menu`);
        var var2 = $(`#overlay`);
        var var3 = $(`.js-toggle-menu`);

        if (!var1.hasClass(`active`)) {
            var1.addClass(`active`);
            var2.addClass(`active`);
            var3.addClass(`active`);
        } else {
            var1.removeClass(`active`);
            var2.removeClass(`active`);
            var3.removeClass(`active`);
        }
    });

    $('body').on('click', '#overlay, .js-close-menu', function() {
        var var1 = $(`.mobile-menu`);
        var var2 = $(`#overlay`);
        var var3 = $(`.js-toggle-menu`);

        if (!var1.hasClass(`active`)) {
            var1.addClass(`active`);
            var2.addClass(`active`);
            var3.addClass(`active`);
        } else {
            var1.removeClass(`active`);
            var2.removeClass(`active`);
            var3.removeClass(`active`);
        }
    });
}