var all = document.querySelectorAll('*');

var o = {};

var el = document.getElementsByTagName('*');
var body = document.querySelector("html"),
    countText = 0,
    countClass = 0,
    countTag = 0;
    var tagName;
    var className;
function scanNode(nodes) {
    nodes = nodes.childNodes

    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeType === 3) {
            countText++;
        } else
        if (nodes[i].nodeType === 1) {
            tagName = nodes[i].tagName;
            countTag++;
            className = nodes[i].classList;
            if (className.length > 0) {
                for (var key in className) {
                   if(typeof className[key] !== "function" && typeof className[key] !== "number") {
                        countClass++
                    }
                }
            }
        }
        scanNode(nodes[i])
    }
}


scanNode(body)

console.log(countText + " - текстовых узлов; "  + 
        countClass + " - классов; ", countTag + " тегов")






