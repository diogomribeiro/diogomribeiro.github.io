gdjs.CreditsCode = {};
gdjs.CreditsCode.GDViesObjects1= [];
gdjs.CreditsCode.GDViesObjects2= [];
gdjs.CreditsCode.GDScoreObjects1= [];
gdjs.CreditsCode.GDScoreObjects2= [];
gdjs.CreditsCode.GDSlimeObjects1= [];
gdjs.CreditsCode.GDSlimeObjects2= [];
gdjs.CreditsCode.GDCreditsTitleObjects1= [];
gdjs.CreditsCode.GDCreditsTitleObjects2= [];
gdjs.CreditsCode.GDUnilObjects1= [];
gdjs.CreditsCode.GDUnilObjects2= [];
gdjs.CreditsCode.GDTextCreditsObjects1= [];
gdjs.CreditsCode.GDTextCreditsObjects2= [];
gdjs.CreditsCode.GDGoBackObjects1= [];
gdjs.CreditsCode.GDGoBackObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDGoBackObjects1Objects = Hashtable.newFrom({"GoBack": gdjs.CreditsCode.GDGoBackObjects1});gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GoBack"), gdjs.CreditsCode.GDGoBackObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDGoBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Victory", false);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDViesObjects1.length = 0;
gdjs.CreditsCode.GDViesObjects2.length = 0;
gdjs.CreditsCode.GDScoreObjects1.length = 0;
gdjs.CreditsCode.GDScoreObjects2.length = 0;
gdjs.CreditsCode.GDSlimeObjects1.length = 0;
gdjs.CreditsCode.GDSlimeObjects2.length = 0;
gdjs.CreditsCode.GDCreditsTitleObjects1.length = 0;
gdjs.CreditsCode.GDCreditsTitleObjects2.length = 0;
gdjs.CreditsCode.GDUnilObjects1.length = 0;
gdjs.CreditsCode.GDUnilObjects2.length = 0;
gdjs.CreditsCode.GDTextCreditsObjects1.length = 0;
gdjs.CreditsCode.GDTextCreditsObjects2.length = 0;
gdjs.CreditsCode.GDGoBackObjects1.length = 0;
gdjs.CreditsCode.GDGoBackObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
