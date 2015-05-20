function decisionTree(examples, attrs, values) {
    var root = {children: [], examples: examples, selector: "*"};
    var iter = function(examples, attrs, node) {
        if (examples.every(function(example) {return example.playTennis;})) {
            node.children.push({selector: '+'});
        } else if (examples.every(function(example) {return !example.playTennis;})) {
            node.children.push({selector: '-'});
        } else if (attrs.length == 0){
            return null;
        } else {
            var attr = attrs.shift();
            Object.keys(values[attr]).forEach(function(k) {
                var val = values[attr][k];
                var selector = attr + "=" + val;
                var subexamples = examples.filter(function(el) {
                    return el[attr] == val;
                });
                var child = {selector: selector, examples: subexamples, children: []};
                iter(subexamples, attrs, child);
                node.children.push(child);
            });
            return node;
        }
    };
    return iter(examples, attrs, root);
}

function tree2line(tree) {
    var lines = [];
    var iter = function(node, line) {
        if (!lines[line]) {
            lines[line] = [];
        }
        lines[line].push(node);
        if (!node.children) return;
        node.children.forEach(function(child) {
            iter(child, line + 1);
        });
    };
    iter(tree, 0);
    return lines;
}

function setup() {
    noCanvas();
    fill(0);
    background(245);
    textAlign(CENTER);
}

function draw() {
    noLoop();
    var tree = decisionTree(window.data, ["outlook", "temperature", "humidity", "wind"], window.values);
    var iter = function(tree) {
        if (tree.examples) {
            tree.play = tree.examples.filter(function(el) { return el.playTennis; }).length;
            tree.dontPlay = tree.examples.filter(function(el) { return !el.playTennis; }).length;
            // tree.examples = null;
        }
        if (tree.children) {
            tree.children.forEach(iter);
        }
    };
    iter(tree);
    console.log(tree);
    $('#json').JSONView(tree);
}
