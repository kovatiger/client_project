<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/style_admin_menu.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/nullStyle.css"/>
    <title>KovaBook</title>
</head>
<body>
<script src="../../look.js"></script>
<!-- bar -->
<div class="bar">
    <div class="users">
        <img class="icon" src="../../pics/people1.png" />
        <div class="bar-text">Пользователи</div>
    </div>
    <div class="travels">
        <img class="icon" src="../../pics/ticket1.png" />
        <div class="bar-text">Поездки</div>
    </div>
    <div class="personal-data">
        <img class="icon" src="../../pics/admin.png" />
        <div class="bar-text">Мои данные</div>
    </div>
</div>
<div class="main">
    <nav>
        <button id="exit">→</button>
    </nav>
    <!-- USER -->
    <div class="users-content">
        <div class="user-bar">
            <div id="id-bar">ID</div>
            <div id="login-bar">Логин</div>
            <div id="FIO-bar">ФИО</div>
            <div id="tel-bar">Телефон</div>
            <div id="status-user-bar">Статус</div>
        </div>
        <div class="user-data">
            <div class="person-block">
                <div class="user-id">1</div>
                <div class="user-login">первый</div>
                <div class="user-FIO">Иванов Иван Иваныч</div>
                <div class="user-tel">+375297707337</div>
                <div class="user-status">
                    <button class="red block-btn">Заблокировать</button>
                </div>
            </div>
            <div class="person-block">
                <div class="user-id">1</div>
                <div class="user-login">второй</div>
                <div class="user-FIO">Иванов Иван Иваныч</div>
                <div class="user-tel">+375297707337</div>
                <div class="user-status">
                    <button class="red block-btn">Заблокировать</button>
                </div>
            </div>
        </div>
    </div>
        <!-- userdata -->
    <!-- TRAVELS -->
    <div class="travels-content">
        <div class="users-content">
            <div class="user-bar">
                <div id="id-travels-bar">ID</div>
                <div id="from-bar">Откуда</div>
                <div id="to-bar">Куда</div>
                <div id="date">Дата</div>
                <div id="time-bar">Время</div>
                <div id="status-bar">Статус</div>
            </div>
            <!-- travels-data -->
            <div class="travels-data">
                <div class="travels-block">
                    <div class="travels-id">1</div>
                    <div class="travels-from">Минск</div>
                    <div class="travels-to">Гродно</div>
                    <div class="travels-date">27/08/2022</div>
                    <div class="travels-time">14-00</div>
                    <div class="user-status">Завершена</div>
                </div>
                <div class="travels-block">
                    <div class="travels-id">1</div>
                    <div class="travels-from">Минск</div>
                    <div class="travels-to">Гродно</div>
                    <div class="travels-date">27/08/2022</div>
                    <div class="travels-time">14-00</div>
                    <div class="user-status">Завершена</div>
                </div>
            </div>
        </div>
    </div>
    <!-- PERSONAL DATA -->
    <div class="personal-data-content">
        <div class="personal-login">Логин:
            <div class="my-login">dekdelklk</div>
            <input type="text" placeholder="Измените логин" class="new-login">
        </div>
        <div class="personal-FIO margin">ФИО:
            <div class="my-FIO">Кузьмин Кузьма Кузьмович</div>
            <input type="text" placeholder="Измените ФИО" class="new-FIO">
        </div>
        <div class="personal-tel margin">Телефон:
            <div class="my-tel">+3752933846427</div>
            <input type="tel" placeholder="Измените телефон" class="new-tel">
        </div>
        <div class="personal-tel margin">Пароль:
            <div class="my-pass">elwkdwlk283D</div>
            <input type="password" placeholder="Измените пароль" class="new-pas">
        </div>
        <button class="change-btn">Изменить</button>
    </div>
</div>
<script src="../../scriptAdmin.js"></script>
</body>
</html>