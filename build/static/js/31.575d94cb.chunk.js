(this["webpackJsonpreact-markdown-editor"]=this["webpackJsonpreact-markdown-editor"]||[]).push([[31],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"brainfuck",(function(){return r}));var o="><+-.,[]".split("");const r={name:"brainfuck",startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(e,t){if(e.eatSpace())return null;e.sol()&&(t.commentLine=!1);var n=e.next().toString();return-1===o.indexOf(n)?(t.commentLine=!0,e.eol()&&(t.commentLine=!1),"comment"):!0===t.commentLine?(e.eol()&&(t.commentLine=!1),"comment"):"]"===n||"["===n?("["===n?t.left++:t.right++,"bracket"):"+"===n||"-"===n?"keyword":"<"===n||">"===n?"atom":"."===n||","===n?"def":void(e.eol()&&(t.commentLine=!1))}}}}]);
//# sourceMappingURL=31.575d94cb.chunk.js.map