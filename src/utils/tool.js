// 时间格式转换
export function timeAgo(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
}

// const timestamp = new Date("2024-04-07T14:14:10").getTime();
// const timeAgoString = timeAgo(timestamp);
// console.log(timeAgoString);

// 数字格式转换
export function formatNumber(num) {
    // 定义后缀标识
    let suffix = "";

    // 定义除数和对应的后缀
    const divisors = [
        { divisor: 1000000, suffix: "M" },
        { divisor: 1000, suffix: "k" },
    ];

    // 遍历除数和后缀
    for (const d of divisors) {
        if (num >= d.divisor) {
            // 计算数字
            const result = num / d.divisor;

            // 如果结果小数部分不为 0，则保留一位小数
            if (Math.floor(result) !== result) {
                return result.toFixed(1) + d.suffix;
            }

            // 否则只显示整数部分
            return Math.floor(result) + d.suffix;
        }
    }

    // 如果数字不需要转换，则直接返回
    return num;
}
