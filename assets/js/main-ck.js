$(document).ready(function(){function e(e,t){$.get("index.html",function(e){var n=$("<div>"+e+"</div>"),r=n.find("section").html();$("section").html(r).addClass(t+" opacity")})}function r(){w=0;$("home .homeTitle h2 span").css({color:"rgba(255,255,255,.8)"});$(".home .homeTitle").empty().html(t);return w}$("a[data-role='ajax']").click(function(t){t.preventDefault();if(Modernizr.history){$(".home .homeMenu li a").not(this).addClass("homeMenu_jsActive");var n=$(this),r=$(this).parents("section");r.removeClass("opacity");window.setTimeout(function(){r.removeClass();var t=n.attr("href"),i=t.slice(0,-1);window.history.pushState(null,"",t);e(t,i)},300)}else console.log("no Modernizr History")});$(window).on("popstate",function(t){this._popStateEventCount++;var n=window.location.pathname;n=n.split("/");n=n.filter(function(e){return e!=""});$("section").removeClass("opacity");window.setTimeout(function(){$("section").removeClass();if(n.length>1)var t=n[n.length-1],r=t+"/";else var r="../",t="home";e(r,t)},300)});var t=$(".home .homeTitle").html(),n=[$(".home .homeTitle p:first-of-type").text().split(""),$(".home .homeTitle h1").text().split(""),$(".home .homeTitle p:last-of-type").text().split(""),$(".home .homeTitle h2").text().split("")];$(".home .homeTitle").empty().delay(1e3).queue(function(){function i(e,t){function s(e,t){var o;switch(e){case 0:o="p:first-of-type";break;case 1:o="h1";break;case 2:o="p:last-of-type";break;case 3:o="h2"}setTimeout(function(){if(n[e][t]==" "){t++;$(".home .homeTitle "+o).append(" <span>"+n[e][t]+"</span>")}else $(".home .homeTitle "+o).append("<span>"+n[e][t]+"</span>");$(".home .homeTitle "+o+" span:last-of-type").css({opacity:"0",color:"rgba(255,255,255,1)"});$;e==1?$(".home .homeTitle "+o+" span:last-of-type").css({color:"rgba(255,255,255,1)"}).delay(200).queue(function(){$(this).css({opacity:"1"})}):e==3?$(".home .homeTitle "+o+" span:last-of-type").css({opacity:"1"}).delay(200).queue(function(){$(this).css({color:"rgba(255,255,255,.8)"})}):$(".home .homeTitle "+o+" span:last-of-type").css({opacity:"1"}).delay(200).queue(function(){$(this).css({color:"rgba(255,255,255,.4)"})});if(e=="0"&&n[e][t]=="o")setTimeout(function(){t++;if(t<n[e].length)s(e,t);else{t=0;e++;if(e<n.length)if(e==1){e++;i(e,t)}else i(e,t);else e>=n.length&&r()}},1e3);else{t++;if(t<n[e].length)s(e,t);else{t=0;e++;e<n.length?i(e,t):e>=n.length&&r()}}},70)}s(e,t)}$(this).html("<p></p><h1></h1><p></p><h2></h2>");var e=0,t=0;i(t,e)})});