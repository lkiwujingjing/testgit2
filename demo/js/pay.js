$('input[name=safeCodeAuth]').bind('click', function () {
    if ($('input[name=safeCodeAuth]:checked').val() == '1') {
        $('#safeCodeAuthDiv').hide();
    } else {
        $('#safeCodeAuthDiv').show();
    }
});

/**お客さま情報の入力へ戻る */
$('#customer-button').bind('click', function () {
    window.location.href = "customer.html";
});

/**お申込内容の確認へ進む */
$('#confirm-button').bind('click', function () {
    window.location.href = "confirm.html";
});