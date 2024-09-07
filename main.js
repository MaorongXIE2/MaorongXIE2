// 导航栏切换
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('show');
}

// 回到顶部功能
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 显示/隐藏回到顶部按钮
window.addEventListener('scroll', () => {
    const button = document.querySelector('.back-to-top');
    button.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// 深色模式切换
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// 页面加载时应用用户偏好
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
