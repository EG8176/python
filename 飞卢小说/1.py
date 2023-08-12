

import execjs
import requests

url = 'https://u.faloo.com/regist/Login.aspx'

# userID = input("请输入你的账号")
#
# password = input("请输入你的密码")


with open('1.js','r',encoding='utf-8') as f:
    exec = execjs.compile(f.read())
    pwd = exec.call('login_md5','w123456',1690948577)
    print(pwd)

data = {
    'txtUserID':18478189013,
    'txtPwd':pwd,
    'txtPwd4temp':'',
    'verifyCode':'bz9j',
    'ts':1690947186,
    't':'2',
    'BE649062':'0802',
    'backurl':'https%3A%2F%2Fb.faloo.com%2F',
    'mobileVerifyCode':''
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.43',
}



resoponse = requests.get(url=url,headers=headers,params=data).text

print(resoponse)

