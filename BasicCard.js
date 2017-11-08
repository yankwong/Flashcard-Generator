function BasicCard(front, back) {
  if (this instanceof BasicCard) {
    this.front  = front;
    this.back   = back;
  }
  else {
    return new BasicCard(front, back);
  }
}

module.exports = BasicCard;

/*
* Write your constructors such that users can call them with or without the `new` keyword. 
* Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.
*/