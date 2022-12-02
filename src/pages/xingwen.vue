<template>
  <br>
  <br>
  <br>
  <h1>新闻内容...</h1>
  <h1>还在开发中，敬请期待</h1>
  <h1>{{mdheroxxs[1].city}}</h1>
  <ul>
      <li v-for="(p) in mdheroxxs" :key="p.num">
          id：{{p.num}}【{{p.name}}---{{p.sx}}---{{p.sex}}---{{p.city}}---{{p.starts}}---{{p.element}}---{{p.em}}---{{p.arms}}】
      </li>
  </ul>
  <hr><hr>
  <h1>{{lyheroxxs[1].city}}</h1>
  <ul>
      <li v-for="(p) in lyheroxxs" :key="p.num">
          id：{{p.num}}【{{p.name}}---{{p.sx}}---{{p.sex}}---{{p.city}}---{{p.starts}}---{{p.element}}---{{p.em}}---{{p.arms}}】
      </li>
  </ul>
  <hr><hr>
  <h1>{{dqheroxxs[1].city}}</h1>
  <ul>
      <li v-for="(p) in dqheroxxs" :key="p.num">
          id：{{p.num}}【{{p.name}}---{{p.sx}}---{{p.sex}}---{{p.city}}---{{p.starts}}---{{p.element}}---{{p.em}}---{{p.arms}}】
      </li>
  </ul>
  
</template>

<script>
    export default {
      data(){
        return{
          mdheroxxs : [
          {num: 0,name: "琴",sex: "女",city: "蒙德",starts: 5,element: "风",arms: "单手剑",
          xtp:require('../assets/hero/md0Xq.png'),sx:'q',em:'wind'},
          {num: 1,name: "安柏",sex: "女",city: "蒙德",starts: 4,element: "火",arms: "弓",
          xtp:require('../assets/hero/md1Xab.png'),sx:'ab',em:'fire'},
          {num: 2,name: "丽莎",sex: "女",city: "蒙德",starts: 4,element: "雷",arms: "法器",
          xtp:require('../assets/hero/md2Xls.png'),sx:'ls',em:'thunder'},
          {num: 3,name: "凯亚",sex: "男",city: "蒙德",starts: 4,element: "冰",arms: "单手剑",
          xtp:require('../assets/hero/md3Xky.png'),sx:'ky',em:'ice'},
          {num: 4,name: "芭芭拉",sex: "女",city: "蒙德",starts: 4,element: "水",arms: "法器",
          xtp:require('../assets/hero/md4Xbbl.png'),sx:'bbl',em:'water'},
          {num: 5,name: "迪卢克",sex: "男",city: "蒙德",starts: 5,element: "火",arms: "双手剑",
          xtp:require('../assets/hero/md5Xdlk.png'),sx:'dlk',em:'fire'},
          {num: 6,name: "雷泽",sex: "男",city: "蒙德",starts: 4,element: "雷",arms: "双手剑",
          xtp:require('../assets/hero/md6Xlz.png'),sx:'lz',em:'thunder'},
          {num: 7,name: "温迪",sex: "男",city: "蒙德",starts: 5,element: "风",arms: "弓",
          xtp:require('../assets/hero/md7Xwd.png'),sx:'wd',em:'wind'},
          {num: 8,name: "可莉",sex: "女",city: "蒙德",starts: 5,element: "火",arms: "法器",
          xtp:require('../assets/hero/md8Xkl.png'),sx:'kl',em:'fire'},
          {num: 9,name: "班尼特",sex: "男",city: "蒙德",starts: 4,element: "火",arms: "单手剑",
          xtp:require('../assets/hero/md9Xbnt.png'),sx:'bnt',em:'fire'},
          {num: 10,name: "诺艾尔",sex: "女",city: "蒙德",starts: 4,element: "岩",arms: "双手剑",
          xtp:require('../assets/hero/md10Xnae.png'),sx:'nae',em:'rock'},
          {num: 11,name: "菲谢尔",sex: "女",city: "蒙德",starts: 4,element: "雷",arms: "弓",
          xtp:require('../assets/hero/md11Xfxe.png'),sx:'fxe',em:'thunder'},
          {num: 12,name: "砂糖",sex: "女",city: "蒙德",starts: 4,element: "风",arms: "法器",
          xtp:require('../assets/hero/md12Xst.png'),sx:'st',em:'wind'},
          {num: 13,name: "莫娜",sex: "女",city: "蒙德",starts: 5,element: "水",arms: "法器",
          xtp:require('../assets/hero/md13Xmn.png'),sx:'mn',em:'water'},
          {num: 14,name: "迪奥娜",sex: "女",city: "蒙德",starts: 4,element: "冰",arms: "弓",
          xtp:require('../assets/hero/md14Xdan.png'),sx:'dan',em:'ice'},
          {num: 15,name: "阿贝多",sex: "男",city: "蒙德",starts: 5,element: "岩",arms: "单手剑",
          xtp:require('../assets/hero/md15Xabd.png'),sx:'abd',em:'rock'},
          {num: 16,name: "罗莎莉亚",sex: "女",city: "蒙德",starts: 4,element: "冰",arms: "枪",
          xtp:require('../assets/hero/md16Xlsly.png'),sx:'lsly',em:'ice'},
          {num: 17,name: "优菈",sex: "女",city: "蒙德",starts: 5,element: "冰",arms: "双手剑",
          xtp:require('../assets/hero/md17Xyl.png'),sx:'yl',em:'ice'},
          {num: 18,name: "埃洛伊",sex: "女",city: "蒙德",starts: 5,element: "冰",arms: "弓",
          xtp:require('../assets/hero/md18Xaly.png'),sx:'aly',em:'ice'},
          ],

          lyheroxxs : [
          {num: 0,name: "魈",sex: "男",city: "璃月",starts: 5,element: "风",em:'wind',arms: "枪",sx:'x'},
          {num: 1,name: "北斗",sex: "女",city: "璃月",starts: 4,element: "雷",em:'thunder',arms: "双手剑",sx:'bd'},
          {num: 2,name: "凝光",sex: "女",city: "璃月",starts: 4,element: "岩",em:'rock',arms: "法器",sx:'ng'},
          {num: 3,name: "香菱",sex: "女",city: "璃月",starts: 4,element: "火",em:'fire',arms: "枪",sx:'xl'},
          {num: 4,name: "行秋",sex: "男",city: "璃月",starts: 4,element: "水",em:'water',arms: "单手剑",sx:'xq'},
          {num: 5,name: "重云",sex: "男",city: "璃月",starts: 4,element: "冰",em:'ice',arms: "双手剑",sx:'cy'},
          {num: 6,name: "刻晴",sex: "女",city: "璃月",starts: 5,element: "雷",em:'thunder',arms: "单手剑",sx:'kq'},
          {num: 7,name: "七七",sex: "女",city: "璃月",starts: 5,element: "冰",em:'ice',arms: "单手剑",sx:'qq'},
          {num: 8,name: "达达利亚",sex: "男",city: "璃月",starts: 5,element: "水",em:'water',arms: "弓",sx:'ddly'},
          {num: 9,name: "钟离",sex: "男",city: "璃月",starts: 5,element: "岩",em:'rock',arms: "枪",sx:'zl'},
          {num: 10,name: "辛焱",sex: "女",city: "璃月",starts: 4,element: "火",em:'fire',arms: "双手剑",sx:'xy'},
          {num: 11,name: "甘雨",sex: "女",city: "璃月",starts: 5,element: "冰",em:'ice',arms: "弓",sx:'gy'},
          {num: 12,name: "胡桃",sex: "女",city: "璃月",starts: 5,element: "火",em:'fire',arms: "枪",sx:'ht'},
          {num: 13,name: "烟绯",sex: "女",city: "璃月",starts: 4,element: "火",em:'fire',arms: "法器",sx:'yf'},
          {num: 14,name: "申鹤",sex: "女",city: "璃月",starts: 5,element: "冰",em:'ice',arms: "枪",sx:'sh'},
          {num: 15,name: "云堇",sex: "女",city: "璃月",starts: 4,element: "岩",em:'rock',arms: "枪",sx:'yj'},
          ],

          dqheroxxs : [
          {num: 0,name: "神里凌华",sex: "女",city: "稻妻",starts: 5,element: "冰",em:'ice',arms: "单手剑",sx:'sllh'},
          {num: 1,name: "枫原万叶",sex: "男",city: "稻妻",starts: 5,element: "风",em:'wind',arms: "单手剑",sx:'fywy'},
          {num: 2,name: "宵宫",sex: "女",city: "稻妻",starts: 5,element: "火",em:'fire',arms: "弓",sx:'xg'},
          {num: 3,name: "早柚",sex: "女",city: "稻妻",starts: 4,element: "风",em:'wind',arms: "双手剑",sx:'zy'},
          {num: 4,name: "雷电将军",sex: "女",city: "稻妻",starts: 5,element: "雷",em:'thunder',arms: "枪",sx:'ldjj'},
          {num: 5,name: "九条裟罗",sex: "女",city: "稻妻",starts: 4,element: "雷",em:'thunder',arms: "弓",sx:'jtsl'},
          {num: 6,name: "珊瑚宫心海",sex: "女",city: "稻妻",starts: 5,element: "水",em:'water',arms: "法器",sx:'shgxh'},
          {num: 7,name: "托马",sex: "男",city: "稻妻",starts: 4,element: "火",em:'fire',arms: "枪",sx:'tm'},
          {num: 8,name: "荒泷一斗",sex: "男",city: "稻妻",starts: 5,element: "岩",em:'rock',arms: "双手剑",sx:'hlyd'},
          {num: 9,name: "五郎",sex: "男",city: "稻妻",starts: 4,element: "岩",em:'rock',arms: "弓",sx:'wl'},
          {num: 10,name: "八重神子",sex: "女",city: "稻妻",starts: 5,element: "雷",em:'thunder',arms: "法器",sx:'bcsz'},
          ]
        }
      },
      // setup(){
      //   console.log("+++",mderoxxs)
      //   return{mdheroxxs}
      // }
    }
</script>

<style scope="css">

</style>