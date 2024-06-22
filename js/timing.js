function padNumber(number) {
    return String(number).padStart(2, '0');
}

function updateTimer1() {
    const startDate = new Date('2024-03-29T00:00:00'); // 修改为你们在一起的起始日期
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('time1').innerText = `${padNumber(days)}天${padNumber(hours)}小时${padNumber(minutes)}分${padNumber(seconds)}秒`;
}

function updateTimer2() {
    const startDate = new Date('2021-11-19T00:00:00'); // 修改为你们认识的起始日期
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('time2').innerText = `${padNumber(days)}天${padNumber(hours)}小时${padNumber(minutes)}分${padNumber(seconds)}秒`;
}

setInterval(updateTimer1, 1000);
setInterval(updateTimer2, 1000);
updateTimer1(); // 初始化调用
updateTimer2(); // 初始化调用