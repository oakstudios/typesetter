// jQuery contentEditable() plugin
//
// Created by: Makis Tracend (@tracend)
// Issue: http://stackoverflow.com/a/6263537
//
// Licensed under the GPL Version 2: http://www.gnu.org/licenses/gpl-2.0.html
(function(e){var t={init:function(t){return this.each(function(){var t=e(this);t.unbind("change");t.find("[contenteditable]").each(function(){e(this).contentEditable("field",t)})})},field:function(t){return this.each(function(){var n=e(this),r=n.attr("data-key");n.live("focus",function(){var t=e(this);t.data("enter",t.html());t.data("before",t.html());return t}).live("keyup paste",function(){var n=e(this),i=n.text();if(n.data("before")!==i){n.data("before",i);var s={};s[r]=i;t.trigger({type:"change",action:"update",changed:s})}return n}).live("blur",function(){var n=e(this),i=n.html();if(n.data("enter")!==i){n.data("enter",i);var s={};s[r]=i;t.trigger({type:"change",action:"save",changed:s})}return n})})}};e.fn.contentEditable=function(n){if(t[n])return t[n].apply(this,Array.prototype.slice.call(arguments,1));if(typeof n=="object"||!n)return t.init.apply(this,arguments);e.error("Method "+n+" does not exist on jQuery.contentEditable")}})(jQuery);