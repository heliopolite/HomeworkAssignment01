$("document").ready(function() {
  $('.buynowbutton').on('click', function(){
    $(this).addClass('active');
    $(this).text('Added to Cart!');

    var cartCount = parseInt($('.js-cart-count').text());
    cartCount += 1;
    console.log(cartCount);


$('.js-cart-count').text(cartCount);
    console.log(this);
    window.setTimeout(function(){
        // $(this) is not available anymore
        // because setTimeout runs in the global scope
        $('.buynowbutton').text('Buy Now!');
        $('.buynowbutton').removeClass('active');
      }, 300);

  });
});
