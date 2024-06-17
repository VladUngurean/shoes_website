$(document).ready(function () {
  changeSale(
    ".header-content",
    ".header-pr-new",
    ".header-pr-old",
    ".header-top__sale"
  );
  changeSale(".footer", ".header-pr-new", ".header-pr-old", ".footer__sale");
  changeSale(".product", ".prod-price__new", ".prod-price__old", ".prod-sale");
  changeSale(
    ".spray-content",
    ".spray-info-price__new",
    ".spray-info-price__old",
    ".spray-title span"
  );

  // Скидка
  function changeSale(container, newPrice, oldPrice, sale, saleNumber) {
    var container = container;

    $(newPrice).each(function () {
      var price = parseInt($(this).text()),
        percent = $(this)
          .closest(container)
          .find(sale)
          .text()
          .replace(/[^0-9]/gim, ""),
        currency = $(this).text().replace(/[0-9]/g, "");

      if (sale.length == "") {
        percent = saleNumber;
      }

      price = Math.ceil((price * 100) / (100 - percent));
      $(this)
        .closest(container)
        .find(oldPrice)
        .text(price + " " + currency);
    });
  }

  $(".order-form").submit(function (e) {
    var id = $(this).closest(".js-prod").find(".curent-order").data("id");
    var size = $(this).closest(".js-prod").find(".active-size").text();

    $(".order-form input[name='products']").val(id);
    $(".order-form input[name='comment']").val(size);
  });
});
