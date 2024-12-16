[rewrite_local]
http-request ^https:\/\/api3\.showstart\.com\/order\/app\/order\/list script-path=https://your_script_url.js, requires-body=false

[MITM]
hostname = api3.showstart.com