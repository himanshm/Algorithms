// Leet Code: 3011. Find if Array Can Be Sorted
// You are given a 0-indexed array of positive integers nums.

// In one operation, you can swap any two adjacent elements if they have the same number of set bits
// You are allowed to do this operation any number of times (including zero).

// Return true if you can sort the array, else return false.
class Solution {
  // Helper function to count the number of set bits (1-bits) in a number
  private countSetBits(n: number): number {
    return n.toString(2).split('1').length - 1;
  }

  canSortArray(nums: number[]): boolean {
    // Group elements by their set bits count
    const segments = [];
    let currentSegment = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
      if (this.countSetBits(nums[i]) === this.countSetBits(nums[i - 1])) {
        currentSegment.push(nums[i]);
      } else {
        segments.push(currentSegment);
        currentSegment = [nums[i]];
      }
    }
    segments.push(currentSegment); // Add the last segment

    // Sort each segment
    for (const segment of segments) {
      segment.sort((a, b) => a - b);
    }
    console.log(segments);

    // Check if sorted segments align for a globally sorted array
    for (let i = 1; i < segments.length; i++) {
      if (segments[i - 1][segments[i - 1].length - 1] > segments[i][0]) {
        return false;
      }
    }
    return true;
  }
}

const solution = new Solution();
console.log(solution.canSortArray([2, 1, 3, 5, 7, 6, 9]));

function canSortArray(nums: number[]): boolean {
  const countSetBits = (n: number): number => n.toString(2).split('1').length - 1;

  // create segments of consecutive elements of nums with the same number of bits
  let segments = nums.reduce((acc, curr, index, arr) => {
    if (index === 0 || countSetBits(curr) !== countSetBits(arr[index - 1])) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, [] as number[][]);

  // Sort each segment independently
  segments = segments.map(segment => segment.sort((a, b) => a - b));

  console.log(segments);

  const isSorted = segments.every((segment, index) => {
    // For the first segment, there's no previous segment to compare
    if (index === 0) return true;
    // Compare the largest element of the previous segment with the smallest of the current segment
    return segments[index - 1][segments[index - 1].length - 1] <= segment[0];
  });

  if (!isSorted) return false;
  return true;
}

console.log(canSortArray([2, 1, 3, 5, 7, 6, 9]));
