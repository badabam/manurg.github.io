window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),$(function(){"use strict";function t(){i(),n(),y&&y.getContext&&(a=y.getContext("2d"),e()),w.on("resize",_.throttle(i,500))}function e(){requestAnimFrame(e),o()}function n(){var t=0;for(t;u>t;t++)v.push({x:Math.random()*h,y:Math.random()*d,vX:4*Math.random()-2||Math.random(),vY:4*Math.random()-2||-Math.random()})}function i(){h=w.width(),d=w.height(),m=l.outerHeight(),s.attr("width",h).attr("height",d-m),g.width(h),g.height(d-m)}function o(){var t,e,n,i,o;a.clearRect(0,0,y.width,y.height),a.fillStyle="rgba(255, 255, 255, 0.05)",a.strokeStyle="rgba(255, 255, 255, 0.05)",a.lineWidth=.4;for(var m=0;m<v.length;m++){t=v[m],i=t.x+t.vX,o=t.y+t.vY,a.fillRect(t.x,t.y,1,1);for(var u=0;u<v.length;u++)e=v[u],n=r(t.x,t.y,e.x,e.y),f>n&&(a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(e.x,e.y),a.stroke());t.x=i>h?0:0>i?h:i,t.y=o>d?0:0>o?d:o}}function r(t,e,n,i){return Math.sqrt((n-=t)*n+(i-=e)*i)}var a,h,d,m,u=300,f=100,w=$(window),c=$("main"),g=c.find(".introduction"),s=c.find("#stage"),l=$("footer"),y=document.getElementById("stage"),v=[];t()});