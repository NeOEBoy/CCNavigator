

class App
{
    constructor(){
        logger.log('constructor');

        cc.wangronghui.navigator = require('Navigator');

        logger.log('constructor end');
    }

}



/**
 * 当前环境设置为wangronghui
 */
cc.wangronghui = cc.wangronghui || {};
/**
 * 由于Logger可能很早使用，在外面初始化吧
 */
cc.wangronghui.Log = cc.wangronghui.Log || require('Logger');
const logger = cc.wangronghui.Log.getLogger('App.js');

/**
 * 保存下app
 */
cc.wangronghui.app = cc.wangronghui.app || new App();