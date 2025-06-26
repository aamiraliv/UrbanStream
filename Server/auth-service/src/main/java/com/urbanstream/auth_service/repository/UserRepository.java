package com.urbanstream.auth_service.repository;

import com.urbanstream.auth_service.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {
    User findByGoogleId(String googleId);
    User findByEmail(String email);
}
