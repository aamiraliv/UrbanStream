package com.urbanstream.auth_service.service;

import com.urbanstream.auth_service.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();
    Long findByEmail(String email);
}
