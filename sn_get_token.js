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
  
  // 例如：解析某个特定字段
  let info = data.info; // 请根据实际返回内容填写
  let token = info.token
  let ulpToken = info.ulpToken

  // 输出到日志
  console.log(JSON.stringify(data, null, 2));
  console.log(token);
  console.log(ulpToken);

  $notify("提取成功 🎉", "参数如下", JSON.stringify(data, null, 2));

  // 无需修改，直接返回原始响应
  $done({});
} else {
  // 如果 URL 不匹配则直接返回原始响应
  $done({});
}
