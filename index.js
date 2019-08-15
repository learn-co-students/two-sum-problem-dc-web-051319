const bruteForceTwoSum = (arr, sum) => {
    let results = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                results.push([arr[i], arr[j]])
            }
        }
    }
    return results
}

const binarySearchTwoSum = (arr, sum) => {
    let results = []
    let keys = []
        arr.forEach(num => {
            if (check(arr, (sum-num)) && !keys.includes(num) && !keys.includes(sum-num)) {
                results.push([num, (sum-num)])
                keys.push(num)
            }
        })
    return results
}

const check = (arr, number) => {
    return arr.includes(number)
}

const hashTwoSum = (arr, sum) => {
    let hash = {}
    let results = []

    for (let i = 0; i < arr.length; i++) {
        let sumMinus = sum - arr[i]
        if (hash[sumMinus]) {
            results.push([hash[sumMinus], arr[i]])
        } else {
            hash[arr[i]] = arr[i]
        }
    }
    return results
}

const binaryMatch = (arr, sum) => {
    const numsMap = new Map ()
    for (let i = 0; i < arr.length; i++) {
        if (numsMap.has(sum - arr[i])) {
            return [numsMap.get(sum-arr[i], i)]
        } else {
            numsMap.set(arr[i], i)
        }
    }
}
