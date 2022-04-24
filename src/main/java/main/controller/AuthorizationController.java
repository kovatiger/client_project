package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class AuthorizationController {
    @GetMapping("/authorization")
    public String showAuthorizationMenu() {
        return "authorization";
    }
}
