const emojies = [
  {pattern: /产品|官网|流量|时间|应急|过期|Bandwidth|expire/i, emoji: '🏳️‍🌈'},
  {pattern: /AC/, emoji: '🇦🇨'},
  {pattern: /AR|阿根廷/, emoji: '🇦🇷'},
  {pattern: /奥地利|维也纳/, emoji: '🇦🇹'},
  {pattern: /AU|Australia|Sydney|澳大利亚|悉尼/, emoji: '🇦🇺'},
  {pattern: /BE/, emoji: '🇧🇪'},
  {pattern: /BR|Brazil|巴西|圣保罗/, emoji: '🇧🇷'},
  {pattern: /Canada|加拿大|蒙特利尔|温哥华|楓葉|枫叶/, emoji: '🇨🇦'},
  {pattern: /瑞士|苏黎世/, emoji: '🇨🇭'},
  {pattern: /DE|Germany|法兰克福|德/, emoji: '🇩🇪'},
  {pattern: /丹麦/, emoji: '🇩🇰'},
  {pattern: /ES/, emoji: '🇪🇸'},
  {pattern: /EU/, emoji: '🇪🇺'},
  {pattern: /Finland|芬兰|赫尔辛基/, emoji: '🇫🇮'},
  {pattern: /FR|France|法国|巴黎/, emoji: '🇫🇷'},
  {pattern: /UK|England|United.*?Kingdom|英国|[^-]英|伦敦/i, emoji: '🇬🇧'},
  {pattern: /HK|Hong.*?Kong|HKT|HKBN|HGC|WTT|CMI|[^-]港/i, emoji: '🇭🇰'},
  {pattern: /Indonesia|印尼|印度尼西亚|雅加达/, emoji: '🇮🇩'},
  {pattern: /Ireland|爱尔兰|都柏林/, emoji: '🇮🇪'},
  {pattern: /India|印度|孟买/, emoji: '🇮🇳'},
  {pattern: /Italy|意大利|米兰/, emoji: '🇮🇹'},
  {pattern: /JP|Japan|日本|东京|大阪|埼玉|[^-]日/, emoji: '🇯🇵'},
  {pattern: /KP|朝鲜/, emoji: '🇰🇵'},
  {pattern: /KR|Korea|KOR|首尔|韩|韓/, emoji: '🇰🇷'},
  {pattern: /MO|Macao|澳门|CTM/, emoji: '🇲🇴'},
  {pattern: /MY|Malaysia|马来西亚/, emoji: '🇲🇾'},
  {pattern: /NL|Netherlands|荷兰|阿姆斯特丹/, emoji: '🇳🇱'},
  {pattern: /PH|Philippines|菲律宾/, emoji: '🇵🇭'},
  {pattern: /RO|罗马尼亚/, emoji: '🇷🇴'},
  {pattern: /RU|Russia|伯力|莫斯科|圣彼得堡|西伯利亚|新西伯利亚|哈巴罗夫斯克|俄罗斯|[^-]俄/, emoji: '🇷🇺'},
  {pattern: /沙特|迪拜/, emoji: '🇸🇦'},
  {pattern: /SE|Sweden/, emoji: '🇸🇪'},
  {pattern: /SG|Singapore|新加坡|狮城|[^-]新/, emoji: '🇸🇬'},
  {pattern: /TH|Thailand|泰国|曼谷/, emoji: '🇹🇭'},
  {pattern: /TR|Turkey|土耳其|伊斯坦布尔/, emoji: '🇹🇷'},
  {pattern: /US|America|United.*?States|美国|[^-]美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥/i, emoji: '🇺🇸'},
  {pattern: /VN|越南/, emoji: '🇻🇳'},
  {pattern: /ZA|南非/, emoji: '🇿🇦'},
  {pattern: /TW|Taiwan|新北|彰化|CHT|台湾|台北|[^-]台|HINET/i, emoji: '🇨🇳'},
  {pattern: /CN|China|回国|中国|江苏|北京|上海|广州|深圳|杭州|常州|徐州|青岛|宁波|镇江|成都|back/i, emoji: '🇨🇳'}
]

export default emojies