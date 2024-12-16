
/**
 * @fileoverview Quantumult X Script to Extract Response Content
 * @description 监听接口并提取返回的数据内容
 */

// 假设返回的数据是 JSON 格式，解析响应内容
try {
    const responseBody = JSON.parse($response.body);

    // 在这里提取你需要的字段
    console.log("Extracted Data: ", responseBody);

    // 如果需要，可以进一步处理数据或仅返回空的响应
    $done();
} catch (e) {
    console.log("Error parsing response body: ", e);
    $done();
}