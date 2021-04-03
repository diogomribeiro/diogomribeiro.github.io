gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDViesObjects1= [];
gdjs.MainMenuCode.GDViesObjects2= [];
gdjs.MainMenuCode.GDScoreObjects1= [];
gdjs.MainMenuCode.GDScoreObjects2= [];
gdjs.MainMenuCode.GDGameTitleObjects1= [];
gdjs.MainMenuCode.GDGameTitleObjects2= [];
gdjs.MainMenuCode.GDButtonStartObjects1= [];
gdjs.MainMenuCode.GDButtonStartObjects2= [];
gdjs.MainMenuCode.GDDodo3Objects1= [];
gdjs.MainMenuCode.GDDodo3Objects2= [];
gdjs.MainMenuCode.GDDodo2Objects1= [];
gdjs.MainMenuCode.GDDodo2Objects2= [];
gdjs.MainMenuCode.GDDodoObjects1= [];
gdjs.MainMenuCode.GDDodoObjects2= [];
gdjs.MainMenuCode.GDPalmierObjects1= [];
gdjs.MainMenuCode.GDPalmierObjects2= [];
gdjs.MainMenuCode.GDCloud1Objects1= [];
gdjs.MainMenuCode.GDCloud1Objects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Spring Chicken.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dodo"), gdjs.MainMenuCode.GDDodoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dodo2"), gdjs.MainMenuCode.GDDodo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dodo3"), gdjs.MainMenuCode.GDDodo3Objects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDDodoObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDDodoObjects1[i].setX(gdjs.MainMenuCode.GDDodoObjects1[i].getX() + (1));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDDodo2Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDDodo2Objects1[i].setX(gdjs.MainMenuCode.GDDodo2Objects1[i].getX() + (1.3));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDDodo3Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDDodo3Objects1[i].setX(gdjs.MainMenuCode.GDDodo3Objects1[i].getX() + (3.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDViesObjects1.length = 0;
gdjs.MainMenuCode.GDViesObjects2.length = 0;
gdjs.MainMenuCode.GDScoreObjects1.length = 0;
gdjs.MainMenuCode.GDScoreObjects2.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects1.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects2.length = 0;
gdjs.MainMenuCode.GDDodo3Objects1.length = 0;
gdjs.MainMenuCode.GDDodo3Objects2.length = 0;
gdjs.MainMenuCode.GDDodo2Objects1.length = 0;
gdjs.MainMenuCode.GDDodo2Objects2.length = 0;
gdjs.MainMenuCode.GDDodoObjects1.length = 0;
gdjs.MainMenuCode.GDDodoObjects2.length = 0;
gdjs.MainMenuCode.GDPalmierObjects1.length = 0;
gdjs.MainMenuCode.GDPalmierObjects2.length = 0;
gdjs.MainMenuCode.GDCloud1Objects1.length = 0;
gdjs.MainMenuCode.GDCloud1Objects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
