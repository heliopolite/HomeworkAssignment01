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
      }, 500);

  });
});
var tabPrefix = 'detail';

  function switchDetailTab(tabName) {
    var tabContentClassPrefix = 'js-tab-',
        tabContentClass       = '.' + tabContentClassPrefix + tabName;

    $('[class*=' + tabContentClassPrefix + ']').addClass('hide');
    $(tabContentClass).removeClass('hide');

    $('[class*=' + tabPrefix + ']').removeClass('active');
    $('.' + tabPrefix + tabName).addClass('active');
  }

  $('[class^=' + tabPrefix + ']').click(function(e) {
    e.preventDefault();
    if ( !$(this).hasClass('active') ) {
      var tabName = $(this).attr('class').replace(tabPrefix, '');
      switchDetailTab(tabName);
    }
  });

  switchDetailTab($('[class*=' + tabPrefix + ']').first().attr('class').replace(tabPrefix, ''));
