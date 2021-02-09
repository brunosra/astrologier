const signsDictionary = require('./data/signs.json');
const wordsDictionary = require('./data/words.json');

const getRandom = (num) => Math.floor(Math.random()*num);

const signs = Object.keys(signsDictionary);

signs.forEach(sign => {
  let icon = signsDictionary[sign].symbol;
  let name = signsDictionary[sign].name;

  console.log("#################");
  console.log(`${icon} - ${name}`);

  const auxVerb = wordsDictionary["auxVerbs"][getRandom(wordsDictionary["auxVerbs"].length)];
  const verb = wordsDictionary["verbs"][getRandom(wordsDictionary["verbs"].length)];
  const adverb = wordsDictionary["adverbs"][getRandom(wordsDictionary["adverbs"].length)];
  const adjective = wordsDictionary["adjectives"][getRandom(wordsDictionary["adjectives"].length)];
  const noun = wordsDictionary["nouns"][getRandom(wordsDictionary["nouns"].length)];

  console.log(`You ${auxVerb} ${verb} ${adverb} ${adjective} ${noun}!`);
});