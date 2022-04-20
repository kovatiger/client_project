<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../CSS/nullStyle.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/style_main_menu.css"/>
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
    <title>MainMenu</title>
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
            <div class="travel-text">Войти</div>
        </div>
    </div>
</header>
<!-- SEARCH -->
<form class="search">
    <div class="big-text">
        Заказ билетов на междугородние рейсы по всей Беларуси
    </div>
    <div class="search-field">
        <div class="search-block">
            <div class="where block">
                <div class="grey-text">Откуда</div>
                <div class="flex-div">
                    <select class="city-from">
                        <option  class="where-city">Бобруйск</option>
                        <option  class="where-city">Брест</option>
                        <option  class="where-city">Витебск</option>
                        <option  class="where-city">Жодино</option>
                        <option  class="where-city">Логойск</option>
                        <option  class="where-city" selected>Минск</option>
                        <option  class="where-city">Могилёв</option>
                    </select>
                    <div>
                    </div>
                </div>
            </div>
            <div class="stripe"></div>
            <div class="where-end block">
                <div class="grey-text">Куда</div>
                <select class="city-to">
                    <option  class="where-city">Бобруйск</option>
                    <option  class="where-city">Брест</option>
                    <option  class="where-city">Гродно</option>
                    <option  class="where-city">Жодино</option>
                    <option  class="where-city">Логойск</option>
                    <option  class="where-city">Минск</option>
                    <option  class="where-city" selected>Могилёв</option>
                </select>
            </div>
            <div class="stripe"></div>
            <div class="date block">
                <div class="grey-text">Дата</div>
                <input id="date-input" required type="date" />
            </div>
            <div class="stripe"></div>
            <div class="amount block">
                <div >
                    <div class="grey-text">Количество пассажиров</div><div class="count-block">
                    <div>
                        <input id="input-count" value="1" type="number" min="1" max="15" />
                    </div>
                    <div>
                        <img
                                class="icon-size"
                                src="./pics/black_user.png"
                                alt="reverse"
                        /></div>
                </div>
            </div>
        </div>
    </div>
    <div><button class="search-btn">Найти билет</button></div>
    </div>
</form>
<!-- Популярные направления -->
<main class="popular">
    <div class="main-text">Популярные направления</div>
    <div class="containers">
        <div class="container">
            <div>
                <div class="popular-cities"><span class="first">Жодино</span> - <span class="second">Логойск</span></div>
                <div class="price">10 Br</div>
            </div>
            <img class="icon-city" src="./pics/build1.png">
        </div>
        <div class="container">
            <div>
                <div class="popular-cities"><span class="first">Минск</span> - <span class="second">Бобруйск</span></div>
                <div class="price">15 Br</div>
            </div>
            <img class="icon-city" src="./pics/build2.png">
        </div>
        <div class="container">
            <div>
                <div class="popular-cities"><span class="first">Брест</span> - <span class="second">Могилёв</span></div>
                <div class="price">12 Br</div>
            </div>
            <img class="icon-city" src="./pics/build3.png">
        </div>
        <div class="container">
            <div>
                <div class="popular-cities"><span class="first">Минск</span> - <span class="second">Гродно</span></div>
                <div class="price">12 Br</div>
            </div>
            <img class="icon-city" src="./pics/build4.png">
        </div>
        <div class="container">
            <div>
                <div class="popular-cities"><span class="first">Витебск</span> - <span class="second">Минск</span></div>

                <div class="price">22 Br</div>
            </div>
            <img class="icon-city" src="./pics/build5.png">
        </div>
        <div class="container">
            <div>
                <div class="popular-cities"><span class="first">Брест</span> - <span class="second">Минск</span></div>
                <div class="price">19 Br</div>
            </div>
            <img class="icon-city" src="./pics/build6.png">
        </div>
    </div>
</main>
<script src="../../scriptMainMenu.js"></script>
</body>
</html>
