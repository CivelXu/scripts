[rewrite_local]
^https://scm\.sheincorp\.cn/system/login/wechat script-response-body=extract_response_content.js

[mitm]
hostname = scm.sheincorp.cn