function updateTime() {
    const startDate1 = new Date('2024-03-29T00:00:00'); // 设定第一个开始的日期和时间
    const startDate2 = new Date('2021-11-19T00:00:00'); // 设定第二个开始的日期和时间
    const now = new Date();

    // 计算第一个日期与现在的差异
    const diff1 = now - startDate1;
    const days1 = Math.floor(diff1 / (1000 * 60 * 60 * 24));
    const hours1 = Math.floor((diff1 / (1000 * 60 * 60)) % 24);
    const minutes1 = Math.floor((diff1 / 1000 / 60) % 60);
    const seconds1 = Math.floor((diff1 / 1000) % 60);

    document.getElementById('days1').innerText = days1;
    document.getElementById('hours1').innerText = hours1;
    document.getElementById('minutes1').innerText = minutes1;
    document.getElementById('seconds1').innerText = seconds1;

    // 计算第二个日期与现在的差异
    const diff2 = now - startDate2;
    const days2 = Math.floor(diff2 / (1000 * 60 * 60 * 24));
    const hours2 = Math.floor((diff2 / (1000 * 60 * 60)) % 24);
    const minutes2 = Math.floor((diff2 / 1000 / 60) % 60);
    const seconds2 = Math.floor((diff2 / 1000) % 60);

    document.getElementById('days2').innerText = days2;
    document.getElementById('hours2').innerText = hours2;
    document.getElementById('minutes2').innerText = minutes2;
    document.getElementById('seconds2').innerText = seconds2;
}

// 每秒更新一次时间
setInterval(updateTime, 1000);
updateTime(); // 初始调用以显示时间