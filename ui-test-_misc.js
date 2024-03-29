require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`ROCORootLink_Misc--${ kDefaultRoute.OLSKRouteSignature }`, function () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute);
		});

		describe('OLSKRootLink', function () {
			
			it('sets OLSKRootLinkURL', function () {
				return browser.assert.attribute('.OLSKRootLink', 'href', 'https://rosano.ca');
			});
		
			it('sets OLSKRootLinkImageURL', function () {
				return browser.assert.attribute('.OLSKRootLinkImage', 'src', '/_shared/__external/ROCORootLink/identity.svg');
			});
		
		});

	});
	
});
