package com.lojaVirtual.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lojaVirtual.entities.User;

//Interface que estende JpaRepository para fornecer operações CRUD
@Repository
public interface LoginRepository extends JpaRepository <User, Long> {
    
    Optional<User>findByEmail(String email);
}
