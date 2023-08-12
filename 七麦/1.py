import requests
import execjs
import sys

with open('加载器.js','r',encoding='utf-8') as f:
   exec = execjs.compile(f.read())
   analysis = exec.call('aaaa')
   # print(analysis)

url = f"https://api.qimai.cn/rank/indexPlus/brand_id/1?analysis={analysis}"

payload={}
headers = {
   'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
   'Accept': '*/*',
   'Host': 'api.qimai.cn',
   'Connection': 'keep-alive',
   'Content-Type':'application/json; charset=utf-8'
}

response = requests.request("GET", url, headers=headers, data=payload)


print(response.json())