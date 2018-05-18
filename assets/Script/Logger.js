'use strict';

/**
 * 日志级别
 * @type {{TRACE: number, DEBUG: number, INFO: number, WARN: number, ERROR: number}}
 */
const logLevel = {
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
const logLevelDesc = {
    [logLevel.TRACE]: 'TRACE',
    [logLevel.DEBUG]: 'DEBUG',
    [logLevel.INFO]: 'INFO',
    [logLevel.WARN]: 'WARN',
    [logLevel.ERROR]: 'ERROR'
};

/**
 * logLevelMethod
 * @type {{}}
 */
const logLevelMethod = {
    [logLevel.TRACE]: 'logTrace',
    [logLevel.DEBUG]: 'logDebug',
    [logLevel.INFO]: 'logInfo',
    [logLevel.WARN]: 'LogWarn',
    [logLevel.ERROR]: 'logError'
};

/**
 * _logLevel
 * @type {number}
 * @private
 */
let _logLevel = logLevel.INFO;

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
class GameLog
{
    /**
     * logLevel 默认情况，debug下打印debug及以上级别日志，release下打印info及以上级别日志
     * @param {number} level
     */
    static logLevel(level){
        cc.log(`Logger.js - log level: ${logLevelDesc[level]}`);
        _logLevel = level;
    }

    set logLevel(level){
        this._logLevel = level;
    }

    get logLevel(){
        return this._logLevel;
    }

    /**
     * constructor
     * @param {string} name 
     */
    constructor(name,level){
        this._logLevel = level || _logLevel;
        this._tag = name || '';
    }

    /**
     * 获取日志文件名
     * @returns {string}
     */
    getLogName(){
        // TODO:
        return 'log_name';
    }

    /**
     * 读取所有日志内容
     * @returns {string}
     */
    readLog(){
        // TODO:
        return 'log content';
    }

    /**
     * log 只会写到控制台不会写到日志文件
     * @param msg
     * @param args
     */
    log(msg,...args){
        const content = this._format(msg,...args);
        cc.log(`${this._tag} - ${content}`);
    }

    /**
     * trace级别日志，会根据logLevel是否写到日志文件
     * @param msg
     * @param args
     */
    trace(msg,...args){
        const content = this._format(msg,...args);
        cc.log(`${this._tag} - ${content}`);
        this._log(logLevel.TRACE,content);
    }

    /**
     * debug级别日志，会根据logLevel是否写到日志文件
     * @param msg
     * @param args
     */
    debug(msg,...args){
        const content = this._format(msg,...args);
        cc.log(`${this._tag} - ${content}`);
        this._log(logLevel.DEBUG,content);
    }

    /**
     * info级别日志，会根据logLevel是否写到日志文件
     * @param msg
     * @param args
     */
    info(msg,...args){
        const content = this._format(msg,...args);
        cc.info(`${this._tag} - ${content}`);
        this._log(logLevel.INFO,content);
    }

    /**
     * warn级别日志，会根据logLevel是否写到日志文件
     * @param msg
     * @param args
     */
    warn(msg,...args){
        const content = this._format(msg,...args);
        cc.warn(`${this._tag} - ${content}`);
        this._log(logLevel.WARN,content);
    }

    /**
     * error级别日志，会根据logLevel是否写到日志文件
     * @param msg
     * @param args
     */
    error(msg,...args){
        const content = this._format(msg,...args);
        cc.error(`${this._tag} - ${content}`);
        this._log(logLevel.ERROR,content);
    }

    /**
     * _log
     * @param {number} level
     * @param {string} info
     * @private
     */
    _log(level,info){
        if(level >= this._logLevel){
            /// 转入Native处理
            let method = logLevelMethod[level];
            const ccNativeBridge = require('CCNativeBridge');
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
    _format (msg,...args) {
        let result = msg + '';
        if (args.length > 0) {
            if (args.length === 1 && typeof (args[0]) === 'object') {
                const obj = args[0];
                for (let key in obj) {
                    const reg = new RegExp('({' + key + '})','g');
                    if(obj.hasOwnProperty(key)) {
                        result = result.replace(reg, obj[key]);
                    }
                }
            } else {
                for (let i = 0; i < args.length; i++) {
                    if (args[i] !== undefined) {
                        const reg = new RegExp('({)' + i + '(})', 'g');
                        result = result.replace(reg, args[i]);
                    }
                }
            }
        }
        return result;
    }
}

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
    getLogger: function(name, level){
        return new GameLog(name,level);
    },

    /**
     * set log level
     * @param {number} level
     */
    logLevel: function(level){
        GameLog.logLevel(level);
    }
};