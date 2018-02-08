
只有Navigator这个文件，可以将该文件直接添加到自己工程中

# CCNavigator
/**
* Navigator介绍:
* ------------------------
* 提供一个支持导航栈的Navigator类，支持以下特性
* 0，记录场景切换的导航栈。
* 1，场景之间可以传递参数，比如场景A要传个字符串给场景B。
* 2，多个场景进入同一场景后，从场景返回前一个场景，不需要再判断前一个场景是谁，可以直接goBack返回。
* 3，支持场景返回后页面数据恢复，比如场景A界面，输入框输入了一段文字，然后进入场景B，
* 从场景B返回后可以恢复输入框文字(需要在场景A脚本实现固定接口支持)。
* 4，兼容cc.director.loadScene调用，当场景切换不需要参数和保存状态时，可以直接使用cc.director.loadScene
* Navigator会监听并将场景加入导航栈中。（不过不推荐直接使用cc.director.loadScene，没有以上特性）
*
* Navigator使用方法:
* ------------------------
* a)在场景A向前加载新场景B[带参数][带回调]
* /// 默认
* navigator.navigate('B');
*
* /// [带参数]
* let parameter = {};
* parameter.title = 'i am wang ronghui';
* navigator.navigate('B', parameter);
*
* /// [带回调]
* navigator.navigate('B', function(){
* /// 切换成功处理
* });
*
* /// [带参数] + [带回调]
* let parameter = {};
* parameter.title = 'i am wang ronghui';
* navigator.navigate('B', parameter, function(){
* /// 切换成功处理
* });
*
* ~如果有传递parameter需在相应B.js内部实现loadState(parameter, state)函数接收参数parameter。
* ~如果要存储当前UI状态则实现saveState(state){ //将UI状态存储在参数state中,后续在loadState里恢复state }。
*
* c)场景B向后返回前一个场景A
* /// 默认
* navigator.goBack();
*
* /// [带参数]
* let parameter = {};
* parameter.title = 'i am wang ronghui';
* navigator.goBack(parameter);
*
* d)场景B向后返回指定名字场景A
* /// 默认
* navigator.goBackToScene('A');
*
* /// [带参数]
* let parameter = {};
* parameter.title = 'i am wang ronghui';
* navigator.goBackToScene('A', parameter);
*
* e)场景B向后返回根场景
* /// 默认
* navigator.goBackToRootScene();
*
* /// [带参数]
* let parameter = {};
* parameter.title = 'i am wang ronghui';
* navigator.goBackToRootScene(parameter);
*
* 注意事项:
* ------------------------
* 挂载到场景的Canvas的自定义脚本的名字，必须要和场景文件的名字一致，否则无法调用到loadState或者saveState
*
*/
