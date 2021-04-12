gdjs.GameOverCode = {};
gdjs.GameOverCode.GDViesObjects1= [];
gdjs.GameOverCode.GDViesObjects2= [];
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];
gdjs.GameOverCode.GDSlimeObjects1= [];
gdjs.GameOverCode.GDSlimeObjects2= [];
gdjs.GameOverCode.GDGameTitleObjects1= [];
gdjs.GameOverCode.GDGameTitleObjects2= [];
gdjs.GameOverCode.GDButtonStartObjects1= [];
gdjs.GameOverCode.GDButtonStartObjects2= [];
gdjs.GameOverCode.GDDodo3Objects1= [];
gdjs.GameOverCode.GDDodo3Objects2= [];
gdjs.GameOverCode.GDDodo2Objects1= [];
gdjs.GameOverCode.GDDodo2Objects2= [];
gdjs.GameOverCode.GDDodoObjects1= [];
gdjs.GameOverCode.GDDodoObjects2= [];
gdjs.GameOverCode.GDPalmierObjects1= [];
gdjs.GameOverCode.GDPalmierObjects2= [];
gdjs.GameOverCode.GDCloud1Objects1= [];
gdjs.GameOverCode.GDCloud1Objects2= [];
gdjs.GameOverCode.GDTotalScoreObjects1= [];
gdjs.GameOverCode.GDTotalScoreObjects2= [];
gdjs.GameOverCode.GDNouvelleEssaieObjects1= [];
gdjs.GameOverCode.GDNouvelleEssaieObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.GameOverCode.GDButtonStartObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.GameOverCode.GDButtonStartObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.GameOverCode.GDButtonStartObjects1});gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameOverCode.GDScoreObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "Spring Chicken.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.GameOverCode.GDButtonStartObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dodo"), gdjs.GameOverCode.GDDodoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dodo2"), gdjs.GameOverCode.GDDodo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dodo3"), gdjs.GameOverCode.GDDodo3Objects1);
{for(var i = 0, len = gdjs.GameOverCode.GDDodoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDodoObjects1[i].setX(gdjs.GameOverCode.GDDodoObjects1[i].getX() + (1));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDodo2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDodo2Objects1[i].setX(gdjs.GameOverCode.GDDodo2Objects1[i].getX() + (1.3));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDDodo3Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDodo3Objects1[i].setX(gdjs.GameOverCode.GDDodo3Objects1[i].getX() + (3.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.GameOverCode.GDButtonStartObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.GameOverCode.GDButtonStartObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDViesObjects1.length = 0;
gdjs.GameOverCode.GDViesObjects2.length = 0;
gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;
gdjs.GameOverCode.GDSlimeObjects1.length = 0;
gdjs.GameOverCode.GDSlimeObjects2.length = 0;
gdjs.GameOverCode.GDGameTitleObjects1.length = 0;
gdjs.GameOverCode.GDGameTitleObjects2.length = 0;
gdjs.GameOverCode.GDButtonStartObjects1.length = 0;
gdjs.GameOverCode.GDButtonStartObjects2.length = 0;
gdjs.GameOverCode.GDDodo3Objects1.length = 0;
gdjs.GameOverCode.GDDodo3Objects2.length = 0;
gdjs.GameOverCode.GDDodo2Objects1.length = 0;
gdjs.GameOverCode.GDDodo2Objects2.length = 0;
gdjs.GameOverCode.GDDodoObjects1.length = 0;
gdjs.GameOverCode.GDDodoObjects2.length = 0;
gdjs.GameOverCode.GDPalmierObjects1.length = 0;
gdjs.GameOverCode.GDPalmierObjects2.length = 0;
gdjs.GameOverCode.GDCloud1Objects1.length = 0;
gdjs.GameOverCode.GDCloud1Objects2.length = 0;
gdjs.GameOverCode.GDTotalScoreObjects1.length = 0;
gdjs.GameOverCode.GDTotalScoreObjects2.length = 0;
gdjs.GameOverCode.GDNouvelleEssaieObjects1.length = 0;
gdjs.GameOverCode.GDNouvelleEssaieObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
