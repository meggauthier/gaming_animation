(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"walking_atlas_", frames: [[3470,770,2457,768],[0,770,3468,768],[0,0,4172,768],[4174,0,3793,768],[5929,770,636,513],[6567,770,342,612]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.BG_1 = function() {
	this.spriteSheet = ss["walking_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BG_2 = function() {
	this.spriteSheet = ss["walking_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BG_3 = function() {
	this.spriteSheet = ss["walking_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BG_4 = function() {
	this.spriteSheet = ss["walking_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cards = function() {
	this.spriteSheet = ss["walking_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cell = function() {
	this.spriteSheet = ss["walking_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA8865").s().p("AgkBTQgVgMgKgdQgFgPgCgYQgCghAMggQAMgeANAAQAGAAAJAVQALAaARANQALAHATAGQAQAEAJAKQAJAJAFAPQAEAPgDAOQgIAbglAMQgQAGgNAAQgUAAgQgKg");
	this.shape.setTransform(59.2,-161.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAYQgGgJgBgNQgBgNAEgKQAEgJAGgBQAGgBAFAJQAGAJABAOQABAMgEAKQgDAKgHAAIgBAAQgFAAgFgIg");
	this.shape_1.setTransform(44.2,-182);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAYQgGgJgBgOQgBgMAEgKQADgJAHgBQAFgBAGAJQAFAJACANQABANgEAKQgEAKgGABIgBAAQgFAAgFgJg");
	this.shape_2.setTransform(62.2,-183.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333337").s().p("AgYBFQgOgMgCgSIgGhFQgCgSAMgOQALgOATgCQARgCAOAMQAOAMACASIAGBFQACASgMAOQgLAOgTACIgEAAQgPAAgMgKg");
	this.shape_3.setTransform(60.9,-180.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333337").s().p("AgYBFQgOgMgCgSIgHhFQgBgSAMgOQAMgOASgCQARgCAOAMQAOAMACASIAHBFQABASgMAOQgMAOgSACIgFAAQgOAAgMgKg");
	this.shape_4.setTransform(43.2,-178.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D58867").ss(2).p("AgGgVQABAYALAJQAIAGAJgHQAJgIABgLQAAgPgLgRQgMgRgLgDQgTgFgNAeQgNAfAMAbQAKAVAWALQAVALAWgI");
	this.shape_5.setTransform(9.7,-177.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#895715").s().p("Aj7FwIgjgPIghgQQgTgJgUgFIgakeQgOieBoh6QBnh6ChgOIACgBQCUgNB2BYQB3BXAdCQQgOABgdgCQhGgEhTgzQgHgLgPgGQgCBBgSA4QgUA+gmApQgeAhgqAJQguASg2gJQgMgigagXQgdgYghgBQgygBgXAsQgSAjADA0QADBXAsAzIAGAGIAFA+QgQgEgXgKg");
	this.shape_6.setTransform(28.2,-196.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEB68F").s().p("Aj/G2QhohWgMiHIgckzQgPigBnh8QBnh7CggPQCfgOB7BmQB8BnAOCgIAcEzQANCHhXBoQhXBoiHANIh3ALQgRABgRAAQhyAAhchMg");
	this.shape_7.setTransform(30.3,-183.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#057EB4").s().p("AkyJ3ICBqmIExpGQAXgsAvgPQAwgPAsAXIARAJIlmK5IiDKdg");
	this.shape_8.setTransform(0.1,-52.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99D78").s().p("AgsBOQghgTgJgjQgKgkATggQATghAkgJQAjgJAgASQAhATAJAkQAKAjgTAgQgSAggkAKQgNADgLAAQgXAAgVgMg");
	this.shape_9.setTransform(-26.1,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A7C52E").s().p("AgUDFIg9gKQiLgWhShyQhShxAWiLILaB1QgWCKhyBTQhaBBhqAAQgcAAgcgFg");
	this.shape_10.setTransform(9.2,-8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#08A7E0").s().p("Ah6KlQiXgahZh9QhYh9AaiWIB7rTQAShnBVg8QBVg8BnARIDoAoQBnARA8BVQA8BWgSBmIh7LTQgaCXh9BZQhhBEhvAAQghAAgigGg");
	this.shape_11.setTransform(16.7,-60.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DA8865").s().p("AhRBzIAAjlICjAAIAADlg");
	this.shape_12.setTransform(31,-134.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A7C52E").s().p("Al0PiIEZwDIEDwJIDNAFIkdRBIk9QPg");
	this.shape_13.setTransform(-36,101.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#636368").s().p("AB4DZIiYigIAMgqQAEgPgMgJQgMgKgOAGIggAOIhchgICdiDIBNBRQAgAiAPArIBEDEQAGAQABATQACASgDARQgDAVgUAGQgGACgFAAQgNAAgKgKg");
	this.shape_14.setTransform(33.8,181.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333337").s().p("AC0CoIjOhNIgIgsQgDgPgPgEQgPgEgKAMIgWAcIh+gvIBVi6IBpAnQAqAQAhAhICTCTQAMAMAKAQQAKAQAFAQQAGAUgPAPQgKAJgMAAQgGAAgHgCg");
	this.shape_15.setTransform(-58.7,218.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#057EB4").s().p("AinBUIhkqJQgIgxAdgoQAdgoAxgIIAUgEIB+MGIEkJoIiKAXg");
	this.shape_16.setTransform(50.1,-51.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E99D78").s().p("Ag0BJQgegWgGglQgGgjAWgfQAWgeAlgGQAkgGAeAWQAeAWAGAlQAGAkgWAeQgWAeglAGIgOABQgcAAgYgRg");
	this.shape_17.setTransform(72.2,24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7FB21E").s().p("AiDL3IE1q3IomvMIEAA1IHpN5ImANrg");
	this.shape_18.setTransform(44,82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-81.3,-235.1,162.6,470.4), null);


(lib.switchai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929397").s().p("AiwAHQAVhHAOgjIABgBQAHgPARAAIAHAAIE5BXIgFCLImSAFQAGgnAVhGg");
	this.shape.setTransform(20.4,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424245").s().p("AjAgYIFChaIADAAQAMABAHAHQAGAGABAGQAFAVAQBRQAPBQACAWImJAEg");
	this.shape_1.setTransform(60.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.8,23.4);


(lib.step3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBDIAAiEIAbAAIAAAOQAGgIAKgDQAKgFAIAAIAAAcIgEgBIgEAAQgNAAgHAJQgGAJAAANIAABMg");
	this.shape.setTransform(170.9,93.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHIgEgMIgBgLIAAg0QAAgPAJgLQAGgHAIgEQAHgEAJAAQAKAAAIAEQAIADAHAKQAHAJAAAPIAAA0QAAAPgHAJQgGAJgJAFQgIAEgJAAQgLAAgKgGgAgIglQgEAEAAAHIAAA0QAAAGADAFQAEAEAFAAQAJAAACgFQACgFAAgGIAAgzQAAgHgDgEQgEgEgGAAQgFAAgDAEg");
	this.shape_1.setTransform(161.6,93.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBdIAAiFIAZAAIAACFgAgMhCIAAgaIAZAAIAAAag");
	this.shape_2.setTransform(154.1,90.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBDIgjiFIAdAAIARBWIAShWIAdAAIgjCFg");
	this.shape_3.setTransform(147,93.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA1QgCgEgBgEIAAgJIAAgPQAAgPAIgGQAHgHAGgDQAGgDAIAAIARAAIAAgLIAAgHQAAgCgDgEQgEgEgFAAQgEAAgEAEQgFADAAAGIgbAAQAAgQALgMQAMgLAQAAQAQAAAMALQAMAMAAAQIAABfIgbAAIAAgOQgEAHgGAEQgGAEgIAAQgRAAgIgPgAgHALQgFADAAAHIAAAHQAAAFADAEQAFAEAFAAQADAAADgBIAFgFQABgDAAgEIAAgHIAAgNIgKAAQgGAAgEADg");
	this.shape_4.setTransform(137.3,93.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AANBdIAAhcQAAgGgDgEQgDgEgHAAQgFAAgDAFQgFAEAAAFIAABcIgaAAIAAi5IAaAAIAABDQAKgPAPAAQAIAAAHAEQAGAEADAGQADAEAAAEIABAKIAABlg");
	this.shape_5.setTransform(127.1,90.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHQgDgIgBgGIgBgMIAAgxQAAgRAMgMQAMgMAPAAQARAAALAMQAMAMAAARIAAAkIg0AAIAAATQAAAFAEADQAEAEAEAAQAFAAAEgEQADgDABgGIAbAAIAAADQAAAGgDAHQgDAGgHAJQgJAJgSAAQgKAAgKgGgAgIglQgEADAAAKIAAANIAZAAIAAgNQAAgIgDgEQgDgFgHAAQgEAAgEAEg");
	this.shape_6.setTransform(117,93.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBBaQgHgEgEgHIAAAOIgbAAIAAi6IAbAAIAABDQAJgOAPAAQAQAAAGAIQAEAJABAFIABAIIAABIIgBALQgBAFgGAIQgGAIgPAAQgHAAgFgEgAgIgJQgEAEAAAFIAAA1QAAAGADAEQACAEAHAAQAGAAAEgDQADgEAAgEIAAg4QAAgGgDgEQgEgEgGAAQgFAAgDAFg");
	this.shape_7.setTransform(107,90.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeBDIAAiEIAbAAIAAAOQAGgIAKgDQAKgFAIAAIAAAcIgEgBIgEAAQgNAAgHAJQgGAJAAANIAABMg");
	this.shape_8.setTransform(93.2,93.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHQgDgIgBgGIgBgMIAAgxQAAgRAMgMQAMgMAQAAQAQAAALAMQAMAMAAARIAAAkIg0AAIAAATQAAAFAEADQAEAEAEAAQAFAAAEgEQAEgDAAgGIAbAAIAAADQAAAGgCAHQgEAGgHAJQgJAJgSAAQgLAAgJgGgAgIglQgEADAAAKIAAANIAZAAIAAgNQAAgIgDgEQgDgFgHAAQgEAAgEAEg");
	this.shape_9.setTransform(84,93.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjBdIAAgZIAFAAQAGAAAEgDQAEgCABgFIAGgXIglh/IAdAAIARBTIAShTIAdAAIgnCbQgEAOgIAJQgKAHgPAAg");
	this.shape_10.setTransform(74.4,96.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkA1QgCgEgBgEIAAgJIAAgPQAAgPAIgGQAHgHAGgDQAGgDAIAAIARAAIAAgLIAAgHQAAgCgEgEQgDgEgFAAQgEAAgFAEQgEADAAAGIgbAAQAAgQALgMQAMgLAQAAQAQAAAMALQAMAMAAAQIAABfIgbAAIAAgOQgEAHgGAEQgGAEgIAAQgRAAgIgPgAgIALQgEADAAAHIAAAHQAAAFADAEQAFAEAEAAQAEAAADgBIAFgFQABgDAAgEIAAgHIAAgNIgKAAQgGAAgFADg");
	this.shape_11.setTransform(64.7,93.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOBdQgHAAgFgBQgFgBgGgEQgFgFgDgHQgCgHAAgHIAAiZIAaAAIAACTQgBAHADADQACADAHAAIACAAIAAAZg");
	this.shape_12.setTransform(57.3,90.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBeIAAi6IAbAAIAAANQAEgGAHgEQAFgEAIAAQAMAAAIAJQAIAIAAAMIAABMIgBALQgBAEgGAHQgGAJgNgBQgRAAgIgPIAABDgAgIg+QgEAEAAAGIAAA1QAAAGAEAFQADAEAGAAQAIgBACgEQACgFAAgFIAAg1QAAgGgDgEQgEgFgGABQgFgBgDAFg");
	this.shape_13.setTransform(49.2,96.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AANBEIAAhdQAAgPgNAAQgFAAgDAEQgEAFAAAGIAABdIgbAAIAAiFIAbAAIAAANQAJgOAPAAQAQAAAIANQACADABAFIABAKIAABng");
	this.shape_14.setTransform(176.2,65.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHIgEgMIgBgLIAAg0QAAgPAJgLQAGgHAIgEQAHgEAJAAQAKAAAIAEQAIADAHAKQAHAJAAAPIAAA0QAAAPgHAJQgGAJgJAFQgIAEgJAAQgLAAgKgGgAgIglQgEAEAAAHIAAA0QAAAGADAFQAEAEAFAAQAJAAACgFQACgFAAgGIAAgzQAAgHgDgEQgEgEgGAAQgFAAgDAEg");
	this.shape_15.setTransform(166,65.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHQgDgIgBgGIgBgMIAAgxQAAgRAMgMQAMgMAPAAQARAAALAMQAMAMAAARIAAAkIg0AAIAAATQAAAFAEADQAEAEAEAAQAFAAAEgEQADgDABgGIAbAAIAAADQAAAGgDAHQgDAGgHAJQgJAJgSAAQgKAAgKgGgAgIglQgEADAAAKIAAANIAZAAIAAgNQAAgIgDgEQgDgFgHAAQgEAAgEAEg");
	this.shape_16.setTransform(151.2,65.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOBeQgHgBgFgBQgFgBgFgFQgGgEgCgHQgDgGAAgJIAAiZIAZAAIAACUQAAAHADADQACADAHAAIACAAIAAAag");
	this.shape_17.setTransform(143.8,63);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBBaQgHgEgEgHIAAAOIgbAAIAAi6IAbAAIAABDQAJgOAPAAQAQAAAGAIQAEAJABAFIABAIIAABIIgBALQgBAFgGAIQgGAIgPAAQgHAAgFgEgAgIgJQgEAEAAAFIAAA1QAAAGADAEQACAEAHAAQAGAAADgDQAEgEAAgEIAAg4QAAgGgEgEQgDgEgGAAQgFAAgDAFg");
	this.shape_18.setTransform(135.5,63.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA1QgCgEAAgEIgBgJIAAgPQAAgPAHgGQAIgHAGgDQAGgDAIAAIARAAIAAgLIgBgHQAAgCgDgEQgDgEgFAAQgFAAgEAEQgDADgBAGIgbAAQAAgQAMgMQALgLAQAAQAQAAAMALQAMAMAAAQIAABfIgbAAIAAgOQgEAHgHAEQgFAEgHAAQgSAAgIgPgAgIALQgEADAAAHIAAAHQAAAFADAEQAFAEAEAAQAEAAADgBIAEgFQACgDAAgEIAAgHIAAgNIgKAAQgGAAgFADg");
	this.shape_19.setTransform(125.2,65.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAOBeQgHgBgFgBQgFgBgFgFQgGgEgCgHQgDgGAAgJIAAiZIAaAAIAACUQAAAHACADQACADAHAAIACAAIAAAag");
	this.shape_20.setTransform(117.8,63);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMBeIAAiFIAZAAIAACFgAgMhCIAAgbIAZAAIAAAbg");
	this.shape_21.setTransform(112,63);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkA1QgCgEAAgEIgBgJIAAgPQAAgPAHgGQAIgHAGgDQAGgDAIAAIARAAIAAgLIgBgHQAAgCgDgEQgDgEgFAAQgFAAgDAEQgEADgBAGIgbAAQAAgQAMgMQALgLAQAAQAQAAAMALQAMAMAAAQIAABfIgbAAIAAgOQgEAHgHAEQgFAEgHAAQgSAAgIgPgAgHALQgFADAAAHIAAAHQAAAFAEAEQAEAEAFAAQADAAADgBIAEgFQACgDAAgEIAAgHIAAgNIgKAAQgGAAgEADg");
	this.shape_22.setTransform(104.4,65.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLBDIgjiFIAdAAIARBWIAShWIAdAAIgjCFg");
	this.shape_23.setTransform(94.8,65.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgkA1QgCgEgBgEIAAgJIAAgPQAAgPAIgGQAHgHAGgDQAGgDAIAAIARAAIAAgLIAAgHQAAgCgDgEQgEgEgFAAQgEAAgEAEQgFADAAAGIgbAAQAAgQALgMQAMgLAQAAQAQAAAMALQAMAMAAAQIAABfIgbAAIAAgOQgEAHgGAEQgGAEgIAAQgRAAgIgPgAgHALQgFADAAAHIAAAHQAAAFADAEQAFAEAFAAQADAAADgBIAFgFQABgDAAgEIAAgHIAAgNIgKAAQgGAAgEADg");
	this.shape_24.setTransform(85.1,65.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkA1QgCgEAAgEIgBgJIAAgPQAAgPAIgGQAHgHAGgDQAGgDAIAAIARAAIAAgLIAAgHQAAgCgEgEQgDgEgFAAQgFAAgEAEQgEADAAAGIgbAAQAAgQALgMQAMgLAQAAQAQAAAMALQAMAMAAAQIAABfIgbAAIAAgOQgEAHgGAEQgFAEgJAAQgRAAgIgPgAgIALQgEADAAAHIAAAHQAAAFADAEQAFAEAEAAQAEAAADgBIAFgFQABgDAAgEIAAgHIAAgNIgKAAQgGAAgFADg");
	this.shape_25.setTransform(70,65.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape_26.setTransform(61.4,63.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgkA1QgCgEgBgEIAAgJIAAgPQAAgPAHgGQAIgHAGgDQAGgDAIAAIARAAIAAgLIgBgHQAAgCgCgEQgEgEgFAAQgEAAgEAEQgFADAAAGIgbAAQAAgQAMgMQALgLAQAAQAQAAAMALQAMAMAAAQIAABfIgbAAIAAgOQgEAHgHAEQgEAEgJAAQgRAAgIgPgAgHALQgFADAAAHIAAAHQAAAFAEAEQADAEAGAAQADAAADgBIAFgFQABgDAAgEIAAgHIAAgNIgKAAQgGAAgEADg");
	this.shape_27.setTransform(53.3,65.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgqBeIAAi7IAqAAQARABANANQANAMAAASIAABhQAAATgMANQgNANgTABgAgQBEIANAAQAUAAAAgUIAAhhQAAgIgGgFQgGgFgHAAIgOAAg");
	this.shape_28.setTransform(42.8,63);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdB6QgOgJgEgLIgGgPQgBgGAAgMIAAgOIAlAAIAAALIAAAKQAAAEAEAHQAEAGAJABQAKgBAEgGQAEgHAAgLIAAgnQAAgKgEgEQgFgEgEAAIgJgBIgGAAIAAggIAGAAQAWABAAgWIAAgfIAAgIQgBgCgEgFQgEgGgIAAQgJAAgEAGQgFAGAAAJIAAATIglAAIAAgTQAAgYAQgRQAPgRAYAAQANAAANAIQAMAGAHAKQAGAJABAIQACAIAAAJIAAAeQAAAZgWAOQANAHAEAJQAFAIAAAPIAAAiIAAAGIAAAGIgBAJQgGASgPAMQgPAMgSgBQgQAAgNgJg");
	this.shape_29.setTransform(141.6,24.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag7CBIAAkBIA8AAQALAAALAFQALAEAIAHQAIAIAFAKQAFALAAAKIAAAmQAAAOgEALQgEAKgJAKQgKAJgLAEQgLAEgOAAIgTAAIAABmgAgWgGIATAAQAHgBAFgBQAFgBAFgFQADgEABgEIABgJIAAgEIAAgiQAAgLgHgHQgGgHgLAAIgWAAg");
	this.shape_30.setTransform(121.2,24.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag2CBIAAkBIBtAAIAAAiIhIAAIAABMIA/AAIAAAiIg/AAIAABMIBIAAIAAAlg");
	this.shape_31.setTransform(106.3,24.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSCBIAAjfIgrAAIAAgiIB7AAIAAAiIgsAAIAADfg");
	this.shape_32.setTransform(92,24.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgwBuQgOgXAAgWIAAgJIAlAAIAAAJIABALQAAADAFAIQAFAHAOAAQAHAAAGgDQAHgDADgFQADgGABgFIAAgIIAAgSIgBgMQgBgEgDgEQgEgEgIgEIgZgLQgUgGgMgPQgNgOAAgaIAAgMQAAgaASgUQARgSAagBQAaABATASQASATAAAbIAAAMIglAAIAAgMIgBgJQgBgEgFgHQgGgHgMgBQgKAAgIAJQgHAIAAALIAAAMIABALQAAADADAEQAEAEAHADIAYAKQATAHAOAPQAPAOAAAbIAAAVQAAAMgDAKQgCAKgNARQgOARggAAQggAAgQgVg");
	this.shape_33.setTransform(77.5,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.step3, new cjs.Rectangle(0,0,218.4,108.5), null);


(lib.step2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape.setTransform(156.9,91.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBDIAAhcQAAgPgNAAQgFAAgEAFQgDAEAAAGIAABcIgbAAIAAiEIAbAAIAAANQAJgPAPAAQAQAAAIAOQADAEABAFIAAAJIAABmg");
	this.shape_1.setTransform(148.8,93.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHQgDgIgBgGIgBgMIAAgxQAAgRAMgMQAMgMAPAAQARAAALAMQAMAMAAARIAAAkIg0AAIAAATQAAAFAEADQAEAEAEAAQAFAAADgEQAEgDABgGIAbAAIAAADQAAAGgDAHQgCAGgIAJQgJAJgSAAQgKAAgKgGgAgIglQgEADAAAKIAAANIAZAAIAAgNQAAgIgDgEQgDgFgHAAQgFAAgDAEg");
	this.shape_2.setTransform(138.7,93.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape_3.setTransform(130.1,91.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANBDIAAhcQAAgPgNAAQgFAAgDAFQgEAEAAAGIAABcIgbAAIAAiEIAbAAIAAANQAJgPAPAAQAQAAAIAOQADAEAAAFIABAJIAABmg");
	this.shape_4.setTransform(121.9,93.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHIgEgMIgBgLIAAg0QAAgPAJgLQAGgHAIgEQAHgEAJAAQAKAAAIAEQAIADAHAKQAHAJAAAPIAAA0QAAAPgHAJQgGAJgJAFQgIAEgJAAQgLAAgKgGgAgIglQgEAEAAAHIAAA0QAAAGADAFQAEAEAFAAQAJAAACgFQACgFAAgGIAAgzQAAgHgDgEQgEgEgGAAQgFAAgDAEg");
	this.shape_5.setTransform(111.8,93.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBAQgIgFgFgGQgEgHgCgGQgCgHAAgHIAAgzQAAgRALgMQAMgNAQAAQARAAAMAMQALAMAAASIgbAAQAAgGgDgFQgDgFgGAAQgDAAgDACIgFAEQgCAEAAAGIAAAzQAAAHADAEQADAEAHAAQAGAAADgEQADgEAAgGIAbAAIAAABQAAARgMAMQgMALgQAAQgIAAgKgEg");
	this.shape_6.setTransform(102.2,93.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQBDIgQhPIgNBPIgYAAIggiFIAdAAIAQBSIAPhSIATAAIAPBSIARhSIAcAAIggCFg");
	this.shape_7.setTransform(85.2,93.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHQgDgIgBgGIgBgMIAAgxQAAgRAMgMQAMgMAPAAQASAAAKAMQAMAMAAARIAAAkIg0AAIAAATQAAAFAEADQAEAEAEAAQAFAAADgEQAFgDAAgGIAbAAIAAADQAAAGgDAHQgCAGgJAJQgIAJgSAAQgLAAgJgGgAgIglQgEADAAAKIAAANIAZAAIAAgNQAAgIgDgEQgDgFgHAAQgFAAgDAEg");
	this.shape_8.setTransform(73.2,93.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANBDIAAhcQAAgPgNAAQgFAAgEAFQgDAEAAAGIAABcIgbAAIAAiEIAbAAIAAANQAJgPAPAAQAQAAAIAOQACAEACAFIAAAJIAABmg");
	this.shape_9.setTransform(63,93.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANBeIAAhdQAAgGgDgEQgDgEgHAAQgFAAgDAEQgEAFgBAFIAABdIgaAAIAAi7IAaAAIAABEQAKgOAPAAQAIAAAHADQAGAEADAFQADAGAAADIABAJIAABng");
	this.shape_10.setTransform(170.5,63);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape_11.setTransform(161.7,63.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBeIAAiFIAZAAIAACFgAgMhCIAAgbIAZAAIAAAbg");
	this.shape_12.setTransform(156.2,63);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPBDIgPhPIgNBPIgYAAIggiFIAdAAIAQBSIAPhSIATAAIAPBSIARhSIAcAAIgfCFg");
	this.shape_13.setTransform(146.6,65.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AANBEIAAhdQAAgPgNAAQgFAAgDAEQgEAFAAAGIAABdIgbAAIAAiFIAbAAIAAANQAJgOAPAAQAQAAAIANQACADABAFIABAKIAABng");
	this.shape_14.setTransform(129.4,65.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHIgEgMIgBgLIAAg0QAAgPAJgLQAGgHAIgEQAHgEAJAAQAKAAAIAEQAIADAHAKQAHAJAAAPIAAA0QAAAPgHAJQgGAJgJAFQgIAEgJAAQgLAAgKgGgAgIglQgEAEAAAHIAAA0QAAAGADAFQAEAEAFAAQAJAAACgFQACgFAAgGIAAgzQAAgHgDgEQgEgEgGAAQgFAAgDAEg");
	this.shape_15.setTransform(119.2,65.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMBeIAAiFIAZAAIAACFgAgMhCIAAgbIAZAAIAAAbg");
	this.shape_16.setTransform(111.7,63);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape_17.setTransform(105.6,63.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRBAQgJgFgFgGQgEgHgCgGQgCgHAAgHIAAgzQAAgRAMgMQALgNAQAAQARAAALAMQAMAMAAASIgbAAQABgGgEgFQgEgFgFAAQgDAAgDACIgFAEQgCAEAAAGIAAAzQAAAHADAEQADAEAHAAQAFAAAEgEQAEgEgBgGIAbAAIAAABQAAARgMAMQgMALgQAAQgJAAgIgEg");
	this.shape_18.setTransform(98,65.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA1QgCgEgBgEIAAgJIAAgPQAAgPAHgGQAIgHAGgDQAGgDAIAAIARAAIAAgLIgBgHQAAgCgCgEQgEgEgFAAQgEAAgEAEQgFADAAAGIgbAAQAAgQALgMQAMgLAQAAQAQAAAMALQAMAMAAAQIAABfIgbAAIAAgOQgEAHgGAEQgGAEgIAAQgRAAgIgPgAgHALQgFADAAAHIAAAHQAAAFAEAEQADAEAGAAQADAAADgBIAFgFQABgDAAgEIAAgHIAAgNIgKAAQgGAAgEADg");
	this.shape_19.setTransform(87.9,65.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeBEIAAiFIAbAAIAAAPQAGgJAKgEQAKgDAIAAIAAAbIgEgBIgEAAQgNAAgHAJQgGAJAAAMIAABOg");
	this.shape_20.setTransform(79.3,65.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgDgHQgEgIgBgGIgBgMIAAgxQAAgRAMgMQAMgMAPAAQASAAALAMQALAMAAARIAAAkIg0AAIAAATQAAAFAEADQAEAEAEAAQAFAAADgEQAFgDAAgGIAbAAIAAADQAAAGgCAHQgEAGgIAJQgIAJgSAAQgLAAgJgGgAgIglQgEADAAAKIAAANIAZAAIAAgNQAAgIgDgEQgDgFgHAAQgFAAgDAEg");
	this.shape_21.setTransform(70.1,65.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape_22.setTransform(61.5,63.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AANBEIAAhdQAAgPgNAAQgFAAgEAEQgDAFAAAGIAABdIgbAAIAAiFIAbAAIAAANQAJgOAPAAQAQAAAIANQADADABAFIAAAKIAABng");
	this.shape_23.setTransform(53.4,65.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMBeIAAi7IAZAAIAAC7g");
	this.shape_24.setTransform(45.4,63);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag2CCIAAgiIBEiEQAEgJAAgKIAAgTQAAgIgFgFQgFgGgIAAQgGAAgGAFQgFAFAAAHIAAAXIglAAIAAgTQAAgPALgVQALgVAiAAQAWAAAPAQQAQARAAAWIAAAXQAAAIgCAIIgGAQIg5BwIBBAAIAAAlg");
	this.shape_25.setTransform(141.5,24.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag7CBIAAkBIA8AAQALAAALAFQALAEAIAHQAIAIAFAKQAFALAAAKIAAAmQAAAOgEALQgEAKgJAKQgKAJgLAEQgLAEgOAAIgTAAIAABmgAgWgGIATAAQAHgBAFgBQAFgBAFgFQADgEABgEIABgJIAAgEIAAgiQAAgLgHgHQgGgHgLAAIgWAAg");
	this.shape_26.setTransform(121.2,24.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag2CBIAAkBIBtAAIAAAiIhIAAIAABMIA/AAIAAAiIg/AAIAABMIBIAAIAAAlg");
	this.shape_27.setTransform(106.3,24.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSCBIAAjfIgrAAIAAgiIB7AAIAAAiIgsAAIAADfg");
	this.shape_28.setTransform(92,24.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgwBuQgOgXAAgWIAAgJIAlAAIAAAJIABALQAAADAFAIQAFAHAOAAQAHAAAGgDQAHgDADgFQADgGABgFIAAgIIAAgSIgBgMQgBgEgDgEQgEgEgIgEIgZgLQgUgGgMgPQgNgOAAgaIAAgMQAAgaASgUQARgSAagBQAaABATASQASATAAAbIAAAMIglAAIAAgMIgBgJQgBgEgFgHQgGgHgMgBQgKAAgIAJQgHAIAAALIAAAMIABALQAAADADAEQAEAEAHADIAYAKQATAHAOAPQAPAOAAAbIAAAVQAAAMgDAKQgCAKgNARQgOARggAAQggAAgQgVg");
	this.shape_29.setTransform(77.5,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.step2, new cjs.Rectangle(0,0,218.4,108.5), null);


(lib.step1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape.setTransform(175.8,91.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBDIAAhcQAAgPgNAAQgFAAgDAFQgEAEAAAGIAABcIgbAAIAAiEIAbAAIAAANQAJgPAPAAQAQAAAIAOQACAEABAFIABAJIAABmg");
	this.shape_1.setTransform(167.6,93.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgDgHQgEgIgBgGIgBgMIAAgxQAAgRAMgMQALgMARAAQARAAALAMQALAMAAARIAAAkIg0AAIAAATQAAAFAEADQAEAEAEAAQAFAAADgEQAFgDAAgGIAbAAIAAADQAAAGgCAHQgEAGgIAJQgIAJgSAAQgLAAgJgGgAgIglQgEADAAAKIAAANIAZAAIAAgNQAAgIgDgEQgDgFgHAAQgEAAgEAEg");
	this.shape_2.setTransform(157.5,93.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape_3.setTransform(148.9,91.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANBDIAAhcQAAgPgNAAQgFAAgEAFQgDAEAAAGIAABcIgbAAIAAiEIAbAAIAAANQAJgPAPAAQAQAAAIAOQADAEABAFIAAAJIAABmg");
	this.shape_4.setTransform(140.8,93.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHIgEgMIgBgLIAAg0QAAgPAJgLQAGgHAIgEQAHgEAJAAQAKAAAIAEQAIADAHAKQAHAJAAAPIAAA0QAAAPgHAJQgGAJgJAFQgIAEgJAAQgLAAgKgGgAgIglQgEAEAAAHIAAA0QAAAGADAFQAEAEAFAAQAJAAACgFQACgFAAgGIAAgzQAAgHgDgEQgEgEgGAAQgFAAgDAEg");
	this.shape_5.setTransform(130.6,93.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBAQgJgFgFgGQgEgHgCgGQgCgHAAgHIAAgzQAAgRAMgMQALgNAQAAQARAAALAMQAMAMAAASIgbAAQAAgGgDgFQgEgFgGAAQgCAAgDACIgFAEQgCAEAAAGIAAAzQAAAHADAEQAEAEAFAAQAGAAAEgEQADgEAAgGIAbAAIAAABQAAARgMAMQgMALgQAAQgIAAgJgEg");
	this.shape_6.setTransform(121,93.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHQgDgIgBgGIgBgMIAAgxQAAgRAMgMQAMgMAPAAQARAAALAMQAMAMAAARIAAAkIg0AAIAAATQAAAFAEADQAEAEAEAAQAFAAAEgEQADgDABgGIAbAAIAAADQAAAGgDAHQgDAGgHAJQgJAJgSAAQgKAAgKgGgAgIglQgEADAAAKIAAANIAZAAIAAgNQAAgIgDgEQgDgFgHAAQgEAAgEAEg");
	this.shape_7.setTransform(106.2,93.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAoBDIAAhdQAAgGgDgEQgEgFgGAAQgGABgEAEQgEAEAAAGIAABdIgaAAIAAhdQAAgGgDgEQgEgFgGAAQgGABgDAEQgEAEAAAGIAABdIgbAAIAAiEIAbAAIAAAMQAJgOAQAAQAIAAAGAEQAFADAEAHQAFgHAHgDQAGgEAIAAQAOABAJAJQAJAKAAANIAABlg");
	this.shape_8.setTransform(93.4,93.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkA1QgCgEAAgEIgBgJIAAgPQAAgPAIgGQAHgHAGgDQAGgDAIAAIARAAIAAgLIAAgHQAAgCgEgEQgDgEgFAAQgFAAgEAEQgEADAAAGIgbAAQAAgQALgMQAMgLAQAAQAQAAAMALQAMAMAAAQIAABfIgbAAIAAgOQgEAHgGAEQgFAEgJAAQgRAAgIgPgAgIALQgEADAAAHIAAAHQAAAFADAEQAFAEAEAAQAEAAADgBIAFgFQABgDAAgEIAAgHIAAgNIgKAAQgGAAgFADg");
	this.shape_9.setTransform(80.4,93.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBTQgMgMAAgRIAbAAQAAAGADADQAEAFAFAAQAIgBAEgHIABgJIAAgZQgEAHgHAFQgFADgIAAQgIAAgHgDQgHgFgCgGQgDgFgBgEIAAgKIAAhJIABgJIAHgMQAGgIAOAAQAIAAAFADQAGAFAFAGIAAgNIAbAAIAACQQAAAIgBAGQgBAGgEAGQgGAIgIAFQgJAFgKAAQgQAAgMgMgAgKhAIgCAHIAAAGIAAAyIAAAFQAAADADAEQADAEAGAAQAJAAACgGIACgHIAAgDIAAgwIAAgHIgCgGQgFgGgGAAQgHAAgDAEg");
	this.shape_10.setTransform(70.2,96.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAOIAAgaIBPAAIAAAag");
	this.shape_11.setTransform(59.8,92.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANBDIAAhcQAAgPgNAAQgFAAgEAFQgDAEAAAGIAABcIgbAAIAAiEIAbAAIAAANQAJgPAPAAQAQAAAIAOQACAEACAFIAAAJIAABmg");
	this.shape_12.setTransform(49.2,93.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMBdIAAiFIAZAAIAACFgAgMhCIAAgaIAZAAIAAAag");
	this.shape_13.setTransform(41.5,90.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPBDIgOhPIgPBPIgXAAIggiFIAcAAIARBSIAQhSIASAAIAQBSIAQhSIAcAAIggCFg");
	this.shape_14.setTransform(183.8,65.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgDgHQgEgIgBgGIgBgMIAAgxQAAgRAMgMQAMgMAQAAQAQAAALAMQAMAMAAARIAAAkIg0AAIAAATQAAAFAEADQAEAEAEAAQAFAAAEgEQAEgDAAgGIAbAAIAAADQAAAGgCAHQgEAGgHAJQgJAJgSAAQgLAAgJgGgAgIglQgEADAAAKIAAANIAZAAIAAgNQAAgIgDgEQgDgFgHAAQgEAAgEAEg");
	this.shape_15.setTransform(171.8,65.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANBEIAAhdQAAgPgNAAQgFAAgEAEQgDAFAAAGIAABdIgbAAIAAiFIAbAAIAAANQAJgOAPAAQAQAAAIANQACADABAFIABAKIAABng");
	this.shape_16.setTransform(161.6,65.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQBeIAAhwIgNAAIAAgVIANAAIAAgTQAAgPAIgIQAIgHAGgCQAHgCAIgBIAJAAIAAAaIgKAAQgKgBAAAKIAAATIAUAAIAAAVIgUAAIAABwg");
	this.shape_17.setTransform(148.3,63);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHIgEgMIgBgLIAAg0QAAgPAJgLQAGgHAIgEQAHgEAJAAQAKAAAIAEQAIADAHAKQAHAJAAAPIAAA0QAAAPgHAJQgGAJgJAFQgIAEgJAAQgLAAgKgGgAgIglQgEAEAAAHIAAA0QAAAGADAFQAEAEAFAAQAJAAACgFQACgFAAgGIAAgzQAAgHgDgEQgEgEgGAAQgFAAgDAEg");
	this.shape_18.setTransform(139.9,65.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANBEIAAhdQAAgPgNAAQgFAAgEAEQgDAFAAAGIAABdIgbAAIAAiFIAbAAIAAANQAJgOAPAAQAQAAAIANQACADACAFIAAAKIAABng");
	this.shape_19.setTransform(124.8,65.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHIgEgMIgBgLIAAg0QAAgPAJgLQAGgHAIgEQAHgEAJAAQAKAAAIAEQAIADAHAKQAHAJAAAPIAAA0QAAAPgHAJQgGAJgJAFQgIAEgJAAQgLAAgKgGgAgIglQgEAEAAAHIAAA0QAAAGADAFQAEAEAFAAQAJAAACgFQACgFAAgGIAAgzQAAgHgDgEQgEgEgGAAQgFAAgDAEg");
	this.shape_20.setTransform(114.7,65.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMBeIAAiFIAZAAIAACFgAgMhCIAAgbIAZAAIAAAbg");
	this.shape_21.setTransform(107.2,63);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape_22.setTransform(101,63.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSBAQgIgFgEgGQgFgHgCgGQgCgHAAgHIAAgzQAAgRALgMQAMgNAQAAQARAAALAMQAMAMAAASIgaAAQgBgGgDgFQgDgFgHAAQgDAAgCACIgFAEQgCAEAAAGIAAAzQAAAHADAEQAEAEAFAAQAHAAADgEQADgEABgGIAaAAIAAABQAAARgMAMQgMALgQAAQgIAAgKgEg");
	this.shape_23.setTransform(93.4,65.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZA/QgHgFgEgFIgDgJIAAgLIAAhjIAbAAIAABZIAAAGQAAAEADADQADAEAHABQADAAADgCIAFgFIABgGIAAgFIAAhZIAbAAIAACEIgbAAIAAgNQgFAHgFADQgFAEgIABQgIAAgHgFg");
	this.shape_24.setTransform(83.3,65.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghBVQgFgKgBgFIAAgLIAAhHQAAgMAIgIQAIgIAMAAQAIAAAGAEQAGADAEAHIAAhDIAbAAIAAC6IgbAAIAAgOQgEAHgGAEQgGAEgIAAQgRAAgFgJgAgGgMQgEACgBADIgBAGIgBAEIAAAvIABAGQAAACACAFQADAEAHAAQAIAAADgFQACgFAAgFIAAgEIAAgwIAAgEQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQgEgFgHAAQgDAAgDACg");
	this.shape_25.setTransform(72.9,63.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgEgHIgEgMIgBgLIAAg0QAAgPAJgLQAGgHAIgEQAHgEAJAAQAKAAAIAEQAIADAHAKQAHAJAAAPIAAA0QAAAPgHAJQgGAJgJAFQgIAEgJAAQgLAAgKgGgAgIglQgEAEAAAHIAAA0QAAAGADAFQAEAEAFAAQAJAAACgFQACgFAAgGIAAgzQAAgHgDgEQgEgEgGAAQgFAAgDAEg");
	this.shape_26.setTransform(62.8,65.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeBEIAAiFIAbAAIAAAPQAGgJAKgEQAKgDAIAAIAAAbIgEgBIgEAAQgNAAgHAJQgGAJAAAMIAABOg");
	this.shape_27.setTransform(54.3,65.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAUBXQgIAAgGgCQgGgBgEgFQgGgFgCgGQgCgFAAgJIAAhOIgNAAIAAgWIANAAIAAgoIAaAAIAAAoIAQAAIAAAWIgQAAIAABKQAAAGABADQACACAHAAIAGAAIAAAag");
	this.shape_28.setTransform(46.4,63.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AANBEIAAhdQAAgPgNAAQgFAAgDAEQgEAFAAAGIAABdIgbAAIAAiFIAbAAIAAANQAJgOAPAAQAQAAAIANQADADAAAFIABAKIAABng");
	this.shape_29.setTransform(38.2,65.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMBeIAAi7IAZAAIAAC7g");
	this.shape_30.setTransform(30.3,63);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAACBIAAjaIgkAbIAAgnIAkgbIAlAAIAAEBg");
	this.shape_31.setTransform(140.5,24.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag7CBIAAkBIA8AAQALAAALAFQALAEAIAHQAIAIAFAKQAFALAAAKIAAAmQAAAOgEALQgEAKgJAKQgKAJgLAEQgLAEgOAAIgTAAIAABmgAgWgGIATAAQAHgBAFgBQAFgBAFgFQADgEABgEIABgJIAAgEIAAgiQAAgLgHgHQgGgHgLAAIgWAAg");
	this.shape_32.setTransform(121.2,24.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag2CBIAAkBIBtAAIAAAiIhIAAIAABMIA/AAIAAAiIg/AAIAABMIBIAAIAAAlg");
	this.shape_33.setTransform(106.3,24.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSCBIAAjfIgrAAIAAgiIB7AAIAAAiIgsAAIAADfg");
	this.shape_34.setTransform(92,24.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgwBuQgOgXAAgWIAAgJIAlAAIAAAJIABALQAAADAFAIQAFAHAOAAQAHAAAGgDQAHgDADgFQADgGABgFIAAgIIAAgSIgBgMQgBgEgDgEQgEgEgIgEIgZgLQgUgGgMgPQgNgOAAgaIAAgMQAAgaASgUQARgSAagBQAaABATASQASATAAAbIAAAMIglAAIAAgMIgBgJQgBgEgFgHQgGgHgMgBQgKAAgIAJQgHAIAAALIAAAMIABALQAAADADAEQAEAEAHADIAYAKQATAHAOAPQAPAOAAAbIAAAVQAAAMgDAKQgCAKgNARQgOARggAAQggAAgQgVg");
	this.shape_35.setTransform(77.5,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.step1, new cjs.Rectangle(0,0,218.4,108.5), null);


(lib.standingai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D98764").s().p("AgVAoQgQgMACgcQAAgRAIgPQAHgOAGABQADAAADALQAEANAIAHQAFAEAJADQAIADADAEQALAOgGANQgFAOgSAEIgLABQgLAAgKgGg");
	this.shape.setTransform(32.7,38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAMQgDgFAAgHQAAgFADgFQACgFACAAQADAAADAFQACAFAAAFQAAAGgCAGQgDAEgDAAQgCAAgCgEg");
	this.shape_1.setTransform(26.3,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAMQgDgGAAgGQAAgFADgFQACgFACAAQADAAACAFQADAFAAAFQAAAHgDAFQgCAEgDAAQgCAAgCgEg");
	this.shape_2.setTransform(35.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333337").s().p("AgBAnQgIAAgGgGQgGgGAAgIIAAglQAAgIAGgGQAGgGAIAAIADAAQAJAAAFAGQAGAGAAAIIAAAlQAAAIgGAGQgFAGgJAAg");
	this.shape_3.setTransform(34.5,29.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333337").s().p("AgBAnQgIAAgGgGQgGgGAAgIIAAglQAAgIAGgGQAGgGAIAAIADAAQAIAAAGAGQAGAGAAAIIAAAlQAAAIgGAGQgGAGgIAAg");
	this.shape_4.setTransform(25.7,29.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D38666").p("AAAgKQAAAKAEAGQAEADAFgDQAFgDAAgFQABgIgFgJQgEgIgGgCQgJgEgHAPQgIAOAFANQAEALAKAGQAJAHALgD");
	this.shape_5.setTransform(9,28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#875724").s().p("AiOCwIgPgJQgagNgNgFIAAiSQAAhPA6g3QA6g1BRAAIACAAQBLAAA3AxQA4AvAIBKIgLgCIgKgDQgigFgpgeQgDgGgHgDQgJBHgpAlQgRAPgVADQgYAGgbgGQgEgSgMgMQgNgOgQgCQgagDgNAVQgLARgBAbQgCAqAUAdIAFADQAAAAAAABQAAAAAAAAQABAAAAABQABAAAAAAIAAAeQgMgDgLgGg");
	this.shape_6.setTransform(19.7,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8B48D").s().p("AgpD9Qg+AAgsgsQgrgsAAg9IAAizQAAhJAzg0QA0g0BJAAIAdAAQBJAAA0A0QAzA0AABJIAACzQAAA9grAsQgsAsg9AAg");
	this.shape_7.setTransform(19.4,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#077EB4").s().p("AgiGBIAArBQAAgaATgTQASgTAaAAIAGAAIAAMBg");
	this.shape_8.setTransform(9,100.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99D78").s().p("AgfAfQgMgMAAgTQAAgRAMgNQAOgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgOgNg");
	this.shape_9.setTransform(9.5,141.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A6C43C").s().p("AgyHHIAAuNIBkAAIAAONg");
	this.shape_10.setTransform(10.6,162.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A6C43C").s().p("AgbBUQhAAAgtgtQgtgtAAhAIAAgNIFrAAIAAANQABBAguAtQgsAthBAAg");
	this.shape_11.setTransform(19.1,117.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#10A5DD").s().p("Ai1EAIAAlXQAAhFAxgxQAxgyBGABIAbAAQBGgBAxAyQAxAxAABFIAAFXg");
	this.shape_12.setTransform(19.1,84.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D98764").s().p("AgnA5IAAhxIBPAAIAABxg");
	this.shape_13.setTransform(19.4,54);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7EB244").s().p("AgxHHIAAuNIBjAAIAAONg");
	this.shape_14.setTransform(27.8,162.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#646469").s().p("AgKAyIgLgSQgEgHgHABQgIABgDAHIgFAQIhCAAIAHhjIA3AAQAYAAAUAJIBcAqQAJAEAGAFQAIAHAEAGQAHAIgFAJQgFAJgKAAg");
	this.shape_15.setTransform(16.5,212.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333337").s().p("AgKAyIgLgSQgEgHgHABQgIABgCAHIgGAQIhCAAIAHhjIA3AAQAYAAAUAJIBcAqQAJAEAGAFQAIAHAEAGQAHAIgFAJQgEAJgLAAg");
	this.shape_16.setTransform(33.8,212.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.3,217.4);


(lib.spotlight_signai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfDiIAAm/IBAAAIAAAgQAKgQARgKQAPgKATAAQAcAAATAVQATAVAAAdIAAC3QAAAPgDAKQgCAKgOATQgOATggAAQgqAAgUgkIAACggAgWiXQgJALAAAPIAAB/QAAAQAIAKQAJAKARAAQASAAAGgLQAEgMAAgNIAAh/QAAgPgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape.setTransform(809.2,81);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfDgIAAlBIA/AAIAAFBgAgfigIAAg/IA/AAIAAA/g");
	this.shape_1.setTransform(790.7,68.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgDgIAAjeQAAgQgIgJQgHgKgQAAQgNAAgJALQgJAKAAANIAADfIhBAAIAAm/IBBAAIAAChQAWgjAnAAQASAAAPAKQAQAJAGAMQAHANACAIQABAJAAAOIAAD2g");
	this.shape_2.setTransform(772.1,68.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtCYQgYgNgNgWQgNgWAAgbIA8AAQAAAOAKALQALAKAOAAQAOAAALgJQALgJAAgPQgBgSgIgIQgKgJgSgGIgNgFQgUgHgOgIQgNgGgQgSQgPgSAAgjQAAgoAbgcQAcgbAnAAQAmAAAZAcQAZAcABAkIg8AAQAAgOgJgJQgJgJgNAAQgOAAgJAKQgJAKAAAOQAAAPAJAIQAJAIAQAGIAUAHQATAGAKAGQAKAGALAMQALAMAGAQQAHAQAAASQAAAngcAdQgbAdgoAAQgWAAgYgMg");
	this.shape_3.setTransform(748.6,74.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfCiIAAjgQAAgkgfAAQgNAAgJAMQgJAKAAAOIAADgIhAAAIAAk/IBAAAIAAAfQAWgjAlAAQAnAAAUAhQAFAIACALQACAMAAAMIAAD3g");
	this.shape_4.setTransform(725,74.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxCVQgYgOgJgRQgKgTgBgLQgCgMAAgOIAAh/QAAgkAVgZQAOgRATgKQATgKAWAAQAYAAATAJQAUAJAQAXQARAWAAAjIAAB/QAAAkgQAWQgQAVgVAMQgUALgUAAQgcAAgYgPgAgWhbQgJALAAAPIAAB+QAAAQAJALQAIAMAPAAQAUAAAGgNQAEgMAAgPIAAh9QAAgPgIgKQgJgLgNAAQgOABgJAJg");
	this.shape_5.setTransform(700.8,74.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggDgIAAlBIBAAAIAAFBgAggigIAAg/IBAAAIAAA/g");
	this.shape_6.setTransform(682.8,68.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwDQQgTAAgOgDQgOgEgMgLQgOgMgFgOQgFgNAAgVIAAi+IggAAIAAgzIAgAAIAAhgIA/AAIAABgIAoAAIAAAzIgoAAIAACzQAAAQAEAGQAFAGAQAAIAPAAIAAA9g");
	this.shape_7.setTransform(668,70);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhYB+QgEgIgCgJQgBgKAAgMIAAglQAAgjASgRQASgRAOgGQAPgHAUAAIAqAAIAAgbIgBgQQgBgGgIgJQgHgKgNAAQgMABgJAIQgJAJgCAOIhBAAQAAgnAcgcQAcgcAnAAQAmAAAdAbQAdAdAAAnIAADkIhAAAIAAggQgLARgPAJQgOAKgTAAQgqAAgTgmgAgUAaQgKAHAAARIAAAQQAAAMAJALQAJALANAAQAJAAAGgFQAHgDAEgIQAEgGAAgMIABgQIAAgeIgZAAQgQAAgLAGg");
	this.shape_8.setTransform(648.5,74.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiDgQgPAAgOgEQgMgCgOgLQgNgLgHgQQgGgQAAgTIAAlwIBAAAIAAFjQAAAQAFAIQAFAHARAAIAEAAIAAA9g");
	this.shape_9.setTransform(630.7,68.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyCVQgXgOgJgSQgJgSgCgPQgCgOAAgOIAAh5QAAgoAcgcQAdgeAnAAQApAAAbAdQAbAcAAApIAABYIh+AAIAAAvQAAAKAJAKQAKAIAKABQANAAAJgJQAJgJACgOIBAAAIAAAIQAAAPgGAOQgHAPgUAWQgUAXgrAAQgbAAgXgPgAgVhbQgJAJAAAWIAAAfIA+AAIAAgfQAAgSgIgKQgHgMgRAAQgMAAgJAJg");
	this.shape_10.setTransform(611.2,74.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAxDgIg8jBIgoAAIAADBIhBAAIAAm/IBxAAQAsAAAdAeQAfAgAAAsIAAApQAAA/g0AgIBDDNgAgzgXIAtAAQASAAAOgPQAGgIACgJQADgJAAgMIAAgpQAAgVgMgMQgLgNgUgBIgtAAg");
	this.shape_11.setTransform(586.7,68.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhJCiIAAk/IBBAAIAAAjQAQgVAYgJQAZgJARAAIAABCIgKgCIgIgBQggABgQAVQgQAVAAAfIAAC6g");
	this.shape_12.setTransform(551.2,74.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyCVQgXgOgJgSQgJgSgCgPQgCgOAAgOIAAh5QAAgoAcgcQAdgeAnAAQApAAAbAdQAbAcAAApIAABYIh+AAIAAAvQAAAKAJAKQAKAIAKABQANAAAJgJQAJgJACgOIBAAAIAAAIQAAAPgGAOQgHAPgUAWQgUAXgrAAQgbAAgXgPgAgVhbQgJAJAAAWIAAAfIA+AAIAAgfQAAgSgIgKQgHgMgRAAQgMAAgJAJg");
	this.shape_13.setTransform(529.2,74.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhWDgIAAg8IAOAAQAMAAAKgHQALgHADgMIANg3IhYkyIBEAAIAsDHIArjHIBEAAIhdF1QgJAkgVATQgXATglAAg");
	this.shape_14.setTransform(506.2,81.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhYB+QgEgIgCgJQgBgKAAgMIAAglQAAgjASgRQASgRAOgGQAPgHAUAAIAqAAIAAgbIgBgQQgBgGgIgJQgHgKgNAAQgMABgJAIQgJAJgCAOIhBAAQAAgnAcgcQAcgcAnAAQAmAAAdAbQAdAdAAAnIAADkIhAAAIAAggQgLARgPAJQgOAKgTAAQgqAAgTgmgAgUAaQgKAHAAARIAAAQQAAAMAJALQAJALANAAQAJAAAGgFQAHgDAEgIQAEgGAAgMIABgQIAAgeIgZAAQgQAAgLAGg");
	this.shape_15.setTransform(482.8,74.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiDgQgPAAgOgEQgMgCgOgLQgNgLgHgQQgGgQAAgTIAAlwIBAAAIAAFjQAAAQAFAIQAFAHARAAIAEAAIAAA9g");
	this.shape_16.setTransform(465,68.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhnDgIAAm/IBoAAQATAAAUAIQATAIAOANQANANAJASQAJASAAARIAABBQAAAZgHATQgHATgQAQQgRARgTAHQgTAHgZAAIghAAIAACxgAgngMIAhAAQANAAAIgCQAJgDAIgIQAGgGACgHQABgHAAgKIAAgIIAAg6QAAgTgLgMQgMgMgSAAIgnAAg");
	this.shape_17.setTransform(445.9,68.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgyCVQgXgOgJgSQgJgSgCgPQgCgOAAgOIAAh5QAAgoAcgcQAdgeAnAAQApAAAbAdQAbAcAAApIAABYIh+AAIAAAvQAAAKAJAKQAKAIAKABQANAAAJgJQAJgJACgOIBAAAIAAAIQAAAPgGAOQgHAPgUAWQgUAXgrAAQgbAAgXgPgAgVhbQgJAJAAAWIAAAfIA+AAIAAgfQAAgSgIgKQgHgMgRAAQgMAAgJAJg");
	this.shape_18.setTransform(408.4,74.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAgDgIAAjeQAAgQgIgJQgHgKgQAAQgNAAgJALQgJAKAAANIAADfIhBAAIAAm/IBBAAIAAChQAWgjAnAAQASAAAPAKQAQAJAGAMQAHANACAIQABAJAAAOIAAD2g");
	this.shape_19.setTransform(384,68.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAwDQQgTAAgOgDQgOgEgMgLQgOgMgFgOQgFgNAAgVIAAi+IggAAIAAgzIAgAAIAAhgIA/AAIAABgIAoAAIAAAzIgoAAIAACzQAAAQAEAGQAFAGAQAAIAPAAIAAA9g");
	this.shape_20.setTransform(362.8,70);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhCDIQgdgbAAgqIBAAAQAAANAJAJQAIAKAOAAQAUAAAKgTQACgGAAgPIAAg8QgJAQgRALQgPAKgSAAQgTAAgRgKQgRgKgGgNQgIgOgBgJIAAgZIAAivQgBgNADgKQAEgJANgUQAOgTAjAAQASAAAOAJQAPAJAMAQIAAgeIBAAAIAAFbQAAASgDAPQgCAOgJAOQgNATgWAMQgVAMgXAAQgoAAgdgcgAgYiaQgFAMgBAFIgBAMIAAB6IABANQABAGAHAJQAGAKARAAQAVAAAFgLQAEgNAAgFIABgJIAAh0IgBgQQgBgHgEgGQgKgRgQABQgSgBgGALg");
	this.shape_21.setTransform(331.4,81.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfCiIAAjgQAAgkgfAAQgNAAgJAMQgJAKAAAOIAADgIhAAAIAAk/IBAAAIAAAfQAWgjAlAAQAnAAAUAhQAFAIACALQACAMAAAMIAAD3g");
	this.shape_22.setTransform(307,74.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfDgIAAlBIBAAAIAAFBgAgfigIAAg/IBAAAIAAA/g");
	this.shape_23.setTransform(288.6,68.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhWCgIAAg1IBmjTIhfAAIAAg3ICmAAIAAAvIhlDTIBlAAIAAA9g");
	this.shape_24.setTransform(272.3,74.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggDgIAAlBIBBAAIAAFBgAggigIAAg/IBBAAIAAA/g");
	this.shape_25.setTransform(256,68.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAwDQQgTAAgOgDQgOgEgMgLQgOgMgFgOQgFgNAAgVIAAi+IggAAIAAgzIAgAAIAAhgIA/AAIAABgIAoAAIAAAzIgoAAIAACzQAAAQAEAGQAFAGAQAAIAPAAIAAA9g");
	this.shape_26.setTransform(241.2,70);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgyCVQgXgOgJgSQgJgSgCgPQgCgOAAgOIAAh5QAAgoAcgcQAdgeAnAAQApAAAbAdQAbAcAAApIAABYIh+AAIAAAvQAAAKAJAKQAKAIAKABQANAAAJgJQAJgJACgOIBAAAIAAAIQAAAPgGAOQgHAPgUAWQgUAXgrAAQgbAAgXgPgAgVhbQgJAJAAAWIAAAfIA+AAIAAgfQAAgSgIgKQgHgMgRAAQgMAAgJAJg");
	this.shape_27.setTransform(222.3,74.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAfCiIAAjgQAAgkgfAAQgNAAgJAMQgJAKAAAOIAADgIhAAAIAAk/IBAAAIAAAfQAWgjAlAAQAnAAAUAhQAFAIACALQACAMAAAMIAAD3g");
	this.shape_28.setTransform(197.9,74.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgxCVQgYgOgJgRQgJgTgCgLQgCgMAAgOIAAh/QAAgkAVgZQAOgRATgKQATgKAWAAQAYAAATAJQAUAJAQAXQARAWAAAjIAAB/QAAAkgQAWQgQAVgVAMQgUALgUAAQgcAAgYgPgAgWhbQgJALABAPIAAB+QAAAQAIALQAIAMAPAAQAUAAAFgNQAGgMgBgPIAAh9QAAgPgIgKQgIgLgOAAQgOABgJAJg");
	this.shape_29.setTransform(173.7,74.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABQDgIAAkOIhAC8IgfAAIhAi8IAAEOIhAAAIAAm/IA8AAIBUDtIBUjtIA7AAIAAG/g");
	this.shape_30.setTransform(143.9,68.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#84B54F").s().p("EhCFAJFIAAg6MCBxAAAIAAhOIh0AAIAAhgIgxAAIAAgxIg6AAIAAhhIhOAAIAAgwIgwAAIAAh0IhNAAIAAhzIBNAAIAAhOIAwAAIAAhEIBOAAIAAg6IA6AAIAAhNIAxAAIAAhXIB0AAIAAgnIA6AAIAAgnMiCrAAAIAAg6MCDlAAAIAACIIg6AAIAAA6IhhAAIAABqIhNAAIAAA6IgxAAIAAAxIg6AAIAABhIhhAAIAACtIBhAAIAAA6IA6AAIAABEIAxAAIAABNIBNAAIAABXIBhAAIAAA6IBhAAIAACIg");
	this.shape_31.setTransform(516,66.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6E56A1").s().p("EhENAJ6IAA0QMCIbAAAIAABXIh+AAIAABhIg6AAIAABNIhXAAIAABEIhhAAIAAB0Ig6AAIAABEIh0AAIAABNIhEAAIAABgIBEAAIAABhIB0AAIAABXIA6AAIAABhIBhAAIAAAwIBXAAIAACIIBOAAIAAA6IBqAAIAAB0g");
	this.shape_32.setTransform(529.6,66.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#84B54F").s().p("EhCFAJFIAAiIIBgAAIAAg6IBhAAIAAhXIBOAAIAAhNIAwAAIAAhEIA6AAIAAg6IBgAAIAAitIhgAAIAAhhIg6AAIAAgxIgwAAIAAg6IhOAAIAAhqIhhAAIAAg6Ig6AAIAAiIMCDmAAAIAAA6MiCsAAAIAAAnIA6AAIAAAnIB1AAIAABXIAwAAIAABNIA6AAIAAA6IBNAAIAABEIAxAAIAABOIBNAAIAABzIhNAAIAAB0IgxAAIAAAwIhNAAIAABhIg6AAIAAAxIgwAAIAABgIh1AAIAABOMCByAAAIAAA6g");
	this.shape_33.setTransform(450.2,66.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6E56A1").s().p("EhENAIjIBqAAIAAg6IBOAAIAAiIIBXAAIAAgwIBhAAIAAhhIA6AAIAAhXIB0AAIAAhhIBEAAIAAhgIhEAAIAAhNIh0AAIAAhEIg6AAIAAh0IhhAAIAAhEIhXAAIAAhNIg6AAIAAhhIh+AAIAAhXMCIbAAAIAAUQMiIbAAdg");
	this.shape_34.setTransform(436.6,66.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,966.2,132.6);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF4CD").s().p("EgA+A5jQm3gOjwgYQl6gnluhhQjMg2jLhIMAMzhq7MAjYgDoMAK+BvAQitBNi5A6QlnBymFAYQh7AIjDAAQjcAAk3gKg");
	this.shape.setTransform(189.3,369.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,378.5,738.7), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE582").s().p("AgGEQQqCgKidgKQj8gOjjg1Qj/g8h5goQjahIADg8QAGhrJ7hEQIzg8KbAEQKaADIwBAQKIBLAGBwQADBLkyBaQicAtjqAvQjJAojiAGIhbAAQjCAAndgHg");
	this.shape.setTransform(187.6,27.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,375.2,55.9), null);


(lib.secondbubbleai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424245").s().p("AgDAmIAAgJIAIAAIAAAJgAgDARIAAg2IAIAAIgCA2g");
	this.shape.setTransform(217.3,79.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424245").s().p("AgOAUQgGgGgBgOQABgLAGgIQAFgHAJAAQAKAAAGAHQAFAHAAAMIAAACIgiAAQAAAJAFAEQADAFAHAAQAEAAADgBQADgBADgEIAFAFQgDAEgFACQgEACgGAAQgLAAgFgHgAgGgRQgDACgCADIgCAFIAAAEIAbAAIgBgEIgBgEQgBgEgDgCQgEgCgEAAQgDAAgDACg");
	this.shape_1.setTransform(212.6,80.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424245").s().p("AgRAbIAAgzIAIAAIAAAGIAGgGQADgBAFAAIAGABQAEAAACADIgGAGQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAIgGgBQgEAAgEADQgDAFAAAFIAAAgg");
	this.shape_2.setTransform(208.1,80.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424245").s().p("AgIAZQgDgBgEgEQgDgDgBgFIgBgMIABgLQABgFADgDIAHgFQAEgCAEAAQAFAAADACIAHAFQADADACAFQABAFAAAGQAAAHgBAFQgCAFgDAEQgDADgEABQgDACgFAAQgEAAgEgCgAgIgQQgDAEgBAEIgBAIIABAKQABAEADADQADADAFAAQAGAAADgDQADgDABgEIABgKIgBgIQgBgEgDgDQgDgEgGAAQgFAAgDADg");
	this.shape_3.setTransform(202.6,80.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424245").s().p("AgNAUQgGgHAAgNQAAgMAGgHQAHgHAJAAQAGAAADACQAEACAEAEIgFAFQgDgDgDgBQgCgCgEAAQgHAAgEAGQgDAFAAAIIAAAIIAEAIQADAEAHAAQAEAAACgBIAGgFIAFAFQgEAFgEABQgDACgGAAQgJAAgHgHg");
	this.shape_4.setTransform(197.2,80.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424245").s().p("AgLAZQgFgCgEgEIAFgFQADADAEACQAEABAEAAQAHAAADgCQAEgCAAgFQAAgHgJgBIgHAAQgIAAgEgDQgEgEAAgGQAAgHAFgEQAGgFAHAAQAMAAAHAGIgFAFQgFgEgJAAQgFAAgDACQgCACAAAFQAAADACACQACACAFAAIAHABQAHABAEACQAEADAAAHQAAAHgFAFQgGAEgKAAQgGAAgFgCg");
	this.shape_5.setTransform(191.9,80.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424245").s().p("AANAmIAAggQAAgGgDgEQgEgDgGAAQgFAAgDADQgEAEAAAGIAAAgIgIAAIAAhLIAIAAIAAAdQAGgGAIAAQAJAAAEAFQAGAFAAAIIAAAig");
	this.shape_6.setTransform(183.7,79.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424245").s().p("AgKAlIgIgFIAFgGQADADADABQACACAFAAQAGAAADgFQAEgEAAgHIAAgIQgDADgDACQgEACgDAAQgFAAgDgCQgDgBgDgDQgDgDgBgGIgBgLIABgNQABgFADgDQACgDAEgBQADgCAFABQADgBAEACQADACADAEIAAgGIAHAAIAAA0QAAAKgFAGQgGAHgJgBQgGAAgEgBgAgJgZQgDAFAAAJQAAAJADAEQACAFAHABQAIAAACgGQADgEAAgJQAAgJgDgGQgCgEgIAAQgGgBgDAGg");
	this.shape_7.setTransform(177.7,82);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424245").s().p("AgDAmIAAgzIAHAAIAAAzgAgDgcIAAgJIAHAAIAAAJg");
	this.shape_8.setTransform(173.6,79.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424245").s().p("AANAmIAAggQAAgGgDgEQgEgDgGAAQgFAAgDADQgEAEAAAGIAAAgIgIAAIAAhLIAIAAIAAAdQAGgGAIAAQAJAAAEAFQAGAFAAAIIAAAig");
	this.shape_9.setTransform(169.3,79.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424245").s().p("AgOAUQgGgGgBgOQABgLAGgIQAFgHAJAAQAKAAAGAHQAFAHAAAMIAAACIgiAAQAAAJAFAEQADAFAHAAQAEAAADgBQADgBADgEIAFAFQgDAEgFACQgEACgGAAQgLAAgFgHgAgGgRQgDACgCADIgCAFIAAAEIAbAAIgBgEIgBgEQgBgEgDgCQgEgCgEAAQgDAAgDACg");
	this.shape_10.setTransform(160.9,80.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424245").s().p("AANAmIAAggQAAgGgDgEQgDgDgHAAQgFAAgDADQgEAEAAAGIAAAgIgHAAIAAhLIAHAAIAAAdQAGgGAIAAQAIAAAGAFQAEAFAAAIIAAAig");
	this.shape_11.setTransform(155.1,79.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424245").s().p("AAHAiQgGAAgCgEQgEgEAAgGIAAgfIgHAAIAAgGIAHAAIAAgQIAHAAIAAAQIALAAIAAAGIgLAAIAAAfQAAAIAHgBIAEAAIAAAHg");
	this.shape_12.setTransform(150.3,80);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424245").s().p("AgNAiQgEgEgCgGIgBgMIABgNQACgFADgDQADgDADgBQAEgCADABQAEgBAEACQADACADAEIAAgeIAIAAIAABLIgIAAIAAgHQgDAEgDACQgEABgEAAQgIAAgEgEgAgKgCQgCAEAAAKQAAAIACAGQADAFAHAAQAIAAACgFQADgGAAgIQAAgKgDgEQgCgGgIABQgHgBgDAGg");
	this.shape_13.setTransform(142.9,79.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424245").s().p("AgOAUQgHgGAAgOQAAgLAHgIQAFgHAJAAQAKAAAGAHQAFAHABAMIAAACIgjAAQAAAJAFAEQADAFAHAAQAEAAADgBQADgBADgEIAGAFQgEAEgFACQgEACgGAAQgLAAgFgHgAgGgRQgDACgCADIgCAFIAAAEIAbAAIgBgEIgBgEQgBgEgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_14.setTransform(137.4,80.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424245").s().p("AANAbIAAggQAAgGgDgEQgEgDgGAAQgFAAgDADQgEAEAAAGIAAAgIgIAAIAAgzIAIAAIAAAFQAGgGAIAAQAJgBAEAGQAGAFgBAJIAAAhg");
	this.shape_15.setTransform(131.6,80.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#424245").s().p("AgRAbIAAgzIAIAAIAAAGIAGgGQADgBAFAAIAGABQADAAAEADIgHAGQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGgBQgEAAgEADQgDAFAAAFIAAAgg");
	this.shape_16.setTransform(126.9,80.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424245").s().p("AgKAaQgDgBgDgEQgEgDAAgHQAAgGAFgEQAFgEAIAAIAPAAIAAgEQAAgGgDgDQgDgDgHAAIgHABQgDACgCADIgFgFQADgEAEgCQAEgCAGAAQAVAAAAASIAAAiIgIAAIAAgFQgDADgEACIgHABIgJgBgAgMALQAAAJAMAAIAFAAQADgBADgCQACgDAAgGIAAgGIgOAAQgLAAAAAJg");
	this.shape_17.setTransform(121.2,80.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#424245").s().p("AgOAUQgHgGAAgOQAAgLAHgIQAFgHAJAAQAKAAAGAHQAFAHABAMIAAACIgjAAQAAAJAFAEQADAFAHAAQAEAAADgBQADgBADgEIAGAFQgEAEgFACQgEACgGAAQgLAAgFgHgAgGgRQgDACgCADIgCAFIAAAEIAbAAIgBgEIAAgEQgCgEgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_18.setTransform(115.8,80.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424245").s().p("AgLAZQgFgCgEgEIAFgFQADADAEACQAEABAEAAQAHAAADgCQAEgCAAgFQAAgHgJgBIgHAAQgIAAgEgDQgEgEAAgGQAAgHAFgEQAGgFAHAAQAMAAAHAGIgFAFQgFgEgJAAQgFAAgDACQgCACAAAFQAAADACACQACACAFAAIAHABQAHABAEACQAEADAAAHQAAAHgFAFQgGAEgKAAQgGAAgFgCg");
	this.shape_19.setTransform(187.4,65.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#424245").s().p("AgKAaQgDgBgDgEQgEgDAAgHQABgGAEgEQAFgEAIAAIAPAAIAAgEQAAgGgDgDQgDgDgHAAIgHABQgDACgCADIgGgFQAEgEAEgCQAEgCAGAAQAVAAAAASIAAAiIgIAAIAAgFQgDADgEACIgHABIgJgBgAgMALQAAAJAMAAIAFAAQADgBADgCQACgDAAgGIAAgGIgOAAQgLAAAAAJg");
	this.shape_20.setTransform(181.8,65.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#424245").s().p("AANAmIAAggQAAgGgDgEQgDgDgHAAQgFAAgDADQgEAEAAAGIAAAgIgHAAIAAhLIAHAAIAAAdQAGgGAIAAQAIAAAGAFQAEAFAAAIIAAAig");
	this.shape_21.setTransform(176.3,64.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2FA9DF").s().p("AgQAbIAAgzIAHAAIAAAFIAGgEQADgCAFAAIAHABQACABAEACIgGAHQgCgDgDAAIgEgCQgFABgDAEQgEAEAAAGIAAAfg");
	this.shape_22.setTransform(168.9,65.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2FA9DF").s().p("AgOAUQgHgGAAgOQAAgLAHgIQAFgHAJAAQAKAAAGAHQAFAHABAMIAAACIgiAAQgBAJAEAEQAFAFAGAAQAEAAADgBQADgBADgEIAGAFQgFAEgEACQgEACgGAAQgLAAgFgHgAgGgRQgEACgBADIgBAFIAAAEIAaAAIgBgEIAAgEQgCgEgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_23.setTransform(163.4,65.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2FA9DF").s().p("AgDAaIgTgzIAJAAIANApIAOgpIAIAAIgTAzg");
	this.shape_24.setTransform(158.2,65.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2FA9DF").s().p("AgDAmIAAgzIAHAAIAAAzgAgDgcIAAgJIAHAAIAAAJg");
	this.shape_25.setTransform(154.4,64.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2FA9DF").s().p("AARAmIgRgiIgRAAIAAAiIgIAAIAAhLIAcAAQAKAAAGAGQAGAGAAAJQAAAIgEAGQgFAEgHACIARAigAgRgCIATAAQAHAAAEgDQAEgEAAgHQAAgGgEgEQgEgEgHAAIgTAAg");
	this.shape_26.setTransform(149.9,64.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2FA9DF").s().p("AAEAmQgGAAgDgEQgDgEAAgGIAAg9IAHAAIAAA9QAAADABACQABACAEAAIAEAAIAAAHg");
	this.shape_27.setTransform(142.2,64.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2FA9DF").s().p("AgKAaQgDgBgDgEQgEgDAAgHQAAgGAFgEQAFgEAIAAIAPAAIAAgEQAAgGgDgDQgDgDgHAAIgHABQgDACgCADIgFgFQADgEAEgCQAEgCAGAAQAVAAAAASIAAAiIgIAAIAAgFQgDADgEACIgHABIgJgBgAgMALQAAAJAMAAIAFAAQADgBADgCQACgDAAgGIAAgGIgOAAQgLAAAAAJg");
	this.shape_28.setTransform(137.4,65.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2FA9DF").s().p("AAHAiQgGAAgCgEQgEgEAAgGIAAgfIgHAAIAAgGIAHAAIAAgQIAHAAIAAAQIALAAIAAAGIgLAAIAAAfQAAAIAHgBIAEAAIAAAHg");
	this.shape_29.setTransform(132.9,65.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2FA9DF").s().p("AgDAmIAAgzIAHAAIAAAzgAgDgcIAAgJIAHAAIAAAJg");
	this.shape_30.setTransform(129.9,64.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2FA9DF").s().p("AgKAlQgDgCgFgEIAFgEQADACADABQACACAEAAQAHAAAEgEQADgFAAgHIAAgIQgDAEgEABQgDACgEAAQgEAAgDgCQgDgBgDgDQgDgDgCgGIgBgLIABgNQACgFADgDQADgDADgBQADgBAEAAQAEAAADABQAEABADAEIAAgFIAIAAIAAA0QAAAKgHAGQgFAGgJAAQgGABgEgCgAgKgZQgCAFAAAJQAAAJACAEQADAFAHABQAIAAADgGQACgEAAgJQAAgJgCgGQgDgEgIgBQgGAAgEAGg");
	this.shape_31.setTransform(125.6,67);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FA9DF").s().p("AgDAmIAAgzIAHAAIAAAzgAgDgcIAAgJIAHAAIAAAJg");
	this.shape_32.setTransform(121.4,64.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2FA9DF").s().p("AgZAmIAAhLIAZAAQAMAAAGAGQAGAGABAHQABAGAAAMIAAADQAAAKgBAGQgCAHgEAFQgHAHgMAAgAgRAfIAQAAQAEAAADgCQAEgBADgDQADgEABgGIABgPIAAgDIgBgOQgBgEgDgDQgDgDgEgBQgDgCgEAAIgQAAg");
	this.shape_33.setTransform(116.7,64.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#424245").s().p("AgDAmIAAgJIAIAAIAAAJgAgCARIgBg2IAIAAIgCA2g");
	this.shape_34.setTransform(211.8,49.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#424245").s().p("AgOAkQgFgCgGgGIAFgFQAFAEAFACQAEACAGAAQAIAAAFgEQAFgDAAgHQAAgGgDgCIgEgDIgHgCIgIgBQgIgCgGgDQgFgFAAgJQAAgKAHgFQAGgGAKAAQAIAAAEACQAFABAFAFIgEAFQgEgDgEgCQgFgBgFAAQgGAAgFADQgEAEAAAHQAAAFACADIAGADIAFABIAIACIAIACQADAAAEAEQAFADAAAKQAAAKgHAGQgHAFgMAAQgIAAgGgCg");
	this.shape_35.setTransform(206.8,49.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#424245").s().p("AAUAmIgng8IAAA8IgIAAIAAhLIAIAAIAnA8IAAg8IAIAAIAABLg");
	this.shape_36.setTransform(199.8,49.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#424245").s().p("AgRAgQgHgGAAgGIgCgUIABgRQABgHAGgHQAIgGAKAAQAMAAAFAGQAHAGABAGQABAGAAANIgBASQAAAHgGAGQgIAHgLAAQgLAAgGgGgAgLgaQgEAFgCAFIgBAQIABARQACAFAEAFQAEAEAHAAQAHAAAFgEQAFgFAAgFIABgRIgBgQQAAgFgEgEQgGgFgHAAQgHAAgEAEg");
	this.shape_37.setTransform(192.5,49.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#424245").s().p("AgDAmIAAhLIAHAAIAABLg");
	this.shape_38.setTransform(187.6,49.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#424245").s().p("AgDAmIAAhEIgWAAIAAgHIAzAAIAAAHIgWAAIAABEg");
	this.shape_39.setTransform(183.2,49.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#424245").s().p("AAXAmIgGgRIggAAIgGARIgJAAIAchLIAGAAIAbBLgAgNAOIAbAAIgOgng");
	this.shape_40.setTransform(177,49.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#424245").s().p("AgWAmIAAhLIAIAAIAABEIAlAAIAAAHg");
	this.shape_41.setTransform(171.2,49.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#424245").s().p("AgSAfQgHgHAAgLIAAgyIAIAAIAAAxQAAAIAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgIIAAgxIAIAAIAAAyQAAALgHAHQgIAHgLAAQgLAAgHgHg");
	this.shape_42.setTransform(164.1,49.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#424245").s().p("AgDAmIAAhEIgWAAIAAgHIAzAAIAAAHIgWAAIAABEg");
	this.shape_43.setTransform(157.6,49.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#424245").s().p("AAXAmIgGgRIggAAIgGARIgJAAIAchLIAGAAIAbBLgAgNAOIAbAAIgOgng");
	this.shape_44.setTransform(151.4,49.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#424245").s().p("AARAmIgRgiIgRAAIAAAiIgIAAIAAhLIAcAAQAKAAAGAGQAGAGAAAJQAAAIgEAGQgFAEgHACIARAigAgRgCIATAAQAHAAAEgDQAEgEAAgHQAAgGgEgEQgEgEgHAAIgTAAg");
	this.shape_45.setTransform(145,49.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#424245").s().p("AgRAgQgGgGgBgGIgBgUIAAgRQABgHAHgHQAGgGALAAQALAAAHAGQAHAGACAKIgIAAQgCgHgFgEQgFgEgHAAQgHAAgEAEQgFAFAAAFIgBAQIABARQABAFADAFQAFAEAHAAQAJAAAEgGQAFgFABgJIAAgGIgTAAIAAgGIAbAAIAAALQAAAHgCAEQgBAFgEAEQgIAIgMAAQgKAAgHgGg");
	this.shape_46.setTransform(137.8,49.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#424245").s().p("AAUAmIgng8IAAA8IgIAAIAAhLIAIAAIAnA8IAAg8IAIAAIAABLg");
	this.shape_47.setTransform(130.5,49.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#424245").s().p("AgRAgQgGgGgCgGIAAgUIAAgRQABgHAHgHQAGgGALAAQALAAAHAGQAGAGABAGQABAGABANIgBASQgBAHgGAGQgHAHgMAAQgLAAgGgGgAgLgaQgEAFgBAFIgBAQIABARQABAFAEAFQAEAEAHAAQAHAAAFgEQAFgFABgFIAAgRIAAgQQgBgFgEgEQgGgFgHAAQgHAAgEAEg");
	this.shape_48.setTransform(123.2,49.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#424245").s().p("AgRAgQgGgGgBgGIgBgUIAAgRQABgHAHgHQAHgGAKAAQAKAAAHAGQAHAGACAKIgIAAQgCgHgEgEQgFgEgHAAQgHAAgEAEQgEAFgBAFIgBAQIABARQABAFAEAFQAEAEAHAAQAHAAAFgEQAFgEABgHIAIAAQgBAKgHAGQgIAGgKAAQgKAAgHgGg");
	this.shape_49.setTransform(116.4,49.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DB8D6B").s().p("AgJASQgHgEAAgOQAAgHAEgHQADgHADABQACAAABAFQACAFADAEIAGAEQAEABABABQAFAFgCAIQgDAGgIACIgFAAQgFAAgEgDg");
	this.shape_50.setTransform(76.7,57.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgDAAQAAgGADAAQAEAAAAAGQAAAHgEAAQgDAAAAgHg");
	this.shape_51.setTransform(73.8,52.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAAQAAgGADAAQAEAAAAAGQAAAHgEAAQgDAAAAgHg");
	this.shape_52.setTransform(77.9,52.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#424245").s().p("AgGAPQgDgDAAgEIAAgPQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAPQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_53.setTransform(77.5,53.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#424245").s().p("AgGAPQgDgDAAgEIAAgPQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAAAPQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_54.setTransform(73.5,53.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#D68C6D").ss(2).p("AAAgEQAAAEACADQACABACgBQACgCAAgCQABgDgDgEQgCgEgDgBQgDgBgDAGQgEAHACAFQACAFAFADQAEADAFgB");
	this.shape_55.setTransform(65.8,53.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8C6037").s().p("AhGBPIgGgFIgOgIIAAhCQAAgkAbgXQAagXAmAAIAAAAQAjAAAZAVQAaAWAEAhQgCAAgDgCIgFgDQgRgCgRgOQgCgDgEgBQgDAggTARQgHAHgLACQgKADgNgEQgCgIgFgFQgHgHgHgBQgLgBgHAKQgFAIgBAMQAAAUAIANIAAABIgCABIAAAOQgGgBgDgDg");
	this.shape_56.setTransform(70.8,48.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FAB792").s().p("AgNB0QgeAAgWgVQgWgWAAgfIAAhFQAAglAagZQAZgaAkAAQAkAAAaAaQAaAZAAAlIAABFQAAAfgWAWQgVAVgfAAg");
	this.shape_57.setTransform(70.6,52.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgnAfQgEgxAUgTQALgKATgCQAegCADARQACAQgWAXQgdAjgJAGQgFAEgFAAQgJAAgCgTg");
	this.shape_58.setTransform(59.2,42);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6B6B70").s().p("AhcApQBPgNAHhEIAtAAQAWAAAPATQARAVAAApg");
	this.shape_59.setTransform(77.3,92);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#929397").s().p("AhtApQAAgpARgVQAPgTAWAAIClAAQgHBEhPANg");
	this.shape_60.setTransform(65.6,92);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#929397").s().p("AhDAXQAAgtAqAAIBdAAQgPApgmAEg");
	this.shape_61.setTransform(67.1,85.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6B6B70").s().p("Ag8AXQAmgEAOgpIAbAAQAqAAAAAtg");
	this.shape_62.setTransform(74.8,85.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6B6B70").s().p("AgpAVQAHAAAIgFQAQgKgCgaIAiAAQAIAAAGAGQAHAHgBAHQABAJgHAGQgGAGgIAAg");
	this.shape_63.setTransform(74.2,76.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#929397").s().p("AgdAVQgIAAgHgGQgGgGAAgJQAAgHAGgHQAHgGAIAAIBQAAQABAagPAKQgIAFgIAAg");
	this.shape_64.setTransform(67.8,76.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2C83B7").s().p("Ag8AdQANgNABgPQAuANAogqIAQAAIgIATQgFAVASARg");
	this.shape_65.setTransform(70.6,81);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2FA9DF").s().p("AgmAOQAAgLgFgKIgEgJIBfAAQgeAhgjAAQgKAAgLgDg");
	this.shape_66.setTransform(69.8,79.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2C83B7").s().p("AhfDPQgcgZgYgiQC6g2ALksIBcAAQALBCgJBUQgUCnhqBgg");
	this.shape_67.setTransform(74.4,53.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2FA9DF").s().p("AiIg4QgCgsADgqIAEgiIENAAQgLEri7A2QhDhfgJiKg");
	this.shape_68.setTransform(65.6,50.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2C83B7").s().p("Ag9C2QgXAAgNgVQgKgRAAgWQADgLAQgWQAfgtA8g4QAtgqANgqQAKgigLgeQAWgHAXgPQAKAvgXA5QgZBAg7AzQg5AzAKAlQAFATARAIQgDAIgHAIQgNAPgUAAIgBgBg");
	this.shape_69.setTransform(92.8,50.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2C83B7").s().p("AgpAjIAAg5IAPABQARgBAJgNQARAOAZgCQgYA7g2AAIgFgBg");
	this.shape_70.setTransform(92.5,37.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2FA9DF").s().p("Ag1AgQAJgLABgVQADgsAjABQAhABATAqQADAFAEAOQgXAPgVAGQgFgOgIgLIgCAJQgCAKgEAKIgGAAQgVAAgPgMg");
	this.shape_71.setTransform(97.8,30.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2FA9DF").s().p("Ag0AOQgDgiAMgaQAUgqAhgBQAjgBACAsQABAOAFAMQgIAYgNAXQgNgQgHgVIgEgTQgNASgEAWQgFAcAMAfQgNAMgQAIQgTgngCglg");
	this.shape_72.setTransform(42.8,35.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2C83B7").s().p("AAQB3IgJgPQARgIAEgTQAKglg5gzQg0gugag4QARgIANgMQAPAkAoAlQA7A5AfArQAQAXADALQABAVgLARQgNAVgXABIgBAAQgUAAgOgPg");
	this.shape_73.setTransform(49.3,55.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2C83B7").s().p("AghAJQANgWAIgaQAJATATADQAKABAIgCIAAA5IgFABQgmAAgYgfg");
	this.shape_74.setTransform(49.4,37.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgmIwQiWgjh4hBQhyAhh7ABQkHAAi6iLQi6iLAAjEQAAjCC6iKQC6iLEHAAQCLAAB+ArQAOhPBSg2QBSg2BtAAQBIAABAAZQA+AZAoArIAmAAQF0AAEHChQB9BLBEBjQBGBnAABvQAABvhGBnQhEBih9BMQkHChl0AAQinAAiagkg");
	this.shape_75.setTransform(125.3,59.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAfAAApQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_76.setTransform(41,124.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgXAAgSgSg");
	this.shape_77.setTransform(21.6,141.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgcAeQgNgNAAgRQAAgQANgNQALgMARAAQARAAANAMQAMAMAAARQAAARgMANQgNAMgRAAQgRAAgLgMg");
	this.shape_78.setTransform(4.2,153.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.4,157.7);


(lib.ridinginplaneai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#077EB4").s().p("AhqFuICFq0QAFgaAWgPQAWgPAZAFIAGABIiRLzg");
	this.shape.setTransform(1.3,13.2,1,1,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D98764").s().p("AgZAkQgNgNAGgdQADgRALgNQAJgMAHACQACABABALQABANAHAJQAEAFAIAFQAHADADAGQAIAPgIANQgIALgTABIgBAAQgSAAgKgLg");
	this.shape_1.setTransform(35.1,-34.1,0.902,0.902,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAQQgEgBAAgFQgCgFACgGQAAgGAEgEQACgEADAAQAEABAAAFQACAFgCAFQAAAHgEAEQgDAEgBAAIgBAAg");
	this.shape_2.setTransform(32.2,-44.9,0.902,0.902,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAQQgDgBgCgFQgBgFABgFQABgHAEgEQACgEADAAQAHACgCAPQgEAOgFAAIgBAAg");
	this.shape_3.setTransform(40,-42.9,0.902,0.902,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333337").s().p("AgFAnIgDgBQgIgCgFgHQgEgGABgJIAHgkQABgIAIgFQAHgEAHABIADABQAIABAFAHQAEAHgBAIIgHAlQgCAIgHAFQgFADgFAAIgEAAg");
	this.shape_4.setTransform(39,-41.8,0.902,0.902,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333337").s().p("AgFAnIgDgBQgIgCgFgGQgFgHACgIIAHglQACgIAHgFQAHgFAHACIADABQAIABAFAHQAFAIgCAIIgHAkQgCAIgHAEQgFAEgFAAIgEAAg");
	this.shape_5.setTransform(31.3,-43.8,0.902,0.902,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D38666").ss(2).p("AABgLQgCALADAFQAEAFAFgDQAFgCACgFQACgHgDgKQgDgJgFgDQgJgFgJAMQgLANADAOQABAMAJAIQAIAIAMgB");
	this.shape_6.setTransform(17,-48,0.902,0.902,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#875724").s().p("AibCbIgOgMQgQgNgSgLIAbiKQAPhNBBgpQBBgpBOAPIABABQBJAOAsA4QAsA4gGBHQgEgBgGgDIgJgFQghgLgggjQgCgGgGgFQgXBEgtAbQgTALgVgBQgYABgYgLQgBgSgJgOQgKgPgQgFQgXgIgRASQgNAOgGAZQgKAqAPAeIADAEIAEADIgGAcQgLgFgKgIg");
	this.shape_7.setTransform(27,-55.6,0.902,0.902,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8B48D").s().p("AgDD+IhTgQQg9gMgigzQgjgzAMg9IAiivQAOhIA8gpQA9gpBHAOIAdAFQBIAOApA9QApA8gOBIIgiCwQgMA8gzAjQgnAagrAAQgPAAgOgDg");
	this.shape_8.setTransform(26.3,-47.4,0.902,0.902,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99D78").s().p("AgIAsQgSgEgKgPQgKgPADgRQAEgSAPgLQAPgKARADQASAEALAPQAKAPgEARQgDASgPALQgMAIgNAAIgIgBg");
	this.shape_9.setTransform(-8.4,50.7,0.902,0.902,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#10A5DD").s().p("AjUDKIBBlQQANhEA6gnQA5gnBEANIAbAGQBFANAnA5QAnA6gNBEIhBFQg");
	this.shape_10.setTransform(11.7,3.9,0.902,0.902,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D98764").s().p("AgxAwIAVhvIBOAQIgVBug");
	this.shape_11.setTransform(20.3,-23.7,0.902,0.902,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-70.7,58,125.5);


(lib.purchasesignai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBQIAAgXIAWAAIAAAXgAgFAoIgIh3IAbAAIgJB3g");
	this.shape.setTransform(169.3,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRA1QgIgFgDgHQgEgGAAgFIgBgKIAAgrQAAgOAKgKQAKgKANAAQAPAAAKAKQAJAKAAAOIAAAfIgsAAIAAARQAAAEADADQAEADADAAQAEAAADgDQADgDABgFIAXAAIAAACQAAAGgCAFQgCAFgHAIQgIAIgPAAQgJAAgIgFgAgHggQgDADAAAIIAAALIAVAAIAAgLQAAgGgCgEQgDgEgGAAQgEAAgDADg");
	this.shape_1.setTransform(162.5,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQA2QgIgFgEgHQgFgIAAgKIAVAAQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgDgBgFQAAgHgDgCQgDgDgGgDIgFgCIgLgFQgFgCgFgGQgGgGAAgNQAAgOAJgKQAKgJAOAAQANAAAJAKQAJAKAAAMIgVAAQAAgFgDgDQgEgDgEAAQgEAAgEADQgCAEAAAFQAAAFACADQAEADAEACIAIADIAKAEQAEACAEAEQADAEACAGQADAFAAAHQAAAOgKAKQgKAKgOAAQgHAAgJgEg");
	this.shape_2.setTransform(154.3,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAtIgCgHIAAgHIAAgNQAAgNAGgFQAHgGAFgDQAFgCAHAAIAOAAIAAgKIAAgFIgDgGQgDgDgEAAQgEAAgDADQgEADAAAFIgXAAQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOIAABRIgXAAIAAgMQgDAGgGAEQgEADgHAAQgPAAgHgNgAgGAJQgEADAAAGIAAAFQAAAFADADQADAEAEAAQADAAADgBIAEgEIABgHIAAgFIAAgLIgIAAQgGAAgDACg");
	this.shape_3.setTransform(145.9,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALBQIAAhPQAAgFgCgEQgDgDgGAAQgEAAgDAEQgDADAAAFIAABPIgXAAIAAifIAXAAIAAA6QAIgNANAAQAGAAAGAEQAFADADAEIADAIIAAAIIAABXg");
	this.shape_4.setTransform(137.3,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPA2QgHgEgEgFQgEgGgCgFIgBgMIAAgsQAAgOAJgLQAKgKAOAAQAOAAAKAKQAKALAAAOIgXAAQAAgFgDgEQgDgEgFAAIgFABIgDAEQgCADAAAFIAAAsQAAAGADAEQACADAFAAQAFAAADgEQADgDAAgFIAXAAIAAABQAAAOgLAKQgJAKgOAAQgIAAgHgEg");
	this.shape_5.setTransform(128.9,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA6IAAhyIAXAAIAAANQAFgHAIgEQAJgDAGABIAAAXIgDgBIgDAAQgLAAgGAHQgFAIAAALIAABCg");
	this.shape_6.setTransform(121.6,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVA2QgHgEgCgFIgDgIIAAgJIAAhVIAXAAIAABMIAAAGQAAADACADQADAEAFAAQADAAADgCIADgEIACgFIAAgFIAAhMIAXAAIAABxIgXAAIAAgLQgEAGgFADQgDAEgIAAQgGAAgGgEg");
	this.shape_7.setTransform(113.6,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghBQIAAieIAXAAIAAAMQADgGAGgEQAFgEAHAAQAJAAAIAIQAGAHAAALIAABBIgBAIQAAADgFAIQgGAGgLAAQgOAAgHgNIAAA5gAgHg1QgDAEAAAFIAAAsQAAAHADADQADADAFABQAGAAADgFIABgJIAAgsQAAgFgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_8.setTransform(104.9,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRA1QgJgFgCgGQgEgHgBgEIAAgJIAAgtQAAgMAHgJQAGgHAGgDQAHgDAHAAQAIAAAIADQAGADAGAIQAGAIAAAMIAAAtQAAANgGAIQgGAHgGAEQgIAEgHAAQgKAAgIgFgAgHggQgDAEAAAFIAAAtQAAAFADAEQACAEAFAAQAHAAACgEQACgEAAgGIAAgsQAAgFgDgEQgDgDgFAAQgEAAgDADg");
	this.shape_9.setTransform(92,22.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARBKQgGAAgFgCQgFgBgEgDQgFgFgCgEQgCgGAAgHIAAhDIgLAAIAAgSIALAAIAAgiIAWAAIAAAiIAOAAIAAASIgOAAIAABAQAAAFACACQABACAGABIAFAAIAAAVg");
	this.shape_10.setTransform(84.6,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeBQIAAgWIAFAAQAEAAAEgCQAEgDABgEIAFgTIgghtIAYAAIAPBHIAPhHIAZAAIghCEQgDANgIAHQgIAHgNAAg");
	this.shape_11.setTransform(73.9,25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAtIgCgHIAAgHIAAgNQAAgNAGgFQAHgGAFgDQAFgCAHAAIAOAAIAAgKIAAgFIgDgGQgDgDgEAAQgEAAgDADQgEADAAAFIgXAAQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOIAABRIgXAAIAAgMQgDAGgGAEQgEADgHAAQgPAAgHgNgAgGAJQgEADAAAGIAAAFQAAAFADADQADAEAEAAQADAAADgBIAEgEIABgHIAAgFIAAgLIgIAAQgGAAgDACg");
	this.shape_12.setTransform(65.6,22.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANA5IgNhDIgMBDIgUAAIgbhxIAYAAIAPBGIANhGIAPAAIANBGIAPhGIAYAAIgbBxg");
	this.shape_13.setTransform(55.4,22.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPA2QgJgFgFgHQgEgIAAgKIAVAAQAAAFAEAEQADAEAFAAQAFAAAEgEQADgDAAgFQAAgHgCgCQgEgDgGgDIgFgCIgLgFQgFgCgFgGQgGgGAAgNQAAgOAJgKQALgJANAAQANAAAJAKQAJAKAAAMIgVAAQAAgFgDgDQgDgDgFAAQgFAAgCADQgDAEgBAFQABAFADADQACADAGACIAHADIALAEQADACAEAEQAEAEABAGQADAFAAAHQAAAOgKAKQgKAKgNAAQgIAAgIgEg");
	this.shape_14.setTransform(41.2,22.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKBQIAAhyIAVAAIAABygAgKg4IAAgXIAVAAIAAAXg");
	this.shape_15.setTransform(35.1,20.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALBQIAAhPQAAgFgCgEQgDgDgGAAQgEAAgDAEQgDADAAAFIAABPIgXAAIAAifIAXAAIAAA6QAIgNANAAQAGAAAGAEQAFADADAEIADAIIAAAIIAABXg");
	this.shape_16.setTransform(28.5,20.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLBQIAAiJIgaAAIAAgWIBLAAIAAAWIgbAAIAACJg");
	this.shape_17.setTransform(19.9,20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FE5D00").s().p("AvXDLIAAmWIb/AAICwDbIiwC7g");
	this.shape_18.setTransform(98.4,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.9,40.7);


(lib.pointingai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D98764").s().p("AgEAoQgRgDgNgcQgHgOABgRQABgQAGgCQADgBAHAJQAJAKALADQAFACAKgBQAIAAAGADQAOAIABANQABAPgPALQgNAJgMAAIgGgBg");
	this.shape.setTransform(41,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAANQgDgEgDgGQgGgNAHgEQADgBADADQAEAEACAGQADAFAAAFQAAAFgDACIgCAAQgCAAgDgCg");
	this.shape_1.setTransform(30.5,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAANQgDgEgDgGQgGgNAHgEQADgBADADQAEAEACAGQADAFAAAFQAAAFgDACIgCAAQgCAAgDgCg");
	this.shape_2.setTransform(38.6,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333337").s().p("AAAAlQgIgDgDgHIgQgiQgDgIADgIQADgIAIgDIADgBQAHgEAHADQAIADADAIIAQAiQADAHgDAIQgDAHgHAEIgDACQgFABgEAAIgGgBg");
	this.shape_3.setTransform(38.6,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333337").s().p("AAAAlQgIgDgDgIIgQghQgDgIADgIQADgIAHgDIADgBQAIgEAHADQAIADADAIIAQAiQADAHgDAIQgDAHgIAEIgDACQgEABgEAAIgGgBg");
	this.shape_4.setTransform(30.6,27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D38666").ss(2).p("AgIgIQAEALAGACQAFACADgFQADgEgCgGQgCgHgIgGQgIgGgGABQgJABgCAQQgBAPAKALQAJAIAKACQANABAIgH");
	this.shape_5.setTransform(15.5,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#875724").s().p("AgxDSIgTgCQgfAAgLgCIg+iKQgihLAfhKQAfhKBOgjIABAAQBHghBJAWQBJAWAnBCQgEACgHAAIgMABQgjAKgzgLQgFgFgJAAQAXBIgXA0QgJAVgTANQgVAQgcAFQgLgPgRgHQgSgHgRAFQgZAIgEAaQgDAUALAaQAQApAgATIAFABQAAAAAAABQAAAAABAAQAAAAABAAQABABABAAIAMAbQgIACgIAAIgJgBg");
	this.shape_6.setTransform(19,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8B48D").s().p("Ag1D3Qg5gWgag4IhJikQgehCAahEQAahFBDgeIAbgMQBCgeBEAaQBEAaAeBDIBKCjQAZA5gWA5QgWA6g4AZIhOAjQgeANgeAAQgaAAgbgKg");
	this.shape_7.setTransform(24.2,27.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#077EB4").s().p("AkyDUQgZgHgOgWIgDgFIKVmHIAkA8IpfFmQgPAJgQAAQgIAAgJgCg");
	this.shape_8.setTransform(47,52.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99D78").s().p("AgKArQgSgFgJgQQgKgPAFgRQAEgSAQgJQAQgKARAFQASAEAJAQQAKAQgFARQgEASgQAJQgLAGgLAAIgLgBg");
	this.shape_9.setTransform(82.6,32.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A6C43C").s().p("AgyHHIAAuNIBlAAIAAONg");
	this.shape_10.setTransform(14.4,163.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A6C43C").s().p("AgbBUQhBAAgsgtQgugtABhAIAAgNIFrAAIAAANQAABAgtAtQgtAthAAAg");
	this.shape_11.setTransform(22.9,118.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#10A5DD").s().p("Ai1D/IAAlWQAAhFAxgxQAxgxBGgBIAbAAQBGABAxAxQAxAxAABFIAAFWg");
	this.shape_12.setTransform(22.9,84.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D98764").s().p("AgnA5IAAhxIBPAAIAABxg");
	this.shape_13.setTransform(23.3,54.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7EB244").s().p("AgxHHIAAuNIBkAAIAAONg");
	this.shape_14.setTransform(31.7,163.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#646469").s().p("AgKAzIgLgTQgDgGgIAAQgIABgCAHIgGARIhCAAIAHhlIA4AAQAVAAAWAKIBcAqIAPAJQAHAGAGAHQAGAIgFAJQgEAKgLAAg");
	this.shape_15.setTransform(20.3,212.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333337").s().p("AgKAzIgLgTQgEgGgIAAQgHABgDAHIgFARIhCAAIAHhlIA3AAQAWAAAVAKIBdAqQAHAEAIAFQAHAGAFAHQAHAIgFAJQgFAKgKAAg");
	this.shape_16.setTransform(37.6,212.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,218);


(lib.paperplaneai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao2A1IjvidIExhlIUaGbg");
	this.shape.setTransform(80.6,44.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApxiRIgni1IDVAiIRcJrg");
	this.shape_1.setTransform(94.7,32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8E92").s().p("Ap5iAITyDjIzZAeg");
	this.shape_2.setTransform(97.9,55.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8E92").s().p("ApsASIgZkHIULHrg");
	this.shape_3.setTransform(96.6,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.2,68.4);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGE6IgsgBIgGgzIgygRIgDgwIgsgJIKhooIgBAmIAoAJIABAuIAzARIABA7IA2AIIqhIog");
	this.shape.setTransform(41,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,81.9,73.1), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am+hSIAvgUIgRgpIArgbIgFg0IAqgXIgJgsIMYF0IgkAPIAIAqIgpAUIAGA0Ig1AaIAPAzg");
	this.shape.setTransform(44.7,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,89.4,57.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjMDcIgkgNIgGgvIgogbIgFgsIgjgSIITlPIAAAjIAhASIACApIApAbIACA1IAsAUIoTFPg");
	this.shape_1.setTransform(32.7,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,65.4,52.9), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am+hSIAvgUIgRgpIArgbIgFg0IAqgXIgJgsIMYF0IgkAPIAIAqIgpAUIAGA0Ig1AaIAPAzg");
	this.shape.setTransform(44.7,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,89.4,57.9), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnSglIAsgZIgWgnIAogfIgMg0IAngcIgPgqINbEkIgjATIAPAnIgnAZIANA0IgzAgIAXAyg");
	this.shape_1.setTransform(46.7,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,93.4,51), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkGE6IgsgBIgGgzIgygRIgDgwIgsgJIKhooIgBAmIAoAJIABAuIAzARIABA7IA2AIIqhIog");
	this.shape_1.setTransform(41,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,81.9,73.1), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMDcIgkgNIgGgvIgogbIgFgsIgjgSIITlPIAAAjIAhASIACApIApAbIACA1IAsAUIoTFPg");
	this.shape.setTransform(32.7,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,65.4,52.9), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7D337").s().p("Eg2fABqQ2lgsAAg+QAAg9WlgsQWkgsf7AAQf7AAWlAsQWlAsgBA9QABA+2lAsQ2oAs/4AAQ/4AA2ngsg");
	this.shape_2.setTransform(493.3,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,986.5,30), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnSglIAsgZIgWgnIAogfIgMg0IAngcIgPgqINbEkIgjATIAPAnIgnAZIANA0IgzAgIAXAyg");
	this.shape_1.setTransform(46.7,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,93.4,51), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhC8AzIMgT8g8rMAbSgplMAnuAbtMgr/AAAMAAKAjiMA4+gB+IAF4IMBdjBBHg");
	this.shape_2.setTransform(558.2,327.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(2.1,0,1112.2,654.5), null);


(lib.keyai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFBE37").s().p("AAAAKIgXAgIAQglIgogFIAogEIgQglIAXAgIAYggIgQAlIAoAEIgoAFIAQAlg");
	this.shape.setTransform(31.9,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFBE37").s().p("AAAAKIgXAgIAPglIgogFIAogEIgPglIAXAhIAYghIgQAlIApAEIgpAFIAQAlg");
	this.shape_1.setTransform(11.6,41.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFBE37").s().p("AAAAKIgYAgIAQglIgngFIAngEIgQglIAYAgIAYggIgQAlIAoAEIgoAFIAQAlg");
	this.shape_2.setTransform(45.5,197);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFBE37").s().p("AAAAKIgXAgIAQglIgogFIAogEIgQglIAXAgIAYggIgQAlIAoAEIgoAFIAQAlg");
	this.shape_3.setTransform(74.5,127.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFBE37").s().p("AAAAKIgXAgIAPglIgngFIAngDIgPgmIAXAgIAZggIgRAmIApADIgpAFIARAlg");
	this.shape_4.setTransform(28.1,153.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFBE37").s().p("AAAAKIgXAgIAPglIgngFIAngDIgPgmIAXAgIAYggIgQAmIApADIgpAFIAQAlg");
	this.shape_5.setTransform(119.1,78.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFBE37").s().p("AAAAKIgXAgIAPglIgngFIAngEIgPglIAXAgIAZggIgQAlIAnAEIgnAFIAQAlg");
	this.shape_6.setTransform(108.4,172.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFBE37").s().p("AAAAKIgXAgIAQglIgogFIAogEIgQglIAXAgIAYggIgQAlIAoAEIgoAFIAQAlg");
	this.shape_7.setTransform(4.8,79.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFBE37").s().p("AAAAKIgXAgIAQglIgpgFIApgEIgQglIAXAgIAYggIgPAlIAnAEIgnAFIAPAlg");
	this.shape_8.setTransform(86.2,20.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFBE37").s().p("AAAAKIgXAgIAPglIgngFIAngEIgPglIAXAgIAYggIgQAlIApAEIgpAFIAQAlg");
	this.shape_9.setTransform(94.9,49.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CB9E3F").p("AAaAAQAAALgIAHQgHAIgLAAQgKAAgHgIQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKg");
	this.shape_10.setTransform(23.5,96.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CB9E3F").p("AAaAAQAAALgIAHQgHAIgLAAQgKAAgHgIQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKg");
	this.shape_11.setTransform(10.6,61.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CB9E3F").p("AAaAAQAAALgIAIQgHAHgLAAQgKAAgHgHQgIgIAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKg");
	this.shape_12.setTransform(23.5,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CB9E3F").p("AAaAAQAAAKgIAIQgHAIgLAAQgKAAgHgIQgIgIAAgKQAAgKAIgIQAHgHAKAAQALAAAHAHQAIAIAAAKg");
	this.shape_13.setTransform(110,103.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CB9E3F").p("AAaAAQAAALgIAHQgHAIgLAAQgKAAgHgIQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKg");
	this.shape_14.setTransform(17.7,162.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CB9E3F").p("AAaAAQAAALgIAHQgHAIgLAAQgKAAgHgIQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKg");
	this.shape_15.setTransform(104.9,145.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CB9E3F").p("AAaAAQAAALgIAHQgHAIgLAAQgKAAgHgIQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKg");
	this.shape_16.setTransform(74.5,191.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CB9E3F").p("AAaAAQAAALgIAHQgHAIgLAAQgKAAgHgIQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKg");
	this.shape_17.setTransform(88.7,108.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CB9E3F").p("AAaAAQAAALgIAIQgHAHgLAAQgKAAgHgHQgIgIAAgLQAAgJAIgIQAHgIAKAAQALAAAHAIQAIAIAAAJg");
	this.shape_18.setTransform(68.1,24.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFBE37").s().p("ABmLDIAAk2IgdAAIAAh+IAdAAIAAm3QhtgOhHg7QhHg8gBhPQABhDA0g3QA0g2BUgYQgBgHAAgHQAAguAhghQAgghAvAAIABAAIAAA4IgCAAQgXAAgQARQgQAQAAAXQAAAYAQAQQAQARAYAAIABAAIAABUQgPgWgagNQgZgNgdAAQgyAAgiAkQgiAjAAAyQgBAyAkAjQAhAkAyAAQAdAAAagNQAZgNAPgWIAAP2g");
	this.shape_19.setTransform(40.5,114.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB9E3F").s().p("AidLDIAAv2IAEgDQAQAXAbAOQAbAOAeAAQAyAAAigkQAjgjAAgyQAAgygjgjQgjgkgyAAQgeAAgaAOQgaAOgRAXIgEgDIAAhUQAWgBAQgRQAQgQAAgXQAAgWgQgQQgQgRgWgBIAAg4QAyABAgAhQAeAgAAAuIACALQBYAXA4A3QA5A4AABFQAABOhJA9QhHA7hnAOIAAG3IATAAIAAB+IgTAAIAAA6IBEAAIAAAwIBCAAIAAgwIBOAAIAABNIgxAAIAABEIAxAAIAABOIhOAAIAAgxIhCAAIAAAxIhEAAIAAAdg");
	this.shape_20.setTransform(71.3,114.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,123.9,201.7);


(lib.keylockai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#974B94").s().p("AgYBiQgKgKAAgPIAAhPQgWgQAAgdQAAgXARgQQARgRAWAAQAYAAAQARQARARAAAWQAAAdgWAQIAABPQAAAPgKAKQgKAKgPAAQgNAAgLgKg");
	this.shape.setTransform(170.3,75.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFBE37").s().p("AhsBsQgsgtgBg/QABg/AsgtQAugsA+gBQA/ABAtAsQAuAtgBA/QABA/guAtQgtAtg/AAQg+AAgugtg");
	this.shape_1.setTransform(170.4,75.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#974B94").s().p("AjjISQhBAAguguQguguAAhBIAAngIIuAAIAAiLQgDhKgyg0QgzgzhGAAQhFAAgyAzQgyAygEBKIAAAVIhpAAIABgnQAGhuBQhMQBRhNBuAAQBwAABRBOQBRBNAEBvIABCcIBqAAIAAHgQAABBguAuQguAuhBAAg");
	this.shape_2.setTransform(170.3,53);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFBE37").s().p("AgCAFIgWAJIATgOIgTgNIAWAJIACgXIADAXIAWgJIgTANIATAOIgWgJIgDAYg");
	this.shape_3.setTransform(14.2,57.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFBE37").s().p("AgCAFIgWAJIATgOIgTgNIAWAJIACgYIADAYIAWgJIgTANIATAOIgWgJIgDAYg");
	this.shape_4.setTransform(24.5,45.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFBE37").s().p("AgCAFIgWAJIATgOIgTgNIAWAJIACgYIADAYIAWgJIgTANIATAOIgWgJIgDAYg");
	this.shape_5.setTransform(116.6,65.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFBE37").s().p("AgCAFIgWAJIATgOIgTgNIAWAJIACgYIADAYIAWgJIgTANIATAOIgWgJIgDAYg");
	this.shape_6.setTransform(75.4,83.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFBE37").s().p("AgCAFIgWAJIATgOIgTgNIAWAJIACgYIADAYIAWgJIgTANIATAOIgWgJIgDAYg");
	this.shape_7.setTransform(90.9,55.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFBE37").s().p("AgCAFIgWAJIATgOIgTgNIAWAJIACgYIADAYIAWgJIgTANIATAOIgWgJIgDAYg");
	this.shape_8.setTransform(46.8,109.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFBE37").s().p("AgCAFIgWAJIATgOIgTgOIAWAKIACgXIADAXIAWgKIgTAOIATAOIgWgJIgDAXg");
	this.shape_9.setTransform(102.3,103.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFBE37").s().p("AgCAFIgWAKIATgPIgTgOIAWAKIACgXIADAXIAWgKIgTAOIATAPIgWgKIgDAXg");
	this.shape_10.setTransform(47.4,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFBE37").s().p("AgCAFIgWAJIATgOIgTgOIAWAKIACgXIADAXIAWgKIgTAOIATAOIgWgJIgDAXg");
	this.shape_11.setTransform(12.5,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFBE37").s().p("AgCAFIgWAJIATgOIgTgNIAWAJIACgXIADAXIAWgJIgTANIATAOIgWgJIgDAXg");
	this.shape_12.setTransform(29.7,95.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CB9E3F").p("AAAAPQAGAAAFgEQAEgFAAgGQAAgGgEgEQgFgEgGAAQgFAAgFAEQgEAEAAAGQAAAGAEAFQAFAEAFAAg");
	this.shape_13.setTransform(57.3,53);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CB9E3F").p("AAAAPQAGAAAFgEQAEgEAAgHQAAgFgEgFQgFgEgGAAQgGAAgEAEQgEAFAAAFQAAAHAEAEQAEAEAGAAg");
	this.shape_14.setTransform(36.4,45.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CB9E3F").p("AAAAPQAHAAAEgEQAEgFAAgGQAAgGgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAGQAAAGAEAFQAFAEAFAAg");
	this.shape_15.setTransform(2,53);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CB9E3F").p("AAAAPQAHAAAEgEQAEgEAAgHQAAgFgEgFQgEgEgHAAQgFAAgFAEQgEAFAAAFQAAAHAEAEQAFAEAFAAg");
	this.shape_16.setTransform(61.1,104);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CB9E3F").p("AAAAPQAGAAAFgEQAEgFAAgGQAAgFgEgFQgFgEgGAAQgGAAgEAEQgEAFAAAFQAAAGAEAFQAEAEAGAAg");
	this.shape_17.setTransform(96.2,49.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CB9E3F").p("AAAAPQAHAAAEgEQAEgEAAgHQAAgFgEgFQgEgEgHAAQgFAAgFAEQgEAFAAAFQAAAHAEAEQAFAEAFAAg");
	this.shape_18.setTransform(86.3,101);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CB9E3F").p("AAAAPQAGAAAFgEQAEgFAAgGQAAgFgEgFQgFgEgGAAQgGAAgEAEQgEAFAAAFQAAAGAEAFQAEAEAGAAg");
	this.shape_19.setTransform(113.4,83.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CB9E3F").p("AAAAPQAHAAAEgEQAEgFAAgGQAAgGgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAGQAAAGAEAFQAFAEAFAAg");
	this.shape_20.setTransform(64.2,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CB9E3F").p("AAAAPQAGAAAFgEQAEgFAAgGQAAgGgEgEQgFgEgGAAQgFAAgFAEQgEAEAAAGQAAAGAEAFQAFAEAFAAg");
	this.shape_21.setTransform(14.6,79.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFBE37").s().p("AiwBZQAMgHAIgQQAIgQAAgRQAAgegVgTQgVgVgeAAQgdAAgVAVQgVATAAAeQAAARAIAQQAIAQAMAHIgyAAIABgBQAAgNgKgKQgKgKgOAAQgOAAgJAKQgKAJAAAOIAAABIghAAIAAgBQAAgbATgUQAUgTAbAAIAIABQAPgxAggfQAggfAnAAQAvAAAjAqQAkAqAIBAIEAAAIAAgUIBNAAIAAAUICuAAIAAAdg");
	this.shape_22.setTransform(67.2,63);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CB9E3F").s().p("AkmA7QggghgOg0IgGAAQgbAAgUgSQgSgTgBgdIAhAAQAAAPAKAJQAJAIAOAAQAOAAAJgIQAJgJABgPIAyAAIACACQgOAKgIAPQgIAQAAARQAAAeAVAUQAUAVAeAAQAeAAAUgVQAWgUAAgdQgBgSgHgQQgJgPgOgKIACgCIJOAAIAAAnIgKAAIAAAnIgcAAIAAAvIAcAAIAAAnIgwAAIAAgdIgnAAIAAAdIgwAAIAAgnIAmAAIAAgvIgmAAIAAgnIgdAAIAAAKIhOAAIAAgKIj/AAQgIBAgkApQgjApgvAAQgoAAgigig");
	this.shape_23.setTransform(67.2,81.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,209.4,112.3);


(lib.jumpingai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D98764").s().p("AgWAnQgQgNAEgcQABgRAJgOQAHgOAHABQADABACAKQAEAOAHAIQAEAEAJAEQAIADADAFQAKAOgHANQgGANgTADIgIABQgNAAgJgIg");
	this.shape.setTransform(48,39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAQQgEAAgCgFQgBgFAAgGQABgGACgFQADgEACAAQADAAACAFQACAFAAAFQgBAHgCAFQgCAEgDAAIAAAAg");
	this.shape_1.setTransform(42.5,28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAQQgDAAgCgFQgCgFAAgGQABgGACgFQADgEACAAQADAAACAFQACAFAAAFQgBAHgCAFQgDAEgCAAIAAAAg");
	this.shape_2.setTransform(51.3,29);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333337").s().p("AAAAnIgDAAQgJgBgFgGQgGgGABgJIACglQABgIAGgFQAHgGAHABIADAAQAJABAFAGQAGAGgBAIIgCAlQgBAJgGAFQgGAFgGAAIgCAAg");
	this.shape_3.setTransform(50.5,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333337").s().p("AAAAnIgEAAQgIgBgFgGQgGgHABgIIACglQABgIAGgFQAGgGAIABIADAAQAJABAFAGQAGAGgBAIIgDAlQAAAIgHAGQgFAFgGAAIgCAAg");
	this.shape_4.setTransform(41.7,29.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D38666").p("AAAgLQAAALAEAGQADADAFgDQAFgCABgFQACgHgFgKQgEgJgGgCQgIgEgIANQgJAOAEAOQADALAKAHQAJAHALgC");
	this.shape_5.setTransform(25.1,28.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#875724").s().p("AiVCqIgPgKQgUgNgRgIIAKiQQAFhQA+gyQA9gyBRAGIABAAQBLAFA0A0QA1A0ADBJIgLgDIgKgDQgigHgmghQgDgGgHgEQgNBGgrAjQgTAOgVACQgYAEgagIQgEgSgLgOQgMgOgQgDQgZgFgOAUQgMAQgDAbQgFArASAdIAEAEIACADIgBAdQgMgEgLgHg");
	this.shape_6.setTransform(36.1,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8B48D").s().p("AAaD+IhUgGQg9gEgpguQgogvAEg9IAMizQAFhJA3gwQA3gwBIAFIAeACQBJAFAwA3QAwA3gFBJIgMCzQgEA9gvApQgqAkg3AAIgLAAg");
	this.shape_7.setTransform(35.6,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#077EB4").s().p("AiKFhIDBqmQAHgZAXgNQAXgNAaAIIAFABIjSLjg");
	this.shape_8.setTransform(16.3,96.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99D78").s().p("AgLArQgSgFgJgQQgJgRAFgQQAFgSAQgJQAQgJARAFQASAGAJAQQAJAQgFAQQgFASgRAJQgKAGgLAAQgFAAgGgCg");
	this.shape_9.setTransform(5.3,135.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A6C43C").s().p("AhuHAIB4uGIBlAHIh4OGg");
	this.shape_10.setTransform(14.6,161.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A6C43C").s().p("AARBaIg3gDQhAgFgqgwQgqgvAFhAIAAgNIFsAZIgBANQgFA/gwAqQgsAmg4AAIgMgBg");
	this.shape_11.setTransform(29.6,117.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#10A5DD").s().p("AjBDtIAYlVQAEhGA1gtQA0guBFAFIAcACQBGAEAtA1QAuA0gFBGIgXFVg");
	this.shape_12.setTransform(30.8,84.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D98764").s().p("AgrA2IAIhwIBPAFIgIBwg");
	this.shape_13.setTransform(33.8,53.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7EB244").s().p("AhuHBIB4uIIBlAHIh4OIg");
	this.shape_14.setTransform(31.8,162.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#646469").s().p("ABHBmIhVhEIACgVQACgIgHgEQgHgDgGADIgOAKIg1goIBFhLIAqAiQASAOALAUIAvBbQAEAIABAIQADAKAAAIQgBAKgJAFQgEABgDAAQgFAAgFgDg");
	this.shape_15.setTransform(9.8,212.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333337").s().p("ABMBhIhag7IABgWQAAgIgHgDQgGgEgHAFIgNALIg3gjIA9hRIAtAeQATAMAMAUIA3BWQAFAHACAJQADAGABALQABAKgJAGQgEACgFAAQgEAAgFgDg");
	this.shape_16.setTransform(28.6,213.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,223.3);


(lib.incartai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB792").s().p("AgtAvQgTgUAAgbQAAgaATgTQATgUAaAAQAbAAATAUQATATAAAaQAAAbgTAUQgTASgbABQgagBgTgSg");
	this.shape.setTransform(165.3,99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C83B7").ss(9,1).p("Ak8idIDVE5IGkgm");
	this.shape_1.setTransform(131.7,86.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap2AQIgKgfIUBAAIgEAfg");
	this.shape_2.setTransform(117.6,114);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0C5C9").s().p("AhJIYQixAAhCg4Qghgcgbg2QgUgpgfhaIgGgRQhCi8idoeIhVAAQAQgVAAgbIgBgHIBRAAQAQAAANAJQANAKAFAQIBaEyQBhFGAtCAIAFAQQAdBRAMAcQATAsAVARQAWATAqAIQApAIBNAAIMYAAQAUAAAOAOQAOAPAAATIAAABQgMAHgLgBg");
	this.shape_3.setTransform(98.1,144.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0F3F3").s().p("AhWItQixAAhCg5Qgggcgbg2QgUgpgfhZIgGgRQhCi9ieoeIhUAAQAPgVABgbQgBgagPgWIB4AAQARAAANAKQANAKAEAPIBaEzQBiFGAsB/IAGARQAcBQANAcQASAsAVASQAWATAqAIQAqAHBMABIMYAAQAVgBANAOQAPAPAAATQAAAVgPAOQgNAOgVAAg");
	this.shape_4.setTransform(99.3,142.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#483F4F").s().p("AhKAoQgQAAgMgMQgMgMAAgQQAAgQAMgLQAMgMAQAAICVAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAg");
	this.shape_5.setTransform(11.7,91.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#59535D").s().p("AgwBEQgcgBgUgTQgUgUAAgcQAAgbAUgTQAUgVAcABIBhAAQAcgBAUAVQAUATAAAbQAAAcgUAUQgUATgcABg");
	this.shape_6.setTransform(11.7,91.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0F3F3").s().p("AmyATQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAINlAAQAIAAAFAFQAGAGABAHQgBAIgGAGQgFAFgIAAg");
	this.shape_7.setTransform(123,166.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0F3F3").s().p("AnNATQgIAAgFgFQgGgGAAgIQAAgHAGgFQAFgGAIAAIObAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAg");
	this.shape_8.setTransform(121.7,153.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0F3F3").s().p("AnnATQgIAAgGgFQgGgGAAgIQAAgHAGgFQAGgHAIAAIPPAAQAIAAAGAHQAFAFAAAHQAAAIgFAGQgGAFgIAAg");
	this.shape_9.setTransform(120.4,140.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0F3F3").s().p("AoCATQgIABgFgHQgGgFAAgIQAAgHAGgGQAFgFAIAAIQEAAQAJAAAFAFQAGAGAAAHQAAAIgGAFQgFAHgJgBg");
	this.shape_10.setTransform(119.1,127.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#787A7A").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAJgKANAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAKgNAAQgNAAgJgKg");
	this.shape_11.setTransform(151.2,218.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#F0F3F3","#9CA7A6"],[0,1],13.3,12.3,-17.5,-16.2).s().p("AhGBHQgdgeAAgpQAAgpAdgdQAdgdApAAQApAAAeAdQAdAdAAApQAAApgdAeQgeAdgpAAQgpAAgdgdg");
	this.shape_12.setTransform(151.2,218.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D4C4E").s().p("AhxByQgvgwAAhCQAAhCAvgvQAwgvBBAAQBDAAAvAvQAvAvAABCQAABDgvAvQgvAvhDAAQhBAAgwgvg");
	this.shape_13.setTransform(151.2,218.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#787A7A").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAKgKAMAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAKgNAAQgMAAgKgKg");
	this.shape_14.setTransform(91.3,218.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#F0F3F3","#9CA7A6"],[0,1],13.3,12.3,-17.5,-16.2).s().p("AhGBHQgdgegBgpQABgpAdgdQAdgdApAAQAqAAAdAdQAeAdAAApQAAApgeAeQgdAdgqAAQgpAAgdgdg");
	this.shape_15.setTransform(91.3,218.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4C4E").s().p("AhxByQgvgvAAhDQAAhCAvgvQAwgvBBAAQBDAAAvAvQAvAvAABCQAABDgvAvQgvAvhDAAQhBAAgwgvg");
	this.shape_16.setTransform(91.3,218.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AmyAdQgIAAgGgGQgFgFAAgIIAAgTQAAgIAFgFQAGgGAIAAINlAAQAIAAAFAGQAGAFABAIIAAATQgBAIgGAFQgFAGgIAAg");
	this.shape_17.setTransform(123,165.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AnNAdQgIAAgFgGQgGgFAAgIIAAgTQAAgIAGgFQAFgGAIAAIObAAQAIAAAFAGQAGAFAAAIIAAATQAAAIgGAFQgFAGgIAAg");
	this.shape_18.setTransform(121.7,152.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AnnAdQgIAAgGgGQgGgGAAgHIAAgTQAAgIAGgGQAGgFAIAAIPPAAQAIAAAGAFQAFAGAAAIIAAATQAAAHgFAGQgGAGgIAAg");
	this.shape_19.setTransform(120.4,139.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AoCAdQgIAAgFgGQgGgFAAgJIAAgSQAAgIAGgFQAFgGAIAAIQEAAQAJAAAFAGQAGAFAAAIIAAASQAAAJgGAFQgFAGgJAAg");
	this.shape_20.setTransform(119.1,126.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0F3F3").s().p("ApzA3IgRg3QgGgWAKgQQAKgPAUAAITAAAQAUAAAMAQQAMAQgEAWIgFA2g");
	this.shape_21.setTransform(117.2,110.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C0C5C9").s().p("AmREvQgUAAgSgQQgSgQgGgWIiqonITzAAIg4IlQgEAXgQAQQgQARgUAAg");
	this.shape_22.setTransform(117.9,145.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DB8D6B").s().p("AgUAoQgQgKAAgeQAAgQAHgPQAGgPAHABQADAAAEALQAEAMAIAHQAFAEAJAEQAIACAEAFQALAMgFAOQgFANgSAFQgHACgFAAQgLAAgJgGg");
	this.shape_23.setTransform(122.1,37.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAMQgDgFAAgHQAAgFACgFQACgFADAAQADAAACAEQADAFAAAGQAAAGgCAFQgCAFgDAAQgDAAgCgEg");
	this.shape_24.setTransform(115.3,26.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHAAQAAgOAHgBQACAAADAEQADAFAAAGQAAAPgHABQgHAAgBgQg");
	this.shape_25.setTransform(124.2,26.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#424245").s().p("AgOAiQgGgGgBgIIgBglQAAgIAGgHQAGgGAIAAIADAAQAIAAAGAFQAGAGAAAIIABAlQABAIgGAHQgFAGgJAAIgDAAIgBAAQgHAAgGgFg");
	this.shape_26.setTransform(123.5,27.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#424245").s().p("AgOAiQgGgGAAgIIgCglQAAgIAGgHQAGgGAIAAIACAAQAJAAAGAFQAGAGAAAIIABAlQABAIgGAHQgGAGgIAAIgDAAIgBAAQgHAAgGgFg");
	this.shape_27.setTransform(114.7,28.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#D68C6D").ss(2).p("AgBgKQgBAKAFAFQAEAEAFgEQAEgDABgFQABgHgFgJQgGgJgFgBQgJgDgHAOQgIAPAGANQAEAKAKAGQAKAHALgE");
	this.shape_28.setTransform(98.1,28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8C6037").s().p("AiDCuIgQgIQgVgLgSgGIgFiNQgChNA3g3QA2g2BQgDIABAAQBJgCA4AtQA3AtALBHQgEABgHgCIgKgDQgigEgogcQgDgGgHgDQgGBGgnAmQgRAQgUADQgWAHgbgGQgEgRgNgMQgNgNgQgBQgZgCgMAVQgKARAAAaQgBApAWAcIAEADIAEACIABAcQgMgCgMgGg");
	this.shape_29.setTransform(107.9,18.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FAB792").s().p("AiMDVQgtgqgCg+IgGiyQgChJAxg2QAyg1BJgDIAdgBQBJgCA1AyQA2AyACBJIAGCzQADA9grAtQgqAtg9ACIhUADIgGABQg6AAgrgpg");
	this.shape_30.setTransform(108.4,25.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EAA17D").s().p("AgdAgQgNgMgBgSQgBgSANgOQAMgMATgCQARAAAOANQANAMAAASQABASgMAOQgNANgSAAIgCABQgQAAgNgNg");
	this.shape_31.setTransform(102.3,141.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FA9DF").s().p("Ai7hTQgChGAwgzQAvgyBGgDIAbgBQBFgCAzAvQAzAwADBFIALFWIlrANg");
	this.shape_32.setTransform(110.2,83.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DB8D6B").s().p("Agpg3IBPgCIAEBxIhQACg");
	this.shape_33.setTransform(109.3,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,234.9);


(lib.handsonwaistai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C83B7").s().p("Ah2iQIBZgFICTELIg5Agg");
	this.shape.setTransform(11.9,102.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C83B7").s().p("AilBlIDujuQATgSAaABQAZAAASASIAFAFIkhEfg");
	this.shape_1.setTransform(16.6,77.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB8D6B").s().p("AgVAoQgOgLAAgeQAAgRAIgOQAHgPAHABQACABAEALQAEANAHAHQAFAEAJADQAIADAEAFQAKANgGAOQgFANgTAEIgKACQgLAAgKgHg");
	this.shape_2.setTransform(53.7,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEALQgDgFAAgGQAAgGADgEQACgFACAAQADAAADAFQACAFAAAFQAAAHgDAEQgCAFgDAAQgCAAgCgFg");
	this.shape_3.setTransform(47.4,28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEALQgDgEAAgHQABgPAGAAQADAAACAEQADAGAAAFQAAAHgDAEQgCAFgDAAQgCAAgCgFg");
	this.shape_4.setTransform(56.3,29);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424245").s().p("AgBAnQgIAAgGgGQgGgGAAgIIAAglQAAgIAGgGQAGgGAIAAIADAAQAJAAAFAGQAGAGAAAIIAAAlQgBAJgFAFQgGAGgJAAg");
	this.shape_5.setTransform(55.5,30.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424245").s().p("AgBAnQgIAAgGgGQgGgGAAgIIAAglQAAgJAHgFQAGgGAHAAIADAAQAIAAAGAGQAGAGAAAIIAAAlQAAAIgHAGQgFAGgIAAg");
	this.shape_6.setTransform(46.7,30.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D68C6D").ss(2).p("AAAgKQAAALAEAFQAEADAFgDQAFgDAAgFQABgIgFgJQgEgIgGgCQgIgEgIAOQgIAPAFANQADALAKAGQAKAHALgD");
	this.shape_7.setTransform(30,29.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8C6037").s().p("AiVC1IgQgKIgmgTIABiXQAAhSA8g3QA6g2BVAAIABAAQBPAAA5AzQA6AyAIBMQgEABgHgEIgMgEQgjgFgpgfQgFgIgHgDQgJBMgqAlQgSAQgXADQgYAGgcgHQgFgTgMgMQgNgPgSgCQgagDgOAVQgLASgCAcQgCAtAVAdIAFAEQAAAAAAAAQAAAAAAABQABAAAAAAQABABABAAIgBAeQgMgDgLgGg");
	this.shape_8.setTransform(40.5,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAB792").s().p("AApD9IhUgBQg+AAgrgsQgrgsAAg9IABizQABhJA0g0QA0gzBJAAIAdABQBJAAAzA0QA0A0gBBJIgBCzQgBA+grArQgsArg9AAIgBAAg");
	this.shape_9.setTransform(40.5,27.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAA17D").s().p("AAAAsQgSAAgNgNQgNgNABgSQAAgSANgMQANgNARAAQATAAAMANQANANAAARQAAATgNANQgMAMgSAAIgBAAg");
	this.shape_10.setTransform(21.7,117.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A9C649").s().p("AgyHHIAAuNIBkAAIAAONg");
	this.shape_11.setTransform(31.4,163.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A9C649").s().p("AgcBUQhAAAgsgtQgtgtAAhAIAAgNIFsAAIAAANQAABAgtAtQguAthAAAg");
	this.shape_12.setTransform(39.9,118.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2FA9DF").s().p("Ai1EAIAAlWQAAhGAxgxQAxgyBGABIAbAAQBGgBAxAyQAxAxAABGIAAFWg");
	this.shape_13.setTransform(39.8,85.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DB8D6B").s().p("AgnA5IAAhxIBPAAIAABxg");
	this.shape_14.setTransform(40.2,55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#84B54F").s().p("AgxHHIAAuNIBjAAIAAONg");
	this.shape_15.setTransform(48.6,163.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B6B70").s().p("AgKAyIgLgSQgDgHgIABQgIABgCAHIgGAQIhCAAIAHhjIA4AAQAVAAAWAJIBcAqQAJAFAGAFQAHAEAGAIQAGAIgFAJQgEAJgKAAg");
	this.shape_16.setTransform(37.3,213.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424245").s().p("AgKAyIgLgSQgEgHgIABQgHABgDAHIgFAQIhCAAIAHhjIA3AAQAWAAAVAJIBdAqQAHADAIAHQAHAEAFAIQAHAIgFAJQgFAJgKAAg");
	this.shape_17.setTransform(54.6,213.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C83B7").s().p("Ah2B2ICUkLIBYAFIiyEmg");
	this.shape_18.setTransform(63.6,100.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C83B7").s().p("AiliDIAFgGQASgSAZAAQAaAAASASIDvDuIgrA3g");
	this.shape_19.setTransform(58.9,75.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAA17D").s().p("AgeAgQgNgOAAgSQAAgSANgMQANgOARAAQATAAAMAOQANAMAAASQABASgNAOQgNANgTgBQgRABgNgNg");
	this.shape_20.setTransform(53.7,115.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.5,218.4);


(lib.firstbubbleai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B6B70").s().p("AgNAfQgGgGAAgJQAAgIAFgIIAQgjIAIAAIgPAgQADgBADAAQAJAAAFAEQAFAGAAAJQAAAJgFAGQgGAGgJAAQgIAAgFgFgAgIAFQgEAEAAAGQAAAHAEADQADAEAFAAQAGAAADgEQAEgDAAgHQAAgGgEgEQgDgEgGgBQgFAAgDAFg");
	this.shape.setTransform(240.8,128.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B6B70").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_1.setTransform(236.1,137);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B6B70").s().p("AgdA4IAAhtIALAAIAAAJQAEgGAFgCQAFgCAGgBQAMABAGAFQAGAHACAIQACAHAAAMQAAAKgCAIQgCAHgFAGIgIAFQgFABgGAAQgGAAgFgBQgFgDgEgFIAAArgAgOglQgEAIAAAOQAAANAEAHQADAHALABQALAAAEgJQAEgGAAgNQAAgOgEgIQgEgIgLABQgKAAgEAHg");
	this.shape_2.setTransform(230.1,135.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B6B70").s().p("AgFA3IAAhLIALAAIAABLgAgFgpIAAgNIALAAIAAANg");
	this.shape_3.setTransform(223.7,132.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B6B70").s().p("AATA3IAAgvQAAgIgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAIIAAAvIgLAAIAAhtIALAAIAAAqQAIgJANAAQAMAAAIAIQAHAHAAAMIAAAxg");
	this.shape_4.setTransform(217.4,132.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B6B70").s().p("AgQAkQgIgCgGgGIAIgHQAEAEAGACQAFADAHAAQAKAAAFgEQAGgEAAgGQAAgKgNgBIgMgBQgKAAgHgFQgFgFgBgKQAAgKAIgGQAIgGALAAQASAAAKAJIgHAHQgJgHgMAAQgHAAgFADQgDAEAAAGQAAAFADADQACADAIAAIALABQALABAFAEQAGAEAAAKQAAAMgIAGQgIAGgPAAQgIAAgIgDg");
	this.shape_5.setTransform(209.2,133.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B6B70").s().p("AATAmIAAgtQAAgKgFgGQgFgEgJAAQgIAAgFAEQgFAGAAAKIAAAtIgLAAIAAhKIALAAIAAAIQAIgKANAAQAMAAAHAIQAIAHAAAOIAAAvg");
	this.shape_6.setTransform(201.1,133.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B6B70").s().p("AgMAkQgFgCgFgEQgEgGgCgHQgCgGAAgLQAAgJACgIQACgHAEgFQAFgEAFgDQAGgCAGAAQAHAAAFACQAGADAEAEQAFAFACAHQACAIAAAJQAAAKgCAHQgCAIgFAFQgEAEgGACQgFADgHAAQgGAAgGgDgAgMgXQgFAEgBAHIgBAMIABAOQABAGAFAEQAEAFAIAAQAJAAAEgFQAEgEACgGQABgGAAgIQAAgHgBgGQgCgGgDgDQgFgGgJAAQgIAAgEAFg");
	this.shape_7.setTransform(192.6,133.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B6B70").s().p("AgEA3IAAhLIAKAAIAABLgAgFgpIAAgNIALAAIAAANg");
	this.shape_8.setTransform(186.6,132.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B6B70").s().p("AALAyQgJAAgFgGQgEgGAAgJIAAgtIgKAAIAAgJIAKAAIAAgYIAKAAIAAAYIAQAAIAAAJIgQAAIAAAtQgBALAKAAIAHAAIAAAKg");
	this.shape_9.setTransform(181.9,132.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B6B70").s().p("AgPAlQgFgBgFgFQgEgFAAgKQAAgKAGgGQAIgEAMAAIAWAAIAAgHQAAgJgEgFQgFgEgKAAQgHABgEABQgEADgDAEIgIgHQAEgGAHgDQAGgCAJAAQAeAAAAAaIAAAyIgLAAIAAgHQgFAEgFACQgEACgHAAQgIAAgFgCgAgSAQQAAAOARAAIAJgCQAEAAAEgEQADgDAAgKIAAgIIgUAAQgRAAAAANg");
	this.shape_10.setTransform(175.1,133.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B6B70").s().p("AAGA3QgJAAgFgFQgFgGAAgJIAAhZIALAAIAABYQAAAGACACQACADAGAAIAGAAIAAAKg");
	this.shape_11.setTransform(169.4,132.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6B6B70").s().p("AgVAdQgJgKAAgTQAAgSAIgKQAJgKANAAQAPAAAIAKQAIAJAAASIAAAEIgyAAQAAAMAGAIQAGAGAJAAQAHAAAEgCQAFgCAEgEIAIAGQgGAGgGADQgGADgKAAQgOAAgJgKgAgKgaQgEAEgCADIgCAIIgBAHIAnAAIAAgHQAAgDgCgDQgCgFgFgEQgFgDgGAAQgFAAgFADg");
	this.shape_12.setTransform(162.6,133.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B6B70").s().p("AgYAmIAAhKIALAAIAAAJQADgFAGgCQAEgDAHgBQAGAAAEACQAEABAEAEIgIAJIgGgEIgHgBQgHgBgFAGQgFAGAAAJIAAAtg");
	this.shape_13.setTransform(155.9,133.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6B6B70").s().p("AgTAyQgHgHgBgIQgCgHAAgMQAAgKACgIQABgIAFgDQAEgFAFgCQAFgBAGAAQAGAAAFABQAFACAEAHIAAgsIALAAIAABtIgLAAIAAgJQgEAGgFACQgGACgGAAQgLAAgGgFgAgOgDQgEAGAAANQAAAOAEAIQADAIALgBQALAAAEgIQAEgHAAgOQAAgNgEgHQgEgHgLAAQgKgBgEAJg");
	this.shape_14.setTransform(239.5,110.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B6B70").s().p("AATAmIAAguQAAgJgFgGQgFgEgJAAQgIAAgFAEQgFAGAAAJIAAAuIgLAAIAAhKIALAAIAAAIQAIgJANAAQAMAAAHAHQAIAIAAANIAAAvg");
	this.shape_15.setTransform(231.2,112.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B6B70").s().p("AgPAmQgEgCgGgFQgEgFAAgKQAAgJAHgGQAGgGANAAIAWAAIAAgHQAAgIgEgEQgFgFgKAAQgHAAgEADQgEACgDAEIgIgGQAEgHAHgCQAGgDAJAAQAeAAAAAZIAAAzIgLAAIAAgHQgFAEgFACQgEACgHAAQgIAAgFgBgAgSAQQgBANASABIAJgBQAEgBAEgEQADgDAAgKIAAgIIgUAAQgRAAAAANg");
	this.shape_16.setTransform(222.5,112.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B6B70").s().p("AgYAmIAAhKIALAAIAAAJQADgFAGgDQAEgCAHAAQAGgBAEACQAEACAEAEIgIAIIgGgFIgHAAQgHAAgFAFQgFAGAAAJIAAAtg");
	this.shape_17.setTransform(216.1,112.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6B6B70").s().p("AgJA1QgFgCgEgGIAAAJIgLAAIAAhtIALAAIAAAsQAEgGAFgDQAGgBAFAAQAMAAAGAFQAGAGACAIQACAIAAAKQAAALgCAIQgCAJgFAFIgIAEQgFACgGAAQgGAAgFgCgAgOgDQgEAGAAANQAAAOAEAIQADAIALgBQALAAAEgIQAEgHAAgOQAAgNgEgHQgEgHgLAAQgKgBgEAJg");
	this.shape_18.setTransform(208.2,110.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B6B70").s().p("AgYAmIAAhKIALAAIAAAJQADgFAGgDQAEgCAHAAQAGgBAEACQAEACAEAEIgIAIIgGgFIgHAAQgHAAgFAFQgFAGAAAJIAAAtg");
	this.shape_19.setTransform(197.3,112.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B6B70").s().p("AgVAdQgJgJAAgUQAAgRAIgLQAJgKANAAQAPAAAIAKQAIAKAAARIAAAEIgyAAQAAANAGAGQAGAHAJAAQAHAAAEgBQAFgCAEgFIAIAGQgGAHgGACQgGADgKAAQgOAAgJgKgAgKgZQgEACgCAEIgCAIIgBAGIAnAAIAAgGQAAgCgCgEQgCgFgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_20.setTransform(189.3,112.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B6B70").s().p("AgdA3IAAhsIALAAIAAAJQAEgGAFgDQAFgBAGAAQAMAAAGAFQAGAGACAJQACAIAAAKQAAALgCAHQgCAJgFAFIgIAEQgFACgGAAQgGAAgFgCQgFgBgEgHIAAArgAgOgkQgEAHAAANQAAAOAEAHQADAIALgBQALAAAEgIQAEgGAAgOQAAgNgEgIQgEgHgLAAQgKgBgEAJg");
	this.shape_21.setTransform(181.2,113.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6B6B70").s().p("AgVAdQgJgJAAgUQAAgRAIgLQAJgKANAAQAPAAAIAKQAIAKAAARIAAAEIgyAAQAAANAGAGQAGAHAJAAQAHAAAEgBQAFgCAEgFIAIAGQgGAHgGACQgGADgKAAQgOAAgJgKgAgKgZQgEACgCAEIgCAIIgBAGIAnAAIAAgGQAAgCgCgEQgCgFgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_22.setTransform(172.7,112.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6B6B70").s().p("AgVAdQgJgJAAgUQAAgRAIgLQAJgKANAAQAPAAAIAKQAIAKAAARIAAAEIgyAAQAAANAGAGQAGAHAJAAQAHAAAEgBQAFgCAEgFIAIAGQgGAHgGACQgGADgKAAQgOAAgJgKgAgKgZQgEACgCAEIgCAIIgBAGIAnAAIAAgGQAAgCgCgEQgCgFgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_23.setTransform(164.5,112.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6B6B70").s().p("AgTAyQgHgHgBgIQgCgHAAgMQAAgKACgIQABgIAFgDQAEgFAFgCQAFgBAGAAQAGAAAFABQAFACAEAHIAAgsIALAAIAABtIgLAAIAAgJQgEAGgFACQgGACgGAAQgLAAgGgFgAgOgDQgEAGAAANQAAAOAEAIQADAIALgBQALAAAEgIQAEgHAAgOQAAgNgEgHQgEgHgLAAQgKgBgEAJg");
	this.shape_24.setTransform(156,110.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6B6B70").s().p("AgPAlQgFgBgEgFQgFgFAAgJQAAgLAGgGQAIgEAMgBIAWAAIAAgGQAAgJgFgFQgEgDgKAAQgHAAgEACQgEABgDAGIgIgHQAFgHAGgCQAGgDAJAAQAeAAAAAZIAAAzIgLAAIAAgHQgFAEgEACQgGACgGAAQgIAAgFgCgAgSARQAAANARgBIAJgBQAEgBADgDQAEgEAAgJIAAgIIgVAAQgQAAAAAOg");
	this.shape_25.setTransform(281.9,90.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6B6B70").s().p("AgLAkQgGgBgEgGQgFgFgCgGQgCgIAAgKQAAgJACgHQACgIAFgEQAEgGAGgBQAFgDAGAAQAHAAAFADQAFABAGAGQAEAEACAIQACAHAAAJQAAAKgCAIQgCAGgFAGQgFAEgFACQgFADgHAAQgGAAgFgDgAgMgYQgEAFgCAGIgBANIABAOQACAFAEAGQAFAEAHAAQAIAAAFgEQAEgGABgFQACgGAAgIQAAgHgCgGQgBgGgDgEQgGgFgIAAQgHAAgFAEg");
	this.shape_26.setTransform(270.2,90.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6B6B70").s().p("AALAyQgJAAgFgGQgEgGAAgJIAAgtIgKAAIAAgJIAKAAIAAgYIAKAAIAAAYIAQAAIAAAJIgQAAIAAAtQgBALALAAIAGAAIAAAKg");
	this.shape_27.setTransform(263.4,89.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6B6B70").s().p("AgTAxQgHgFgBgIQgCgJAAgLQAAgKACgIQABgHAFgFQAEgEAFgCQAFgCAGAAQAGAAAFACQAFACAEAGIAAgrIALAAIAABuIgLAAIAAgJQgEAFgFACQgGACgGABQgLAAgGgHgAgOgEQgEAHAAANQAAAOAEAIQADAIALAAQALgBAEgHQAEgIAAgOQAAgNgEgHQgEgIgLAAQgKABgEAHg");
	this.shape_28.setTransform(252.7,88.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6B6B70").s().p("AgVAdQgJgJAAgUQAAgRAIgKQAJgLANAAQAPAAAIAKQAIAKAAARIAAAEIgyAAQAAANAGAGQAGAHAJAAQAHAAAEgBQAFgCAEgGIAIAHQgGAHgGACQgGADgKAAQgOAAgJgKgAgKgaQgEADgCAFIgCAHIgBAGIAnAAIAAgGQAAgCgCgEQgCgGgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_29.setTransform(244.5,90.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6B6B70").s().p("AAGA3QgJAAgFgFQgFgGAAgJIAAhZIALAAIAABZQAAAFACADQACACAGAAIAGAAIAAAKg");
	this.shape_30.setTransform(238.6,88.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6B6B70").s().p("AgQAkQgIgCgGgGIAHgIQAFAFAFACQAHADAGgBQAKABAFgEQAGgDgBgHQAAgKgMgCIgMgBQgLABgFgFQgHgFABgKQAAgKAHgGQAIgGALAAQASAAAKAJIgIAGQgHgFgNAAQgHAAgEACQgFAEAAAGQAAAFADADQAEADAHAAIALABQAKABAHAEQAFAEAAALQAAAKgIAHQgJAGgOAAQgJAAgHgDg");
	this.shape_31.setTransform(228.1,90.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6B6B70").s().p("AgPAlQgFgBgFgFQgEgFAAgJQAAgLAGgGQAIgEAMgBIAWAAIAAgGQAAgJgEgFQgFgDgKAAQgHAAgEACQgEABgDAGIgIgHQAFgHAGgCQAGgDAJAAQAeAAAAAZIAAAzIgLAAIAAgHQgFAEgFACQgEACgHAAQgIAAgFgCgAgSARQAAANARgBIAJgBQAEgBAEgDQADgEAAgJIAAgIIgUAAQgSAAABAOg");
	this.shape_32.setTransform(220,90.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6B6B70").s().p("AATA3IAAgvQAAgIgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAIIAAAvIgLAAIAAhtIALAAIAAArQAIgKANAAQAMAAAIAHQAHAIAAAMIAAAxg");
	this.shape_33.setTransform(211.9,88.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6B6B70").s().p("AAKAyQgIAAgEgGQgFgGgBgJIAAgtIgKAAIAAgJIAKAAIAAgYIALAAIAAAYIAPAAIAAAJIgPAAIAAAtQAAALAKAAIAFAAIAAAKg");
	this.shape_34.setTransform(201,89.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6B6B70").s().p("AATAnIAAgvQAAgJgFgFQgFgGgJAAQgIAAgFAGQgFAFAAAJIAAAvIgLAAIAAhMIALAAIAAAJQAIgKANAAQAMABAHAHQAIAIAAANIAAAwg");
	this.shape_35.setTransform(194.2,90.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6B6B70").s().p("AgVAdQgJgJAAgUQAAgRAIgKQAJgLANAAQAPAAAIAKQAIAKAAARIAAAEIgyAAQAAANAGAGQAGAHAJAAQAHAAAEgBQAFgCAEgGIAIAHQgGAHgGACQgGADgKAAQgOAAgJgKgAgKgaQgEADgCAFIgCAHIgBAGIAnAAIAAgGQAAgCgCgEQgCgGgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_36.setTransform(185.7,90.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6B6B70").s().p("AAKAyQgIAAgEgGQgFgGgBgJIAAgtIgKAAIAAgJIAKAAIAAgYIALAAIAAAYIAPAAIAAAJIgPAAIAAAtQAAALAKAAIAFAAIAAAKg");
	this.shape_37.setTransform(178.9,89.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6B6B70").s().p("AATAnIAAgvQAAgJgFgFQgFgGgJAAQgIAAgFAGQgFAFAAAJIAAAvIgLAAIAAhMIALAAIAAAJQAIgKANAAQAMABAHAHQAIAIAAANIAAAwg");
	this.shape_38.setTransform(172.1,90.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B6B70").s().p("AgMAkQgEgBgGgGQgFgFgBgGQgCgIAAgKQAAgJACgHQABgIAFgEQAGgGAEgBQAGgDAGAAQAHAAAFADQAFABAFAGQAFAEACAIQACAHAAAJQAAAKgCAIQgCAGgGAGQgEAEgFACQgFADgHAAQgGAAgGgDgAgMgYQgEAFgCAGIgBANIABAOQACAFAEAGQAFAEAHAAQAIAAAFgEQAEgGACgFQABgGAAgIQAAgHgBgGQgCgGgDgEQgGgFgIAAQgHAAgFAEg");
	this.shape_39.setTransform(163.7,90.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B6B70").s().p("AgTAdQgKgKAAgTQAAgSAKgKQAKgKANAAQAJAAAFADQAGACAFAHIgHAHQgEgFgFgCQgDgCgGAAQgKAAgGAIQgFAHAAANIABAMQABAFAEAGQAFAGAKAAQAGAAADgCQAFgBAEgGIAHAIQgFAGgGACQgFADgJAAQgNAAgKgKg");
	this.shape_40.setTransform(155.9,90.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B6B70").s().p("AgTAxQgHgGgBgHQgCgJAAgKQAAgLACgHQABgIAFgFQAEgEAFgBQAFgCAGgBQAGABAFACQAFABAEAHIAAgrIALAAIAABsIgLAAIAAgJQgEAGgFACQgGADgGgBQgLABgGgHgAgOgEQgEAHAAAOQAAANAEAIQADAHALAAQALABAEgJQAEgHAAgNQAAgOgEgHQgEgIgLABQgKAAgEAHg");
	this.shape_41.setTransform(266.6,67);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6B6B70").s().p("AgVAdQgJgKAAgTQAAgSAIgKQAJgKANAAQAPAAAIAKQAIAJAAASIAAAEIgyAAQAAAMAGAIQAGAGAJAAQAHAAAEgCQAFgCAEgEIAIAGQgGAGgGADQgGADgKAAQgOAAgJgKgAgKgaQgEAEgCADIgCAIIgBAHIAnAAIAAgHQAAgDgCgDQgCgFgFgEQgFgDgGAAQgFAAgFADg");
	this.shape_42.setTransform(258.5,68.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B6B70").s().p("AgbAmIAAgKIAqg3IgnAAIAAgKIA0AAIAAAJIgqA4IAqAAIAAAKg");
	this.shape_43.setTransform(250.8,68.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6B6B70").s().p("AgEA3IAAhLIAJAAIAABLgAgFgpIAAgNIALAAIAAANg");
	this.shape_44.setTransform(245.4,67);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6B6B70").s().p("AAGA3QgJAAgFgFQgFgGAAgJIAAhZIALAAIAABYQAAAGACACQACADAGAAIAGAAIAAAKg");
	this.shape_45.setTransform(241.5,67);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6B6B70").s().p("AgPAlQgEgBgFgFQgFgFAAgKQAAgKAHgGQAGgEANAAIAWAAIAAgHQAAgJgFgFQgEgEgKAAQgHABgEABQgEADgEAEIgHgHQAFgGAGgDQAGgCAJAAQAeAAAAAaIAAAyIgLAAIAAgHQgEAEgFACQgGACgGAAQgIAAgFgCgAgTAQQAAAOASAAIAJgCQAEAAADgEQAEgDAAgKIAAgIIgVAAQgRAAAAANg");
	this.shape_46.setTransform(234.5,68.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6B6B70").s().p("AATAmIAAgtQAAgKgFgGQgFgEgJAAQgIAAgFAEQgFAGAAAKIAAAtIgLAAIAAhKIALAAIAAAIQAIgKANAAQAMAAAHAIQAIAHAAAOIAAAvg");
	this.shape_47.setTransform(226.3,68.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6B6B70").s().p("AgLAkQgGgCgEgEQgGgGgBgHQgCgGAAgLQAAgJACgIQABgHAGgFQAEgEAGgDQAFgCAGAAQAHAAAFACQAFADAGAEQAEAFACAHQACAIAAAJQAAAKgCAHQgCAIgGAFQgEAEgFACQgFADgHAAQgGAAgFgDgAgMgXQgEAEgCAHIgBAMIABAOQACAGAEAEQAEAFAIAAQAJAAAEgFQAEgEABgGQACgGAAgIQAAgHgCgGQgBgGgDgDQgGgGgIAAQgIAAgEAFg");
	this.shape_48.setTransform(217.9,68.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6B6B70").s().p("AgQAkQgHgCgHgGIAIgHQAEAEAGACQAFADAHAAQAKAAAFgEQAGgEgBgGQAAgKgMgBIgMgBQgLAAgFgFQgHgFAAgKQABgKAHgGQAIgGALAAQASAAAKAJIgIAHQgHgHgNAAQgHAAgEADQgFAEAAAGQAAAFAEADQACADAIAAIALABQAKABAGAEQAGAEAAAKQAAAMgIAGQgIAGgPAAQgJAAgHgDg");
	this.shape_49.setTransform(209.9,68.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6B6B70").s().p("AgYAmIAAhKIALAAIAAAJQADgFAGgCQAEgDAHgBQAGAAAEACQAEABAEAEIgIAJIgGgEIgHgBQgHgBgFAGQgFAGAAAJIAAAtg");
	this.shape_50.setTransform(203.5,68.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6B6B70").s().p("AgVAdQgJgKAAgTQAAgSAIgKQAJgKANAAQAPAAAIAKQAIAJAAASIAAAEIgyAAQAAAMAGAIQAGAGAJAAQAHAAAEgCQAFgCAEgEIAIAGQgGAGgGADQgGADgKAAQgOAAgJgKgAgKgaQgEAEgCADIgCAIIgBAHIAnAAIAAgHQAAgDgCgDQgCgFgFgEQgFgDgGAAQgFAAgFADg");
	this.shape_51.setTransform(195.5,68.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6B6B70").s().p("AgdA4IAAhtIALAAIAAAJQAEgGAFgCQAFgCAGgBQAMABAGAFQAGAHACAIQACAHAAAMQAAAKgCAIQgCAHgFAGIgIAFQgFABgGAAQgGAAgFgBQgFgDgEgGIAAAsgAgOglQgEAIAAAOQAAANAEAHQADAHALAAQALABAEgJQAEgGAAgNQAAgOgEgIQgEgIgLABQgKAAgEAHg");
	this.shape_52.setTransform(187.4,70.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6B6B70").s().p("AAKAyQgIAAgEgGQgGgGAAgJIAAgtIgKAAIAAgJIAKAAIAAgYIAKAAIAAAYIAQAAIAAAJIgQAAIAAAtQABALAJAAIAGAAIAAAKg");
	this.shape_53.setTransform(176.5,67.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6B6B70").s().p("AgPAlQgEgBgFgFQgFgFAAgKQAAgKAHgGQAGgEANAAIAWAAIAAgHQAAgJgFgFQgEgEgKAAQgHABgEABQgEADgEAEIgHgHQAEgGAHgDQAGgCAJAAQAeAAAAAaIAAAyIgLAAIAAgHQgEAEgFACQgGACgGAAQgIAAgFgCgAgTAQQAAAOASAAIAJgCQAEAAADgEQAEgDAAgKIAAgIIgVAAQgRAAAAANg");
	this.shape_54.setTransform(169.7,68.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6B6B70").s().p("AATA3IAAgvQAAgIgFgGQgFgFgJAAQgIAAgFAFQgFAGAAAIIAAAvIgLAAIAAhtIALAAIAAAqQAIgJANAAQAMAAAIAIQAHAHAAAMIAAAxg");
	this.shape_55.setTransform(161.5,67);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6B6B70").s().p("AALAyQgJAAgFgGQgEgGAAgJIAAgtIgKAAIAAgJIAKAAIAAgYIAKAAIAAAYIAQAAIAAAJIgQAAIAAAtQgBALAKAAIAHAAIAAAKg");
	this.shape_56.setTransform(154.5,67.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6B6B70").s().p("AgaA2IAAgKIADAAQAGAAADgCQACgBACgGIAFgPIgbhJIAMAAIAUA8IAVg8IAMAAIgiBdQgCAGgDADQgDADgEABIgIABg");
	this.shape_57.setTransform(268.8,48.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6B6B70").s().p("AgPAmQgFgCgFgFQgEgFAAgKQAAgJAGgGQAIgGAMAAIAWAAIAAgHQAAgIgEgEQgFgFgKAAQgHAAgEADQgEACgDAEIgIgGQAFgHAGgCQAGgDAJAAQAeAAAAAZIAAAzIgLAAIAAgHQgFAEgFACQgEACgHAAQgIAAgFgBgAgSAQQAAANARABIAJgBQAEgBAEgEQADgDAAgKIAAgIIgUAAQgSAAABANg");
	this.shape_58.setTransform(261,46.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6B6B70").s().p("AgQAlQgIgDgGgGIAIgHQAEAEAGACQAFACAHABQAKgBAFgDQAGgEAAgGQAAgKgNgCIgMAAQgKgBgGgEQgGgFgBgJQAAgLAIgGQAIgGALAAQASAAAKAIIgHAHQgJgFgMgBQgHAAgFAEQgDADAAAGQAAAFADADQACADAHAAIAMABQALABAFAEQAGAFAAAJQAAALgIAHQgIAGgPAAQgIAAgIgCg");
	this.shape_59.setTransform(253.3,46.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6B6B70").s().p("AgQAlQgHgDgHgGIAHgHQAFAEAFACQAHACAGABQAKgBAFgDQAFgEABgGQAAgKgNgCIgMAAQgKgBgHgEQgFgFAAgJQgBgLAIgGQAIgGAMAAQARAAAKAIIgHAHQgIgFgMgBQgIAAgFAEQgDADAAAGQAAAFACADQAEADAGAAIAMABQALABAFAEQAGAFAAAJQAAALgIAHQgIAGgOAAQgJAAgIgCg");
	this.shape_60.setTransform(241.8,46.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6B6B70").s().p("AgYAmIAAhKIALAAIAAAJQADgFAGgDQAEgCAHAAQAGgBAEACQAEACAEAEIgIAIIgGgFIgHAAQgHAAgFAFQgFAGAAAJIAAAtg");
	this.shape_61.setTransform(235.4,46.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6B6B70").s().p("AgVAdQgJgJAAgUQAAgRAIgLQAJgKANAAQAPAAAIAKQAIAKAAARIAAAEIgyAAQAAANAGAGQAGAHAJAAQAHAAAEgBQAFgCAEgFIAIAGQgGAHgGACQgGADgKAAQgOAAgJgKgAgKgZQgEADgCADIgCAIIgBAGIAnAAIAAgGQAAgDgCgDQgCgFgFgDQgFgEgGAAQgFAAgFAEg");
	this.shape_62.setTransform(227.4,46.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6B6B70").s().p("AArAmIAAguQAAgJgFgGQgFgEgIAAQgJAAgFAEQgFAFAAAJIAAAvIgLAAIAAguQAAgJgFgGQgEgEgJAAQgJAAgFAEQgFAGAAAJIAAAuIgLAAIAAhKIALAAIAAAIQAIgJANAAQAQAAAHAMQAJgMAQAAQAGAAAFACQAFABAFAGQAGAGAAANIAAAvg");
	this.shape_63.setTransform(216.5,46.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6B6B70").s().p("AgWAfQgHgHAAgOIAAgvIALAAIAAAtQAAAKAFAGQAFAEAIAAQAJABAFgGQAFgFAAgKIAAgtIALAAIAABKIgLAAIAAgIQgIAKgNgBQgMABgIgIg");
	this.shape_64.setTransform(205.3,47);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6B6B70").s().p("AgQAlQgHgDgHgGIAIgHQAEAEAGACQAFACAHABQAKgBAFgDQAFgEABgGQAAgKgNgCIgMAAQgKgBgHgEQgFgFgBgJQAAgLAIgGQAIgGAMAAQARAAAKAIIgHAHQgJgFgLgBQgIAAgFAEQgDADAAAGQAAAFADADQADADAGAAIAMABQALABAFAEQAGAFAAAJQAAALgIAHQgIAGgOAAQgJAAgIgCg");
	this.shape_65.setTransform(197.1,46.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6B6B70").s().p("AATAmIAAguQAAgJgFgGQgFgEgJAAQgIAAgFAEQgFAGAAAJIAAAuIgLAAIAAhKIALAAIAAAIQAIgJANAAQAMAAAHAHQAIAIAAANIAAAvg");
	this.shape_66.setTransform(189,46.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6B6B70").s().p("AgMAlQgFgCgFgFQgEgFgCgHQgCgIAAgKQAAgJACgHQACgIAEgFQAFgEAFgCQAGgDAGAAQAHAAAFADQAGACAEAEQAFAFACAIQACAGAAAKQAAAKgCAIQgCAGgGAGQgDAFgGACQgFACgHAAQgGAAgGgCgAgMgXQgFAEgBAGIgBANIABAOQABAFAFAFQAEAFAIAAQAIAAAFgFQAFgFABgFQABgGAAgIQAAgHgBgGQgBgGgEgEQgGgFgIAAQgIAAgEAFg");
	this.shape_67.setTransform(180.6,46.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6B6B70").s().p("AgTAdQgKgKAAgTQAAgSAKgKQAJgKAOAAQAJAAAFADQAFACAHAHIgIAGQgFgFgEgBQgDgCgGAAQgKAAgGAHQgFAJAAAMIABAMQABAFAEAGQAFAGAKAAQAGAAADgCQAEgCAFgEIAIAHQgHAGgFADQgFACgJAAQgOAAgJgKg");
	this.shape_68.setTransform(172.8,46.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6B6B70").s().p("AgIA3IAAhCIgKAAIAAgIIAKAAIAAgPQAAgIAFgGQAEgGAJAAIAJAAIAAAKIgHAAQgKAAAAALIAAAOIARAAIAAAIIgRAAIAABCg");
	this.shape_69.setTransform(162.7,45.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6B6B70").s().p("AgLAlQgGgCgFgFQgFgFgBgHQgCgIAAgKQAAgJACgHQABgIAFgFQAFgEAGgCQAFgDAGAAQAHAAAFADQAFACAFAEQAFAFACAIQACAGAAAKQAAAKgCAIQgCAGgGAGQgEAFgFACQgFACgHAAQgGAAgFgCgAgMgXQgFAEgBAGIgBANIABAOQABAFAFAFQAEAFAIAAQAJAAAEgFQAEgFABgFQACgGAAgIQAAgHgCgGQgBgGgDgEQgFgFgJAAQgIAAgEAFg");
	this.shape_70.setTransform(156.1,46.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAvB7QgQgNAAgZIAAglQAAgZAQgNQAPgNAYAAQAYAAAPAMQAQAOAAAZIAAAlQAAAZgQANQgPAOgYAAQgYAAgPgOgABDAxIAAAjQAAAVATAAQATAAAAgVIAAgjQAAgVgTAAQgTAAAAAVgAhSCHIB/kNIAmAAIh+ENgAh8gIQgQgOAAgZIAAglQAAgYAQgOQAQgOAXAAQAYAAAQAOQAPANAAAZIAAAlQAAAZgQANQgPANgYAAQgYAAgPgMgAhohTIAAAjQAAAVATAAQATAAAAgVIAAgjQAAgVgTAAQgTAAAAAVg");
	this.shape_71.setTransform(105.4,93);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Ag9B0QgZgVAAgnQAAgWAKgOQAKgPAOgIQgMgJgJgOQgJgNAAgUQAAgjAYgVQAYgVAiAAQAjAAAXAVQAYAVAAAjQABAUgKANQgIAOgNAJQAOAIAKAPQALAOAAAWQAAAmgZAWQgYAVgmAAQglAAgYgVgAgaAdQgKALAAAQQAAAPAKALQALALAPAAQAQAAALgLQAKgLAAgPQAAgQgKgLQgLgLgQAAQgOAAgMALgAgYhSQgJAKAAAOQAAAPAJAKQAKAJAOAAQAPAAAJgJQAJgKAAgPQAAgOgJgKQgKgKgOAAQgOAAgKAKg");
	this.shape_72.setTransform(79.2,93);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ag2CHIBWjgIhGAAIAAAqIgvAAIAAhXICrAAIAAAtIhXDgg");
	this.shape_73.setTransform(58.8,93);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EFBE37").s().p("Ag+EUIAAonIB9AAIAAIng");
	this.shape_74.setTransform(23.7,95);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EFBE37").s().p("Ah6GJQg0gZhMg4QhVg/ghgSQhBglg9AAIAAmrIA0gTQA+gdA2g2QAXgXAigbIA8gsIFkAAQgmA4gNAXQgWAlAKAVQAIARA6AEQAYACBdAAIBzABQAkACAfAVQAjAZAJAmQAGAbgJAcQgKAhgaAVQAqAmgOBDQgQBJhKASQAaA9gpA3QgmAyg4ABQAAA8hQAqQhJAmheAAQhQAAhOglg");
	this.shape_75.setTransform(85.3,96.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CFCFCF").s().p("AhBEWIAAosICDAAIAAIsg");
	this.shape_76.setTransform(23.9,94.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CFCFCF").s().p("Ah5I7Qg0gZhMg4QhUg/ghgSQhCglg9AAIAAmrIA0gTQA+gdA1g2QAxgxBWg6QBhhBAOgMQBNhCAfhnQAMguAHgQQAKgaASgGQAsgOApA6QAqA8AABaQAABNhFBnQgkA1gHANQgQAfAJATQAIARA6AEQAYACBdAAIBzABQAkACAfAVQAjAZAJAmQAGAagJAcQgKAhgZAVQAqAmgPBEQgPBJhLASQAbA9gpA3QgnAyg3ABQAAA8hQAqQhJAmheAAQhQAAhNglg");
	this.shape_77.setTransform(85.4,79);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("ArBDYIoVAAQhnAAhIhIQhIhIAAhmIAA0IQAAhdBIgkQA3gbB4AAMAmtAAAQB4AAA3AbQBIAkAABdIAAUIQAABmhIBIQhIBIhnAAI6OAAIiOTrg");
	this.shape_78.setTransform(148.6,147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297.2,295);


(lib.endcontentai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(802.9,360.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQAEADADAAQAEAAAEgDQADgCAAgFQAAgFgDgDQgDgCgFgCIgEgCIgKgEQgEgCgFgFQgEgFAAgLQAAgMAJgIQAHgJAMAAQALAAAIAJQAHAIABALIgSAAQAAgEgEgDQgCgDgEAAQgDAAgDAEQgDADAAAEQAAAEADADQADACAEACIAGACIAIAEIAHAEIAFAJQACAFAAAFQAAAMgJAJQgIAJgLAAQgHAAgHgEg");
	this.shape_1.setTransform(797.6,356.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA9QgEgHAAgDIAAgIIAAgzQAAgJAGgGQAFgGAKAAQAFAAAEADQAFADADAEIAAgwIATAAIAACGIgTAAIAAgKQgDAFgFADQgEADgFAAQgNAAgEgHgAgFgJQAAABgBAAQAAAAgBABQAAAAAAABQAAAAAAABIgBAEIAAADIAAAiIAAAEIABAGQACADAFAAQAGAAACgEQACgDAAgEIAAgDIAAgjIAAgDQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgDgEgFAAIgFABg");
	this.shape_2.setTransform(790.5,354.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAtQgIgEgCgGQgDgFgBgFIAAgIIAAgkQAAgLAJgJQAIgKALABQANgBAIAKQAIAIAAAMIAAAaIgmAAIAAAPQABADACACQADADADAAQAEAAACgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgGgEgAgGgbQgCADgBAGIAAAKIASAAIAAgKQAAgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_3.setTransform(783.3,356.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgLAJgJQAIgKALABQAMgBAIAKQAJAIAAAMIAAAaIglAAIAAAPQgBADADACQADADADAAQAEAAACgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgIgEgAgGgbQgDADABAGIAAAKIASAAIAAgKQgBgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_4.setTransform(776.1,356.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAJAxIAAhDQAAgLgJABQgEAAgCADQgCADgBAEIAABDIgTAAIAAhfIATAAIAAAJQAHgLAKAAQAMAAAGAKIACAGIABAHIAABKg");
	this.shape_5.setTransform(768.8,356.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQAEADADAAQAEAAAEgDQADgCAAgFQAAgFgDgDQgDgCgFgCIgEgCIgKgEQgDgCgGgFQgEgFAAgLQAAgMAJgIQAHgJAMAAQALAAAHAJQAJAIAAALIgSAAQAAgEgDgDQgDgDgEAAQgEAAgCAEQgDADAAAEQAAAEADADQACACAFACIAGACIAJAEIAGAEIAFAJQACAFAAAFQAAAMgJAJQgIAJgLAAQgHAAgHgEg");
	this.shape_6.setTransform(758.1,356.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQAEADADAAQAEAAADgDQAEgCAAgFQAAgFgDgDQgCgCgGgCIgDgCIgKgEQgFgCgEgFQgFgFAAgLQAAgMAIgIQAJgJALAAQALAAAIAJQAHAIAAALIgSAAQAAgEgDgDQgCgDgEAAQgEAAgCAEQgDADAAAEQAAAEADADQACACAEACIAHACIAIAEIAHAEIAFAJQACAFAAAFQAAAMgIAJQgJAJgMAAQgFAAgIgEg");
	this.shape_7.setTransform(751.4,356.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFAAgFIgBgIIAAgkQAAgLAIgJQAJgKALABQAMgBAIAKQAJAIAAAMIAAAaIglAAIAAAPQAAADACACQADADADAAQAEAAACgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgHgEgAgGgbQgCADAAAGIAAAKIASAAIAAgKQgBgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_8.setTransform(744.5,356.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJAxIAAhDQAAgLgJABQgEAAgCADQgCADAAAEIAABDIgUAAIAAhfIAUAAIAAAJQAGgLALAAQALAAAGAKIACAGIABAHIAABKg");
	this.shape_9.setTransform(737.2,356.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_10.setTransform(731.6,354.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQADADAEAAQAEAAADgDQAEgCAAgFQAAgFgDgDQgCgCgGgCIgEgCIgJgEQgFgCgFgFQgEgFAAgLQAAgMAIgIQAIgJAMAAQALAAAIAJQAHAIABALIgSAAQAAgEgEgDQgCgDgEAAQgEAAgCAEQgDADAAAEQAAAEADADQADACAEACIAGACIAIAEIAHAEIAFAJQACAFAAAFQAAAMgIAJQgJAJgLAAQgHAAgHgEg");
	this.shape_11.setTransform(726.4,356.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAuQgFgEgCgEIgDgHIAAgHIAAhIIATAAIAABAIABAFQAAACACADQACADAEAAIAFgBIADgDIABgFIABgEIAAhAIATAAIAABgIgTAAIAAgKQgEAFgEADQgDADgGAAQgGAAgFgDg");
	this.shape_12.setTransform(719.3,356.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBBBQgEgDgEgFIAAAKIgTAAIAAiGIATAAIAAAxQAHgLALAAQAMAAADAGQAEAGAAAEIABAGIAAA0IgBAIQAAAEgFAGQgEAFgLAAQgFAAgEgDgAgGgHQgDAEAAADIAAAmQAAAEACAEQACADAFAAQAEAAADgDQADgCAAgDIAAgpQAAgEgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_13.setTransform(711.8,354.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgLAJgJQAIgKALABQANgBAHAKQAJAIAAAMIAAAaIglAAIAAAPQgBADADACQADADADAAQADAAADgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgIgEgAgGgbQgDADABAGIAAAKIASAAIAAgKQgBgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_14.setTransform(701,356.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAuQgFgEgCgEIgDgHIAAgHIAAhIIATAAIAABAIABAFQAAACACADQACADAEAAIAFgBIADgDIABgFIABgEIAAhAIATAAIAABgIgTAAIAAgKQgEAFgEADQgDADgGAAQgGAAgFgDg");
	this.shape_15.setTransform(693.6,356.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKBEIAAgwQgEAFgEADQgEADgGAAQgFAAgFgDQgFgDgCgEIgDgGIAAgHIAAg2QAAgJAGgGQAGgGAIAAQALAAAHALIAAgKIATAAIAACGgAgGgtQgCADAAAFIAAAlIAAADIACAFQACADAEAAQAGAAACgDIABgFIABgDIAAglQAAgFgDgDQgDgDgEAAQgEAAgCADg");
	this.shape_16.setTransform(686,358.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_17.setTransform(680.5,354.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAJAxIAAhDQAAgLgJABQgDAAgDADQgDADABAEIAABDIgUAAIAAhfIAUAAIAAAJQAGgLALAAQALAAAGAKIACAGIABAHIAABKg");
	this.shape_18.setTransform(675,356.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAuQgFgEgCgEIgDgHIAAgHIAAhIIATAAIAABAIABAFQAAACACADQACADAEAAIAFgBIADgDIABgFIABgEIAAhAIATAAIAABgIgTAAIAAgKQgEAFgEADQgDADgGAAQgGAAgFgDg");
	this.shape_19.setTransform(667.4,356.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAxIAAhfIATAAIAAAKQAEgHAIgCQAHgDAFAAIAAAUIgCAAIgDAAQgKAAgFAFQgEAHAAAJIAAA4g");
	this.shape_20.setTransform(657.5,356.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSAuQgFgEgCgEIgDgHIAAgHIAAhIIATAAIAABAIABAFQAAACACADQACADAEAAIAFgBIADgDIABgFIABgEIAAhAIATAAIAABgIgTAAIAAgKQgEAFgEADQgDADgGAAQgGAAgFgDg");
	this.shape_21.setTransform(650.6,356.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFAAgEIgBgHIAAgmQAAgLAGgHQAEgGAGgDQAGgCAGAAQAHAAAGACQAGADAFAHQAFAGAAALIAAAmQAAALgFAGQgEAHgHAEQgGADgGAAQgIAAgHgFgAgGgbQgCAEAAAEIAAAmQAAAFACADQADADAEAAQAFAAACgEQABgDABgFIAAglQgBgEgCgEQgCgDgEAAQgEAAgDADg");
	this.shape_22.setTransform(643.3,356.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZBEIAAgSIAEAAQAEAAADgDQADgBABgEIAEgRIgbhbIAVAAIAMA7IANg7IAVAAIgcBvQgDALgGAGQgHAGgLAAg");
	this.shape_23.setTransform(636.3,358.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAPA/IgKgBIgIgEQgEgEgCgEQgBgFAAgFIAAg6IgKAAIAAgOIAKAAIAAgeIASAAIAAAeIANAAIAAAOIgNAAIAAA2QAAAFACACQABACAFgBIAFAAIAAATg");
	this.shape_24.setTransform(626.8,354.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_25.setTransform(622.8,354.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLBEIAAhQIgJAAIAAgQIAJAAIAAgNQAAgMAFgFQAGgGAEgBQAFgCAGAAIAGAAIAAASIgGAAQgIAAABAIIAAANIANAAIAAAQIgNAAIAABQg");
	this.shape_26.setTransform(618.7,354.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFAAgEIgBgHIAAgmQAAgLAGgHQAEgGAGgDQAGgCAGAAQAHAAAGACQAGADAFAHQAFAGAAALIAAAmQAAALgFAGQgEAHgHAEQgGADgGAAQgIAAgHgFgAgGgbQgCAEAAAEIAAAmQAAAFACADQADADAEAAQAFAAACgEQABgDABgFIAAglQgBgEgCgEQgCgDgEAAQgEAAgDADg");
	this.shape_27.setTransform(609.1,356.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPA/IgKgBIgHgEQgEgEgDgEQgBgFAAgFIAAg6IgJAAIAAgOIAJAAIAAgeIASAAIAAAeIANAAIAAAOIgNAAIAAA2QABAFABACQABACAFgBIAFAAIAAATg");
	this.shape_28.setTransform(602.8,354.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQAEADADAAQAEAAAEgDQADgCAAgFQAAgFgDgDQgDgCgFgCIgEgCIgKgEQgEgCgFgFQgEgFAAgLQAAgMAJgIQAHgJAMAAQALAAAIAJQAHAIABALIgSAAQAAgEgEgDQgCgDgEAAQgDAAgDAEQgDADAAAEQAAAEADADQADACAEACIAGACIAIAEIAHAEIAFAJQACAFAAAFQAAAMgJAJQgIAJgLAAQgHAAgHgEg");
	this.shape_29.setTransform(593.8,356.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAKAxIAAhDQAAgLgKABQgDAAgDADQgDADABAEIAABDIgUAAIAAhfIAUAAIAAAJQAGgLALAAQALAAAGAKIADAGIAAAHIAABKg");
	this.shape_30.setTransform(586.7,356.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFAAgEIgBgHIAAgmQAAgLAHgHQADgGAHgDQAFgCAGAAQAIAAAFACQAGADAFAHQAFAGAAALIAAAmQAAALgEAGQgFAHgGAEQgHADgGAAQgIAAgHgFgAgGgbQgCAEgBAEIAAAmQABAFACADQADADADAAQAGAAACgEQABgDAAgFIAAglQABgEgDgEQgDgDgEAAQgDAAgDADg");
	this.shape_31.setTransform(579.3,356.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_32.setTransform(573.9,354.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPA/IgKgBIgHgEQgFgEgCgEQgBgFAAgFIAAg6IgJAAIAAgOIAJAAIAAgeIASAAIAAAeIAMAAIAAAOIgMAAIAAA2QABAFABACQABACAFgBIAEAAIAAATg");
	this.shape_33.setTransform(569.4,354.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSAuQgFgEgCgEIgDgHIAAgHIAAhIIATAAIAABAIABAFQAAACACADQACADAEAAIAFgBIADgDIABgFIABgEIAAhAIATAAIAABgIgTAAIAAgKQgEAFgEADQgDADgGAAQgGAAgFgDg");
	this.shape_34.setTransform(563.5,356.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AALBEIgJgBQgEgBgDgDQgFgEgCgFQgBgEAAgGIAAhvIASAAIAABrQAAAFABACQACACAFAAIABAAIAAATg");
	this.shape_35.setTransform(557.9,354.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFAAgEIgBgHIAAgmQAAgLAGgHQAFgGAFgDQAGgCAGAAQAHAAAGACQAGADAFAHQAFAGAAALIAAAmQAAALgEAGQgGAHgGAEQgGADgGAAQgIAAgHgFgAgGgbQgDAEABAEIAAAmQgBAFADADQADADAEAAQAFAAACgEQABgDABgFIAAglQgBgEgCgEQgDgDgDAAQgEAAgDADg");
	this.shape_36.setTransform(552,356.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQADADAEAAQAEAAADgDQAEgCAAgFQAAgFgDgDQgDgCgFgCIgEgCIgKgEQgEgCgEgFQgFgFAAgLQAAgMAIgIQAIgJAMAAQALAAAIAJQAHAIABALIgSAAQAAgEgEgDQgCgDgEAAQgEAAgCAEQgDADAAAEQAAAEADADQACACAFACIAGACIAIAEIAHAEIAFAJQACAFAAAFQAAAMgIAJQgJAJgLAAQgHAAgHgEg");
	this.shape_37.setTransform(545.1,356.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAOA/IgJgBIgIgEQgDgEgDgEQgBgFAAgFIAAg6IgKAAIAAgOIAKAAIAAgeIASAAIAAAeIANAAIAAAOIgNAAIAAA2QAAAFACACQABACAFgBIAFAAIAAATg");
	this.shape_38.setTransform(535.5,354.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJAxIAAhDQAAgLgJABQgDAAgDADQgDADABAEIAABDIgUAAIAAhfIAUAAIAAAJQAGgLALAAQALAAAGAKIACAGIABAHIAABKg");
	this.shape_39.setTransform(529.6,356.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgLAJgJQAIgKALABQAMgBAIAKQAJAIAAAMIAAAaIglAAIAAAPQgBADADACQADADADAAQAEAAACgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgIgEgAgGgbQgDADABAGIAAAKIASAAIAAgKQgBgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_40.setTransform(522.3,356.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAdAxIAAhDQAAgFgDgDQgCgDgEAAQgFAAgCADQgDADAAAFIAABDIgTAAIAAhDQAAgFgDgDQgCgDgFAAQgEAAgCADQgDADAAAFIAABDIgUAAIAAhfIAUAAIAAAIQAHgKALAAQAGAAAEADQADACADAFQAFgFAEgCQAFgDAFAAQAKAAAHAHQAGAHABAKIAABJg");
	this.shape_41.setTransform(513,356.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgZBEIAAgSIAEAAQAEAAADgDQADgBABgEIAEgRIgbhbIAVAAIAMA7IANg7IAVAAIgcBvQgDALgGAGQgHAGgLAAg");
	this.shape_42.setTransform(503.9,358.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgaAnIgCgGIAAgHIAAgLQAAgKAFgFQAGgFAEgCQAEgCAHAAIALAAIAAgIIAAgFIgCgFQgDgCgEAAQgCAAgEACQgCADgBAEIgTAAQAAgMAJgIQAHgIAMAAQALAAAJAIQAJAIAAAMIAABFIgUAAIAAgKQgDAFgEADQgEADgGAAQgMgBgGgKgAgGAIQgCACgBAFIAAAFQABAEACADQADADADAAIAFgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBIABgFIAAgFIAAgJIgHAAQgEAAgEACg");
	this.shape_43.setTransform(496.9,356.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgcBEIAAiGIATAAIAAAKQAEgFAEgDQAEgDAGAAQAIAAAGAGQAGAHAAAIIAAA3IgBAHIgFAJQgEAGgKAAQgLAAgHgLIAAAwgAgGgtQgDADAAAFIAAAmQAAAEADADQACADAFAAQAFAAACgDIACgHIAAgmQAAgFgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_44.setTransform(489.7,358.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLBEIAAhQIgJAAIAAgQIAJAAIAAgNQAAgMAFgFQAGgGAEgBQAFgCAGAAIAGAAIAAASIgGAAQgIAAABAIIAAANIANAAIAAAQIgNAAIAABQg");
	this.shape_45.setTransform(480.1,354.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFgBgEIAAgHIAAgmQAAgLAHgHQADgGAHgDQAFgCAGAAQAHAAAGACQAGADAFAHQAFAGAAALIAAAmQAAALgEAGQgFAHgGAEQgHADgGAAQgIAAgHgFgAgGgbQgCAEgBAEIAAAmQABAFACADQADADADAAQAGAAACgEQACgDgBgFIAAglQABgEgDgEQgCgDgFAAQgDAAgDADg");
	this.shape_46.setTransform(474,356.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAwIgNgeIgMAeIgVAAIAZgxIgXguIAUAAIALAbIANgbIAUAAIgXAuIAYAxg");
	this.shape_47.setTransform(463.7,356.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_48.setTransform(458.6,354.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAdAxIAAhDQAAgFgDgDQgCgDgFAAQgDAAgDADQgDADAAAFIAABDIgTAAIAAhDQAAgFgCgDQgDgDgEAAQgEAAgDADQgDADAAAFIAABDIgTAAIAAhfIATAAIAAAIQAHgKAMAAQAEAAAFADQAEACADAFQADgFAFgCQAFgDAGAAQAKAAAGAHQAHAHAAAKIAABJg");
	this.shape_49.setTransform(451.1,356.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAPA/IgLgBIgGgEQgFgEgBgEQgCgFAAgFIAAg6IgJAAIAAgOIAJAAIAAgeIATAAIAAAeIALAAIAAAOIgLAAIAAA2QgBAFACACQABACAFgBIAEAAIAAATg");
	this.shape_50.setTransform(439.2,354.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAKBEIAAhDQAAgEgCgDQgDgDgEAAQgEAAgDADQgCADAAADIAABEIgUAAIAAiHIAUAAIAAAxQAGgKAMAAQAFAAAEACQAFADACAEIACAGIABAHIAABKg");
	this.shape_51.setTransform(433.2,354.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgUA9QgIgJAAgMIATAAQAAAEADACQACADAEAAQAGAAADgFIABgHIAAgSQgDAFgFADQgEADgFAAQgGAAgGgDQgEgDgCgEIgDgGIAAgIIAAg0IAAgHIAGgJQAEgGALAAQAFAAAEADQAEADAEAFIAAgJIATAAIAABnIgBAKQgBAFgDAEQgDAGgHADQgGAEgHAAQgLAAgKgIgAgGguIgDAFIAAAEIAAAlIAAADIADAFQACADAFAAQAGAAABgEIACgFIAAgCIAAgjIAAgFIgCgEQgDgFgFAAQgFAAgBADg");
	this.shape_52.setTransform(425.7,358.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_53.setTransform(420.3,354.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgVAxIAAhfIATAAIAAAKQAEgHAIgCQAHgDAFAAIAAAUIgCAAIgDAAQgKAAgFAFQgEAHAAAJIAAA4g");
	this.shape_54.setTransform(415.8,356.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFAAgFIgBgIIAAgkQAAgLAIgJQAJgKALABQAMgBAIAKQAJAIAAAMIAAAaIglAAIAAAPQAAADACACQADADADAAQAEAAACgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgHgEgAgGgbQgCADAAAGIAAAKIASAAIAAgKQgBgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_55.setTransform(405.7,356.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAKBEIAAhDQgBgEgCgDQgCgDgEAAQgEAAgCADQgDADgBADIAABEIgTAAIAAiHIATAAIAAAxQAIgKALAAQAEAAAGACQAEADACAEIADAGIAAAHIAABKg");
	this.shape_56.setTransform(398.3,354.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAOA/IgJgBIgIgEQgEgEgCgEQgBgFAAgFIAAg6IgKAAIAAgOIAKAAIAAgeIASAAIAAAeIANAAIAAAOIgNAAIAAA2QAAAFACACQABACAFgBIAFAAIAAATg");
	this.shape_57.setTransform(391.9,354.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVAxIAAhfIATAAIAAAKQAEgHAIgCQAHgDAFAAIAAAUIgCAAIgDAAQgKAAgFAFQgEAHAAAJIAAA4g");
	this.shape_58.setTransform(383.5,356.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgOAtQgIgEgCgGQgDgFgBgFIAAgIIAAgkQAAgLAJgJQAIgKALABQANgBAIAKQAIAIAAAMIAAAaIgmAAIAAAPQABADACACQADADADAAQAEAAACgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgGgEgAgGgbQgCADgBAGIAAAKIASAAIAAgKQAAgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_59.setTransform(376.9,356.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgIAwIgZhfIAVAAIAMA9IANg9IAVAAIgaBfg");
	this.shape_60.setTransform(370,356.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_61.setTransform(364.8,354.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AALBEIgJgBQgEgBgEgDQgDgEgDgFQgCgEAAgGIAAhvIATAAIAABrQAAAFACACQABACAFAAIABAAIAAATg");
	this.shape_62.setTransform(361.2,354.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgLAJgJQAIgKALABQANgBAHAKQAJAIAAAMIAAAaIglAAIAAAPQgBADADACQADADADAAQAEAAACgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgIgEgAgGgbQgDADABAGIAAAKIASAAIAAgKQgBgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_63.setTransform(355.4,356.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgYA9QgDgHgBgDIAAgIIAAgzQAAgJAGgGQAGgGAIAAQAGAAAEADQAEADADAEIAAgwIAUAAIAACGIgUAAIAAgKQgDAFgEADQgDADgHAAQgNAAgDgHgAgEgJQgBABgBAAQAAAAgBABQAAAAAAABQAAAAgBABIgBAEIAAADIAAAiIAAAEIACAGQACADAFAAQAGAAACgEQABgDAAgEIAAgDIAAgjIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgDgEgFAAIgEABg");
	this.shape_64.setTransform(348,354.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFgBgEIAAgHIAAgmQAAgLAGgHQAEgGAGgDQAGgCAGAAQAIAAAFACQAGADAFAHQAFAGAAALIAAAmQAAALgFAGQgEAHgHAEQgGADgGAAQgIAAgHgFgAgGgbQgCAEAAAEIAAAmQAAAFACADQADADAEAAQAFAAACgEQACgDAAgFIAAglQAAgEgDgEQgCgDgEAAQgEAAgDADg");
	this.shape_65.setTransform(337.2,356.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAPA/IgKgBIgHgEQgFgEgCgEQgBgFAAgFIAAg6IgJAAIAAgOIAJAAIAAgeIASAAIAAAeIAMAAIAAAOIgMAAIAAA2QABAFABACQABACAFgBIAEAAIAAATg");
	this.shape_66.setTransform(330.9,354.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgOAtQgIgEgCgGQgDgFgBgFIAAgIIAAgkQAAgLAIgJQAJgKALABQAMgBAJAKQAIAIAAAMIAAAaIgmAAIAAAPQAAADADACQADADADAAQADAAADgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgGgEgAgGgbQgDADAAAGIAAAKIASAAIAAgKQAAgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_67.setTransform(321.7,356.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQADADAEAAQAFAAACgDQAEgCAAgFQAAgFgDgDQgDgCgFgCIgDgCIgKgEQgFgCgEgFQgFgFAAgLQAAgMAIgIQAJgJALAAQALAAAHAJQAJAIgBALIgSAAQAAgEgCgDQgDgDgEAAQgDAAgDAEQgDADAAAEQAAAEADADQADACADACIAHACIAJAEIAGAEIAFAJQACAFAAAFQAAAMgJAJQgIAJgMAAQgFAAgIgEg");
	this.shape_68.setTransform(314.7,356.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_69.setTransform(309.5,354.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAPA/IgLgBIgGgEQgFgEgBgEQgCgFAAgFIAAg6IgJAAIAAgOIAJAAIAAgeIATAAIAAAeIALAAIAAAOIgLAAIAAA2QgBAFACACQABACAFgBIAEAAIAAATg");
	this.shape_70.setTransform(305.1,354.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgVAxIAAhfIATAAIAAAKQAEgHAIgCQAHgDAFAAIAAAUIgCAAIgDAAQgKAAgFAFQgEAHAAAJIAAA4g");
	this.shape_71.setTransform(300.3,356.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgOAtQgIgEgCgGQgDgFgBgFIAAgIIAAgkQAAgLAJgJQAIgKALABQANgBAIAKQAIAIAAAMIAAAaIgmAAIAAAPQABADACACQADADADAAQAEAAACgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgGgEgAgGgbQgCADgBAGIAAAKIASAAIAAgKQAAgFgCgDQgCgDgFAAQgDAAgDACg");
	this.shape_72.setTransform(293.7,356.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgcBEIAAiGIATAAIAAAKQAEgFAEgDQAEgDAGAAQAIAAAGAGQAGAHAAAIIAAA3IgBAHIgFAJQgEAGgKAAQgLAAgHgLIAAAwgAgGgtQgDADAAAFIAAAmQAAAEADADQACADAFAAQAFAAACgDIACgHIAAgmQAAgFgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_73.setTransform(286.5,358.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AANAwIgNgeIgMAeIgVAAIAZgxIgXguIAUAAIALAbIANgbIAUAAIgXAuIAYAxg");
	this.shape_74.setTransform(279.5,356.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOAtQgIgEgCgGQgDgFgBgFIAAgIIAAgkQAAgLAIgJQAJgKALABQAMgBAJAKQAIAIAAAMIAAAaIgmAAIAAAPQAAADADACQADADADAAQADAAADgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgGgEgAgGgbQgDADAAAGIAAAKIATAAIAAgKQAAgFgDgDQgCgDgFAAQgDAAgDACg");
	this.shape_75.setTransform(272.7,356.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgPAtQgHgEgCgGQgDgFAAgFIgBgIIAAgkQAAgMAIgIQAJgKALABQAMgBAIAKQAJAIAAAMIAAAaIglAAIAAAPQAAADACACQADADADAAQAEAAACgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgHgEgAgGgbQgCADAAAGIAAAKIASAAIAAgKQgBgEgCgEQgCgDgFAAQgDAAgDACg");
	this.shape_76.setTransform(757.1,329.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAKBEIAAhDQgBgEgCgDQgCgDgEAAQgEAAgCADQgDADgBADIAABEIgTAAIAAiHIATAAIAAAxQAIgKALAAQAEAAAGACQAEADACAEIADAGIAAAHIAABKg");
	this.shape_77.setTransform(749.7,327.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAPA/IgKgBIgHgEQgFgEgCgEQgBgFAAgFIAAg6IgKAAIAAgPIAKAAIAAgdIASAAIAAAdIANAAIAAAPIgNAAIAAA2QAAAFACACQABACAFgBIAFAAIAAATg");
	this.shape_78.setTransform(743.3,327.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQAEADADAAQAEAAAEgDQADgCAAgFQAAgFgDgDQgDgCgFgCIgEgCIgKgEQgDgCgGgFQgEgFAAgLQAAgMAJgIQAHgJAMAAQALAAAIAJQAIAIAAALIgSAAQAAgEgDgDQgDgDgEAAQgEAAgCAEQgDADAAAEQAAAEADADQADACAEACIAGACIAJAEIAGAEIAFAJQACAFAAAFQAAAMgJAJQgIAJgLAAQgHAAgHgEg");
	this.shape_79.setTransform(734.3,329.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgaAnIgCgGIAAgHIAAgKQAAgLAFgFQAGgFAEgCQAEgCAHAAIALAAIAAgIIAAgFIgCgFQgCgCgEAAQgEAAgDACQgCADAAAEIgUAAQAAgLAJgJQAHgIAMAAQAMAAAIAIQAJAJAAALIAABFIgUAAIAAgKQgCAFgFACQgEAEgGAAQgMgBgGgKgAgGAIQgCACAAAFIAAAFQgBAEADADQADADAEAAIAEgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBIABgFIAAgEIAAgKIgHAAQgEAAgEACg");
	this.shape_80.setTransform(727.2,329.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAKBEIAAhDQAAgEgCgDQgDgDgEAAQgEAAgDADQgCADAAADIAABEIgUAAIAAiHIAUAAIAAAxQAGgKAMAAQAEAAAGACQAEADACAEIADAGIAAAHIAABKg");
	this.shape_81.setTransform(719.8,327.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgVAxIAAhgIATAAIAAALQAEgGAIgDQAHgDAFAAIAAAUIgCgBIgDAAQgKABgFAFQgEAIAAAJIAAA3g");
	this.shape_82.setTransform(709.8,329.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgMAJgIQAIgKALABQANgBAHAKQAJAIAAAMIAAAaIglAAIAAAPQgBADADACQADADADAAQADAAADgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgIgEgAgGgbQgDADABAGIAAAKIASAAIAAgKQgBgEgCgEQgCgDgFAAQgDAAgDACg");
	this.shape_83.setTransform(703.2,329.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgIAwIgZhfIAVAAIAMA9IANg9IAVAAIgaBfg");
	this.shape_84.setTransform(696.3,329.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_85.setTransform(691.1,327.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAPBEIgRg6IgNAAIAAA6IgTAAIAAiHIAhAAQANAAAKAKQAIAJABANIAAANQAAATgQAJIAUA+gAgPgGIAOAAQAFAAAEgFIACgFIABgGIAAgNQAAgGgDgEQgEgEgFAAIgOAAg");
	this.shape_86.setTransform(685.5,327.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAKBEIgJgBQgCgBgFgDQgEgEgBgFQgCgEAAgGIAAhvIASAAIAABrQAAAFACACQACACAEAAIACAAIAAATg");
	this.shape_87.setTransform(675.6,327.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgaAnIgCgGIAAgHIAAgKQAAgLAFgFQAGgFAEgCQAEgCAHAAIAMAAIAAgIIgBgFIgCgFQgDgCgEAAQgDAAgDACQgCADAAAEIgUAAQAAgLAJgJQAHgIAMAAQALAAAJAIQAJAJAAALIAABFIgTAAIAAgKQgDAFgFACQgEAEgFAAQgNgBgGgKgAgGAIQgCACAAAFIAAAFQgBAEADADQADADADAAIAFgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBIACgFIAAgEIAAgKIgIAAQgEAAgEACg");
	this.shape_88.setTransform(669.6,329.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAOA/IgJgBIgIgEQgDgEgDgEQgBgFAAgFIAAg6IgKAAIAAgPIAKAAIAAgdIASAAIAAAdIANAAIAAAPIgNAAIAAA2QAAAFACACQABACAFgBIAFAAIAAATg");
	this.shape_89.setTransform(663.3,327.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_90.setTransform(659.3,327.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgUA9QgIgJAAgMIATAAQAAAEADACQADADADAAQAGAAADgFIAAgHIAAgSQgDAFgEADQgEADgGAAQgFAAgGgDQgEgDgDgEIgCgGIAAgIIAAg0IAAgHIAGgJQAEgGAKAAQAGAAAEADQAEADADAFIAAgJIAUAAIAABnIgBAKQgBAFgDAEQgEAGgFADQgHAEgHAAQgLAAgKgIgAgGguIgDAFIAAAEIAAAlIAAADIADAFQACADAEAAQAHAAABgEIABgFIAAgCIAAgjIAAgFIgBgEQgEgFgEAAQgFAAgBADg");
	this.shape_91.setTransform(653.8,331.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_92.setTransform(648.3,327.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgeBEIAAiHIAeAAQAMAAAKAKQAJAJAAANIAABFQAAAPgJAJQgJAKgNAAgAgLAyIAJAAQAOAAAAgQIAAhFQAAgGgEgEQgEgDgFAAIgKAAg");
	this.shape_93.setTransform(642.5,327.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgIgQIASAAIAAATIgSAOg");
	this.shape_94.setTransform(632.8,333.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgUA9QgIgJAAgMIATAAQAAAEADACQACADAEAAQAGAAADgFIAAgHIAAgSQgDAFgEADQgEADgGAAQgGAAgFgDQgFgDgCgEIgCgGIAAgIIAAg0IAAgHIAGgJQAEgGAKAAQAGAAADADQAFADADAFIAAgJIAUAAIAABnIgBAKQgBAFgDAEQgEAGgFADQgHAEgHAAQgLAAgKgIgAgHguIgCAFIAAAEIAAAlIAAADIADAFQACADAEAAQAHAAABgEIABgFIAAgCIAAgjIAAgFIgBgEQgEgFgEAAQgFAAgCADg");
	this.shape_95.setTransform(627.1,331.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAKAxIAAhDQAAgLgKAAQgDABgDADQgCADAAAEIAABDIgUAAIAAhgIAUAAIAAAKQAGgLALAAQALAAAGAKIADAGIAAAHIAABKg");
	this.shape_96.setTransform(619.8,329.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_97.setTransform(614.2,327.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQADADAEAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFgCIgDgCIgKgEQgFgCgEgFQgFgFAAgLQAAgMAIgIQAJgJALAAQALAAAHAJQAJAIgBALIgSAAQAAgEgCgDQgDgDgEAAQgDAAgDAEQgDADAAAEQAAAEADADQADACADACIAHACIAJAEIAGAEIAFAJQACAFAAAFQAAAMgJAJQgIAJgMAAQgFAAgIgEg");
	this.shape_98.setTransform(609,329.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQAEADADAAQAFAAADgDQADgCAAgFQAAgFgDgDQgDgCgFgCIgEgCIgKgEQgEgCgFgFQgEgFAAgLQAAgMAJgIQAHgJAMAAQALAAAIAJQAHAIABALIgSAAQAAgEgEgDQgCgDgEAAQgEAAgCAEQgDADAAAEQAAAEADADQADACAEACIAGACIAIAEIAHAEIAFAJQACAFAAAFQAAAMgJAJQgIAJgLAAQgHAAgHgEg");
	this.shape_99.setTransform(602.3,329.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgMAJgIQAIgKALABQAMgBAIAKQAJAIAAAMIAAAaIglAAIAAAPQAAADACACQADADADAAQADAAADgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgIgEgAgGgbQgCADAAAGIAAAKIARAAIAAgKQAAgEgCgEQgCgDgFAAQgDAAgDACg");
	this.shape_100.setTransform(595.4,329.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgNAuQgGgDgDgEQgDgGgBgEIgCgKIAAglQAAgMAJgJQAHgJAMAAQANgBAHAKQAJAIAAANIgTAAQgBgEgCgEQgCgDgFAAIgEABIgDADQgCADABAEIAAAlQAAAFACADQACADAFAAQADAAADgDQACgDABgFIATAAIAAACQAAALgJAJQgIAJgMAAQgGAAgHgEg");
	this.shape_101.setTransform(588.5,329.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFAAgEIgBgHIAAgmQAAgLAGgHQAFgGAFgDQAGgCAGAAQAHAAAGACQAGADAFAHQAFAGAAALIAAAmQAAALgEAGQgGAHgGADQgGAEgGAAQgIAAgHgFgAgGgbQgDADABAFIAAAmQgBAEADAEQADADAEAAQAFAAACgEQABgDABgFIAAglQgBgFgCgDQgDgCgDAAQgEAAgDACg");
	this.shape_102.setTransform(581.3,329.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgVAxIAAhgIATAAIAAALQAEgGAIgDQAHgDAFAAIAAAUIgCgBIgDAAQgKABgFAFQgEAIAAAJIAAA3g");
	this.shape_103.setTransform(575,329.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgcBEIAAiGIATAAIAAAKQAEgFAEgDQAEgDAGAAQAIAAAGAGQAGAHAAAIIAAA3IgBAHIgFAJQgEAGgKAAQgLAAgHgLIAAAwgAgGgtQgDADAAAFIAAAmQAAAEADADQACADAFAAQAFAAACgDIACgHIAAgmQAAgFgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_104.setTransform(568.4,331.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAPA/IgLgBIgGgEQgFgEgBgEQgCgFAAgFIAAg6IgJAAIAAgPIAJAAIAAgdIATAAIAAAdIALAAIAAAPIgLAAIAAA2QgBAFACACQABACAFgBIAEAAIAAATg");
	this.shape_105.setTransform(558.4,327.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAJAxIAAhDQABgLgKAAQgDABgDADQgDADAAAEIAABDIgTAAIAAhgIATAAIAAAKQAHgLAKAAQAMAAAGAKIADAGIAAAHIAABKg");
	this.shape_106.setTransform(552.5,329.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgOAtQgIgEgCgGQgDgFgBgFIAAgIIAAgkQAAgMAIgIQAJgKALABQANgBAIAKQAIAIAAAMIAAAaIgmAAIAAAPQAAADADACQADADADAAQAEAAACgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgGgEgAgGgbQgDADAAAGIAAAKIASAAIAAgKQAAgEgCgEQgCgDgFAAQgDAAgDACg");
	this.shape_107.setTransform(545.2,329.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAdAxIAAhDQAAgFgCgDQgDgDgFAAQgDAAgEADQgCADAAAFIAABDIgSAAIAAhDQAAgFgDgDQgDgDgEAAQgFAAgCADQgDADAAAFIAABDIgTAAIAAhgIATAAIAAAJQAHgKAMAAQAEAAAFADQADACAEAFQAEgFAEgCQAEgDAHAAQAKAAAGAHQAHAHgBAKIAABJg");
	this.shape_108.setTransform(535.9,329.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgZBDIAAgSIAEAAQAEAAADgCQADgBABgEIAEgRIgbhcIAVAAIAMA8IANg8IAVAAIgcBwQgDALgGAGQgHAGgLgBg");
	this.shape_109.setTransform(526.8,331.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgaAnIgCgGIAAgHIAAgKQAAgLAFgFQAGgFAEgCQAFgCAFAAIANAAIAAgIIgBgFIgDgFQgCgCgDAAQgEAAgCACQgDADgBAEIgTAAQAAgLAIgJQAJgIALAAQAMAAAIAIQAJAJAAALIAABFIgTAAIAAgKQgDAFgFACQgEAEgFAAQgNgBgGgKgAgFAIQgDACgBAFIAAAFQAAAEADADQADADAEAAIAEgBQABAAAAgBQAAAAABAAQAAgBAAAAQABgBAAgBIACgFIAAgEIAAgKIgIAAQgEAAgDACg");
	this.shape_110.setTransform(519.8,329.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgcBEIAAiGIATAAIAAAKQAEgFAEgDQAEgDAGAAQAIAAAGAGQAGAHAAAIIAAA3IgBAHIgFAJQgEAGgKAAQgLAAgHgLIAAAwgAgGgtQgDADAAAFIAAAmQAAAEADADQACADAFAAQAFAAACgDIACgHIAAgmQAAgFgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_111.setTransform(512.6,331.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgMAJgIQAIgKALABQANgBAHAKQAJAIAAAMIAAAaIglAAIAAAPQgBADADACQADADADAAQADAAADgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgIgEgAgGgbQgDADABAGIAAAKIARAAIAAgKQAAgEgCgEQgCgDgFAAQgDAAgDACg");
	this.shape_112.setTransform(501.7,329.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgVAxIAAhgIATAAIAAALQAEgGAIgDQAHgDAFAAIAAAUIgCgBIgDAAQgKABgFAFQgEAIAAAJIAAA3g");
	this.shape_113.setTransform(495.5,329.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgSAuQgFgEgCgEIgDgHIAAgHIAAhIIATAAIAABAIABAFQAAACACADQACADAEAAIAFgBIADgDIABgFIABgEIAAhAIATAAIAABgIgTAAIAAgKQgEAFgEADQgDADgGAAQgGAAgFgDg");
	this.shape_114.setTransform(488.6,329.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgNAuQgGgDgDgEQgDgGgCgEIgBgKIAAglQAAgMAIgJQAJgJALAAQAMgBAJAKQAIAIAAANIgTAAQAAgEgDgEQgDgDgEAAIgEABIgDADQgCADAAAEIAAAlQABAFACADQACADAFAAQAEAAACgDQADgDAAgFIATAAIAAACQAAALgJAJQgIAJgMAAQgGAAgHgEg");
	this.shape_115.setTransform(481.5,329.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgMAJgIQAIgKALABQAMgBAIAKQAJAIAAAMIAAAaIgmAAIAAAPQABADACACQADADADAAQADAAADgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgIgEgAgGgbQgCADgBAGIAAAKIASAAIAAgKQABgEgDgEQgCgDgFAAQgDAAgDACg");
	this.shape_116.setTransform(474.4,329.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQAEADADAAQAEAAAEgDQADgCAAgFQAAgFgDgDQgDgCgFgCIgEgCIgKgEQgDgCgGgFQgEgFAAgLQAAgMAJgIQAHgJAMAAQALAAAIAJQAIAIAAALIgSAAQAAgEgDgDQgDgDgEAAQgEAAgCAEQgDADAAAEQAAAEADADQADACAEACIAGACIAJAEIAGAEIAFAJQACAFAAAFQAAAMgJAJQgIAJgLAAQgHAAgHgEg");
	this.shape_117.setTransform(467.4,329.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAKAxIAAhDQAAgLgKAAQgEABgCADQgDADAAAEIAABDIgTAAIAAhgIATAAIAAAKQAHgLAKAAQAMAAAGAKIADAGIAAAHIAABKg");
	this.shape_118.setTransform(456.8,329.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_119.setTransform(451.2,327.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgOAtQgIgEgCgGQgDgFgBgFIAAgIIAAgkQAAgMAIgIQAJgKALABQAMgBAJAKQAIAIAAAMIAAAaIgmAAIAAAPQAAADADACQADADADAAQADAAADgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgGgEgAgGgbQgDADAAAGIAAAKIASAAIAAgKQAAgEgCgEQgCgDgFAAQgDAAgDACg");
	this.shape_120.setTransform(442.3,329.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgMAuQgHgDgDgEQgDgGgCgEIgBgKIAAglQAAgMAJgJQAHgJAMAAQANgBAHAKQAJAIAAANIgUAAQABgEgDgEQgDgDgEAAIgDABIgEADQgBADgBAEIAAAlQAAAFACADQADADAEAAQAFAAACgDQADgDgBgFIAUAAIAAACQAAALgJAJQgJAJgLAAQgGAAgGgEg");
	this.shape_121.setTransform(435.3,329.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAKAxIAAhDQAAgLgKAAQgEABgCADQgDADAAAEIAABDIgTAAIAAhgIATAAIAAAKQAHgLAKAAQAMAAAGAKIADAGIAAAHIAABKg");
	this.shape_122.setTransform(428,329.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgOAtQgIgEgCgGQgDgFgBgFIAAgIIAAgkQAAgMAIgIQAJgKALABQAMgBAJAKQAIAIAAAMIAAAaIgmAAIAAAPQAAADADACQADADADAAQADAAADgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgGgEgAgGgbQgDADAAAGIAAAKIASAAIAAgKQAAgEgCgEQgCgDgFAAQgDAAgDACg");
	this.shape_123.setTransform(420.7,329.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_124.setTransform(415.2,327.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgVAxIAAhgIATAAIAAALQAEgGAIgDQAHgDAFAAIAAAUIgCgBIgDAAQgKABgFAFQgEAIAAAJIAAA3g");
	this.shape_125.setTransform(410.8,329.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgMAJgIQAIgKALABQAMgBAIAKQAJAIAAAMIAAAaIgmAAIAAAPQABADACACQADADADAAQADAAADgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgHgBgIgEgAgGgbQgCADgBAGIAAAKIASAAIAAgKQABgEgDgEQgCgDgFAAQgDAAgDACg");
	this.shape_126.setTransform(404.2,329.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgcBEIAAiGIATAAIAAAKQAEgFAEgDQAEgDAGAAQAIAAAGAGQAGAHAAAIIAAA3IgBAHIgFAJQgEAGgKAAQgLAAgHgLIAAAwgAgGgtQgDADAAAFIAAAmQAAAEADADQACADAFAAQAFAAACgDIACgHIAAgmQAAgFgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_127.setTransform(397,331.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AANAwIgNgeIgMAeIgVAAIAZgxIgXguIAUAAIALAbIANgbIAUAAIgXAuIAYAxg");
	this.shape_128.setTransform(390,329.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgOAtQgIgEgCgGQgDgFgBgFIAAgIIAAgkQAAgMAIgIQAJgKALABQANgBAIAKQAIAIAAAMIAAAaIgmAAIAAAPQABADACACQADADADAAQADAAADgDQADgDAAgDIAUAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgGgEgAgGgbQgCADgBAGIAAAKIASAAIAAgKQAAgEgCgEQgCgDgFAAQgDAAgDACg");
	this.shape_129.setTransform(383.2,329.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgLBEIAAhQIgKAAIAAgQIAKAAIAAgNQAAgMAFgFQAGgGAEgBQAFgCAFAAIAHAAIAAASIgHAAQgGAAAAAIIAAANIANAAIAAAQIgNAAIAABQg");
	this.shape_130.setTransform(373.8,327.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgOAtQgHgEgDgGQgDgFAAgEIgBgHIAAgmQAAgLAHgHQADgGAHgDQAFgCAGAAQAIAAAFACQAGADAFAHQAFAGAAALIAAAmQAAALgEAGQgGAHgFADQgHAEgGAAQgIAAgHgFgAgGgbQgCADgBAFIAAAmQABAEACAEQADADADAAQAHAAABgEQACgDgBgFIAAglQABgFgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_131.setTransform(367.7,329.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgNAuQgHgEgEgHQgEgGAAgJIASAAQAAAFADADQAEADADAAQAEAAADgDQAEgCAAgFQAAgFgDgDQgCgCgGgCIgDgCIgKgEQgFgCgEgFQgFgFAAgLQAAgMAIgIQAJgJALAAQALAAAIAJQAHAIAAALIgSAAQAAgEgDgDQgCgDgEAAQgEAAgCAEQgDADAAAEQAAAEADADQACACAEACIAHACIAIAEIAHAEIAFAJQACAFAAAFQAAAMgIAJQgJAJgMAAQgFAAgIgEg");
	this.shape_132.setTransform(357.2,329.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgVAxIAAhgIATAAIAAALQAEgGAIgDQAHgDAFAAIAAAUIgCgBIgDAAQgKABgFAFQgEAIAAAJIAAA3g");
	this.shape_133.setTransform(351.2,329.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgaAnIgCgGIAAgHIAAgKQAAgLAFgFQAFgFAFgCQAEgCAHAAIALAAIAAgIIAAgFIgCgFQgCgCgFAAQgCAAgEACQgCADgBAEIgTAAQAAgLAJgJQAHgIAMAAQALAAAJAIQAJAJAAALIAABFIgUAAIAAgKQgDAFgEACQgEAEgGAAQgMgBgGgKgAgGAIQgDACAAAFIAAAFQABAEACADQADADADAAIAFgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBIABgFIAAgEIAAgKIgHAAQgEAAgEACg");
	this.shape_134.setTransform(344.4,329.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgPAtQgGgEgDgGQgDgFAAgFIgBgIIAAgkQAAgMAIgIQAJgKALABQAMgBAIAKQAJAIAAAMIAAAaIglAAIAAAPQAAADACACQADADADAAQAEAAACgDQADgDABgDIATAAIAAACQAAAEgCAFQgCAEgGAHQgGAGgNABQgIgBgHgEgAgGgbQgCADAAAGIAAAKIASAAIAAgKQgBgEgCgEQgCgDgFAAQgDAAgDACg");
	this.shape_135.setTransform(337.3,329.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgZBDIAAgSIAEAAQAEAAADgCQADgBABgEIAEgRIgbhcIAVAAIAMA8IANg8IAVAAIgcBwQgDALgGAGQgHAGgLgBg");
	this.shape_136.setTransform(330.3,331.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgEAtIAAgoIgqAAIAAgJIAqAAIAAgoIAKAAIAAAoIApAAIAAAJIgpAAIAAAog");
	this.shape_137.setTransform(318.3,327);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDBFQgWgEgDgVIAAgsIAAgrQACgPAMgGQALgFAOADQAHAEAEAFQAFAFACAJIAAArIAAArQgDAUgTAFIgDABIgHAAgAgDgwQgDADgDAFIAAAoIAAApQACAGAFACQAJAAACgIIAAgpIAAgoIgDgGQgDgDgDAAIgDABg");
	this.shape_138.setTransform(310.1,327.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgcBEIAAgSIAjhEQADgFAAgFIAAgKQAAgFgDgCQgDgDgEAAQgDAAgDACQgCADAAAEIAAAMIgUAAIAAgKQAAgIAGgLQAGgLARAAQALAAAJAIQAIAJAAAMIAAAMQAAAEgBAEIgDAIIgeA7IAiAAIAAATg");
	this.shape_139.setTransform(303.2,327.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAJBEIAAhDQAAgEgCgDQgCgDgFAAQgDAAgDADQgDADAAADIAABEIgTAAIAAiHIATAAIAAAxQAIgKAKAAQAGAAAEACQAFADACAEIACAGIABAHIAABKg");
	this.shape_140.setTransform(292.2,327.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAPA/IgKgBIgHgEQgFgEgBgEQgCgFAAgFIAAg6IgJAAIAAgPIAJAAIAAgdIASAAIAAAdIAMAAIAAAPIgMAAIAAA2QABAFABACQABACAFgBIAEAAIAAATg");
	this.shape_141.setTransform(285.8,327.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgJBEIAAhgIATAAIAABggAgJgwIAAgTIATAAIAAATg");
	this.shape_142.setTransform(281.8,327.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAQBEIgQhRIgOBRIgSAAIgUiHIAVAAIAJBSIAQhSIANAAIAQBSIAKhSIAUAAIgTCHg");
	this.shape_143.setTransform(274.5,327.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#2FA9DF").s().p("EguSAEsIAAgdMBbEAAAIAAgnIhXAAIAAgwIgnAAIAAgdIgdAAIAAgxIgxAAIAAgcIgmAAIAAg7Ig6AAIAAg4IA6AAIAAgnIAmAAIAAgnIAxAAIAAgdIAdAAIAAgnIAnAAIAAgxIBXAAIAAgTIAmAAIAAgTMhbqAAAIAAgdMBcHAAAIAABDIgdAAIAAAeIhDAAIAAA6Ig6AAIAAAdIgnAAIAAAdIgdAAIAAAxIhEAAIAABWIBEAAIAAAdIAdAAIAAAmIAnAAIAAAnIA6AAIAAAxIBDAAIAAAcIA7AAIAABEg");
	this.shape_144.setTransform(574.1,340.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#2FA9DF").s().p("Egv3AFTIAAqlMBfvAAAIAAAxIhXAAIAAAwIgwAAIAAAnIhEAAIAAAnIg6AAIAAA6IgnAAIAAAmIhXAAIAAAnIgwAAIAAAvIAwAAIAAAxIBXAAIAAAwIAnAAIAAAxIA6AAIAAAdIBEAAIAABEIBEAAIAAAdIBDAAIAAAwg");
	this.shape_145.setTransform(584.2,339.8);

	this.text = new cjs.Text("", "28px 'DIN-Black'");
	this.text.lineHeight = 37;
	this.text.lineWidth = 593;
	this.text.parent = this;
	this.text.setTransform(231.4,288.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#2FA9DF").s().p("Egv3AFTIAAgwIBEAAIAAgdIBEAAIAAhEIBDAAIAAgdIA6AAIAAgxIAnAAIAAgwIBXAAIAAgxIAxAAIAAgvIgxAAIAAgnIhXAAIAAgmIgnAAIAAg6Ig6AAIAAgnIhDAAIAAgnIgxAAIAAgwIhXAAIAAgxMBfvAAAIAAKlg");
	this.shape_146.setTransform(517.4,339.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_147.setTransform(590.5,286.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFACQAGACAGABQAJAAAFgEQAFgDAAgGQAAgKgMgBIgLAAQgKgBgFgEQgGgFAAgJQAAgJAHgGQAIgGAKAAQARAAAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADADAHAAIAKAAQAKABAGAEQAFAEAAAJQAAALgIAGQgHAFgOABQgIAAgHgDg");
	this.shape_148.setTransform(584.8,283.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgbA0IAAhnIAKAAIAAAJQAEgFAFgCQAFgCAFAAQAMAAAFAGQAGAFACAHQABAIAAAKQAAALgBAGQgCAIgFAEQgDAEgFABQgEACgGAAQgFAAgFgCQgEgCgFgGIAAApgAgNgiQgEAHAAAMQAAANAEAGQADAIAKgBQALAAADgHQAEgGAAgNQAAgNgEgGQgDgIgLAAQgJAAgEAIg");
	this.shape_149.setTransform(577.5,285.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_150.setTransform(571.6,281.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AASAzIAAgrQAAgJgFgEQgFgFgHgBQgIABgFAFQgFAEABAJIAAArIgLAAIAAhlIALAAIAAAnQAHgJAMAAQALABAHAGQAHAIAAAKIAAAug");
	this.shape_151.setTransform(565.8,281.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFACQAGACAGABQAJAAAFgEQAFgDAAgGQAAgKgMgBIgLAAQgKgBgFgEQgGgFAAgJQAAgJAHgGQAIgGAKAAQARAAAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADADAHAAIAKAAQAKABAGAEQAFAEAAAJQAAALgIAGQgHAFgOABQgIAAgHgDg");
	this.shape_152.setTransform(558,283.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgEAFgBAJIAAArIgKAAIAAhHIAKAAIAAAJQAIgJALAAQAMAAAHAHQAHAGAAAOIAAAsg");
	this.shape_153.setTransform(550.4,283.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgLAiQgFgCgEgEQgEgFgCgHQgCgHAAgJQAAgJACgGQACgIAEgEQAEgEAFgCQAGgDAFAAQAHAAAEADQAFACAFAEQAEAEACAIQACAGAAAJQAAAJgCAHQgCAHgFAFQgEAEgFACQgEADgHAAQgFAAgGgDgAgLgWQgEAFgBAFQgCAFAAAHIABANQACAFAEAFQAEAEAHAAQAHAAAFgEQAFgFABgFIABgNIgBgMQgBgGgEgDQgGgGgHAAQgHAAgEAFg");
	this.shape_154.setTransform(542.5,283.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_155.setTransform(536.8,281.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAKAuQgJABgEgGQgEgFAAgJIAAgrIgJAAIAAgHIAJAAIAAgXIAJAAIAAAXIAPAAIAAAHIgPAAIAAArQAAALAKgBIAFAAIAAAJg");
	this.shape_156.setTransform(532.5,282.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJAAQgGAAgEACQgEABgDAFIgIgGQAFgGAGgCQAFgDAJAAQAcAAAAAYIAAAvIgKAAIAAgGQgEAEgFABQgFACgGABQgHAAgFgCgAgRAPQAAANAQAAIAIgCQAEgBADgCQAEgEAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_157.setTransform(526.1,283.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAGAzQgJAAgEgEQgFgGAAgJIAAhSIALAAIAABSQgBAFACADQACACAFAAIAGAAIAAAJg");
	this.shape_158.setTransform(520.8,281.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgKANAAQAOABAIAIQAHAKAAAQIAAAEIgvAAQAAAMAGAGQAFAGAJAAQAGAAAFgCQAEgCAEgEIAHAGQgGAGgFACQgGADgJABQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_159.setTransform(514.4,283.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgDQAEgCAHAAIAJABQAEABAEAFIgIAIIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_160.setTransform(508.1,283.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgDQAEgCAHAAIAJABQAEABAEAFIgIAIIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_161.setTransform(498.4,283.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgKANAAQAOABAIAIQAHAKAAAQIAAAEIgvAAQAAAMAGAGQAFAGAJAAQAGAAAFgCQAEgCAEgEIAHAGQgGAGgFACQgGADgJABQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_162.setTransform(490.9,283.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgYAzIAAgJIADAAQAGAAACgCQACgCACgFIAFgOIgahFIAMAAIASA4IAUg4IALAAIggBYQgCAFgCADIgHAEIgIABg");
	this.shape_163.setTransform(483.8,285);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJAAQgGAAgEACQgEABgDAFIgIgGQAFgGAGgCQAFgDAJAAQAcAAAAAYIAAAvIgKAAIAAgGQgEAEgFABQgFACgGABQgHAAgFgCgAgRAPQAAANAQAAIAIgCQAEgBADgCQAEgEAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_164.setTransform(476.5,283.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAFAzQgIAAgEgEQgFgGAAgJIAAhSIAKAAIAABSQABAFABADQACACAFAAIAGAAIAAAJg");
	this.shape_165.setTransform(471.2,281.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgbA0IAAhnIAKAAIAAAJQAEgFAFgCQAFgCAFAAQAMAAAFAGQAGAFACAHQABAIAAAKQAAALgBAGQgCAIgFAEQgDAEgFABQgEACgGAAQgFAAgFgCQgEgCgFgGIAAApgAgNgiQgEAHAAAMQAAANAEAGQADAIAKgBQALAAADgHQAEgGAAgNQAAgNgEgGQgDgIgLAAQgJAAgEAIg");
	this.shape_166.setTransform(464.8,285.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgOAyQgFgCgGgFIAHgHQAEAEAEACQADABAHAAQAIAAAFgGQAFgGAAgJIAAgMQgEAFgFACQgFACgFAAQgGAAgEgCQgEgBgEgEQgFgEgBgIQgCgGAAgKQAAgKACgHQABgHAFgFQADgDAFgCQAEgCAGAAQAGAAAEADQAFABAEAFIAAgIIAKAAIAABJQAAANgIAIQgHAKgNgBQgIABgGgDgAgNgjQgEAHAAAMQAAAMAEAHQAEAHAJAAQALAAADgHQAEgGAAgNQAAgMgEgIQgDgGgLgBQgJAAgEAIg");
	this.shape_167.setTransform(453,285.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgEAFgBAJIAAArIgKAAIAAhHIAKAAIAAAJQAIgJALAAQAMAAAHAHQAHAGAAAOIAAAsg");
	this.shape_168.setTransform(445.2,283.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_169.setTransform(439.3,281.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAKAuQgJABgEgGQgEgFAAgJIAAgrIgJAAIAAgHIAJAAIAAgXIAJAAIAAAXIAPAAIAAAHIgPAAIAAArQAAALAKgBIAFAAIAAAJg");
	this.shape_170.setTransform(435,282.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFACQAGACAGABQAJAAAFgEQAFgDAAgGQAAgKgMgBIgLAAQgKgBgFgEQgGgFAAgJQAAgJAHgGQAIgGAKAAQARAAAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADADAHAAIAKAAQAKABAGAEQAFAEAAAJQAAALgIAGQgHAFgOABQgIAAgHgDg");
	this.shape_171.setTransform(429,283.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJAAQgGAAgEACQgEABgDAFIgIgGQAFgGAGgCQAFgDAJAAQAcAAAAAYIAAAvIgKAAIAAgGQgEAEgFABQgFACgGABQgHAAgFgCgAgRAPQAAANAQAAIAIgCQAEgBADgCQAEgEAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_172.setTransform(421.4,283.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAFAzQgHAAgFgEQgFgGAAgJIAAhSIALAAIAABSQAAAFABADQACACAGAAIAFAAIAAAJg");
	this.shape_173.setTransform(416.1,281.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgKANAAQAOABAIAIQAHAKAAAQIAAAEIgvAAQAAAMAGAGQAFAGAJAAQAGAAAFgCQAEgCAEgEIAHAGQgGAGgFACQgGADgJABQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_174.setTransform(406.1,283.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgDQAEgCAHAAIAJABQAEABAEAFIgIAIIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_175.setTransform(399.8,283.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAFgFAAgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgMAAQgLAAgHgHg");
	this.shape_176.setTransform(392.1,283.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAKAuQgJABgEgGQgEgFAAgJIAAgrIgJAAIAAgHIAJAAIAAgXIAJAAIAAAXIAPAAIAAAHIgPAAIAAArQAAALAKgBIAFAAIAAAJg");
	this.shape_177.setTransform(385.5,282.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgDQAEgCAHAAIAJABQAEABAEAFIgIAIIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_178.setTransform(380.8,283.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAEgFABgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgLAAQgMAAgHgHg");
	this.shape_179.setTransform(373,283.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgEgFgJAAQgHAAgFAFQgEAFgBAJIAAArIgKAAIAAhHIAKAAIAAAJQAIgJALAAQAMAAAHAHQAHAGAAAOIAAAsg");
	this.shape_180.setTransform(364.9,283.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgLAiQgFgCgEgEQgFgFgBgHQgCgHAAgJQAAgJACgGQABgIAFgEQAEgEAFgCQAGgDAFAAQAGAAAGADQAEACAFAEQAFAEABAIQACAGAAAJQAAAJgCAHQgCAHgEAFQgEAEgFACQgGADgGAAQgFAAgGgDgAgLgWQgFAFAAAFQgCAFAAAHIABANQABAFAFAFQAEAEAHAAQAIAAAEgEQAEgFACgFIABgNIgBgMQgCgGgDgDQgFgGgIAAQgHAAgEAFg");
	this.shape_181.setTransform(353.4,283.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAKAuQgJABgEgGQgEgFAAgJIAAgrIgJAAIAAgHIAJAAIAAgXIAJAAIAAAXIAPAAIAAAHIgPAAIAAArQAAALAKgBIAFAAIAAAJg");
	this.shape_182.setTransform(347,282.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFACQAGACAGABQAJAAAFgEQAFgDAAgGQAAgKgMgBIgLAAQgKgBgFgEQgGgFAAgJQAAgJAHgGQAIgGAKAAQARAAAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADADAHAAIAKAAQAKABAGAEQAFAEAAAJQAAALgIAGQgHAFgOABQgIAAgHgDg");
	this.shape_183.setTransform(337.4,283.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgKANAAQAOABAIAIQAHAKAAAQIAAAEIgvAAQAAAMAGAGQAFAGAJAAQAGAAAFgCQAEgCAEgEIAHAGQgGAGgFACQgGADgJABQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_184.setTransform(330,283.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_185.setTransform(324.4,281.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgNAyQgGgCgFgFIAGgHQAEAEAEACQAEABAFAAQAJAAAFgGQAFgGAAgJIAAgMQgEAFgFACQgFACgFAAQgGAAgEgCQgFgBgEgEQgDgEgDgIQgBgGAAgKQAAgKABgHQADgHADgFQAEgDAFgCQAEgCAGAAQAGAAAEADQAFABAEAFIAAgIIAKAAIAABJQAAANgIAIQgHAKgOgBQgHABgFgDgAgNgjQgEAHAAAMQAAAMAEAHQAEAHAJAAQALAAADgHQAEgGAAgNQAAgMgEgIQgDgGgLgBQgJAAgEAIg");
	this.shape_186.setTransform(318.5,285.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgKANAAQAOABAIAIQAHAKAAAQIAAAEIgvAAQAAAMAGAGQAFAGAJAAQAGAAAFgCQAEgCAEgEIAHAGQgGAGgFACQgGADgJABQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_187.setTransform(310.9,283.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAKAuQgJABgEgGQgEgFAAgJIAAgrIgJAAIAAgHIAJAAIAAgXIAJAAIAAAXIAPAAIAAAHIgPAAIAAArQAAALAKgBIAFAAIAAAJg");
	this.shape_188.setTransform(304.6,282.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJAAQgGAAgEACQgEABgDAFIgIgGQAFgGAGgCQAFgDAJAAQAcAAAAAYIAAAvIgKAAIAAgGQgEAEgFABQgFACgGABQgHAAgFgCgAgRAPQAAANAQAAIAIgCQAEgBADgCQAEgEAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_189.setTransform(298.2,283.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgDQAEgCAHAAIAJABQAEABAEAFIgIAIIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_190.setTransform(292.2,283.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AAKAuQgJABgEgGQgEgFAAgJIAAgrIgJAAIAAgHIAJAAIAAgXIAJAAIAAAXIAPAAIAAAHIgPAAIAAArQAAALAKgBIAFAAIAAAJg");
	this.shape_191.setTransform(286,282.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFACQAGACAGABQAJAAAFgEQAFgDAAgGQAAgKgMgBIgLAAQgKgBgFgEQgGgFAAgJQAAgJAHgGQAIgGAKAAQARAAAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADADAHAAIAKAAQAKABAGAEQAFAEAAAJQAAALgIAGQgHAFgOABQgIAAgHgDg");
	this.shape_192.setTransform(280,283.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgNAyQgGgCgGgFIAHgHQAEAEAEACQAEABAFAAQAJAAAFgGQAFgGAAgJIAAgMQgEAFgFACQgFACgFAAQgFAAgFgCQgFgBgDgEQgEgEgDgIQgBgGAAgKQAAgKABgHQADgHAEgFQADgDAFgCQAFgCAFAAQAFAAAFADQAFABAEAFIAAgIIAKAAIAABJQAAANgIAIQgIAKgNgBQgIABgEgDgAgNgjQgEAHAAAMQAAAMAEAHQADAHAKAAQALAAAEgHQADgGAAgNQAAgMgDgIQgEgGgLgBQgKAAgDAIg");
	this.shape_193.setTransform(268.8,285.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgEgFgJAAQgHAAgFAFQgFAFABAJIAAArIgLAAIAAhHIALAAIAAAJQAHgJAMAAQALAAAHAHQAHAGAAAOIAAAsg");
	this.shape_194.setTransform(261,283.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_195.setTransform(255.1,281.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgHAAgKQAAgKABgIQACgHAEgEQAEgEAFgCQAEgBAGAAQAFAAAFABQAFACAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgDQgEAGAAANQAAAMAEAHQADAIAKgBQALAAADgHQAEgHAAgMQAAgOgEgFQgDgIgLAAQgKAAgDAIg");
	this.shape_196.setTransform(249.2,282);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAFAzQgHAAgFgEQgFgGAAgJIAAhSIAKAAIAABSQAAAFACADQACACAGAAIAFAAIAAAJg");
	this.shape_197.setTransform(243.7,281.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_198.setTransform(239.3,281.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAEgFABgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgLAAQgMAAgHgHg");
	this.shape_199.setTransform(233.4,283.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgIAyQgFgCgEgGIAAAJIgKAAIAAhmIAKAAIAAAoQAEgFAFgCQAFgCAFAAQAMAAAFAGQAGAFACAHQABAHAAALQAAAKgBAHQgCAIgFAEQgDAEgFABQgEACgGAAQgFAAgFgCgAgNgDQgEAGAAANQAAAMAEAHQADAIAKgBQALAAADgHQAEgHAAgMQAAgOgEgFQgDgIgLAAQgJAAgEAIg");
	this.shape_200.setTransform(225.6,282);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgHAAgKQAAgKABgIQACgHAEgEQAEgEAFgCQAEgBAGAAQAFAAAFABQAFACAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgDQgEAGAAANQAAAMAEAHQADAIAKgBQALAAADgHQAEgHAAgMQAAgOgEgFQgDgIgLAAQgKAAgDAIg");
	this.shape_201.setTransform(213.7,282);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgKAAIAAhHIAKAAIAAAJQAIgJAMAAQALAAAHAHQAHAGAAAOIAAAsg");
	this.shape_202.setTransform(205.9,283.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJAAQgGAAgEACQgEABgDAFIgIgGQAFgGAGgCQAFgDAJAAQAcAAAAAYIAAAvIgKAAIAAgGQgEAEgFABQgFACgGABQgHAAgFgCgAgRAPQAAANAQAAIAIgCQAEgBADgCQAEgEAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_203.setTransform(197.7,283.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgDQAEgCAHAAIAJABQAEABAEAFIgIAIIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_204.setTransform(191.7,283.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgIAyQgFgCgEgGIAAAJIgKAAIAAhmIAKAAIAAAoQAEgFAFgCQAFgCAFAAQAMAAAFAGQAGAFACAHQABAHAAALQAAAKgBAHQgCAIgFAEQgDAEgFABQgEACgGAAQgFAAgFgCgAgNgDQgEAGAAANQAAAMAEAHQADAIAKgBQALAAADgHQAEgHAAgMQAAgOgEgFQgDgIgLAAQgJAAgEAIg");
	this.shape_205.setTransform(184.3,282);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgHAAgKQAAgKABgIQACgHAEgEQAEgEAFgCQAEgBAGAAQAFAAAFABQAFACAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgDQgEAGAAANQAAAMAEAHQADAIAKgBQALAAADgHQAEgHAAgMQAAgOgEgFQgDgIgLAAQgKAAgDAIg");
	this.shape_206.setTransform(172.4,282);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgEgFgJAAQgHAAgFAFQgFAFAAAJIAAArIgKAAIAAhHIAKAAIAAAJQAIgJAMAAQALAAAHAHQAHAGAAAOIAAAsg");
	this.shape_207.setTransform(164.6,283.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJAAQgGAAgEACQgEABgDAFIgIgGQAFgGAGgCQAFgDAJAAQAcAAAAAYIAAAvIgKAAIAAgGQgEAEgFABQgFACgGABQgHAAgFgCgAgRAPQAAANAQAAIAIgCQAEgBADgCQAEgEAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_208.setTransform(156.4,283.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgEAFAAAJIAAArIgLAAIAAhHIALAAIAAAJQAHgJALAAQAMAAAHAHQAHAGAAAOIAAAsg");
	this.shape_209.setTransform(145.2,283.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgLAiQgEgCgFgEQgEgFgDgHQgBgHAAgJQAAgJABgGQADgIAEgEQAFgEAEgCQAGgDAFAAQAGAAAGADQAEACAFAEQAFAEABAIQACAGAAAJQAAAJgCAHQgCAHgEAFQgFAEgEACQgGADgGAAQgFAAgGgDgAgLgWQgFAFAAAFQgCAFAAAHIABANQABAFAFAFQAEAEAHAAQAIAAAEgEQAFgFAAgFIACgNIgCgMQAAgGgEgDQgFgGgIAAQgHAAgEAFg");
	this.shape_210.setTransform(137.3,283.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_211.setTransform(131.6,281.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AAKAuQgJABgEgGQgEgFAAgJIAAgrIgJAAIAAgHIAJAAIAAgXIAJAAIAAAXIAPAAIAAAHIgPAAIAAArQAAALAKgBIAFAAIAAAJg");
	this.shape_212.setTransform(127.3,282.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJAAQgGAAgEACQgEABgDAFIgIgGQAFgGAGgCQAFgDAJAAQAcAAAAAYIAAAvIgKAAIAAgGQgEAEgFABQgFACgGABQgHAAgFgCgAgRAPQAAANAQAAIAIgCQAEgBADgCQAEgEAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_213.setTransform(120.9,283.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgZAkIAAgJIAng0IgkAAIAAgKIAwAAIAAAJIgnA0IAnAAIAAAKg");
	this.shape_214.setTransform(114,283.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_215.setTransform(108.9,281.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AAKAuQgJABgEgGQgEgFAAgJIAAgrIgJAAIAAgHIAJAAIAAgXIAJAAIAAAXIAPAAIAAAHIgPAAIAAArQAAALAKgBIAFAAIAAAJg");
	this.shape_216.setTransform(104.6,282.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgKANAAQAOABAIAIQAHAKAAAQIAAAEIgvAAQAAAMAGAGQAFAGAJAAQAGAAAFgCQAEgCAEgEIAHAGQgGAGgFACQgGADgJABQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_217.setTransform(98.4,283.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFABAJIAAArIgLAAIAAhHIALAAIAAAJQAHgJAMAAQALAAAHAHQAHAGAAAOIAAAsg");
	this.shape_218.setTransform(90.6,283.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgLAiQgEgCgFgEQgFgFgCgHQgBgHAAgJQAAgJABgGQACgIAFgEQAFgEAEgCQAFgDAGAAQAGAAAGADQAFACAEAEQAEAEACAIQACAGAAAJQAAAJgCAHQgBAHgFAFQgFAEgEACQgGADgGAAQgGAAgFgDgAgLgWQgFAFgBAFQgBAFAAAHIABANQACAFAEAFQAEAEAHAAQAHAAAFgEQAEgFABgFIABgNIgBgMQgBgGgDgDQgGgGgHAAQgHAAgEAFg");
	this.shape_219.setTransform(82.6,283.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAoAkIAAgrQABgJgFgFQgEgFgJAAQgIAAgFAFQgFAEAAAJIAAAsIgJAAIAAgrQAAgJgFgFQgEgFgJAAQgIAAgFAFQgFAFAAAJIAAArIgKAAIAAhHIAKAAIAAAJQAIgJANAAQAPAAAFALQAJgLAPAAQAGAAAFABQAEADAFAFQAGAFAAANIAAAsg");
	this.shape_220.setTransform(72.4,283.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgYAzIAAgJIADAAQAGAAACgCIAEgHIAFgOIgahFIAMAAIASA4IAUg4IALAAIggBYQgCAFgCADIgHAEIgIABg");
	this.shape_221.setTransform(59.1,285);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgKANAAQAOABAIAIQAHAKAAAQIAAAEIgvAAQAAAMAGAGQAFAGAJAAQAGAAAFgCQAEgCAEgEIAHAGQgGAGgFACQgGADgJABQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_222.setTransform(52,283.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AARAzIgWgkIgNAQIAAAUIgLAAIAAhlIALAAIAABEIAeglIAOAAIgYAbIAcArg");
	this.shape_223.setTransform(44.8,281.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_224.setTransform(657.9,263);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgKABgHQACgHAEgEQAEgEAFgCQAEgBAGAAQAFAAAFABQAFACAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgDQgEAGAAAMQAAANAEAHQADAIAKgBQALAAADgHQAEgHAAgNQAAgMgEgGQgDgIgLAAQgKAAgDAIg");
	this.shape_225.setTransform(649.9,261.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_226.setTransform(644.4,261.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgEAkIgahHIAMAAIASA4IAUg4IALAAIgaBHg");
	this.shape_227.setTransform(639.3,263);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgKAiQgGgCgEgEQgEgFgCgHQgCgGAAgKQAAgIACgHQACgIAEgEQAEgEAGgCQAFgCAFAAQAHAAAEACQAFACAFAEQAEAEACAIQACAGAAAJQAAAJgCAHQgBAHgGAFQgDAEgGACQgEACgHABQgFgBgFgCgAgLgWQgEAEgBAGQgCAGAAAGIABANQACAFAEAEQAEAFAHAAQAHAAAFgEQAEgFACgFIAAgNIAAgMQgCgGgDgDQgGgGgHABQgHgBgEAFg");
	this.shape_228.setTransform(632.2,263);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgDQAEgCAHAAIAJABQAEACAEAEIgIAIIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_229.setTransform(625.9,263);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgbA0IAAhnIAKAAIAAAJQAEgFAFgCQAFgCAFAAQAMAAAFAGQAGAFACAHQABAIAAAKQAAAKgBAHQgCAHgFAGQgDACgFACQgEACgGAAQgFAAgFgCQgEgCgFgGIAAApgAgNgjQgEAIAAAMQAAANAEAGQADAIAKgBQALAAADgHQAEgGAAgNQAAgMgEgIQgDgHgLAAQgJAAgEAHg");
	this.shape_230.setTransform(618.5,264.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFABAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIAMAAQALAAAHAHQAHAGAAANIAAAtg");
	this.shape_231.setTransform(606.7,263);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_232.setTransform(598.7,263);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgEAkIgahHIAMAAIASA4IAUg4IALAAIgaBHg");
	this.shape_233.setTransform(591.6,263);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_234.setTransform(584.5,263);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_235.setTransform(573.2,263);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAXA0IgXhSIgWBSIgKAAIgahnIALAAIAUBSIAXhSIAJAAIAWBSIAVhSIAMAAIgbBng");
	this.shape_236.setTransform(563.2,261.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_237.setTransform(551.5,265.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgKABgHQACgHAEgEQAEgEAFgCQAEgBAGAAQAFAAAFABQAFACAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgDQgEAGAAAMQAAANAEAHQADAIAKgBQALAAADgHQAEgHAAgNQAAgMgEgGQgDgIgLAAQgKAAgDAIg");
	this.shape_238.setTransform(545.4,261.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAFgFAAgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgMAAQgLAAgHgHg");
	this.shape_239.setTransform(537.5,263);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_240.setTransform(529.4,263);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgDQAEgCAHAAIAJABQAEACAEAEIgIAIIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_241.setTransform(523.4,263);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgHA0IAAg+IgJAAIAAgIIAJAAIAAgOQAAgIAEgFQAEgGAJAAIAHAAIAAAJIgFAAQgJAAAAALIAAANIAOAAIAAAIIgOAAIAAA+g");
	this.shape_242.setTransform(517.5,261.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgKABgHQACgHAEgEQAEgEAFgCQAEgBAGAAQAFAAAFABQAFACAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgDQgEAGAAAMQAAANAEAHQADAIAKgBQALAAADgHQAEgHAAgNQAAgMgEgGQgDgIgLAAQgKAAgDAIg");
	this.shape_243.setTransform(507.4,261.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFABAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIAMAAQALAAAHAHQAHAGAAANIAAAtg");
	this.shape_244.setTransform(499.6,263);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_245.setTransform(491.4,263);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFADQAGACAGAAQAJgBAFgDQAFgDAAgGQAAgKgMgBIgLgBQgKAAgFgEQgGgFAAgJQAAgJAHgGQAIgGAKABQARgBAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADACAHAAIAKABQAKABAGAEQAFAEAAAJQAAALgIAFQgHAHgOAAQgIgBgHgCg");
	this.shape_246.setTransform(480.6,263);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_247.setTransform(473.2,263);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AASAkIgRgcIgRAcIgNAAIAYgkIgXgjIANAAIAQAbIAPgbIANAAIgXAjIAYAkg");
	this.shape_248.setTransform(465.9,263);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_249.setTransform(458.3,263);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AAKAvQgJAAgEgGQgEgFAAgIIAAgrIgJAAIAAgIIAJAAIAAgXIAJAAIAAAXIAPAAIAAAIIgPAAIAAAqQAAALAKAAIAFAAIAAAJg");
	this.shape_250.setTransform(452.3,261.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgFgQIALAAIAAAVIgLAMg");
	this.shape_251.setTransform(444.4,267);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_252.setTransform(438.6,263);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgSAbQgIgJgBgSQABgRAIgJQAJgJANAAQAIAAAFACQAFACAFAGIgGAHQgFgFgDgBQgDgCgGAAQgKgBgFAIQgFAHAAAMIABALQABAFAEAFQAEAGAKAAQAGAAADgBQADgDAFgEIAGAHQgFAGgFACQgFACgIABQgMAAgKgKg");
	this.shape_253.setTransform(431.4,263);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFABAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIALAAQAMAAAHAHQAHAGAAANIAAAtg");
	this.shape_254.setTransform(423.7,263);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_255.setTransform(415.5,263);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_256.setTransform(410.1,261.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AAFA0QgHgBgFgFQgFgFAAgIIAAhUIAKAAIAABTQAAAFACADQACADAGAAIAFAAIAAAJg");
	this.shape_257.setTransform(406.6,261.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgbA0IAAhnIAKAAIAAAJQAEgFAFgCQAFgCAFAAQAMAAAFAGQAGAFACAHQABAIAAAKQAAAKgBAHQgCAHgFAGQgDACgFACQgEACgGAAQgFAAgFgCQgEgCgFgGIAAApgAgNgjQgEAIAAAMQAAANAEAGQADAIAKgBQALAAADgHQAEgGAAgNQAAgMgEgIQgDgHgLAAQgJAAgEAHg");
	this.shape_258.setTransform(400.2,264.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AApAkIAAgrQAAgJgFgFQgFgFgIAAQgIAAgFAFQgFAFAAAIIAAAsIgJAAIAAgrQAAgJgFgFQgFgFgHAAQgJAAgFAFQgFAFABAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIANAAQAPAAAFALQAJgLAPAAQAGAAAEABQAFACAFAFQAGAGAAAMIAAAtg");
	this.shape_259.setTransform(389.8,263);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgKAiQgFgCgFgEQgFgFgCgHQgBgGAAgKQAAgIABgHQACgIAFgEQAFgEAFgCQAEgCAGAAQAGAAAFACQAGACAEAEQAEAEACAIQACAGAAAJQAAAJgCAHQgBAHgGAFQgDAEgGACQgFACgGABQgGgBgEgCgAgLgWQgFAEgBAGQgBAGAAAGIABANQACAFAEAEQAEAFAHAAQAHAAAFgEQAEgFABgFIABgNIgBgMQgBgGgDgDQgGgGgHABQgHgBgEAFg");
	this.shape_260.setTransform(379.5,263);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgRAbQgKgJAAgSQAAgRAKgJQAIgJANAAQAIAAAFACQAFACAFAGIgHAHQgEgFgDgBQgEgCgFAAQgJgBgGAIQgFAHAAAMIABALQABAFAEAFQAFAGAJAAQAFAAAEgBQADgDAEgEIAHAHQgFAGgFACQgFACgIABQgMAAgJgKg");
	this.shape_261.setTransform(372.2,263);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AAGA0QgJgBgEgFQgFgFAAgIIAAhUIALAAIAABTQgBAFACADQACADAGAAIAFAAIAAAJg");
	this.shape_262.setTransform(363.2,261.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_263.setTransform(356.6,263);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgIAyQgFgCgEgGIAAAJIgKAAIAAhmIAKAAIAAAoQAEgFAFgCQAFgCAFAAQAMAAAFAGQAGAFACAHQABAHAAAKQAAAKgBAIQgCAHgFAGQgDACgFACQgEACgGAAQgFAAgFgCgAgNgDQgEAGAAAMQAAANAEAHQADAIAKgBQALAAADgHQAEgHAAgNQAAgMgEgGQgDgIgLAAQgJAAgEAIg");
	this.shape_264.setTransform(349.2,261.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgKAiQgFgCgFgEQgFgFgCgHQgBgGAAgKQAAgIABgHQACgIAFgEQAFgEAFgCQAEgCAGAAQAGAAAFACQAGACAEAEQAEAEACAIQACAGAAAJQAAAJgCAHQgBAHgGAFQgDAEgGACQgFACgGABQgGgBgEgCgAgLgWQgFAEgBAGQgBAGAAAGIABANQACAFAEAEQAEAFAHAAQAHAAAFgEQAEgFABgFIABgNIgBgMQgBgGgDgDQgGgGgHABQgHgBgEAFg");
	this.shape_265.setTransform(341.3,263);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AAGA0QgJgBgEgFQgFgFAAgIIAAhUIALAAIAABTQAAAFABADQACADAGAAIAFAAIAAAJg");
	this.shape_266.setTransform(335.7,261.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgOAyQgFgCgGgGIAHgGQAEAEAEABQAEACAGAAQAIAAAFgGQAFgGAAgJIAAgMQgEAGgFABQgFADgFAAQgFAAgFgDQgEgBgEgEQgFgEgCgHQgBgHAAgJQAAgLABgHQACgHAFgFQADgDAFgCQAFgBAFAAQAFAAAFACQAFABAEAGIAAgJIAKAAIAABJQAAANgIAIQgIAJgMAAQgJAAgFgCgAgNgjQgEAHAAANQAAALAEAHQADAHAKAAQALAAAEgHQADgGAAgMQAAgNgDgIQgEgGgLAAQgKgBgDAIg");
	this.shape_267.setTransform(329,264.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgHA0IAAg+IgKAAIAAgIIAKAAIAAgOQAAgIAFgFQADgGAJAAIAIAAIAAAJIgGAAQgKAAAAALIAAANIAQAAIAAAIIgQAAIAAA+g");
	this.shape_268.setTransform(319.5,261.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgKAiQgFgCgFgEQgEgFgDgHQgBgGAAgKQAAgIABgHQADgIAEgEQAFgEAFgCQAEgCAGAAQAGAAAFACQAGACAEAEQAEAEACAIQACAGAAAJQAAAJgCAHQgCAHgFAFQgDAEgGACQgFACgGABQgGgBgEgCgAgLgWQgEAEgCAGQgBAGAAAGIABANQACAFAEAEQAEAFAHAAQAIAAAEgEQAEgFACgFIAAgNIAAgMQgCgGgDgDQgFgGgIABQgHgBgEAFg");
	this.shape_269.setTransform(313.3,263);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AARA0IgWglIgNAQIAAAVIgLAAIAAhnIALAAIAABFIAeglIAOAAIgZAbIAdAsg");
	this.shape_270.setTransform(302.4,261.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFADQAGACAGAAQAJgBAFgDQAFgDAAgGQAAgKgMgBIgLgBQgKAAgFgEQgGgFAAgJQAAgJAHgGQAIgGAKABQARgBAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADACAHAAIAKABQAKABAGAEQAFAEAAAJQAAALgIAFQgHAHgOAAQgIgBgHgCg");
	this.shape_271.setTransform(294.4,263);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_272.setTransform(289.1,261.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgDQAEgCAHAAIAJABQAEACAEAEIgIAIIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_273.setTransform(284.8,263);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_274.setTransform(273.7,263);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AASA0IAAgsQAAgIgFgGQgFgEgHAAQgIAAgFAEQgEAGAAAIIAAAsIgLAAIAAhnIALAAIAAAoQAHgJALABQANAAAGAGQAHAIAAALIAAAug");
	this.shape_275.setTransform(265.8,261.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AAKAvQgJAAgEgGQgEgFAAgIIAAgrIgJAAIAAgIIAJAAIAAgXIAJAAIAAAXIAPAAIAAAIIgPAAIAAAqQAAALAKAAIAFAAIAAAJg");
	this.shape_276.setTransform(259.2,261.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AAFA0QgIgBgEgFQgFgFAAgIIAAhUIAKAAIAABTQABAFABADQACADAFAAIAGAAIAAAJg");
	this.shape_277.setTransform(251.6,261.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAFA0QgHgBgFgFQgFgFAAgIIAAhUIAKAAIAABTQAAAFACADQACADAGAAIAFAAIAAAJg");
	this.shape_278.setTransform(247.3,261.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_279.setTransform(240.6,263);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_280.setTransform(229.6,263);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AApAkIAAgrQgBgJgEgFQgFgFgIAAQgIAAgFAFQgFAFAAAIIAAAsIgJAAIAAgrQAAgJgFgFQgFgFgHAAQgJAAgFAFQgFAFABAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIAMAAQAQAAAFALQAJgLAPAAQAGAAAEABQAFACAFAFQAGAGAAAMIAAAtg");
	this.shape_281.setTransform(219.4,263);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAFgFAAgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgMAAQgLAAgHgHg");
	this.shape_282.setTransform(208.9,263);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFADQAGACAGAAQAJgBAFgDQAFgDAAgGQAAgKgMgBIgLgBQgKAAgFgEQgGgFAAgJQAAgJAHgGQAIgGAKABQARgBAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADACAHAAIAKABQAKABAGAEQAFAEAAAJQAAALgIAFQgHAHgOAAQgIgBgHgCg");
	this.shape_283.setTransform(201.2,263);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFADQAGACAGAAQAJgBAFgDQAFgDAAgGQAAgKgMgBIgLgBQgKAAgFgEQgGgFAAgJQAAgJAHgGQAIgGAKABQARgBAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADACAHAAIAKABQAKABAGAEQAFAEAAAJQAAALgIAFQgHAHgOAAQgIgBgHgCg");
	this.shape_284.setTransform(194,263);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_285.setTransform(186.4,263);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgKABgHQACgHAEgEQAEgEAFgCQAEgBAGAAQAFAAAFABQAFACAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgDQgEAGAAAMQAAANAEAHQADAIAKgBQALAAADgHQAEgHAAgNQAAgMgEgGQgDgIgLAAQgKAAgDAIg");
	this.shape_286.setTransform(175.1,261.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgEAFAAAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIALAAQAMAAAHAHQAHAGAAANIAAAtg");
	this.shape_287.setTransform(167.3,263);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_288.setTransform(159.1,263);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgFgQIALAAIAAAVIgLAMg");
	this.shape_289.setTransform(150,267);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgYAzIAAgJIADAAQAGAAACgCIAEgHIAFgOIgahFIAMAAIASA4IAUg4IALAAIggBYQgCAFgCADIgHAEIgIABg");
	this.shape_290.setTransform(144.8,264.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AAKAvQgJAAgEgGQgEgFAAgIIAAgrIgJAAIAAgIIAJAAIAAgXIAJAAIAAAXIAPAAIAAAIIgPAAIAAAqQAAALAKAAIAFAAIAAAJg");
	this.shape_291.setTransform(139.1,261.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_292.setTransform(135,261.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AAFA0QgIgBgEgFQgFgFAAgIIAAhUIAKAAIAABTQABAFABADQACADAFAAIAGAAIAAAJg");
	this.shape_293.setTransform(131.4,261.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_294.setTransform(127.1,261.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgOAyQgFgCgFgGIAGgGQAEAEAEABQADACAGAAQAJAAAFgGQAFgGAAgJIAAgMQgEAGgFABQgFADgFAAQgGAAgEgDQgFgBgEgEQgDgEgCgHQgCgHAAgJQAAgLACgHQACgHADgFQAEgDAFgCQAEgBAGAAQAFAAAFACQAFABAEAGIAAgJIAKAAIAABJQAAANgIAIQgHAJgOAAQgIAAgFgCgAgNgjQgEAHAAANQAAALAEAHQADAHAKAAQALAAADgHQAEgGAAgMQAAgNgEgIQgDgGgLAAQgKgBgDAIg");
	this.shape_295.setTransform(121.2,264.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_296.setTransform(113.3,263);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgKABgHQACgHAEgEQAEgEAFgCQAEgBAGAAQAFAAAFABQAFACAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgDQgEAGAAAMQAAANAEAHQADAIAKgBQALAAADgHQAEgHAAgNQAAgMgEgGQgDgIgLAAQgKAAgDAIg");
	this.shape_297.setTransform(102,261.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgEAFgBAJIAAArIgKAAIAAhHIAKAAIAAAIQAIgIALAAQAMAAAHAHQAHAGAAANIAAAtg");
	this.shape_298.setTransform(94.2,263);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgOAjQgFgBgEgFQgEgEAAgKQAAgJAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgEgJABQgGAAgEABQgEABgDAGIgIgHQAFgGAGgCQAFgCAJAAQAcAAAAAXIAAAwIgKAAIAAgHQgEAEgFACQgFACgGAAQgHgBgFgBgAgRAPQAAAMAQABIAIgBQAEgCADgDQAEgDAAgIIAAgIIgTAAQgQgBAAANg");
	this.shape_299.setTransform(86,263);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgKABgHQACgHAEgEQAEgEAFgCQAEgBAGAAQAFAAAFABQAFACAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgDQgEAGAAAMQAAANAEAHQADAIAKgBQALAAADgHQAEgHAAgNQAAgMgEgGQgDgIgLAAQgKAAgDAIg");
	this.shape_300.setTransform(74.7,261.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_301.setTransform(67.1,263);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgQAIgKQAHgJANAAQAOAAAIAJQAHAJAAAQIAAAEIgvAAQAAALAGAHQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFACQgGAEgJAAQgOgBgIgIgAgJgYQgEADgCAEIgCAGIgBAHIAlAAIAAgHIgCgFQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_302.setTransform(59.4,263);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgbA0IAAhnIAKAAIAAAJQAEgFAFgCQAFgCAFAAQAMAAAFAGQAGAFACAHQABAIAAAKQAAAKgBAHQgCAHgFAGQgDACgFACQgEACgGAAQgFAAgFgCQgEgCgFgGIAAApgAgNgjQgEAIAAAMQAAANAEAGQADAIAKgBQALAAADgHQAEgGAAgNQAAgMgEgIQgDgHgLAAQgJAAgEAHg");
	this.shape_303.setTransform(51.8,264.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAEAFADQAGACAGAAQAJgBAFgDQAFgDAAgGQAAgKgMgBIgLgBQgKAAgFgEQgGgFAAgJQAAgJAHgGQAIgGAKABQARgBAJAIIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADADQADACAHAAIAKABQAKABAGAEQAFAEAAAJQAAALgIAFQgHAHgOAAQgIgBgHgCg");
	this.shape_304.setTransform(44,263);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AASA0IAAgtQAAgIgFgFQgEgEgJAAQgHAAgFAEQgFAFAAAIIAAAtIgKAAIAAhnIAKAAIAAAoQAIgIAMAAQALgBAIAIQAGAGAAAMIAAAug");
	this.shape_305.setTransform(679.3,240.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AAKAvQgJgBgEgFQgEgFAAgIIAAgrIgJAAIAAgJIAJAAIAAgVIAJAAIAAAVIAPAAIAAAJIgPAAIAAAqQAAALAKAAIAFAAIAAAJg");
	this.shape_306.setTransform(672.7,241.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_307.setTransform(668.6,240.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AATAkIgTg3IgRA3IgLAAIgWhHIALAAIAQA5IATg5IAIAAIATA5IAQg5IAMAAIgWBHg");
	this.shape_308.setTransform(661.6,242.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgPAiQgHgCgGgGIAHgHQAEAFAFACQAGABAGABQAJgBAFgDQAFgDAAgGQAAgJgMgCIgLgBQgKABgFgFQgGgFAAgJQAAgKAHgFQAIgFAKAAQARAAAJAHIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADACQADADAHAAIAKABQAKABAGAEQAFAEAAAKQAAAKgIAFQgHAHgOgBQgIAAgHgCg");
	this.shape_309.setTransform(649.1,242.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AAKAvQgJgBgEgFQgEgFAAgIIAAgrIgJAAIAAgJIAJAAIAAgVIAJAAIAAAVIAPAAIAAAJIgPAAIAAAqQAAALAKAAIAFAAIAAAJg");
	this.shape_310.setTransform(643.1,241.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgRAIgJQAHgJANAAQAOgBAIAKQAHAJAAAQIAAADIgvAAQAAAMAGAHQAFAGAJAAQAGAAAFgBQAEgCAEgFIAHAHQgGAFgFADQgGACgJAAQgOABgIgJgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_311.setTransform(636.9,242.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AARA0IgWglIgNAQIAAAVIgLAAIAAhnIALAAIAABEIAegkIAOAAIgZAaIAdAtg");
	this.shape_312.setTransform(629.6,240.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgCQAEgDAHAAIAJABQAEACAEADIgIAJIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_313.setTransform(622.9,242.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgFAAgIQAAgKAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJAAQgGgBgEACQgEABgDAGIgIgHQAFgGAGgDQAFgBAJAAQAcgBAAAYIAAAwIgKAAIAAgIQgEAFgFACQgFACgGgBQgHAAgFgBgAgRAQQAAAMAQAAIAIgBQAEgBADgEQAEgDAAgJIAAgIIgTAAQgQABAAANg");
	this.shape_314.setTransform(615.1,242.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AAoAkIAAgrQABgJgFgFQgEgFgJAAQgIAAgFAFQgFAFAAAIIAAAsIgJAAIAAgrQAAgJgFgFQgEgFgJAAQgIAAgFAFQgFAFAAAJIAAArIgKAAIAAhHIAKAAIAAAIQAIgIANAAQAPAAAFAMQAJgMAPAAQAGAAAFACQAEACAFAEQAGAGAAAMIAAAtg");
	this.shape_315.setTransform(605.2,242.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AAFA0QgIAAgEgGQgFgFAAgIIAAhUIAKAAIAABTQABAGABACQACACAFABIAGAAIAAAJg");
	this.shape_316.setTransform(593.5,240.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgFAAgIQAAgKAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJAAQgGgBgEACQgEABgDAGIgIgHQAFgGAGgDQAFgBAJAAQAcgBAAAYIAAAwIgKAAIAAgIQgEAFgFACQgFACgGgBQgHAAgFgBgAgRAQQAAAMAQAAIAIgBQAEgBADgEQAEgDAAgJIAAgIIgTAAQgQABAAANg");
	this.shape_317.setTransform(586.8,242.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgIAyQgFgCgEgGIAAAJIgKAAIAAhmIAKAAIAAAoQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAHQABAHAAAKQAAAKgBAIQgCAHgFAGQgDADgFABQgEACgGAAQgFAAgFgCgAgNgEQgEAHAAAMQAAANAEAIQADAGAKAAQALABADgIQAEgHAAgNQAAgMgEgHQgDgHgLAAQgJAAgEAHg");
	this.shape_318.setTransform(579.5,241);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgLAiQgEgCgFgEQgEgFgDgHQgBgGAAgKQAAgIABgIQADgGAEgFQAFgFAEgCQAFgBAGAAQAGAAAGABQAEACAFAFQAFAFABAGQACAHAAAJQAAAJgCAHQgCAHgEAFQgFAEgEACQgGACgGAAQgGAAgFgCgAgLgWQgFAFAAAFQgCAFAAAHIABANQABAFAFAEQAEAFAHAAQAIAAAEgEQAFgEAAgGIACgNIgCgMQAAgFgEgEQgFgFgIAAQgHAAgEAEg");
	this.shape_319.setTransform(571.5,242.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AAGA0QgJAAgEgGQgFgFAAgIIAAhUIAKAAIAABTQABAGABACQACACAFABIAGAAIAAAJg");
	this.shape_320.setTransform(565.9,240.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgNAyQgGgCgFgGIAGgGQAEAEAEABQAEACAFAAQAJAAAFgGQAFgGAAgKIAAgLQgEAGgFACQgFACgFAAQgGAAgEgCQgFgCgEgEQgDgEgDgHQgBgHAAgJQAAgLABgHQADgHADgEQAEgEAFgCQAEgCAGABQAGAAAEABQAFACAEAGIAAgJIAKAAIAABIQAAAOgIAJQgHAIgOABQgHAAgFgDgAgNgjQgEAHAAANQAAALAEAGQAEAIAJAAQALAAAEgHQADgGAAgMQAAgNgDgHQgEgIgLABQgJAAgEAHg");
	this.shape_321.setTransform(559.3,244.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AATAkIgTg3IgRA3IgKAAIgXhHIAMAAIAPA5IATg5IAIAAIAUA5IAPg5IAMAAIgXBHg");
	this.shape_322.setTransform(546.7,242.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgRAIgJQAHgJANAAQAOgBAIAKQAHAJAAAQIAAADIgvAAQAAAMAGAHQAFAGAJAAQAGAAAFgBQAEgCAEgFIAHAHQgGAFgFADQgGACgJAAQgOABgIgJgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_323.setTransform(537.6,242.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgEAFgBAJIAAArIgKAAIAAhHIAKAAIAAAIQAIgIALAAQAMAAAHAGQAHAIAAAMIAAAtg");
	this.shape_324.setTransform(529.7,242.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgLAiQgFgCgEgEQgEgFgCgHQgCgGAAgKQAAgIACgIQACgGAEgFQAEgFAFgCQAGgBAFAAQAHAAAEABQAFACAFAFQAEAFACAGQACAHAAAJQAAAJgCAHQgCAHgEAFQgFAEgFACQgEACgHAAQgFAAgGgCgAgLgWQgEAFgBAFQgCAFAAAHIABANQACAFAEAEQAEAFAHAAQAHAAAFgEQAFgEABgGIABgNIgBgMQgBgFgEgEQgGgFgHAAQgHAAgEAEg");
	this.shape_325.setTransform(518.2,242.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AAKAvQgJgBgEgFQgEgFAAgIIAAgrIgJAAIAAgJIAJAAIAAgVIAJAAIAAAVIAPAAIAAAJIgPAAIAAAqQAAALAKAAIAFAAIAAAJg");
	this.shape_326.setTransform(511.8,241.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFABAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIAMAAQALAAAHAGQAHAIAAAMIAAAtg");
	this.shape_327.setTransform(505.5,242.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_328.setTransform(499.6,240.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgJABgIQACgHAEgEQAEgEAFgBQAEgCAGAAQAFAAAFACQAFABAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgEQgEAHAAAMQAAANAEAIQADAGAKAAQALABADgIQAEgHAAgNQAAgMgEgHQgDgHgLAAQgKAAgDAHg");
	this.shape_329.setTransform(490,241);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFAAAJIAAArIgKAAIAAhHIAKAAIAAAIQAIgIAMAAQALAAAHAGQAHAIAAAMIAAAtg");
	this.shape_330.setTransform(482.2,242.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgFAAgIQAAgKAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJAAQgGgBgEACQgEABgDAGIgIgHQAFgGAGgDQAFgBAJAAQAcgBAAAYIAAAwIgKAAIAAgIQgEAFgFACQgFACgGgBQgHAAgFgBgAgRAQQAAAMAQAAIAIgBQAEgBADgEQAEgDAAgJIAAgIIgTAAQgQABAAANg");
	this.shape_331.setTransform(474,242.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgbA0IAAhnIAKAAIAAAJQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAHQABAIAAAKQAAAKgBAHQgCAHgFAGQgDADgFABQgEACgGAAQgFAAgFgCQgEgCgFgGIAAApgAgNgjQgEAIAAAMQAAANAEAHQADAGAKAAQALABADgIQAEgGAAgNQAAgMgEgIQgDgHgLAAQgJAAgEAHg");
	this.shape_332.setTransform(466.7,244.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AARAkIgRgcIgQAcIgNAAIAYgkIgXgjIANAAIAPAbIARgbIAMAAIgXAjIAYAkg");
	this.shape_333.setTransform(459.1,242.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgRAIgJQAHgJANAAQAOgBAIAKQAHAJAAAQIAAADIgvAAQAAAMAGAHQAFAGAJAAQAGAAAFgBQAEgCAEgFIAHAHQgGAFgFADQgGACgJAAQgOABgIgJgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_334.setTransform(451.7,242.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAFgFAAgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgMAAQgLAAgHgHg");
	this.shape_335.setTransform(440.2,242.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgKAiQgGgCgEgEQgEgFgCgHQgCgGAAgKQAAgIACgIQACgGAEgFQAEgFAGgCQAFgBAFAAQAHAAAEABQAFACAFAFQAEAFACAGQACAHAAAJQAAAJgCAHQgCAHgFAFQgEAEgFACQgEACgHAAQgFAAgFgCgAgLgWQgEAFgBAFQgCAFAAAHIABANQACAFAEAEQAEAFAHAAQAHAAAFgEQAFgEABgGIABgNIgBgMQgBgFgEgEQgGgFgHAAQgHAAgEAEg");
	this.shape_336.setTransform(432.3,242.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgYAzIAAgJIADAAQAGAAACgCIAEgHIAFgOIgahFIAMAAIASA4IAUg4IALAAIggBYQgCAGgCACIgHAEIgIABg");
	this.shape_337.setTransform(425.2,244);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgbA0IAAhnIAKAAIAAAJQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAHQABAIAAAKQAAAKgBAHQgCAHgFAGQgDADgFABQgEACgGAAQgFAAgFgCQgEgCgFgGIAAApgAgNgjQgEAIAAAMQAAANAEAHQADAGAKAAQALABADgIQAEgGAAgNQAAgMgEgIQgDgHgLAAQgJAAgEAHg");
	this.shape_338.setTransform(414.6,244.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AAFA0QgHAAgFgGQgFgFAAgIIAAhUIAKAAIAABTQAAAGACACQACACAFABIAGAAIAAAJg");
	this.shape_339.setTransform(408.7,240.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgRAIgJQAHgJANAAQAOgBAIAKQAHAJAAAQIAAADIgvAAQAAAMAGAHQAFAGAJAAQAGAAAFgBQAEgCAEgFIAHAHQgGAFgFADQgGACgJAAQgOABgIgJgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_340.setTransform(402.3,242.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AASA0IAAgtQAAgIgFgFQgFgEgHAAQgIAAgFAEQgFAFABAIIAAAtIgLAAIAAhnIALAAIAAAoQAHgIALAAQANgBAGAIQAHAGAAAMIAAAug");
	this.shape_341.setTransform(394.4,240.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgRAIgJQAHgJANAAQAOgBAIAKQAHAJAAAQIAAADIgvAAQAAAMAGAHQAFAGAJAAQAGAAAFgBQAEgCAEgFIAHAHQgGAFgFADQgGACgJAAQgOABgIgJgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_342.setTransform(382.8,242.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AAXA0IgXhSIgWBSIgLAAIgahnIAMAAIAVBTIAWhTIAJAAIAXBTIAThTIAMAAIgaBng");
	this.shape_343.setTransform(372.8,240.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_344.setTransform(361.1,245.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgRAIgJQAHgJANAAQAOgBAIAKQAHAJAAAQIAAADIgvAAQAAAMAGAHQAFAGAJAAQAGAAAFgBQAEgCAEgFIAHAHQgGAFgFADQgGACgJAAQgOABgIgJgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_345.setTransform(355.2,242.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgJABgIQACgHAEgEQAEgEAFgBQAEgCAGAAQAFAAAFACQAFABAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgEQgEAHAAAMQAAANAEAIQADAGAKAAQALABADgIQAEgHAAgNQAAgMgEgHQgDgHgLAAQgKAAgDAHg");
	this.shape_346.setTransform(347.3,241);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_347.setTransform(341.7,240.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AATAkIgTg3IgSA3IgKAAIgWhHIALAAIARA5IATg5IAIAAIASA5IARg5IALAAIgWBHg");
	this.shape_348.setTransform(334.7,242.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgJABgIQACgHAEgEQAEgEAFgBQAEgCAGAAQAFAAAFACQAFABAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgEQgEAHAAAMQAAANAEAIQADAGAKAAQALABADgIQAEgHAAgNQAAgMgEgHQgDgHgLAAQgKAAgDAHg");
	this.shape_349.setTransform(325.3,241);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AAFA0QgHAAgFgGQgFgFAAgIIAAhUIALAAIAABTQAAAGABACQACACAGABIAFAAIAAAJg");
	this.shape_350.setTransform(319.8,240.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgCQAEgDAHAAIAJABQAEACAEADIgIAJIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_351.setTransform(314.8,242.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgKAiQgGgCgEgEQgEgFgCgHQgCgGAAgKQAAgIACgIQACgGAEgFQAEgFAGgCQAFgBAFAAQAHAAAEABQAFACAFAFQAEAFACAGQACAHAAAJQAAAJgCAHQgBAHgGAFQgDAEgGACQgEACgHAAQgFAAgFgCgAgLgWQgEAFgCAFQgBAFAAAHIABANQACAFAEAEQAEAFAHAAQAHAAAFgEQAEgEACgGIAAgNIAAgMQgCgFgDgEQgGgFgHAAQgHAAgEAEg");
	this.shape_352.setTransform(307.3,242.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AATAkIgTg3IgSA3IgKAAIgWhHIALAAIARA5IATg5IAIAAIATA5IAQg5IALAAIgWBHg");
	this.shape_353.setTransform(298.3,242.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgNAyQgGgCgFgGIAGgGQAEAEAEABQAEACAFAAQAJAAAFgGQAFgGAAgKIAAgLQgEAGgFACQgFACgFAAQgGAAgEgCQgEgCgFgEQgDgEgCgHQgCgHAAgJQAAgLACgHQACgHADgEQAEgEAFgCQAEgCAGABQAFAAAFABQAFACAEAGIAAgJIAKAAIAABIQAAAOgIAJQgHAIgOABQgHAAgFgDgAgNgjQgEAHAAANQAAALAEAGQAEAIAJAAQALAAADgHQAEgGAAgMQAAgNgEgHQgDgIgLABQgJAAgEAHg");
	this.shape_354.setTransform(285.3,244.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgEAFAAAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIALAAQAMAAAHAGQAHAIAAAMIAAAtg");
	this.shape_355.setTransform(277.5,242.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_356.setTransform(271.6,240.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AATAkIgTg3IgSA3IgKAAIgWhHIALAAIARA5IASg5IAIAAIATA5IARg5IALAAIgWBHg");
	this.shape_357.setTransform(264.6,242.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgLAiQgEgCgFgEQgFgFgCgHQgBgGAAgKQAAgIABgIQACgGAFgFQAFgFAEgCQAFgBAGAAQAGAAAGABQAEACAFAFQAFAFABAGQACAHAAAJQAAAJgCAHQgBAHgFAFQgFAEgEACQgGACgGAAQgGAAgFgCgAgLgWQgEAFgCAFQgBAFAAAHIABANQABAFAFAEQAEAFAHAAQAHAAAFgEQAFgEAAgGIABgNIgBgMQAAgFgEgEQgGgFgHAAQgHAAgEAEg");
	this.shape_358.setTransform(255.5,242.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AAGA0QgJAAgEgGQgFgFAAgIIAAhUIALAAIAABTQgBAGACACQACACAFABIAGAAIAAAJg");
	this.shape_359.setTransform(249.9,240.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AAFA0QgIAAgEgGQgFgFAAgIIAAhUIAKAAIAABTQABAGABACQACACAFABIAGAAIAAAJg");
	this.shape_360.setTransform(245.6,240.9);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgKAiQgFgCgFgEQgFgFgCgHQgBgGAAgKQAAgIABgIQACgGAFgFQAFgFAFgCQAEgBAGAAQAGAAAGABQAFACAEAFQAEAFACAGQACAHAAAJQAAAJgCAHQgBAHgFAFQgFAEgEACQgGACgGAAQgGAAgEgCgAgLgWQgFAFgBAFQgBAFAAAHIABANQACAFAEAEQAEAFAHAAQAHAAAFgEQAEgEABgGIABgNIgBgMQgBgFgDgEQgGgFgHAAQgHAAgEAEg");
	this.shape_361.setTransform(239.2,242.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgHA0IAAg+IgKAAIAAgIIAKAAIAAgOQAAgIAFgFQADgGAJAAIAHAAIAAAJIgFAAQgKAAAAALIAAANIAPAAIAAAIIgPAAIAAA+g");
	this.shape_362.setTransform(233.2,240.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgEgFgJAAQgHAAgFAFQgEAFgBAJIAAArIgKAAIAAhHIAKAAIAAAIQAIgIALAAQAMAAAHAGQAHAIAAAMIAAAtg");
	this.shape_363.setTransform(223.2,242.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgFAAgIQAAgKAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJAAQgGgBgEACQgEABgDAGIgIgHQAFgGAGgDQAFgBAJAAQAcgBAAAYIAAAwIgKAAIAAgIQgEAFgFACQgFACgGgBQgHAAgFgBgAgRAQQAAAMAQAAIAIgBQAEgBADgEQAEgDAAgJIAAgIIgTAAQgQABAAANg");
	this.shape_364.setTransform(215,242.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgHA0IAAg+IgKAAIAAgIIAKAAIAAgOQAAgIAFgFQADgGAJAAIAIAAIAAAJIgGAAQgKAAAAALIAAANIAQAAIAAAIIgQAAIAAA+g");
	this.shape_365.setTransform(209.2,240.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AAGA0QgJAAgEgGQgFgFAAgIIAAhUIAKAAIAABTQABAGABACQACACAFABIAGAAIAAAJg");
	this.shape_366.setTransform(201.5,240.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgFAAgIQAAgKAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJAAQgGgBgEACQgEABgDAGIgIgHQAFgGAGgDQAFgBAJAAQAcgBAAAYIAAAwIgKAAIAAgIQgEAFgFACQgFACgGgBQgHAAgFgBgAgRAQQAAAMAQAAIAIgBQAEgBADgEQAEgDAAgJIAAgIIgTAAQgQABAAANg");
	this.shape_367.setTransform(194.9,242.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgYAzIAAgJIADAAQAGAAACgCIAEgHIAFgOIgahFIAMAAIASA4IAUg4IALAAIggBYQgCAGgCACIgHAEIgIABg");
	this.shape_368.setTransform(188,244);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgKAiQgFgCgFgEQgEgFgDgHQgBgGAAgKQAAgIABgIQADgGAEgFQAFgFAFgCQAEgBAGAAQAGAAAFABQAGACAEAFQAEAFACAGQACAHAAAJQAAAJgCAHQgCAHgFAFQgDAEgGACQgFACgGAAQgGAAgEgCgAgLgWQgEAFgCAFQgBAFAAAHIABANQACAFAEAEQAEAFAHAAQAIAAAEgEQAEgEABgGIABgNIgBgMQgBgFgDgEQgFgFgIAAQgHAAgEAEg");
	this.shape_369.setTransform(181,242.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AAFA0QgHAAgFgGQgFgFAAgIIAAhUIALAAIAABTQAAAGABACQACACAGABIAFAAIAAAJg");
	this.shape_370.setTransform(175.4,240.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgGgQIANAAIAAAVIgNAMg");
	this.shape_371.setTransform(167.3,246.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgRAIgJQAHgJANAAQAOgBAIAKQAHAJAAAQIAAADIgvAAQAAAMAGAHQAFAGAJAAQAGAAAFgBQAEgCAEgFIAHAHQgGAFgFADQgGACgJAAQgOABgIgJgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_372.setTransform(161.5,242.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgOAyQgFgCgFgGIAGgGQAEAEAEABQADACAGAAQAJAAAFgGQAFgGAAgKIAAgLQgEAGgFACQgFACgFAAQgGAAgEgCQgFgCgEgEQgDgEgCgHQgCgHAAgJQAAgLACgHQACgHADgEQAEgEAFgCQAEgCAGABQAFAAAFABQAFACAEAGIAAgJIAKAAIAABIQAAAOgIAJQgHAIgOABQgIAAgFgDgAgNgjQgEAHAAANQAAALAEAGQADAIAKAAQALAAADgHQAEgGAAgMQAAgNgEgHQgDgIgLABQgKAAgDAHg");
	this.shape_373.setTransform(153.6,244.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgCQAEgDAHAAIAJABQAEACAEADIgIAJIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_374.setTransform(147.4,242.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgFAAgIQAAgKAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJAAQgGgBgEACQgEABgDAGIgIgHQAFgGAGgDQAFgBAJAAQAcgBAAAYIAAAwIgKAAIAAgIQgEAFgFACQgFACgGgBQgHAAgFgBgAgRAQQAAAMAQAAIAIgBQAEgBADgEQAEgDAAgJIAAgIIgTAAQgQABAAANg");
	this.shape_375.setTransform(139.6,242.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AAFA0QgHAAgFgGQgFgFAAgIIAAhUIAKAAIAABTQAAAGACACQACACAGABIAFAAIAAAJg");
	this.shape_376.setTransform(134.3,240.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgFAAgIQAAgKAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJAAQgGgBgEACQgEABgDAGIgIgHQAFgGAGgDQAFgBAJAAQAcgBAAAYIAAAwIgKAAIAAgIQgEAFgFACQgFACgGgBQgHAAgFgBgAgRAQQAAAMAQAAIAIgBQAEgBADgEQAEgDAAgJIAAgIIgTAAQgQABAAANg");
	this.shape_377.setTransform(124.1,242.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgUAcQgIgKAAgSQAAgRAIgJQAHgJANAAQAOgBAIAKQAHAJAAAQIAAADIgvAAQAAAMAGAHQAFAGAJAAQAGAAAFgBQAEgCAEgFIAHAHQgGAFgFADQgGACgJAAQgOABgIgJgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_378.setTransform(113,242.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgCQAEgDAHAAIAJABQAEACAEADIgIAJIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_379.setTransform(106.8,242.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAFAFAHAAQAIAAAFgFQAFgFgBgJIAAgrIALAAIAABGIgLAAIAAgIQgHAJgMAAQgLAAgHgHg");
	this.shape_380.setTransform(99,242.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AAKAvQgJgBgEgFQgEgFAAgIIAAgrIgJAAIAAgJIAJAAIAAgVIAJAAIAAAVIAPAAIAAAJIgPAAIAAAqQAAALAKAAIAFAAIAAAJg");
	this.shape_381.setTransform(92.5,241.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgXAkIAAhHIALAAIAAAJQADgEAFgCQAEgDAHAAIAJABQAEACAEADIgIAJIgFgFIgHgBQgHAAgFAGQgEAFAAAIIAAArg");
	this.shape_382.setTransform(87.7,242.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAEgFABgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgLAAQgMAAgHgHg");
	this.shape_383.setTransform(80,242.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgEAFAAAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIALAAQAMAAAHAGQAHAIAAAMIAAAtg");
	this.shape_384.setTransform(71.9,242.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgSAuQgGgGgCgHQgBgIAAgKQAAgJABgIQACgHAEgEQAEgEAFgBQAEgCAGAAQAFAAAFACQAFABAEAGIAAgoIAKAAIAABmIgKAAIAAgJQgEAGgFACQgFACgFAAQgMAAgFgGgAgNgEQgEAHAAAMQAAANAEAIQADAGAKAAQALABADgIQAEgHAAgNQAAgMgEgHQgDgHgLAAQgKAAgDAHg");
	this.shape_385.setTransform(60,241);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgEgFgJAAQgHAAgFAFQgFAFABAJIAAArIgLAAIAAhHIALAAIAAAIQAHgIAMAAQALAAAHAGQAHAIAAAMIAAAtg");
	this.shape_386.setTransform(52.2,242.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgFAAgIQAAgKAGgFQAGgFAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJAAQgGgBgEACQgEABgDAGIgIgHQAFgGAGgDQAFgBAJAAQAcgBAAAYIAAAwIgKAAIAAgIQgEAFgFACQgFACgGgBQgHAAgFgBgAgRAQQAAAMAQAAIAIgBQAEgBADgEQAEgDAAgJIAAgIIgTAAQgQABAAANg");
	this.shape_387.setTransform(44,242.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgSAuQgGgFgCgIQgBgIAAgJQAAgLABgGQACgIAEgEQAEgDAFgCQAEgCAGAAQAFAAAFACQAFACAEAFIAAgoIAKAAIAABmIgKAAIAAgIQgEAFgFACQgFACgFAAQgMAAgFgGgAgNgEQgEAHAAANQAAAMAEAIQADAGAKABQALAAADgIQAEgHAAgMQAAgNgEgHQgDgHgLAAQgKAAgDAHg");
	this.shape_388.setTransform(671.6,220.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AAGAzQgJAAgEgEQgFgGAAgJIAAhSIALAAIAABSQgBAGACACQACADAGgBIAFAAIAAAJg");
	this.shape_389.setTransform(666.1,220.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_390.setTransform(661.7,220.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAFAFAHAAQAIAAAFgFQAEgFAAgJIAAgrIALAAIAABGIgLAAIAAgIQgHAJgLAAQgMAAgHgHg");
	this.shape_391.setTransform(655.8,222);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgIAyQgFgCgEgFIAAAIIgKAAIAAhmIAKAAIAAAoQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAIQABAGAAALQAAAJgBAIQgCAIgFAFQgDACgFACQgEACgGAAQgFAAgFgCgAgNgEQgEAHAAANQAAAMAEAIQADAGAKABQALAAADgIQAEgHAAgMQAAgNgEgHQgDgHgLAAQgJAAgEAHg");
	this.shape_392.setTransform(648,220.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgLAiQgFgCgEgFQgFgEgBgHQgCgHAAgJQAAgIACgIQABgGAFgFQAEgFAFgCQAGgCAFAAQAHAAAFACQAEACAFAFQAFAFABAGQACAHAAAJQAAAJgCAHQgCAHgEAFQgFAEgEACQgFADgHgBQgFABgGgDgAgLgWQgFAEAAAGQgCAGAAAGIABANQABAFAFAFQAEAEAHAAQAIAAAEgEQAEgEACgGIABgNIgBgMQgCgGgDgDQgFgFgIgBQgHABgEAEg");
	this.shape_393.setTransform(636.4,222);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AAKAuQgJAAgEgFQgEgFAAgJIAAgrIgJAAIAAgIIAJAAIAAgVIAJAAIAAAVIAPAAIAAAIIgPAAIAAArQAAAKAKAAIAFAAIAAAJg");
	this.shape_394.setTransform(630.1,220.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgSAuQgGgFgCgIQgBgIAAgJQAAgLABgGQACgIAEgEQAEgDAFgCQAEgCAGAAQAFAAAFACQAFACAEAFIAAgoIAKAAIAABmIgKAAIAAgIQgEAFgFACQgFACgFAAQgMAAgFgGgAgNgEQgEAHAAANQAAAMAEAIQADAGAKABQALAAADgIQAEgHAAgMQAAgNgEgHQgDgHgLAAQgKAAgDAHg");
	this.shape_395.setTransform(620,220.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgUAbQgIgJAAgSQAAgRAIgJQAHgKANAAQAOAAAIAJQAHAKAAAQIAAADIgvAAQAAANAGAGQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFADQgGACgJAAQgOABgIgKgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_396.setTransform(612.4,222);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgUAbQgIgJAAgSQAAgRAIgJQAHgKANAAQAOAAAIAJQAHAKAAAQIAAADIgvAAQAAANAGAGQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFADQgGACgJAAQgOABgIgKgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_397.setTransform(604.7,222);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgFgFgIAAQgHAAgFAFQgFAFABAJIAAArIgLAAIAAhGIALAAIAAAIQAHgJAMAAQALAAAHAGQAHAIAAANIAAAsg");
	this.shape_398.setTransform(596.8,222);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAFAFAHAAQAIAAAFgFQAFgFgBgJIAAgrIALAAIAABGIgLAAIAAgIQgHAJgMAAQgLAAgHgHg");
	this.shape_399.setTransform(585,222);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgLAiQgFgCgEgFQgEgEgCgHQgCgHAAgJQAAgIACgIQACgGAEgFQAEgFAFgCQAGgCAFAAQAHAAAEACQAFACAFAFQAEAFACAGQACAHAAAJQAAAJgCAHQgCAHgFAFQgEAEgFACQgEADgHgBQgFABgGgDgAgLgWQgEAEgBAGQgCAGAAAGIABANQACAFAEAFQAEAEAHAAQAHAAAFgEQAFgEABgGIABgNIgBgMQgBgGgEgDQgGgFgHgBQgHABgEAEg");
	this.shape_400.setTransform(577.1,222);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgYAzIAAgJIADAAQAGAAACgCIAEgHIAFgOIgahFIAMAAIASA4IAUg4IALAAIggBYQgCAFgCADIgHAEIgIABg");
	this.shape_401.setTransform(570,223.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AAKAuQgJAAgEgFQgEgFAAgJIAAgrIgJAAIAAgIIAJAAIAAgVIAJAAIAAAVIAPAAIAAAIIgPAAIAAArQAAAKAKAAIAFAAIAAAJg");
	this.shape_402.setTransform(560.7,220.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIALAAIAAAJQADgFAFgCQAEgDAHAAIAJABQAEABAEAEIgIAIIgFgEIgHgBQgHAAgFAFQgEAGAAAIIAAArg");
	this.shape_403.setTransform(555.9,222);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgKAiQgGgCgEgFQgEgEgCgHQgCgHAAgJQAAgIACgIQACgGAEgFQAEgFAGgCQAFgCAFAAQAHAAAEACQAFACAFAFQAEAFACAGQACAHAAAJQAAAJgCAHQgCAHgFAFQgEAEgFACQgEADgHgBQgFABgFgDgAgLgWQgEAEgBAGQgCAGAAAGIABANQABAFAFAFQAEAEAHAAQAHAAAFgEQAFgEABgGIABgNIgBgMQgBgGgEgDQgGgFgHgBQgHABgEAEg");
	this.shape_404.setTransform(548.4,222);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgbA0IAAhmIAKAAIAAAIQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAIQABAHAAALQAAAJgBAHQgCAIgFAEQgDADgFACQgEACgGAAQgFAAgFgCQgEgCgFgFIAAAogAgNgjQgEAIAAANQAAAMAEAHQADAGAKABQALAAADgIQAEgGAAgMQAAgNgEgIQgDgHgLAAQgJAAgEAHg");
	this.shape_405.setTransform(540.8,223.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgbA0IAAhmIAKAAIAAAIQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAIQABAHAAALQAAAJgBAHQgCAIgFAEQgDADgFACQgEACgGAAQgFAAgFgCQgEgCgFgFIAAAogAgNgjQgEAIAAANQAAAMAEAHQADAGAKABQALAAADgIQAEgGAAgMQAAgNgEgIQgDgHgLAAQgJAAgEAHg");
	this.shape_406.setTransform(532.9,223.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAEgFABgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgLAAQgMAAgHgHg");
	this.shape_407.setTransform(524.7,222);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgPAiQgHgDgGgFIAHgHQAEAEAFADQAGABAGAAQAJABAFgEQAFgDAAgGQAAgJgMgBIgLgBQgKAAgFgFQgGgFAAgJQAAgJAHgGQAIgFAKgBQARABAJAHIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADACQADADAHABIAKABQAKAAAGADQAFAFAAAKQAAAKgIAGQgHAFgOAAQgIABgHgDg");
	this.shape_408.setTransform(516.9,222);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AgUAbQgIgJAAgSQAAgRAIgJQAHgKANAAQAOAAAIAJQAHAKAAAQIAAADIgvAAQAAANAGAGQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFADQgGACgJAAQgOABgIgKgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_409.setTransform(505.9,222);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AASAzIAAgsQAAgHgFgFQgEgGgJAAQgHAAgFAGQgFAFAAAHIAAAsIgKAAIAAhlIAKAAIAAAnQAIgJAMAAQALAAAIAIQAGAGAAALIAAAug");
	this.shape_410.setTransform(498.1,220.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AAKAuQgJAAgEgFQgEgFAAgJIAAgrIgJAAIAAgIIAJAAIAAgVIAJAAIAAAVIAPAAIAAAIIgPAAIAAArQAAAKAKAAIAFAAIAAAJg");
	this.shape_411.setTransform(491.5,220.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AAGAzQgJAAgEgEQgFgGAAgJIAAhSIALAAIAABSQgBAGACACQACADAGgBIAFAAIAAAJg");
	this.shape_412.setTransform(483.8,220.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AAGAzQgJAAgEgEQgFgGAAgJIAAhSIAKAAIAABSQABAGABACQACADAFgBIAGAAIAAAJg");
	this.shape_413.setTransform(479.5,220.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgEAAgJQAAgKAGgGQAGgEAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJgBQgGABgEABQgEACgDAFIgIgHQAFgGAGgDQAFgCAJAAQAcAAAAAYIAAAvIgKAAIAAgHQgEAFgFABQgFACgGAAQgHABgFgCgAgRAQQAAAMAQgBIAIgBQAEgBADgCQAEgEAAgJIAAgIIgTAAQgQAAAAAOg");
	this.shape_414.setTransform(472.9,222);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgPAiQgHgDgGgFIAHgHQAEAEAFADQAGABAGAAQAJABAFgEQAFgDAAgGQAAgJgMgBIgLgBQgKAAgFgFQgGgFAAgJQAAgJAHgGQAIgFAKgBQARABAJAHIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADACQADADAHABIAKABQAKAAAGADQAFAFAAAKQAAAKgIAGQgHAFgOAAQgIABgHgDg");
	this.shape_415.setTransform(462,222);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgUAbQgIgJAAgSQAAgRAIgJQAHgKANAAQAOAAAIAJQAHAKAAAQIAAADIgvAAQAAANAGAGQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFADQgGACgJAAQgOABgIgKgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_416.setTransform(454.6,222);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgSAuQgGgFgCgIQgBgIAAgJQAAgLABgGQACgIAEgEQAEgDAFgCQAEgCAGAAQAFAAAFACQAFACAEAFIAAgoIAKAAIAABmIgKAAIAAgIQgEAFgFACQgFACgFAAQgMAAgFgGgAgNgEQgEAHAAANQAAAMAEAIQADAGAKABQALAAADgIQAEgHAAgMQAAgNgEgHQgDgHgLAAQgKAAgDAHg");
	this.shape_417.setTransform(446.7,220.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_418.setTransform(441.1,220.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgEAkIgahHIAMAAIASA4IAUg4IALAAIgaBHg");
	this.shape_419.setTransform(436,222);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgLAiQgFgCgEgFQgFgEgBgHQgCgHAAgJQAAgIACgIQABgGAFgFQAEgFAFgCQAGgCAFAAQAHAAAFACQAEACAFAFQAFAFABAGQACAHAAAJQAAAJgCAHQgCAHgEAFQgEAEgFACQgFADgHgBQgFABgGgDgAgLgWQgFAEAAAGQgCAGAAAGIABANQABAFAFAFQAEAEAHAAQAIAAAEgEQAEgEACgGIABgNIgBgMQgCgGgDgDQgFgFgIgBQgHABgEAEg");
	this.shape_420.setTransform(429,222);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIALAAIAAAJQADgFAFgCQAEgDAHAAIAJABQAEABAEAEIgIAIIgFgEIgHgBQgHAAgFAFQgEAGAAAIIAAArg");
	this.shape_421.setTransform(422.7,222);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgbA0IAAhmIAKAAIAAAIQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAIQABAHAAALQAAAJgBAHQgCAIgFAEQgDADgFACQgEACgGAAQgFAAgFgCQgEgCgFgFIAAAogAgNgjQgEAIAAANQAAAMAEAHQADAGAKABQALAAADgIQAEgGAAgMQAAgNgEgIQgDgHgLAAQgJAAgEAHg");
	this.shape_422.setTransform(415.2,223.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIALAAIAAAJQADgFAFgCQAEgDAHAAIAJABQAEABAEAEIgIAIIgFgEIgHgBQgHAAgFAFQgEAGAAAIIAAArg");
	this.shape_423.setTransform(405.1,222);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgUAbQgIgJAAgSQAAgRAIgJQAHgKANAAQAOAAAIAJQAHAKAAAQIAAADIgvAAQAAANAGAGQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFADQgGACgJAAQgOABgIgKgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_424.setTransform(397.5,222);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgEAkIgahHIAMAAIASA4IAUg4IALAAIgaBHg");
	this.shape_425.setTransform(390.4,222);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_426.setTransform(385.4,220.4);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AAXAzIgXguIgYAAIAAAuIgLAAIAAhlIAmAAQAOgBAJAIQAIAIAAANQAAALgGAHQgGAHgLACIAZAugAgYgDIAaAAQAKAAAGgFQAFgEAAgKQAAgJgFgFQgHgFgJAAIgaAAg");
	this.shape_427.setTransform(379.2,220.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AAFAzQgHAAgFgEQgFgGAAgJIAAhSIAKAAIAABSQAAAGACACQACADAGgBIAFAAIAAAJg");
	this.shape_428.setTransform(368.8,220.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgEAAgJQAAgKAGgGQAGgEAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJgBQgGABgEABQgEACgDAFIgIgHQAFgGAGgDQAFgCAJAAQAcAAAAAYIAAAvIgKAAIAAgHQgEAFgFABQgFACgGAAQgHABgFgCgAgRAQQAAAMAQgBIAIgBQAEgBADgCQAEgEAAgJIAAgIIgTAAQgQAAAAAOg");
	this.shape_429.setTransform(362.1,222);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AAKAuQgJAAgEgFQgEgFAAgJIAAgrIgJAAIAAgIIAJAAIAAgVIAJAAIAAAVIAPAAIAAAIIgPAAIAAArQAAAKAKAAIAFAAIAAAJg");
	this.shape_430.setTransform(356.1,220.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_431.setTransform(352,220.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgNAyQgGgCgFgFIAGgHQAEAEAEACQAEABAFAAQAJAAAFgGQAFgGAAgKIAAgLQgEAGgFACQgFABgFAAQgGAAgEgBQgEgCgFgEQgDgEgCgIQgCgGAAgKQAAgKACgHQACgIADgDQAEgEAFgCQAEgBAGgBQAFAAAFACQAFACAEAFIAAgIIAKAAIAABIQAAAOgIAJQgHAIgOABQgHgBgFgCgAgNgjQgEAHAAAMQAAANAEAFQAEAIAJAAQALAAADgHQAEgHAAgMQAAgMgEgHQgDgIgLAAQgJABgEAHg");
	this.shape_432.setTransform(346.1,223.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_433.setTransform(340.5,220.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AgjAzIAAhlIAjAAQAQAAAIAIQAJAIABAJQACAJAAAQIAAAEQAAAOgCAIQgCAJgGAHQgKAJgQAAgAgYAqIAXAAQAFgBAFgBQAFgCAEgFQAFgEABgIIABgVIAAgFQAAgNgCgGQgBgFgEgEQgEgEgFgCQgFgCgFAAIgXAAg");
	this.shape_434.setTransform(334.1,220.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AgFgQIALAAIAAAVIgLAMg");
	this.shape_435.setTransform(323.5,226);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIALAAIAAAJQADgFAFgCQAEgDAHAAIAJABQAEABAEAEIgIAIIgFgEIgHgBQgHAAgFAFQgEAGAAAIIAAArg");
	this.shape_436.setTransform(319.1,222);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgUAbQgIgJAAgSQAAgRAIgJQAHgKANAAQAOAAAIAJQAHAKAAAQIAAADIgvAAQAAANAGAGQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFADQgGACgJAAQgOABgIgKgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_437.setTransform(311.6,222);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgEgFgJAAQgHAAgFAFQgEAFgBAJIAAArIgKAAIAAhGIAKAAIAAAIQAIgJALAAQAMAAAHAGQAHAIAAANIAAAsg");
	this.shape_438.setTransform(303.7,222);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AAKAuQgJAAgEgFQgEgFAAgJIAAgrIgJAAIAAgIIAJAAIAAgVIAJAAIAAAVIAPAAIAAAIIgPAAIAAArQAAAKAKAAIAFAAIAAAJg");
	this.shape_439.setTransform(297.1,220.9);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIALAAIAAAJQADgFAFgCQAEgDAHAAIAJABQAEABAEAEIgIAIIgFgEIgHgBQgHAAgFAFQgEAGAAAIIAAArg");
	this.shape_440.setTransform(292.4,222);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgEAAgJQAAgKAGgGQAGgEAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJgBQgGABgEABQgEACgDAFIgIgHQAFgGAGgDQAFgCAJAAQAcAAAAAYIAAAvIgKAAIAAgHQgEAFgFABQgFACgGAAQgHABgFgCgAgRAQQAAAMAQgBIAIgBQAEgBADgCQAEgEAAgJIAAgIIgTAAQgQAAAAAOg");
	this.shape_441.setTransform(284.6,222);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgbA0IAAhmIAKAAIAAAIQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAIQABAHAAALQAAAJgBAHQgCAIgFAEQgDADgFACQgEACgGAAQgFAAgFgCQgEgCgFgFIAAAogAgNgjQgEAIAAANQAAAMAEAHQADAGAKABQALAAADgIQAEgGAAgMQAAgNgEgIQgDgHgLAAQgJAAgEAHg");
	this.shape_442.setTransform(277.3,223.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AgPAiQgHgDgGgFIAHgHQAEAEAFADQAGABAGAAQAJABAFgEQAFgDAAgGQAAgJgMgBIgLgBQgKAAgFgFQgGgFAAgJQAAgJAHgGQAIgFAKgBQARABAJAHIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADACQADADAHABIAKABQAKAAAGADQAFAFAAAKQAAAKgIAGQgHAFgOAAQgIABgHgDg");
	this.shape_443.setTransform(265.9,222);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgPAiQgHgDgGgFIAHgHQAEAEAFADQAGABAGAAQAJABAFgEQAFgDAAgGQAAgJgMgBIgLgBQgKAAgFgFQgGgFAAgJQAAgJAHgGQAIgFAKgBQARABAJAHIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADACQADADAHABIAKABQAKAAAGADQAFAFAAAKQAAAKgIAGQgHAFgOAAQgIABgHgDg");
	this.shape_444.setTransform(258.7,222);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgUAbQgIgJAAgSQAAgRAIgJQAHgKANAAQAOAAAIAJQAHAKAAAQIAAADIgvAAQAAANAGAGQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFADQgGACgJAAQgOABgIgKgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_445.setTransform(251.3,222);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AASAkIAAgrQAAgJgFgFQgEgFgJAAQgHAAgFAFQgEAFgBAJIAAArIgKAAIAAhGIAKAAIAAAIQAIgJALAAQAMAAAHAGQAHAIAAANIAAAsg");
	this.shape_446.setTransform(243.4,222);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_447.setTransform(237.5,220.4);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgPAiQgHgDgGgFIAHgHQAEAEAFADQAGABAGAAQAJABAFgEQAFgDAAgGQAAgJgMgBIgLgBQgKAAgFgFQgGgFAAgJQAAgJAHgGQAIgFAKgBQARABAJAHIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADACQADADAHABIAKABQAKAAAGADQAFAFAAAKQAAAKgIAGQgHAFgOAAQgIABgHgDg");
	this.shape_448.setTransform(232,222);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAEgFABgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgLAAQgMAAgHgHg");
	this.shape_449.setTransform(224.4,222);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgIAyQgFgCgEgFIAAAIIgKAAIAAhmIAKAAIAAAoQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAIQABAGAAALQAAAJgBAIQgCAIgFAFQgDACgFACQgEACgGAAQgFAAgFgCgAgNgEQgEAHAAANQAAAMAEAIQADAGAKABQALAAADgIQAEgHAAgMQAAgNgEgHQgDgHgLAAQgJAAgEAHg");
	this.shape_450.setTransform(216.6,220.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AAFAzQgHAAgFgEQgFgGAAgJIAAhSIAKAAIAABSQAAAGACACQACADAFgBIAGAAIAAAJg");
	this.shape_451.setTransform(207.1,220.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgOAjQgFgCgEgEQgEgEAAgJQAAgKAGgGQAGgEAMAAIAVAAIAAgHQAAgIgEgEQgFgDgJgBQgGABgEABQgEACgDAFIgIgHQAFgGAGgDQAFgCAJAAQAcAAAAAYIAAAvIgKAAIAAgHQgEAFgFABQgFACgGAAQgHABgFgCgAgRAQQAAAMAQgBIAIgBQAEgBADgCQAEgEAAgJIAAgIIgTAAQgQAAAAAOg");
	this.shape_452.setTransform(200.5,222);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("AgIAyQgFgCgEgFIAAAIIgKAAIAAhmIAKAAIAAAoQAEgFAFgCQAFgCAFAAQAMAAAFAFQAGAGACAIQABAGAAALQAAAJgBAIQgCAIgFAFQgDACgFACQgEACgGAAQgFAAgFgCgAgNgEQgEAHAAANQAAAMAEAIQADAGAKABQALAAADgIQAEgHAAgMQAAgNgEgHQgDgHgLAAQgJAAgEAHg");
	this.shape_453.setTransform(193.1,220.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AgLAiQgFgCgEgFQgEgEgCgHQgCgHAAgJQAAgIACgIQACgGAEgFQAEgFAFgCQAGgCAFAAQAHAAAFACQAEACAFAFQAEAFACAGQACAHAAAJQAAAJgCAHQgCAHgFAFQgEAEgEACQgFADgHgBQgFABgGgDgAgLgWQgEAEgBAGQgCAGAAAGIABANQACAFAEAFQAEAEAHAAQAHAAAFgEQAFgEABgGIABgNIgBgMQgBgGgEgDQgGgFgHgBQgHABgEAEg");
	this.shape_454.setTransform(185.2,222);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AAFAzQgIAAgEgEQgFgGAAgJIAAhSIAKAAIAABSQABAGABACQACADAFgBIAGAAIAAAJg");
	this.shape_455.setTransform(179.6,220.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgOAyQgFgCgFgFIAGgHQAEAEAEACQADABAGAAQAJAAAFgGQAFgGAAgKIAAgLQgEAGgFACQgFABgFAAQgGAAgEgBQgFgCgEgEQgDgEgCgIQgCgGAAgKQAAgKACgHQACgIADgDQAEgEAFgCQAEgBAGgBQAFAAAFACQAFACAEAFIAAgIIAKAAIAABIQAAAOgIAJQgIAIgNABQgIgBgFgCgAgNgjQgEAHAAAMQAAANAEAFQADAIAKAAQALAAADgHQAEgHAAgMQAAgMgEgHQgDgIgLAAQgKABgDAHg");
	this.shape_456.setTransform(172.9,223.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgUAbQgIgJAAgSQAAgRAIgJQAHgKANAAQAOAAAIAJQAHAKAAAQIAAADIgvAAQAAANAGAGQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFADQgGACgJAAQgOABgIgKgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_457.setTransform(161.7,222);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AgRAbQgKgKAAgRQAAgRAKgKQAIgJANAAQAIAAAFACQAFACAFAHIgHAHQgEgFgDgCQgEgCgFAAQgJABgGAHQgFAHAAAMIABALQABAFAEAFQAFAGAJAAQAFAAAEgBQADgDAEgEIAHAHQgFAFgFADQgFADgIgBQgMAAgJgJg");
	this.shape_458.setTransform(154.4,222);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgEA0IAAhHIAJAAIAABHgAgFgnIAAgMIALAAIAAAMg");
	this.shape_459.setTransform(149,220.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AgEAkIgahHIAMAAIASA4IAUg4IALAAIgaBHg");
	this.shape_460.setTransform(143.9,222);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIALAAIAAAJQADgFAFgCQAEgDAHAAIAJABQAEABAEAEIgIAIIgFgEIgHgBQgHAAgFAFQgEAGAAAIIAAArg");
	this.shape_461.setTransform(138.2,222);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgUAbQgIgJAAgSQAAgRAIgJQAHgKANAAQAOAAAIAJQAHAKAAAQIAAADIgvAAQAAANAGAGQAFAGAJAAQAGAAAFgBQAEgDAEgEIAHAHQgGAFgFADQgGACgJAAQgOABgIgKgAgJgYQgEADgCAEIgCAHIgBAGIAlAAIAAgGIgCgGQgCgFgFgDQgEgDgGAAQgEAAgFADg");
	this.shape_462.setTransform(130.7,222);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AgPAiQgHgDgGgFIAHgHQAEAEAFADQAGABAGAAQAJABAFgEQAFgDAAgGQAAgJgMgBIgLgBQgKAAgFgFQgGgFAAgJQAAgJAHgGQAIgFAKgBQARABAJAHIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADACQADADAHABIAKABQAKAAAGADQAFAFAAAKQAAAKgIAGQgHAFgOAAQgIABgHgDg");
	this.shape_463.setTransform(123.2,222);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgTAFIAAgJIAnAAIAAAJg");
	this.shape_464.setTransform(116.5,221.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AAFAzQgHAAgFgEQgFgGAAgJIAAhSIAKAAIAABSQAAAGACACQACADAFgBIAGAAIAAAJg");
	this.shape_465.setTransform(111.7,220.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AAFAzQgHAAgFgEQgFgGAAgJIAAhSIALAAIAABSQAAAGABACQACADAGgBIAFAAIAAAJg");
	this.shape_466.setTransform(107.4,220.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAEgFABgJIAAgrIAKAAIAABGIgKAAIAAgIQgIAJgLAAQgMAAgHgHg");
	this.shape_467.setTransform(100.8,222);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgHA0IAAg+IgJAAIAAgIIAJAAIAAgOQAAgIAEgFQAEgGAJAAIAHAAIAAAJIgFAAQgJAAAAALIAAANIAOAAIAAAIIgOAAIAAA+g");
	this.shape_468.setTransform(94.5,220.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgXAkIAAhGIALAAIAAAJQADgFAFgCQAEgDAHAAIAJABQAEABAEAEIgIAIIgFgEIgHgBQgHAAgFAFQgEAGAAAIIAAArg");
	this.shape_469.setTransform(86.1,222);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgUAdQgHgHAAgNIAAgsIAKAAIAAArQAAAJAFAFQAEAFAIAAQAIAAAFgFQAEgFAAgJIAAgrIALAAIAABGIgLAAIAAgIQgHAJgLAAQgMAAgHgHg");
	this.shape_470.setTransform(78.4,222);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgLAiQgEgCgFgFQgFgEgCgHQgBgHAAgJQAAgIABgIQACgGAFgFQAFgFAEgCQAFgCAGAAQAGAAAGACQAFACAEAFQAEAFACAGQACAHAAAJQAAAJgCAHQgBAHgFAFQgFAEgEACQgGADgGgBQgGABgFgDgAgLgWQgFAEgBAGQgBAGAAAGIABANQACAFAEAFQAEAEAHAAQAHAAAFgEQAEgEABgGIABgNIgBgMQgBgGgDgDQgGgFgHgBQgHABgEAEg");
	this.shape_471.setTransform(70.5,222);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgYAzIAAgJIADAAQAGAAACgCIAEgHIAFgOIgahFIAMAAIASA4IAUg4IALAAIggBYQgCAFgCADIgHAEIgIABg");
	this.shape_472.setTransform(63.3,223.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgPAiQgHgDgGgFIAHgHQAEAEAFADQAGABAGAAQAJABAFgEQAFgDAAgGQAAgJgMgBIgLgBQgKAAgFgFQgGgFAAgJQAAgJAHgGQAIgFAKgBQARABAJAHIgHAHQgHgGgMAAQgHAAgEADQgEADAAAGQAAAFADACQADADAHABIAKABQAKAAAGADQAFAFAAAKQAAAKgIAGQgHAFgOAAQgIABgHgDg");
	this.shape_473.setTransform(52.8,222);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AAfAzIgIgXIgsAAIgJAXIgMAAIAmhlIAJAAIAmBlgAgSASIAlAAIgTg1g");
	this.shape_474.setTransform(44.9,220.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgXClIAAkdIg3AAIAAgsICdAAIAAAsIg4AAIAAEdg");
	this.shape_475.setTransform(553,156.1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AAkClIgsiOIgdAAIAACOIgwAAIAAlJIBTAAQAgAAAWAXQAWAXAAAgIAAAfQAAAtgmAYIAxCXgAglgRIAgAAQAOAAAKgLQAFgFACgHQABgHAAgIIAAgfQAAgPgJgKQgIgJgOAAIghAAg");
	this.shape_476.setTransform(535,156.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgoCcQgUgMgHgPQgIgPgCgKQgBgJAAgMIAAinQAAgPADgLQADgMAIgKQALgQASgJQARgKASABQASAAAQAHQAQAHALANQAKANAEANQAEAOAAAPIAACnQAAAPgCALQgDALgJAOQgJANgRALQgRAKgVAAQgWAAgTgMgAgPh0QgIAGgDAFQgDAGgBAGIgBAJIAACnIABALQAAAGAIAKQAHAKAQAAQAJAAAHgEQAHgFADgFIAEgKIABgNIAAinIAAgOQgBgEgFgFQgJgNgQAAQgIAAgIAEg");
	this.shape_477.setTransform(513.8,156.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AhLClIAAlJIBMAAQAOAAAOAHQAPAFAJAKQAKAKAHAMQAGAOAAANIAAAvQAAATgEAOQgGANgMAMQgMAMgOAGQgOAEgSAAIgYAAIAACDgAgcgJIAYAAQAJAAAHgCQAGgBAGgGQAEgFABgFQACgEAAgIIAAgGIAAgrQAAgNgJgJQgIgKgOABIgcAAg");
	this.shape_478.setTransform(495.2,156.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AhLClIAAlJIBMAAQAOAAAOAHQAPAFAJAKQAKAKAHAMQAGAOAAANIAAAvQAAATgEAOQgGANgMAMQgMAMgOAGQgOAEgSAAIgYAAIAACDgAgcgJIAYAAQAJAAAHgCQAGgBAGgGQAEgFABgFQACgEAAgIIAAgGIAAgrQAAgNgJgJQgIgKgOABIgcAAg");
	this.shape_479.setTransform(476.6,156.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AglCbQgTgKgHgOQgIgNgCgLQgDgKAAgLIAAj7IAwAAIAAD7IABALQABAEAGAJQAGAJAPAAQAPAAAGgLQAIgKgBgMIAAj7IAvAAIAAD7QAAALgCALQgDALgGAJQgKARgRAKQgRALgVAAQgTAAgSgLg");
	this.shape_480.setTransform(456.3,156.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("Ag9CMQgTgcAAgdIAAgMIAvAAIAAAMIABANQABAFAHAKQAGAKASAAQAJAAAIgFQAJgEAEgHQADgGABgHIAAgKIAAgXIgBgPQAAgFgGgGQgFgFgJgFQgKgFgXgJQgYgIgQgTQgRgSAAghIAAgPQAAghAXgZQAWgZAhABQAiAAAXAXQAXAYAAAjIAAAPIgvAAIAAgPIgBgMQgBgFgHgJQgHgJgQgBQgNAAgJAKQgKALAAAPIAAAPIABANQABAEAEAGQAFAFAIAEIAfANQAYAJATASQASAUAAAhIAAAbQAAAQgDAMQgEAMgQAXQgRAVgpABQgpAAgUgcg");
	this.shape_481.setTransform(436.3,156.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AhFClIAAlJIAvAAIAAEZIBcAAIAAAwg");
	this.shape_482.setTransform(410.3,156.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AArClIgMhHIg9AAIgNBHIgyAAIBFlJIAtAAIBJFJgAgWAyIAsAAIgWh0g");
	this.shape_483.setTransform(391.4,156.1);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AhLClIAAlJIBMAAQAPABAOAGQAOAGAQAQQAQAPAAAiIAAAZQAAAmgeAPQAeAQAAAmIAAAnQAAAigWAXQgWAWgiABgAgcB1IAbAAQANABAIgKQAJgKAAgNIAAgnQABgPgJgKQgJgJgOAAIgaAAgAgcgdIAcAAQAPABAHgLQAIgJgBgSIAAgUQAAgPgJgKQgIgJgOAAIgaAAg");
	this.shape_484.setTransform(372.2,156.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AgoCcQgUgMgHgPQgIgPgCgKQgBgJAAgMIAAinQAAgPADgLQADgMAIgKQALgQASgJQARgKASABQASAAAQAHQAQAHALANQAKANAEANQAEAOAAAPIAACnQAAAPgCALQgDALgJAOQgJANgRALQgRAKgVAAQgWAAgTgMgAgPh0QgIAGgDAFQgDAGgBAGIgBAJIAACnIABALQAAAGAIAKQAHAKAQAAQAJAAAHgEQAHgFADgFIAEgKIABgNIAAinIAAgOQgBgEgFgFQgJgNgQAAQgIAAgIAEg");
	this.shape_485.setTransform(351.9,156.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AhFClIAAlJIAvAAIAAEZIBcAAIAAAwg");
	this.shape_486.setTransform(333.8,156.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("AgjCeQgSgJgIgMQgLgNgDgNQgDgNAAgSIAAijQAAgNADgMQACgKAQgZQAPgXAsAAQAUgBARAKQARAJAJANQAJANACAMQADAMAAAOIAAANIgvAAIAAgNIAAgNQgBgEgHgKQgGgJgRAAQgSAAgGAKQgGAKgCAGIAAALIAACjIAAAPQABAEAHALQAGAKASAAQATAAAFgKIAGgPIABgPIAAg5IgkAAIAAgoIBTAAIAABhQAAAWgDAJQgCAJgGAKQgLASgSAKQgRAKgWAAQgRAAgSgKg");
	this.shape_487.setTransform(314.1,156.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AhLClIAAlJIBKAAQAfAAAXAXQAXAWAAAgIAACqQAAAjgWAXQgWAYgiAAgAgcB5IAWAAQAjAAAAgmIAAiqQAAgOgKgJQgJgJgOgBIgYAAg");
	this.shape_488.setTransform(285.5,156.1);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AAmClIhIjIIAADIIgvAAIAAlJIAsAAIBIDHIAAjHIAvAAIAAFJg");
	this.shape_489.setTransform(264.5,156.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AhFClIAAlJICLAAIAAAsIhdAAIAABhIBSAAIAAAsIhSAAIAABgIBdAAIAAAwg");
	this.shape_490.setTransform(244.9,156.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AhFAYIAAguICLAAIAAAug");
	this.shape_491.setTransform(225.8,159.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgoCcQgUgMgHgPQgIgPgCgKQgBgJAAgMIAAinQAAgPADgLQADgMAIgKQALgQASgJQARgKASABQASAAAQAHQAQAHALANQAKANAEANQAEAOAAAPIAACnQAAAPgCALQgDALgJAOQgJANgRALQgRAKgVAAQgWAAgTgMgAgPh0QgIAGgDAFQgDAGgBAGIgBAJIAACnIABALQAAAGAIAKQAHAKAQAAQAJAAAHgEQAHgFADgFIAEgKIABgNIAAinIAAgOQgBgEgFgFQgJgNgQAAQgIAAgIAEg");
	this.shape_492.setTransform(206.1,156.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("AgXClIAAkdIg3AAIAAgsICdAAIAAAsIg4AAIAAEdg");
	this.shape_493.setTransform(187.3,156.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AhGAYIAAguICNAAIAAAug");
	this.shape_494.setTransform(169.1,159.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AhLClIAAlJIBKAAQAfAAAXAXQAXAWAAAgIAACqQAAAjgWAXQgWAYgiAAgAgdB5IAYAAQAiAAABgmIAAiqQAAgOgLgJQgJgJgOgBIgZAAg");
	this.shape_495.setTransform(149.7,156.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AAmClIhIjIIAADIIgvAAIAAlJIAsAAIBIDHIAAjHIAvAAIAAFJg");
	this.shape_496.setTransform(128.7,156.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AhFClIAAlJICLAAIAAAsIhdAAIAABhIBSAAIAAAsIhSAAIAABgIBdAAIAAAwg");
	this.shape_497.setTransform(109.1,156.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AAiCbIgpiFIgcAAIAACFIgtAAIAAk1IBOAAQAeAAAVAVQAUAWABAeIAAAdQgBArgjAWIAvCOgAgjgQIAfAAQANAAAJgKQAFgFABgGQABgHABgIIAAgdQgBgOgHgJQgJgIgNgBIgfAAg");
	this.shape_498.setTransform(531.9,43.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgmCSQgSgKgIgPQgHgOgCgJIAAgTIAAieQAAgNACgLQAEgLAGgLQALgOAQgJQARgJARABQARAAAPAGQAPAIAKALQAKAMADANQAEANABAOIAACeQAAANgDAKQgDALgIANQgJANgQAKQgQAIgTABQgVAAgSgMgAgOhsQgHAEgEAFQgDAFAAAGIgBAJIAACeIABAKQAAAFAHAKQAHAJAOAAQAJAAAHgEQAGgEADgFQADgFABgFIABgLIAAieIAAgMQgBgEgFgFQgJgNgPAAQgGAAgIAFg");
	this.shape_499.setTransform(511.9,43.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AhBCbIAAk1ICDAAIAAAqIhXAAIAABdIBMAAIAAAoIhMAAIAACGg");
	this.shape_500.setTransform(494.3,43.3);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AAiCbIgpiFIgcAAIAACFIgsAAIAAk1IBNAAQAeAAAVAVQAUAWABAeIAAAdQgBArgjAWIAvCOgAgjgQIAfAAQANAAAJgKQAFgFABgGQACgHAAgIIAAgdQgBgOgHgJQgJgIgNgBIgfAAg");
	this.shape_501.setTransform(468.3,43.3);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AhBCbIAAk1ICDAAIAAApIhXAAIAABcIBMAAIAAAoIhMAAIAABbIBXAAIAAAtg");
	this.shape_502.setTransform(449.6,43.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgSCbIhAk1IAvAAIAjDWIAkjWIAvAAIhBE1g");
	this.shape_503.setTransform(432,43.3);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgVCbIAAk1IArAAIAAE1g");
	this.shape_504.setTransform(418.8,43.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("AAiCbIgqiFIgbAAIAACFIgsAAIAAk1IBNAAQAeAAAVAVQAUAWABAeIAAAdQgBArgjAWIAvCOgAgjgQIAfAAQANAAAJgKQAFgFABgGQABgHABgIIAAgdQgBgOgHgJQgJgIgNgBIgfAAg");
	this.shape_505.setTransform(405.4,43.3);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AhBCbIAAk1IAsAAIAAEIIBXAAIAAAtg");
	this.shape_506.setTransform(379.3,43.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AApCbIgNhCIg4AAIgMBCIgwAAIBCk1IApAAIBGE1gAgUAvIAoAAIgUhtg");
	this.shape_507.setTransform(361.5,43.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgWCbIAAkMIg0AAIAAgpICUAAIAAApIg1AAIAAEMg");
	this.shape_508.setTransform(344.5,43.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AgVCbIAAk1IArAAIAAE1g");
	this.shape_509.setTransform(331.6,43.3);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AghCWQgQgJgJgNQgJgMgDgMQgDgNAAgPIAAiaQAAgMACgLQADgLAOgWQAOgWApAAQATgBAQAJQAQAJAJANQAIAMADALQACALAAANIAAANIgsAAIAAgNIAAgMQgBgEgGgJQgGgIgQgBQgRAAgGAKQgGAKgBAEIgBALIAACaIABANQABAFAGAKQAGAJAQAAQATAAAFgJQAFgKAAgFIABgNIAAg3IgiAAIAAglIBOAAIAABcQAAATgCAJQgCAJgGAKQgLAQgQAKQgRAIgUABQgRgBgQgHg");
	this.shape_510.setTransform(317.6,43.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("AgVCbIAAk1IArAAIAAE1g");
	this.shape_511.setTransform(303.4,43.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AhGCbIAAk1IBGAAQAcAAAWAVQAVAWABAdIAAChQgBAhgUAWQgVAVggAAgAgaByIAVAAQAhgBAAgiIAAihQAAgNgJgJQgKgIgNAAIgWAAg");
	this.shape_512.setTransform(289.6,43.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("AAcCbIAAiKIg3AAIAACKIgsAAIAAk1IAsAAIAACFIA3AAIAAiFIAsAAIAAE1g");
	this.shape_513.setTransform(262.2,43.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgVCbIAAkMIg0AAIAAgpICTAAIAAApIg1AAIAAEMg");
	this.shape_514.setTransform(244.4,43.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AgVCbIAAk1IArAAIAAE1g");
	this.shape_515.setTransform(231.6,43.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AAlCbIgli7IgjC7IgoAAIguk1IAwAAIAWC7IAji7IAgAAIAlC7IAWi7IAvAAIgsE1g");
	this.shape_516.setTransform(214.5,43.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AAiCbIgqiFIgbAAIAACFIgtAAIAAk1IBOAAQAeAAAVAVQAVAWAAAeIAAAdQAAArgkAWIAuCOgAgjgQIAfAAQAMAAAKgKQAEgFACgGQABgHAAgIIAAgdQABgOgJgJQgHgIgNgBIggAAg");
	this.shape_517.setTransform(185.1,43.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AhBCbIAAk1ICDAAIAAApIhXAAIAABcIBMAAIAAAoIhMAAIAABbIBXAAIAAAtg");
	this.shape_518.setTransform(166.4,43.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AAkCbIhEi8IAAC8IgsAAIAAk1IAqAAIBDC7IAAi7IAsAAIAAE1g");
	this.shape_519.setTransform(147.2,43.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgWCbIAAkMIg0AAIAAgpICUAAIAAApIg1AAIAAEMg");
	this.shape_520.setTransform(128.9,43.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AAhCbIgpiFIgbAAIAACFIgtAAIAAk1IBOAAQAeAAAVAVQAVAWgBAeIAAAdQABArglAWIAvCOgAgjgQIAfAAQAMAAAKgKQAEgFACgGQACgHgBgIIAAgdQABgOgJgJQgHgIgNgBIggAAg");
	this.shape_521.setTransform(112,43.3);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("AApCbIgNhCIg4AAIgMBCIgwAAIBCk1IApAAIBFE1gAgUAvIAoAAIgUhtg");
	this.shape_522.setTransform(92.9,43.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AhHCbIAAk1IBIAAQANAAAOAGQANAFAJAJQAJAKAHAMQAGANAAALIAAAtQAAASgFANQgEANgMAKQgLAMgOAFQgNAFgQAAIgXAAIAAB6gAgagIIAXAAQAIAAAGgBQAGgCAFgGQAEgEACgFIABgLIAAgGIAAgoQAAgNgIgJQgIgIgNAAIgaAAg");
	this.shape_523.setTransform(76,43.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#2C83B7").s().p("EgtSAF1IAAgdMBZ1AAAIAAgdIgwAAIAAgnIgxAAIAAgnIg6AAIAAg6IgdAAIAAgnIgwAAIAAgmIgnAAIAAg6Ig6AAIAAhXIA6AAIAAgmIAnAAIAAgxIAwAAIAAgwIAdAAIAAg6IA6AAIAAgnIAxAAIAAgnIAmAAIAAgTMhZrAAAIAAgnMBaIAAAIAABhIgdAAIAAAnIg6AAIAAAmIgwAAIAABEIgnAAIAAAdIgdAAIAAA6IgwAAIAABgIAwAAIAAAxIAdAAIAAAmIAnAAIAAAxIAwAAIAABEIA6AAIAAATIA6AAIAABhg");
	this.shape_524.setTransform(345.1,153.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#2FA9DF").s().p("EguqAGbIAAs1MBdVAAAIAAAmIhOAAIAAA7IgnAAIAAA6Ig6AAIAAAmIg6AAIAAA7IgmAAIAABNIhFAAIAAAnIgwAAIAABCIAwAAIAAAxIBFAAIAAAwIAmAAIAAA6IA6AAIAAA7IA6AAIAAA5IAwAAIAAA7IBFAAIAAA5g");
	this.shape_525.setTransform(353.9,153.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#2C83B7").s().p("EgrjAFrIAAhNIA6AAIAAgoIA6AAIAAg5IAxAAIAAgnIAmAAIAAg6IAdAAIAAgnIBEAAIAAhpIhEAAIAAg7IgdAAIAAgmIgmAAIAAgnIgxAAIAAg6Ig6AAIAAgnIgdAAIAAhNMBWqAAAIAAAnMhWNAAAIAAATIAnAAIAAATIBEAAIAABEIAmAAIAAAdIAdAAIAAAnIAxAAIAABEIAnAAIAAAdIA5AAIAABWIg5AAIAAA6IgnAAIAAAdIgxAAIAABEIgdAAIAAAmIgmAAIAAA7IhEAAIAAAmMBVmAAAIAAAng");
	this.shape_526.setTransform(296.3,42.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#2FA9DF").s().p("Egs6AGbIAAg5IBEAAIAAgnIAwAAIAAhOIA6AAIAAgmIA6AAIAAhEIAnAAIAAgwIBEAAIAAhFIAwAAIAAg4IgwAAIAAgdIhEAAIAAhEIgnAAIAAgwIg6AAIAAhFIg6AAIAAgmIgnAAIAAg6IhNAAIAAg7MBZ1AAAIAAM2g");
	this.shape_527.setTransform(287.5,41.2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#2C83B7").s().p("EgjnAEWIAAivIDpAAIAAhDIDeAAIAAgwIEZAAIAAgwIDVAAIAAjGMA4agATIAADFIjfAAIAABEIjoAAIAAAwIkGAAIAABDIjVAAIAACvg");
	this.shape_528.setTransform(304.5,96.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.text},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,890.7,394.8);


(lib.controllerai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFBE37").s().p("AgslFIA4AcQArCcgKCwQgICJgiByIgxAog");
	this.shape.setTransform(197.3,162);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE7D38").s().p("AgCEeQgjhygHiJQgKiwAqicIA5gcIACKLg");
	this.shape_1.setTransform(17.6,162);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F16437").s().p("AiNCOQg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A7hTAAQhSAAg7g7g");
	this.shape_2.setTransform(47,53.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAAA35").s().p("AgEC/QhAgCgPgwIAAlLICnAAIAAFLQgYAyg8AAIgEAAg");
	this.shape_3.setTransform(47.8,77);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C83B7").s().p("AhTBUQgjgjAAgxQAAgwAjgjQAjgiAwAAQAxAAAjAiQAiAjABAwQgBAxgiAjQgjAjgxgBQgwABgjgjg");
	this.shape_4.setTransform(47.8,90.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2FA9DF").s().p("AimCnQhFhGAAhhQAAhgBFhFQBFhFBhgBQBhABBFBFQBFBFABBgQgBBhhFBGQhFBEhhAAQhhAAhFhEg");
	this.shape_5.setTransform(47.8,90.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE7D38").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgOATAAQATAAAOAOQAOAOAAASQAAAUgOANQgOAOgTAAQgTAAgNgOg");
	this.shape_6.setTransform(180.3,89.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFBE37").s().p("AghAhQgNgNAAgUQAAgSANgOQAOgOATAAQATAAAOAOQAOAOAAASQAAAUgOANQgOAOgTAAQgTAAgOgOg");
	this.shape_7.setTransform(166.2,103.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DAF1FC").s().p("Ah0B1QgTgSAAgaQAAgaATgSICRiSQASgSAaAAQAaAAASASQATATAAAaQAAAagTASIiRCRQgSATgaAAQgaAAgSgTg");
	this.shape_8.setTransform(173.2,96.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#295473").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgOATAAQATAAAOAOQAOAOAAASQAAAUgOANQgOAOgTAAQgTAAgNgOg");
	this.shape_9.setTransform(169,78);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2FA9DF").s().p("AggAhQgOgNAAgUQAAgSAOgOQANgOATAAQATAAAOAOQAOAOAAASQAAAUgOANQgOAOgTAAQgTAAgNgOg");
	this.shape_10.setTransform(155,92);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DAF1FC").s().p("Ah0B1QgTgSAAgaQAAgaATgSICRiSQASgSAaAAQAaAAASASIABAAQASATAAAaQAAAagSASIiSCRQgSATgaAAQgaAAgSgTg");
	this.shape_11.setTransform(162,85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C83B7").s().p("AimCnQhEhGAAhhQAAhgBEhFQBGhFBggBQBhABBFBFQBFBFABBgQgBBhhFBGQhFBEhhAAQhgAAhGhEg");
	this.shape_12.setTransform(167.6,90.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F05B37").s().p("Ah6B7Qg0gzAAhIQAAhHA0gzQAzg0BHAAQBIAAAzA0QA0AzAABHQAABIg0AzQgzA0hIAAQhHAAgzg0g");
	this.shape_13.setTransform(141.8,139.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C83B7").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape_14.setTransform(141.8,139.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DAF1FC").s().p("Ai3A6IAAh0IFvAAIAAB0g");
	this.shape_15.setTransform(73.1,139.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DAF1FC").s().p("Ag6C4IAAlvIB0AAIAAFvg");
	this.shape_16.setTransform(73.1,139.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2FA9DF").s().p("AixCyQhKhKAAhoQAAhnBKhKQBKhKBnAAQBoAABKBKQBKBKAABnQAABohKBKQhKBKhoAAQhnAAhKhKg");
	this.shape_17.setTransform(73.1,139.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFBE37").s().p("AB0JVQBPlQgNkEQgOkLhykQQg/hshKgvQhDgqhlgJIAMgBQB1gEBXA5QBRA2AuBkIABAAQCDEZAXECQAZEPhVFFIj8CVg");
	this.shape_18.setTransform(189.6,133.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE7D38").s().p("Ai6JVQhVlFAZkPQAYkBCCkaIACAAQAuhkBQg2QBXg5B1AEIANABQhnAJhGAsQhQAyg1BnQh2EZgWECQgWEPBNFFIDMCVg");
	this.shape_19.setTransform(25.3,133.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE7D38").s().p("ACiLAQg3iAg5hCQg3g/hOgcQhAgYh5gLQihgMhrgKIAAwBQClAEC5gpICAgdQBAgOAmgCQB1gEBYA5QBRA2AuBkIABAAQCDEZAYECQAYEPhVFFIj8CVg");
	this.shape_20.setTransform(161.1,133.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFBE37").s().p("AnWJVQhVlFAZkPQAXkBCDkaIABAAQAuhkBSg2QBXg5B1AEQAmACBAAOICAAdQC6ApCkgEIAAQBQjCAPhJAHQh6AMhAAXQhOAcg2A/Qg5BCg4CAIg5Aqg");
	this.shape_21.setTransform(53.7,133.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#929397").s().p("AgYAPIAAgdIAxAAIAAAdg");
	this.shape_22.setTransform(588.3,115.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#929397").s().p("AgYAPIAAgdIAxAAIAAAdg");
	this.shape_23.setTransform(588.3,120.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#929397").s().p("AgYAPIAAgdIAxAAIAAAdg");
	this.shape_24.setTransform(588.3,111.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C83B7").s().p("AkCBlIAAjJIBoBrIGdAAIAABeg");
	this.shape_25.setTransform(558.2,115.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2FA9DF").s().p("AkCBiIAAjDIIFAAIAADDg");
	this.shape_26.setTransform(558.2,115.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C5C5C5").s().p("AgmBRIAAihIBMAAIAAChg");
	this.shape_27.setTransform(587,115.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#424245").ss(12).p("EgjLAFnQgGipAhiRQA0jkCQiRQDmjoGyANQDqAHE4BXQCuAwCCBIQBSAvCHBmQCYB0BkA+QCvBtDoBlQIfDrI7BLQGeA3Gigf");
	this.shape_28.setTransform(330.5,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-6.3,590.8,214.1);


(lib.coin_5ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7CBIAAkBIA8AAQALAAALAFQAMAFAMANQANAMAAAaIAAATQAAAdgYANQAYAMAAAeIAAAeQAAAcgSARQgRASgbAAgAgWBcIAVAAQAKAAAHgHQAHgHAAgMIAAgeQAAgMgHgIQgGgGgLAAIgVAAgAgWgWIAWAAQAMAAAFgIQAGgIAAgNIAAgQQAAgNgHgGQgHgIgKAAIgVAAg");
	this.shape.setTransform(101.4,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaB6QgOgHgGgLQgGgKgBgHQgCgIAAgJIAAgoIABgMIADgKIAziJIAoAAIgoBsQAHgDAIAAIAEAAQAVADAKASQAEAEABAGIABAOIAAAxQAAAKgCAIQgCAIgKAQQgKAQgdACQgPAAgOgIgAgJAKQgEAEgCAEQgCAEAAAIIAAAoQAAAJAEAHQAFAIAKgCQAKAAADgGQAEgHAAgJIAAgoIgBgIQgBgEgCgDQgGgIgJAAQgFAAgEADg");
	this.shape_1.setTransform(86.5,61.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRASIAAgkIAjAAIAAAkg");
	this.shape_2.setTransform(76.1,72.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcB7QgOgJgFgLQgFgKgBgHIgBgOIAAgtQAAgLAFgJQAEgHAJgGQgSgOAAgYIAAgjQAAgHACgIQAEgIAKgOQAMgPAbAAQALABAJAEQAKAEAMANQAMAMAAAWIAAAhQAAAWgTAOQATAMAAAXIAAAvQAAALgGAOQgGAMgNAJQgNAJgPAAQgQAAgOgIgAgNAMQgFAFAAAJIAAAuQAAAJAFAHQAEAGAKAAQAKAAAEgHQADgGAAgJIAAguQAAgJgFgFQgEgGgJAAQgHAAgGAGgAgMhYQgGAFAAAIIAAAhQAAAJAFAHQAFAGAIAAQAJAAAFgGQAEgGAAgKIAAghQAAgHgFgGQgFgFgIgBQgHABgFAFg");
	this.shape_3.setTransform(65.5,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAACBIAAjaIgkAbIAAgnIAkgbIAlAAIAAEBg");
	this.shape_4.setTransform(51.1,61.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAACBIAAjaIgkAbIAAgnIAkgbIAlAAIAAEBg");
	this.shape_5.setTransform(37.5,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgICbIAAgZQgbgEgNgTQgOgUAAgXIAAgJIAlAAIAAAJIAAAMQABADAGAIQAEAHAOAAQAHAAAHgDQAGgDAEgGQACgFAAgGIAAgHIAAgTIAAgLQAAgEgFgEQgEgFgIgDIgagLQgTgHgNgOQgNgOAAgbIAAgLQAAgYAQgSQAPgTAXgDIAAgYIARAAIAAAYQAYADAPASQAQASgBAZIAAALIglAAIAAgLIAAgJQgBgFgGgHQgFgHgOAAQgKAAgIAHQgHAJAAAMIAAALIAAALQABADAEAEQADAEAHAEIAZAKQATAGAPAOQAOAQAAAaIAAAVQABANgDAKQgCAJgMAQQgMAPgaADIAAAZg");
	this.shape_6.setTransform(21.7,61.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#84B54F").ss(8).p("AI0g0QgVjpi1iWQi1iWjpAWQjpAWiWC0QiWC1AWDoQAWDqC0CWQC1CWDogWQDqgVCWi1QCWi1gWjpg");
	this.shape_7.setTransform(60.7,60.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9C649").s().p("AlpG0Qi0iWgWjqQgWjoCWi1QCWi0DpgWQDpgWC1CWQC1CWAVDpQAWDpiWC1QiWC1jqAVQgeADgcAAQjFAAieiDg");
	this.shape_8.setTransform(60.7,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-11.5,133,141.7);


(lib.coin_4ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4B7IAAj0IA6AAQAKgBALAFQAKAFAMALQAMANAAAYIAAATQAAAcgXAMQAXAMAAAbIAAAdQAAAagRAQQgRARgZABgAgVBXIAUAAQAKABAGgIQAHgGAAgLIAAgdQAAgLgHgIQgFgGgLAAIgUAAgAgVgVIAVAAQALAAAFgIQAGgHAAgNIAAgPQAAgMgHgGQgGgHgKAAIgUAAg");
	this.shape.setTransform(94.5,55.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXB2QgMgGgGgJQgGgJgCgJQgCgJAAgJIAAgHIAjAAIAAAHIABAHQAAADADAGQAEAFAIAAQAKABADgGQAEgFAAgDIAAgIIAAgDIAAgwIAAgHQAAgEgEgFQgEgEgIAAQgMAAgFALIgfAAIAAiBIBjAAIAAAgIhEAAIAABCQANgLAPAAQAJAAAKAFQAJAFAFAHQAEAGACAIQABAHAAAIIAAA3IAAAOQgBAFgDAKQgEALgOAIQgOAKgQgBQgMAAgLgFg");
	this.shape_1.setTransform(80.2,55.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQASIAAgjIAiAAIAAAjg");
	this.shape_2.setTransform(70.5,65.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0B8IAAghIBBh9QAFgJAAgJIAAgSQAAgIgGgFQgFgFgHAAQgGAAgFAFQgFAEAAAHIAAAWIgkAAIAAgSQAAgOALgUQALgVAgAAQAUAAAPAQQAQAQAAAVIAAAWQAAAIgCAHIgHAPIg2BrIA/AAIAAAjg");
	this.shape_3.setTransform(60.6,55.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAB7IAAjQIgiAaIAAglIAigZIAjAAIAAD0g");
	this.shape_4.setTransform(46.7,55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAB7IAAjQIgiAaIAAglIAigZIAjAAIAAD0g");
	this.shape_5.setTransform(33.8,55.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHCTIAAgXQgagEgNgTQgNgSAAgWIAAgJIAjAAIAAAJIABALQAAADAFAHQAFAIANAAQAHAAAGgDQAGgEADgFQADgFAAgFIAAgHIAAgRIAAgLQgBgEgEgEQgEgEgHgEIgZgKQgSgHgNgNQgMgOAAgZIAAgLQAAgWAPgRQAPgSAWgDIAAgXIAQAAIAAAXQAXADAOARQAOARAAAXIAAALIgjAAIAAgLIAAgJQgBgDgFgHQgGgHgNAAQgKAAgHAHQgHAIAAALIAAALIABAKQAAAEAEAEQADAEAHADIAXAJQASAGAOAOQAOAOAAAZIAAAUQAAAMgCAKQgCAJgMAOQgLAPgYADIAAAXg");
	this.shape_6.setTransform(18.7,55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#84B54F").ss(8).p("AIIgvQgUjYiniKQimiKjWAUQjYAUiKCnQiKCmAUDWQAUDYCnCKQCmCKDWgUQDYgUCKinQCKimgUjWg");
	this.shape_7.setTransform(56.2,56.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9C649").s().p("AlMGSQiniKgUjYQgUjWCKimQCKinDYgUQDWgUCmCKQCnCKAUDYQAUDWiKCmQiKCnjYAUQgcACgZAAQi2AAiRh4g");
	this.shape_8.setTransform(56.2,56.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,0,122.9,112.5);


(lib.coin_3ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyBuIAAjbIAzAAQAJAAAKAFQAKAEAKAKQALALAAAWIAAARQAAAZgUAKQAUALAAAZIAAAZQAAAYgPAPQgPAPgWAAgAgTBOIASAAQAJAAAGgGQAGgGAAgKIAAgZQAAgLgGgGQgGgGgJAAIgSAAgAgTgTIATAAQAKAAAFgGQAFgHAAgMIAAgNQAAgKgGgGQgGgGgJAAIgSAAg");
	this.shape.setTransform(82.9,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBpQgKgFgFgIQgGgIgCgIQgCgIAAgJIAAgFIAgAAIAAAFIAAAHQAAADAEAFQADAFAHAAQAJAAADgFIADgHIABgGIAAgEIAAgrIgBgGQAAgDgDgFQgEgEgIAAQgKAAgEAKIgcAAIAAh0IBZAAIAAAeIg9AAIAAA7QAMgKANAAQAIAAAIAEQAJAFAEAGQAEAGABAHQACAFAAAIIAAAxIgBAMIgDAOQgEAJgMAIQgNAJgOAAQgLAAgKgGg");
	this.shape_1.setTransform(70.1,51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape_2.setTransform(61.3,60.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBoQgNgGgEgJQgFgJgBgGIgBgOIAAgiIAAgLIADgIIArh1IAiAAIgiBcQAFgCAIAAIADAAQASACAIAQQAEADAAAFIABAMIAAAqQAAAIgBAHQgCAHgIANQgJAOgYACQgOAAgLgHgAgHAJQgFADgBADQgCAEABAHIAAAiQAAAHADAGQAFAHAIgBQAIAAADgGQACgGAAgHIAAgiIAAgIIgDgFQgEgHgIAAQgEAAgDADg");
	this.shape_3.setTransform(52.3,51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHBvIgNAAQgigHgGgiIAAhGIAAhGQAFgaASgIQASgJAXAFQAMAHAHAIQAHAIADAPIAABGIAABGQgFAggdAJIgGAAgAgFhOQgGAEgDAJIAABBIAABCQACAKAKADQANAAAEgMIAAhDIAAhBQgCgGgDgEQgFgEgFAAIgFABg");
	this.shape_4.setTransform(41.5,50.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABuIAAi6IgeAYIAAgiIAegXIAfAAIAADbg");
	this.shape_5.setTransform(29.5,50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGCEIAAgVQgYgEgLgQQgMgRAAgTIAAgIIAgAAIAAAIIAAAJQABADAEAHQAEAGAMAAQAGAAAGgDQAFgDADgEQACgEABgFIAAgHIAAgPIgBgKQgBgDgDgEQgDgEgHgDIgWgJQgRgGgKgMQgMgMAAgWIAAgKQAAgUAOgQQAMgQAVgCIAAgVIAOAAIAAAVQAUACANAQQANAPAAAVIAAAKIgfAAIAAgKIgBgIIgGgKQgEgGgMAAQgIAAgHAHQgGAHAAAKIAAAKIAAAJQAAADADADQADAEAGACIAWAJQAQAFANAMQAMANAAAXIAAASQAAAKgCAJQgDAIgJANQgLANgVADIAAAVg");
	this.shape_6.setTransform(16,50.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#84B54F").ss(8).p("AHKgqQgRi9iTh6QiTh6i9ASQi9ARh6CTQh6CTASC9QARC+CTB5QCTB6C9gSQC+gRB5iTQB6iTgSi9g");
	this.shape_7.setTransform(50,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9C649").s().p("AklFiQiTh5gRi+QgSi9B6iTQB6iSC9gSQC9gSCTB6QCSB6ASC9QASC9h6CTQh5CSi+ASQgYACgXAAQihAAiAhqg");
	this.shape_8.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,0,128,114);


(lib.coin_2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvBnIAAjNIAwAAQAJAAAJAEQAJAEAKAKQAKAKAAAUIAAAQQAAAYgTAKQATAJAAAYIAAAYQAAAWgOAOQgOAOgVAAgAgSBKIARAAQAIAAAGgGQAFgGAAgJIAAgYQAAgKgFgGQgFgFgJAAIgRAAgAgSgRIASAAQAJAAAFgHQAEgGAAgLIAAgNQAAgJgFgGQgGgFgIAAIgRAAg");
	this.shape.setTransform(73.3,45.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBiQgLgGgFgIQgEgJgBgGQgBgFgBgIIAAggIABgKIACgIIAphtIAhAAIghBWQAFgCAIAAIACAAQARACAIAPQADADAAAEIABAMIAAAnQABAIgCAHQgCAGgHANQgJAMgWACQgNAAgLgGgAgHAIQgDADgCADQgBAEAAAGIAAAgQAAAHADAGQAEAGAIgBQAIAAADgFQACgGAAgHIAAggIAAgHIgDgFQgEgGgIAAQgDAAgEACg");
	this.shape_1.setTransform(61.4,45.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_2.setTransform(53.1,54.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBoIAhhZQgHAEgEAAQgKAAgIgFQgIgGgEgIIgDgIIAAgLIAAgqQAAgHACgFQACgGAJgMQAIgMAWAAQAUAAAMAOQAMAOAAASIAAAiQAAALgFAMIgnBogAgKhFQgDAEAAAIIAAAiQAAAHAEAFQAEAFAGAAQAHAAADgFQAEgEAAgIIAAgiQAAgIgEgFQgDgEgIAAQgGAAgEAFg");
	this.shape_3.setTransform(44.6,45.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggBoIAhhZQgHAEgEAAQgKAAgIgFQgIgGgEgIIgDgIIAAgLIAAgqQAAgHACgFQACgGAJgMQAIgMAWAAQAUAAAMAOQAMAOAAASIAAAiQAAALgFAMIgnBogAgKhFQgDAEAAAIIAAAiQAAAHAEAFQAEAFAGAAQAHAAADgFQAEgEAAgIIAAgiQAAgIgEgFQgDgEgIAAQgGAAgEAFg");
	this.shape_4.setTransform(33.7,45.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGB8IAAgUQgWgDgLgPQgLgQAAgTIAAgHIAeAAIAAAHIAAAJQABAEAEAFQAEAHALAAQAGgBAFgCQAFgDADgEQACgEAAgEIAAgHIAAgOIAAgKQgBgDgDgDQgDgEgHgDIgUgIQgQgGgKgLQgLgMAAgVIAAgJQAAgTANgOQAMgPATgCIAAgUIANAAIAAAUQAUACAMAPQAMAOAAATIAAAJIgeAAIAAgJIAAgHIgFgJQgFgGgLAAQgIAAgGAHQgGAGAAAJIAAAJIAAAJQABADADADQADAEAFACIAUAIQAPAGAMALQAMAMAAAVIAAAQQAAALgCAHQgCAIgKAMQgJANgVACIAAAUg");
	this.shape_5.setTransform(20.3,45.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#84B54F").ss(8).p("AGtgnQgRixiJhyQiJhyixARQiyAQhxCJQhyCJAQCxQARCyCJBxQCJByCxgQQCxgRByiJQByiJgQixg");
	this.shape_6.setTransform(47.1,47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A9C649").s().p("AkSFLQiJhygRixQgQixByiJQBxiJCygQQCxgRCJByQCJBxARCyQAQCwhyCKQhyCJixARQgXACgUAAQiXAAh4hkg");
	this.shape_7.setTransform(47.1,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.8,100.8,107.9);


(lib.coin_1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBhIAAjBIAtAAQAIAAAJAEQAIAEAJAJQAKAJAAAUIAAAPQAAAWgSAJQASAJAAAWIAAAXQAAAUgNANQgNAOgUAAgAgQBFIAPAAQAIAAAFgFQAFgGAAgIIAAgXQAAgJgFgGQgFgFgIAAIgPAAgAgQgQIAQAAQAJAAAEgGQAEgGAAgKIAAgMQAAgJgFgFQgFgGgIAAIgPAAg");
	this.shape.setTransform(68,42.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBcQgKgGgEgIQgEgIAAgGIgBgKIAAgiQAAgIADgGQAEgGAHgEQgOgLAAgSIAAgaQAAgGACgFQACgGAIgLQAJgKAUAAQAIAAAHADQAHADAJAKQAJAJAAAQIAAAZQAAARgOAKQAOAIAAASIAAAjQAAAJgEAJQgEAKgKAHQgKAGgMAAQgLAAgLgGgAgJAJQgEAEAAAHIAAAiQAAAHAEAFQADAFAHAAQAHAAADgFQADgFAAgHIAAgiQAAgHgEgEQgDgEgHAAQgFAAgEAEgAgJhCQgEAEAAAGIAAAZQAAAHAEAEQADAFAGAAQAHAAADgEQAEgFAAgHIAAgZQAAgFgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_1.setTransform(56.8,42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_2.setTransform(49,50.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABhIAAikIgbAVIAAgdIAbgVIAcAAIAADBg");
	this.shape_3.setTransform(40.5,42.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBhIAfhTQgGAEgFAAQgJAAgHgFQgIgGgDgHIgDgHIAAgLIAAgnQAAgGACgFIAKgRQAIgLAUAAQATAAALAMQALAOAAAQIAAAgQAAALgEALIglBhgAgJhBQgDAFAAAGIAAAgQAAAHADAFQAEAFAGAAQAHAAADgFQADgEAAgIIAAggQAAgGgDgFQgDgFgIABQgFAAgEAEg");
	this.shape_4.setTransform(30.9,42.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGB0IAAgTQgUgCgKgPQgKgPAAgQIAAgIIAcAAIAAAIIAAAIQAAADAEAFQAEAGAKgBQAFAAAFgCQAFgCADgEQACgEAAgFIAAgFIAAgOIgBgIQAAgDgDgDQgDgEgGgDIgUgIQgOgFgJgKQgKgLAAgTIAAgJQAAgSALgOQAMgOARgCIAAgSIANAAIAAASQASACALAOQAMAOgBASIAAAJIgbAAIAAgJIgBgIIgEgIQgFgFgKAAQgIAAgFAGQgGAFABAKIAAAJIAAAIQAAACADADQADADAEACIATAIQAOAFALALQAMALgBATIAAARQABAJgCAHQgCAHgJAMQgJALgTACIAAATg");
	this.shape_5.setTransform(18.4,42.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#84B54F").ss(8).p("AGNAAQAAijh0h1Qh1h0ikAAQijAAh1B0Qh0B1AACjQAACkB0B1QB1B0CjAAQCkAAB1h0QB0h1AAikg");
	this.shape_6.setTransform(43.7,43.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A9C649").s().p("AkXEYQh1hzAAilQAAijB1h0QB0h1CjAAQClAABzB1QB1B0AACjQAAClh1BzQhzB1ilAAQijAAh0h1g");
	this.shape_7.setTransform(43.7,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.4,87.4);


(lib.cell_cards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cards();
	this.instance.parent = this;
	this.instance.setTransform(630,51,0.482,0.482);

	this.instance_1 = new lib.cell();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.482,0.482);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cell_cards, new cjs.Rectangle(0,0,936.8,298.5), null);


(lib.cartai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap2AQIgKgfIUBAAIgEAfg");
	this.shape.setTransform(117.6,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0C5C9").s().p("AhJIYQixAAhCg4Qghgcgbg3QgUgogfhaIgGgQQhCi9idoeIhVAAQAQgWAAgbIgBgHIBRAAQAQAAANAKQANAKAFAPQChItBHDMIAFARQAdBQAMAcQATArAVASQAWATAqAIQApAIBNAAIMYAAQAUAAAOAOQAOAOAAAVIAAABQgMAFgLAAg");
	this.shape_1.setTransform(98.1,59.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F3F3").s().p("AhWItQixAAhCg4Qgggdgbg2QgUgogfhaIgGgRQhCi9ieodIhUAAQAPgWABgbQgBgbgPgVIB4AAQARAAANAJQANAKAEAQQChItBHDMIAGAQQAcBQANAdQASArAVASQAWATAqAHQAqAJBMgBIMYAAQAVABANAOQAPANAAAVQAAATgPAPQgNAOgVAAg");
	this.shape_2.setTransform(99.3,57.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#483F4F").s().p("AhKAoQgQAAgMgLQgMgNAAgQQAAgPAMgMQAMgMAQAAICVAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAg");
	this.shape_3.setTransform(11.7,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#59535D").s().p("AgwBEQgcAAgUgUQgUgUAAgcQAAgbAUgUQAUgTAcgBIBhAAQAcABAUATQAUAUAAAbQAAAcgUAUQgUAUgcAAg");
	this.shape_4.setTransform(11.7,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F3F3").s().p("AmyATQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAINlAAQAIAAAFAFQAGAGABAHQgBAIgGAGQgFAFgIAAg");
	this.shape_5.setTransform(123,81.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0F3F3").s().p("AnNATQgIAAgFgFQgGgGAAgIQAAgHAGgFQAFgGAIAAIObAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAg");
	this.shape_6.setTransform(121.7,68.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0F3F3").s().p("AnnAUQgIAAgGgHQgGgFAAgIQAAgHAGgGQAGgFAIAAIPPAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAHgIAAg");
	this.shape_7.setTransform(120.4,55.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0F3F3").s().p("AoCAUQgIgBgFgFQgGgGAAgIQAAgHAGgFQAFgHAIAAIQEAAQAJAAAFAHQAGAFAAAHQAAAIgGAGQgFAFgJABg");
	this.shape_8.setTransform(119.1,42.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#787A7A").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAJgKANAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAKgNAAQgNAAgJgKg");
	this.shape_9.setTransform(151.2,133.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F0F3F3","#9CA7A6"],[0,1],13.3,12.3,-17.5,-16.2).s().p("AhGBHQgdgeAAgpQAAgpAdgdQAdgdApAAQApAAAeAdQAdAdAAApQAAApgdAeQgeAdgpAAQgpAAgdgdg");
	this.shape_10.setTransform(151.2,133.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4C4E").s().p("AhxByQgvgwAAhCQAAhBAvgwQAwgvBBAAQBDAAAvAvQAvAwAABBQAABDgvAvQgvAvhDAAQhBAAgwgvg");
	this.shape_11.setTransform(151.2,133.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#787A7A").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAKgKAMAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAKgNAAQgMAAgKgKg");
	this.shape_12.setTransform(91.3,133.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F0F3F3","#9CA7A6"],[0,1],13.3,12.3,-17.5,-16.2).s().p("AhGBHQgdgegBgpQABgpAdgdQAdgdApAAQAqAAAdAdQAeAdAAApQAAApgeAeQgdAdgqAAQgpAAgdgdg");
	this.shape_13.setTransform(91.3,133.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4C4E").s().p("AhxByQgvgvAAhDQAAhBAvgwQAwgvBBAAQBDAAAvAvQAvAwAABBQAABDgvAvQgvAvhDAAQhBAAgwgvg");
	this.shape_14.setTransform(91.3,133.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AmyAdQgIAAgGgGQgFgFAAgIIAAgTQAAgIAFgFQAGgGAIAAINlAAQAIAAAFAGQAGAFABAIIAAATQgBAIgGAFQgFAGgIAAg");
	this.shape_15.setTransform(123,80.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AnNAdQgIAAgFgGQgGgFAAgIIAAgTQAAgIAGgFQAFgGAIAAIObAAQAIAAAFAGQAGAFAAAIIAAATQAAAIgGAFQgFAGgIAAg");
	this.shape_16.setTransform(121.7,67.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AnnAdQgIAAgGgGQgGgFAAgJIAAgSQAAgIAGgFQAGgGAIAAIPPAAQAIAAAGAGQAFAFAAAIIAAASQAAAJgFAFQgGAGgIAAg");
	this.shape_17.setTransform(120.4,54.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AoCAdQgIAAgFgGQgGgGAAgHIAAgTQAAgIAGgGQAFgFAIAAIQEAAQAJAAAFAFQAGAGAAAIIAAATQAAAHgGAGQgFAGgJAAg");
	this.shape_18.setTransform(119.1,41.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F0F3F3").s().p("ApzA2IgRg2QgGgWAKgQQAKgQAUAAITAAAQAUAAAMARQAMAQgEAWIgFA1g");
	this.shape_19.setTransform(117.2,25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C0C5C9").s().p("AmREvQgUAAgSgQQgSgQgGgWIiqonITzAAIg4IlQgEAXgQAQQgQARgUAAg");
	this.shape_20.setTransform(117.9,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,149.8);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1).p("Ah1BPIDrid");
	this.shape_3.setTransform(12.8,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,25.6,17.8), null);


(lib.bendingai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D98764").s().p("AgVAoQgQgMACgcQAAgRAIgPQAHgOAGABQADAAADALQAEANAIAHQAFAEAJADQAIADADAEQALAOgGANQgFAOgSAEIgLABQgLAAgKgGg");
	this.shape.setTransform(32.7,38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAMQgDgFAAgHQAAgFADgFQACgFACAAQADAAADAFQACAFAAAFQAAAGgCAGQgDAEgDAAQgCAAgCgEg");
	this.shape_1.setTransform(26.3,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAMQgDgGAAgGQAAgFADgFQACgFACAAQADAAACAFQADAFAAAFQAAAHgDAFQgCAEgDAAQgCAAgCgEg");
	this.shape_2.setTransform(35.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333337").s().p("AgBAnQgHAAgHgGQgGgGAAgIIAAglQAAgIAGgGQAGgGAIAAIADAAQAJAAAFAGQAGAGAAAIIAAAlQAAAIgGAGQgGAGgIAAg");
	this.shape_3.setTransform(34.5,29.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333337").s().p("AgBAnQgIAAgGgGQgGgGAAgIIAAglQAAgIAGgGQAGgGAIAAIADAAQAIAAAGAGQAGAGAAAIIAAAlQAAAIgGAGQgGAGgIAAg");
	this.shape_4.setTransform(25.7,29.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D38666").p("AAAgKQAAAKAEAGQAEADAFgDQAFgDAAgFQABgIgFgJQgEgIgGgCQgJgEgHAPQgIAOAFANQAEALAKAGQAJAHALgD");
	this.shape_5.setTransform(9,28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#875724").s().p("AiOCwIgPgJQgagNgNgFIAAiSQAAhPA6g3QA6g1BRAAIACAAQBLAAA3AxQA4AvAIBKIgLgCIgKgDQgigFgpgeQgDgGgHgDQgJBHgpAlQgRAPgVADQgYAGgbgGQgEgSgMgMQgNgOgQgCQgagDgNAVQgLARgBAbQgCAqAUAdIAFADQAAAAAAABQAAAAAAAAQABAAAAABQABAAAAAAIAAAeQgMgDgLgGg");
	this.shape_6.setTransform(19.7,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8B48D").s().p("AgpD9Qg+AAgsgsQgrgsAAg9IAAizQAAhJAzg0QA0g0BJAAIAdAAQBJAAA0A0QAzA0AABJIAACzQAAA9grAsQgsAsg9AAg");
	this.shape_7.setTransform(19.4,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#077EB4").s().p("AioBIIAAlAQAAgaATgTQATgTAaAAIAFAAIAAFsIEMDxIhFAUg");
	this.shape_8.setTransform(22.4,93);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99D78").s().p("AgRAoQgRgHgHgRQgGgRAHgQQAIgRARgHQAQgGASAHQAQAIAGARQAHAQgIARQgHARgRAHQgIADgIAAQgIAAgJgFg");
	this.shape_9.setTransform(36.3,125.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A6C43C").s().p("AiNGKICvlsQAOgegOgeIivlrIBlAAICwFrQAMAegMAeIiwFsg");
	this.shape_10.setTransform(19.7,156.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A6C43C").s().p("AgbBUQhAAAgtgtQgtgtAAhAIAAgNIFrAAIAAANQABBAguAtQgsAthBAAg");
	this.shape_11.setTransform(19.1,117.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#10A5DD").s().p("Ai1EAIAAlXQAAhFAxgxQAxgyBGABIAbAAQBGgBAxAyQAxAxAABFIAAFXg");
	this.shape_12.setTransform(19.1,84.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D98764").s().p("AgnA5IAAhxIBPAAIAABxg");
	this.shape_13.setTransform(19.4,54);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7EB244").s().p("AiMGKICvlxQALgZgLgaIivlvIBlAAICvFvQAKAagKAZIivFxg");
	this.shape_14.setTransform(36.9,156.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#646469").s().p("AgKAyIgLgSQgEgHgHABQgIABgDAHIgFAQIhCAAIAHhjIA3AAQAYAAAUAJIBcAqQAJAEAGAFQAIAHAEAGQAHAIgFAJQgFAJgKAAg");
	this.shape_15.setTransform(16.5,200.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333337").s().p("AgKAyIgLgSQgEgHgHABQgIABgCAHIgGAQIhCAAIAHhjIA3AAQAYAAAUAJIBcAqQAJAEAGAFQAIAHAEAGQAHAIgFAJQgEAJgLAAg");
	this.shape_16.setTransform(33.8,200.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#077EB4").s().p("AioBIIAAlAQAAgaATgTQASgTAbAAIAFAAIAAFsIEMDxIhFAUg");
	this.shape_17.setTransform(33,90.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E99D78").s().p("AgRApQgRgIgGgRQgHgRAIgQQAHgRARgGQAQgHARAIQARAHAHASQAGAQgHAQQgIARgRAHQgIADgIAAQgIAAgJgEg");
	this.shape_18.setTransform(47,122.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.4,205.2);


(lib.armsupai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB8D6B").s().p("AgEAoQgTgDgLgcQgHgOABgRQABgQAGgCQACgBAIAJQAJAKALADQAFACAJgBQAJAAAFADQAPAHABAOQABAPgQALQgLAJgNAAIgGgBg");
	this.shape.setTransform(56.6,43.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGADQgDgFAAgFQABgFADgCQACgBAEADQAEAEACAGQADAFAAAFQAAAFgDACIgCAAQgFAAgGgMg");
	this.shape_1.setTransform(46.2,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGADQgDgFAAgFQABgFADgCQACgBAEADQAEAEACAGQADAFAAAFQAAAFgDACIgCAAQgFAAgGgMg");
	this.shape_2.setTransform(54.3,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424245").s().p("AAAAlQgIgDgDgIIgQghQgDgIADgIQADgHAHgEIADgCQAIgDAHADQAHADAEAIIAQAhQADAIgDAIQgDAHgIAEIgDACQgEABgEAAIgGgBg");
	this.shape_3.setTransform(54.2,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424245").s().p("AAAAlQgIgDgDgIIgQghQgDgIADgIQADgIAIgDIADgCQAHgDAHADQAIADADAIIAQAhQADAIgDAIQgDAHgHAEIgDACQgFABgEAAIgGgBg");
	this.shape_4.setTransform(46.2,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D68C6D").ss(2).p("AgJgIQAEALAHACQAFACACgFQADgEgBgGQgCgHgJgGQgHgGgGABQgKABgBAQQgBAPAKALQAIAIALACQAMABAJgH");
	this.shape_5.setTransform(31.2,43.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8C6037").s().p("AgxDSIgTgCQgfAAgLgCIg+iKQgihLAfhKQAfhKBOgjIABAAQBHghBJAWQBJAWAnBCQgEACgIAAIgLABQgjAKgzgLQgFgFgJAAQAXBJgXAzQgJAVgUANQgTAQgdAFQgMgPgQgHQgSgHgRAFQgZAIgEAaQgDAUAKAaQARApAfATIAFABQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAIANAbQgIACgIAAIgJgBg");
	this.shape_6.setTransform(34.7,31.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAB792").s().p("Ag1D3Qg5gWgZg4IhKikQgehCAahEQAahFBDgeIAbgMQBDgeBDAaQBEAaAeBDIBKCjQAZA5gWA5QgWA6g4AZIhOAjQgeANgeAAQgaAAgbgKg");
	this.shape_7.setTransform(39.8,37.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C83B7").s().p("Ah5lrIBDgRICuKrQAHAZgOAWQgNAYgaAGIgFABg");
	this.shape_8.setTransform(14.6,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAA17D").s().p("AgWAmQgPgJgFgSQgFgRAKgQQAJgQASgEQARgFAQAKQAPAJAFASQAFARgKAQQgJAPgSAFIgLABQgLAAgLgGg");
	this.shape_9.setTransform(4.4,7.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A9C649").s().p("AgyHHIAAuNIBkAAIAAONg");
	this.shape_10.setTransform(30,173.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A9C649").s().p("AgbBUQhAAAgugtQgsgtgBhAIAAgNIFtAAIAAANQAABAgtAtQguAthAAAg");
	this.shape_11.setTransform(38.5,128.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2FA9DF").s().p("Ai1D/IAAlVQAAhGAxgxQAxgxBGgBIAbAAQBGABAxAxQAxAxAABGIAAFVg");
	this.shape_12.setTransform(38.5,95.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DB8D6B").s().p("AgnA5IAAhxIBPAAIAABxg");
	this.shape_13.setTransform(38.9,64.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#84B54F").s().p("AgxHHIAAuNIBjAAIAAONg");
	this.shape_14.setTransform(47.3,173.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B6B70").s().p("AgKAzIgLgTQgEgGgHAAQgIABgDAHIgFARIhCAAIAHhlIA3AAQAWAAAWAKIBcAqQAHAEAIAFQAIAGAEAHQAHAIgFAJQgFAKgKAAg");
	this.shape_15.setTransform(36,223.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#424245").s().p("AgKAzIgLgTQgEgGgHAAQgIABgCAHIgGARIhCAAIAHhlIA3AAQAWAAAWAKIBcAqIAPAJQAIAGAEAHQAHAIgFAJQgEAKgLAAg");
	this.shape_16.setTransform(53.2,223.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C83B7").s().p("AhaF8IgFgBIB7r2IBEALIhxK3QgEAagWAQQgQALgUAAIgLAAg");
	this.shape_17.setTransform(56.3,45.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EAA17D").s().p("AgGAsQgSgDgLgPQgLgPADgRQADgSAPgLQAPgLARADQASADALAPQALAPgDARQgDATgPAKQgMAIgNAAIgHAAg");
	this.shape_18.setTransform(62.5,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,228.2);


(lib.Walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA8865").s().p("AgkBTQgVgMgKgdQgFgPgCgYQgCghAMggQAMgeANAAQAGAAAJAVQALAaARANQALAHATAGQAQAEAJAKQAJAJAFAPQAEAPgDAOQgIAbglAMQgQAGgNAAQgUAAgQgKg");
	this.shape.setTransform(54.6,-142.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAYQgGgJgBgNQgBgNAEgKQAEgJAGgBQAGgBAFAJQAGAJABAOQABAMgEAKQgDAKgHAAIgBAAQgFAAgFgIg");
	this.shape_1.setTransform(39.6,-163.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAYQgGgJgBgOQgBgMAEgKQADgJAHgBQAFgBAGAJQAFAJACANQABANgEAKQgEAKgGABIgBAAQgFAAgFgJg");
	this.shape_2.setTransform(57.5,-165.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333337").s().p("AgYBFQgOgMgCgSIgGhFQgCgSAMgOQALgOATgCQARgCAOAMQAOAMACASIAGBFQACASgMAOQgLAOgTACIgEAAQgPAAgMgKg");
	this.shape_3.setTransform(56.3,-162.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333337").s().p("AgYBFQgOgMgCgSIgHhFQgBgSAMgOQALgOATgCQASgCAOAMQAOAMABASIAGBFQACASgMAOQgMAOgRACIgGAAQgOAAgMgKg");
	this.shape_4.setTransform(38.5,-160.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D58867").ss(2).p("AgGgVQABAYALAJQAIAGAJgHQAJgIABgLQAAgPgLgRQgMgRgLgDQgTgFgNAeQgNAfAMAbQAKAVAWALQAVALAWgI");
	this.shape_5.setTransform(5.1,-158.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#885823").s().p("Aj7FwIgjgPIghgQQgTgJgUgFIgakeQgOieBoh6QBnh6ChgOIACgBQCUgNB2BYQB3BXAdCQQgOABgdgCQhGgEhTgzQgHgLgPgGQgCBBgSA4QgUA+gmApQgeAhgqAJQguASg2gJQgMgigagXQgdgYghgBQgygBgXAsQgSAjADA0QADBXAsAzIAGAGIAFA+QgQgEgXgKg");
	this.shape_6.setTransform(23.6,-178.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEB68F").s().p("Aj/G2QhohWgMiHIgckzQgPigBnh8QBnh7CggPQCfgOB7BmQB8BnAOCgIAcEzQANCHhXBoQhXBoiHANIh3ALQgRABgRAAQhyAAhchMg");
	this.shape_7.setTransform(25.7,-164.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#057EB4").s().p("AihBnIiyp4QgOgvAYgsQAYgsAvgOIAUgFIDbLwIFtJAIiHAng");
	this.shape_8.setTransform(38.6,-36);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E99D78").s().p("AguBNQgggUgJgkQgIgjATggQATggAlgJQAjgIAgATQAgAUAIAkQAJAjgTAgQgUAggkAIQgLADgKAAQgYAAgWgNg");
	this.shape_9.setTransform(68.7,35.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A7C52E").s().p("AnOL4IGrqeIExvMIDABGIkxPLIneLUg");
	this.shape_10.setTransform(-44.7,100.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A7C52E").s().p("AgUDFIg9gKQiLgWhShyQhShxAWiLILaB1QgWCKhyBTQhaBBhqAAQgcAAgcgFg");
	this.shape_11.setTransform(4.6,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#08A7E0").s().p("Ah6KlQiXgahZh9QhYh9AaiWIB7rTQAShnBVg8QBVg8BnARIDoAoQBnARA8BVQA8BWgSBmIh7LTQgaCXh9BZQhhBEhvAAQghAAgigGg");
	this.shape_12.setTransform(12,-42.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DA8865").s().p("AhRBzIAAjlICjAAIAADlg");
	this.shape_13.setTransform(26.4,-115.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7FB21E").s().p("Al2tQIDDg+IIqbfIjDA9g");
	this.shape_14.setTransform(41.6,102.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#636368").s().p("ACVDKIiziCIAEgrQABgQgNgHQgOgHgMAIIgdAUIhshNICDieIBaBCQAlAbAXAoIBnC1QAJARAEAQQAGASAAARQABAVgTAJQgIAFgIAAQgKAAgJgHg");
	this.shape_15.setTransform(-83.2,196.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333337").s().p("AjxhNIBrgiQAtgOAtAGIDOAaQAVAEANAFQAPAGARALQARAMgDAUQgDAVgUAGIjTBCIgggdQgLgLgPAHQgOAGAAAPIgBAjIiAApg");
	this.shape_16.setTransform(85.2,200.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#057EB4").s().p("Al3JQIDJqUIFuoiQAcgpAxgKQAwgKAqAbIARALImwKPIjKKLg");
	this.shape_17.setTransform(-20.3,-42.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E99D78").s().p("AgwBLQgggUgHglQgHgkAUgeQAVggAkgHQAjgIAgAVQAfAVAHAkQAHAjgUAgQgUAeglAIQgKACgIAAQgaAAgWgPg");
	this.shape_18.setTransform(-54.8,26.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333337").s().p("AgYBFQgOgMgCgSIgHhFQgBgSAMgOQALgOATgCQARgCAOAMQAOAMACASIAGBFQACASgMAOQgMAOgSACIgFAAQgOAAgMgKg");
	this.shape_19.setTransform(45.8,-148.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#057EB4").s().p("Ah8CWImLoNQgegoAHgxQAGgxAogfIAQgMIHcJvIIkGVIhvBVg");
	this.shape_20.setTransform(72,-36.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E99D78").s().p("AgPBZQglgHgVgfQgVgeAHgkQAGglAfgVQAfgVAjAGQAlAHAVAfQAVAfgGAjQgHAlgfAVQgYAQgbAAIgPgBg");
	this.shape_21.setTransform(124.6,19);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A7C52E").s().p("ApVKEIJLneIGlusIC8BSImmOtIqDINg");
	this.shape_22.setTransform(-52.7,93.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7FB21E").s().p("ABehNIl9qcIC6hYIGALaIAFOhIirAIg");
	this.shape_23.setTransform(46.6,102.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#636368").s().p("ABjDdIiFivIARgpQAFgOgKgLQgLgLgPAFIghALIhRhrICqhwIBEBZQAcAlAKAtIAuDKQAEAPgBAVQAAARgFASQgFAUgUAEIgIABQgQAAgKgOg");
	this.shape_24.setTransform(-111.3,179.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333337").s().p("AgrBAQgJgNgPACQgPABgFAPIgLAhIiGAAIANjLIBxAAQAuAAAqATIC8BWQARAIAOAKQANAKAMAQQANAQgKATQgJATgVAAIjcAAg");
	this.shape_25.setTransform(79.8,195.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#057EB4").s().p("An2HrIFXpXIHfnCQAkgiAyABQAyABAhAkIAPAPIo3IdIlWJOg");
	this.shape_26.setTransform(-16.6,-34.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E99D78").s().p("AgBBaQgmgBgZgbQgagaABglQABglAbgaQAbgaAkABQAlABAaAbQAaAbgBAlQgBAlgbAZQgaAZgjAAIgCAAg");
	this.shape_27.setTransform(-66.1,24.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333337").s().p("AgYBFQgOgMgCgSIgHhFQgBgSAMgOQAMgOASgCQARgCAOAMQAOAMACASIAHBFQABASgMAOQgMAOgSACIgFAAQgOAAgMgKg");
	this.shape_28.setTransform(46.2,-166.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#895715").s().p("Aj7FwIgjgPIghgQQgTgJgUgFIgakeQgOieBoh6QBnh6ChgOIACgBQCUgNB2BYQB3BXAdCQQgOABgdgCQhGgEhTgzQgHgLgPgGQgCBBgSA4QgUA+gmApQgeAhgqAJQguASg2gJQgMgigagXQgdgYghgBQgygBgXAsQgSAjADA0QADBXAsAzIAGAGIAFA+QgQgEgXgKg");
	this.shape_29.setTransform(31.2,-184.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#057EB4").s().p("AgGLJIh9qnIBLqNQAFgxAmggQAmgfAxAFIAUACIhSMMIB4Kfg");
	this.shape_30.setTransform(18.6,-36.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E99D78").s().p("AgNBZQgkgGgWgeQgXgeAGgkQAGgkAdgWQAfgWAjAFQAlAGAXAeQAWAegGAkQgFAlgeAWQgYARgcAAIgPgBg");
	this.shape_31.setTransform(25.2,40.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A7C52E").s().p("AoKGGIM0iuIj/r+ID/A1IDhNWIwADCg");
	this.shape_32.setTransform(5.5,58.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7FB21E").s().p("AhqBSIBxwbIDNgSIiFRXIh5M8IipAkg");
	this.shape_33.setTransform(-10.4,109.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#636368").s().p("AgJDtQgUgGgEgUIgpjYIAhgeQAMgKgFgPQgEgOgQgDIgigFIgZiDIDKgZIAVBvQAJAvgLArIgyDJQgFATgIAPQgJARgMAMQgKAMgNAAQgEAAgGgCg");
	this.shape_34.setTransform(-56.1,122);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#057EB4").s().p("AkyJ3ICBqmIExpGQAXgsAvgPQAwgPAsAXIARAJIlmK5IiDKdg");
	this.shape_35.setTransform(3.1,-52.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E99D78").s().p("AgsBOQghgTgJgjQgKgkATggQATghAkgJQAjgJAgASQAhATAJAkQAKAjgTAgQgSAggkAKQgNADgLAAQgXAAgVgMg");
	this.shape_36.setTransform(-23.1,18.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A7C52E").s().p("AiDL3IE1q3IomvMIEAA1IHpN5ImANrg");
	this.shape_37.setTransform(47,83);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7FB21E").s().p("Al0PiIEZwDIEDwJIDNAFIkdRBIk9QPg");
	this.shape_38.setTransform(-33,102);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#636368").s().p("AB4DZIiYigIAMgqQAEgPgMgJQgMgKgOAGIggAOIhchgICdiDIBNBRQAgAiAPArIBEDEQAGAQABATQACASgDARQgDAVgUAGQgGACgFAAQgNAAgKgKg");
	this.shape_39.setTransform(36.8,181.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333337").s().p("AC0CoIjOhNIgIgsQgDgPgPgEQgPgEgKAMIgWAcIh+gvIBVi6IBpAnQAqAQAhAhICTCTQAMAMAKAQQAKAQAFAQQAGAUgPAPQgKAJgMAAQgGAAgHgCg");
	this.shape_40.setTransform(-55.7,218.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#057EB4").s().p("AinBUIhkqJQgIgxAdgoQAdgoAxgIIAUgEIB+MGIEkJoIiKAXg");
	this.shape_41.setTransform(53.1,-50.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E99D78").s().p("Ag0BJQgegWgGglQgGgjAWgfQAWgeAlgGQAkgGAeAWQAeAWAGAlQAGAkgWAeQgWAeglAGIgOABQgcAAgYgRg");
	this.shape_42.setTransform(75.2,25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A7C52E").s().p("Al2tQIDDg+IIqbfIjDA9g");
	this.shape_43.setTransform(41.6,102.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7FB21E").s().p("AnOL4IGrqeIExvMIDABGIkxPLIneLUg");
	this.shape_44.setTransform(-44.7,100.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A7C52E").s().p("AhqBSIBxwbIDNgSIiFRXIh5M8IipAkg");
	this.shape_45.setTransform(-10.4,109.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7FB21E").s().p("AoKGGIM0iuIj/r+ID/A1IDhNWIwADCg");
	this.shape_46.setTransform(5.5,58.8);

	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:26.4,y:-115.9}},{t:this.shape_12,p:{x:12,y:-42.4}},{t:this.shape_11,p:{x:4.6,y:9.8}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:25.7,y:-164.6}},{t:this.shape_6,p:{x:23.6,y:-178.4}},{t:this.shape_5,p:{x:5.1,y:-158.7}},{t:this.shape_4},{t:this.shape_3,p:{x:56.3,y:-162.1}},{t:this.shape_2,p:{x:57.5,y:-165.2}},{t:this.shape_1,p:{x:39.6,y:-163.6}},{t:this.shape,p:{x:54.6,y:-142.7}}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:79.8,y:195.4}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_13,p:{x:33.6,y:-103.9}},{t:this.shape_12,p:{x:19.3,y:-30.3}},{t:this.shape_11,p:{x:11.8,y:21.9}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_7,p:{x:32.9,y:-152.6}},{t:this.shape_6,p:{x:30.8,y:-166.4}},{t:this.shape_5,p:{x:12.3,y:-146.7}},{t:this.shape_19},{t:this.shape_3,p:{x:63.5,y:-150}},{t:this.shape_2,p:{x:64.8,y:-153.1}},{t:this.shape_1,p:{x:46.8,y:-151.5}},{t:this.shape,p:{x:61.8,y:-130.6}}]},3).to({state:[{t:this.shape_25,p:{x:-8.3,y:213.9}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_13,p:{x:34,y:-122.4}},{t:this.shape_12,p:{x:19.7,y:-48.8}},{t:this.shape_11,p:{x:12.2,y:3.4}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_7,p:{x:33.3,y:-171.1}},{t:this.shape_29,p:{y:-184.9,x:31.2}},{t:this.shape_5,p:{x:12.7,y:-165.2}},{t:this.shape_28,p:{y:-166.9}},{t:this.shape_3,p:{x:63.9,y:-168.5}},{t:this.shape_2,p:{x:65.2,y:-171.6}},{t:this.shape_1,p:{x:47.2,y:-170}},{t:this.shape,p:{x:62.2,y:-149.1}}]},3).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_13,p:{x:34,y:-133.9}},{t:this.shape_12,p:{x:19.7,y:-60.3}},{t:this.shape_11,p:{x:12.2,y:-8.1}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_7,p:{x:33.3,y:-182.6}},{t:this.shape_29,p:{y:-196.4,x:31.2}},{t:this.shape_5,p:{x:12.7,y:-176.7}},{t:this.shape_28,p:{y:-178.4}},{t:this.shape_3,p:{x:63.9,y:-180}},{t:this.shape_2,p:{x:65.2,y:-183.1}},{t:this.shape_1,p:{x:47.2,y:-181.5}},{t:this.shape,p:{x:62.2,y:-160.6}}]},3).to({state:[{t:this.shape_8},{t:this.shape_44},{t:this.shape_18},{t:this.shape_16},{t:this.shape_15},{t:this.shape_13,p:{x:26.4,y:-115.9}},{t:this.shape_12,p:{x:12,y:-42.4}},{t:this.shape_11,p:{x:4.6,y:9.8}},{t:this.shape_9},{t:this.shape_7,p:{x:25.7,y:-164.6}},{t:this.shape_29,p:{y:-178.4,x:23.6}},{t:this.shape_5,p:{x:5.1,y:-158.7}},{t:this.shape_4},{t:this.shape_3,p:{x:56.3,y:-162.1}},{t:this.shape_2,p:{x:57.5,y:-165.2}},{t:this.shape_1,p:{x:39.6,y:-163.6}},{t:this.shape,p:{x:54.6,y:-142.7}},{t:this.shape_43},{t:this.shape_17}]},3).to({state:[{t:this.shape_46},{t:this.shape_25,p:{x:-8.3,y:213.9}},{t:this.shape_34},{t:this.shape_45},{t:this.shape_13,p:{x:34,y:-122.4}},{t:this.shape_12,p:{x:19.7,y:-48.8}},{t:this.shape_11,p:{x:12.2,y:3.4}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_7,p:{x:33.3,y:-171.1}},{t:this.shape_6,p:{x:31.2,y:-184.9}},{t:this.shape_5,p:{x:12.7,y:-165.2}},{t:this.shape_28,p:{y:-166.9}},{t:this.shape_3,p:{x:63.9,y:-168.5}},{t:this.shape_2,p:{x:65.2,y:-171.6}},{t:this.shape_1,p:{x:47.2,y:-170}},{t:this.shape,p:{x:62.2,y:-149.1}}]},3).to({state:[{t:this.movieClip_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.4,-216.7,212.9,434.5);


(lib.spotlight_1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(190.5,709.5,1,1,0,0,0,187.6,27.9);
	this.instance.alpha = 0.711;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.3,369.3,1,1,0,0,0,189.3,369.3);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,378.5,738.7);


(lib.spotlight_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spotlight_1ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(189.3,369.3,1,1,0,0,0,189.3,369.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spotlight_1, new cjs.Rectangle(0,0,378.5,738.7), null);


(lib.planeride = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ridinginplaneai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.1,132.1,0.926,0.926,0.7,0,0,80.6,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.planeride, new cjs.Rectangle(0.2,0.5,54.8,115.8), null);


(lib.plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.paperplaneai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.6,34.1,1,1,0,0,0,80.6,34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.plane, new cjs.Rectangle(0,0,161.2,68.4), null);


(lib.noteai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(387,28.9,1,1,0,0,0,44.6,28.9);
	this.instance.alpha = 0.301;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#929397").s().p("AmnkyIMvAAIAgJkg");
	this.shape.setTransform(356.3,54.4);

	this.instance_1 = new lib.Path_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.7,236.2,1,1,0,0,0,46.7,25.4);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Path_1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(380.5,243.4,1,1,0,0,0,32.7,26.4);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(387,28.9,1,1,0,0,0,44.6,28.9);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.Path_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(47.3,36.7,1,1,0,0,0,41,36.5);
	this.instance_4.alpha = 0.301;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B6B70").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_1.setTransform(153.3,241.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQARAAAJALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgGgEQgFgDgHAAQgFAAgGADg");
	this.shape_2.setTransform(146.3,237.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B6B70").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAHACAGAIIgIAIQgGgGgDgCQgFgCgGAAQgMAAgHAJQgFAJAAAOIABANQABAGAFAHQAFAHAMAAQAGAAAFgCQADgDAGgFIAIAIQgGAHgHADQgGADgJAAQgQAAgLgMg");
	this.shape_3.setTransform(137.6,237.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_4.setTransform(128.3,237.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_5.setTransform(118.5,237.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B6B70").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_6.setTransform(106.6,237.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgIAAgFAGQgGAHAAAKIAAAzg");
	this.shape_7.setTransform(96,237.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B6B70").s().p("AgNApQgFgCgGgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAFAGQAGAFACAIQACAIAAALQAAALgCAIQgCAJgHAGQgEAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgEAGgCAHQgBAGgBAIQABAJABAHQACAGAEAFQAGAGAIAAQAKAAAEgGQAGgFABgGIABgQIgBgPQgBgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_8.setTransform(87,237.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B6B70").s().p("AgJA+IAAhLIgLAAIAAgJIALAAIAAgRQAAgJAFgGQAFgHALAAIAJAAIAAAKIgHAAQgLAAAAANIAAAQIASAAIAAAJIgSAAIAABLg");
	this.shape_9.setTransform(79.8,236);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAFgDAIAAQAGAAAFABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_10.setTransform(74,237.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAHAIAKAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgDAEIgCAIIAAAIIAsAAIAAgIIgDgGQgCgGgFgEQgGgDgHAAQgFAAgGADg");
	this.shape_11.setTransform(65,237.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6B6B70").s().p("AghA+IAAh6IAMAAIAAAKQAFgHAGgCQAGgCAHAAQANAAAHAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgHAGQgCADgHACQgFACgGAAQgHAAgGgCQgFgCgGgHIAAAwgAgQgpQgEAIgBAPQABAQAEAHQAEAJANAAQAMAAAEgJQAFgIAAgPQAAgPgFgJQgEgIgMAAQgNAAgEAJg");
	this.shape_12.setTransform(55.8,239.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgIAAgFAGQgGAHAAAKIAAAzg");
	this.shape_13.setTransform(373.6,213.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgFAEgDAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgEgEQgGgDgHAAQgFAAgGADg");
	this.shape_14.setTransform(364.6,213.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B6B70").s().p("AgdA9IAAgLIADAAQAHAAACgCQADgDADgGIAFgQIgehTIAOAAIAWBDIAXhDIAOAAIgmBpQgDAHgDADQgEADgEACIgJABg");
	this.shape_15.setTransform(356.1,215.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_16.setTransform(347.3,213.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B6B70").s().p("AAGA+QgJAAgGgGQgFgGAAgLIAAhkIAMAAIAABjQAAAHACADQACADAHAAIAGAAIAAALg");
	this.shape_17.setTransform(341,211.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6B6B70").s().p("AghA+IAAh6IAMAAIAAAKQAFgHAGgCQAGgCAHAAQAOAAAGAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgHAGQgDADgGACQgFACgGAAQgHAAgGgCQgFgCgGgHIAAAwgAgQgpQgEAIgBAPQABAQAEAHQAEAJAMAAQANAAAEgJQAFgIAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_18.setTransform(333.4,215.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_19.setTransform(319.5,213.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6B6B70").s().p("AgeArIAAgLIAvg/IgsAAIAAgLIA6AAIAAALIgvA/IAvAAIAAALg");
	this.shape_20.setTransform(310.8,213.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B6B70").s().p("AgFA+IAAhVIALAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_21.setTransform(304.7,211.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_22.setTransform(299.4,212.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgEgEQgGgDgHAAQgFAAgGADg");
	this.shape_23.setTransform(292.1,213.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_24.setTransform(282.6,213.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6B6B70").s().p("AgMApQgHgCgFgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgGAGgBAHQgCAGABAIQgBAJACAHQABAGAGAFQAFAGAIAAQAKAAAEgGQAGgFACgGIABgQIgBgPQgCgGgEgEQgGgHgKAAQgIAAgFAFg");
	this.shape_25.setTransform(273.1,213.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6B6B70").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_26.setTransform(260.8,213.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6B6B70").s().p("AgVA4QgIgHgBgJQgDgJAAgMQAAgMADgJQACgIAEgFQAFgFAGgCQAGgCAFAAQAIAAAFACQAGADAFAGIAAgwIAMAAIAAB6IgMAAIAAgKQgFAGgGADQgFACgIAAQgNAAgGgGgAgQgEQgEAHgBAQQABAPAEAIQAEAKAMgBQANABAEgKQAFgIAAgPQAAgQgFgHQgEgJgNAAQgMAAgEAJg");
	this.shape_27.setTransform(243.8,211.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_28.setTransform(234.4,213.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_29.setTransform(224.6,213.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgDgGgEgEQgGgDgHAAQgGAAgFADg");
	this.shape_30.setTransform(211.4,213.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_31.setTransform(203.8,212.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_32.setTransform(196.1,213.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6B6B70").s().p("AgFArIgfhVIANAAIAXBEIAXhEIAOAAIggBVg");
	this.shape_33.setTransform(188,213.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6B6B70").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_34.setTransform(181.9,211.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_35.setTransform(176.6,212.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6B6B70").s().p("AgMApQgHgCgFgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgOgbQgFAGgBAHQgBAGAAAIQAAAJABAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIACgQIgCgPQgBgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_36.setTransform(169.3,213.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6B6B70").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_37.setTransform(157,213.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6B6B70").s().p("AgMApQgGgCgGgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAGgGAGgCQAFgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgFAGgCAHQgBAGgBAIQABAJABAHQACAGAFAFQAFAGAIAAQAKAAAEgGQAGgFACgGIAAgQIAAgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_38.setTransform(140.4,213.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_39.setTransform(132.8,212.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6B6B70").s().p("AgdA9IAAgLIADAAQAHAAACgCQAEgDACgGIAGgQIgfhTIAOAAIAWBDIAXhDIAOAAIgmBpQgDAHgDADQgDADgFACIgJABg");
	this.shape_40.setTransform(121.8,215.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_41.setTransform(113,213.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6B6B70").s().p("AAWArIgWhCIgWBCIgLAAIgbhVIAOAAIATBEIAWhEIAKAAIAXBEIAThEIAOAAIgbBVg");
	this.shape_42.setTransform(102.5,213.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_43.setTransform(88.8,212.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_44.setTransform(81.1,213.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAGAIAMAAQAHAAAFgCQAFgDAFgFIAIAIQgHAGgGAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgCgGgFgEQgGgDgHAAQgGAAgFADg");
	this.shape_45.setTransform(72.3,213.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAGgDAHAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_46.setTransform(64.7,213.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6B6B70").s().p("AgQA8QgHgCgHgHIAIgHIAJAGQAFACAHAAQALAAAFgHQAHgIAAgLIAAgOQgFAGgGADQgGACgHAAQgGAAgFgCQgFgCgFgFQgGgFgBgIQgDgJAAgLQAAgMADgJQACgJAEgEQAFgFAGgCQAFgCAGAAQAIAAAFACQAGADAFAGIAAgKIAMAAIAABXQAAAQgKALQgKAKgPAAQgKAAgFgDgAgQgqQgEAJgBAOQABAOAEAIQAEAJAMAAQANAAAEgJQAFgHAAgPQAAgPgFgIQgEgJgNAAQgMAAgEAJg");
	this.shape_47.setTransform(55.4,215.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_48.setTransform(372.7,188.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAJgIQAEAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgNgBQgNAAgGgFQgHgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_49.setTransform(359.7,188.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6B6B70").s().p("AgGA+IAAhUIAMAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_50.setTransform(353.2,186.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6B6B70").s().p("AgVAgQgLgLAAgVQAAgUALgMQAKgLAQAAQAJAAAGADQAGACAHAIIgIAIQgGgGgDgCQgFgCgGAAQgMAAgHAJQgFAJAAAOIABANQABAGAFAHQAFAHAMAAQAGAAAFgCQADgDAGgFIAIAIQgHAHgGADQgGADgJAAQgQAAgKgMg");
	this.shape_51.setTransform(342.5,188.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAGgDAHAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_52.setTransform(335.2,188.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_53.setTransform(325.9,188.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6B6B70").s().p("AgdA9IAAgLIADAAQAHAAACgCQADgDADgGIAFgQIgehTIAOAAIAWBEIAXhEIAOAAIgmBpQgDAHgDADQgEAEgEABIgJABg");
	this.shape_54.setTransform(313.4,190.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6B6B70").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgIAAgGAGQgGAHAAAKIAAAzg");
	this.shape_55.setTransform(306.5,188.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6B6B70").s().p("AgMApQgHgCgFgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgOgbQgFAGgBAHQgBAGAAAIQAAAJABAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIACgQIgCgPQgBgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_56.setTransform(297.5,188.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_57.setTransform(289.9,187.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAJgIQAEAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgOgBQgMAAgGgFQgHgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_58.setTransform(282.7,188.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_59.setTransform(269.5,188.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6B6B70").s().p("AAVA+IAAg1QAAgKgFgGQgGgFgKAAQgJAAgFAFQgGAHAAAJIAAA1IgNAAIAAh7IANAAIAAAwQAJgLAOAAQAOAAAJAJQAIAJAAANIAAA3g");
	this.shape_60.setTransform(260,186.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_61.setTransform(252.1,187.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6B6B70").s().p("AgMApQgHgCgFgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgOgbQgFAGgBAHQgBAGAAAIQAAAJABAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIACgQIgCgPQgBgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_62.setTransform(240.4,188.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_63.setTransform(232.7,187.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_64.setTransform(221.2,188.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_65.setTransform(212.1,188.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6B6B70").s().p("AgMApQgHgCgFgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgOgbQgFAGgBAHQgBAGAAAIQAAAJABAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIACgQIgCgPQgBgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_66.setTransform(202.6,188.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6B6B70").s().p("AgFA+IAAhUIALAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_67.setTransform(195.8,186.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_68.setTransform(190.5,187.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#6B6B70").s().p("AgYAjQgJgIABgQIAAg1IAMAAIAAAzQAAAMAGAFQAFAGAJAAQAKAAAFgGQAHgGgBgLIAAgzIAMAAIAABUIgMAAIAAgJQgJAKgOAAQgOAAgIgIg");
	this.shape_69.setTransform(182.8,188.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6B6B70").s().p("AgKA8QgFgDgFgGIAAALIgNAAIAAh7IANAAIAAAwQAFgHAFgCQAGgCAHAAQAOAAAGAHQAHAHACAIQACAJAAAMQAAAMgCAJQgCAJgGAGQgDAEgGABQgGADgGAAQgHAAgGgDgAgQgEQgFAHABAQQgBAPAFAIQAEAJAMAAQANAAAEgJQAEgIABgPQgBgPgEgJQgEgIgNAAQgMAAgEAJg");
	this.shape_70.setTransform(173.4,187);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6B6B70").s().p("AgGA+IAAhUIAMAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_71.setTransform(166.3,186.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_72.setTransform(161.1,188.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_73.setTransform(153.7,187.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_74.setTransform(146,188.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6B6B70").s().p("AgMApQgHgCgFgGQgGgFgBgIQgDgIAAgMQAAgKADgJQABgIAGgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgGAGgBAHQgBAGAAAIQAAAJABAHQABAGAGAFQAFAGAIAAQAJAAAGgGQAFgFACgGIABgQIgBgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_75.setTransform(136.5,188.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6B6B70").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAHACAGAIIgIAIQgGgGgDgCQgFgCgGAAQgMAAgHAJQgFAJAAAOIABANQABAGAFAHQAFAHAMAAQAGAAAFgCQADgDAGgFIAIAIQgGAHgHADQgGADgJAAQgQAAgLgMg");
	this.shape_76.setTransform(127.8,188.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6B6B70").s().p("AgSApQgJgDgHgHIAJgIQAEAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgOgBQgMAAgHgFQgGgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGADADQAEADAIAAIANABQAMACAGAEQAHAFAAAMQAAAMgJAHQgKAHgQAAQgKAAgIgDg");
	this.shape_77.setTransform(114.6,188.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_78.setTransform(105.5,188.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6B6B70").s().p("AgSApQgJgDgHgHIAJgIQAEAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgOgBQgMAAgHgFQgGgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgJAHQgKAHgQAAQgKAAgIgDg");
	this.shape_79.setTransform(92.5,188.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6B6B70").s().p("AgWA4QgGgHgDgJQgCgJAAgMQAAgMACgJQADgIAEgFQAFgFAFgCQAHgCAGAAQAGAAAGACQAGACAFAHIAAgwIAMAAIAAB7IgMAAIAAgLQgFAGgGADQgGADgGAAQgOgBgHgGgAgQgEQgFAHABAQQgBAPAFAIQAEAJANAAQAMAAAFgJQAEgIAAgPQAAgPgEgJQgFgIgMAAQgNAAgEAJg");
	this.shape_80.setTransform(83.2,187);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6B6B70").s().p("AgNApQgFgCgGgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAGAGQAFAFACAIQACAIAAALQAAALgCAIQgCAJgGAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgEAGgCAHQgCAGAAAIQAAAJACAHQACAGAEAFQAGAGAIAAQAKAAAEgGQAGgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_81.setTransform(74.1,188.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#6B6B70").s().p("AgNApQgFgCgGgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAFAGQAGAFACAIQACAIAAALQAAALgCAIQgCAJgHAGQgEAFgGACQgGADgIAAQgGAAgHgDgAgNgbQgFAGgCAHQgBAGgBAIQABAJABAHQACAGAFAFQAFAGAIAAQAKAAAEgGQAGgFABgGIABgQIgBgPQgBgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_82.setTransform(64.9,188.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6B6B70").s().p("AgQA9QgHgEgHgFIAIgIIAJAGQAFACAHAAQALAAAFgHQAHgIAAgLIAAgOQgFAHgGACQgGADgHAAQgGAAgFgDQgFgCgFgEQgGgFgBgJQgDgJAAgLQAAgMADgJQACgJAEgEQAFgFAGgCQAFgCAGAAQAIAAAFACQAGACAFAHIAAgKIAMAAIAABXQAAARgKAKQgKAKgPAAQgKAAgFgCgAgQgrQgEAKgBAOQABAPAEAHQAEAJAMAAQANAAAEgJQAFgHAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAIg");
	this.shape_83.setTransform(55.4,190.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6B6B70").s().p("AAGA+QgJAAgGgGQgFgGAAgLIAAhkIAMAAIAABkQAAAGACADQACADAHAAIAGAAIAAALg");
	this.shape_84.setTransform(369.2,162.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_85.setTransform(361.2,164.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6B6B70").s().p("AgYAjQgJgIABgQIAAg1IAMAAIAAAzQAAAMAGAFQAFAGAJAAQAKAAAFgGQAHgGgBgLIAAgzIAMAAIAABUIgMAAIAAgJQgJAKgOAAQgOAAgIgIg");
	this.shape_86.setTransform(352,164.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_87.setTransform(344.1,163);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_88.setTransform(338.4,164.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6B6B70").s().p("AgGA+IAAhUIAMAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_89.setTransform(331.8,162.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6B6B70").s().p("AgFArIgfhVIAOAAIAWBEIAXhEIAOAAIgfBVg");
	this.shape_90.setTransform(325.7,164.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgFAEgDAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgEgEQgGgDgHAAQgFAAgGADg");
	this.shape_91.setTransform(312.9,164.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6B6B70").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_92.setTransform(300.6,164.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_93.setTransform(288.1,164.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6B6B70").s().p("AgQA9QgHgEgHgFIAIgIIAJAGQAFACAHAAQALAAAGgIQAFgGAAgMIAAgOQgEAGgGADQgGACgGABQgHgBgGgCQgFgCgFgEQgFgGgCgJQgCgHAAgMQAAgMACgJQACgJAFgFQAFgEAFgCQAGgCAHAAQAGAAAGACQAGACAEAHIAAgKIANAAIAABXQAAAQgKAKQgKALgPAAQgKAAgFgCgAgQgrQgFAJAAAPQAAAPAFAIQAFAIALAAQANAAAFgIQADgIAAgPQAAgPgDgJQgFgIgNAAQgLAAgFAIg");
	this.shape_94.setTransform(278.9,166.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6B6B70").s().p("AgXAGIAAgLIAvAAIAAALg");
	this.shape_95.setTransform(270.7,163.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_96.setTransform(262.1,164.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6B6B70").s().p("AgFA+IAAhUIALAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_97.setTransform(255,162.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6B6B70").s().p("AgQA9QgHgEgHgFIAIgIIAJAGQAFACAHAAQALAAAFgIQAHgGAAgMIAAgOQgFAGgGADQgGACgHABQgGgBgFgCQgFgCgFgEQgGgGgBgJQgDgHAAgMQAAgMADgJQACgJAEgFQAFgEAGgCQAFgCAGAAQAIAAAFACQAGACAFAHIAAgKIAMAAIAABXQAAAQgKAKQgKALgPAAQgKAAgFgCgAgQgrQgEAJgBAPQABAPAEAIQAEAIAMAAQANAAAEgIQAFgIAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAIg");
	this.shape_98.setTransform(243.5,166.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_99.setTransform(234.1,164.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6B6B70").s().p("AgGA+IAAhUIAMAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_100.setTransform(227,162.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6B6B70").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAGgDAHAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgGAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_101.setTransform(221.8,164.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_102.setTransform(212.8,164.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6B6B70").s().p("AgJA+IAAhKIgLAAIAAgKIALAAIAAgRQAAgJAFgHQAFgGAKAAIAKAAIAAALIgHAAQgMAAAAAMIAAAQIATAAIAAAKIgTAAIAABKg");
	this.shape_103.setTransform(205.6,162.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6B6B70").s().p("AgJA+IAAhKIgLAAIAAgKIALAAIAAgRQAAgJAGgHQAEgGALAAIAJAAIAAALIgHAAQgLAAAAAMIAAAQIASAAIAAAKIgSAAIAABKg");
	this.shape_104.setTransform(200.2,162.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6B6B70").s().p("AgcA0QgLgKgCgKQgCgJAAgXIABgdQACgLALgKQALgMASAAQATAAAKALQAKAKADAKQACAKAAAVIgBAeQgCAKgKAKQgMANgTAAQgSAAgKgLgAgTgqQgHAHgBAHQgCAIAAAUQAAAUACAJQABAHAHAIQAHAHAMAAQANAAAHgHQAHgIABgHQACgJAAgUQAAgUgCgIQgBgHgGgGQgIgJgNAAQgMAAgHAIg");
	this.shape_105.setTransform(191.7,162.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#6B6B70").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_106.setTransform(179.4,167.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_107.setTransform(172.6,164.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_108.setTransform(163.8,164.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6B6B70").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgHAJQgFAJgBAOIACANQABAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgLgMg");
	this.shape_109.setTransform(155,164.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_110.setTransform(145.7,164.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_111.setTransform(136.2,164.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6B6B70").s().p("AgFA+IAAhUIALAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_112.setTransform(129.4,162.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6B6B70").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgIAAgGAGQgGAHAAAKIAAAzg");
	this.shape_113.setTransform(124.3,164.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQARAAAJALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgGgEQgFgDgHAAQgFAAgGADg");
	this.shape_114.setTransform(115.3,164.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6B6B70").s().p("AghA+IAAh6IAMAAIAAAKQAFgHAGgCQAGgCAHAAQAOAAAGAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgHAGQgDADgGACQgFACgGAAQgHAAgGgCQgFgCgGgHIAAAwgAgQgpQgEAIgBAPQABAQAEAHQAEAJAMAAQANAAAEgJQAFgIAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_115.setTransform(106.1,166.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6B6B70").s().p("AAVArIgVghIgUAhIgPAAIAdgrIgcgqIAPAAIATAgIATggIAPAAIgbAqIAdArg");
	this.shape_116.setTransform(97,164.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQARAAAJALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgGgEQgFgDgHAAQgFAAgGADg");
	this.shape_117.setTransform(88.3,164.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6B6B70").s().p("AgVA3QgIgGgBgJQgDgJAAgNQAAgMADgHQABgKAFgFQAFgEAFgCQAGgCAHAAQAGAAAGACQAGACAFAHIAAgxIAMAAIAAB8IgMAAIAAgLQgFAHgGACQgGACgGABQgOAAgGgIgAgQgEQgFAIABAOQgBAQAFAJQAEAIAMABQANgBAEgIQAFgKAAgPQAAgOgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_118.setTransform(74.3,162.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_119.setTransform(64.9,164.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_120.setTransform(55.1,164.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_121.setTransform(358.3,138.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_122.setTransform(350.7,139.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQARAAAJALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgGgEQgFgDgHAAQgFAAgGADg");
	this.shape_123.setTransform(341.2,139.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_124.setTransform(333.5,138.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_125.setTransform(325.9,139.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B6B70").s().p("AgNApQgFgCgGgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgGgDgAgNgbQgGAGgBAHQgBAGAAAIQAAAJABAHQACAGAFAFQAFAGAIAAQAKAAAEgGQAGgFACgGIABgQIgBgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_126.setTransform(316.4,139.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#6B6B70").s().p("AgVAgQgLgLAAgVQAAgUALgMQAKgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgGAJQgHAJAAAOIABANQACAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgKgMg");
	this.shape_127.setTransform(307.6,139.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#6B6B70").s().p("AgeA9IAAgLIAFAAQAGAAADgCQACgDACgFIAGgRIgehTIANAAIAXBDIAXhDIAOAAIgmBpQgCAHgEADQgDADgFACIgJABg");
	this.shape_128.setTransform(295,141.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6B6B70").s().p("AgJA8QgGgCgGgHIAAALIgMAAIAAh8IAMAAIAAAxQAGgGAGgCQAFgDAHAAQANAAAHAGQAHAIACAJQACAIAAALQAAAMgCAKQgCAJgHAGQgCAEgHACQgFABgGAAQgHABgFgDgAgQgEQgFAIAAAOQAAAQAFAJQAFAJAMAAQAMAAAFgJQADgKAAgPQAAgPgDgHQgFgJgMAAQgMAAgFAJg");
	this.shape_129.setTransform(286.5,137.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6B6B70").s().p("AgWA3QgGgGgDgJQgCgJAAgNQAAgLACgIQADgJAEgGQAFgEAFgCQAGgCAHAAQAGAAAGACQAGADAFAGIAAgxIAMAAIAAB8IgMAAIAAgLQgFAHgGACQgGADgGgBQgOABgHgIgAgQgEQgFAIABAOQgBAQAFAJQAEAJAMAAQANAAAFgJQAEgKAAgPQAAgPgEgHQgFgJgNAAQgMAAgEAJg");
	this.shape_130.setTransform(272.2,137.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_131.setTransform(263.1,139.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6B6B70").s().p("AgVA3QgIgGgBgJQgDgJAAgNQAAgLADgIQACgJAEgGQAFgEAGgCQAFgCAHAAQAGAAAGACQAGADAFAGIAAgxIAMAAIAAB8IgMAAIAAgLQgFAHgGACQgGADgGgBQgOABgGgIgAgQgEQgFAIABAOQgBAQAFAJQAEAJAMAAQANAAAEgJQAFgKAAgPQAAgPgFgHQgEgJgNAAQgMAAgEAJg");
	this.shape_132.setTransform(253.5,137.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAGgDAHAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_133.setTransform(246.1,139.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_134.setTransform(236.8,139.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#6B6B70").s().p("AAXArIgXhCIgVBCIgMAAIgbhVIANAAIAUBEIAXhEIAKAAIAWBEIAUhEIANAAIgbBVg");
	this.shape_135.setTransform(226.3,139.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAGAIAMAAQAHAAAFgCQAFgDAFgFIAIAIQgHAGgGAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgCgGgFgEQgGgDgHAAQgGAAgFADg");
	this.shape_136.setTransform(215.4,139.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAGgDAHAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_137.setTransform(207.8,139.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#6B6B70").s().p("AAGA+QgJAAgGgGQgFgGAAgLIAAhkIAMAAIAABkQAAAGACADQACADAHAAIAGAAIAAALg");
	this.shape_138.setTransform(197,137.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_139.setTransform(189.3,139.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgFAEgDAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_140.setTransform(180.1,139.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#6B6B70").s().p("AgJA+IAAhLIgLAAIAAgJIALAAIAAgRQAAgJAFgHQAFgGALAAIAJAAIAAALIgHAAQgLAAAAAMIAAAQIASAAIAAAJIgSAAIAABLg");
	this.shape_141.setTransform(172.9,137.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6B6B70").s().p("AgdA9IAAgLIADAAQAHAAACgCQAEgDACgFIAGgRIgfhTIAOAAIAWBDIAXhDIAOAAIgmBpQgDAHgDADQgEADgEACIgJABg");
	this.shape_142.setTransform(161.8,141.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_143.setTransform(153.3,139.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#6B6B70").s().p("AAVA+IAAg1QAAgKgFgFQgGgHgKAAQgJAAgFAHQgGAFAAAKIAAA1IgNAAIAAh7IANAAIAAAwQAJgKAOAAQAOAAAJAIQAIAJAAANIAAA3g");
	this.shape_144.setTransform(143.8,137.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_145.setTransform(135.9,138.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#6B6B70").s().p("AgSApQgJgDgHgHIAIgIQAFAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgHgFQgGgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGADADQAEADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgJAHQgKAHgQAAQgKAAgIgDg");
	this.shape_146.setTransform(124.4,139.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_147.setTransform(115.2,139.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#6B6B70").s().p("AgQA8QgHgCgHgHIAIgIIAJAHQAFACAHAAQALAAAGgIQAFgGAAgNIAAgNQgFAHgFACQgGACgGABQgHgBgGgCQgEgCgGgFQgEgEgDgKQgCgHAAgMQAAgMACgJQADgIAEgGQAFgEAFgCQAGgCAHAAQAGAAAGACQAFADAFAGIAAgKIANAAIAABXQAAAQgKAKQgKALgPAAQgJAAgGgDgAgQgqQgFAIABAPQgBAOAFAJQAFAIALAAQANAAAFgIQADgIAAgPQAAgPgDgIQgFgJgNAAQgLAAgFAJg");
	this.shape_148.setTransform(101.7,141.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_149.setTransform(92.3,139.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#6B6B70").s().p("AgNApQgGgCgFgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAFgGAGgCQAGgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgFAGgBAHQgCAGAAAIQAAAJACAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_150.setTransform(82.8,139.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#6B6B70").s().p("AAGA+QgJAAgGgGQgFgGAAgLIAAhkIAMAAIAABkQAAAGACADQACADAHAAIAGAAIAAALg");
	this.shape_151.setTransform(76.1,137.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_152.setTransform(64.3,139.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_153.setTransform(55.1,139.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQARAAAJALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgGgEQgFgDgHAAQgFAAgGADg");
	this.shape_154.setTransform(373.1,115.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAFgDAIAAQAGAAAFABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_155.setTransform(365.6,115.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#6B6B70").s().p("AgMApQgHgCgFgGQgGgFgBgIQgDgIAAgMQAAgKADgJQABgIAGgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgGAGgBAHQgBAGAAAIQAAAJABAHQABAGAGAFQAFAGAIAAQAJAAAGgGQAFgFACgGIABgQIgBgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_156.setTransform(356.6,115.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#6B6B70").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_157.setTransform(344.3,115.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6B6B70").s().p("AgVA4QgIgHgBgJQgDgJAAgNQAAgLADgJQACgJAEgEQAFgFAGgCQAFgCAHAAQAGAAAGACQAGADAFAGIAAgxIAMAAIAAB7IgMAAIAAgKQgFAGgGADQgGACgGAAQgOAAgGgGgAgQgEQgFAHABAPQgBAQAFAIQAEAKAMgBQANABAEgKQAFgIAAgQQAAgPgFgHQgEgJgNAAQgMAAgEAJg");
	this.shape_158.setTransform(327.3,113.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_159.setTransform(317.9,115.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAHAIAKAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgDAEIgCAIIAAAIIAsAAIAAgIIgDgGQgCgGgFgEQgGgDgHAAQgFAAgGADg");
	this.shape_160.setTransform(308.4,115.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#6B6B70").s().p("AghA+IAAh6IAMAAIAAAKQAFgHAGgCQAGgCAHAAQANAAAHAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgHAGQgCADgHACQgFACgGAAQgHAAgGgCQgFgCgGgHIAAAwgAgQgpQgEAIgBAPQABAQAEAHQAEAJANAAQAMAAAEgJQAFgIAAgPQAAgPgFgJQgEgIgMAAQgNAAgEAJg");
	this.shape_161.setTransform(299.3,117);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAJgIQAEAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgNgBQgNAAgGgFQgHgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_162.setTransform(289.9,115.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgHgFQgGgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGADADQAEADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_163.setTransform(276.9,115.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#6B6B70").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAGAAAFABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_164.setTransform(269.7,115.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAHAIAKAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgFgEQgGgDgHAAQgFAAgGADg");
	this.shape_165.setTransform(260.7,115.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#6B6B70").s().p("AgeA9IAAgLIAFAAQAGAAADgCQACgDACgFIAHgRIgfhTIANAAIAXBDIAXhDIAOAAIgmBpQgCAHgEADQgDAEgFABIgJABg");
	this.shape_166.setTransform(252.2,117);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_167.setTransform(243.4,115.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#6B6B70").s().p("AAGA+QgJAAgGgGQgFgHAAgKIAAhkIAMAAIAABjQAAAHACADQACADAHAAIAGAAIAAALg");
	this.shape_168.setTransform(237.1,113.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#6B6B70").s().p("AgpA+IAAh7IAtAAQARAAALAKQAKAKAAAQQAAARgKAJQgLAKgRAAIggAAIAAAzgAgcAAIAfAAQAMAAAHgGQAHgHAAgMQAAgLgHgHQgHgGgMAAIgfAAg");
	this.shape_169.setTransform(229.1,113.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#6B6B70").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_170.setTransform(216.4,118.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#6B6B70").s().p("AgVA4QgIgHgBgJQgDgJAAgNQAAgLADgJQACgJAEgEQAFgFAGgCQAGgCAGAAQAHAAAFACQAGADAFAGIAAgxIAMAAIAAB7IgMAAIAAgKQgFAGgGADQgFACgHAAQgOAAgGgGgAgQgEQgEAHAAAPQAAAQAEAIQAEAKAMgBQANABAEgKQAFgIAAgQQAAgPgFgHQgEgJgNAAQgMAAgEAJg");
	this.shape_171.setTransform(209.1,113.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#6B6B70").s().p("AgMApQgHgCgFgGQgGgFgBgIQgDgIAAgMQAAgKADgJQABgIAGgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgGAGgBAHQgBAGAAAIQAAAJABAHQABAGAGAFQAFAGAIAAQAJAAAGgGQAFgFACgGIABgQIgBgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_172.setTransform(200,115.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#6B6B70").s().p("AAVA+IAAg1QAAgKgFgGQgGgFgKgBQgJABgFAFQgGAHAAAJIAAA1IgNAAIAAh7IANAAIAAAwQAJgLAOAAQAOAAAJAJQAIAIAAAOIAAA3g");
	this.shape_173.setTransform(190.5,113.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_174.setTransform(182.5,113.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgFAEgDAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_175.setTransform(175.2,115.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#6B6B70").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_176.setTransform(162.9,115.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_177.setTransform(146,115.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#6B6B70").s().p("AgMApQgHgCgFgGQgGgFgBgIQgDgIAAgMQAAgKADgJQABgIAGgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgGAGgBAHQgBAGAAAIQAAAJABAHQABAGAGAFQAFAGAIAAQAJAAAGgGQAFgFACgGIABgQIgBgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_178.setTransform(136.5,115.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#6B6B70").s().p("AgFA+IAAhVIALAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_179.setTransform(129.7,113.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_180.setTransform(124.5,113.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_181.setTransform(116.8,115.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#6B6B70").s().p("AgeArIAAgLIAvg/IgsAAIAAgLIA6AAIAAALIgvA/IAvAAIAAALg");
	this.shape_182.setTransform(108.5,115.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#6B6B70").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_183.setTransform(102.4,113.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_184.setTransform(97.1,113.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAJgMAPAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgBAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_185.setTransform(89.8,115.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_186.setTransform(80.3,115.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#6B6B70").s().p("AgNApQgFgCgGgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAFAGQAGAFACAIQACAIAAALQAAALgCAIQgCAJgHAGQgEAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgEAGgCAHQgBAGgBAIQABAJABAHQACAGAEAFQAGAGAIAAQAKAAAEgGQAGgFACgGIAAgQIAAgPQgCgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_187.setTransform(70.8,115.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#6B6B70").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_188.setTransform(58.5,115.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAJgMAPAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIAKAAQAIAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgLAAQgQAAgKgLgAgLgdQgGAEgBAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_189.setTransform(330.1,90.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#6B6B70").s().p("AAGA+QgJAAgGgGQgFgHAAgKIAAhkIAMAAIAABjQAAAHACADQACADAHAAIAGAAIAAALg");
	this.shape_190.setTransform(323.4,88.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6B6B70").s().p("AgJA8QgGgCgGgHIAAAKIgMAAIAAh6IAMAAIAAAwQAGgHAGgCQAFgCAHAAQANAAAHAHQAHAHACAIQACAJAAAMQAAAMgCAJQgCAJgHAGQgCADgHACQgFACgGABQgHAAgFgDgAgQgEQgFAHAAAQQAAAPAFAIQAFAJAMAAQAMAAAFgJQADgIAAgPQAAgPgDgJQgFgIgMAAQgMAAgFAJg");
	this.shape_191.setTransform(315.8,88.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_192.setTransform(305.9,90.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_193.setTransform(296.8,90.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#6B6B70").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_194.setTransform(289.7,88.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_195.setTransform(282.6,90.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_196.setTransform(275.3,89.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_197.setTransform(268.1,90.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#6B6B70").s().p("AgZAjQgHgIgBgQIAAg1IANAAIAAAzQAAAMAFAFQAGAGAJAAQAKAAAGgGQAFgGABgLIAAgzIAMAAIAABUIgMAAIAAgJQgKAKgOAAQgOAAgJgIg");
	this.shape_198.setTransform(258.9,90.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_199.setTransform(249.7,90.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_200.setTransform(236.2,90.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_201.setTransform(224.5,89.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_202.setTransform(216.9,90.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgDgGgEgEQgGgDgHAAQgGAAgFADg");
	this.shape_203.setTransform(207.4,90.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_204.setTransform(198.4,90.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQARAAAJALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgGgEQgFgDgHAAQgFAAgGADg");
	this.shape_205.setTransform(189.5,90.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAFgDAIAAQAGAAAFABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_206.setTransform(182,90.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#6B6B70").s().p("AghA+IAAh6IAMAAIAAAKQAGgHAGgCQAFgCAHAAQANAAAHAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgHAGQgCADgHACQgFACgGAAQgHAAgFgCQgGgCgGgHIAAAwgAgQgpQgFAIAAAPQAAAQAFAHQAFAJAMAAQAMAAAFgJQADgIAAgPQAAgPgDgJQgFgIgMAAQgMAAgFAJg");
	this.shape_207.setTransform(173,92.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgFAEgDAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_208.setTransform(163.5,90.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#6B6B70").s().p("AgbArIAAhUIAMAAIAAAKQAEgFAGgDQAGgDAHAAQAHAAAFABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_209.setTransform(155.9,90.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAJgIQAEAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgOgBQgMAAgGgFQgHgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_210.setTransform(142.8,90.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_211.setTransform(133.6,90.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#6B6B70").s().p("AgMApQgGgCgGgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAGgGAGgCQAFgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgGAGgBAHQgCAGABAIQgBAJACAHQABAGAGAFQAFAGAIAAQAKAAAFgGQAFgFACgGIABgQIgBgPQgCgGgEgEQgGgHgKAAQgIAAgFAFg");
	this.shape_212.setTransform(124.1,90.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#6B6B70").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_213.setTransform(117.3,88.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_214.setTransform(112.1,89.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#6B6B70").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAHACAGAIIgIAIQgGgGgDgCQgFgCgGAAQgMAAgHAJQgFAJAAAOIABANQABAGAFAHQAFAHAMAAQAGAAAFgCQADgDAGgFIAIAIQgGAHgHADQgGADgJAAQgQAAgLgMg");
	this.shape_215.setTransform(105.2,90.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_216.setTransform(95.9,90.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#6B6B70").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_217.setTransform(87.2,90.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_218.setTransform(78.1,90.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_219.setTransform(68.3,90.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#6B6B70").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAGgDAHAAQAHAAAFABQAEACAFAFIgJAJIgHgFQgDgBgGAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_220.setTransform(61.1,90.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_221.setTransform(53.6,89.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgDgGgEgEQgGgDgHAAQgGAAgFADg");
	this.shape_222.setTransform(354.6,66.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#6B6B70").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_223.setTransform(342.4,66);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_224.setTransform(329.8,66.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#6B6B70").s().p("AgQA9QgHgDgHgGIAIgIIAJAGQAFACAHAAQALAAAFgIQAHgHgBgLIAAgOQgEAGgGADQgGADgHAAQgGAAgGgDQgFgCgFgEQgEgGgDgJQgCgIAAgLQAAgMACgJQACgJAFgFQAFgEAFgCQAGgCAGAAQAIAAAFACQAGACAEAHIAAgKIANAAIAABXQAAARgKAKQgKAKgPAAQgKAAgFgCgAgQgrQgFAKAAAOQAAAPAFAHQAFAJALAAQANAAAFgJQADgHAAgPQAAgPgDgJQgFgIgNAAQgLAAgFAIg");
	this.shape_225.setTransform(320.6,68);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#6B6B70").s().p("AgXAGIAAgLIAvAAIAAALg");
	this.shape_226.setTransform(312.4,65.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_227.setTransform(303.8,66);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#6B6B70").s().p("AgGA+IAAhUIAMAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_228.setTransform(296.7,64.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#6B6B70").s().p("AgGgTIAOAAIAAAaIgOANg");
	this.shape_229.setTransform(287.9,70.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#6B6B70").s().p("AAVA+IAAg1QAAgKgFgGQgGgFgKAAQgJAAgFAFQgGAHAAAJIAAA1IgNAAIAAh7IANAAIAAAwQAJgLAOABQAOgBAJAJQAIAIAAAOIAAA3g");
	this.shape_230.setTransform(280.7,64.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#6B6B70").s().p("AgVAgQgLgLAAgVQAAgUALgMQAKgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgGAJQgHAJAAAOIABANQACAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgKgMg");
	this.shape_231.setTransform(271.6,66.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgIAAgFAGQgGAHAAAKIAAAzg");
	this.shape_232.setTransform(264.3,66);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_233.setTransform(255,66.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_234.setTransform(246.1,66.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#6B6B70").s().p("AgSApQgJgDgHgHIAIgIQAFAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgOgBQgMAAgHgFQgGgGAAgLQAAgLAIgHQAJgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGADADQAEADAIAAIANABQAMACAGAEQAHAFAAAMQAAAMgJAHQgKAHgQAAQgKAAgIgDg");
	this.shape_235.setTransform(237.1,66.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgFAEgDAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgEgEQgGgDgHAAQgFAAgGADg");
	this.shape_236.setTransform(228.3,66.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#6B6B70").s().p("AgbArIAAhUIAMAAIAAAKQAEgFAGgDQAGgDAHAAQAHAAAFABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_237.setTransform(220.7,66);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#6B6B70").s().p("AgbArIAAhUIAMAAIAAAKQAEgFAGgDQAGgDAHAAQAHAAAFABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_238.setTransform(209,66);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#6B6B70").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAJgMAPAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgBAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_239.setTransform(200,66.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_240.setTransform(190.5,66);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_241.setTransform(182.6,64.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#6B6B70").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_242.setTransform(176.9,66);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#6B6B70").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_243.setTransform(167.6,66.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#6B6B70").s().p("AgcA0QgKgKgCgJQgDgLAAgWIABgcQACgMALgKQALgMASAAQASAAALAKQAMAKACARIgMAAQgDgLgIgIQgIgGgMAAQgLAAgIAHQgHAIgBAHQgCAIAAAUQAAAUACAIQABAJAHAHQAHAHAMAAQAPAAAIgJQAHgKABgOIAAgKIgfAAIAAgKIArAAIAAASQAAALgCAIQgCAHgGAHQgNAOgUAAQgSAAgKgLg");
	this.shape_244.setTransform(157.7,64.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#6B6B70").s().p("AgNApQgGgCgFgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAFgGAGgCQAGgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgFAGgBAHQgCAGAAAIQAAAJACAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_245.setTransform(143.1,66.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#6B6B70").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_246.setTransform(135.4,64.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#6B6B70").s().p("AgRA9QgGgDgHgGIAJgIIAJAGQAEACAHAAQALAAAGgIQAFgHAAgLIAAgOQgFAGgFADQgGADgGAAQgHAAgGgDQgEgCgGgEQgEgGgCgJQgDgIAAgLQAAgMADgJQABgJAFgFQAFgEAFgCQAGgCAHAAQAGAAAGACQAFACAFAHIAAgKIANAAIAABXQAAARgKAKQgJAKgQAAQgJAAgHgCgAgQgrQgFAKABAOQgBAPAFAHQAFAJALAAQANAAAEgJQAEgHAAgPQAAgPgEgJQgEgIgNAAQgLAAgFAIg");
	this.shape_247.setTransform(123.4,68);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#6B6B70").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_248.setTransform(114,66);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#6B6B70").s().p("AgGA+IAAhUIAMAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_249.setTransform(106.9,64.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#6B6B70").s().p("AgWA3QgGgGgDgJQgCgJAAgMQAAgNACgHQACgKAFgFQAFgEAFgCQAHgCAFAAQAIAAAFACQAGACAFAHIAAgwIAMAAIAAB7IgMAAIAAgLQgFAGgGADQgFACgIABQgNAAgHgIgAgQgEQgFAHAAAQQAAAPAFAJQAFAIAMABQAMgBAFgIQAEgKAAgOQAAgPgEgJQgFgIgMAAQgMAAgFAJg");
	this.shape_250.setTransform(99.7,64.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#6B6B70").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgGAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_251.setTransform(92.2,66);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#6B6B70").s().p("AgNApQgGgCgFgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAFgGAGgCQAGgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgFAGgBAHQgCAGAAAIQAAAJACAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_252.setTransform(83.2,66.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#6B6B70").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgHAJQgFAJgBAOIACANQABAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgLgMg");
	this.shape_253.setTransform(74.5,66.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#6B6B70").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgHAJQgFAJgBAOIACANQABAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgLgMg");
	this.shape_254.setTransform(65.9,66.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#6B6B70").s().p("AAlA+IgKgcIg1AAIgKAcIgOAAIAuh7IAKAAIAtB7gAgWAXIAuAAIgYhBg");
	this.shape_255.setTransform(56.2,64.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#929397").s().p("A8mxxMAr+AAAINPJlIgQX2Mg40ACHg");
	this.shape_256.setTransform(215.6,137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.8,269.9);


(lib.lockandkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.keylockai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.8,43.6,0.777,0.777,0,0,0,104.4,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lockandkey, new cjs.Rectangle(-1,0,163,87.3), null);


(lib.lightonai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0_1();
	this.instance.parent = this;
	this.instance.setTransform(163.7,389.7,1,1,0,0,0,46.7,25.4);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(497.4,396.9,1,1,0,0,0,32.7,26.4);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(164.3,190.2,1,1,0,0,0,41,36.5);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.Path_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(557.1,327.3,1,1,0,0,0,557.1,327.3);
	this.instance_3.alpha = 0.34;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424245").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(270.2,394.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_1.setTransform(263.2,391.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424245").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgHAJQgFAJgBAOIACANQABAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgLgMg");
	this.shape_2.setTransform(254.5,391.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_3.setTransform(245.2,391.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_4.setTransform(235.4,391.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424245").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_5.setTransform(223.5,391.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_6.setTransform(212.9,391.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424245").s().p("AgMApQgGgCgGgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAGgGAGgCQAFgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgFAGgCAHQgBAGgBAIQABAJABAHQACAGAFAFQAFAGAIAAQAKAAAEgGQAGgFACgGIAAgQIAAgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_7.setTransform(203.9,391.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424245").s().p("AgJA+IAAhKIgLAAIAAgKIALAAIAAgQQAAgKAFgHQAFgGALAAIAJAAIAAALIgHAAQgLAAAAAMIAAAQIASAAIAAAKIgSAAIAABKg");
	this.shape_8.setTransform(196.7,389.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424245").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgIAAgGAGQgGAHAAAKIAAAzg");
	this.shape_9.setTransform(190.9,391.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQARAAAJALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgGgEQgFgDgHAAQgFAAgGADg");
	this.shape_10.setTransform(181.9,391.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424245").s().p("AghA+IAAh6IANAAIAAAKQAEgHAGgCQAGgCAHAAQAOAAAGAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgGAGQgEADgGACQgFACgGAAQgHAAgGgCQgFgCgFgHIAAAwgAgQgpQgEAIAAAPQAAAQAEAHQAEAJAMAAQANAAAEgJQAFgIAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_11.setTransform(172.7,393.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgIAAgFAGQgGAHAAAKIAAAzg");
	this.shape_12.setTransform(490.5,366.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIgBAIIAtAAIAAgIIgDgGQgDgGgEgEQgGgDgHAAQgFAAgGADg");
	this.shape_13.setTransform(481.5,366.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424245").s().p("AgdA9IAAgLIADAAQAHAAACgCQAEgCACgGIAFgRIgehTIANAAIAXBDIAXhDIAOAAIgmBpQgDAHgDADQgEADgEACIgJABg");
	this.shape_14.setTransform(473,368.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_15.setTransform(464.2,366.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#424245").s().p("AAGA+QgJAAgGgGQgFgGAAgLIAAhkIAMAAIAABkQAAAGACADQACADAHAAIAGAAIAAALg");
	this.shape_16.setTransform(457.9,365);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424245").s().p("AghA+IAAh6IANAAIAAAKQAFgHAFgCQAGgCAHAAQAOAAAGAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgGAGQgEADgFACQgGACgGAAQgHAAgGgCQgFgCgFgHIAAAwgAgQgpQgEAIAAAPQAAAQAEAHQAEAJAMAAQANAAAEgJQAFgIAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_17.setTransform(450.3,368.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_18.setTransform(436.4,366.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424245").s().p("AgeArIAAgLIAvg/IgsAAIAAgLIA6AAIAAALIgvA/IAvAAIAAALg");
	this.shape_19.setTransform(427.7,366.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#424245").s().p("AgFA+IAAhUIALAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_20.setTransform(421.6,365);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_21.setTransform(416.3,365.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgDgGgEgEQgGgDgHAAQgGAAgFADg");
	this.shape_22.setTransform(409,366.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_23.setTransform(399.5,366.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#424245").s().p("AgMApQgHgCgFgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgFAGgCAHQgCAGABAIQgBAJACAHQACAGAFAFQAFAGAIAAQAJAAAGgGQAFgFACgGIABgQIgBgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_24.setTransform(390,366.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#424245").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_25.setTransform(377.7,366.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#424245").s().p("AgVA3QgIgGgBgJQgDgJAAgNQAAgMADgHQACgJAEgGQAFgEAGgCQAGgCAFAAQAIAAAFACQAGACAFAHIAAgxIAMAAIAAB8IgMAAIAAgLQgFAHgGACQgFACgIABQgNAAgGgIgAgQgEQgEAIAAAOQAAAQAEAJQAEAIAMABQANgBAEgIQAFgKAAgPQAAgOgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_26.setTransform(360.7,365);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_27.setTransform(351.3,366.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_28.setTransform(341.5,366.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAGAIAMAAQAHAAAFgCQAFgDAFgFIAIAIQgHAGgGAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgCgGgFgEQgGgDgHAAQgGAAgFADg");
	this.shape_29.setTransform(328.3,366.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_30.setTransform(320.7,365.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_31.setTransform(313,366.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#424245").s().p("AgFArIgfhVIANAAIAXBEIAXhEIAOAAIggBVg");
	this.shape_32.setTransform(304.9,366.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#424245").s().p("AgGA+IAAhUIAMAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_33.setTransform(298.8,365);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_34.setTransform(293.5,365.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#424245").s().p("AgNApQgGgCgFgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAFgGAGgCQAGgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgFAGgBAHQgCAGAAAIQAAAJACAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_35.setTransform(286.2,366.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#424245").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_36.setTransform(273.9,366.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#424245").s().p("AgMApQgGgCgGgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAGgGAGgCQAFgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgGAGgBAHQgCAGABAIQgBAJACAHQABAGAGAFQAFAGAIAAQAKAAAEgGQAGgFACgGIABgQIgBgPQgCgGgEgEQgGgHgKAAQgIAAgFAFg");
	this.shape_37.setTransform(257.3,366.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_38.setTransform(249.7,365.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#424245").s().p("AgdA9IAAgLIADAAQAHAAACgCQADgCADgGIAFgRIgehTIAOAAIAWBDIAXhDIAOAAIgmBpQgDAHgDADQgDADgFACIgJABg");
	this.shape_39.setTransform(238.7,368.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_40.setTransform(229.9,366.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#424245").s().p("AAWArIgWhCIgWBCIgLAAIgbhVIANAAIAUBEIAWhEIAKAAIAXBEIAThEIAOAAIgbBVg");
	this.shape_41.setTransform(219.4,366.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_42.setTransform(205.7,365.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_43.setTransform(198,366.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAHAIAKAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgDAEIgCAIIAAAIIAsAAIAAgIIgDgGQgCgGgFgEQgGgDgHAAQgFAAgGADg");
	this.shape_44.setTransform(189.2,366.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAGgDAHAAQAGAAAFABQAFACAEAFIgJAJIgGgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_45.setTransform(181.6,366.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#424245").s().p("AgRA9QgGgEgHgGIAJgIIAJAHQAEACAHAAQALAAAFgIQAHgGAAgNIAAgNQgFAHgGACQgGACgHABQgGgBgFgCQgGgCgEgEQgGgGgBgJQgDgIAAgLQAAgMADgJQACgIAEgGQAFgEAGgCQAFgCAGAAQAIAAAFACQAGACAFAHIAAgKIAMAAIAABXQAAAQgKAKQgJALgQAAQgJAAgHgCgAgQgrQgEAJgBAPQABAPAEAIQAEAIAMAAQANAAAEgIQAFgIAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAIg");
	this.shape_46.setTransform(172.3,368.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_47.setTransform(489.6,342.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAJgIQAEAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_48.setTransform(476.6,342.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#424245").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_49.setTransform(470.1,340.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#424245").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAHACAGAIIgIAIQgGgGgDgCQgFgCgGAAQgMAAgHAJQgFAJAAAOIABANQABAGAFAHQAFAHAMAAQAGAAAFgCQADgDAGgFIAIAIQgGAHgHADQgGADgJAAQgQAAgLgMg");
	this.shape_50.setTransform(459.4,342.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAGgDAHAAQAGAAAFABQAFACAEAFIgJAJIgGgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_51.setTransform(452.1,342.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_52.setTransform(442.8,342.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#424245").s().p("AgdA9IAAgLIADAAQAHAAACgCQAEgDACgFIAFgRIgehTIANAAIAXBDIAXhDIAOAAIgmBpQgDAHgDADQgEADgEACIgJABg");
	this.shape_53.setTransform(430.3,344.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#424245").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgGAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_54.setTransform(423.4,342.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#424245").s().p("AgNApQgGgCgFgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAFgGAGgCQAGgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgFAGgBAHQgCAGAAAIQAAAJACAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_55.setTransform(414.4,342.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_56.setTransform(406.8,341);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAJgIQAEAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHAOAAQATAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_57.setTransform(399.6,342.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAJgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_58.setTransform(386.4,342.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#424245").s().p("AAVA+IAAg1QAAgKgFgFQgGgHgKAAQgJAAgFAHQgGAFAAAKIAAA1IgNAAIAAh7IANAAIAAAwQAJgLAOAAQAOABAJAIQAIAJAAANIAAA3g");
	this.shape_59.setTransform(376.9,340.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_60.setTransform(369,341);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#424245").s().p("AgNApQgGgCgFgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAFgGAGgCQAGgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgFAGgBAHQgCAGAAAIQAAAJACAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_61.setTransform(357.3,342.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_62.setTransform(349.6,341);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgHgFQgGgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGADADQAEADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_63.setTransform(338.1,342.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_64.setTransform(329,342.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#424245").s().p("AgNApQgGgCgFgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAFgGAGgCQAGgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgFAGgBAHQgCAGAAAIQAAAJACAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_65.setTransform(319.5,342.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#424245").s().p("AgFA+IAAhVIALAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_66.setTransform(312.7,340.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_67.setTransform(307.4,341);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#424245").s().p("AgYAjQgJgIABgQIAAg1IAMAAIAAAzQAAAMAGAFQAFAGAJAAQAKAAAFgGQAHgGAAgLIAAgzIALAAIAABUIgLAAIAAgJQgKAKgOAAQgOAAgIgIg");
	this.shape_68.setTransform(299.7,342.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#424245").s().p("AgJA8QgHgCgEgHIAAAKIgNAAIAAh7IANAAIAAAxQAEgGAHgCQAFgDAHAAQAOAAAGAGQAHAIACAIQACAJAAALQAAANgCAJQgCAJgGAGQgEADgFADQgGABgGAAQgHABgFgDgAgQgEQgFAIABAOQgBAQAFAIQAEAKAMAAQANAAAEgKQAEgJAAgPQAAgPgEgHQgEgJgNAAQgMAAgEAJg");
	this.shape_69.setTransform(290.3,340.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#424245").s().p("AgFA+IAAhVIALAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_70.setTransform(283.2,340.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAGgDAHAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_71.setTransform(278,342.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_72.setTransform(270.6,341);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_73.setTransform(262.9,342.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#424245").s().p("AgMApQgHgCgFgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgOgbQgFAGgBAHQgBAGAAAIQAAAJABAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIACgQIgCgPQgBgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_74.setTransform(253.4,342.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#424245").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAHACAGAIIgIAIQgGgGgDgCQgFgCgGAAQgMAAgHAJQgFAJAAAOIABANQABAGAFAHQAFAHAMAAQAGAAAFgCQADgDAGgFIAIAIQgGAHgHADQgGADgJAAQgQAAgLgMg");
	this.shape_75.setTransform(244.7,342.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#424245").s().p("AgSApQgJgDgHgHIAJgIQAEAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgOgBQgMAAgGgFQgHgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGADADQAEADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgJAHQgKAHgQAAQgKAAgIgDg");
	this.shape_76.setTransform(231.5,342.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_77.setTransform(222.4,342.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAJgIQAEAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgNgBQgNAAgGgFQgHgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_78.setTransform(209.4,342.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#424245").s().p("AgWA3QgHgGgCgJQgCgJAAgNQAAgLACgJQACgJAFgFQAFgEAFgCQAHgCAGAAQAGAAAGACQAGACAFAHIAAgxIAMAAIAAB7IgMAAIAAgKQgFAHgGACQgGADgGgBQgOABgHgIgAgQgEQgFAIAAAOQAAAQAFAIQAFAKAMAAQAMAAAFgKQAEgJAAgPQAAgPgEgHQgFgJgMAAQgMAAgFAJg");
	this.shape_79.setTransform(200.1,340.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#424245").s().p("AgNApQgFgCgGgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAGAGQAFAFACAIQACAIAAALQAAALgCAIQgCAJgHAGQgEAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgEAGgCAHQgBAGgBAIQABAJABAHQACAGAEAFQAGAGAIAAQAKAAAEgGQAGgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_80.setTransform(191,342.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#424245").s().p("AgNApQgFgCgGgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgGgDgAgNgbQgFAGgCAHQgBAGAAAIQAAAJABAHQACAGAFAFQAFAGAIAAQAKAAAEgGQAGgFACgGIABgQIgBgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_81.setTransform(181.8,342.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#424245").s().p("AgRA8QgGgCgHgHIAJgIIAJAHQAEACAHAAQALAAAFgIQAHgGAAgNIAAgNQgFAHgGACQgGADgHgBQgGABgFgDQgGgCgEgFQgGgFgBgIQgDgIAAgMQAAgMADgJQACgIAEgGQAFgEAGgCQAFgCAGAAQAIAAAFACQAGACAFAHIAAgKIAMAAIAABXQAAARgKAJQgJALgQAAQgJAAgHgDgAgQgqQgEAIgBAPQABAOAEAJQAEAIAMAAQANAAAEgIQAFgIAAgPQAAgPgFgIQgEgJgNAAQgMAAgEAJg");
	this.shape_82.setTransform(172.3,344.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#424245").s().p("AAGA+QgJAAgGgGQgFgGAAgLIAAhkIAMAAIAABjQAAAHACADQACADAHAAIAGAAIAAALg");
	this.shape_83.setTransform(486.1,315.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_84.setTransform(478.1,317.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#424245").s().p("AgYAjQgJgIABgQIAAg1IAMAAIAAAzQAAAMAGAFQAFAGAJAAQAKAAAFgGQAHgGAAgLIAAgzIALAAIAABUIgLAAIAAgJQgKAKgOAAQgOAAgIgIg");
	this.shape_85.setTransform(468.9,317.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#424245").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_86.setTransform(461,316.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAGgDAHAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_87.setTransform(455.3,317.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#424245").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_88.setTransform(448.7,315.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#424245").s().p("AgFArIgfhVIAOAAIAWBEIAXhEIAOAAIgfBVg");
	this.shape_89.setTransform(442.6,317.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIgBAIIAtAAIAAgIIgDgGQgDgGgEgEQgGgDgHAAQgFAAgGADg");
	this.shape_90.setTransform(429.8,317.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#424245").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_91.setTransform(417.5,317.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_92.setTransform(405,317.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#424245").s().p("AgQA8QgHgCgHgHIAIgHIAJAGQAFACAHAAQALAAAFgHQAHgIgBgLIAAgOQgEAGgGADQgGACgHAAQgGAAgGgCQgFgCgFgFQgEgFgDgIQgCgJAAgLQAAgMACgJQACgJAFgEQAFgFAFgCQAGgCAGAAQAIAAAFACQAGADAEAGIAAgKIANAAIAABXQAAAQgKALQgKAKgPAAQgKAAgFgDgAgQgqQgFAJAAAOQAAAOAFAIQAFAJALAAQANAAAFgJQADgHAAgPQAAgPgDgIQgFgJgNAAQgLAAgFAJg");
	this.shape_93.setTransform(395.8,319.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#424245").s().p("AgXAGIAAgLIAvAAIAAALg");
	this.shape_94.setTransform(387.6,317.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_95.setTransform(379,317.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#424245").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_96.setTransform(371.9,315.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#424245").s().p("AgRA8QgGgCgHgHIAJgHIAJAGQAEACAHAAQALAAAFgHQAHgIAAgLIAAgOQgFAGgGADQgGACgHAAQgGAAgFgCQgGgCgEgFQgGgFgBgIQgDgJAAgLQAAgMADgJQACgJAEgEQAFgFAGgCQAFgCAGAAQAIAAAFACQAGADAFAGIAAgKIAMAAIAABXQAAAQgKALQgKAKgPAAQgJAAgHgDgAgQgqQgEAJgBAOQABAOAEAIQAEAJAMAAQANAAAEgJQAFgHAAgPQAAgPgFgIQgEgJgNAAQgMAAgEAJg");
	this.shape_97.setTransform(360.4,319.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_98.setTransform(351,317.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#424245").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_99.setTransform(343.9,315.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#424245").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAGgDAHAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgGAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_100.setTransform(338.7,317.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_101.setTransform(329.7,317.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#424245").s().p("AgJA+IAAhLIgLAAIAAgJIALAAIAAgQQAAgKAFgGQAFgHAKAAIAKAAIAAAKIgHAAQgMAAAAANIAAAQIATAAIAAAJIgTAAIAABLg");
	this.shape_102.setTransform(322.5,315.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#424245").s().p("AgJA+IAAhLIgLAAIAAgJIALAAIAAgQQAAgKAGgGQAEgHALAAIAJAAIAAAKIgHAAQgMAAABANIAAAQIASAAIAAAJIgSAAIAABLg");
	this.shape_103.setTransform(317.1,315.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#424245").s().p("AgcA1QgLgLgCgJQgCgKAAgXIABgcQACgLALgMQALgLASAAQATAAAKAKQAKALACAKQADAKAAAVIgBAdQgCALgKAKQgMANgTAAQgSAAgKgKgAgTgrQgHAIgBAIQgCAHAAAUQAAAUACAIQABAJAHAHQAHAHAMAAQANAAAHgHQAHgHABgJQACgIAAgUQAAgUgCgHQgBgJgGgFQgIgJgNAAQgMAAgHAHg");
	this.shape_104.setTransform(308.6,315.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#424245").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_105.setTransform(296.3,321.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgHgFQgGgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGADADQAEADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_106.setTransform(289.5,317.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAJgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_107.setTransform(280.7,317.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#424245").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgHAJQgFAJgBAOIABANQACAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgLgMg");
	this.shape_108.setTransform(271.9,317.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_109.setTransform(262.6,317.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAJgMAPAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgBAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_110.setTransform(253.1,317.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#424245").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_111.setTransform(246.3,315.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#424245").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgGAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_112.setTransform(241.2,317.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_113.setTransform(232.2,317.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#424245").s().p("AghA+IAAh6IANAAIAAAKQAFgHAFgCQAGgCAHAAQAOAAAGAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgGAGQgEADgFACQgGACgGAAQgHAAgGgCQgFgCgFgHIAAAwgAgQgpQgEAIAAAPQAAAQAEAHQAEAJAMAAQANAAAEgJQAFgIAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_114.setTransform(223,319.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#424245").s().p("AAUArIgUghIgTAhIgQAAIAdgrIgcgqIAPAAIATAgIATggIAPAAIgbAqIAdArg");
	this.shape_115.setTransform(213.9,317.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_116.setTransform(205.2,317.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#424245").s().p("AgWA4QgGgHgDgJQgCgJAAgMQAAgMACgJQADgIAEgFQAFgFAFgCQAGgCAHAAQAGAAAGACQAGADAFAGIAAgwIAMAAIAAB6IgMAAIAAgKQgFAGgGADQgGACgGAAQgOAAgHgGgAgQgEQgFAHABAQQgBAPAFAIQAEAKANgBQAMABAFgKQAEgIAAgPQAAgQgEgHQgFgJgMAAQgNAAgEAJg");
	this.shape_117.setTransform(191.2,315.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_118.setTransform(181.8,317.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_119.setTransform(172,317.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#424245").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_120.setTransform(475.2,291.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_121.setTransform(467.6,293.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_122.setTransform(458.1,293.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#424245").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_123.setTransform(450.4,291.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_124.setTransform(442.8,293.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#424245").s().p("AgMApQgGgCgGgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAGgGAGgCQAFgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgGAGgBAHQgCAGABAIQgBAJACAHQABAGAGAFQAFAGAIAAQAKAAAEgGQAGgFACgGIABgQIgBgPQgCgGgEgEQgGgHgKAAQgIAAgFAFg");
	this.shape_125.setTransform(433.3,293.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#424245").s().p("AgVAgQgLgLAAgVQAAgUALgMQAKgLAQAAQAJAAAGADQAGACAHAIIgIAIQgFgGgEgCQgFgCgGAAQgMAAgGAJQgHAJABAOIAAANQACAGAFAHQAFAHAMAAQAGAAAFgCQAEgDAFgFIAIAIQgHAHgGADQgGADgJAAQgQAAgKgMg");
	this.shape_126.setTransform(424.5,293.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#424245").s().p("AgeA9IAAgLIAFAAQAGAAADgCQADgDABgGIAHgQIgfhTIANAAIAXBEIAXhEIAOAAIgmBpQgDAHgDADQgDAEgFABIgJABg");
	this.shape_127.setTransform(411.9,295.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#424245").s().p("AgJA8QgGgDgGgGIAAALIgMAAIAAh7IAMAAIAAAwQAGgHAGgCQAFgCAHAAQANAAAHAHQAHAHACAIQACAJAAAMQAAAMgCAJQgCAJgHAGQgCAEgHABQgFADgGAAQgHAAgFgDgAgQgEQgFAHAAAQQAAAPAFAIQAFAJAMAAQAMAAAFgJQADgIAAgPQAAgPgDgJQgFgIgMAAQgMAAgFAJg");
	this.shape_128.setTransform(403.4,291.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#424245").s().p("AgWA4QgHgHgCgJQgCgJAAgMQAAgMACgJQACgIAFgFQAFgFAFgCQAHgCAGAAQAGAAAGACQAGACAFAHIAAgwIAMAAIAAB7IgMAAIAAgLQgFAGgGADQgGADgGAAQgOgBgHgGgAgQgEQgFAHAAAQQAAAPAFAIQAFAJAMAAQAMAAAFgJQAEgIAAgPQAAgPgEgJQgFgIgMAAQgMAAgFAJg");
	this.shape_129.setTransform(389.1,291.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAJgMAPAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgBAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_130.setTransform(380,293.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#424245").s().p("AgVA4QgIgHgBgJQgDgJAAgMQAAgMADgJQABgIAFgFQAFgFAFgCQAGgCAHAAQAGAAAGACQAGACAFAHIAAgwIAMAAIAAB7IgMAAIAAgLQgFAGgGADQgGADgGAAQgOgBgGgGgAgQgEQgFAHABAQQgBAPAFAIQAEAJAMAAQANAAAEgJQAFgIAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_131.setTransform(370.4,291.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAGgDAHAAQAGAAAFABQAFACAEAFIgJAJIgGgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_132.setTransform(363,293.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_133.setTransform(353.7,293.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#424245").s().p("AAXArIgXhCIgVBCIgMAAIgbhVIANAAIAUBEIAXhEIAKAAIAWBEIAUhEIANAAIgbBVg");
	this.shape_134.setTransform(343.2,293.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAHAIAKAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgDAEIgCAIIAAAIIAsAAIAAgIIgDgGQgCgGgFgEQgGgDgHAAQgFAAgGADg");
	this.shape_135.setTransform(332.3,293.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAGgDAHAAQAGAAAFABQAFACAEAFIgJAJIgGgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_136.setTransform(324.7,293.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#424245").s().p("AAGA+QgJAAgGgGQgFgHAAgKIAAhkIAMAAIAABjQAAAHACADQACADAHAAIAGAAIAAALg");
	this.shape_137.setTransform(313.9,291.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAJgMAPAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIAKAAQAIAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgLAAQgQAAgKgLgAgLgdQgGAEgBAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_138.setTransform(306.2,293.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIgBAIIAtAAIAAgIIgDgGQgDgGgEgEQgGgDgHAAQgFAAgGADg");
	this.shape_139.setTransform(297,293.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#424245").s().p("AgJA+IAAhKIgLAAIAAgKIALAAIAAgQQAAgKAGgHQAEgGALAAIAJAAIAAAKIgHAAQgLAAAAANIAAAQIASAAIAAAKIgSAAIAABKg");
	this.shape_140.setTransform(289.8,291.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#424245").s().p("AgdA9IAAgLIADAAQAHAAACgCQADgDADgGIAFgQIgehTIAOAAIAWBEIAXhEIAOAAIgmBpQgDAHgDADQgEAEgEABIgJABg");
	this.shape_141.setTransform(278.7,295.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAJgMAPAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIAKAAQAIAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgLAAQgQAAgKgLgAgLgdQgGAEgBAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_142.setTransform(270.2,293.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#424245").s().p("AAVA+IAAg1QAAgKgFgGQgGgFgKAAQgJAAgFAFQgGAHAAAJIAAA1IgNAAIAAh7IANAAIAAAwQAJgLAOAAQAOAAAJAJQAIAJAAANIAAA3g");
	this.shape_143.setTransform(260.7,291.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#424245").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAyQAAANAMAAIAHAAIAAALg");
	this.shape_144.setTransform(252.8,291.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#424245").s().p("AgSApQgJgDgHgHIAIgIQAFAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgNgBQgMAAgHgFQgGgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGADADQAEADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgJAHQgKAHgQAAQgKAAgIgDg");
	this.shape_145.setTransform(241.3,293.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_146.setTransform(232.1,293.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#424245").s().p("AgQA9QgHgEgHgFIAIgIIAJAGQAFACAHAAQALAAAGgHQAFgIAAgLIAAgOQgEAGgGADQgGADgGAAQgHAAgGgDQgFgCgFgEQgFgGgCgJQgCgIAAgLQAAgMACgJQACgJAFgEQAFgFAFgCQAGgCAHAAQAGAAAGACQAGACAEAHIAAgKIANAAIAABXQAAARgKAKQgKAKgPAAQgKAAgFgCgAgQgrQgFAKAAAOQAAAPAFAHQAFAJALAAQANAAAFgJQADgHAAgPQAAgPgDgJQgFgIgNAAQgLAAgFAIg");
	this.shape_147.setTransform(218.6,295.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_148.setTransform(209.2,293.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#424245").s().p("AgNApQgFgCgGgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAGAGQAFAFACAIQACAIAAALQAAALgCAIQgCAJgGAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgEAGgCAHQgCAGAAAIQAAAJACAHQACAGAEAFQAGAGAIAAQAKAAAEgGQAGgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_149.setTransform(199.7,293.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#424245").s().p("AAGA+QgJAAgGgGQgFgHAAgKIAAhkIAMAAIAABjQAAAHACADQACADAHAAIAGAAIAAALg");
	this.shape_150.setTransform(193,291.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_151.setTransform(181.2,293.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_152.setTransform(172,293.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_153.setTransform(490,268.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#424245").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgIAAgGAGQgGAHAAAKIAAAzg");
	this.shape_154.setTransform(482.5,268.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#424245").s().p("AgMApQgHgCgFgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgOgbQgFAGgBAHQgBAGAAAIQAAAJABAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIACgQIgCgPQgBgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_155.setTransform(473.5,268.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#424245").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_156.setTransform(461.2,268.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#424245").s().p("AgVA3QgIgGgBgJQgDgJAAgNQAAgMADgHQABgKAFgFQAFgEAFgCQAGgCAHAAQAGAAAGACQAGACAFAHIAAgxIAMAAIAAB8IgMAAIAAgLQgFAHgGACQgGACgGABQgOAAgGgIgAgQgEQgFAIABAOQgBAQAFAJQAEAIAMABQANgBAEgIQAFgKAAgPQAAgOgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_157.setTransform(444.2,266.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_158.setTransform(434.8,268.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQARAAAJALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgGgEQgFgDgHAAQgFAAgGADg");
	this.shape_159.setTransform(425.3,268.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#424245").s().p("AghA+IAAh6IANAAIAAAKQAEgHAGgCQAGgCAHAAQAOAAAGAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgGAGQgEADgFACQgGACgGAAQgHAAgGgCQgFgCgFgHIAAAwgAgQgpQgEAIAAAPQAAAQAEAHQAEAJAMAAQANAAAEgJQAFgIAAgPQAAgPgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_160.setTransform(416.2,270.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAJgIQAEAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_161.setTransform(406.8,268.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#424245").s().p("AgSApQgJgDgHgHIAIgIQAFAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgNgBQgMAAgHgFQgGgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgJAAgEADQgFAEAAAHQAAAGADADQAEADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgJAHQgKAHgQAAQgKAAgIgDg");
	this.shape_162.setTransform(393.8,268.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#424245").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgIAAgGAGQgGAHAAAKIAAAzg");
	this.shape_163.setTransform(386.6,268.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAJgMAQAAQARAAAJALQAJALAAAUIAAAEIg4AAQgBAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIAAAIIAsAAIAAgIIgDgGQgCgGgGgEQgFgDgHAAQgFAAgGADg");
	this.shape_164.setTransform(377.6,268.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#424245").s().p("AgeA9IAAgLIAFAAQAGAAADgCQACgCACgHIAHgQIgfhTIANAAIAXBEIAXhEIAOAAIgmBpQgDAHgDADQgDADgFACIgJABg");
	this.shape_165.setTransform(369.1,270.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_166.setTransform(360.3,268.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#424245").s().p("AAGA+QgJAAgGgGQgFgGAAgLIAAhkIAMAAIAABkQAAAGACADQACADAHAAIAGAAIAAALg");
	this.shape_167.setTransform(354,266.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#424245").s().p("AgpA+IAAh7IAtAAQARAAALAKQAKAKAAARQAAAQgKAJQgLAKgRAAIggAAIAAAzgAgcAAIAfAAQAMAAAHgGQAHgHAAgLQAAgNgHgGQgHgGgMAAIgfAAg");
	this.shape_168.setTransform(346,266.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#424245").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_169.setTransform(333.3,272.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#424245").s().p("AgVA3QgIgGgBgJQgDgJAAgNQAAgMADgHQACgKAEgFQAFgEAGgCQAFgCAHAAQAGAAAGACQAGACAFAHIAAgxIAMAAIAAB8IgMAAIAAgLQgFAHgGACQgGACgGABQgOAAgGgIgAgQgEQgFAIABAOQgBAQAFAJQAEAIAMABQANgBAEgIQAFgKAAgPQAAgOgFgJQgEgIgNAAQgMAAgEAJg");
	this.shape_170.setTransform(326,266.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#424245").s().p("AgMApQgHgCgFgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgOgbQgFAGgBAHQgBAGAAAIQAAAJABAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIACgQIgCgPQgBgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_171.setTransform(316.9,268.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#424245").s().p("AAVA+IAAg1QAAgKgFgFQgGgHgKABQgJgBgFAHQgGAFAAAKIAAA1IgNAAIAAh7IANAAIAAAwQAJgKAOAAQAOgBAJAJQAIAJAAANIAAA3g");
	this.shape_172.setTransform(307.4,266.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_173.setTransform(299.4,267.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgEgEQgGgDgHAAQgFAAgGADg");
	this.shape_174.setTransform(292.1,268.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#424245").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_175.setTransform(279.8,268.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_176.setTransform(262.9,268.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#424245").s().p("AgMApQgHgCgFgGQgFgFgDgIQgCgIAAgMQAAgKACgJQADgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAGAGQAEAFADAIQACAIAAALQAAALgCAIQgDAJgFAGQgFAFgGACQgGADgIAAQgHAAgFgDgAgOgbQgFAGgBAHQgBAGAAAIQAAAJABAHQABAGAFAFQAGAGAIAAQAJAAAGgGQAFgFABgGIACgQIgCgPQgBgGgEgEQgHgHgJAAQgIAAgGAFg");
	this.shape_177.setTransform(253.4,268.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#424245").s().p("AgFA+IAAhUIALAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_178.setTransform(246.6,266.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_179.setTransform(241.4,267.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_180.setTransform(233.7,268.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#424245").s().p("AgeArIAAgLIAvg/IgsAAIAAgLIA6AAIAAALIgvA/IAvAAIAAALg");
	this.shape_181.setTransform(225.4,268.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#424245").s().p("AgFA+IAAhUIALAAIAABUgAgGgvIAAgOIANAAIAAAOg");
	this.shape_182.setTransform(219.3,266.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAgzIgLAAIAAgKIALAAIAAgbIALAAIAAAbIATAAIAAAKIgTAAIAAAzQAAAMAMAAIAHAAIAAALg");
	this.shape_183.setTransform(214,267.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgFAEgDAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_184.setTransform(206.7,268.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_185.setTransform(197.2,268.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#424245").s().p("AgMApQgGgCgGgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAGgGAGgCQAFgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgFAGgCAHQgBAGgBAIQABAJABAHQACAGAFAFQAFAGAIAAQAKAAAEgGQAGgFACgGIAAgQIAAgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_186.setTransform(187.7,268.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#424245").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_187.setTransform(175.4,268.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgFAEgDAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_188.setTransform(447,244.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#424245").s().p("AAGA+QgJAAgGgGQgFgGAAgLIAAhkIAMAAIAABkQAAAGACADQACADAHAAIAGAAIAAALg");
	this.shape_189.setTransform(440.3,242.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#424245").s().p("AgJA8QgGgCgGgHIAAAKIgMAAIAAh7IAMAAIAAAxQAGgGAGgCQAFgDAHAAQANAAAHAGQAHAIACAJQACAIAAALQAAAMgCAKQgCAJgHAGQgCAEgHACQgFABgGAAQgHABgFgDgAgQgEQgFAIAAAOQAAAQAFAJQAFAJAMAAQAMAAAFgJQADgKAAgPQAAgPgDgHQgFgJgMAAQgMAAgFAJg");
	this.shape_190.setTransform(432.7,242.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_191.setTransform(422.8,244.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_192.setTransform(413.7,244.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#424245").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_193.setTransform(406.6,242.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_194.setTransform(399.5,244.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_195.setTransform(392.2,242.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_196.setTransform(385,244.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#424245").s().p("AgZAjQgHgIgBgQIAAg1IANAAIAAAzQAAAMAFAFQAGAGAJAAQAKAAAGgGQAFgGAAgLIAAgzIANAAIAABUIgNAAIAAgJQgJAKgOAAQgOAAgJgIg");
	this.shape_197.setTransform(375.8,244.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_198.setTransform(366.6,244.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_199.setTransform(353.1,244.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_200.setTransform(341.4,242.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_201.setTransform(333.8,244.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAGAIAMAAQAHAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgCgGgFgEQgGgDgHAAQgGAAgFADg");
	this.shape_202.setTransform(324.3,244.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_203.setTransform(315.3,244.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_204.setTransform(306.4,244.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#424245").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAFgDAIAAQAHAAAEABQAFACAEAFIgJAJIgGgFQgDgBgFAAQgIAAgGAGQgGAHAAAKIAAAzg");
	this.shape_205.setTransform(298.9,244.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#424245").s().p("AghA+IAAh6IAMAAIAAAKQAGgHAFgCQAGgCAHAAQANAAAHAGQAHAHACAJQACAJAAAMQAAAMgCAJQgCAJgHAGQgCADgHACQgFACgGAAQgHAAgGgCQgFgCgGgHIAAAwgAgQgpQgEAIgBAPQABAQAEAHQAFAJAMAAQAMAAAFgJQADgIAAgPQAAgPgDgJQgFgIgMAAQgMAAgFAJg");
	this.shape_206.setTransform(289.9,246);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgDgGgEgEQgGgDgHAAQgGAAgFADg");
	this.shape_207.setTransform(280.4,244.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgIAAgFAGQgGAHAAAKIAAAzg");
	this.shape_208.setTransform(272.8,244.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAJgIQAEAFAHADQAGACAIAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_209.setTransform(259.7,244.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_210.setTransform(250.5,244.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#424245").s().p("AgMApQgHgCgFgGQgFgFgCgIQgDgIAAgMQAAgKADgJQACgIAFgFQAFgGAHgCQAFgDAHAAQAIAAAGADQAGACAFAGQAFAFADAIQACAIAAALQAAALgCAIQgDAJgGAGQgEAFgGACQgGADgIAAQgHAAgFgDgAgNgbQgFAGgCAHQgCAGABAIQgBAJACAHQACAGAFAFQAFAGAIAAQAJAAAGgGQAFgFACgGIABgQIgBgPQgCgGgEgEQgHgHgJAAQgIAAgFAFg");
	this.shape_211.setTransform(241,244.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#424245").s().p("AgFA+IAAhVIALAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_212.setTransform(234.2,242.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_213.setTransform(229,242.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#424245").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgHAJQgFAJgBAOIACANQABAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgLgMg");
	this.shape_214.setTransform(222.1,244.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_215.setTransform(212.8,244.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#424245").s().p("AgTApQgIgDgHgHIAIgIQAFAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgPgCIgMgBQgNAAgGgFQgHgGAAgLQAAgLAJgHQAIgHANAAQAUAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGAEADQADADAIAAIAMABQANACAGAEQAHAFAAAMQAAAMgKAHQgJAHgQAAQgKAAgJgDg");
	this.shape_216.setTransform(204.1,244.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_217.setTransform(195,244.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_218.setTransform(185.2,244.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#424245").s().p("AgbArIAAhUIAMAAIAAAKQAEgFAGgDQAGgDAHAAQAHAAAFABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_219.setTransform(178,244.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#424245").s().p("AAMA4QgLAAgEgGQgGgHAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAA0QAAAMAMAAIAHAAIAAALg");
	this.shape_220.setTransform(170.5,242.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg4AAQAAAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIAAAIIAsAAIAAgIIgDgGQgDgGgEgEQgGgDgHAAQgGAAgFADg");
	this.shape_221.setTransform(471.5,219.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#424245").s().p("AAxArIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAFQgGAGAAAKIAAA1IgLAAIAAg0QAAgLgGgFQgFgGgKAAQgKAAgGAGQgGAGAAAKIAAA0IgMAAIAAhUIAMAAIAAAJQAKgKAPAAQASAAAHAOQAKgOASAAQAHAAAFACQAGACAHAGQAGAGAAAPIAAA2g");
	this.shape_222.setTransform(459.3,219.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_223.setTransform(446.7,219.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#424245").s().p("AgQA8QgHgCgHgHIAIgIIAJAHQAFACAHAAQALAAAFgHQAHgIgBgMIAAgNQgEAHgGACQgGADgHgBQgGABgGgDQgEgCgFgFQgFgFgDgIQgCgIAAgMQAAgMACgJQACgJAFgEQAFgFAFgCQAGgCAGAAQAIAAAFACQAGADAEAGIAAgKIANAAIAABXQAAARgKAJQgKALgPAAQgKAAgFgDgAgQgqQgEAIgBAPQABAOAEAIQAFAJALAAQANAAAFgJQADgHAAgPQAAgPgDgIQgFgJgNAAQgLAAgFAJg");
	this.shape_224.setTransform(437.5,221.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#424245").s().p("AgXAGIAAgLIAvAAIAAALg");
	this.shape_225.setTransform(429.3,219.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_226.setTransform(420.7,219.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#424245").s().p("AgGA+IAAhVIAMAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_227.setTransform(413.6,217.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#424245").s().p("AgGgTIAOAAIAAAaIgOANg");
	this.shape_228.setTransform(404.8,224.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#424245").s().p("AAVA+IAAg1QAAgKgFgGQgGgFgKgBQgJABgFAFQgGAHAAAJIAAA1IgNAAIAAh7IANAAIAAAwQAJgLAOAAQAOAAAJAJQAIAIAAAOIAAA3g");
	this.shape_229.setTransform(397.6,217.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#424245").s().p("AgVAgQgLgLAAgVQAAgUALgMQAKgLAQAAQAJAAAGADQAGACAHAIIgIAIQgFgGgEgCQgFgCgGAAQgMAAgGAJQgHAJABAOIAAANQACAGAFAHQAFAHAMAAQAGAAAFgCQAEgDAFgFIAIAIQgHAHgGADQgGADgJAAQgQAAgKgMg");
	this.shape_230.setTransform(388.5,219.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_231.setTransform(381.2,219.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_232.setTransform(371.9,219.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAJgLQAKgMAPAAQARAAAJALQAJALAAAUIAAAEIg5AAQAAAOAHAIQAGAIALAAQAIAAAFgCQAFgDAFgFIAJAIQgIAGgGAEQgHADgLAAQgQAAgKgLgAgLgdQgFAEgCAEIgDAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgGAAgFADg");
	this.shape_233.setTransform(363,219.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#424245").s().p("AgSApQgJgDgHgHIAJgIQAEAFAHADQAHACAHAAQALAAAGgEQAGgDAAgIQAAgLgOgCIgOgBQgMAAgHgFQgGgGAAgLQAAgLAIgHQAJgHAOAAQATAAALAJIgIAJQgJgHgOAAQgIAAgFADQgFAEAAAHQAAAGADADQAEADAIAAIANABQAMACAHAEQAGAFAAAMQAAAMgJAHQgKAHgQAAQgKAAgIgDg");
	this.shape_234.setTransform(354,219.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgGAEgCAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgEgEQgGgDgHAAQgFAAgGADg");
	this.shape_235.setTransform(345.2,219.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgIAAgFAGQgGAHAAAKIAAAzg");
	this.shape_236.setTransform(337.6,219.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQAEgFAGgDQAFgDAIAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgFAAQgIAAgFAGQgGAHAAAKIAAAzg");
	this.shape_237.setTransform(325.9,219.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#424245").s().p("AgYAhQgKgLAAgWQAAgUAKgLQAIgMAQAAQAQAAAKALQAJALAAAUIAAAEIg5AAQABAOAGAIQAHAIALAAQAHAAAFgCQAFgDAFgFIAIAIQgGAGgHAEQgHADgKAAQgRAAgKgLgAgLgdQgFAEgDAEIgCAIIgBAIIAsAAIAAgIIgCgGQgDgGgFgEQgFgDgHAAQgFAAgGADg");
	this.shape_238.setTransform(316.9,219.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_239.setTransform(307.4,219.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#424245").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_240.setTransform(299.5,218.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#424245").s().p("AgcArIAAhUIANAAIAAAKQADgFAHgDQAGgDAHAAQAGAAAGABQAEACAFAFIgJAJIgHgFQgEgBgEAAQgJAAgFAGQgGAHAAAKIAAAzg");
	this.shape_241.setTransform(293.8,219.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#424245").s().p("AgRAqQgFgCgGgFQgFgGAAgKQAAgMAIgGQAHgGAPAAIAYAAIAAgIQAAgKgFgFQgFgEgLAAQgIAAgEACQgFACgEAGIgJgIQAGgHAHgDQAHgDAKAAQAiAAAAAdIAAA5IgNAAIAAgIQgFAFgFACQgGACgHAAQgJAAgGgCgAgVASQAAAPAUAAIAKgBQAEgBAEgEQAEgEAAgKIAAgKIgXAAQgTAAAAAPg");
	this.shape_242.setTransform(284.5,219.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#424245").s().p("AgcA1QgKgLgDgKQgCgJAAgXIABgcQACgLALgMQALgLASAAQASAAALAKQAMAKADARIgOAAQgCgLgIgHQgIgHgMAAQgLAAgIAIQgHAHgBAIQgCAHAAAUQAAAUACAJQABAIAHAHQAHAHAMAAQAPAAAIgKQAHgIAAgPIAAgJIgeAAIAAgLIAsAAIAAATQgBAKgCAIQgCAIgGAFQgNAPgUAAQgSAAgKgKg");
	this.shape_243.setTransform(274.6,217.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#424245").s().p("AgNApQgFgCgGgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAGAGQAFAFACAIQACAIAAALQAAALgCAIQgCAJgGAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgEAGgCAHQgCAGAAAIQAAAJACAHQACAGAEAFQAGAGAIAAQAKAAAEgGQAGgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_244.setTransform(260,219.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#424245").s().p("AAMA4QgLAAgEgHQgGgGAAgKIAAg0IgLAAIAAgJIALAAIAAgbIALAAIAAAbIATAAIAAAJIgTAAIAAAzQAAANAMAAIAHAAIAAALg");
	this.shape_245.setTransform(252.3,218.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#424245").s().p("AgRA8QgGgCgHgHIAIgIIAJAHQAFACAHAAQALAAAGgHQAFgIAAgMIAAgNQgFAHgFACQgGADgGgBQgHABgGgDQgEgCgGgFQgEgFgDgIQgCgIAAgMQAAgMACgJQADgJAEgEQAFgFAFgCQAGgCAHAAQAGAAAGACQAFADAFAGIAAgKIANAAIAABXQAAARgKAJQgKALgPAAQgJAAgHgDgAgQgqQgFAIABAPQgBAOAFAIQAFAJALAAQANAAAFgJQADgHAAgPQAAgPgDgIQgFgJgNAAQgLAAgFAJg");
	this.shape_246.setTransform(240.3,221.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#424245").s().p("AAVArIAAg0QAAgLgFgFQgGgGgKAAQgJAAgFAGQgGAFAAALIAAA0IgNAAIAAhUIANAAIAAAJQAJgKAOAAQAOAAAIAIQAJAIAAAPIAAA2g");
	this.shape_247.setTransform(230.9,219.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#424245").s().p("AgFA+IAAhVIALAAIAABVgAgGgvIAAgOIANAAIAAAOg");
	this.shape_248.setTransform(223.8,217.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#424245").s().p("AgWA4QgGgHgDgJQgCgJAAgNQAAgLACgJQACgJAFgEQAFgFAFgCQAGgCAGAAQAIAAAFACQAGADAFAGIAAgxIAMAAIAAB7IgMAAIAAgKQgFAGgGADQgFACgIAAQgNAAgHgGgAgQgEQgEAHgBAPQABAQAEAIQAFAKAMgBQAMABAFgKQAEgIAAgQQAAgPgEgHQgFgJgMAAQgMAAgFAJg");
	this.shape_249.setTransform(216.6,217.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#424245").s().p("AgbArIAAhUIAMAAIAAAKQADgFAHgDQAGgDAHAAQAHAAAFABQAEACAEAFIgIAJIgHgFQgDgBgGAAQgHAAgGAGQgGAHAAAKIAAAzg");
	this.shape_250.setTransform(209.1,219.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#424245").s().p("AgNApQgFgCgGgGQgGgFgCgIQgCgIAAgMQAAgKACgJQACgIAGgFQAGgGAFgCQAGgDAHAAQAIAAAGADQAGACAGAGQAFAFACAIQACAIAAALQAAALgCAIQgCAJgGAGQgFAFgGACQgGADgIAAQgGAAgHgDgAgOgbQgEAGgCAHQgCAGAAAIQAAAJACAHQACAGAEAFQAGAGAIAAQAKAAAEgGQAGgFABgGIABgQIgBgPQgBgGgEgEQgGgHgKAAQgIAAgGAFg");
	this.shape_251.setTransform(200.1,219.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#424245").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgHAJQgFAJgBAOIABANQACAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgLgMg");
	this.shape_252.setTransform(191.4,219.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#424245").s().p("AgWAgQgKgLAAgVQAAgUAKgMQALgLAQAAQAJAAAGADQAGACAHAIIgJAIQgEgGgFgCQgEgCgGAAQgMAAgHAJQgFAJgBAOIABANQACAGAFAHQAFAHAMAAQAGAAAEgCQAFgDAEgFIAJAIQgHAHgGADQgGADgJAAQgQAAgLgMg");
	this.shape_253.setTransform(182.8,219.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#424245").s().p("AAlA+IgKgcIg1AAIgKAcIgOAAIAuh7IAKAAIAtB7gAgWAWIAuAAIgYhAg");
	this.shape_254.setTransform(173.1,217.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#F7D337").s().p("A8mxwMAr9AAAINQJlIgQX1Mg4zACIg");
	this.shape_255.setTransform(332.5,291);

	this.instance_4 = new lib.Path_1_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(620.1,655,1,1,0,0,0,493.3,15);
	this.instance_4.alpha = 0.672;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,0,1112.2,670);


(lib.landing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bendingai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.8,74.8,0.728,0.728,0,0,0,25.8,102.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.landing, new cjs.Rectangle(0,0,37.4,149.3), null);


(lib.key = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.keyai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.8,50.5,0.6,0.6,0,0,0,51.3,84.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.key, new cjs.Rectangle(0,-1,74.3,121.4), null);


(lib.jpin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jumpingai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.3,80.4,0.72,0.72,0,0,0,28.2,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jpin, new cjs.Rectangle(0,0,40.6,160.9), null);


(lib.incart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.incartai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(76,98.1,0.835,0.835,0,0,0,91,117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.incart, new cjs.Rectangle(0,0,151.9,196.2), null);


(lib.ending = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.endcontentai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(377.6,167.4,0.848,0.848,0,0,0,445.3,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ending, new cjs.Rectangle(0,0,755.3,334.8), null);


(lib.coin_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin_5ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42.2,45.9,0.841,0.841,0,0,0,54.9,59.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin_5, new cjs.Rectangle(-6.8,-7.3,104.9,105.4), null);


(lib.Coin_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin_4ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42.1,46.8,0.903,0.903,0,0,0,51,56.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Coin_4, new cjs.Rectangle(-7,-7.2,116.1,107.6), null);


(lib.coin_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin_3ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.2,52.1,0.985,0.985,0,0,0,49.9,56.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin_3, new cjs.Rectangle(-3.9,-3.9,112.3,101.8), null);


(lib.Coin_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin_2ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.7,35.5,0.985,0.985,0,0,0,50.4,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Coin_2, new cjs.Rectangle(-17.6,-17.6,112.9,109.6), null);


(lib.coin_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin_1ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.6,39.7,1,1,0,0,0,49.6,43.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin_1, new cjs.Rectangle(-4,-4,99.4,87.4), null);


(lib.cart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cartai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(75.9,62.5,0.832,0.832,0,0,0,91.2,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cart, new cjs.Rectangle(0,0,151.5,124.7), null);


(lib.cardai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_6();
	this.instance.parent = this;
	this.instance.setTransform(102.8,16.8,1,1,0,0,0,12.8,8.9);
	this.instance.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FA9DF").s().p("AAFgEIgcAYIAAgWIAbgZIAUAAIAAAfQAAAJgTAOg");
	this.shape.setTransform(74.1,66.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2FA9DF").s().p("AgrArIAAg/QAAgTAMgLQANgMARAAQASAAAMAMQAPANAAARIAAA7IgaAKIgCgDIgCgDIAAg+QAAgOgDgEQgFgGgIAAQgKAAgFAGQgGAHAAALIAAA+QAAAJAFAHIgVAEQgEgIAAgMg");
	this.shape_1.setTransform(64.4,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2FA9DF").s().p("AAFA7IAAhiIgcAaIAAgYIAbgYIAUAAIAAB7QgTgBAAgCg");
	this.shape_2.setTransform(52.8,69.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2FA9DF").s().p("AAeAtQgFgFgFgCIAAgtQAAgMgFgFQgFgGgKAAQgIAAgFAGQgEAFAAAMIAAALQgLgGgLgPQADgOAHgHQALgLASAAQAQAAANALQALALAAATIAAA6QgFgCgFgDg");
	this.shape_3.setTransform(42.5,68.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2FA9DF").s().p("AAFBLIAAh+IgcAZIAAgXIAbgZIAUAAIAACVg");
	this.shape_4.setTransform(74.1,54.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2FA9DF").s().p("AgfA+QgMgLAAgTIAAg/QAAgTAMgLQAMgMARAAQATAAAMAMQAPANAAARIAAA/QAAAQgOAOQgNAMgTAAQgRAAgMgMgAgRgwQgGAHAAAKIAAA/QAAALAFAGQAGAGAJAAQAHAAAHgGQADgEAAgNIAAg/QAAgNgDgEQgGgGgHAAQgKAAgFAGg");
	this.shape_5.setTransform(64.4,54.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2FA9DF").s().p("AAFBLIAAh+IgcAZIAAgXIAbgZIAUAAIAACVg");
	this.shape_6.setTransform(52.8,54.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2FA9DF").s().p("AgcA+QgKgJAAgVIAAg/QAAgVAKgJQAMgMAQAAQAPAAANAMQALAKAAAUIAAA/QAAAUgLAKQgMAMgQAAQgQAAgMgMgAgOgwQgEAFAAAMIAAA/QAAAMAEAFQAFAGAIAAQAJAAAGgGQAFgGAAgLIAAg/QAAgLgFgGQgFgGgJAAQgJAAgFAGg");
	this.shape_7.setTransform(42.6,54.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2FA9DF").s().p("AgJA2IAAhrQATAPgBAIIAABUg");
	this.shape_8.setTransform(75.5,40.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2FA9DF").s().p("AgJgJIAGgDIAMALIgSAPg");
	this.shape_9.setTransform(72.6,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2FA9DF").s().p("AgfA+QgMgLAAgTIAAg/QAAgTAMgLQAMgMARAAQATAAAMAMQAPANAAARIAAA/QAAAQgOAOQgNAMgTAAQgRAAgMgMgAgRgwQgGAHAAAKIAAA+QAAAMAFAGQAGAGAJAAQAHAAAHgGQADgEAAgOIAAg+QAAgNgDgEQgFgGgIAAQgKAAgFAGg");
	this.shape_10.setTransform(64.4,38);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2FA9DF").s().p("AgbA+QgLgKAAgUIAAg/QAAgUALgKQAMgMAPAAQAQAAAMAMQALAJAAAVIAAA/QAAAVgKAJQgMAMgQAAQgQAAgMgMgAgNgwQgFAGAAALIAAA+QAAAMAEAGQAHAGAHAAQAJAAAGgGQAEgFAAgNIAAg+QAAgMgEgFQgGgGgIAAQgJAAgFAGg");
	this.shape_11.setTransform(53.2,38);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2FA9DF").s().p("AgJBGIAAh7QAAgGASgKIAACLg");
	this.shape_12.setTransform(43.6,38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8F9F9").s().p("AgMAxQgGgHAAgKIAAg/QAAgKAGgHQAFgGAJAAQAIAAAGAGQADAEAAANIAAA/QAAAMgDAFQgHAGgHAAQgJAAgFgGg");
	this.shape_13.setTransform(63.9,54.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8F9F9").s().p("AgMAxQgGgHAAgLIAAg+QAAgKAGgHQAFgGAJAAQAJAAAFAGQADAEAAANIAAA+QAAANgDAFQgHAGgHAAQgJAAgFgGg");
	this.shape_14.setTransform(63.9,38);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8F9F9").s().p("AgSABIAAgLQAAgNAEgFQAFgGAIAAQAKAAAFAGQAFAGAAAMIAAAtQgUgLgRgXg");
	this.shape_15.setTransform(42.6,68.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F9F9").s().p("AgXDwIAAh8IgUAAIgcAZIAAAXIAdgZIAABjQgkgGgggRIAAg6QAAgUgLgLQgNgLgQAAQgRAAgNALQgHAIgDANQgxhAAAhTQAAg4AYgvQAXgxArghIAAB7IATAAIAAiLQA9goBGAAQBQAABBAyIgFADIAAAYIASgQIAHAFQAEACAAACIAABtIATAAIAAhVQAzA1AABeQAABegzA2IAAggIgUAAIgcAZIAAAXIAdgZIAAAgQgfAdgbARIAAg8QAAgRgPgOQgMgLgUAAQgRAAgMALQgMALAAAUIAABAQAAAKAEAJQgNACgOAAIgYgCgACqBmIATAAIAAiVIgUAAIgcAZIAAAWIAdgZgAgqBmIATAAIAAiVIgUAAIgcAZIAAAWIAdgZgAAkglQgMALAAATIAABAQAAASAMAMQANALARAAQATAAAMgLQAPgOAAgQIAAhAQAAgQgPgOQgMgLgUAAQgRAAgMALgAiyglQgKAJAAAVIAABAQAAAUAKAKQAMALAPAAQARAAANgLQALgLAAgTIAAhAQAAgUgLgKQgMgLgQAAQgRAAgMALgAAkjJQgMALAAASIAABBQAAATAMALQANAMARAAQATAAAMgMQAPgOAAgQIAAhBQAAgQgPgNQgMgMgUAAQgRAAgMAMgAhHjJQgKAKAAATIAABBQAAAUAKAKQAMAMAQAAQARAAAMgMQAKgKAAgUIAAhBQAAgUgKgJQgMgMgPAAQgRAAgNAMg");
	this.shape_16.setTransform(57.6,52);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8F9F9").s().p("AgNAxQgFgGAAgMIAAg+QAAgLAFgGQAFgGAIAAQAKAAAFAGQAEAFAAAMIAAA+QAAANgEAFQgGAGgIAAQgJAAgFgGg");
	this.shape_17.setTransform(53.2,38);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8F9F9").s().p("AgTAjIAAg+QAAgLAFgHQAGgFAIAAQAKAAAFAFQADAFAAANIAAA+IACAGQgYAJgKABQgFgHAAgJg");
	this.shape_18.setTransform(64,70.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8F9F9").s().p("AgOAxQgEgFAAgMIAAg/QAAgMAEgFQAFgGAJAAQAIAAAGAGQAFAGAAALIAAA/QAAALgFAGQgGAGgIAAQgJAAgFgGg");
	this.shape_19.setTransform(42.6,54.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#974B94").s().p("AiqDOQgsgJgZglQgYglAIgsQAJgsAlgZIErjHQAlgYAsAIQAsAJAZAlQAZAlgJAsQgJAsglAZIkrDHQgcASgfAAQgLAAgLgCg");
	this.shape_20.setTransform(105.6,20.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#974B94").ss(9).p("AEZAAQAAB0hSBSQhTBTh0AAQhzAAhThTQhShSAAh0QAAh0BShSQBThSBzAAQB1AABSBSQBSBTAABzg");
	this.shape_21.setTransform(58.1,51.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8F9F9").s().p("AjGDGQhShSAAh0QAAh0BShSQBThSBzAAQB1AABSBSQBSBTAABzQAAB0hSBSQhTBTh0AAQhzAAhThTg");
	this.shape_22.setTransform(58.1,51.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_23.setTransform(85.1,82);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_24.setTransform(77.9,82);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_25.setTransform(70.7,82);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_26.setTransform(63.9,82);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_27.setTransform(56.3,82);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_28.setTransform(49.5,82);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_29.setTransform(41.9,82);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_30.setTransform(35.1,82);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_31.setTransform(27.5,82);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_32.setTransform(20.7,82);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_33.setTransform(13.1,82);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_34.setTransform(85.1,62.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_35.setTransform(78.3,62.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_36.setTransform(70.7,62.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_37.setTransform(63.9,62.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_38.setTransform(56.3,62.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_39.setTransform(49.5,62.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_40.setTransform(42.3,62.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_41.setTransform(35.1,62.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_42.setTransform(27.5,62.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_43.setTransform(20.7,62.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_44.setTransform(13.1,62.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_45.setTransform(85.1,43.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_46.setTransform(78.3,43.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_47.setTransform(71.1,43.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_48.setTransform(63.5,43.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_49.setTransform(56.7,43.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_50.setTransform(49.1,43.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_51.setTransform(41.9,43.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_52.setTransform(34.7,43.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_53.setTransform(27.9,43.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2FA9DF").s().p("AgTAqQgIgIAAgNIAAgpQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAApQAAANgIAIQgIAHgMAAQgLAAgIgHgAgJgfQgEAEAAAHIAAApQAAAHAEAEQADAFAGAAQAGAAAEgFQAEgEAAgHIAAgpQAAgHgEgEQgEgFgGAAQgGAAgDAFg");
	this.shape_54.setTransform(20.7,43.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2FA9DF").s().p("AADAwIAAhQIgSAQIAAgPIASgQIANAAIAABfg");
	this.shape_55.setTransform(13.1,43.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ah4EKIj3AAQg2AAgmgmQgngmAAg3IAAoJQAAg3AnglQAmgnA2AAILfAAQA2AAAnAnQAlAlABA3IAAIJQgBA3glAmQgnAmg2AAIkUAAIhzD8g");
	this.shape_56.setTransform(49.9,73.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.5,125.1);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cardai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(65.7,62.6,1,1,0,0,0,65.7,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card, new cjs.Rectangle(0,0,131.5,125.1), null);


(lib.bubble2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.secondbubbleai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(121.7,78.9,1,1,0,0,0,121.7,78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble2, new cjs.Rectangle(0,0,243.4,157.7), null);


(lib.bubble1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firstbubbleai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.6,147.5,1,1,0,0,0,148.6,147.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubble1, new cjs.Rectangle(0,0,297.2,295), null);


(lib.spotlight2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spotlight_1ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(189.3,369.3,1,1,0,0,0,189.3,369.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spotlight2, new cjs.Rectangle(0,0,378.5,738.7), null);


(lib.BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.controllerai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13501.7,566.1,1,1,0,0,0,295.4,100.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1876));

	// second bubble
	this.instance_1 = new lib.bubble2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10205.7,441.7,1,1,0,0,0,121.7,78.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1497).to({_off:false},0).to({x:10218.5,y:436.9,alpha:1},14).wait(365));

	// first bubble
	this.instance_2 = new lib.bubble1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10126.4,342.5,1,1,0,0,0,148.6,147.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1485).to({_off:false},0).to({y:334.5,alpha:1},19,cjs.Ease.get(1)).wait(372));

	// spotlight 3
	this.instance_3 = new lib.spotlight_1ai("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(9772.9,352,1,1,0,0,0,189.3,369.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1410).to({_off:false},0).to({alpha:0.801},7).wait(459));

	// spotlight 2
	this.instance_4 = new lib.spotlight2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9369.7,358.4,1,1,0,0,0,189.3,369.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1330).to({_off:false},0).to({alpha:0.801},7).wait(539));

	// spotlight 1
	this.instance_5 = new lib.spotlight_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(8966.5,352,1,1,0,0,0,189.3,369.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1249).to({_off:false},0).to({alpha:0.801},7).wait(620));

	// step 2 copy
	this.instance_6 = new lib.step3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(9780.8,358.2,1,1,0,0,0,109.2,56.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1415).to({_off:false},0).to({y:327.8,alpha:1},8,cjs.Ease.get(1)).wait(453));

	// step 2
	this.instance_7 = new lib.step2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(9376,358.2,1,1,0,0,0,109.2,56.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1335).to({_off:false},0).to({y:327.8,alpha:1},8,cjs.Ease.get(1)).wait(533));

	// step 1
	this.instance_8 = new lib.step1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(8968,358.2,1,1,0,0,0,109.2,56.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1254).to({_off:false},0).to({y:327.8,alpha:1},8,cjs.Ease.get(1)).wait(614));

	// Layer 25
	this.instance_9 = new lib.cartai("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(10430,619.1,0.83,0.83,0,0,0,91,74.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1549).to({startPosition:0},0).to({_off:true},1).wait(326));

	// Layer 24
	this.instance_10 = new lib.purchasesignai("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(10334,507.4,0.837,0.837,0,0,0,98.4,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1876));

	// Layer 19
	this.instance_11 = new lib.spotlight_signai("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(9369.6,172.8,1,1,0,0,0,483.1,66.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1876));

	// Layer 12
	this.instance_12 = new lib.lightonai("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(4966.7,350.7,1,1,0,0,0,557.1,335);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(638).to({_off:false},0).wait(1238));

	// Layer 13
	this.instance_13 = new lib.noteai("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(4742.6,304.1,1,1,0,0,0,215.8,134.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(519).to({_off:false},0).wait(1357));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_519 = new cjs.Graphics().p("Ao5CjIAAlFIRzAAIAAFFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(519).to({graphics:mask_graphics_519,x:4264.6,y:592.9}).wait(1357));

	// Layer 10
	this.instance_14 = new lib.switchai("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(4255.7,608.1,1,1,-13.2,0,0,40,11.7);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(519).to({_off:false},0).wait(117).to({startPosition:0},0).to({rotation:12.5},2).wait(1238));

	// Layer 17
	this.instance_15 = new lib.coin_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(2294.3,107.5,0.706,0.706,0,0,0,45.6,39.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(363).to({_off:false},0).to({regX:45.8,scaleX:0.68,skewY:180,x:2290.4},3).to({regX:45.7,scaleX:0.87,scaleY:0.87,skewY:0,x:2294.4,y:95.3},3).to({regX:45.6,regY:39.7,scaleX:0.94,scaleY:0.94,x:2294.3,y:72.5},5).wait(1502));

	// Layer 9
	this.instance_16 = new lib.Coin_4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(2135.9,182.8,0.706,0.706,0,0,0,45.6,39.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(347).to({_off:false},0).to({regX:45.8,scaleX:0.68,skewY:180,x:2132},3).to({regX:45.7,scaleX:0.87,scaleY:0.87,skewY:0,x:2136,y:170.5},3).to({regX:45.6,scaleX:0.94,scaleY:0.94,x:2135.9,y:147.8},5).wait(1518));

	// Layer 8
	this.instance_17 = new lib.coin_3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1974.9,246.6,0.706,0.706,0,0,0,47.2,41.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(329).to({_off:false},0).to({regX:43.6,scaleX:0.68,skewY:180,x:1971.4},3).to({regX:47,regY:41.6,scaleX:0.87,scaleY:0.87,skewY:0,x:1975,y:234.6},3).to({regX:46.8,regY:40.9,scaleX:0.94,scaleY:0.94,x:1974.9,y:211.5},5).wait(1536));

	// Layer 7
	this.instance_18 = new lib.Coin_2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1821.2,285.6,0.706,0.706,0,0,0,45.8,40);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(310).to({_off:false},0).to({regX:45.6,scaleX:0.68,skewY:180,x:1817.3},3).to({regX:45.7,scaleX:0.87,scaleY:0.87,skewY:0,x:1821.2,y:273.4},3).to({regY:39.9,scaleX:0.94,scaleY:0.94,x:1821.1,y:250.6},5).wait(1555));

	// Layer 6
	this.instance_19 = new lib.coin_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1649.9,354.2,0.706,0.707,0,0,0,45.8,39.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(288).to({_off:false},0).to({regX:45.6,scaleX:0.68,skewY:180,x:1646},3).to({regX:45.8,regY:40,scaleX:0.87,scaleY:0.87,skewY:0,x:1649.9,y:341.9},3).to({regX:45.7,regY:39.9,scaleX:0.94,scaleY:0.95,y:319.2},5).wait(1577));

	// Layer 3
	this.instance_20 = new lib.BG_3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(5922,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1876));

	// Layer 4
	this.instance_21 = new lib.BG_4();
	this.instance_21.parent = this;
	this.instance_21.setTransform(10093,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1876));

	// Layer 2
	this.instance_22 = new lib.BG_2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(2455,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1876));

	// Layer 1
	this.instance_23 = new lib.BG_1();
	this.instance_23.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1876));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13886,768);


// stage content:
(lib.walking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1875 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1875).call(this.frame_1875).wait(1));

	// Layer 15
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(515.2,448.1,1,1,0,0,0,65.7,62.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1409).to({_off:false},0).to({y:432.1,alpha:1},12,cjs.Ease.get(1)).wait(15).to({alpha:0},4).to({_off:true},1).wait(435));

	// Layer 14
	this.instance_1 = new lib.lockandkey();
	this.instance_1.parent = this;
	this.instance_1.setTransform(496.7,441.3,1,1,0,0,0,80.8,43.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1329).to({_off:false},0).to({y:430.1,alpha:1},14,cjs.Ease.get(1)).wait(15).to({alpha:0},6).to({_off:true},1).wait(511));

	// Layer 10
	this.instance_2 = new lib.cart();
	this.instance_2.parent = this;
	this.instance_2.setTransform(529.3,616.1,1,1,0,0,0,75.7,62.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1825).to({_off:false},0).wait(51));

	// Layer 16
	this.instance_3 = new lib.cell_cards();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1829.4,509.2,1,1,0,0,0,468.4,149.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1511).to({_off:false},0).to({x:-177.1},171).to({_off:true},1).wait(193));

	// Layer 6
	this.instance_4 = new lib.incart();
	this.instance_4.parent = this;
	this.instance_4.setTransform(398.3,579.5,1,1,0,0,0,76,98);
	this.instance_4._off = true;

	this.instance_5 = new lib.jpin();
	this.instance_5.parent = this;
	this.instance_5.setTransform(568.3,533.1,1.184,1.184,3.3,0,0,20.8,80.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.landing();
	this.instance_6.parent = this;
	this.instance_6.setTransform(715.5,384.3,1.154,1.154,-5.3,0,0,18.9,75);
	this.instance_6._off = true;

	this.instance_7 = new lib.standingai("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(862.7,584.7,0.745,0.845,0,0,0,25.2,109.5);

	this.instance_8 = new lib.Walk();
	this.instance_8.parent = this;
	this.instance_8.setTransform(891.8,591.6,0.385,0.385,0,0,0,3.3,0.9);
	this.instance_8._off = true;

	this.instance_9 = new lib.armsupai("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(1097.7,586.5,0.761,0.761,0,0,0,33.5,114.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1550).to({state:[{t:this.instance_4}]},29).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},27).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},40).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},133).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},23).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1550).to({_off:false},0).to({x:367.3,y:583.2},29).to({y:553.4},6).wait(27).to({y:582.4},7).wait(20).to({y:554.4},6).wait(40).to({y:578.4},6).to({x:529.3,y:580.4},133,cjs.Ease.get(1)).to({_off:true,regX:20.8,regY:80.7,scaleX:1.18,scaleY:1.18,rotation:3.3,x:568.3,y:533.1},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1824).to({_off:false},1).to({scaleX:1.17,scaleY:1.17,rotation:5.3,x:582.4,y:484.5},3).to({regY:80.8,scaleX:1.15,scaleY:1.15,rotation:7.5,x:641,y:404},3).to({regX:20.7,regY:80.7,scaleX:1.14,scaleY:1.14,rotation:9.7,x:709.7,y:387.1},3).to({_off:true,regX:18.9,regY:75,scaleX:1.15,scaleY:1.15,rotation:-5.3,x:715.5,y:384.3},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1834).to({_off:false},1).to({rotation:-4.8,x:812.7,y:441.2},7).to({rotation:-0.5,x:862.7,y:590.3},7).to({_off:true,regX:25.2,regY:109.5,scaleX:0.75,scaleY:0.85,rotation:0,y:584.7,mode:"synched",startPosition:0},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1851).to({_off:false},0).to({x:1076.8},23).to({_off:true,regX:33.5,regY:114.1,scaleX:0.76,scaleY:0.76,x:1097.7,y:586.5,mode:"synched",startPosition:0},1).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1545 = new cjs.Graphics().p("EAWaAsdIAA+bIToAAIAAebg");
	var mask_graphics_1546 = new cjs.Graphics().p("EAVeAsdIAA+bIToAAIAAebg");
	var mask_graphics_1547 = new cjs.Graphics().p("EAUiAsdIAA+bIToAAIAAebg");
	var mask_graphics_1548 = new cjs.Graphics().p("EATmAsdIAA+bIToAAIAAebg");
	var mask_graphics_1549 = new cjs.Graphics().p("EASqAsdIAA+bIToAAIAAebg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1545).to({graphics:mask_graphics_1545,x:269,y:284.5}).wait(1).to({graphics:mask_graphics_1546,x:263,y:284.5}).wait(1).to({graphics:mask_graphics_1547,x:257,y:284.5}).wait(1).to({graphics:mask_graphics_1548,x:251,y:284.5}).wait(1).to({graphics:mask_graphics_1549,x:245,y:284.5}).wait(327));

	// Layer 12
	this.instance_10 = new lib.key();
	this.instance_10.parent = this;
	this.instance_10.setTransform(588,516,1,1,0,0,0,37.1,60);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.jpin();
	this.instance_11.parent = this;
	this.instance_11.setTransform(495.2,553.2,1.078,1.078,3.3,0,0,20.7,80.7);
	this.instance_11._off = true;

	this.instance_12 = new lib.landing();
	this.instance_12.parent = this;
	this.instance_12.setTransform(489.5,475.2,1.066,1.066,-9.8,0,0,18.9,74.9);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1250).to({_off:false},0).to({y:492.8,alpha:1},14,cjs.Ease.get(1)).wait(11).to({alpha:0},6).to({_off:true},1).wait(594));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1533).to({_off:false},0).to({regX:20.4,regY:80.5,scaleX:1.04,scaleY:1.04,rotation:0,x:456.7,y:449.4},9).to({_off:true,regX:18.9,regY:74.9,scaleX:1.07,scaleY:1.07,rotation:-9.8,x:489.5,y:475.2},1).wait(333));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1542).to({_off:false},1).to({regX:19.1,regY:75,scaleX:1.14,scaleY:1.14,rotation:-0.2,x:433.7,y:551.4},6).to({_off:true},1).wait(326));

	// Layer 9
	this.instance_13 = new lib.planeride();
	this.instance_13.parent = this;
	this.instance_13.setTransform(655.5,220.3,0.842,0.842,2.2,0,0,43.1,66.1);
	this.instance_13._off = true;

	this.instance_14 = new lib.jpin();
	this.instance_14.parent = this;
	this.instance_14.setTransform(436.5,564.7,1,1,3.3,0,0,20.4,80.4);
	this.instance_14._off = true;

	this.instance_15 = new lib.landing();
	this.instance_15.parent = this;
	this.instance_15.setTransform(435.2,514.2,1,1,-10.2,0,0,18.7,74.7);
	this.instance_15._off = true;

	this.instance_16 = new lib.standingai("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(401,518.8,0.712,0.808,0,0,0,25.2,109.5);
	this.instance_16._off = true;

	this.instance_17 = new lib.Walk();
	this.instance_17.parent = this;
	this.instance_17.setTransform(402.2,522.4,0.385,0.385,0,0,0,3.3,0.9);
	this.instance_17._off = true;

	this.instance_18 = new lib.handsonwaistai("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(465.5,592.4,0.76,0.76,0,0,0,37.8,109.1);

	this.instance_19 = new lib.pointingai("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(500.1,590.5,0.761,0.761,0,0,0,43.6,109);

	this.instance_20 = new lib.armsupai("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(498.5,586.5,0.761,0.761,0,0,0,33.5,114.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},415).to({state:[{t:this.instance_13}]},164).to({state:[{t:this.instance_13}]},25).to({state:[]},1).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},5).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},8).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18,p:{x:465.5}}]},250).to({state:[{t:this.instance_17}]},15).to({state:[{t:this.instance_19}]},316).to({state:[{t:this.instance_17}]},30).to({state:[{t:this.instance_20}]},49).to({state:[{t:this.instance_20}]},34).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18,p:{x:495.9}}]},45).to({state:[{t:this.instance_17}]},35).to({state:[{t:this.instance_16}]},41).to({state:[{t:this.instance_17}]},26).to({state:[]},22).wait(343));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(415).to({_off:false},0).to({x:412.7,y:619.5},164).to({x:417.7},25).to({_off:true},1).wait(1271));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(609).to({_off:false},0).to({regX:20.3,regY:80.5,rotation:0,x:426.9,y:510.3},4).to({_off:true,regX:18.7,regY:74.7,rotation:-10.2,x:435.2,y:514.2},1).wait(15).to({_off:false,regX:20.3,regY:80.4,rotation:0,x:399.9,y:518.1},1).to({x:383.9,y:478.1},4).to({_off:true,regX:18.8,regY:74.7,rotation:-0.2,x:380.3,y:506.2},1).wait(16).to({_off:false,regX:20.3,regY:80.4,rotation:0,x:399.9,y:518.1},1).to({x:419.1,y:491.7},4).to({_off:true,regX:18.8,regY:74.8,rotation:-2.8,x:412.9,y:504.6},1).wait(1219));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(613).to({_off:false},1).to({regX:18.8,rotation:-0.2,x:392.3,y:530.2},5).to({_off:true,regX:25.2,regY:109.5,scaleX:0.71,scaleY:0.81,rotation:0,x:401,y:518.8,mode:"synched",startPosition:0},1).wait(9).to({_off:false,regX:18.8,regY:74.7,scaleX:1,scaleY:1,rotation:-0.2,x:396.3,y:530.2,mode:"independent"},0).to({_off:true,regX:20.3,regY:80.4,rotation:0,x:399.9,y:518.1},1).wait(4).to({_off:false,regX:18.8,regY:74.7,rotation:-0.2,x:380.3,y:506.2},1).to({x:379.3,y:515.7},4).to({_off:true,regX:25.2,regY:109.5,scaleX:0.71,scaleY:0.81,rotation:0,x:391,y:513.3,mode:"synched",startPosition:0},1).wait(11).to({_off:false,regX:18.8,regY:74.7,scaleX:1,scaleY:1,rotation:-0.2,x:396.3,y:530.2,mode:"independent"},0).to({_off:true,regX:20.3,regY:80.4,rotation:0,x:399.9,y:518.1},1).wait(4).to({_off:false,regX:18.8,regY:74.8,rotation:-2.8,x:412.9,y:504.6},1).to({regY:74.7,rotation:-0.2,x:427.5,y:601.4},8).to({_off:true},1).wait(1210));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(619).to({_off:false},1).to({_off:true},5).wait(14).to({_off:false,x:391,y:513.3},1).wait(10).to({startPosition:0},0).to({_off:true},1).wait(15).to({_off:false,x:427.8,y:588.5},0).to({_off:true},3).wait(816).to({_off:false,x:499.8,y:590.1},0).to({_off:true},26).wait(365));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(625).to({_off:false},0).to({_off:true},4).wait(40).to({_off:false,x:449.4,y:591.6},0).to({_off:true},250).wait(15).to({_off:false,x:475},0).to({_off:true},316).wait(30).to({_off:false,x:484.6},0).to({_off:true},49).wait(35).to({_off:false,x:494.2},0).to({_off:true},45).wait(35).to({_off:false},0).to({_off:true},41).wait(26).to({_off:false},0).to({_off:true},22).wait(343));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_407 = new cjs.Graphics().p("Ac2LyIgc2HISxA3IjMaBg");
	var mask_1_graphics_408 = new cjs.Graphics().p("AdoMIIgb2GISwA3IjMaAg");
	var mask_1_graphics_409 = new cjs.Graphics().p("AeaMfIgb2GISwA3IjMaAg");
	var mask_1_graphics_410 = new cjs.Graphics().p("AfNM2Igc2GISwA3IjLaAg");
	var mask_1_graphics_411 = new cjs.Graphics().p("Af/NNIgc2HISwA3IjLaBg");
	var mask_1_graphics_412 = new cjs.Graphics().p("EAgxANkIgb2HISwA3IjMaBg");
	var mask_1_graphics_413 = new cjs.Graphics().p("EAhjAN6Igb2GISwA3IjMaAg");
	var mask_1_graphics_414 = new cjs.Graphics().p("EAiVAORIgb2HISwA3IjLaBg");
	var mask_1_graphics_605 = new cjs.Graphics().p("EATZAurIgc2IISwA3IjLaCg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(407).to({graphics:mask_1_graphics_407,x:301.9,y:105.9}).wait(1).to({graphics:mask_1_graphics_408,x:306.9,y:108.2}).wait(1).to({graphics:mask_1_graphics_409,x:311.9,y:110.4}).wait(1).to({graphics:mask_1_graphics_410,x:316.9,y:112.7}).wait(1).to({graphics:mask_1_graphics_411,x:321.9,y:115}).wait(1).to({graphics:mask_1_graphics_412,x:327,y:117.3}).wait(1).to({graphics:mask_1_graphics_413,x:332,y:119.5}).wait(1).to({graphics:mask_1_graphics_414,x:337,y:121.8}).wait(1).to({graphics:null,x:0,y:0}).wait(190).to({graphics:mask_1_graphics_605,x:241.3,y:329.2}).wait(1271));

	// Layer 4
	this.instance_21 = new lib.standingai("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(361,578.8,0.712,0.808,0,0,0,25.2,109.5);
	this.instance_21._off = true;

	this.instance_22 = new lib.bendingai("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(356,590.5,0.732,0.732,0,0,0,25.8,102.7);
	this.instance_22._off = true;

	this.instance_23 = new lib.jpin();
	this.instance_23.parent = this;
	this.instance_23.setTransform(366,570.2,1,1,0,0,0,20.3,80.4);
	this.instance_23._off = true;

	this.instance_24 = new lib.landing();
	this.instance_24.parent = this;
	this.instance_24.setTransform(460.2,344.2,1,1,-3.7,0,0,18.8,74.8);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_21,this.instance_22,this.instance_23,this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(268).to({_off:false},0).to({_off:true},4).wait(17).to({_off:false,x:459,y:360.7},1).to({_off:true},7).wait(12).to({_off:false,x:454,y:295.7},1).to({_off:true},6).wait(12).to({_off:false,x:446,y:243.7},1).to({_off:true},6).wait(12).to({_off:false,x:453,y:186.7},1).to({_off:true},6).wait(12).to({_off:false,x:471,y:141.7},1).to({_off:true},32).wait(1477));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(272).to({_off:false},0).to({_off:true},2).wait(23).to({_off:false,x:459,y:371.5},0).to({_off:true},2).wait(17).to({_off:false,x:456,y:309.5},0).to({_off:true},2).wait(17).to({_off:false,x:445,y:254.5},0).to({_off:true},2).wait(17).to({_off:false,x:449,y:199.5},0).to({_off:true},2).wait(43).to({_off:false,x:468,y:153.5},0).to({_off:true},2).wait(1475));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(274).to({_off:false},0).to({x:447,y:346.1},10).to({_off:true,regX:18.8,regY:74.8,rotation:-3.7,x:460.2,y:344.2},1).wait(14).to({_off:false,regX:20.3,regY:80.4,rotation:0,x:466,y:360.1},0).to({x:415,y:289.1},5).to({_off:true,regX:18.8,regY:74.8,rotation:-3.7,x:424.2,y:283.2},1).wait(13).to({_off:false,regX:20.3,regY:80.4,rotation:0,x:456,y:300.1},0).to({x:450,y:237.1},5).to({_off:true,regX:18.8,regY:74.8,rotation:-3.7,x:450.3,y:246.2},1).wait(13).to({_off:false,regX:20.3,regY:80.4,rotation:0,x:446,y:245.1},0).to({x:467,y:182.1},5).to({_off:true,regX:18.7,regY:74.8,rotation:-11.5,x:450.2,y:178.2},1).wait(13).to({_off:false,regX:20.3,regY:80.4,rotation:0,x:451,y:187.1},0).to({x:509,y:110.1},5).to({_off:true,regX:18.7,regY:74.8,rotation:-11.5,x:507.2,y:114.2},1).wait(39).to({_off:false,regX:20.3,regY:80.4,rotation:0,x:477,y:155.1},0).to({x:528,y:109.1},5).to({_off:true,regX:18.7,regY:74.8,rotation:-11.5,x:539.2,y:120.2},1).wait(198).to({_off:false,regX:20.3,regY:80.5,rotation:7,x:401.9,y:627.2},0).to({regX:20.4,regY:80.4,rotation:3.3,x:436.5,y:564.7},4).to({_off:true},1).wait(1266));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(284).to({_off:false},1).to({regX:18.7,regY:74.7,rotation:0,x:458.2,y:372.1},4).to({_off:true,regX:25.2,regY:109.5,scaleX:0.71,scaleY:0.81,x:459,y:360.7,mode:"synched",startPosition:0},1).wait(14).to({_off:false,regX:18.8,regY:74.8,scaleX:1,scaleY:1,rotation:-3.7,x:424.2,y:283.2,mode:"independent"},1).to({regX:18.7,rotation:-7.2,x:413.4,y:289.2},1).to({regY:74.7,rotation:0,x:453.2,y:307.1},3).to({_off:true,regX:25.2,regY:109.5,scaleX:0.71,scaleY:0.81,x:454,y:295.7,mode:"synched",startPosition:0},1).wait(13).to({_off:false,regX:18.8,regY:74.8,scaleX:1,scaleY:1,rotation:-3.7,x:450.3,y:246.2,mode:"independent"},1).to({regX:18.7,rotation:-7.2,x:434.4,y:245.2},1).to({regY:74.7,rotation:0,x:444.2,y:256.1},3).to({_off:true,regX:25.2,regY:109.5,scaleX:0.71,scaleY:0.81,x:446,y:243.7,mode:"synched",startPosition:0},1).wait(13).to({_off:false,regX:18.7,regY:74.8,scaleX:1,scaleY:1,rotation:-11.5,x:450.2,y:178.2,mode:"independent"},1).to({regY:74.7,rotation:0,x:463.2,y:199.1},4).to({_off:true,regX:25.2,regY:109.5,scaleX:0.71,scaleY:0.81,x:453,y:186.7,mode:"synched",startPosition:0},1).wait(13).to({_off:false,regX:18.7,regY:74.8,scaleX:1,scaleY:1,rotation:-11.5,x:507.2,y:114.2,mode:"independent"},1).to({regY:74.7,rotation:0,x:486.2,y:154},4).to({_off:true,regX:25.2,regY:109.5,scaleX:0.71,scaleY:0.81,x:471,y:141.7,mode:"synched",startPosition:0},1).wait(39).to({_off:false,regX:18.7,regY:74.8,scaleX:1,scaleY:1,rotation:-11.5,x:539.2,y:120.2,mode:"independent"},1).to({regY:74.7,rotation:0,x:630.3,y:215.5},7).to({_off:true},1).wait(1461));

	// Layer 1
	this.instance_25 = new lib.Walk();
	this.instance_25.parent = this;
	this.instance_25.setTransform(311.6,584.4,0.385,0.385,0,0,0,3.3,0.9);

	this.instance_26 = new lib.pointingai("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(340.6,583.6,0.747,0.747,0,0,0,43.6,109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25,p:{x:311.6}}]}).to({state:[{t:this.instance_26}]},51).to({state:[{t:this.instance_25,p:{x:344.2}}]},89).to({state:[]},128).wait(1608));

	// Layer 8
	this.instance_27 = new lib.plane();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-14.9,-34.2,0.57,0.57,0,0,0,80.7,34.1);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(368).to({_off:false},0).to({regX:80.6,regY:34.3,scaleX:1.2,scaleY:1.2,x:635.5,y:232.4},47).to({x:395.5,y:632.4},164).to({x:404.3},30).to({x:242.3},10).wait(6).to({x:98.3},14).wait(12).to({x:5.5},14).wait(5).to({regX:80.5,x:3.6,y:632.3},0).to({regY:34.4,x:-147.9,y:632.4},18).to({_off:true},1).wait(1187));

	// Layer 17
	this.instance_28 = new lib.ending();
	this.instance_28.parent = this;
	this.instance_28.setTransform(856.3,242.2,1,1,0,0,0,377.7,167.4);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1875).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_29 = new lib.BG();
	this.instance_29.parent = this;
	this.instance_29.setTransform(1226.5,380,1,1,0,0,0,1228.5,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({x:905.5},51).wait(89).to({x:92},127).wait(16).to({x:41.1},5).wait(10).to({x:-137.2},8).wait(11).to({x:-303.5},9).wait(10).to({x:-457},12).wait(7).to({x:-624.6},12).wait(48).to({x:-2234.2},164).to({x:-2349.4},30,cjs.Ease.get(1)).to({x:-2511.4},10).wait(6).to({x:-2655.5},14).wait(12).to({x:-2749.9},14).wait(5).to({x:-4695.5},249).wait(15).to({x:-7157.9},315).wait(31).to({x:-7637.9},49).wait(35).to({x:-8050.7},45).wait(35).to({x:-8345.1},41).wait(26).to({x:-10458.4},180).to({x:-11374.2},133).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(638,356,13886,768);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/walking_atlas_.png", id:"walking_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;