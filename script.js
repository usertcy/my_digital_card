// 等待页面加载完成
//监听 document（整个文档）的 DOMContentLoaded 事件当该事件触发时，执行后面的匿名函数（function(){ ... } 部分）
document.addEventListener('DOMContentLoaded', function () {

    // 页面加载时的淡入效果
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';





    //1.主题切换
    const themeToggle = document.getElementById('theme-toggle');
    //获取 <body> 元素
    const body = document.body;



    //检查本地保存的主题偏好
    //localStorage：是浏览器提供的一种本地存储机制
    //getItem('theme')：是 localStorage 对象的方法，用于获取指定键（这里的键是 'theme'）对应的存储值。
    const savedTheme = localStorage.getItem('theme');
    //有保存的主题，就设置到页面上，并更新主题按钮的图标。
    if (savedTheme) {
        // dataset 是 DOM 元素的一个属性，用于访问元素上的 data-* 自定义属性。
        // 即使 HTML 中没有预先定义 data-theme，也可以通过 JavaScript 动态添加这个属性
        //CSS 中已经定义了 [data-theme="dark"] 选择器（暗黑模式的样式），当 JavaScript 动态添加 data-theme="dark" 时，CSS 会自动匹配并应用对应的样式。如果没有这个属性，页面会默认使用 :root 里定义的亮色主题样式。
        body.dataset.theme = savedTheme;
        //自定义的函数，用来更新主题按钮的图标
        updateThemeIcon(savedTheme);
    }



    // 通过 addEventListener('click', ...) 给主题切换按钮（themeToggle）绑定点击事件，用户点击按钮时执行内部函数。
    themeToggle.addEventListener('click', function () {
        //切换主题如果当前是暗黑模式（'dark'），则切换为亮色模式（'light'），反之则切换为暗黑模式。
        const currentTheme = body.dataset.theme || 'light'; // 添加默认值 'light'
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        //**变量声明、赋值、函数调用后要加分号**
        body.dataset.theme = newTheme;
        updateThemeIcon(newTheme);

        //保存到本地存储
        localStorage.setItem('theme', newTheme);

    });






    //控制结构（如 if、for、function 声明）后不用加分号
    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'dark' ? '🌞' : '🌙';
    }





    //进度条动画
    function animateProgressBars() {
        // 获取所有带有 .progress 类的元素（即所有进度条）
        const progressBars = document.querySelectorAll('.progress');

        // 遍历每个进度条，为其添加动画
        // bar 是参数，代表当前遍历到的单个进度条元素（即集合中的每一个 .progress 元素）
        //=> 是箭头函数的标志，后面的 { ... } 是函数体，定义了对每个 bar 要执行的操作。
       progressBars.forEach(function(bar) { // 修正箭头函数语法
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        });
    }





    // 3. 初始化个人信息??????????
    function initProfile() {
        document.getElementById('name').textContent = 'usertcy';
        document.getElementById('title').textContent = 'student';
        document.getElementById('avatar').alt = 'usertcy的头像';

        // 设置头像的替代文本：获取 id 为 'avatar' 的图片元素
        // 修改其 alt 属性为 '你的头像'（当图片加载失败时会显示该文本，也用于无障碍访问）

    }





    // 4. 初始化社交链接
    function initSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');

        // 这里按顺序设置：GitHub, 邮箱, 知乎
        socialLinks[0].href = 'https://github.com/usertcy';
        socialLinks[1].href = '';
        socialLinks[2].href = '';
    }





    // 执行初始化函数
    animateProgressBars();
    initProfile();
    initSocialLinks();





    // 添加加载动画效果
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);


});
