<!DOCTYPE html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=utf-8" %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullStyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/style_userData.css"/>
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

    <title>Personal Data</title>
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
    <form>
        <div class="window">
            <div><div>Имя: <span class="name">Анна</span></div> <input class="new-name" maxlength="20" type="text"  placeholder="Введите новое имя" /></div>
            <div><div>
                Фамилия: <span class="last-name">Арикулусс</span></div> <input class="new-last-name" maxlength="20" type="text"  placeholder="Введите новую фамилию" />
            </div>
            <div><div>
                Отчество: <span class="patronymic">Витальевна</span></div> <input class="new-patronymic" maxlength="20" type="text"  placeholder="Введите новое отчество" />
            </div>
            <div><div>
                Логин: <span class="login">ldedwkedwo12</span></div><input class="new-login" maxlength="20" type="text"  placeholder="Введите новый логин" />
            </div>
            <div><div>
                Пароль: <span class="password">ewkdlLS2221</span></div><input class="new-password" maxlength="20"  placeholder="Введите новый пароль" />
            </div>
            <div><div>
                Номер телефона: <span class="tel">+375296665544</span></div><input
                    class="new-tel"
                    type="tel"
                    placeholder="Введите новый номер телефона"
            />
            </div>
            <div><div>
                E-mail: <span class="email">kas32wedeyed@mail.ru</span></div><input
                    class="new-email"
                    type="email"
                    placeholder="Введите новый e-mail" />
            </div>
            <div class="grey">
                *Вы можете изменить свои личные данные
            </div>
            <div><button class="order-btn">Изменить</button></div>
        </div>
    </form>
    </div>
</main>
<div id="cover-div"></div>
<script src="../../scriptUserData.js"></script>
</body>
</html>
