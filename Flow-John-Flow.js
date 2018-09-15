// ==UserScript==
// @name         Flow John Flow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.flow.microsoft.com/manage/environments/*/flows*
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';

    var $style = $('<style>'+
                   '.msla-token-recommendation-v2 .msla-token-recommendation-pull-right .msla-token-picker-pin {left: -400px; top: inherit; width: 600px; }'+
                   '.msla-token-recommendation-v2 .msla-token-recommendation-pull-right .msla-token-picker-pin .msla-token-picker-popup .msla-token-picker { width: inherit; } '+
                   '.msla-token-recommendation-v2 .msla-token-picker .msla-token-picker-expression .msla-token-picker-expression-editor .msla-expression-editor {height: 106px;}'+
                   '.msla-intellisense-editor>div {height: 96px;}'+
                   '</style>');
    $('html > head').append($style);

    var foundMonaco = false;

    function initMonaco() {

        if (!window.monaco) {
            setTimeout(initMonaco, 100);
            return;
        }

        if (!foundMonaco) {

            window.monaco.editor.onDidCreateEditor(
                function(editor){
                    editor.updateOptions({
//                        lineNumbersMinChars: 2,
//                         lineNumbers: "on",
                        wordWrap: "bounded",
                        automaticLayout: true,
//                         contextmenu: false,
                        scrollBeyondLastLine: false,
                        formatOnType: true,
                        scrollbar: {
                         vertical: "visible",
                            verticalHasArrows: true
                        }
                    });
                });
            foundMonaco = true;
        }
    }
    initMonaco();

})(window.jQuery);
