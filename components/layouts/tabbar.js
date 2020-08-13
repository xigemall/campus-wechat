// components/layouts/tabbar.js
const app = getApp();

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
    tabBarItems: [{
        title: '学校',
        name: 'index',
        icon: 'home-o',
      },
      {
        title: '娱乐',
        name: 'amusement',
        icon: 'service-o',
      },
      {
        title: '消息',
        name: 'message',
        icon: 'comment-o',
      },
      {
        title: '发现',
        name: 'discovery',
        icon: 'browsing-history-o',
      },
      {
        title: '个人中心',
        name: 'my',
        icon: 'manager-o',
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      const active = event.detail;
      wx.switchTab({
        url: `/pages/${active}/index`,
      })
      app.globalData.tabBarActive = active
    }
  },
  ready() {
    this.setData({
      active: app.globalData.tabBarActive
    })
  }
})