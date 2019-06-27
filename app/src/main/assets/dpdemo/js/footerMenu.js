$(document).ready(function () {
    $("div .subMenu").click(function () {
        $("footer .active").removeClass("active");
        $(this).addClass("active");
    });
    $("div .subMenu")[0].click();
});