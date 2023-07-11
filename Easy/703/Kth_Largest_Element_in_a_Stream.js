/**
 * Kth Largest Element in a Stream
 */
class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.arr = nums.sort((a, b) => a - b);
    }
    add(val) {
        const insert = () => {
            let l = 0, r = this.arr.length - 1;
            while(l <= r) {
                const mid = Math.floor((l + r) / 2);
                if(this.arr[mid] === val) return mid;
                if(this.arr[mid] < val) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            return l;
        }
        this.arr.splice(insert(), 0, val);
        return this.arr[this.arr.length - this.k];
    }
}

let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8