$(document).ready(function () {
    $('.nav-button').click(function () {
        $('body').toggleClass('open-menu');
    });

    if (localStorage.getItem("overAge") != "true") {
        setTimeout(function () {
            $("#myModal").addClass("loadet");
        }, 100);

        $("#overAge").click(function () {
            $("#myModal").removeClass("loadet");
            localStorage.setItem("overAge", true);
        })
    }

});

$(document).ready(function () {
    $("#myModal").modal('show');
    $("body").toggleClass("modal-open");
});


const beers = "http://majroslyng.dk/kea/eksamen4/wordpress/wp-json/wp/v2/beer";
const categories = "http://majroslyng.dk/kea/eksamen4/wordpress/wp-json/wp/v2/categories";
