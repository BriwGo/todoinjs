
const MODE_KEY = 'todo_theme_mode'; // 'dark'  'light'

function setDarkMode(enabled, animate = true) {
	const body = document.body;
	if (enabled) body.classList.add('dark-mode'); else body.classList.remove('dark-mode');

	const btn = document.querySelector('.todo-header-mode-button');
	if (!btn) return;

	if (animate) {
		
		btn.classList.remove('suck-anim');
		void btn.offsetWidth;
		btn.classList.add('suck-anim');
		
		setTimeout(() => btn.classList.remove('suck-anim'), 500);
	}

	
	try { localStorage.setItem(MODE_KEY, enabled ? 'dark' : 'light'); } catch (e) { /* ignore */ }
}

function toggleMode() {
	const isDark = document.body.classList.contains('dark-mode');
	setDarkMode(!isDark, true);
}

document.addEventListener('DOMContentLoaded', () => {
	
	let mode = null;
	try { mode = localStorage.getItem(MODE_KEY); } catch (e) { mode = null; }
	setDarkMode(mode === 'dark', false);

	const btn = document.querySelector('.todo-header-mode-button');
	if (btn) btn.addEventListener('click', toggleMode);
  

	const loader = document.getElementById('app-loader');
	setTimeout(() => {
		if (loader) {
			loader.setAttribute('aria-hidden', 'true');
		}
		
		document.body.classList.add('app-loaded');
	}, 650);
});


window.__todo_setDarkMode = setDarkMode;
