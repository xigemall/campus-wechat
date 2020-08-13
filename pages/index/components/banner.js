// pages/index/components/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    width: "200",
    height: '160',
    bannerSrc: 'https://img.yzcdn.cn/vant/cat.jpeg',
    campus:{
      id:1,
      name:'北京大学',
      content:'北京大学创办于1898年，初名京师大学堂，是中国第一所国立综合性大学，也是当时中国最高教育行政机关。辛亥革命后，于1912年改为现名.',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },

  created() {
    const {
      windowWidth
    } = wx.getSystemInfoSync();
    this.setData({
      width: windowWidth
    })
  }
})