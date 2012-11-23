﻿import_("main").loadContent('<div id="header-wrapper">\
    <div id="header">\
        <a id="logo-wrapper" href="">\
            <img id="logo" alt="X-Wall Logo" src="images/logo.png">\
            <h1 id="title" data-document-title="X-WALL">X-Wall</h1>\
            <span id="domain">x-wall.org</span>\
        </a>\
        <ul id="nav">\
            <li><a href="#introduction">Introduction</a></li>\
            <li><a href="#tutorial">Tutorial</a></li>\
            <li><a href="https://github.com/vilic/x-wall" target="_blank">Github</a></li>\
            <li><a href="https://github.com/vilic/x-wall/issues/new" target="_blank">Feedback</a></li>\
            <li><a href="http://me.alipay.com/vilic" target="_blank">Donate</a></li>\
        </ul>\
    </div>\
</div>\
<div id="main-wrapper">\
    <div id="body-wrapper">\
        <div id="content-wrapper">\
            <!-- Introduction -->\
            <a id="introduction" class="anchor">&nbsp;</a>\
            <h3>Introduction</h3>\
            <h4>What is X-Wall?</h4>\
            <p>X-Wall is a small tool wrapped <a href="http://www.privoxy.org/">Privoxy</a> and Plink (which is part of <a href="http://www.chiark.greenend.org.uk/%7Esgtatham/putty/" target="_blank">PuTTy</a>) together to provide people an easier way to X (cross) the wall.</p>\
            <h4>System Requirements</h4>\
            <p>Microsoft Windows 2000/XP/7/8 (By the way only XP and 7 are tested)<br>\
            Microsoft .NET Framework 3.5 SP1 (pre-installed on Windows 7)</p>\
            <h4>Other Requirements</h4>\
            <p>You will need to prepare the SSH account (or a HTTP proxy) yourself, which is usually not free (but also not expensive, many within 50 RMB per year).</p>\
            <h4>Features</h4>\
            <ul>\
                <li>Easy to setup and configurate. What you need to do is just extract the files to a proper place, start X-Wall.exe, enter your SSH account information and connect.</li>\
                <li>Built-in GFWList and will check it online everyday, when you visit websites that are not blocked, it will connect directly.</li>\
                <li>Support custom rules. Just copy the link you want to add from your browser, right click the notification icon of X-Wall, and then "Add rules".</li>\
                <li>Ability to share the proxy with your phone via WiFi (need to cancel "Listen to local address only").</li>\
            </ul>\
            <!-- Tutorial -->\
            <a id="tutorial" class="anchor">&nbsp;</a>\
            <h3>Tutorial</h3>\
            <p>This part is under construction... Coming soon.</p>\
        </div>\
        <div id="sidebar-wrapper">\
            <div class="item dark">\
                <h2>Download Alpha Version</h2>\
                <p>Please select the package you want to download.</p>\
                <ul>\
                    <!--<li><a href="#">Windows Installer</a></li>-->\
                    <li><a href="https://raw.github.com/vilic/x-wall/master/x-wall-alpha.rar">RAR File</a></li>\
                </ul>\
            </div>\
            <!--\
            <div class="item light">\
                <h2>Downloads</h2>\
                <p>Please select the package you want to download.</p>\
                <ul>\
                    <li><a href="#">Windows Installer</a></li>\
                    <li><a href="#">ZIP File</a></li>\
                </ul>\
            </div>\
            -->\
        </div>\
    </div>\
    <div id="footer">\
        <div>Proudly hosted by <a href="https://github.com/" target="_blank">Github</a></div>\
        <div>©2012 <a href="http://vilic.info/" target="_blank">VILIC VANE</a></div>\
    </div>\
</div>');