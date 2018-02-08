"use strict";
cc._RF.push(module, '92367pbUTBMe7c/19/kj0jr', 'App');
// AAApp/App.js

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  logger.log('constructor');

  cc.wangronghui.navigator = require('Navigator');

  logger.log('constructor end');
};

/**
 * 当前环境设置为wangronghui
 */


cc.wangronghui = cc.wangronghui || {};
/**
 * 由于Logger可能很早使用，在外面初始化吧
 */
cc.wangronghui.Log = cc.wangronghui.Log || require('Logger');
var logger = cc.wangronghui.Log.getLogger('App.js');

/**
 * 保存下app
 */
cc.wangronghui.app = cc.wangronghui.app || new App();

cc._RF.pop();