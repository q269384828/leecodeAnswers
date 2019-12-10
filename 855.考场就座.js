/*
 * @lc app=leetcode.cn id=855 lang=javascript
 *
 * [855] 考场就座
 *
 * https://leetcode-cn.com/problems/exam-room/description/
 *
 * algorithms
 * Medium (29.76%)
 * Likes:    22
 * Dislikes: 0
 * Total Accepted:    711
 * Total Submissions: 2.4K
 * Testcase Example:  '["ExamRoom","seat","seat","seat","seat","leave","seat"]\n' +
  '[[10],[],[],[],[],[4],[]]'
 *
 * 在考场里，一排有 N 个座位，分别编号为 0, 1, 2, ..., N-1 。
 * 
 * 
 * 当学生进入考场后，他必须坐在能够使                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  他与离他最近的人之间的距离达到最大化的座位上。如果有多个这样的座位，他会坐在编号最小的座位上。(另外，如果考场里没有人，那么学生就坐在
 * 0 号座位上。)
 * 
 * 返回 ExamRoom(int N) 类，它有两个公开的函数：其中，函数 ExamRoom.seat() 会返回一个 int
 * （整型数据），代表学生坐的位置；函数 ExamRoom.leave(int p) 代表坐在座位 p 上的学生现在离开了考场。每次调用
 * ExamRoom.leave(p) 时都保证有学生坐在座位 p 上。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：["ExamRoom","seat","seat","seat","seat","leave","seat"],
 * [[10],[],[],[],[],[4],[]]
 * 输出：[null,0,9,4,2,null,5]
 * 解释：
 * ExamRoom(10) -> null
 * seat() -> 0，没有人在考场里，那么学生坐在 0 号座位上。
 * seat() -> 9，学生最后坐在 9 号座位上。
 * seat() -> 4，学生最后坐在 4 号座位上。
 * seat() -> 2，学生最后坐在 2 号座位上。
 * leave(4) -> null
 * seat() -> 5，学生最后坐在 5 号座位上。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= N <= 10^9
 * 在所有的测试样例中 ExamRoom.seat() 和 ExamRoom.leave() 最多被调用 10^4 次。
 * 保证在调用 ExamRoom.leave(p) 时有学生正坐在座位 p 上。
 * 
 * 
 */


// @lc code=start


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(maxLength) {
        this.head = new Node(-1);
        this.tail = new Node(maxLength);
        this.head.next = this.tail;

        this.root = this.head;
        this.size = 0;
        this.maxLength = maxLength;
    }

    add(value) {
        if (this.isFill()) {
            return;
        }

        const node = new Node(value);
        let currentNode = this.root;
        let nextNode = null;
        let success = false;
        while (nextNode = currentNode.next) {
            if (nextNode.value > value) {
                node.next = nextNode;
                currentNode.next = node;
                success = true;
                break;
            }
            currentNode = currentNode.next;
        }
        if (success) {
            this.size++;
        }
        return success;
    }
    remove(value) {
        if (this.isEmpty()) {
            return false;
        }
        if (value <= this.head.value) {
            return false;
        }
        if (value >= this.tail.value) {
            return false;
        }
        let isSuccess = false;
        let currentNode = this.root;
        while (currentNode) {
            const nextNode = currentNode.next;
            if (nextNode.value > value) {

                break;
            }
            if (nextNode.value === value) {
                currentNode.next = nextNode.next;
                isSuccess = true;
                this.size--;
                break;
            }
            currentNode = currentNode.next;
        }
        return isSuccess;
    }

    isEmpty() {
        return this.root.next === this.tail;
    }
    isFill() {
        return this.size >= this.maxLength;
    }
    toList() {
        let currentNode = this.root;
        let ret = [];
        while ((currentNode = currentNode.next) !== this.tail) {
            ret.push(currentNode.value);
        }
        return ret;
    }
    valueOf() {
        return this.toList();
    }
    first() {
        if (this.size >= 1) {
            return this.head.next;
        }
        return null;
    }
}

/**
 * @param {number} N
 */
var ExamRoom = function (N) {
    this.seatsList = new LinkedList(N)
    this.seatNums = N;
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
    const LAST = this.seatNums - 1;
    const FIRST = 0;
    if (this.seatsList.isFill()) {
        return -1;
    }

    if (this.seatsList.isEmpty()) {
        this.seatsList.add(0);
        return 0;
    }
    const list = this.seatsList.toList();
    const first = list[0];
    const last = list[list.length - 1];

    let maxDistance = -1;
    let targetSeat = -1;
    const firstDistance = first - FIRST;
    const lastDistance = LAST - last;


    if (firstDistance > 0) {
        maxDistance = firstDistance;
        targetSeat = FIRST;
    }


    if (this.seatsList.size > 1) {
        for (let index = 1; index < list.length; index++) {
            const next = list[index];
            const pre = list[index - 1];
            const distance = Math.floor((next - pre) / 2);
            if (distance > maxDistance) {
                maxDistance = distance;
                targetSeat = Math.floor((next + pre) / 2);
            }
        }
    }
    if (lastDistance > maxDistance) {
        targetSeat = LAST;
    }

    if (targetSeat != -1 && this.seatsList.add(targetSeat)) {
        return targetSeat;
    }
    return -1;
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
    this.seatsList.remove(p);
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
// @lc code=end
