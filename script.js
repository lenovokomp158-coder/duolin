function navigate(pageNum) {
    $('.page').removeClass('active');
    $('#page-' + pageNum).addClass('active');
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(function() {
        showToast(text + " Göçürildi!");
    });
}

function copyThis(elementId) {
    var text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(function() {
        showToast("Kod üstünlikli göçürildi!");
    });
}

function showToast(message) {
    var toast = document.getElementById('toast-box');
    document.getElementById('toast-text').innerText = message;
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 2500);
}

function selectCodeType(id) {
    $('.btn-copy-style').removeClass('active');
    $('#btn-' + id).addClass('active');
}
