import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	ROCORootLink: '.ROCORootLink',
	
	ROCORootLinkImage: '.ROCORootLinkImage',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('ROCORootLink_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows ROCORootLink', function() {
		browser.assert.elements(ROCORootLink, 1);
	});
	
	it('shows ROCORootLinkImage', function() {
		browser.assert.elements(ROCORootLinkImage, 1);
	});

});
