document.addEventListener('DOMContentLoaded', function() {
    // 第一个人的生日信息
    const birthday1 = new Date(2005, 6, 15); // 月份从0开始计数，所以5表示6月
    const today = new Date();

    // 计算年龄
    let age1  = today.getFullYear() - birthday1.getFullYear();
    const m1 = today.getMonth() - birthday1.getMonth();
    if (m1 < 0 || (m1 === 0 && today.getDate() < birthday1.getDate())) {
        age1--;
    }

    // 获取星座
    function getZodiacSign(day, month) {
        const zodiacSigns = [
            { sign: "摩羯座", start: { month: 0, day: 20 } },
            { sign: "水瓶座", start: { month: 1, day: 19 } },
            { sign: "双鱼座", start: { month: 2, day: 21 } },
            { sign: "白羊座", start: { month: 3, day: 20 } },
            { sign: "金牛座", start: { month: 4, day: 21 } },
            { sign: "双子座", start: { month: 5, day: 21 } },
            { sign: "巨蟹座", start: { month: 6, day: 23 } },
            { sign: "狮子座", start: { month: 7, day: 23 } },
            { sign: "处女座", start: { month: 8, day: 23 } },
            { sign: "天秤座", start: { month: 9, day: 23 } },
            { sign: "天蝎座", start: { month: 10, day: 23 } },
            { sign: "射手座", start: { month: 11, day: 22 } },
            { sign: "摩羯座", start: { month: 11, day: 22 } }
        ];

        for (let i = 0; i < zodiacSigns.length; i++) {
            const start = zodiacSigns[i].start;
            if (month === start.month && day >= start.day || month === (start.month + 1) % 12 && day < zodiacSigns[(i + 1) % 12].start.day) {
                return zodiacSigns[i].sign;
            }
        }
        return "未知";
    }

    const zodiacSign1 = getZodiacSign(birthday1.getDate(), birthday1.getMonth());

    // 在网页中显示第一个人的信息
    document.getElementById('age1').textContent = age1;
    document.getElementById('zodiac1').textContent = zodiacSign1;

    // 修正生日月份显示
    const correctedMonth1 = birthday1.getMonth();
    const birthdayString1 = `${birthday1.getFullYear()}年${correctedMonth1}月${birthday1.getDate()}日`;
    document.getElementById('birthday1').textContent = birthdayString1;

    // 第二个人的生日信息
    const birthday2 = new Date(2005, 11, 13); // 月份从0开始计数，所以2表示3月

    // 计算年龄
    let age2 = today.getFullYear() - birthday2.getFullYear();
    const m2 = today.getMonth() - birthday2.getMonth();
    if (m2 < 0 || (m2 === 0 && today.getDate() < birthday2.getDate())) {
        age2--;
    }

    const zodiacSign2 = getZodiacSign(birthday2.getDate(), birthday2.getMonth());

    // 在网页中显示第二个人的信息
    document.getElementById('age2').textContent = age2;
    document.getElementById('zodiac2').textContent = zodiacSign2;

    // 修正生日月份显示
    const correctedMonth2 = birthday2.getMonth();
    const birthdayString2 = `${birthday2.getFullYear()}年${correctedMonth2}月${birthday2.getDate()}日`;
    document.getElementById('birthday2').textContent = birthdayString2;
});