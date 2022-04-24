package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@CrossOrigin
public class UserTravelsController {
    @GetMapping("/userPanel/travels/{userId}")
    public String showUserTravelsMenu(@PathVariable String userId) {
        return "travels";
    }
}
