// 等待页面加载完成
//等页面内容加载完毕后再执行里面的代码，保证操作的元素已经渲染出来。
document.addEventListener('DOMContentLoaded',function(){
    //1.主题切换
    const themeToggle=document.getElementById('theme-toggle');
    //获取 <body> 元素
    const body=document.body;

    //检查本地保存的主题偏好
    const savedTheme=localStorage.getItem('theme');
    //有保存的主题，就设置到页面上，并更新主题按钮的图标。
    if(savedTheme){
        body.dataset.theme=savedTheme;
        //自定义的函数，用来更新主题按钮的图标
        updataThemeIcon(savedTheme);
    }

    themeToggle.addEventListener('click',function(){
        //切换主题
        const currentTheme=body.dataset.theme;
        const newTheme=currentTheme==='dark'?'light':'dark';
        
        //**变量声明、赋值、函数调用后要加分号**
        body.dataset.theme=newTheme;
        updataThemeIcon(newTheme);

        //保存到本地存储
        localStorage.setItem('theme',newTheme);

    });

    //控制结构（如 if、for、function 声明）后不用加分号
    function updataThemeIcon(theme){
        themeToggle.textContent=theme==='dark'?'🌞':'🌜';
    }

    //进度条动画
    function animateProgressBars(){
        const progressBars=document.querySelectorAll('.progress');

        progressBars.forEach(bar=>{
            const width=bar.getAttribute('data-width');
            //设置延迟
            setTimeout(()=>{
                bar.style.width=width;
            },200);
        });
    }

    // 3. 初始化个人信息（这里你可以修改成你的信息）
    function initProfile() {
        document.getElementById('name').textContent = 'NF';
        document.getElementById('title').textContent = 'student';
        
        // 如果你想使用本地头像，可以替换下面的src
        // 首先把你的头像图片放到项目文件夹里，比如放到 images/avatar.jpg
        // 然后修改下面的src为：'images/avatar.jpg'
        document.getElementById('avatar').alt = '你的名字的头像';
    }
    
    // 4. 初始化社交链接（修改成你的真实链接）
    function initSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        
        // 这里按顺序设置：GitHub, 邮箱, 知乎
        socialLinks[0].href = 'https://github.com/usertcy';
        socialLinks[1].href = 'mailto:12345678@qq.com';
        socialLinks[2].href = 'https://www.zhihu.com/people/你的用户名';
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

// 页面加载时的淡入效果
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';