
/**
 * @fileoverview Quantumult X 拦截请求并提取 Header 参数
 * @author 
 */

// 匹配目标请求的 URL
const urlPattern = /^https:\/\/scm\.sheincorp\.cn\/system\/login\/wechat$/;

// 主函数
const requestHandler = async (request) => {
  const response = request.response; // 获取请求头部信息

  console.log("拦截的 response 参数:");
  console.log(JSON.stringify(response, null, 2)); // 打印提取的参数

  // 发送通知
  $notify("response 🎉", "参数如下", JSON.stringify(response, null, 2));

  // 可选：保存到本地
  $prefs.setValueForKey(JSON.stringify(response), "showstart_headers");
};

// 入口
(() => {
  const url = $request.url || "";
  if (urlPattern.test(url)) {
    requestHandler($request);
  }
  $done();
})();