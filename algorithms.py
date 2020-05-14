def binary_search(list, item):
    low = 0
    high = len(list)-1
    while (low <= high):
        mid = low + high
        guess = list[mid]
        if guess == item
        return mid
        if guess < item
        low = mid + 1
        else
        high = mid - 1
    return None


def smallestNumber(arr):
    smallest = arr[0]
    smallestIndex = 0
    for num in range(1, len(arr)):
        if arr[num] < smallest:
            smallest = arr[num]
            smallest_index = num
    return smallest_index


def selectionSort(arr):
    newArr = []
    for num in range(1, len(arr)):
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr
