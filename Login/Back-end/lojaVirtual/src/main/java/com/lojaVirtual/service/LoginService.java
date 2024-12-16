package com.lojaVirtual.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.lojaVirtual.dto.UserDTO;
import com.lojaVirtual.entities.User;
import com.lojaVirtual.repository.LoginRepository;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    public Optional<UserDTO> getUserById(long id) {
        // Busca a entidade Fabricante pelo ID no repositório
        Optional<User> UserOptional = loginRepository.findById(id);

        // Verifica se a entidade foi encontrada
        if (UserOptional.isPresent()) {
            // Converte a entidade Fabricante em FabricanteDTO
            User user = UserOptional.get();
            UserDTO userDTO = new UserDTO(user.getId(), user.getNome(),
                    user.getSobreNome(),user.getEmail(),user.getSenha());

            // Retorna o DTO dentro de um Optional
            return Optional.of(userDTO);
        } else {
            // Retorna um Optional vazio se a entidade não for encontrada
            return Optional.empty();
        }
    }

    // Método para criar um novo login
    public ResponseEntity<User> criarLogin(User login) {

        return ResponseEntity.ok(loginRepository.save(login));
    }

    // Método para obter todos os usuarios
    public List<User> obterTodosLogins() {
        // Retornar todos os login's do banco
        return loginRepository.findAll();

    }

    public boolean autenticar(String id, String email, String senha) {
        // Busca o usuário no repositório pelo email fornecido
        Optional<User> usuario = loginRepository.findByEmail(email);
        // Verifica se o usuário foi encontrado e se a senha fornecida corresponde à senha armazenada
        if (usuario.isPresent() && usuario.get().getSenha().equals(senha)) { // Comparação simples
            // Se a senha estiver correta, retorna o usuário
            return true;
        }else{
            // Se o usuário não for encontrado ou a senha estiver incorreta, retorna um Optional vazio
            return false;
        }
    }
    

}
