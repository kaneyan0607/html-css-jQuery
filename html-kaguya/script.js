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
        }
    });
});

//ヘッダーの高さ分だけコンテンツを下げる
if (matchMedia('(max-width: 375px)').matches) {
    $(function () {
        const height = $("header").height();
        $("main").css("padding-top", height);
    });
}
