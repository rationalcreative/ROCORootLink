import { deepEqual } from 'assert';

require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`ROCORootLink_Misc--${ kDefaultRoute.OLSKRouteSignature }`, function () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute);
		});

		it('sets href', function () {
			browser.assert.attribute(ROCORootLink, 'href', 'https://rosano.ca');
		});

		describe('ROCORootLinkImage', function () {
			
			it('sets role', function () {
				browser.assert.attribute(ROCORootLinkImage, 'role', 'presentation');
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
	
});
