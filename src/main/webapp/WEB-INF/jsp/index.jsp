    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="../../CSS/style.css" />
        <link rel="stylesheet" type="text/css" href="../../CSS/nullStyle.css" />
        <title>Document</title>
    </head>
<body>
<div class="window">
    <div class="greeting">
        <h1>Appname</h1>
        <img class="bus-icon" src="./pics/bus.png" />
        <div class="preview-text">
            <h2>Welcome!</h2>
            <p>Book a transport ticket from one city to another.</p>
        </div>
    </div>
    <div class="user">
        <div class="switch">
            <button class="sign-in btn">
                SIGN IN
                <div class="div-in stripe"></div>
            </button>
            <button class="sign-up btn">
                SIGN UP
                <div class="div-up"></div>
            </button>
        </div>
        <!-- form -->
        <form class="form" method="post">
            <div class="sign-in-form">
                <div class="login">
                    <label>Login</label>
                    <div><input type="text" placeholder="Enter your login" /></div>
                </div>
                <div class="password">
                    <label>Password</label>
                    <div>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                </div>
                <div><button class="sign-btn btn">Sign in</button></div>
                <div class="forgot"><a href="#">forgot Password?</a></div>
            </div>

            <!-- signup -->
            <div class="sign-up-form">
                <div class="login">
                    <label>Login</label>
                    <div><input type="text" placeholder="Enter your login" /></div>
                </div>

                <div class="phone">
                    <label>Phone number</label>
                    <div>
                        <input type="tel" placeholder="Enter your phone number" />
                    </div>
                </div>

                <div class="password">
                    <label>Password</label>
                    <div>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                </div>

                <div class="password">
                    <label>Repeat password</label>
                    <div>
                        <input type="email" placeholder="Enter your password" />
                    </div>
                </div>

                <div><button class="sign-btn btn">Sign in</button></div>
            </div>
        </form>
    </div>
</div>
<script src="./script.js"></script>
</body>
</html>
