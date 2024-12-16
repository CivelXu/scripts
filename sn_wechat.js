[rewrite_local]
http-request ^https:\/\/scm:\/\/sheincorp\.cn\/system\/login\/wechat script-path=https://raw.githubusercontent.com/CivelXu/scripts/refs/heads/main/sn_get_token.js, requires-body=false

[mitm]
hostname = scm.sheincorp.cn
