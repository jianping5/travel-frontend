'use client'
import {jwtDecode} from "jwt-decode";

// 时间格式转换
export function timeAgo(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    const days = Math.floor(hours / 24);
    if (days < 30) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    }

    const years = Math.floor(months / 12);
    return `${years} year${years > 1 ? 's' : ''} ago`;
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

// 获取当前登录用户
export function getLoginUserId() {
  if (typeof window !== 'undefined' && window.localStorage) {
    // 在浏览器环境中使用 localStorage
    // 从本地存储中获取 JWT
    const token = window.localStorage.getItem("token");

    // 解码 JWT
    const decoded = jwtDecode(token || "");

    // 从解码后的对象中获取用户 ID
    const userId = decoded.jwtUserId;
    return parseInt(userId || '0')
  } else {
    // 在 Node.js 环境中返回默认值或者抛出错误
    return null;
  }
}