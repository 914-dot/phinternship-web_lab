document.addEventListener("DOMContentLoaded", function () {
    // 1. 動態生成符合參考圖結構的 Navbar
    const navbarHTML = `
        <header class="site-header">
            <div class="header-top">
                <div class="logo">
                    <a href="index.html">
                        <img src="./images/logo.png" alt="公共衛生 Logo" class="logo-img">
                    </a>
                </div>
                <div class="top-tools">
                    <a href="#">回首頁</a> | <a href="#">網站登入</a> | <span>字體：小 中 大</span>
                </div>

            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
    </div>
            </div>
            
            <nav class="main-nav">
                <ul class="nav-menu">
                    <li><a href="index.html">首頁</a></li>
                    
                    <li class="dropdown">
                        <a href="internship_info.html" class="dropbtn">實習資訊 ▼</a>
                        <ul class="dropdown-content">
                            <li><a href="#">實習說明</a></li>
                            <li><a href="#">實習時程</a></li>
                            <li><a href="#">評分方式</a></li>
                            <li><a href="#">相關辦法</a></li>
                        </ul>
                    </li>
                    
                    <li class="dropdown">
                        <a href="org_info.html" class="dropbtn">單位介紹 ▼</a>
                        <ul class="dropdown-content">
                            <li><a href="#">實習單位類別</a></li>
                            <li><a href="#">歷年實習單位</a></li>
                            <li><a href="#">常態單位介紹</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="senior_ep.html">實習成果</a></li>
                    <li><a href="FAQ.html">常見問答</a></li>
                    <li><a href="materials.html">宣導資料</a></li>
                </ul>
            </nav>
        </header>
    `;

    const footerHTML = `
        <footer>
            <p>© 2026 公衛實習資訊網. All Rights Reserved.</p>
        </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // 新增：漢堡按鈕點擊事件監聽
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            // 當點擊漢堡按鈕時，切換 'active' 這個 class
            mobileMenuBtn.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });
    }
});