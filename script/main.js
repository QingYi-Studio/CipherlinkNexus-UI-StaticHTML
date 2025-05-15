// 路由和侧边栏控制逻辑
document.addEventListener('DOMContentLoaded', () => {
    const routes = ['home', 'server', 'client', 'config', 'about'];
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    // 路由控制
    function handleRouting() {
        const hash = window.location.hash.substring(1).toLowerCase();
        const validHash = routes.includes(hash) ? hash : 'home';

        // 更新页面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(validHash.charAt(0).toUpperCase() + validHash.slice(1))?.classList.add('active');

        // 更新导航
        document.querySelectorAll('.sidebar a').forEach(link => {
            link.classList.toggle('active', link.hash === `#${validHash}`);
        });
    }

    // 侧边栏控制
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }

    // 自动关闭移动端侧边栏
    function autoCloseSidebar() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }

    // 事件监听
    window.addEventListener('hashchange', handleRouting);
    window.addEventListener('resize', autoCloseSidebar);
    menuToggle.addEventListener('click', toggleSidebar);
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) toggleSidebar();
        });
    });

    // 初始化
    handleRouting();
    autoCloseSidebar();
});
