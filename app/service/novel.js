const Service = require('egg').Service
const axios = require('axios')

const apiUrl = 'https://bookapi02.zhuishushenqi.com'
const apiUrl1 = 'http://api.zhuishushenqi.com'

/**追书神器api
 * http://api.zhuishushenqi.com
  http://api05iye5.zhuishushenqi.com
  http://http://chapterup.zhuishushenqi.com/chapter
 * 
 * 静态资源地址 http://statics.zhuishushenqi.com/
 */


class NovelService extends Service {
  /**
   * 获取所有分类
   */
  async cats() {
    const { data } = await axios.get(`${apiUrl1}/cats/lv2/statistics`)
    return data
  };

  /**
   * 获取排行榜类型
   */
  async ranks () {
    const { data } = await axios.get(`${apiUrl1}/ranking/gender`)
    return data
  }

  /**
   * 获取排行榜小说
   * @param {string} rankId 排行榜id
   */
  async getRankBooks (rankId) {
    const {data} = await axios.get(`${apiUrl1}/ranking/${rankId}`)
    return data.ranking
  }

 /**
   * 获取分类下小类别
   */
  async getSmallCats () {
    const {data} = await axios.get(`${apiUrl}/cats/lv2`)
    return data
  }

 
  /**
   * 根据分类获取小说列表
   * @param {string} gender: 男生:mael 女生:female 出版:press
   * @param {string} type: 热门:hot 新书:new 好评:repulation 完结: over 包月: month
   * @param {string} major: 大类别 从接口1获取
   * @param {string} minor: 小类别 从接口4获取 (非必填)
   * @param {string} start: 分页开始页
   * @param {string} limit: 分页条数
   */
  async getBooksList({gender="mael", type="new", major="", start="0", limit="20"}){
    const {data} = await axios.get(`${apiUrl}/book/by-categories`,{
      params:{gender,type,major,start,limit}
    })
    return data
  }

  /**
   * 获取小说信息
   * @param {string} book 具体小说的ID
   */
  async bookDetail(book){
    console.log(book)
    const {data} = await axios.get(`${apiUrl}/book/${book}`)
    return data
  }

  /**
   * 获取小说正版源
   */
  async bookGenuine({view="summary",book=""}){
    const {data} = await axios.get(`${apiUrl}/btoc/`,{
      params:{view,book}
    })
    return data
  }

  /**
   *  获取小说正版源于盗版源(混合)
   */
  async bookunGenuine({view="summary",book=""}){
    const {data} = await axios.get(`${apiUrl}/atoc`,{
      params:{view,book}
    })
    return data
  }

  /**
   * 获取小说章节(根据小说id)
   */
  async bookCharpter({view="chapters",bookId=""}){
    const {data} = await axios.get(`${apiUrl}/mix-atoc/${booId}`,{
      params:{view,bookId}
    })
    return data
  }

  /**
   * 10. 获取小说章节(根据小说源id)
   */
  async bookunCharpter({view="chapters",sourceId=""}){
    const {data} = await axios.get(`https://bookapi02.zhuishushenqi.com/btoc/${sourceId}`,{
      params:{view}
    })
    return data
  }

  /**
   * 获取小说章节内容
   */
  async bookText(link){
    console.log(encodeURIComponent(link) + "----------------对url进行编码----------------------")
    const {data} = await axios.get(`https://chapter2.zhuishushenqi.com/chapter/${encodeURIComponent(link)}`)
      return data.chapter
  }
}




module.exports = NovelService;
