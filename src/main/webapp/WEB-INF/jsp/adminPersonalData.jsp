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
    <div class="old personal-login">Логин:
        <div class="my-login"><span></span></div>
        <input type="text" placeholder="Измените логин" class="new-login">
    </div>
    <div class="small">Может содержать не менее 4 и не более 20 букв латиницы, цифры.</div>
    <div class="old personal-tel margin">Телефон:
        <div class="my-tel"><span></span></div>
        <input type="tel" placeholder="Измените телефон" class="new-tel">
    </div>
    <div class="small">Пример: +375291234567</div>
    <div class="old personal-tel margin">Пароль:
        <div class="my-pass"><span></span></div>
        <input type="password" placeholder="Измените пароль" class="new-pas">
    </div>
    <div class="small">Должен содержать не менее 6 символов: латинские буквы(прописную, заглавную) и цифру.</div>
    <button class="change-btn">Изменить</button>
</div>
</div>
<script src="../../adminPersonalData.js"></script>
</body>
</html>