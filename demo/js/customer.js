/**選択内容の確認(カート)へ戻る */
$('#cart-button').bind('click', function () {
    window.location.href = "plan.html";
});

/**申込内容の確認 */
$('#pay-button').bind('click', function () {
    window.location.href = "confirm.html";
});