package com.lojaVirtual.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/controllerStatus")
public class ControllerStatusAplication {
    // http://127.0.0.1:8080/controllerStatus/ok
    @RequestMapping("/ok")
    public String statusOk() {

        return "OK";
    }
}
