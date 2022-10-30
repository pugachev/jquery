'use strict';

//全てのDOMを読み込んだ後に動く関数
$(function(){
    $('#addSelect').click(function(){
        var selectCount=0;
        // 現在のselectboxの数を数える
        if($('select').length != null && $('select').length > 0){
            selectCount = $('select').length;
        }

        //　各optionのテキストとvalue値の配列
        const optionCntList = [
            { text: '牧野結美', value: 'y' },
            { text: '馬場典子', value: 'n' },
            { text: '相場詩織', value: 's' },
            { text: '宇垣美里', value: 'u'},
            { text: '加藤綾子', value: 'a' },
        ]
        //何もないところにselectタグを作成する
        var selecttag = $('<select>').addClass('select'+(selectCount+1));
        //　リストより配列の書く値を取り出す
        var keys = Object.keys(optionCntList);
        keys.forEach(function(key, i){
            //　option要素を動的に生成＆追加
            var content = this[key];
            var option = $('<option>')
                .text(content['text'])
                .val(content['value']);
            //　selectタグにoptionタグを追加していく
            selecttag.append(option);
        }, optionCntList);

        // $('selecttag').append('<ｂｒ>');

        $('.js-selectbox').append(selecttag);
        $('.js-selectbox').append('<br />');
    });

    $('#addSelect').css("background-color","black");


});