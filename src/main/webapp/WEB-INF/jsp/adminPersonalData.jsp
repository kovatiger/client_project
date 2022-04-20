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
<script src="../../adminPersonalData.js"></script>
</body>
</html>