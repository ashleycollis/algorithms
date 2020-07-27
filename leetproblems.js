// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function (nums, target) {
  const dictionary = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in dictionary) {
      return [dictionary[complement], i];
    } else {
      dictionary[nums[i]] = i;
    }
  }
  return null;
};

//time - o(n) ->
