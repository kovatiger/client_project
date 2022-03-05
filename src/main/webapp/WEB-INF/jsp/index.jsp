<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/style.css"/>
    <link rel="stylesheet" type="text/css" href="../../CSS/nullStyle.css"/>
    <title>Document</title>
</head>
<body>
<div class="window">
    <div class="greeting">
        <h1>KovaBook</h1>
        <img class="bus-icon" src="./pics/bus.png"/>
        <div class="preview-text">
            <h2>Добро пожаловать!</h2>
            <p>Бронируйте билеты из одного города в другой.</p>
        </div>
    </div>
    <div class="user">
        <div class="switch">
            <button class="sign-in btn">
                Войти
                <div class="div-in stripe"></div>
            </button>
            <button class="sign-up btn">
                Зарегистрироваться
                <div class="div-up"></div>
            </button>
        </div>
        <!-- form -->
        <form class="form" method="post">
            <div class="sign-in-form">
                <div class="login">
                    <label>Логин</label>
                    <div><input id="log" type="text" placeholder="Введите логин"/></div>
                    <div class="small-p">Может содержать не менее 4 и не более 20 букв латиницы, цифры.</div>
                </div>
                <div class="password">
                    <label>Пароль</label>
                    <div>
                        <input id="pas" type="password" placeholder="Введите пароль"/>
                        <div class="small-p">Должен содержать не менее 6 символов: латинские буквы(прописную, заглавную)
                            и цифру.
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" id="submit-btn" class="sign-btn btn">Войти</button>
                </div>
            </div>

            <!-- signup -->
            <div class="sign-up-form">
                <div class="login">
                    <label>Логин</label>
                    <div><input id="logUp" type="text" placeholder="Введите логин"/></div>
                    <div class="small-p">Может содержать не менее 4 и не более 20 букв латиницы, цифры.</div>
                </div>

                <div class="phone">
                    <label>Телефон</label>
                    <div>
                        <input type="tel" id="tel" placeholder="Введите мобильный телефон"/>
                    </div>
                    <div class="small-p">Пример: +375291234567
                    </div>
                </div>

                <div class="password">
                    <label>Пароль</label>
                    <div>
                        <input type="password" id="pasUp" placeholder="Введите пароль"/>
                    </div>
                    <div class="small-p">Должен содержать не менее 6 символов: латинские буквы(прописную, заглавную)
                        и цифру.
                    </div>
                </div>

                <div class="password">
                    <label>Повторите пароль</label>
                    <div>
                        <input type="password" id="repPas" placeholder="Введите пароль"/>
                    </div>
                </div>
                <div>
                    <button type="submit" id="submit-btn2" class="sign-btn btn">Зарегистрироваться</button>
                </div>

            </div>
        </form>
    </div>
</div>
<script src="../../script.js"></script>
</body>
</html>
