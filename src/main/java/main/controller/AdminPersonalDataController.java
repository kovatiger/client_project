package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@CrossOrigin
public class AdminPersonalDataController {

    @GetMapping("/adminPersonalData/{userId}")
    public String showAdminPersonalData(@PathVariable String userId) {
        return "adminPersonalData";
    }
}
