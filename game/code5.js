gdjs.VictoryCode = {};
gdjs.VictoryCode.GDViesObjects1= [];
gdjs.VictoryCode.GDViesObjects2= [];
gdjs.VictoryCode.GDScoreObjects1= [];
gdjs.VictoryCode.GDScoreObjects2= [];
gdjs.VictoryCode.GDSlimeObjects1= [];
gdjs.VictoryCode.GDSlimeObjects2= [];
gdjs.VictoryCode.GDGameTitleObjects1= [];
gdjs.VictoryCode.GDGameTitleObjects2= [];
gdjs.VictoryCode.GDButtonStartObjects1= [];
gdjs.VictoryCode.GDButtonStartObjects2= [];
gdjs.VictoryCode.GDDodo3Objects1= [];
gdjs.VictoryCode.GDDodo3Objects2= [];
gdjs.VictoryCode.GDDodo2Objects1= [];
gdjs.VictoryCode.GDDodo2Objects2= [];
gdjs.VictoryCode.GDDodoObjects1= [];
gdjs.VictoryCode.GDDodoObjects2= [];
gdjs.VictoryCode.GDPalmierObjects1= [];
gdjs.VictoryCode.GDPalmierObjects2= [];
gdjs.VictoryCode.GDCloud1Objects1= [];
gdjs.VictoryCode.GDCloud1Objects2= [];
gdjs.VictoryCode.GDTotalScoreObjects1= [];
gdjs.VictoryCode.GDTotalScoreObjects2= [];
gdjs.VictoryCode.GDVictoryTextObjects1= [];
gdjs.VictoryCode.GDVictoryTextObjects2= [];
gdjs.VictoryCode.GDNouvelleEssaieObjects1= [];
gdjs.VictoryCode.GDNouvelleEssaieObjects2= [];
gdjs.VictoryCode.GDNewObjectObjects1= [];
gdjs.VictoryCode.GDNewObjectObjects2= [];
gdjs.VictoryCode.GDRedFlowerObjects1= [];
gdjs.VictoryCode.GDRedFlowerObjects2= [];
gdjs.VictoryCode.GDSummerTileObjects1= [];
gdjs.VictoryCode.GDSummerTileObjects2= [];
gdjs.VictoryCode.GDTree2Objects1= [];
gdjs.VictoryCode.GDTree2Objects2= [];
gdjs.VictoryCode.GDCreditsButtonObjects1= [];
gdjs.VictoryCode.GDCreditsButtonObjects2= [];
gdjs.VictoryCode.GDPlayAgainObjects1= [];
gdjs.VictoryCode.GDPlayAgainObjects2= [];

gdjs.VictoryCode.conditionTrue_0 = {val:false};
gdjs.VictoryCode.condition0IsTrue_0 = {val:false};
gdjs.VictoryCode.condition1IsTrue_0 = {val:false};
gdjs.VictoryCode.condition2IsTrue_0 = {val:false};


gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDCreditsButtonObjects1Objects = Hashtable.newFrom({"CreditsButton": gdjs.VictoryCode.GDCreditsButtonObjects1});gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDCreditsButtonObjects1Objects = Hashtable.newFrom({"CreditsButton": gdjs.VictoryCode.GDCreditsButtonObjects1});gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDCreditsButtonObjects1Objects = Hashtable.newFrom({"CreditsButton": gdjs.VictoryCode.GDCreditsButtonObjects1});gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDPlayAgainObjects1Objects = Hashtable.newFrom({"PlayAgain": gdjs.VictoryCode.GDPlayAgainObjects1});gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDPlayAgainObjects1Objects = Hashtable.newFrom({"PlayAgain": gdjs.VictoryCode.GDPlayAgainObjects1});gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDPlayAgainObjects1Objects = Hashtable.newFrom({"PlayAgain": gdjs.VictoryCode.GDPlayAgainObjects1});gdjs.VictoryCode.eventsList0 = function(runtimeScene) {

{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dodo"), gdjs.VictoryCode.GDDodoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.VictoryCode.GDScoreObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "Horns.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.VictoryCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score"))));
}
}{for(var i = 0, len = gdjs.VictoryCode.GDDodoObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDDodoObjects1[i].flipX(true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dodo"), gdjs.VictoryCode.GDDodoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dodo2"), gdjs.VictoryCode.GDDodo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dodo3"), gdjs.VictoryCode.GDDodo3Objects1);
{for(var i = 0, len = gdjs.VictoryCode.GDDodoObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDDodoObjects1[i].setX(gdjs.VictoryCode.GDDodoObjects1[i].getX() + (1));
}
}{for(var i = 0, len = gdjs.VictoryCode.GDDodo2Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDDodo2Objects1[i].setX(gdjs.VictoryCode.GDDodo2Objects1[i].getX() + (1.3));
}
}{for(var i = 0, len = gdjs.VictoryCode.GDDodo3Objects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDDodo3Objects1[i].setX(gdjs.VictoryCode.GDDodo3Objects1[i].getX() + (3.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.VictoryCode.GDCreditsButtonObjects1);

gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDCreditsButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VictoryCode.GDCreditsButtonObjects1 */
{for(var i = 0, len = gdjs.VictoryCode.GDCreditsButtonObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDCreditsButtonObjects1[i].setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.VictoryCode.GDCreditsButtonObjects1);

gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDCreditsButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VictoryCode.GDCreditsButtonObjects1 */
{for(var i = 0, len = gdjs.VictoryCode.GDCreditsButtonObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDCreditsButtonObjects1[i].setAnimationName("Normal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.VictoryCode.GDCreditsButtonObjects1);

gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDCreditsButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.VictoryCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.VictoryCode.GDPlayAgainObjects1);

gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDPlayAgainObjects1Objects, runtimeScene, true, false);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VictoryCode.GDPlayAgainObjects1 */
{for(var i = 0, len = gdjs.VictoryCode.GDPlayAgainObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDPlayAgainObjects1[i].setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.VictoryCode.GDPlayAgainObjects1);

gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDPlayAgainObjects1Objects, runtimeScene, true, true);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
/* Reuse gdjs.VictoryCode.GDPlayAgainObjects1 */
{for(var i = 0, len = gdjs.VictoryCode.GDPlayAgainObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDPlayAgainObjects1[i].setAnimationName("Normal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.VictoryCode.GDPlayAgainObjects1);

gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDPlayAgainObjects1Objects, runtimeScene, true, false);
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.VictoryCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


};

gdjs.VictoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryCode.GDViesObjects1.length = 0;
gdjs.VictoryCode.GDViesObjects2.length = 0;
gdjs.VictoryCode.GDScoreObjects1.length = 0;
gdjs.VictoryCode.GDScoreObjects2.length = 0;
gdjs.VictoryCode.GDSlimeObjects1.length = 0;
gdjs.VictoryCode.GDSlimeObjects2.length = 0;
gdjs.VictoryCode.GDGameTitleObjects1.length = 0;
gdjs.VictoryCode.GDGameTitleObjects2.length = 0;
gdjs.VictoryCode.GDButtonStartObjects1.length = 0;
gdjs.VictoryCode.GDButtonStartObjects2.length = 0;
gdjs.VictoryCode.GDDodo3Objects1.length = 0;
gdjs.VictoryCode.GDDodo3Objects2.length = 0;
gdjs.VictoryCode.GDDodo2Objects1.length = 0;
gdjs.VictoryCode.GDDodo2Objects2.length = 0;
gdjs.VictoryCode.GDDodoObjects1.length = 0;
gdjs.VictoryCode.GDDodoObjects2.length = 0;
gdjs.VictoryCode.GDPalmierObjects1.length = 0;
gdjs.VictoryCode.GDPalmierObjects2.length = 0;
gdjs.VictoryCode.GDCloud1Objects1.length = 0;
gdjs.VictoryCode.GDCloud1Objects2.length = 0;
gdjs.VictoryCode.GDTotalScoreObjects1.length = 0;
gdjs.VictoryCode.GDTotalScoreObjects2.length = 0;
gdjs.VictoryCode.GDVictoryTextObjects1.length = 0;
gdjs.VictoryCode.GDVictoryTextObjects2.length = 0;
gdjs.VictoryCode.GDNouvelleEssaieObjects1.length = 0;
gdjs.VictoryCode.GDNouvelleEssaieObjects2.length = 0;
gdjs.VictoryCode.GDNewObjectObjects1.length = 0;
gdjs.VictoryCode.GDNewObjectObjects2.length = 0;
gdjs.VictoryCode.GDRedFlowerObjects1.length = 0;
gdjs.VictoryCode.GDRedFlowerObjects2.length = 0;
gdjs.VictoryCode.GDSummerTileObjects1.length = 0;
gdjs.VictoryCode.GDSummerTileObjects2.length = 0;
gdjs.VictoryCode.GDTree2Objects1.length = 0;
gdjs.VictoryCode.GDTree2Objects2.length = 0;
gdjs.VictoryCode.GDCreditsButtonObjects1.length = 0;
gdjs.VictoryCode.GDCreditsButtonObjects2.length = 0;
gdjs.VictoryCode.GDPlayAgainObjects1.length = 0;
gdjs.VictoryCode.GDPlayAgainObjects2.length = 0;

gdjs.VictoryCode.eventsList0(runtimeScene);
return;

}

gdjs['VictoryCode'] = gdjs.VictoryCode;
