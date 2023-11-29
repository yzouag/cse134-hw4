function setTheme(theme) {
    const root = document.documentElement;
    if (theme === 'day') {
        root.style.setProperty('--background-color', '#252a34');
        root.style.setProperty('--text-color', '#eee');
        root.style.setProperty('--footer-color', '#1a1d24');
        root.style.setProperty('--link-color', '#a9dde0');
        root.style.setProperty('--mask-color-from', 'rgba(0, 0, 0, .45)');
        root.style.setProperty('--mask-color-to', 'rgba(0, 0, 0, .55)');
    }
    else {
        root.style.setProperty('--background-color', '#eee');
        root.style.setProperty('--text-color', '#252a34');
        root.style.setProperty('--footer-color', '#E3DECA');
        root.style.setProperty('--link-color', '#7AB1E6');
        root.style.setProperty('--mask-color-from', 'rgba(255, 255, 255, .45)');
        root.style.setProperty('--mask-color-to', 'rgba(255, 255, 255, .25)');
    }
}

function toggleTheme() {
    const currTheme = localStorage.getItem('theme') || 'night';
    const newTheme = currTheme === 'night' ? 'day' : 'night';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

function setSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
        document.getElementById('dark-mode-toggle').checked = savedTheme === 'day';
    } else {
        document.getElementById('dark-mode-toggle').checked = true;
        setTheme('night');
    }
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('change', toggleTheme);
}

document.addEventListener('DOMContentLoaded', setSavedTheme);