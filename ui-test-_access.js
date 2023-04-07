Object.entries({
	ROCORootLink: '.ROCORootLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`ROCORootLink_Access-${ kDefaultRoute.OLSKRouteSignature }`, function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});
		
		it('shows ROCORootLink', function() {
			return browser.assert.elements(ROCORootLink, 1);
		});
		
		it('shows OLSKRootLink', function() {
			return browser.assert.elements('.OLSKRootLink', 1);
		})
		
	});
	
})
