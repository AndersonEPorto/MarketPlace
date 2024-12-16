/*package com.lojaVirtual.util;

import com.lojaVirtual.dto.LoginDTO;
import com.lojaVirtual.entities.User;

public class LoginMapper {

    // Método para converter Login para LoginDTO

    public static LoginDTO toDTO(User login) {

        return new LoginDTO(login.getId(), login.getEmail(), login.getSenha());

    }

    // Método para converter loginDTO para login

    public static User toEntity(LoginDTO loginDTO) {

        User login = new User();
        login.setId(loginDTO.getId());
        login.setEmail(loginDTO.getEmail());
        login.setSenha(loginDTO.getSenha());

        return login;
    }

}
*/