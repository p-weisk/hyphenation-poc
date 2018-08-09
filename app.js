const Hyphenation = require('./node_modules/hypher/lib/hypher.js'),
    german = require('./node_modules/hyphenation.de/lib/de.js'),
    hyphenationAgent = new Hyphenation(german);
document.getElementById('hyphenatepls').innerHTML = hyphenationAgent.hyphenateText(document.getElementById('hyphenatepls').innerHTML);
