package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@CrossOrigin
public class UserPersonalDataController {
    @GetMapping("/userPanel/personalInformation/{userId}")
    public String showUserPersonalData(@PathVariable String userId) {
        return "userData";
    }
}
