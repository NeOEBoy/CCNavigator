"use strict";
cc._RF.push(module, '0ff2dP4JuFLxKGHY1swn9Od', 'B');
// Script/B.js

'use strict';

var logger = cc.wangronghui.Log.getLogger('B.js');

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},
    start: function start() {},
    navigateButtonClicked: function navigateButtonClicked() {
        logger.log('navigateButtonClicked');

        cc.wangronghui.navigator.navigate('C');
        // cc.wangronghui.navigator.goBack();
        // cc.director.loadScene('C');
    },
    loadState: function loadState(parameter, state) {
        logger.log('loadState');

        if (parameter) {
            logger.log('loadState parameter = ' + parameter);
            logger.log('loadState parameter.title = ' + parameter.title);
        }

        logger.log('loadState state = ' + state);
        if (state) {

            logger.log('loadState state.xxx = ' + state.xxx);
        }
    },
    saveState: function saveState(state) {
        logger.log('saveState');
        logger.log('saveState stata = ' + state);

        state.xxx = 'yyy';
        // logger.log('loadState state.xxx = ' + state.xxx);
    },
    update: function update(dt) {}
});

cc._RF.pop();