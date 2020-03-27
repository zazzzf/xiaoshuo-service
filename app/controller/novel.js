const Controller = require('egg').Controller

class NovelController extends Controller {
  /**
   * 获取书籍所有分类
   */
  async cats() {
    const { ctx } = this
    const novels = await ctx.service.novel.cats()
    ctx.success(novels)
  }

  /**
   * 获取排行
   */
  async ranks() {
    const { ctx } = this
    const ranks = await ctx.service.novel.ranks()
    ctx.success(ranks)
  }
  /**
   * 获取书籍详情
   */
  async bookDetail(){
    const {ctx} = this
    const data = await ctx.service.novel.bookDetail(ctx.params.book)
    ctx.success(data)
  }
  /**
   * 获取排行榜小说
   */

  async rankBooks(){
    const {ctx} = this
    const rankBook = await ctx.service.novel.getRankBooks(ctx.params.rid)
    ctx.success(rankBook)
  }

  async smallCats (){
    const { ctx } = this
    const data = await ctx.service.novel.getSmallCats()
    ctx.success(data)
  }

  /**
   * bookunGenuine
   */
  async bookunGenuine () {
    const { ctx } = this
    const data = await ctx.service.novel.bookunGenuine({book:ctx.params.book})
    ctx.success(data)
  }
  async bookGenuine () {
    const { ctx } = this
    const data = await ctx.service.novel.bookGenuine({book:ctx.params.book})
    ctx.success(data)
  }

  /**
   * 根据分类获取小说列表
   */

  async bookunCharpter() {
    const {ctx} = this
    const {sourceId} = ctx.request.body
    if(sourceId){
      const data = await ctx.service.novel.bookunCharpter({sourceId})
      ctx.success(data)
    }else{
      ctx.fail({status:10001,message:"error:invalid sourceId"})
    }
  }
  
  async bookText(){
    const {ctx} = this
    const {link} = ctx.request.body
    if(link){
      const data = await ctx.service.novel.bookText(link)
      ctx.success(data)
    }else{
      ctx.fail({status:10001,message:"error:invalid link"})
    }
    
  }

}

module.exports = NovelController
