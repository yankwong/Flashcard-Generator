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
}


module.exports = ClozeCard;