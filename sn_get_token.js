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
