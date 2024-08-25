window.addEventListener('message', (event) => {
    if (event.data.action === "Notify") {
        createNotify(event.data.desc);
    }
});

createNotify('Testowe powiadomienie');

function createNotify(desc) {
    const notifyhtml = `<div class="notify" style="position: relative; right: -10vw;">
        <div class="data">
            <div class="header">Powiadomienie</div>
            <div class="desc">${desc}</div>
        </div>
        <div class="icon">
            <i class="fa-solid fa-bell"></i>
        </div>
    </div>`;

    let $notify = $(notifyhtml);
    $('.notify-container').append($notify);

    $notify.animate({'right':'0vw'}, 500);


    setTimeout(() => {
        $notify.animate({'right':'-10vw'}, 500, function() {
            $(this).remove();
        });
    }, 5000);
}
