package com.cognizant.auth_jwt.controller;

import com.cognizant.auth_jwt.model.AuthResponse;
import com.cognizant.auth_jwt.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<AuthResponse> authenticate(@RequestHeader("Authorization") String authHeader) {
        String encoded = authHeader.replace("Basic ", "");
        String decoded = new String(Base64.getDecoder().decode(encoded));
        String[] credentials = decoded.split(":");

        String username = credentials[0];
        String password = credentials[1];

        if ("user".equals(username) && "pwd".equals(password)) {
            String token = jwtUtil.generateToken(username);
            return ResponseEntity.ok(new AuthResponse(token));
        }

        return ResponseEntity.status(401).build();
    }
}
