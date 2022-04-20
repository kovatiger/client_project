<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullStyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/style_order.css"/>
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

    <title>Order</title>
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
            <div>Имя: <input class="name" maxlength="20" type="text" required placeholder="Введите своё имя" /></div>
            <div>
                Фамилия: <input class="last-name" maxlength="20" type="text" required placeholder="Введите свою фамилию" />
            </div>
            <div>
                Отчество: <input class="patronymic" maxlength="20" type="text" required placeholder="Введите своё отчество" />
            </div>
            <div>
                Номер телефона:<input
                    class="tel"
                    required
                    type="tel"
                    placeholder="Введите свой номер телефона"
            />
            </div>
            <div>
                E-mail: <input
                    class="email"
                    required
                    type="email"
                    placeholder="Введите свой e-mail" />
            </div>
            <div class="grey">
                *Все поля являются обязательными для заполнения. Указывайте
                корректные данные, т.к. они необходимы для идентификации
                пользователя, получения билета и возможности авторизации в личном
                кабинете.
            </div>
            <div><button class="order-btn">Подтвердить</button></div>
        </div>
    </form>
    </div>
</main>
<div id="cover-div"></div>
<div class="warning">
    <div>Вы успешно забронировали рейс!</div>
    <button id="btn-warning">
        <img id="icon-warning" src="./pics/greenOk.png" />
    </button>
</div>
<script src="../../scriptOrder.js"></script>
</body>
</html>
