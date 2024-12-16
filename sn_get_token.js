/*
Quantumult X 脚本
用途：拦截并解析返回的数据
*/

// 匹配目标 URL
const url = $request.url;
const targetUrl = "https://scm.sheincorp.cn/system/login/wechat";

if (url === targetUrl) {
  // 获取接口返回的原始数据
  let body = $response.body;

  // 解析 JSON 数据
  let data = JSON.parse(body);

  let info = data.info;
  let token = info.token
  let ulpToken = info.ulpToken

  // 将 token 和 ulpToken 保存到本地存储
  // 将 token 和 ulpToken 保存到本地存储
  $persistent.write("token", token);
  $persistent.write("ulpToken", ulpToken);
  
  storeData("xxw-token", token);
  storeData("xxw-ulpToken", ulpToken);
  readData("xxw-token");
  readData("xxw-ulpToken");

  console.log("Token 和 ULP Token 已保存到本地存储");
  
  // 输出到日志
  console.log(JSON.stringify(data, null, 2));
  $notify("提取成功 🎉", "参数如下", JSON.stringify(data, null, 2));

  // 无需修改，直接返回原始响应
  $done({});
} else {
  // 如果 URL 不匹配则直接返回原始响应
  $done({});
}

// 存储数据到本地
function storeData(key, value) {
  const result = $prefs.setValueForKey(value, key);
  if (result) {
    console.log(`成功存储数据: { key: ${key}, value: ${value} }`);
  } else {
    console.log(`存储数据失败: { key: ${key}, value: ${value} }`);
  }
}

// 从本地读取数据
function readData(key) {
  const value = $prefs.valueForKey(key);
  if (value) {
    console.log(`读取的数据: { key: ${key}, value: ${value} }`);
  } else {
    console.log(`未能读取到数据，key: ${key}`);
  }
  return value;
}