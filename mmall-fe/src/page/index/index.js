/*
* @Author: joyin
* @Date:   2018-11-25 13:06:38
* @Last Modified by:   joyin
* @Last Modified time: 2018-11-27 10:06:44
*/
'use strict'; 
var _mm = require('util/mm.js');

var html= '<div>{{data}}</div>';
var data = {
	data : 'test'
}
console.log(_mm.renderHtml(html, data));