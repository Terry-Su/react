/* eslint-disable */

"use strict";
exports.__esModule = true;
var FS = require("fs-extra");
var PATH = require("path");
function matchText(start, end, sourceText) {
    var res = '';
    try {
        var startIndex = sourceText.indexOf(start);
        if ( startIndex === -1 ) {
            throw( `${ start } wasn't matched` )
        }


        if ( sourceText.indexOf(end) === -1 ) {
            throw( `${ end } wasn't matched` )
        }
        
        var endIndex = sourceText.indexOf(end) + end.length;
        res = sourceText.substring(startIndex, endIndex);
    }
    finally {
    }
    return res;
}
function default_1(input, outputDir, rules) {
    var sourceText = FS.readFileSync(input, { encoding: "utf8" });
    function resolveRule(rule) {
        var start = rule.start, end = rule.end, file = rule.file, _a = rule.before, before = _a === void 0 ? '' : _a, _b = rule.after, after = _b === void 0 ? '' : _b;
        var matchedText = matchText(start, end, sourceText);
        var outputingText = "" + before + matchedText + after;
        var outputPath = PATH.resolve(outputDir, file);
        FS.outputFileSync(outputPath, outputingText);
    }
    rules.forEach(resolveRule);
}
exports["default"] = default_1;
