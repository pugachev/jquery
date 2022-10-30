'use strict';

//全てのDOMを読み込んだ後に動く関数
$(() => {
    $('img').showsize();
// $(function(){
    // $('img').click(function() {
    // // $('img').click(e => {    
    //     var msg = $(this).width() + ' x ' + $(this).height();
    //     $(this).wrap('<div style="position:relative;"></div>');
    //     var div = $('<div>')
    //                 .text(msg)
    //                 .css('position', 'absolute')
    //                 .css('top', '0')
    //                 .css('background', 'black')
    //                 .css('color', 'white')
    //                 .css('font-size', '10px')
    //                 .css('opacity', '0.9')
    //                 .css('padding', '2px');
    //     $(this).after(div);
    // });
});