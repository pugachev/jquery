'use strict';

//全てのDOMを読み込んだ後に動く関数
// $(() => {
$(function(){
    $('img').click(function() {
        var msg = $(this).width() + ' x ' + $(this).height();
        $(this).wrap('<div style="position:relative;"></div>');
        var div = $('<div>')
                    .text(msg)
                    .css('position','absolute')
                    .css('top','0');
        $(this).after(div);
    });


    // $('img').click(function() {
    //     var msg = $(this).width() + ' x ' + $(this).height();
    //     $(this).wrap('<div style="position:relative;"></div>');
    //     var div = $('<div>')
    //                 .text(msg)
    //                 .css('position','absolute')
    //                 .css('top','0');
    //     $(this).afer(div);

    // });
    const $input = $('input');
    $input.focus();
    $('button').click(() => {
        // $('p').text('宇垣美里 可愛い！！');
        // $('p').addClass('red-text');
        // $('p')
        // .text('宇垣美里 可愛い！！')
        // .addClass('red-text');
        // $('li:nth-child(odd),li:last-child').addClass('red-text');
        // $('li:nth-child(odd)').addClass('red-text');
        // $('li:last-child').addClass('green-text');
        // $('li').eq(2).addClass('red-text');

        //どうやって引数文字列を渡すのか？
        // $('button').off('click').click(()=>{
            // var $tmp = $('input').val();
            $('<li>').text($input.val()).appendTo('ul');
            $('input').val('').focus();
        // });
        // $('<li>')
        //     .text($('input').val())
        //     .appendTo('ul');
        // $('input')
        //     .val('')
        //     .focus();
    });
    $('ul').click(e => {
        if(e.target.nodeName !== 'LI' || !(confirm('本当に削除しますか？'))){
            return;
        }
        // e.target.remove();
        $(e.target).fadeOut();
        // e.target.fadeOut();
    });



});