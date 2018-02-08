"use strict";
cc._RF.push(module, '1b282ZUaDFNS4HfTiX2jvS0', 'C');
// Script/C.js

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

    // onLoad () {},

    start: function start() {},
    navigateButtonClicked: function navigateButtonClicked() {
        logger.log('navigateButtonClicked');

        cc.wangronghui.navigator.goBack();
    },
    saveState: function saveState(state) {
        logger.log('saveState');
        logger.log('saveState stata = ' + state);
    }
}

// update (dt) {},
);

cc._RF.pop();