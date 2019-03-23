# 功能强大的正则验证工具

## 示例

```
  验证银行卡(16|19)位
  verifyBankCard('441622200001011111') => true

  验证验证码
  默认数字验证(4|6)位
  verifyCode('1322') => true
  第二的参数位为true
  数字字母验证(4|6)位
  verifyCode('acs1', true) => true

  验证邮箱
  verifyEmail('ljw@163.com') => true

  验证身份证(仅支持18位)
  verifyIdCard('441622200001011111') => true

  验证手机号码
  verifyPhone('13456789123') => true

  验证邮政编码
  verifyPostalCode('517388') => true

  验证用户名(仅支持字母数字下划线减号)(6~18位)
  verifyUserName('hello-world') => true
```