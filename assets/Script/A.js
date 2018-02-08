
const logger = cc.wangronghui.Log.getLogger('A.js');

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

    onLoad () {},

    // start () {
    //
    // },

    // update (dt) {},

    navigateButtonClicked(){
        logger.log('navigateButtonClicked');

        let parameter = {};
        parameter.title = 'wang ronghui';
        cc.wangronghui.navigator.navigate('B', parameter);

        // cc.director.loadScene('B');
    },

    saveState(state){
        logger.log('saveState');
        logger.log('saveState stata = ' + state);

    },



});
