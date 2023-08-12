
import execjs
import requests

with open('问财1.js','r',encoding='utf-8')as f:
    exe = execjs.compile(f.read())
    hxV = exe.call("D")


url = 'http://www.iwencai.com/customized/chart/get-robot-data'

headers = {
    'Hexin-V':hxV,
    'Accept':'application/json, text/plain, */*',
    'Accept-Language':'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Referer':'http://www.iwencai.com/unifiedwap/result?w=2023%E8%B7%8C%E5%81%9C',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58'
}

data = {"source":"Ths_iwencai_Xuangu","version":"2.0","query_area":"","block_list":"","add_info":"{\"urp\":{\"scene\":1,\"company\":1,\"business\":1},\"contentType\":\"json\",\"searchInfo\":true}","question":"2023跌停","perpage":50,"page":1,"secondary_intent":"","log_info":"{\"input_type\":\"typewrite\"}","rsh":"Ths_iwencai_Xuangu_grmsbcj7vjk4l2i2u2innmz1euqtqzxv"}


response = requests.post(url=url,headers=headers,data=data)

print(response.text)