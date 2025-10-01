function afterLoaded() {
  // Floating Ads
  (function(){injectScript([{"attr":[{"name":"id","value":"fixedban"},{"name":"style","value":"width:100%;margin:auto;text-align:center;float:none;overflow:hidden;display:scroll;position:fixed;bottom:0;z-index:999;-webkit-transform:translateZ(0);"}],"tag":"div","inner":"<div style=\"margin-bottom: 2px;\"><center><a id=\"close-fixedban\" onclick=\"document.getElementById(&quot;fixedban&quot;).style.display = &quot;none&quot;;\" style=\"cursor:pointer;\"><img alt=\"close\" src=\"https://3.bp.blogspot.com/-ZZSacDHLWlM/VhvlKTMjbLI/AAAAAAAAF2M/UDzU4rrvcaI/s1600/btn_close.gif\" style=\"vertical-align:middle;\" title=\"close\"></a></center></div><div style=\"text-align:center;display:block;max-width:728px;height:auto;overflow:hidden;margin:auto\">\n<center id=\"ad__float\"></center></div>"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();
  (function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"atOptions = {'key' : 'a69dfa5ed40c9a25121ae8c4dd50046a','format' : 'iframe','height' : 250,'width' : 300,'params' : {}};"},{"attr":[{"name":"type","value":"text/javascript"},{"name":"src","value":"//www.highperformanceformat.com/a69dfa5ed40c9a25121ae8c4dd50046a/invoke.js"},{"name":"async","value":""}],"tag":"script","inner":""}],{"target":"#ad__float"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

  // Popunder Ads
  (function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"},{"name":"src","value":"//pl25434864.profitableratecpm.com/e6/64/87/e66487b22824763f3729e9913b22b78d.js"}],"tag":"script","inner":""}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

  // Multitag Monetag
  // (function(){injectScript([{"attr":[{"name":"src","value":"https://fpyf8.com/88/tag.min.js"},{"name":"data-zone","value":"147675"},{"name":"async","value":""},{"name":"data-cfasync","value":"false"}],"tag":"script","inner":""}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

  // Histats
  (function(){injectScript([{"attr":[{"name":"type","value":"text/javascript"}],"tag":"script","inner":"var _Hasync= _Hasync|| [];_Hasync.push(['Histats.start', '1,4946035,4,0,0,0,00010000']);_Hasync.push(['Histats.fasi', '1']);_Hasync.push(['Histats.track_hits', '']);(function() {var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;hs.src = ('//s10.histats.com/js15_as.js');(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);})();"}],{"target":"body"});function injectScript(e,t){let n=t.target;for(let t of e){let e=t.tag,r=t.inner,o=document.createElement(e);o.innerHTML=r;let c=t.attr;for(let e of c)o.setAttribute(e.name,e.value);document.querySelector(n)&&document.querySelector(n).append(o)}}})();

  // document.querySelectorAll('a').forEach((a) => {
  // 	a.addEventListener('mouseenter', async () => {
  // 		await fetch(a.href);
  // 	}, false);
  // });

  // Fake Rating
  document.head.innerHTML += `<script type="application/ld+json">{"@context": "https://schema.org/","@type": "Product","name": ${JSON.stringify(document.title)},"datePublished": "${new Date().toISOString()}","dateModified": "${new Date().toISOString()}","aggregateRating": {"@type": "AggregateRating","ratingValue": 4.${Math.floor(Math.random() * (9 - 5 + 1)) + 5},"bestRating": 5,"reviewCount": ${Math.floor(Math.random() * (9999 - 99 + 1)) + 99}}}</script>`;
}
