//各ページへ遷移したときにフェードイン
$(function () {
    $("main, footer").fadeIn(500);
});

//ハンバーガーアイコンとドロワーメニュー
$(function () {
    $('.btn-trigger').on('click', function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.nav-media').addClass('active');
            $("header").addClass('shadow-active');
        } else {
            $('.nav-media').removeClass('active');
            $("header").removeClass('shadow-active');
        }
    });
});

//ページ遷移の際、ドロワーメニューが閉じるアニメーション
$(function () {
    $('.nav-media a').on('click', function () {
        $('.nav-media').toggleClass('active');
        $(".btn-trigger").toggleClass('active');
        $("header").removeClass('shadow-active');
    })
});

//ページ推移時に約0.3秒後にリンク先へ遷移
$("a").on('click', function (event) {
    event.preventDefault();
    var linkUrl = $(this).attr('href');
    function action() {
        location.href = linkUrl;
    }
    setTimeout(action, 280);
});

//レスポンス時、ヘッダーの高さ分だけmainを下げる
if (matchMedia('(max-width: 375px)').matches) {
    $(function () {
        const height = $("header").height();
        $("main").css("padding-top", height);
    });
}

//NEWSページの画像ホバー時のアニメーション　スマホサイズ以上の際に適用
if (matchMedia('(min-width: 375px)').matches) {
    $('.hover').on({
        'mouseenter': function () {
            $(this).find("figcaption").stop(true, true).slideDown(250);
        },
        'mouseleave': function () {
            $(this).find("figcaption").stop(true, true).slideUp(250);
        }
    });
}
