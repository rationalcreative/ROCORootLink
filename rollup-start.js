import RollupStart from './main.svelte';

const ROCORootLink = new RollupStart({
	target: document.body,
	props: Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries())),
});

export default ROCORootLink;
