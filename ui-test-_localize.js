require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

		const uLocalized = function (inputData) {
			return OLSKTestingLocalized(inputData, languageCode);
		};

		describe(`ROCORootLink_Localize-${ kDefaultRoute.OLSKRouteSignature }-${ languageCode }`, function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKRoutingLanguage: languageCode,
				});
			});

			it('localizes OLSKRootLink', function () {
				browser.assert.attribute('.OLSKRootLink', 'title', uLocalized('ROCORootLinkText'));
			});

		});

	});

})
