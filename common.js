$(function() {
  // 画像リストからDOMを作る
  var $modalItemList = $('#jsi-modal__list');
  var items = [
    { url: 'http://lorempixel.com/400/400/city/', alt: 'まち' },
    { url: 'http://lorempixel.com/450/250/nightlife/', alt: 'よる' },
    { url: 'http://lorempixel.com/350/150/city/', alt: 'まち' },
    { url: 'http://lorempixel.com/500/100/nightlife/', alt: 'よる' },
    { url: 'http://lorempixel.com/350/600/city/', alt: 'まち' },
    { url: 'http://lorempixel.com/200/200/food/', alt: 'たべもの' },
    { url: 'http://lorempixel.com/150/200/city/', alt: 'まち' },
    { url: 'http://lorempixel.com/400/300/food/', alt: 'たべもの' },
    { url: 'http://lorempixel.com/400/300/nightlife/', alt: 'よる' },
    { url: 'http://lorempixel.com/100/100/food/', alt: 'たべもの' },
    { url: 'http://lorempixel.com/300/450/nightlife/', alt: 'よる' },
    { url: 'http://lorempixel.com/200/250/food/', alt: 'たべもの' },
    { url: 'http://lorempixel.com/50/100/ity/', alt: 'まち' },
  ];

  var $items = '';
  items.forEach(function(item) {
    var $item =  '<li class="g-modal__list-item">';
        $item += '<a class="jsc-modal__list-item--link">';
        $item += '<img src="' + item.url + '" alt="' + item.alt + '" class="jsc-modal__list-item--image" />';
        $item += '</a>';
        $item += '</li>';

    $modalItemList.append($item);
  });



  // Masonryのアクティベート
  $(window).load(function() {
    $modalItemList.masonry({
      itemselector: 'g-modal__list-item',
      columnWidth: 200
    });
  });



  // モーダルのハンドリング
  var $modalTrigger = $('.jsc-modal__list-item--link');
  var $modal = $('#jsi-modal');
  var $modalItem = $('#jsi-modal__item');
  var $modalBackground = $('#jsi-modal__background');

  $modalTrigger.click(function() {
    var $targetImage = $(this).find('.jsc-modal__list-item--image').clone();

    $modalItem.append($targetImage);

    $modal.fadeIn();
  });

  $modalBackground.click(function() {
    $modal.fadeOut();

    $modalItem.find('img').remove();
  });
});
