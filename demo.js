function decisionTree(examples, attrs, values) {
    var iter = function(examples, attrs, node) {
        if (examples.every(function(example) {return example.playTennis;})) {
            return {label: '+'};
        } else if (examples.every(function(example) {return !example.playTennis;})) {
            return {label: '-'};
        } else if (attrs.length == 0){
            return null;
        } else {
            var attr = attrs.shift();
            Object.keys(values[attr]).forEach(function(k) {
                var val = values[attr][k];
                node[attr + "=" + val] = iter(examples.filter(function(el) {
                    return el[attr] == val;
                }), attrs, {});
            });
            return node;
        }
    };
    return iter(examples, attrs, {});
}

function drawTree(tree) {
}

function setup() {
    createCanvas(800, 400);
}

function draw() {
    noLoop();
    background(200);
    var tree = decisionTree(window.data, ["outlook", "temperature", "humidity", "wind"], window.values);
    console.log(tree);
}
