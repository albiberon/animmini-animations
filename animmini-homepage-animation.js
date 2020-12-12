(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animmini_homepage_animation_atlas_1", frames: [[366,139,133,133],[366,0,133,137],[0,0,364,340]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_18 = function() {
	this.initialize(ss["animmini_homepage_animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["animmini_homepage_animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["animmini_homepage_animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,0,0.3237,0.3237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.1,43.1);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.3237,0.3237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.1,44.4);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApMImIAAxLISZAAIAARLg");
	mask.setTransform(58.9,55.025);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlQIlQgugHgcglQgQgVgEgaIictsQgIguAaglQAagmAugIQAZgFAaAHIO6EaQAsANAWApQAWAogNAtQgLAkgdAWIAAAAIseJSQgdAWgjAAIgSgBg");
	this.shape.setTransform(58.9223,55.033);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,117.8,110.1), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(58.9,55,1,1,0,0,0,58.9,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,117.9,110.1), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(202.6,58.85,1,1,0,0,0,21.5,21.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212121").s().p("AhcAuQgHgGAAgJQAAgJAFgGQA2g7BCgHQAigDAaAJQAIADAEAIQAEAIgEAIQgDAJgIADQgHAEgJgDQgRgGgZADQgxAGgqAtQgGAHgJAAIgBABQgIAAgGgGg");
	this.shape.setTransform(200.4041,61.0616,1.46,1,-18.2812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},5).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},3).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({startPosition:0},0).to({regX:21.7,regY:21.9,scaleX:0.9098,scaleY:0.5224,skewX:-24.1931,skewY:-30.7039,x:202.75,y:59.05},5,cjs.Ease.get(-1)).to({_off:true},1).wait(2).to({_off:false},0).to({regX:21.5,regY:21.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:202.6,y:58.85},3,cjs.Ease.get(1)).wait(7));

	// Layer_5
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(161.65,88.5,1,1,0,0,0,21.5,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212121").s().p("AhcAuQgHgGAAgJQAAgJAFgGQA2g7BCgHQAigDAaAJQAIADAEAIQAEAIgEAIQgDAJgIADQgHAEgJgDQgRgGgZADQgxAGgqAtQgGAHgJAAIgBABQgIAAgGgGg");
	this.shape_1.setTransform(166.5541,82.7616,1.46,1,-18.2812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({startPosition:0},0).to({regX:21.6,regY:22.2,scaleX:0.8287,scaleY:0.682,skewX:24.6466,skewY:-5.3822,x:161.75,y:88.55},5,cjs.Ease.get(-1)).to({_off:true},1).wait(2).to({_off:false},0).to({regX:21.5,regY:22.1,scaleX:1,scaleY:1,skewX:0,skewY:0,x:161.65,y:88.5},3,cjs.Ease.get(1)).wait(7));

	// Layer_3
	this.instance_2 = new lib.CachedBmp_16();
	this.instance_2.setTransform(129.4,18.2,0.3237,0.3237);

	this.instance_3 = new lib.Group_0();
	this.instance_3.setTransform(188.3,84.7,1,1,0,0,0,58.9,55);
	this.instance_3.alpha = 0.1484;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129.4,18.2,117.9,121.60000000000001);


// stage content:
(lib.animminihomepageanimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgLQAAgJAHgIQAHgHAKAAQALAAAHAHQAIAIAAAJQAAALgIAHQgHAIgLgBQgKABgHgIg");
	this.shape.setTransform(367.9205,212.5915,1.5394,1.5394);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:false},0).wait(46));

	// _Clip_Group__3
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(262.5,125.4,0.4544,0.4544,0,0,0,188.3,79);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regX:188.4,regY:79.1,scaleX:1.5444,scaleY:1.5444,x:262.6,y:125.6,alpha:1},4,cjs.Ease.get(1)).to({regX:188.3,regY:79,scaleX:1.188,scaleY:1.188,x:262.45,y:125.4,mode:"synched",startPosition:0,loop:false},5,cjs.Ease.get(-1)).wait(37));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AliDaQgMAAgIgJQgJgIAAgMIAAl5QAAgMAJgIQAIgJAMAAILFAAQAMAAAIAJQAJAIAAAMIAAF5QAAAMgJAIQgIAJgMAAg");
	this.shape_1.setTransform(253.25,124.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AsHHcQgaAAgTgSQgSgTAAgaIAAs5QAAgaASgTQATgTAaAAIYPAAQAaAAATATQASATAAAaIAAM5QAAAagSATQgTASgaAAg");
	this.shape_2.setTransform(252.075,124.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AwzKVQglAAgagaQgagaAAgkIAAx5QAAglAagZQAagaAlAAMAhoAAAQAkAAAaAaQAaAZgBAlIAAR5QABAkgaAaQgaAagkAAg");
	this.shape_3.setTransform(251.2,124.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AznMEQgrAAgfgeQgegfAAgrIAA04QAAgrAegdQAfgeArgBMAnQAAAQArABAeAeQAdAdAAArIAAU4QAAArgdAfQgeAegrAAg");
	this.shape_4.setTransform(250.7,124.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A0jMoQguAAgfgfQggggAAgtIAA14QAAgtAggfQAfggAuAAMApIAAAQAtAAAfAgQAgAfAAAtIAAV4QAAAtggAgQgfAfgtAAg");
	this.shape_5.setTransform(250.525,124.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},11).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(45));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#212120").s().p("AhxBqQgVAAgOgOQgPgOAAgVQAAhDAxgvQAvgwBDAAQBEAAAvAwQAxAvAABDQAAAVgPAOQgOAOgVAAg");
	this.shape_6.setTransform(379.8214,254.0305,1.188,1.188);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(11).to({_off:false},0).wait(49));

	// Layer_5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#212121").s().p("AiDOuQhwAAhQhPQhPhPAAhxIAA09QAAhxBPhOQBQhQBwAAIEIAAQBwAABPBQQBPBOAABxIAAU9QAABxhPBPQhPBPhwAAg");
	this.shape_7.setTransform(250.525,125.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#212121").s().p("AojOuQhwAAhQhPQhPhPAAhxIAA09QAAhxBPhOQBQhQBwAAIRIAAQBwAABPBQQBPBOAABxIAAU9QAABxhPBPQhPBPhwAAg");
	this.shape_8.setTransform(250.525,125.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#212121").s().p("AtmOuQhwAAhQhPQhPhPAAhxIAA09QAAhxBPhOQBQhQBwAAIbOAAQBwAABPBQQBPBOAABxIAAU9QAABxhPBPQhPBPhwAAg");
	this.shape_9.setTransform(250.525,125.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#212121").s().p("AxNOuQhwAAhQhPQhPhPAAhxIAA09QAAhxBPhOQBQhQBwAAMAicAAAQBwAABPBQQBPBOAABxIAAU9QAABxhPBPQhPBPhwAAg");
	this.shape_10.setTransform(250.525,125.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#212121").s().p("AzYOuQhwAAhQhPQhPhPAAhxIAA09QAAhxBPhOQBQhQBwAAMAmyAAAQBwAABPBQQBPBOAABxIAAU9QAABxhPBPQhPBPhwAAg");
	this.shape_11.setTransform(250.525,125.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#212121").s().p("A0GOuQhwAAhQhPQhPhPAAhxIAA09QAAhxBPhOQBQhQBwAAMAoOAAAQBwAABPBQQBPBOAABxIAAU9QAABxhPBPQhPBPhwAAg");
	this.shape_12.setTransform(250.525,125.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(46));

	// Layer_7
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("AhmBHIAAiNIDNAAIAACNg");
	this.shape_13.setTransform(262.85,212.25,1.1946,1,0,0,0,10.3,-7.1);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(11).to({_off:false},0).wait(49));

	// Layer_9
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#212121").s().p("AhVBlQglgkAAgyIAAgcQAAgzAkgkQAlgkAxAAQAzAAAkAkQAkAkAAAzIAAAcQAAAzgkAjQgjAkg0AAQgyAAgjgkg");
	this.shape_14.setTransform(250.525,244.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#212121").s().p("AhVGHQglgkAAgyIAApgQAAgzAkgkQAlgkAxAAQAzAAAkAkQAkAkAAAzIAAJgQAAAygkAkQgjAkg0AAQgyAAgjgkg");
	this.shape_15.setTransform(250.525,215.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#212121").s().p("AhVJpQglglAAgyIAAwjQAAgyAlgkQAkgkAxAAQAzAAAkAkQAkAkAAAyIAAQjQAAAzgkAkQgjAjg0ABQgygBgjgjg");
	this.shape_16.setTransform(250.525,192.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#212121").s().p("AhVMKQglglAAgyIAA1kQAAgzAlgkQAkgkAxAAQAzAAAkAkQAkAkAAAzIAAVkQAAAzgkAkQgjAjg0ABQgygBgjgjg");
	this.shape_17.setTransform(250.525,176.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#212121").s().p("AhVNqQglgkAAgyIAA4mQAAgzAlgjQAkglAxAAQAzAAAkAlQAkAjAAAzIAAYmQAAAygkAkQgjAkg0AAQgyAAgjgkg");
	this.shape_18.setTransform(250.525,167);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#212121").s().p("AhVOKQglgkAAgyIAA5mQAAgzAlgkQAkgkAxAAQAzAAAkAkQAkAkAAAzIAAZmQAAAzgkAjQgjAkg0AAQgyAAgjgkg");
	this.shape_19.setTransform(250.525,163.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},5).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(50));

	// Layer_8
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#212121").s().p("AirB+QgZAAgQgRQgSgRABgYQAAhPA4g5QA5g5BQAAIBIAAQBQAAA6A5QA5A5AABPQgBAYgRARQgRARgZAAg");
	this.shape_20.setTransform(250.55,254.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#212121").s().p("AlEB+QgZAAgQgRQgSgRABgYQAAhPA4g5QA5g5BQAAIF6AAQBQAAA6A5QA4A5AABPQAAAYgRARQgRARgZAAg");
	this.shape_21.setTransform(250.55,254.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#212121").s().p("AmyB+QgYAAgRgRQgRgRAAgYQAAhQA5g4QA5g5BQAAIJVAAQBQAAA5A5QA5A4AABQQAAAYgRARQgSARgYAAg");
	this.shape_22.setTransform(250.55,254.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#212121").s().p("AnzB+QgYAAgSgRQgRgRAAgYQAAhQA6g4QA4g5BRAAILYAAQBQAAA4A5QA5A4AABQQAAAYgQARQgSARgYAAg");
	this.shape_23.setTransform(250.55,254.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#212121").s().p("AoJB+QgZAAgQgRQgRgRAAgYQAAhQA4g4QA6g5BPAAIMEAAQBQAAA6A5QA5A4AABQQgBAYgRARQgRARgZAAg");
	this.shape_24.setTransform(250.55,254.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},3).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(53));

	// _Clip_Group__0
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("ArYA1QgWAAgPgQQgQgPAAgWQAAgUAQgQQAPgQAWAAIWxAAQAWAAAPAQQAQAQAAAUQAAAWgQAPQgPAQgWAAg");
	this.shape_25.setTransform(253.15,266.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AyNA1QgWAAgPgQQgQgPAAgWQAAgVAQgPQAPgQAWAAMAkcAAAQAWAAAPAQQAPAPAAAVQAAAWgPAPQgPAQgWAAg");
	this.shape_26.setTransform(253.15,266.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("A3GA1QgWAAgPgQQgQgPAAgWQAAgVAQgPQAPgQAWAAMAuNAAAQAWAAAPAQQAPAPAAAVQAAAWgPAPQgPAQgWAAg");
	this.shape_27.setTransform(253.15,266.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("A6CA1QgVAAgQgQQgPgPAAgWQAAgVAPgPQAQgQAVAAMA0EAAAQAWAAAQAQQAPAPAAAVQAAAWgPAPQgQAQgWAAg");
	this.shape_28.setTransform(253.15,266.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("A7AA1QgVAAgQgQQgQgPAAgWQAAgUAQgQQAQgQAVAAMA2BAAAQAWAAAPAQQAQAQAAAUQAAAWgQAPQgPAQgWAAg");
	this.shape_29.setTransform(253.15,266.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(56));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(325,181.6,106.30000000000001,90.50000000000003);
// library properties:
lib.properties = {
	id: 'DFA875AFBBA446F2AE75DB4D7D8055B7',
	width: 500,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animmini_homepage_animation_atlas_1.png", id:"animmini_homepage_animation_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DFA875AFBBA446F2AE75DB4D7D8055B7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;