<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullStyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/style_travels.css"/>
    <link
            rel="stylesheet"
            type="text/css"
            href="../login_autoriz/CSS/nullstyle.css"
    />
    <link
            rel="stylesheet"
            type="text/css"
            href="../login_autoriz/CSS/nullstyle.css"
    />

    <title>MyTravels</title>
</head>
<body>
<!-- HEADER -->
<header class="header">
    <div class="logo">
        <div class="logo-text">KovaBook</div>
        <div>
            <img
                    id="logo-icon"
                    class="icon-size"
                    src="./pics/logo.png"
                    alt="logo"
            />
        </div>
    </div>
    <div class="nav">
        <div class="nav-div travels">
            <div>
                <img
                        id="travel-icon"
                        class="icon-size"
                        src="./pics/tickets.png"
                        alt="tickets"
                />
            </div>
            <div class="travel-text">Поездки</div>
        </div>
        <div class="nav-div">
            <div>
                <img
                        id="travel-icon1"
                        class="icon-size"
                        src="./pics/user.png"
                        alt="user"
                />
            </div>
            <div class="travel-text">Личный кабинет</div>
        </div>
        <div class="nav-div">
            <div>
                <img
                        id="travel-icon2"
                        class="icon-size"
                        src="./pics/exit.png"
                        alt="user"
                />
            </div>
            <div class="travel-text">Выйти</div>
        </div>
    </div>
</header>
<main>
    <div class="result-tickets"></div>
</main>
<script src="../../scriptTravels.js"></script>
</body>
</html>
