/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  let sum = 0
  const idList = [id]
  while (idList.length) {
    const id = idList.pop()
    const employee = employees.find(e => e.id === id)
    sum += employee.importance
    idList.push.apply(idList, employee.subordinates)
  }
  return sum
}
// @lc code=end
