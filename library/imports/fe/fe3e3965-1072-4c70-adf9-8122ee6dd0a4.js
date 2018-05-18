"use strict";
cc._RF.push(module, 'fe3e3llEHJMcK35gSLubdCk', 'Logger');
// Script/Logger.js

'use strict';

/**
 * 日志级别
 * @type {{TRACE: number, DEBUG: number, INFO: number, WARN: number, ERROR: number}}
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logLevelDesc, _logLevelMethod;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logLevel = {
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4
};

/**
 * logLevelDesc
 * @type {{}}
 */
var logLevelDesc = (_logLevelDesc = {}, _defineProperty(_logLevelDesc, logLevel.TRACE, 'TRACE'), _defineProperty(_logLevelDesc, logLevel.DEBUG, 'DEBUG'), _defineProperty(_logLevelDesc, logLevel.INFO, 'INFO'), _defineProperty(_logLevelDesc, logLevel.WARN, 'WARN'), _defineProperty(_logLevelDesc, logLevel.ERROR, 'ERROR'), _logLevelDesc);

/**
 * logLevelMethod
 * @type {{}}
 */
var logLevelMethod = (_logLevelMethod = {}, _defineProperty(_logLevelMethod, logLevel.TRACE, 'logTrace'), _defineProperty(_logLevelMethod, logLevel.DEBUG, 'logDebug'), _defineProperty(_logLevelMethod, logLevel.INFO, 'logInfo'), _defineProperty(_logLevelMethod, logLevel.WARN, 'LogWarn'), _defineProperty(_logLevelMethod, logLevel.ERROR, 'logError'), _logLevelMethod);

/**
 * _logLevel
 * @type {number}
 * @private
 */
var _logLevel = logLevel.INFO;

/**
 * GameLog 应用日志
 *
 * @example
 * const logger = require('logger').getLogger('Logger.js');
 * logger.info('test1');
 * logger.info('test2,{1},{0}',123,456);
 * logger.info('test3,{0}','abc');
 * logger.info('test4,{0},{1}','abc',123);
 * logger.info('test5,{name},{age}',{'name':'abc','age':23});
 */

var GameLog = function () {
    _createClass(GameLog, [{
        key: 'logLevel',
        set: function set(level) {
            this._logLevel = level;
        },
        get: function get() {
            return this._logLevel;
        }

        /**
         * constructor
         * @param {string} name 
         */

    }], [{
        key: 'logLevel',

        /**
         * logLevel 默认情况，debug下打印debug及以上级别日志，release下打印info及以上级别日志
         * @param {number} level
         */
        value: function logLevel(level) {
            cc.log('Logger.js - log level: ' + logLevelDesc[level]);
            _logLevel = level;
        }
    }]);

    function GameLog(name, level) {
        _classCallCheck(this, GameLog);

        this._logLevel = level || _logLevel;
        this._tag = name || '';
    }

    /**
     * 获取日志文件名
     * @returns {string}
     */


    _createClass(GameLog, [{
        key: 'getLogName',
        value: function getLogName() {
            // TODO:
            return 'log_name';
        }

        /**
         * 读取所有日志内容
         * @returns {string}
         */

    }, {
        key: 'readLog',
        value: function readLog() {
            // TODO:
            return 'log content';
        }

        /**
         * log 只会写到控制台不会写到日志文件
         * @param msg
         * @param args
         */

    }, {
        key: 'log',
        value: function log(msg) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var content = this._format.apply(this, [msg].concat(args));
            cc.log(this._tag + ' - ' + content);
        }

        /**
         * trace级别日志，会根据logLevel是否写到日志文件
         * @param msg
         * @param args
         */

    }, {
        key: 'trace',
        value: function trace(msg) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            var content = this._format.apply(this, [msg].concat(args));
            cc.log(this._tag + ' - ' + content);
            this._log(logLevel.TRACE, content);
        }

        /**
         * debug级别日志，会根据logLevel是否写到日志文件
         * @param msg
         * @param args
         */

    }, {
        key: 'debug',
        value: function debug(msg) {
            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
            }

            var content = this._format.apply(this, [msg].concat(args));
            cc.log(this._tag + ' - ' + content);
            this._log(logLevel.DEBUG, content);
        }

        /**
         * info级别日志，会根据logLevel是否写到日志文件
         * @param msg
         * @param args
         */

    }, {
        key: 'info',
        value: function info(msg) {
            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = arguments[_key4];
            }

            var content = this._format.apply(this, [msg].concat(args));
            cc.info(this._tag + ' - ' + content);
            this._log(logLevel.INFO, content);
        }

        /**
         * warn级别日志，会根据logLevel是否写到日志文件
         * @param msg
         * @param args
         */

    }, {
        key: 'warn',
        value: function warn(msg) {
            for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                args[_key5 - 1] = arguments[_key5];
            }

            var content = this._format.apply(this, [msg].concat(args));
            cc.warn(this._tag + ' - ' + content);
            this._log(logLevel.WARN, content);
        }

        /**
         * error级别日志，会根据logLevel是否写到日志文件
         * @param msg
         * @param args
         */

    }, {
        key: 'error',
        value: function error(msg) {
            for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                args[_key6 - 1] = arguments[_key6];
            }

            var content = this._format.apply(this, [msg].concat(args));
            cc.error(this._tag + ' - ' + content);
            this._log(logLevel.ERROR, content);
        }

        /**
         * _log
         * @param {number} level
         * @param {string} info
         * @private
         */

    }, {
        key: '_log',
        value: function _log(level, info) {
            if (level >= this._logLevel) {
                /// 转入Native处理
                var method = logLevelMethod[level];
                var ccNativeBridge = require('CCNativeBridge');
                // ccNativeBridge.invokeNativeMethod('LogHandler', method, `${this._tag} - ${info}`);
            }
        }

        /**
         * _format
         * @param {string} msg
         * @param {...} args
         * @returns {string}
         * @private
         */

    }, {
        key: '_format',
        value: function _format(msg) {
            var result = msg + '';

            for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
                args[_key7 - 1] = arguments[_key7];
            }

            if (args.length > 0) {
                if (args.length === 1 && _typeof(args[0]) === 'object') {
                    var obj = args[0];
                    for (var key in obj) {
                        var reg = new RegExp('({' + key + '})', 'g');
                        if (obj.hasOwnProperty(key)) {
                            result = result.replace(reg, obj[key]);
                        }
                    }
                } else {
                    for (var i = 0; i < args.length; i++) {
                        if (args[i] !== undefined) {
                            var _reg = new RegExp('({)' + i + '(})', 'g');
                            result = result.replace(_reg, args[i]);
                        }
                    }
                }
            }
            return result;
        }
    }]);

    return GameLog;
}();

module.exports = {
    /**
     * 日志级别
     */
    LEVEL: logLevel,
    /**
     * get logger
     * @param {*} name
     * @returns {GameLog}
     */
    getLogger: function getLogger(name, level) {
        return new GameLog(name, level);
    },

    /**
     * set log level
     * @param {number} level
     */
    logLevel: function logLevel(level) {
        GameLog.logLevel(level);
    }
};

cc._RF.pop();