function ClozeCard(text, cloze) {
  if (this instanceof ClozeCard) {
    this.cloze    = cloze;
    this.fullText = text;
    this.partial;

    var re = new RegExp(cloze, 'g');

    if (text.indexOf(cloze) === -1) {
      console.log('ERROR');
      this.partial = null;
    }
    else {
      this.partial = text.replace(re, '...');
    }
  }
  else {
    return new ClozeCard(text, cloze);
  }

  //* Use prototypes to attach these methods, wherever possible.
}

// ClozeCard.prototype.partial = setPartial(this.fullText, this.cloze);

// function setPartial(text, cloze) {
//   if (text.indexOf(cloze) === -1) {
//     throw new Error("ERROR!!");
//   }
//   else {
//     var re = new RegExp(this.cloze, 'g');
//     return text.replace(re, '...');
//   }
// }

module.exports = ClozeCard;