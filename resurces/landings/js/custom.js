$(document).ready(function () {
  // $('.js-show-video').click(function () {
  // 	var id = $(this).data('video');
  // 	var parent = $(this).parent()[0];
  // 	var iframe = '<iframe class="js-show-video" src="https://www.youtube.com/embed/' + id + '?autoplay=1&amp;loop=1&amp;&amp;playlist=Video_ID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  // 	$(parent).empty();
  // 	$(parent).append(iframe);
  // });

  $(".order-form label").hide();
  $(".order-form input").addClass("my-input");

  $(".product-info-size__item").click(function () {
    $(this).siblings().removeClass("active-size");
    $(this).addClass("active-size");
  });

  $(".product-info-color__item").click(function () {
    $(this).siblings().removeClass("active-color");
    $(this).addClass("active-color");
    var dot = "";
    if ($(this).data("color") == "white") {
      dot = ".col-wh";
    } else dot = ".col-bl";
    $(this)
      .closest(".product")
      .find(dot)
      .removeClass("hidden-galery")
      .addClass("curent-order")
      .siblings()
      .addClass("hidden-galery")
      .removeClass("curent-order");
  });

  $(".product-info-color__item").click(function () {
    $(this).siblings().removeClass("active-color");
    $(this).addClass("active-color");
    var dot = "";
    if ($(this).data("color") == "white") {
      dot = ".col-wh";
    } else if ($(this).data("color") == "powder") {
      dot = ".col-pw";
    } else {
      dot = ".col-pk";
    }
    $(this)
      .closest(".product")
      .find(dot)
      .removeClass("hidden-galery")
      .addClass("curent-order")
      .siblings()
      .addClass("hidden-galery")
      .removeClass("curent-order");
  });

  // $('.prod-sizes__item').click(function () {
  // 	$(this).siblings().removeClass('active-size');
  // 	$(this).addClass('active-size');
  // })

  $(".js-slid").slick({
    dots: true,
    arrows: true,
    fade: true,
    nextArrow: $(".sl-r-1"),
    prevArrow: $(".sl-l-1"),
  });

  $(".js-slid-1").slick({
    dots: true,
    arrows: true,
    fade: true,
    nextArrow: $(".sl-r-2"),
    prevArrow: $(".sl-l-2"),
  });
  $(".js-slid-2").slick({
    dots: true,
    arrows: true,
    fade: true,
    nextArrow: $(".sl-r-3"),
    prevArrow: $(".sl-l-3"),
  });
  $(".js-slid-4").slick({
    dots: true,
    arrows: true,
    fade: true,
    nextArrow: $(".sl-r-4"),
    prevArrow: $(".sl-l-4"),
  });
  $(".js-slid-3").slick({
    dots: true,
    arrows: false,
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return "<a>" + (i + 1) + "</a>";
    },
  });
  //=========================================================слайдер слик

  var $page = $("html, body");
  $('a[href*="#"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 30,
      },
      600
    );
    return false;
  });
  //=========================================================скролл к якорю

  $(
    '[data-fancybox="g1"], [data-fancybox="g2"],[data-fancybox="g3"],[data-fancybox="g4"],[data-fancybox="g5"],[data-fancybox="g6"],[data-fancybox="g7"],[data-fancybox="g8"],[data-fancybox="g9"] '
  ).fancybox({
    loop: true,
  });
  //=========================================================галерея

  function formatDate(args) {
    var options = {
      date: null,
      separator: ".",
      format: "default",
      locale: "default",
    };

    $.extend(options, args);

    var date = null;

    if (Object.prototype.toString.call(options.date) === "[object Date]") {
      date = options.date;
    } else if (
      new Date(options.date) !== "Invalid Date" &&
      !isNaN(new Date(options.date))
    ) {
      date = new Date(options.date);
    } else {
      console.log("Incorrect date input format!");
      return;
    }

    var year = date.getFullYear(),
      month = date.getMonth() + 1, // January is 0
      day = date.getDate();

    var separator = options.separator,
      format = options.format,
      locale = options.locale;

    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    switch (format) {
      case "american": // month dd, yyyy
        month = date.toLocaleString(locale, { month: "long" }) + " " + day;
        return [month, year].join(", ");
      default: // dd.mm.yyyy
        return [day, month, year].join(separator);
    }
  }

  var tomorrow = new Date();

  var formattedDate = formatDate({
    date: tomorrow.setDate(tomorrow.getDate() + 10),
    separator: ".",
    format: "default",
    locale: "ru-RU",
  });

  $(".date").text(formattedDate).fadeTo(1000, 1);

  //==========================================================================

  // if ($("#modal")) {
  //   var modal = new RModal(document.getElementById("modal"), {
  //     //content: 'Abracadabra'
  //     beforeOpen: function (next) {
  //       $(".modal-content").css({
  //         opacity: "0",
  //         transform: "translate(0, -100px)",
  //       });
  //       next();
  //     },
  //     afterOpen: function () {
  //       $(".modal-content").css({
  //         opacity: "1",
  //         transform: "translate(0, 0px)",
  //       });
  //     },

  //     beforeClose: function (next) {
  //       // console.log('beforeClose');
  //       next();
  //     },
  //     afterClose: function () {
  //       $(".modal-content").css({
  //         opacity: "0",
  //         transform: "translate(0, 100px)",
  //       });
  //     },
  //   });

  //   var Tmodal = new RModal(document.getElementById("modal-th"), {
  //     //content: 'Abracadabra'
  //     beforeOpen: function (next) {
  //       $(".modal-content").css({
  //         opacity: "0",
  //         transform: "translate(0, -100px)",
  //       });
  //       next();
  //     },
  //     afterOpen: function () {
  //       $(".modal-content").css({
  //         opacity: "1",
  //         transform: "translate(0, 0px)",
  //       });
  //     },

  //     beforeClose: function (next) {
  //       // console.log('beforeClose');
  //       next();
  //     },
  //     afterClose: function () {
  //       $(".modal-content").css({
  //         opacity: "0",
  //         transform: "translate(0, 100px)",
  //       });
  //     },
  //   });

  //   document.addEventListener(
  //     "keydown",
  //     function (ev) {
  //       modal.keydown(ev);
  //     },
  //     false
  //   );

  //   document.getElementById("showModal").addEventListener(
  //     "click",
  //     function (ev) {
  //       ev.preventDefault();
  //       modal.open();
  //     },
  //     false
  //   );

  //   $("#modal").click(function () {
  //     modal.close();
  //   });
  //   $("#modal-th").click(function () {
  //     Tmodal.close();
  //   });

  //   $(".modal-btn-close").click(function () {
  //     modal.close();
  //     Tmodal.close();
  //   });
  //   $(".modal-content").click(function (e) {
  //     e.stopPropagation();
  //   });
  //   window.modal = modal;

  //   $(".submit-btn").click(function (e) {
  //     e.preventDefault();
  //     var valInput = $(this).closest(".rev-form").find("input").val();
  //     var valText = $(this).closest(".rev-form").find("textarea").val();

  //     if (!/\S/.test(valInput) || !/\S/.test(valText)) {
  //       $(this)
  //         .closest(".rev-form")
  //         .find("input")
  //         .css("border", "2px solid red");
  //       $(this)
  //         .closest(".rev-form")
  //         .find("textarea")
  //         .css("border", "2px solid red");
  //       $(this).closest(".rev-form").find(".modal-w").css("display", "block");
  //     } else {
  //       modal.close();
  //       setTimeout(function () {
  //         Tmodal.open();
  //       }, 800);
  //       // $(this).closest('.rev-form').find('input').val() = '';
  //       // $(this).closest('.rev-form').find('textarea').html() = '';
  //     }
  //   });
  // }
});
