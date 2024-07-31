// create array with given length

const create = () => {
  let arr = []
  let size = Number(prompt('Enter the size of the array'))
  for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt(`Enter the ${i + 1} element of the array`))
  }
  console.log(arr)
}

// Array deduplication

const deduplication = () => {
  let arr = [1, 2, 3, 2, 4, 5, 6, 4, 5, 8]
  console.log(`original array ${arr}`)
  let res=[]
  arr.forEach((element) => {
    if (!res.includes(element)) {
      res.push(element)
    }
  })
  console.log(res)
}

// Finding intersection of two arrays

const intersection = () => {
  let arr1 = [1, 2, 3, 4, 5]
  let arr2 = [4, 5, 6, 7, 8]
  console.log(`Array 1: ${arr1}`)
  console.log(`Array 2: ${arr2}`)
  let res = arr1.filter((x) => arr2.includes(x))
  console.log(res)
}

// Finding the difference between two arrays

const difference = () => {
  let arr1 = [1, 2, 3, 4, 5]
  let arr2 = [4, 5, 6, 7, 8]
  console.log(`Array 1: ${arr1}`)
  console.log(`Array 2: ${arr2}`)
  let res = arr1.filter((x) => !arr2.includes(x))
  console.log(res)
}

// Groping array elements

const grouping = () => {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(num)
  let odd = num.filter((num) => num%2===0)
  console.log(odd)
}
