//index.js
import { fetchBanner } from './services/service';


Page({
  data: {

  },


  fetchList: async()=>{
    const data =  await fetchBanner()
    // console.log(data)
  },

  onLoad: function () {
    this.fetchList()
  },

})
