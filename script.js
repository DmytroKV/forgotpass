window.addEventListener('load', function() {
    if (Math.random() < 0.3) {
        window.location.href = 'https://example.com/';
        return;
    }
});

document.getElementById('resetBtn').addEventListener('click', function() {
    var messageBox = document.getElementById('messageBox');
    if (messageBox.style.display === 'none' || messageBox.style.display === '') {
        messageBox.style.display = 'block';
    } else {
        messageBox.style.display = 'none';
    }
});
