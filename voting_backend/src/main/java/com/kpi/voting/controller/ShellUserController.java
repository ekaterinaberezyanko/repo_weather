package com.kpi.voting.controller;

import com.kpi.voting.domain.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

@ShellComponent
public class ShellUserController {

    @Autowired
    private UserService userService;

    @ShellMethod("Create user")
    public void ua(String userName) {
        userService.createUser(userName);
    }

    @ShellMethod("Show all users")
    private void sau() {
        System.out.println(userService.getAllUsers());

    }
}
