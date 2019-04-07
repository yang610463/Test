package com.example.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class TestController {


	@GetMapping("/index")
	public String index(){
		return "index";
	}

	@GetMapping("/hello")
	@ResponseBody
	public String hello(){
		return "index";
	}
	
}
