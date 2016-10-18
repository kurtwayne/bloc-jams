function forEach(x, y) {
    for (var i = 0; i < x.length; i++) {
        y(x[i]);
    }
};