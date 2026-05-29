document.addEventListener("DOMContentLoaded", function () {
    // 1. 動態生成 Navbar (加入了漢堡按鈕結構)
    const navbarHTML = `
        <header class="site-header">
            <div class="header-top">
                <div class="logo">
                    <a href="index.html">
                        <img src="./images/logo.png" alt="Logo" class="logo-img">
                        <span class="logo-text">公衛實習資訊網</span>
                    </a>
                </div>
                <div class="top-tools">
                    <a href="#">回首頁</a> | <span>字體：小 中 大</span>
                </div>
            </div>
            
            <nav class="main-nav">
                <div class="menu-toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>

                <ul class="nav-menu" id="nav-menu">
                    <li><a href="index.html">首頁</a></li>
                    <li class="dropdown">
                        <a href="internship_info.html" class="dropbtn">實習資訊 ▼</a>
                        <ul class="dropdown-content">
                            <li><a href="internship_info.html#section-info">實習說明</a></li>
                            <li><a href="internship_info.html#section-timeline">實習時程</a></li>
                            <li><a href="internship_info.html#section-grading">評分方式</a></li>
                            <li><a href="internship_info.html#section-rules">相關辦法</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="org_info.html" class="dropbtn">單位介紹 ▼</a>
                        <ul class="dropdown-content">
                            <li><a href="org_info.html#section-categories">實習單位類別</a></li>
                            <li><a href="org_info.html#section-history">歷年實習單位</a></li>
                            <li><a href="org_info.html#section-regular">常態單位介紹</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="senior_ep.html" class="dropbtn">實習成果 ▼</a>
                        <ul class="dropdown-content">
                            <li><a href="#">學長姐實習心得</a></li>
                            <li><a href="#">實習發表活動</a></li>
                        </ul>    
                    </li>
                    <li><a href="faq.html">常見問答</a></li>
                    <li class="dropdown">
                        <a href="advocacy.html" class="dropbtn">宣導資料 ▼</a>
                        <ul class="dropdown-content">
                            <li><a href="advocacy.html#section-gender">性平宣導</a></li>
                            <li><a href="advocacy.html#section-safety">勞安宣導</a></li>
                            <li><a href="advocacy.html#section-resources">校內輔導資源</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    `;

    const footerHTML = `
        <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-info">
                <h4>OO大學 公共衛生學系辦公室</h4>
                <p><span>地址：</span>406040 台中市OO區OO路</p>
                <p><span>電話：</span>(04) 2205-3366 分機 XXXX</p>
                <p><span>聯絡信箱：</span>ph@mail.xxu.edu.tw</p>
                <p><span>服務時間：</span>週一至週五 08:00 - 17:00</p>
            </div>
            <div class="footer-bottom">
                <p>© 2026 公衛實習資訊網. All Rights Reserved.</p>
            </div>
        </div>
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