exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/ROCORootLink',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction: function(req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'), {
				ROCORootLinkStubParams: req.query,
			});
		},
		OLSKRouteSignature: 'ROCORootLinkStubRoute',
		OLSKRouteLanguages: ['en', 'fr', 'es'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
