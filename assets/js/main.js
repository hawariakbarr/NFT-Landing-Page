/*
Template Name: Appvilla - Creative Landing Page HTML Template.
Author: GrayGrids
*/

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

    //===== mobile-menu-btn
    // let navbarToggler = document.querySelector(".mobile-menu-btn");
    // navbarToggler.addEventListener('click', function() {
    //     navbarToggler.classList.toggle("active");
    // });


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
        var var2 = $(`.overlay`);
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

function dirtyPandaTraits() {
    var dropImg = $(`.traits-canvas img.selected`);
    var dropName = $(`.left-up`);
    var dropPercentage = $(`.left-down span`);
    var dropSection = $(`.right-up`);
    var dropRarity = $(`.right-down`);

    function drawCanvas(traitsSrc, traitsName, traitsSection, traitsRarity, traitsPercentage) {
        dropImg.attr(`src`, traitsSrc);
        dropName.html(traitsName);
        dropSection.html(traitsSection);
        dropRarity.html(traitsRarity);
        dropPercentage.html(traitsPercentage);
        // dropPercentage.html(`???`);
    }

    function resetSelectRarity() {
        var selectRarityOptions = $(`.js-trait-rarity option`);
        var selectRarityOptionsAll = $(`.js-trait-rarity option[value="all"]`);
        selectRarityOptions.removeAttr(`selected`);
        selectRarityOptionsAll.attr(`selected`, `selected`);
    }

    $('body').on('change', '.js-trait-section', function() {
        var thisVal = $(this).val();
        var canvas = $(`.traits-canvas`);
        var repo = $(`.traits-repo span[data-section="${thisVal}"]`);
        var repoDrop = $(`.js-traits-drop`);
        var markup = ``;

        repo.each(function() {
            var repoName = $(this).data(`name`);
            var repoSection = $(this).data(`section`);
            var repoRarity = $(this).data(`rarity`);
            var repoPercentage = $(this).data(`percentage`);
            var repoPath = $(this).data(`path`);

            markup = markup + `
                <div class="col-4 thumb-item ${repoRarity}">
                    <div class="canvas-thumb ${repoRarity} js-thumb-to-canvas" 
                        data-name="${repoName}" 
                        data-section="${repoSection}" 
                        data-rarity="${repoRarity}" 
                        data-percentage="${repoPercentage}" 
                    >
                        <img src="${repoPath}" class="w-100">
                    </div>
                </div>
            `;
        });

        canvas.addClass('loading');

        setTimeout(function() {
            canvas.removeClass('loading');
            repoDrop.html(markup);

            var firstThumb = $(`.canvas-thumb`).first();

            var traitsSrc = firstThumb.find('img').attr('src');
            var traitsName = firstThumb.data('name');
            var traitsRarity = firstThumb.data('rarity');
            var traitsSection = firstThumb.data('section');
            var traitsPercentage = firstThumb.data('percentage');

            firstThumb.addClass(`active`);

            drawCanvas(traitsSrc, traitsName, traitsSection, traitsRarity, traitsPercentage);

            resetSelectRarity();
        }, 750);
    });

    $('body').on('click', '.js-thumb-to-canvas', function() {
        var traitsSrc = $(this).find('img').attr('src');
        var traitsName = $(this).data('name');
        var traitsRarity = $(this).data('rarity');
        var traitsSection = $(this).data('section');
        var traitsPercentage = $(this).data('percentage');

        drawCanvas(traitsSrc, traitsName, traitsSection, traitsRarity, traitsPercentage);

        $(`.canvas-thumb`).removeClass(`active`);
        $(this).addClass(`active`);
    });

    $('body').on('change', '.js-trait-rarity', function() {
        var thisVal = $(this).val();
        var thumbItem = $(`.thumb-item`);
        var thumbItemSelected = $(`.thumb-item.${thisVal}`);

        if (thisVal != 'all') {
            thumbItem.addClass(`d-none`);
            thumbItemSelected.removeClass(`d-none`);
        } else {
            thumbItem.removeClass(`d-none`);
        }
    });

    $('body').on('click', '.js-traits-next', function() {

        // get current active thumb
        var activeThumb = $(`.canvas-thumb.active`);

        // get next thumb
        var nextThumb = activeThumb.parents(`.thumb-item`).next().find(`.canvas-thumb`);

        if (nextThumb.length > 0) {
            // get data of that thumb
            var traitsSrc = nextThumb.find('img').attr('src');
            var traitsName = nextThumb.data('name');
            var traitsRarity = nextThumb.data('rarity');
            var traitsSection = nextThumb.data('section');
            var traitsPercentage = nextThumb.data('percentage');

            // draw on canvas
            drawCanvas(traitsSrc, traitsName, traitsSection, traitsRarity, traitsPercentage);

            // remove active
            activeThumb.removeClass(`active`);

            // set next to active
            nextThumb.addClass(`active`);
        }
    });

    $('body').on('click', '.js-traits-previous', function() {

        // get current active thumb
        var activeThumb = $(`.canvas-thumb.active`);

        // get next thumb
        var prevThumb = activeThumb.parents(`.thumb-item`).prev().find(`.canvas-thumb`);

        if (prevThumb.length > 0) {
            // get data of that thumb
            var traitsSrc = prevThumb.find('img').attr('src');
            var traitsName = prevThumb.data('name');
            var traitsRarity = prevThumb.data('rarity');
            var traitsSection = prevThumb.data('section');
            var traitsPercentage = prevThumb.data('percentage');

            // draw on canvas
            drawCanvas(traitsSrc, traitsName, traitsSection, traitsRarity, traitsPercentage);

            // remove active
            activeThumb.removeClass(`active`);

            // set next to active
            prevThumb.addClass(`active`);
        }
    });
}