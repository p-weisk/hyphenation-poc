(function() {
	var Hyphenation = require('./node_modules/hypher/lib/hypher.js'),
    german = require('./node_modules/hyphenation.de/lib/de.js'),
    hyphenationAgent = new Hyphenation(german);
	[...document.getElementsByClassName('hyphenatepls')].forEach( function(current) {
		current.innerHTML = hyphenationAgent.hyphenateText(current.innerHTML);
	});
})();
