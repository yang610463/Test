package com.example.test.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	
	
	@RequestMapping("hello")
	public String sayHello() {
		return "Hello World~~~~~~~~~~";
	}
	@RequestMapping("hi")
	public String sayHi() {
		return "Hello World~~~~~~~~~~Hi";
	}
	
}
