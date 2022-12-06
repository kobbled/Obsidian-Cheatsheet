'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var MyPlugin = /** @class */ (function (_super) {
    __extends(MyPlugin, _super);
    function MyPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var compare;
            var _this = this;
            return __generator(this, function (_a) {
                console.log('loading ' + this.manifest.name);
                compare = new Intl.Collator(navigator.language, {
                    usage: 'sort',
                    sensitivity: 'base',
                    numeric: true,
                    ignorePunctuation: true,
                }).compare;
                this.compare = compare;
                this.addCommand({
                    id: 'sort-alphabetically-with-checkboxes',
                    name: 'Sort alphabetically with checkboxes',
                    callback: (function () { return _this.sortAlphabetically(false, false); }),
                });
                this.addCommand({
                    id: 'sort-list-alphabetically-with-checkboxes',
                    name: 'Sort current list alphabetically with checkboxes',
                    callback: (function () { return _this.sortAlphabetically(true, false); }),
                });
                this.addCommand({
                    id: 'sort-alphabetically',
                    name: 'Sort alphabetically',
                    callback: (function () { return _this.sortAlphabetically(false, true); }),
                });
                this.addCommand({
                    id: 'sort-list-alphabetically',
                    name: 'Sort current list alphabetically',
                    callback: (function () { return _this.sortAlphabetically(true, true); }),
                });
                this.addCommand({
                    id: 'sort-length',
                    name: 'Sort by length of line',
                    callback: (function () { return _this.sortLengthOfLine(); }),
                });
                this.addCommand({
                    id: 'sort-headings',
                    name: 'Sort headings',
                    callback: (function () { return _this.sortHeadings(); }),
                });
                this.addCommand({
                    id: 'permute-reverse',
                    name: 'Reverse lines',
                    callback: (function () { return _this.permuteReverse(); }),
                });
                this.addCommand({
                    id: 'permute-shuffle',
                    name: 'Shuffle lines',
                    callback: (function () { return _this.permuteShuffle(); }),
                });
                this.addCommand({
                    id: 'sort-list-recursively',
                    name: 'Sort current list recursively',
                    callback: (function () { return _this.sortListRecursively(true); }),
                });
                this.addCommand({
                    id: 'sort-list-recursively-with-checkboxes',
                    name: 'Sort current list recursively with checkboxes',
                    callback: (function () { return _this.sortListRecursively(false); }),
                });
                return [2 /*return*/];
            });
        });
    };
    MyPlugin.prototype.onunload = function () {
        console.log('unloading ' + this.manifest.name);
    };
    MyPlugin.prototype.sortAlphabetically = function (fromCurrentList, ignoreCheckboxes) {
        var _this = this;
        if (fromCurrentList === void 0) { fromCurrentList = false; }
        if (ignoreCheckboxes === void 0) { ignoreCheckboxes = true; }
        var lines = this.getLines(fromCurrentList, ignoreCheckboxes);
        if (lines.length === 0)
            return;
        var sortFunc = function (a, b) { return _this.compare(a.formatted.trim(), b.formatted.trim()); };
        lines.sort(sortFunc);
        this.setLines(lines, fromCurrentList);
    };
    MyPlugin.prototype.sortListRecursively = function (ignoreCheckboxes) {
        var _this = this;
        var inputLines = this.getLines(true, ignoreCheckboxes);
        if (inputLines.length === 0 || inputLines.find(function (line) { return line.source.trim() == ""; }))
            return;
        var firstLineNumber = inputLines.first().lineNumber;
        var lines = __spreadArrays(new Array(firstLineNumber).fill(undefined), inputLines);
        var index = firstLineNumber;
        var cache = this.app.metadataCache.getFileCache(this.app.workspace.getActiveFile());
        var children = [];
        while (index < lines.length) {
            var newChild = this.getSortedListParts(lines, cache.listItems, index);
            children.push(newChild);
            index = newChild.lastLine;
            index++;
        }
        children.sort(function (a, b) { return _this.compare(a.title.formatted.trim(), b.title.formatted.trim()); });
        var res = children.reduce(function (acc, cur) { return acc.concat(_this.listPartToList(cur)); }, []);
        this.setLines(res, true);
    };
    MyPlugin.prototype.getLineCacheFromLine = function (line, linesCache) {
        return linesCache.find(function (cacheItem) { return cacheItem.position.start.line === line; });
    };
    MyPlugin.prototype.getSortedListParts = function (lines, linesCache, index) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        var children = [];
        var startListCache = this.getLineCacheFromLine(index, linesCache);
        var title = lines[index];
        while (startListCache.parent < ((_a = this.getLineCacheFromLine(index + 1, linesCache)) === null || _a === void 0 ? void 0 : _a.parent) || (startListCache.parent < 0 && ((_b = this.getLineCacheFromLine(index + 1, linesCache)) === null || _b === void 0 ? void 0 : _b.parent) >= 0)) {
            index++;
            var newChild = this.getSortedListParts(lines, linesCache, index);
            index = (_c = newChild.lastLine) !== null && _c !== void 0 ? _c : index;
            children.push(newChild);
        }
        var lastLine = (_e = (_d = children.last()) === null || _d === void 0 ? void 0 : _d.lastLine) !== null && _e !== void 0 ? _e : index;
        children.sort(function (a, b) { return _this.compare(a.title.formatted.trim(), b.title.formatted.trim()); });
        return {
            children: children,
            title: title,
            lastLine: lastLine,
        };
    };
    MyPlugin.prototype.listPartToList = function (list) {
        var _this = this;
        return list.children.reduce(function (acc, cur) { return acc.concat(_this.listPartToList(cur)); }, [list.title]);
    };
    MyPlugin.prototype.sortHeadings = function () {
        var lines = this.getLines();
        var res = this.getSortedHeadings(lines, 0, { headingLevel: 0, formatted: "", source: "", lineNumber: -1 });
        this.setLines(this.headingsToString(res).slice(1));
    };
    MyPlugin.prototype.headingsToString = function (heading) {
        var _this = this;
        var list = __spreadArrays([
            heading.title
        ], heading.lines);
        heading.headings.forEach(function (e) { return list.push.apply(list, _this.headingsToString(e)); });
        return list;
    };
    MyPlugin.prototype.getSortedHeadings = function (lines, from, heading) {
        var _this = this;
        var headings = [];
        var contentLines = [];
        var currentIndex = from;
        while (currentIndex < lines.length) {
            var current = lines[currentIndex];
            if (current.headingLevel <= heading.headingLevel) {
                break;
            }
            if (current.headingLevel) {
                headings.push(this.getSortedHeadings(lines, currentIndex + 1, current));
                currentIndex = headings.last().to;
            }
            else {
                contentLines.push(current);
            }
            currentIndex++;
        }
        return {
            lines: contentLines,
            to: headings.length > 0 ? headings.last().to : (currentIndex - 1),
            headings: headings.sort(function (a, b) {
                //First sort by heading level then alphabetically
                var res = a.title.headingLevel - b.title.headingLevel;
                if (res == 0) {
                    return _this.compare(a.title.formatted.trim(), b.title.formatted.trim());
                }
                else {
                    return res;
                }
            }),
            title: heading,
        };
    };
    MyPlugin.prototype.sortLengthOfLine = function () {
        var lines = this.getLines();
        if (lines.length === 0)
            return;
        lines.sort(function (a, b) { return a.formatted.length - b.formatted.length; });
        this.setLines(lines);
    };
    MyPlugin.prototype.permuteReverse = function () {
        var lines = this.getLines();
        if (lines.length === 0)
            return;
        lines.reverse();
        this.setLines(lines);
    };
    MyPlugin.prototype.permuteShuffle = function () {
        var lines = this.getLines();
        if (lines.length === 0)
            return;
        lines.shuffle();
        this.setLines(lines);
    };
    MyPlugin.prototype.getLines = function (fromCurrentList, ignoreCheckboxes) {
        var _a, _b;
        if (fromCurrentList === void 0) { fromCurrentList = false; }
        if (ignoreCheckboxes === void 0) { ignoreCheckboxes = true; }
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!view)
            return;
        var editor = view.editor;
        var file = view.file;
        var lines = editor.getValue().split("\n");
        var cache = this.app.metadataCache.getFileCache(file);
        var _c = this.getPosition(view, fromCurrentList), start = _c.start, end = _c.end;
        var headings = cache.headings;
        var links = __spreadArrays((_a = cache === null || cache === void 0 ? void 0 : cache.links) !== null && _a !== void 0 ? _a : [], (_b = cache === null || cache === void 0 ? void 0 : cache.embeds) !== null && _b !== void 0 ? _b : []);
        var myLines = lines.map(function (line, index) {
            var myLine = { source: line, formatted: line, headingLevel: undefined, lineNumber: index };
            links.forEach(function (e) {
                if (e.position.start.line != index)
                    return;
                var start = e.position.start;
                var end = e.position.end;
                myLine.formatted = myLine.formatted.replace(line.substring(start.col, end.col), e.displayText);
            });
            // Regex of cehckbox styles
            var cbRe = /^(\s*)- \[[^ ]\]/gi;
            if (ignoreCheckboxes) {
                myLine.formatted = myLine.formatted.replace(cbRe, "$1");
            }
            else {
                // Just a little bit dirty...
                myLine.formatted = myLine.formatted.replace(cbRe, "$1ZZZZZZZZZZZZZZZZZZZZZZZZZ");
            }
            return myLine;
        });
        headings === null || headings === void 0 ? void 0 : headings.map(function (heading) { return myLines[heading.position.start.line].headingLevel = heading.level; });
        if (start != end) {
            return myLines.slice(start, end + 1);
        }
        else {
            return myLines;
        }
    };
    MyPlugin.prototype.setLines = function (lines, fromCurrentList) {
        if (fromCurrentList === void 0) { fromCurrentList = false; }
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        var res = this.getPosition(view, fromCurrentList);
        var editor = view.editor;
        if (res.start != res.end) {
            editor.replaceRange(lines.map(function (e) { return e.source; }).join("\n"), { line: res.start, ch: 0 }, { line: res.end, ch: res.endLineLength });
        }
        else {
            editor.setValue(lines.map(function (e) { return e.source; }).join("\n"));
        }
    };
    MyPlugin.prototype.getPosition = function (view, fromCurrentList) {
        var _a, _b, _c;
        if (fromCurrentList === void 0) { fromCurrentList = false; }
        var cache = this.app.metadataCache.getFileCache(view.file);
        var editor = view.editor;
        var cursorStart = editor.getCursor("from").line;
        var cursorEnd = editor.getCursor("to").line;
        if (fromCurrentList) {
            var list = cache.sections.find(function (e) {
                return e.position.start.line <= cursorStart && e.position.end.line >= cursorEnd;
            });
            if (list) {
                cursorStart = list.position.start.line;
                cursorEnd = list.position.end.line;
            }
        }
        var curserEndLineLength = editor.getLine(cursorEnd).length;
        var frontStart = ((_c = (_b = (_a = cache.frontmatter) === null || _a === void 0 ? void 0 : _a.position) === null || _b === void 0 ? void 0 : _b.end) === null || _c === void 0 ? void 0 : _c.line) + 1;
        if (isNaN(frontStart)) {
            frontStart = 0;
        }
        var frontEnd = editor.lastLine();
        var frontEndLineLength = editor.getLine(frontEnd).length;
        if (cursorStart != cursorEnd) {
            return {
                start: cursorStart,
                end: cursorEnd,
                endLineLength: curserEndLineLength,
            };
        }
        else {
            return {
                start: frontStart,
                end: frontEnd,
                endLineLength: frontEndLineLength,
            };
        }
    };
    return MyPlugin;
}(obsidian.Plugin));

module.exports = MyPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XHJcbiAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgTGlzdEl0ZW1DYWNoZSwgTWFya2Rvd25WaWV3LCBQbHVnaW4gfSBmcm9tICdvYnNpZGlhbic7XG5cbmludGVyZmFjZSBzb3J0TWV0aG9kIHtcblx0KHg6IHN0cmluZywgeTogc3RyaW5nKTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgTXlMaW5lIHtcblx0c291cmNlOiBzdHJpbmc7XG5cdGZvcm1hdHRlZDogc3RyaW5nO1xuXHRoZWFkaW5nTGV2ZWw6IG51bWJlciB8IHVuZGVmaW5lZDtcblx0bGluZU51bWJlcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSGVhZGluZ1BhcnQge1xuXHR0bzogbnVtYmVyO1xuXHR0aXRsZTogTXlMaW5lO1xuXHRsaW5lczogTXlMaW5lW107XG5cdGhlYWRpbmdzOiBIZWFkaW5nUGFydFtdO1xufVxuXG5pbnRlcmZhY2UgTGlzdFBhcnQge1xuXHRjaGlsZHJlbjogTGlzdFBhcnRbXTtcblx0dGl0bGU6IE15TGluZTtcblx0bGFzdExpbmU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuXHRjb21wYXJlOiBzb3J0TWV0aG9kO1xuXHRhc3luYyBvbmxvYWQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgJyArIHRoaXMubWFuaWZlc3QubmFtZSk7XG5cblx0XHRjb25zdCB7IGNvbXBhcmUgfSA9IG5ldyBJbnRsLkNvbGxhdG9yKG5hdmlnYXRvci5sYW5ndWFnZSwge1xuXHRcdFx0dXNhZ2U6ICdzb3J0Jyxcblx0XHRcdHNlbnNpdGl2aXR5OiAnYmFzZScsXG5cdFx0XHRudW1lcmljOiB0cnVlLFxuXHRcdFx0aWdub3JlUHVuY3R1YXRpb246IHRydWUsXG5cdFx0fSk7XG5cdFx0dGhpcy5jb21wYXJlID0gY29tcGFyZTtcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdzb3J0LWFscGhhYmV0aWNhbGx5LXdpdGgtY2hlY2tib3hlcycsXG5cdFx0XHRuYW1lOiAnU29ydCBhbHBoYWJldGljYWxseSB3aXRoIGNoZWNrYm94ZXMnLFxuXHRcdFx0Y2FsbGJhY2s6ICgoKSA9PiB0aGlzLnNvcnRBbHBoYWJldGljYWxseShmYWxzZSwgZmFsc2UpKSxcblx0XHR9KTtcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdzb3J0LWxpc3QtYWxwaGFiZXRpY2FsbHktd2l0aC1jaGVja2JveGVzJyxcblx0XHRcdG5hbWU6ICdTb3J0IGN1cnJlbnQgbGlzdCBhbHBoYWJldGljYWxseSB3aXRoIGNoZWNrYm94ZXMnLFxuXHRcdFx0Y2FsbGJhY2s6ICgoKSA9PiB0aGlzLnNvcnRBbHBoYWJldGljYWxseSh0cnVlLCBmYWxzZSkpLFxuXHRcdH0pO1xuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ3NvcnQtYWxwaGFiZXRpY2FsbHknLFxuXHRcdFx0bmFtZTogJ1NvcnQgYWxwaGFiZXRpY2FsbHknLFxuXHRcdFx0Y2FsbGJhY2s6ICgoKSA9PiB0aGlzLnNvcnRBbHBoYWJldGljYWxseShmYWxzZSwgdHJ1ZSkpLFxuXHRcdH0pO1xuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ3NvcnQtbGlzdC1hbHBoYWJldGljYWxseScsXG5cdFx0XHRuYW1lOiAnU29ydCBjdXJyZW50IGxpc3QgYWxwaGFiZXRpY2FsbHknLFxuXHRcdFx0Y2FsbGJhY2s6ICgoKSA9PiB0aGlzLnNvcnRBbHBoYWJldGljYWxseSh0cnVlLCB0cnVlKSksXG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnc29ydC1sZW5ndGgnLFxuXHRcdFx0bmFtZTogJ1NvcnQgYnkgbGVuZ3RoIG9mIGxpbmUnLFxuXHRcdFx0Y2FsbGJhY2s6ICgoKSA9PiB0aGlzLnNvcnRMZW5ndGhPZkxpbmUoKSksXG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAnc29ydC1oZWFkaW5ncycsXG5cdFx0XHRuYW1lOiAnU29ydCBoZWFkaW5ncycsXG5cdFx0XHRjYWxsYmFjazogKCgpID0+IHRoaXMuc29ydEhlYWRpbmdzKCkpLFxuXHRcdH0pO1xuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ3Blcm11dGUtcmV2ZXJzZScsXG5cdFx0XHRuYW1lOiAnUmV2ZXJzZSBsaW5lcycsXG5cdFx0XHRjYWxsYmFjazogKCgpID0+IHRoaXMucGVybXV0ZVJldmVyc2UoKSksXG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiAncGVybXV0ZS1zaHVmZmxlJyxcblx0XHRcdG5hbWU6ICdTaHVmZmxlIGxpbmVzJyxcblx0XHRcdGNhbGxiYWNrOiAoKCkgPT4gdGhpcy5wZXJtdXRlU2h1ZmZsZSgpKSxcblx0XHR9KTtcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdzb3J0LWxpc3QtcmVjdXJzaXZlbHknLFxuXHRcdFx0bmFtZTogJ1NvcnQgY3VycmVudCBsaXN0IHJlY3Vyc2l2ZWx5Jyxcblx0XHRcdGNhbGxiYWNrOiAoKCkgPT4gdGhpcy5zb3J0TGlzdFJlY3Vyc2l2ZWx5KHRydWUpKSxcblx0XHR9KTtcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdzb3J0LWxpc3QtcmVjdXJzaXZlbHktd2l0aC1jaGVja2JveGVzJyxcblx0XHRcdG5hbWU6ICdTb3J0IGN1cnJlbnQgbGlzdCByZWN1cnNpdmVseSB3aXRoIGNoZWNrYm94ZXMnLFxuXHRcdFx0Y2FsbGJhY2s6ICgoKSA9PiB0aGlzLnNvcnRMaXN0UmVjdXJzaXZlbHkoZmFsc2UpKSxcblx0XHR9KTtcblxuXHR9XG5cblx0b251bmxvYWQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3VubG9hZGluZyAnICsgdGhpcy5tYW5pZmVzdC5uYW1lKTtcblx0fVxuXG5cblx0c29ydEFscGhhYmV0aWNhbGx5KGZyb21DdXJyZW50TGlzdCA9IGZhbHNlLCBpZ25vcmVDaGVja2JveGVzID0gdHJ1ZSkge1xuXHRcdGNvbnN0IGxpbmVzID0gdGhpcy5nZXRMaW5lcyhmcm9tQ3VycmVudExpc3QsIGlnbm9yZUNoZWNrYm94ZXMpO1xuXHRcdGlmIChsaW5lcy5sZW5ndGggPT09IDApIHJldHVybjtcblx0XHRsZXQgc29ydEZ1bmMgPSAoYTogTXlMaW5lLCBiOiBNeUxpbmUpID0+IHRoaXMuY29tcGFyZShhLmZvcm1hdHRlZC50cmltKCksIGIuZm9ybWF0dGVkLnRyaW0oKSk7XG5cblx0XHRsaW5lcy5zb3J0KHNvcnRGdW5jKTtcblx0XHR0aGlzLnNldExpbmVzKGxpbmVzLCBmcm9tQ3VycmVudExpc3QpO1xuXHR9XG5cblx0c29ydExpc3RSZWN1cnNpdmVseShpZ25vcmVDaGVja2JveGVzOiBib29sZWFuKSB7XG5cdFx0Y29uc3QgaW5wdXRMaW5lcyA9IHRoaXMuZ2V0TGluZXModHJ1ZSwgaWdub3JlQ2hlY2tib3hlcyk7XG5cblx0XHRpZiAoaW5wdXRMaW5lcy5sZW5ndGggPT09IDAgfHwgaW5wdXRMaW5lcy5maW5kKGxpbmUgPT4gbGluZS5zb3VyY2UudHJpbSgpID09IFwiXCIpKSByZXR1cm47XG5cdFx0Y29uc3QgZmlyc3RMaW5lTnVtYmVyID0gaW5wdXRMaW5lcy5maXJzdCgpLmxpbmVOdW1iZXI7XG5cdFx0Y29uc3QgbGluZXMgPSBbLi4ubmV3IEFycmF5KGZpcnN0TGluZU51bWJlcikuZmlsbCh1bmRlZmluZWQpLCAuLi5pbnB1dExpbmVzXTtcblx0XHRsZXQgaW5kZXggPSBmaXJzdExpbmVOdW1iZXI7XG5cblx0XHRjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCkpO1xuXHRcdGNvbnN0IGNoaWxkcmVuOiBMaXN0UGFydFtdID0gW107XG5cblx0XHR3aGlsZSAoaW5kZXggPCBsaW5lcy5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IG5ld0NoaWxkID0gdGhpcy5nZXRTb3J0ZWRMaXN0UGFydHMobGluZXMsIGNhY2hlLmxpc3RJdGVtcywgaW5kZXgpO1xuXHRcdFx0Y2hpbGRyZW4ucHVzaChuZXdDaGlsZCk7XG5cdFx0XHRpbmRleCA9IG5ld0NoaWxkLmxhc3RMaW5lO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdH1cblx0XHRjaGlsZHJlbi5zb3J0KChhLCBiKSA9PiB0aGlzLmNvbXBhcmUoYS50aXRsZS5mb3JtYXR0ZWQudHJpbSgpLCBiLnRpdGxlLmZvcm1hdHRlZC50cmltKCkpKTtcblxuXHRcdGNvbnN0IHJlcyA9IGNoaWxkcmVuLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYy5jb25jYXQodGhpcy5saXN0UGFydFRvTGlzdChjdXIpKSwgW10pO1xuXHRcdHRoaXMuc2V0TGluZXMocmVzLCB0cnVlKTtcblx0fVxuXG5cdGdldExpbmVDYWNoZUZyb21MaW5lKGxpbmU6IG51bWJlciwgbGluZXNDYWNoZTogTGlzdEl0ZW1DYWNoZVtdKTogTGlzdEl0ZW1DYWNoZSB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIGxpbmVzQ2FjaGUuZmluZChjYWNoZUl0ZW0gPT4gY2FjaGVJdGVtLnBvc2l0aW9uLnN0YXJ0LmxpbmUgPT09IGxpbmUpO1xuXHR9XG5cblx0Z2V0U29ydGVkTGlzdFBhcnRzKGxpbmVzOiBNeUxpbmVbXSwgbGluZXNDYWNoZTogTGlzdEl0ZW1DYWNoZVtdLCBpbmRleDogbnVtYmVyKTogTGlzdFBhcnQge1xuXHRcdGNvbnN0IGNoaWxkcmVuOiBMaXN0UGFydFtdID0gW107XG5cdFx0Y29uc3Qgc3RhcnRMaXN0Q2FjaGUgPSB0aGlzLmdldExpbmVDYWNoZUZyb21MaW5lKGluZGV4LCBsaW5lc0NhY2hlKTtcblxuXHRcdGNvbnN0IHRpdGxlID0gbGluZXNbaW5kZXhdO1xuXG5cdFx0d2hpbGUgKHN0YXJ0TGlzdENhY2hlLnBhcmVudCA8IHRoaXMuZ2V0TGluZUNhY2hlRnJvbUxpbmUoaW5kZXggKyAxLCBsaW5lc0NhY2hlKT8ucGFyZW50IHx8IChzdGFydExpc3RDYWNoZS5wYXJlbnQgPCAwICYmIHRoaXMuZ2V0TGluZUNhY2hlRnJvbUxpbmUoaW5kZXggKyAxLCBsaW5lc0NhY2hlKT8ucGFyZW50ID49IDApKSB7XG5cdFx0XHRpbmRleCsrO1xuXG5cdFx0XHRjb25zdCBuZXdDaGlsZCA9IHRoaXMuZ2V0U29ydGVkTGlzdFBhcnRzKGxpbmVzLCBsaW5lc0NhY2hlLCBpbmRleCk7XG5cblx0XHRcdGluZGV4ID0gbmV3Q2hpbGQubGFzdExpbmUgPz8gaW5kZXg7XG5cdFx0XHRjaGlsZHJlbi5wdXNoKG5ld0NoaWxkKTtcblx0XHR9O1xuXHRcdGNvbnN0IGxhc3RMaW5lID0gY2hpbGRyZW4ubGFzdCgpPy5sYXN0TGluZSA/PyBpbmRleDtcblxuXHRcdGNoaWxkcmVuLnNvcnQoKGEsIGIpID0+IHRoaXMuY29tcGFyZShhLnRpdGxlLmZvcm1hdHRlZC50cmltKCksIGIudGl0bGUuZm9ybWF0dGVkLnRyaW0oKSkpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGlsZHJlbjogY2hpbGRyZW4sXG5cdFx0XHR0aXRsZTogdGl0bGUsXG5cdFx0XHRsYXN0TGluZTogbGFzdExpbmUsXG5cdFx0fTtcblx0fVxuXG5cdGxpc3RQYXJ0VG9MaXN0KGxpc3Q6IExpc3RQYXJ0KTogTXlMaW5lW10ge1xuXHRcdHJldHVybiBsaXN0LmNoaWxkcmVuLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYy5jb25jYXQodGhpcy5saXN0UGFydFRvTGlzdChjdXIpKSwgW2xpc3QudGl0bGVdKTtcblx0fVxuXG5cdHNvcnRIZWFkaW5ncygpIHtcblx0XHRjb25zdCBsaW5lcyA9IHRoaXMuZ2V0TGluZXMoKTtcblx0XHRjb25zdCByZXMgPSB0aGlzLmdldFNvcnRlZEhlYWRpbmdzKGxpbmVzLCAwLCB7IGhlYWRpbmdMZXZlbDogMCwgZm9ybWF0dGVkOiBcIlwiLCBzb3VyY2U6IFwiXCIsIGxpbmVOdW1iZXI6IC0xIH0pO1xuXHRcdHRoaXMuc2V0TGluZXModGhpcy5oZWFkaW5nc1RvU3RyaW5nKHJlcykuc2xpY2UoMSkpO1xuXHR9XG5cblx0aGVhZGluZ3NUb1N0cmluZyhoZWFkaW5nOiBIZWFkaW5nUGFydCk6IE15TGluZVtdIHtcblx0XHRjb25zdCBsaXN0ID0gW1xuXHRcdFx0aGVhZGluZy50aXRsZSxcblx0XHRcdC4uLmhlYWRpbmcubGluZXNcblx0XHRdO1xuXHRcdGhlYWRpbmcuaGVhZGluZ3MuZm9yRWFjaCgoZSkgPT4gbGlzdC5wdXNoKC4uLnRoaXMuaGVhZGluZ3NUb1N0cmluZyhlKSkpO1xuXHRcdHJldHVybiBsaXN0O1xuXHR9XG5cblx0Z2V0U29ydGVkSGVhZGluZ3MobGluZXM6IE15TGluZVtdLCBmcm9tOiBudW1iZXIsIGhlYWRpbmc6IE15TGluZSk6IEhlYWRpbmdQYXJ0IHtcblx0XHRsZXQgaGVhZGluZ3M6IEhlYWRpbmdQYXJ0W10gPSBbXTtcblx0XHRsZXQgY29udGVudExpbmVzOiBNeUxpbmVbXSA9IFtdO1xuXHRcdGxldCBjdXJyZW50SW5kZXggPSBmcm9tO1xuXHRcdHdoaWxlIChjdXJyZW50SW5kZXggPCBsaW5lcy5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBsaW5lc1tjdXJyZW50SW5kZXhdO1xuXHRcdFx0aWYgKGN1cnJlbnQuaGVhZGluZ0xldmVsIDw9IGhlYWRpbmcuaGVhZGluZ0xldmVsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY3VycmVudC5oZWFkaW5nTGV2ZWwpIHtcblxuXG5cdFx0XHRcdGhlYWRpbmdzLnB1c2godGhpcy5nZXRTb3J0ZWRIZWFkaW5ncyhsaW5lcywgY3VycmVudEluZGV4ICsgMSwgY3VycmVudCkpO1xuXHRcdFx0XHRjdXJyZW50SW5kZXggPSBoZWFkaW5ncy5sYXN0KCkudG87XG5cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGVudExpbmVzLnB1c2goY3VycmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRJbmRleCsrO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRsaW5lczogY29udGVudExpbmVzLFxuXHRcdFx0dG86IGhlYWRpbmdzLmxlbmd0aCA+IDAgPyBoZWFkaW5ncy5sYXN0KCkudG8gOiAoY3VycmVudEluZGV4IC0gMSksXG5cdFx0XHRoZWFkaW5nczogaGVhZGluZ3Muc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHQvL0ZpcnN0IHNvcnQgYnkgaGVhZGluZyBsZXZlbCB0aGVuIGFscGhhYmV0aWNhbGx5XG5cdFx0XHRcdGNvbnN0IHJlcyA9IGEudGl0bGUuaGVhZGluZ0xldmVsIC0gYi50aXRsZS5oZWFkaW5nTGV2ZWw7XG5cdFx0XHRcdGlmIChyZXMgPT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNvbXBhcmUoYS50aXRsZS5mb3JtYXR0ZWQudHJpbSgpLCBiLnRpdGxlLmZvcm1hdHRlZC50cmltKCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0dGl0bGU6IGhlYWRpbmcsXG5cdFx0fTtcblx0fVxuXG5cblx0c29ydExlbmd0aE9mTGluZSgpIHtcblx0XHRjb25zdCBsaW5lcyA9IHRoaXMuZ2V0TGluZXMoKTtcblx0XHRpZiAobGluZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cdFx0bGluZXMuc29ydCgoYSwgYikgPT4gYS5mb3JtYXR0ZWQubGVuZ3RoIC0gYi5mb3JtYXR0ZWQubGVuZ3RoKTtcblxuXHRcdHRoaXMuc2V0TGluZXMobGluZXMpO1xuXHR9XG5cblx0cGVybXV0ZVJldmVyc2UoKSB7XG5cdFx0Y29uc3QgbGluZXMgPSB0aGlzLmdldExpbmVzKCk7XG5cdFx0aWYgKGxpbmVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXHRcdGxpbmVzLnJldmVyc2UoKTtcblx0XHR0aGlzLnNldExpbmVzKGxpbmVzKTtcblx0fVxuXG5cdHBlcm11dGVTaHVmZmxlKCkge1xuXHRcdGNvbnN0IGxpbmVzID0gdGhpcy5nZXRMaW5lcygpO1xuXHRcdGlmIChsaW5lcy5sZW5ndGggPT09IDApIHJldHVybjtcblx0XHRsaW5lcy5zaHVmZmxlKCk7XG5cdFx0dGhpcy5zZXRMaW5lcyhsaW5lcyk7XG5cdH1cblxuXHRnZXRMaW5lcyhmcm9tQ3VycmVudExpc3QgPSBmYWxzZSwgaWdub3JlQ2hlY2tib3hlcyA9IHRydWUpOiBNeUxpbmVbXSB7XG5cdFx0Y29uc3QgdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG5cdFx0aWYgKCF2aWV3KVxuXHRcdFx0cmV0dXJuO1xuXHRcdGNvbnN0IGVkaXRvciA9IHZpZXcuZWRpdG9yO1xuXHRcdGNvbnN0IGZpbGUgPSB2aWV3LmZpbGU7XG5cdFx0bGV0IGxpbmVzID0gZWRpdG9yLmdldFZhbHVlKCkuc3BsaXQoXCJcXG5cIik7XG5cdFx0Y29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcblx0XHRjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHRoaXMuZ2V0UG9zaXRpb24odmlldywgZnJvbUN1cnJlbnRMaXN0KTtcblxuXHRcdGNvbnN0IGhlYWRpbmdzID0gY2FjaGUuaGVhZGluZ3M7XG5cdFx0Y29uc3QgbGlua3MgPSBbLi4uY2FjaGU/LmxpbmtzID8/IFtdLCAuLi5jYWNoZT8uZW1iZWRzID8/IFtdXTtcblx0XHRjb25zdCBteUxpbmVzID0gbGluZXMubWFwKChsaW5lLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3QgbXlMaW5lOiBNeUxpbmUgPSB7IHNvdXJjZTogbGluZSwgZm9ybWF0dGVkOiBsaW5lLCBoZWFkaW5nTGV2ZWw6IHVuZGVmaW5lZCwgbGluZU51bWJlcjogaW5kZXggfTtcblx0XHRcdGxpbmtzLmZvckVhY2goZSA9PiB7XG5cdFx0XHRcdGlmIChlLnBvc2l0aW9uLnN0YXJ0LmxpbmUgIT0gaW5kZXgpIHJldHVybjtcblx0XHRcdFx0Y29uc3Qgc3RhcnQgPSBlLnBvc2l0aW9uLnN0YXJ0O1xuXHRcdFx0XHRjb25zdCBlbmQgPSBlLnBvc2l0aW9uLmVuZDtcblx0XHRcdFx0bXlMaW5lLmZvcm1hdHRlZCA9IG15TGluZS5mb3JtYXR0ZWQucmVwbGFjZShsaW5lLnN1YnN0cmluZyhzdGFydC5jb2wsIGVuZC5jb2wpLCBlLmRpc3BsYXlUZXh0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBSZWdleCBvZiBjZWhja2JveCBzdHlsZXNcblx0XHRcdGNvbnN0IGNiUmUgPSAvXihcXHMqKS0gXFxbW14gXVxcXS9naTtcblx0XHRcdGlmIChpZ25vcmVDaGVja2JveGVzKSB7XG5cdFx0XHRcdG15TGluZS5mb3JtYXR0ZWQgPSBteUxpbmUuZm9ybWF0dGVkLnJlcGxhY2UoY2JSZSwgXCIkMVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEp1c3QgYSBsaXR0bGUgYml0IGRpcnR5Li4uXG5cdFx0XHRcdG15TGluZS5mb3JtYXR0ZWQgPSBteUxpbmUuZm9ybWF0dGVkLnJlcGxhY2UoY2JSZSwgXCIkMVpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpcIik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBteUxpbmU7XG5cdFx0fSk7XG5cblx0XHRoZWFkaW5ncz8ubWFwKChoZWFkaW5nKSA9PiBteUxpbmVzW2hlYWRpbmcucG9zaXRpb24uc3RhcnQubGluZV0uaGVhZGluZ0xldmVsID0gaGVhZGluZy5sZXZlbCk7XG5cblx0XHRpZiAoc3RhcnQgIT0gZW5kKSB7XG5cdFx0XHRyZXR1cm4gbXlMaW5lcy5zbGljZShzdGFydCwgZW5kICsgMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBteUxpbmVzO1xuXHRcdH1cblx0fVxuXG5cdHNldExpbmVzKGxpbmVzOiBNeUxpbmVbXSwgZnJvbUN1cnJlbnRMaXN0OiBib29sZWFuID0gZmFsc2UpIHtcblx0XHRjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcblx0XHRjb25zdCByZXMgPSB0aGlzLmdldFBvc2l0aW9uKHZpZXcsIGZyb21DdXJyZW50TGlzdCk7XG5cblx0XHRjb25zdCBlZGl0b3IgPSB2aWV3LmVkaXRvcjtcblx0XHRpZiAocmVzLnN0YXJ0ICE9IHJlcy5lbmQpIHtcblx0XHRcdGVkaXRvci5yZXBsYWNlUmFuZ2UobGluZXMubWFwKGUgPT4gZS5zb3VyY2UpLmpvaW4oXCJcXG5cIiksIHsgbGluZTogcmVzLnN0YXJ0LCBjaDogMCB9LCB7IGxpbmU6IHJlcy5lbmQsIGNoOiByZXMuZW5kTGluZUxlbmd0aCB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWRpdG9yLnNldFZhbHVlKGxpbmVzLm1hcChlID0+IGUuc291cmNlKS5qb2luKFwiXFxuXCIpKTtcblx0XHR9XG5cdH1cblxuXHRnZXRQb3NpdGlvbih2aWV3OiBNYXJrZG93blZpZXcsIGZyb21DdXJyZW50TGlzdDogYm9vbGVhbiA9IGZhbHNlKTogeyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlcjsgZW5kTGluZUxlbmd0aDogbnVtYmVyOyB9IHwgdW5kZWZpbmVkIHtcblx0XHRjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKHZpZXcuZmlsZSk7XG5cdFx0Y29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3I7XG5cblx0XHRsZXQgY3Vyc29yU3RhcnQgPSBlZGl0b3IuZ2V0Q3Vyc29yKFwiZnJvbVwiKS5saW5lO1xuXHRcdGxldCBjdXJzb3JFbmQgPSBlZGl0b3IuZ2V0Q3Vyc29yKFwidG9cIikubGluZTtcblx0XHRpZiAoZnJvbUN1cnJlbnRMaXN0KSB7XG5cdFx0XHRjb25zdCBsaXN0ID0gY2FjaGUuc2VjdGlvbnMuZmluZCgoZSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZS5wb3NpdGlvbi5zdGFydC5saW5lIDw9IGN1cnNvclN0YXJ0ICYmIGUucG9zaXRpb24uZW5kLmxpbmUgPj0gY3Vyc29yRW5kO1xuXHRcdFx0fSk7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRjdXJzb3JTdGFydCA9IGxpc3QucG9zaXRpb24uc3RhcnQubGluZTtcblx0XHRcdFx0Y3Vyc29yRW5kID0gbGlzdC5wb3NpdGlvbi5lbmQubGluZTtcblx0XHRcdH1cblxuXHRcdH1cblx0XHRjb25zdCBjdXJzZXJFbmRMaW5lTGVuZ3RoID0gZWRpdG9yLmdldExpbmUoY3Vyc29yRW5kKS5sZW5ndGg7XG5cdFx0bGV0IGZyb250U3RhcnQgPSBjYWNoZS5mcm9udG1hdHRlcj8ucG9zaXRpb24/LmVuZD8ubGluZSArIDE7XG5cdFx0aWYgKGlzTmFOKGZyb250U3RhcnQpKSB7XG5cdFx0XHRmcm9udFN0YXJ0ID0gMDtcblx0XHR9XG5cblx0XHRjb25zdCBmcm9udEVuZCA9IGVkaXRvci5sYXN0TGluZSgpO1xuXHRcdGNvbnN0IGZyb250RW5kTGluZUxlbmd0aCA9IGVkaXRvci5nZXRMaW5lKGZyb250RW5kKS5sZW5ndGg7XG5cblx0XHRpZiAoY3Vyc29yU3RhcnQgIT0gY3Vyc29yRW5kKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGFydDogY3Vyc29yU3RhcnQsXG5cdFx0XHRcdGVuZDogY3Vyc29yRW5kLFxuXHRcdFx0XHRlbmRMaW5lTGVuZ3RoOiBjdXJzZXJFbmRMaW5lTGVuZ3RoLFxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhcnQ6IGZyb250U3RhcnQsXG5cdFx0XHRcdGVuZDogZnJvbnRFbmQsXG5cdFx0XHRcdGVuZExpbmVMZW5ndGg6IGZyb250RW5kTGluZUxlbmd0aCxcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59Il0sIm5hbWVzIjpbIk1hcmtkb3duVmlldyIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO0FBQ3RELFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FB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
