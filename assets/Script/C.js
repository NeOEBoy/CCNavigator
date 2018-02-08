
const logger = cc.wangronghui.Log.getLogger('B.js');

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

    start () {

    },

    navigateButtonClicked(){
        logger.log('navigateButtonClicked');

        cc.wangronghui.navigator.goBack();

    },

    saveState(state){
        logger.log('saveState');
        logger.log('saveState stata = ' + state);

    },

    // update (dt) {},
});
