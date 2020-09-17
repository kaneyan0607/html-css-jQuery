$(function () {
    $("main, footer").fadeIn(500); //各ページへ遷移したときにフェードイン
});

//ハンバーガー
$(function () {
    $('.btn-trigger').on('click', function () {
        $(this).toggleClass('active');
        return false;
    });
});
