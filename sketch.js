let a, b, c, d;
let s = [];
let p = [];

function setup() {
  createCanvas(500, 500);
  a = createVector(10, 10);
  b = createVector(490, 10);
  c = createVector(490, 490);
  d = createVector(10, 490);
  p.push(a, b, c, d);
  s.push(new Segment(a, b), new Segment(b, c), new Segment(c, d), new Segment(d, a));
}

function draw() {
  background(255);
  for (let seg of s) {
    seg.draw();
  }
}

function mousePressed() {
  for(let i =0;i < 5;i++){
    let mousep = createVector(10 + int(random(width - 20)), 10 + int(random(height - 20)));
  let newS = new Segment(mousep, getRandomPoint());

  while (intersect(newS)) {
    newS = new Segment(mousep, getRandomPoint());
  }
  s.push(newS);
  p.push(mousep);
    
  }
  
}

function intersect(s2) {
  for (let seg of s) {
    if (seg.intersects(s2)) {
      return true;
    }
  }
  return false;
}

function getRandomPoint() {
  let randomIndex = int(random(p.length));
  return p[randomIndex];
}

class Segment {
  constructor(start, end) {
    this.p1 = start;
    this.p2 = end;
  }

  draw() {
    line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
  }

  intersects(other) {
    if (
      this.p1.equals(other.p1) ||
      this.p1.equals(other.p2) ||
      this.p2.equals(other.p1) ||
      this.p2.equals(other.p2)
    ) {
      return false;
    }

    let o1 = this.orientation(this.p1, this.p2, other.p1);
    let o2 = this.orientation(this.p1, this.p2, other.p2);
    let o3 = this.orientation(other.p1, other.p2, this.p1);
    let o4 = this.orientation(other.p1, other.p2, this.p2);

    if (o1 !== o2 && o3 !== o4) {
      return true;
    }

    if (o1 === 0 && this.onSegment(this.p1, other.p1, this.p2)) return true;
    if (o2 === 0 && this.onSegment(this.p1, other.p2, this.p2)) return true;
    if (o3 === 0 && this.onSegment(other.p1, this.p1, other.p2)) return true;
    if (o4 === 0 && this.onSegment(other.p1, this.p2, other.p2)) return true;

    return false;
  }

  orientation(p, q, r) {
    let val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    if (val === 0) return 0;
    return val > 0 ? 1 : 2;
  }

  onSegment(p, q, r) {
    return (
      q.x <= max(p.x, r.x) &&
      q.x >= min(p.x, r.x) &&
      q.y <= max(p.y, r.y) &&
      q.y >= min(p.y, r.y)
    );
  }
}
