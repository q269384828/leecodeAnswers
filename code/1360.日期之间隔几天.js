/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  return Math.abs(getDate(date1) - getDate(date2))
}

function isRunYear (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100)
}

function getDate (dataStr) {
  let [year, month, day] = dataStr.match(/(\d{4})-(\d{2})-(\d{2})/).slice(1)

  year = year | 0
  month = month | 0
  day = day | 0
  let ans = 0
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  for (let yearIdx = 1971; yearIdx < year; yearIdx++) {
    if (isRunYear(yearIdx)) {
      ans += 366
    } else {
      ans += 365
    }
  }

  if (isRunYear(year)) {
    monthDays[1] = 29
  }
  for (let mIdx = 0; mIdx < month - 1; mIdx++) {
    ans += monthDays[mIdx]
  }
  ans += day
  return ans
}
// @lc code=end
