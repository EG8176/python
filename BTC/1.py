import requests
import time
import execjs
from lxml import etree


time = int(time.time() * 1000)
#打开JS文件
with open('btc.js','r',encoding='utf-8') as f:

   code = execjs.compile(f.read())
   i = code.call('aaaa',str(time))
   print(i)
url = "https://api.mytokenapi.com/ticker/currencylistforall?"

data = {
   "pages": '1,1',
   "sizes": '100,100',
   "subject": "market_cap",
   "language": "en_US",
   "timestamp": time,
   "code": i,
   "platform": "web_pc",
   "v": "0.1.0",
   "legal_currency": "USD",
   "international": "1"
}
print(time)

headers = {
   'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
   'Accept': '*/*',
   'Host': 'api.mytokenapi.com',
   'Connection': 'keep-alive',
   'Referer':'https://www.mytokencap.com'
}

response = requests.get(url=url, headers=headers,params=data).json()
name = response["data"]["list"][1]["symbol"]
print(name)