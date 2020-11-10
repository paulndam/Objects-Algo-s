class Group {
  constructor () {
    this.players = [];
  }
  // adds value into group class

  add (value) {
    if (!this.has (value)) {
      this.players.push (value);
    }
  }
  //rmoves value into group class
  delete (value) {
    this.players = this.players.filter (p => p !== value);
  }
  // check to see if value is already in class
  has (value) {
    return this.players.includes (value);
  }
  // creating new group and the iterating thru the group so as to get the elements from that group
  static from (collect) {
    let group = new Group ();
    for (let value of collect) {
      group.add (value);
    }
    return group;
  }
}

let group = Group.from ([18, 19, 20, 21, 22, 23, 24, 25]);
console.log (group.has (10));
console.log (group.has (22));
group.add (17);
group.add (16);
group.delete (16);
console.log (group.has (16));
