# def binary_search(list, item):
#     low = 0
#     high = len(list)-1
#     while (low <= high):
#         mid = low + high
#         guess = list[mid]
#         if guess == item
#         return mid
#         if guess < item
#         low = mid + 1
#         else
#         high = mid - 1
#     return None


# def findSmallest(arr):
#     smallest = arr[0]
#     smallestIndex = 0
#     for num in range(1, len(arr)):
#         if arr[num] < smallest:
#             smallest = arr[num]
#             smallest_index = num
#     return smallest_index


# def selectionSort(arr):
#     newArr = []
#     for num in range(1, len(arr)):
#         smallest = findSmallest(arr)
#         newArr.append(arr.pop(smallest))
#     return newArr


# def quicksort(array):
#     if len(array) < 2:
#         return array  # base case- arrays with length lower than 2 are sorted
#     else:
#         pivot = array[0]
#         less = [i for i in array[1:] if i <= pivot]
#         greater = [i for i in array[1:] if i > pivot]
#         return quicksort(less) + [pivot] + quicksort(greater)


# quicksort([8, 1, 9, 6])

cache = {}

# example of how websites cache


def get_page(URL):
    if cache.get(URL):
        return cache[url]
    else:
        data = get_data_from_server(url)
        cache[url] = data
        return data
