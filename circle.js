function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
Circle.prototype.isOverlapped = function (circle) {
    var total = Math.sqrt(Math.pow((this.x + this.y), 2) + Math.pow((circle.x + circle.y), 2));
    var radiusD = this.radius + circle.radius;
    var radiusA = this.radius - circle.radius;
    console.log('Total ne: ' ,total);
    console.log('Radius ne: ' , radiusD);
    console.log('Radius Am ne', radiusA)
    // Nam len nhau: -1
    if(total === radiusA || total === radiusD) return -1;
    if(total > radiusA || total < radiusD) return 1;
    return 0;
}

module.exports = Circle;