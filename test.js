var rePull = requestPull(3);
rePull('http://baidu.com').then((res) => {
  console.log(res);
});
rePull('http://baidu.com').then((res) => {
  console.log(res);
});
rePull('http://baidu.com').then((res) => {
  console.log(res);
});
rePull('http://baidu.com').then((res) => {
  console.log(res);
});

function requestPull() {}


arr = [1, 2, 3, 4]

function swap(index, arr) {
  let temp = ''
  temp = arr[index]
  arr[index] = arr[index + 1]
  arr[index + 1] = temp
  return arr
}
// console.log(swap(0, arr))
// console.log(swap(1, arr))

function pailie(arr) {
  let result = []
  let index = 0

  arr.map(item => {
    let arrItem = []
    if (index < arr.length - 1) {
      console.log(index, swap(index, arr))
      index++
    }
  })

  return result
}

pailie(arr)