package com.urbanstream.auth_service.controller;

import com.urbanstream.auth_service.model.User;
import com.urbanstream.auth_service.repository.UserRepository;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/me")
    public Map<String, Object> getUser(@AuthenticationPrincipal OidcUser principal) {
        String googleId = principal.getSubject();
        String name = principal.getFullName();
        String email = principal.getEmail();
        String picture = principal.getPicture();

        User user = userRepository.findByGoogleId(googleId);
        if (user == null) {
            user = new User();
            user.setGoogleId(googleId);
            user.setName(name);
            user.setEmail(email);
            user.setPicture(picture);
            userRepository.save(user);
        }

        return Map.of(
                "id", user.getId(),
                "googleId", googleId,
                "name", name,
                "email", email,
                "picture", picture
        );
    }

}