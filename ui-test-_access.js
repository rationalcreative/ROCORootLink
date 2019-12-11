import { deepEqual } from 'assert';

Object.entries({
	ROCORootLink: '.ROCORootLink',
	
	ROCORootLinkImage: '.ROCORootLinkImage',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`ROCORootLink_Access-${ kDefaultRoute.OLSKRouteSignature }`, function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute);
		});
		
		it('shows ROCORootLink', function() {
			browser.assert.elements(ROCORootLink, 1);
		});
		
		it('shows ROCORootLinkImage', function() {
			browser.assert.elements(ROCORootLinkImage, 1);
		})
		
	});
	
})