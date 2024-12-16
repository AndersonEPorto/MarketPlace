package com.lojaVirtual.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lojaVirtual.entities.User;
import com.lojaVirtual.repository.LoginRepository;
import com.lojaVirtual.service.LoginService;

// Anotação que define esta classe como um controlador REST
@RestController
@RequestMapping("/login")
public class LoginController {

    // Injeção de dependencia do serviço de cliente
    @Autowired
    private LoginService loginService;

    @Autowired
    private LoginRepository loginRepository;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    // Criar um novo login usando loginDTO
    @PostMapping
    public ResponseEntity<User> criarLogin(@RequestBody User login) {
        return loginService.criarLogin(login);
    }

    @GetMapping
    public List<User> getLogins() {
        return loginService.obterTodosLogins();
    }

    @PostMapping("/loginAutenticado")

    public ResponseEntity<Map<String, Object>> loginAutenticado(@RequestBody Map<String, String> loginData) {

        String id = loginData.get("id");
        
        String email = loginData.get("email");

        String senha = loginData.get("senha");

        boolean isValid = loginService.autenticar(id,email, senha);

        Map<String, Object> response = new HashMap<>();

        if (isValid) {

            // Recuperar dados do usuário após autenticação

            Optional<User> optionalUser = loginRepository.findByEmail(email); // Certifique-se de que esse método exista

            if (optionalUser.isPresent()) {

                User user = optionalUser.get();

                // Adicionando dados do usuário à resposta

                response.put("message", "Login bem-sucedido!");

                response.put("status", "success");

                response.put("user", Map.of(

                        "id", user.getId(),

                        "nome", user.getNome(),

                        "email", user.getEmail()

                ));

                return ResponseEntity.ok(response);

            } else {

                response.put("message", "Usuário não encontrado.");

                response.put("status", "failure");

                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);

            }

        } else {

            response.put("message", "E-mail ou senha incorretos.");

            response.put("status", "failure");

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);

        }

    }

}
