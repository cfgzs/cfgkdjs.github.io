// 设置高考日期：2026 年 6 月 7 日
const examDate = new Date('2026-06-07');
examDate.setHours(9, 0, 0, 0);


// 更新倒计时的函数
function updateCountdown() {
    const currentDate = new Date();
    const timeDiff = examDate - currentDate;


    // 计算天、时、分、秒
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);


    // 更新页面显示
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}


// 初始更新倒计时
updateCountdown();


// 每秒更新一次倒计时
setInterval(updateCountdown, 1000);