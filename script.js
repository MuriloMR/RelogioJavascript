setInterval(() => {
    const data = new Date();

    const rlg = [
        data.getHours(),
        data.getMinutes(),
        data.getSeconds()
    ]
        .map(item =>
            item < 10 ? '0${item}' : item
        )
        .join(' : ');

    document.querySelector('#rlg'
    ).textContent = rlg;

}, 1000);