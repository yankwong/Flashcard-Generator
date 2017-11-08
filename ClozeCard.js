function ClozeCard(text, cloze) {
  if (this instanceof ClozeCard) {
    this.cloze    = cloze;
    this.fullText = text;
    this.partial;

    var re = new RegExp(cloze, 'g');

    if (text.indexOf(cloze) === -1) {
      console.log('ERROR');
      this.partial = -1;
    }
    else {
      this.partial = text.replace(re, '...');
    }
  }
  else {
    return new ClozeCard(text, cloze);
  }

  /*
  * The constructor should throw or log an error when 
  * the cloze deletion does _not_ appear in the input text.
  */

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