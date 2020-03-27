/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  /**
   * 首页门面controller
   */
  router.get('/', controller.home.index)
  router.get('/examples', controller.home.examples)
  router.get('/analysis', controller.home.analysis)
  /**
   * 小说相关controller
   */
  router.get('/book/cats', controller.novel.cats)
  router.get('/book/bookDetail/:book', controller.novel.bookDetail)
  router.get('/book/ranks', controller.novel.ranks)
  router.get('/book/rankBooks/:rid', controller.novel.rankBooks)
  router.get('/book/smallCats', controller.novel.smallCats)
  router.get('/book/bookunGenuine/:book', controller.novel.bookunGenuine)
  router.get('/book/bookGenuine/:book', controller.novel.bookGenuine)

  router.post('/book/bookunCharpter', controller.novel.bookunCharpter)
  router.post('/book/bookText', controller.novel.bookText)

};
