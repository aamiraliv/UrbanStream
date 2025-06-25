package com.urbanstream.auth_service.repository;

import com.urbanstream.auth_service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<Long> findByEmail(String email);
}
