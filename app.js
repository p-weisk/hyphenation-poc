(function() {
	const eligibleElements = [...document.querySelectorAll('.hyphenatepls')];
	if (eligibleElements.length > 0) {
		var Hyphenation = require('./node_modules/hypher/lib/hypher.js'),
			german = require('./node_modules/hyphenation.de/lib/de.js'),
			hyphenationAgent = new Hyphenation(german);
		eligibleElements.forEach( function(current) {
			current.textContent = hyphenationAgent.hyphenateText(current.textContent);
		});
	}
})();
