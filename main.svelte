<script>
import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};
import OLSKRootLink from 'OLSKRootLink';
</script>

<div class="ROCORootLink">

<OLSKRootLink OLSKRootLinkURL="https://rosano.ca" OLSKRootLinkImageURL={ '/_shared/__external/ROCORootLink/identity.svg' } OLSKRootLinkTextAlternate={ OLSKLocalized('ROCORootLinkText') } />

</div>
