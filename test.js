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