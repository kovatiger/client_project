package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@CrossOrigin
public class AdminTravelsController {

    @GetMapping("/adminTravels/{userId}")
    public String showAdminTravels(@PathVariable String userId) {
        return "adminTravels";
    }
}
