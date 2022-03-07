package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class UserMenuController {

    @GetMapping("/mainMenu/{userId}")
    public String showUserMenuForLoginUser(@PathVariable String userId) {
        return "userMainMenu";
    }

}
