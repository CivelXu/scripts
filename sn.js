[rewrite_local]
http-request ^ https://scm\.sheincorp\.cn/system/login/wechat script-response-body=https://raw.githubusercontent.com/CivelXu/scripts/refs/heads/main/sn_get_token.js

[mitm]
hostname = scm.sheincorp.cn