(this["webpackJsonpreact-markdown-editor"]=this["webpackJsonpreact-markdown-editor"]||[]).push([[87],{191:function(t,e,n){"use strict";n.r(e),n.d(e,"smalltalk",(function(){return p}));var a=/[+\-\/\\*~<>=@%|&?!.,:;^]/,i=/true|false|nil|self|super|thisContext/,r=function(t,e){this.next=t,this.parent=e},o=function(t,e,n){this.name=t,this.context=e,this.eos=n},s=function(){this.context=new r(u,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};s.prototype.userIndent=function(t,e){this.userIndentationDelta=t>0?t/e-this.indentation:0};var u=function(t,e,n){var s=new o(null,e,!1),u=t.next();return'"'===u?s=c(t,new r(c,e)):"'"===u?s=l(t,new r(l,e)):"#"===u?"'"===t.peek()?(t.next(),s=h(t,new r(h,e))):t.eatWhile(/[^\s.{}\[\]()]/)?s.name="string.special":s.name="meta":"$"===u?("<"===t.next()&&(t.eatWhile(/[^\s>]/),t.next()),s.name="string.special"):"|"===u&&n.expectVariable?s.context=new r(d,e):/[\[\]{}()]/.test(u)?(s.name="bracket",s.eos=/[\[{(]/.test(u),"["===u?n.indentation++:"]"===u&&(n.indentation=Math.max(0,n.indentation-1))):a.test(u)?(t.eatWhile(a),s.name="operator",s.eos=";"!==u):/\d/.test(u)?(t.eatWhile(/[\w\d]/),s.name="number"):/[\w_]/.test(u)?(t.eatWhile(/[\w\d_]/),s.name=n.expectVariable?i.test(t.current())?"keyword":"variable":null):s.eos=n.expectVariable,s},c=function(t,e){return t.eatWhile(/[^"]/),new o("comment",t.eat('"')?e.parent:e,!0)},l=function(t,e){return t.eatWhile(/[^']/),new o("string",t.eat("'")?e.parent:e,!1)},h=function(t,e){return t.eatWhile(/[^']/),new o("string.special",t.eat("'")?e.parent:e,!1)},d=function(t,e){var n=new o(null,e,!1);return"|"===t.next()?(n.context=e.parent,n.eos=!0):(t.eatWhile(/[^|]/),n.name="variable"),n};const p={name:"smalltalk",startState:function(){return new s},token:function(t,e){if(e.userIndent(t.indentation(),t.indentUnit),t.eatSpace())return null;var n=e.context.next(t,e.context,e);return e.context=n.context,e.expectVariable=n.eos,n.name},blankLine:function(t,e){t.userIndent(0,e)},indent:function(t,e,n){var a=t.context.next===u&&e&&"]"===e.charAt(0)?-1:t.userIndentationDelta;return(t.indentation+a)*n.unit},languageData:{indentOnInput:/^\s*\]$/}}}}]);
//# sourceMappingURL=87.ac348d9e.chunk.js.map