exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/ROCORootLinkEJS',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'), {
				ROCORootLinkStubParams: req.query,
			});
		},
		OLSKRouteSignature: 'ROCORootLinkEJSStubRoute',
		OLSKRouteLanguages: ['en', 'fr', 'es'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}, {
		OLSKRoutePath: '/stub/ROCORootLinkSvelte',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'ROCORootLinkSvelteStubRoute',
		OLSKRouteLanguages: ['en', 'fr', 'es'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
