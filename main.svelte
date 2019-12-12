<script>
export let ROCORootLinkAlternateURL = null;
export let ROCORootLinkAlternateText = null;

import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};
</script>

<a class="ROCORootLink OLSKCommonIdentity" href={ ROCORootLinkAlternateURL || 'https://rosano.ca' } title={ ROCORootLinkAlternateText || OLSKLocalized('ROCORootLinkTextRosano') }>
	<img class="ROCORootLinkImage" role="presentation" src="/_shared/__external/ROCORootLink/identity.svg">
</a>
