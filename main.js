// 事件委托，用于导航栏切换
document.querySelector('.navbar').addEventListener('click', function(e) {
    if (e.target.matches('.hamburger')) {
        document.querySelector('.navbar-menu').classList.toggle('show');
    }
});

// 回到顶部按钮功能
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
