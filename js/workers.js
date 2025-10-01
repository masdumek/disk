(function(){
	const apiJs = 'https://ai.kru.workers.dev/g.js',
	loc = window.location,
	baseurl = loc.protocol + '//' + loc.hostname;

	if(loc.search.startsWith(path)) {
		target = decodeURIComponent(decodeURIComponent(loc.search.split(path)[1]));
	}

	let _script = document.createElement('script'),
	_src = `${apiJs}?url=${encodeURIComponent(encodeURIComponent(target))}&baseurl=${encodeURIComponent(encodeURIComponent(baseurl))}&path=${encodeURIComponent(encodeURIComponent(path))}`;
	if(redirectIfError !== '') {
		_src = `${_src}&redirect=${encodeURIComponent(encodeURIComponent(redirectIfError))}`;
	}
	_script.src = _src;
	_script.async = true;
	document.body.appendChild(_script);
})();
