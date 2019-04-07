webpackJsonp([7],{"0sXL":function(t,e){},GF4k:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){return"rgb("+this.randomNum(t,e)+","+this.randomNum(t,e)+","+this.randomNum(t,e)+")"},drawPic:function(){var t=document.getElementById("s-canvas").getContext("2d");t.textBaseline="bottom",t.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),t.fillRect(0,0,this.contentWidth,this.contentHeight);for(var e=0;e<this.identifyCode.length;e++)this.drawText(t,this.identifyCode[e],e);this.drawLine(t),this.drawDot(t)},drawText:function(t,e,o){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var r=(o+1)*(this.contentWidth/(this.identifyCode.length+1)),i=this.randomNum(this.fontSizeMax,this.contentHeight-5),n=this.randomNum(-45,45);t.translate(r,i),t.rotate(n*Math.PI/180),t.fillText(e,0,0),t.rotate(-n*Math.PI/180),t.translate(-r,-i)},drawLine:function(t){for(var e=0;e<8;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<100;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"s-canvas"},[e("canvas",{attrs:{id:"s-canvas",width:this.contentWidth,height:this.contentHeight}})])},staticRenderFns:[]},n={data:function(){var t=this;return{ruleForm:{username:"",password:"",verifycode:""},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur",validator:function(t,e,o){""===e?o(new Error("请输入账号")):o()}}],password:[{required:!0,message:"请输入密码",trigger:"blur",validator:function(t,e,o){""===e?o(new Error("请输入密码")):o()}}],verifycode:[{required:!0,trigger:"blur",validator:function(e,o,r){console.log(o),""==o||void 0==o?r(new Error("请输入验证码")):o!==t.identifyCode?r(new Error("验证码不正确!")):r()}}]},identifyCodes:"1234567890",identifyCode:""}},components:{SIdentify:o("VU/8")(r,i,!1,null,null,null).exports},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$message.error("失败！"),!1;localStorage.setItem("ms_username",e.ruleForm.username),e.$router.push("/")})},randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(t,e){for(var o=0;o<e;o++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)];console.log(this.identifyCode)}},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-wrap"},[o("div",{staticClass:"ms-login"},[o("div",{staticClass:"ms-title"},[t._v("广东电信社区楼宇沙盘作战系统")]),t._v(" "),o("el-form",{ref:"ruleForm",staticClass:"ms-content",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"0px"}},[o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{placeholder:"请输入账号"},model:{value:t.ruleForm.username,callback:function(e){t.$set(t.ruleForm,"username",e)},expression:"ruleForm.username"}},[o("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-people"},slot:"prepend"})],1)],1),t._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}},[o("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),t._v(" "),o("el-form-item",{attrs:{prop:"verifycode"}},[o("el-input",{staticClass:"identifyinput",attrs:{placeholder:"请输入验证码"},model:{value:t.ruleForm.verifycode,callback:function(e){t.$set(t.ruleForm,"verifycode",e)},expression:"ruleForm.verifycode"}}),t._v(" "),o("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1),t._v(" "),o("el-form-item",[o("div",{staticClass:"identifybox"},[o("div",{on:{click:t.refreshCode}},[o("s-identify",{attrs:{identifyCode:t.identifyCode}})],1),t._v(" "),o("el-button",{staticClass:"textbtn",attrs:{type:"text"},on:{click:t.refreshCode}},[t._v("看不清，换一张")])],1)]),t._v(" "),o("div",{staticClass:"login-btn"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var a=o("VU/8")(n,s,!1,function(t){o("0sXL")},"data-v-5e751252",null);e.default=a.exports}});
//# sourceMappingURL=7.6bdfdf0dba10eb3014ec.js.map