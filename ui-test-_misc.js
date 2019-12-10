import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('ROCORootLink_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('sets href', function () {
		browser.assert.attribute(ROCORootLink, 'href', 'https://rosano.ca');
	});

	describe('ROCORootLinkImage', function () {
		
		it('sets role', function () {
			browser.assert.attribute(ROCORootLinkImage, 'role', 'img');
		});
	
		it('sets src', function () {
			browser.assert.attribute(ROCORootLinkImage, 'src', '/_shared/__external/ROCORootLink/identity.svg');
		});
	
	});

	describe('ROCORootLinkAlternateText', function () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute, {
				ROCORootLinkAlternateText: 'alfa',
			});
		});
		
		it('binds title', function () {
			browser.assert.attribute(ROCORootLink, 'title', 'alfa');
		});
	
	});

	describe('ROCORootLinkAlternateURL', function () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute, {
				ROCORootLinkAlternateURL: 'alfa',
			});
		});
		
		it('binds href', function () {
			browser.assert.attribute(ROCORootLink, 'href', 'alfa');
		});
	
	});

});
