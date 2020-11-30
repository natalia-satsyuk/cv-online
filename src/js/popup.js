$(".education__show").click(function () {
    $(this).parent(".education__item").children(".education__sertificate").addClass("open");
    $("body").addClass("overlay");
});

  $(".close").click(function () {
    $(".education__sertificate").removeClass("open");
});

  $(".for-overlay").click(function () {
    $(".education__sertificate").removeClass("open");
});