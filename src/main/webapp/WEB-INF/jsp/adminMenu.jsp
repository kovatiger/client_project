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
            <div id="id-bar">№</div>
            <div id="login-bar">Логин</div>
            <div id="tel-bar">Телефон</div>
            <div id="status-user-bar">Статус</div>
        </div>
        <div class="user-data"></div>
    </div>
</div>
<script src="../../scriptAdmin.js"></script>
</body>
</html>