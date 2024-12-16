[rewrite_local]
http-request ^https:\/\/api3\.showstart\.com\/order\/app\/order\/list script-path=https://raw.githubusercontent.com/CivelXu/scripts/refs/heads/main/showstart_app_get_token.js, requires-body=false

[MITM]
hostname = api3.showstart.com