let backstage = document.getElementById('myBackstage');
let bodyScroll = document.getElementsByTagName('body')[0];
let trigger = document.getElementById('damn');

trigger.onclick = function() {
	if (backstage.style.display === 'block') {
		backstage.style.display = 'none';
		bodyScroll.classList.remove('noscroll');
	} else {
		backstage.style.display = 'block';
		bodyScroll.classList.add('noscroll');
	}
}