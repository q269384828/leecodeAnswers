/*
 * @lc app=leetcode.cn id=1146 lang=javascript
 *
 * [1146] 快照数组
 */

// @lc code=start
/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.array = Array.from({ length: length }).fill(0).map(item => [])
  this.setId = 0
  this.snapId = 0
  this.snapIdMap = {}
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.setId++
  this.array[index].push([this.setId, val])
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  this.snapId++
  this.snapIdMap[this.snapId - 1] = this.setId
  return this.snapId - 1
}

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
// eslint-disable-next-line camelcase
SnapshotArray.prototype.get = function (index, snap_id) {
  // eslint-disable-next-line camelcase
  const setId = this.snapIdMap[snap_id]
  const arr = this.array[index]
  for (let i = arr.length - 1; i >= 0; i--) {
    const [sId, value] = arr[i]
    if (sId <= setId) {
      return value
    }
  }
  return 0
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end
