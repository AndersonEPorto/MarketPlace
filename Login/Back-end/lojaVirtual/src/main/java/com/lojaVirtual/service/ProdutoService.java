package com.lojaVirtual.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.lojaVirtual.dto.ProdutoDTO;
import com.lojaVirtual.dto.UserDTO;
import com.lojaVirtual.entities.Produto;
import com.lojaVirtual.entities.User;
import com.lojaVirtual.repository.LoginRepository;
import com.lojaVirtual.repository.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private LoginRepository loginRepository;

    public static String caminho = "C:\\Users\\Usuário\\OneDrive - SENAC-SC\\Documentos\\Front-End\\Trabalhos\\Login\\Login\\Front-end\\static\\image\\";

    public List<Produto> listarProduto() {
        return produtoRepository.findAll();
    }

    public ResponseEntity<ProdutoDTO> criarProduto(ProdutoDTO produtoRecebido, MultipartFile file) {
        // Buscar o User pelo ID
        User user = loginRepository.findById(produtoRecebido.getUser().getId())
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        Produto produto = new Produto();
        produto.setUser(user);
        produto.setNome(produtoRecebido.getNome());
        produto.setDescricao(produtoRecebido.getDescricao());
        produto.setPreco(produtoRecebido.getPreco());

        // Salvar o produto inicialmente para gerar o ID
        Produto produtoSalvo = produtoRepository.save(produto);

        // Processar o arquivo
        if (file != null && !file.isEmpty()) {
            try {
                // Criar o caminho do arquivo
                String nomeArquivo = produtoSalvo.getId() + "_" + file.getOriginalFilename();
                Path caminhoArquivo = Paths.get(caminho + nomeArquivo);

                // Salvar o arquivo na pasta especificada
                Files.write(caminhoArquivo, file.getBytes());

                // Atualizar o produto com o caminho da imagem
                produtoSalvo.setNomeImagem(nomeArquivo);
                produtoRepository.save(produtoSalvo);
            } catch (IOException e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }

        UserDTO userDTO = new UserDTO(user.getId(), user.getNome(), user.getSobreNome(), user.getEmail(),
                user.getSenha());

        ProdutoDTO produtoDTO = new ProdutoDTO();
        produtoDTO.setIdProduto(produtoSalvo.getId());
        produtoDTO.setNome(produtoSalvo.getNome());
        produtoDTO.setDescricao(produtoSalvo.getDescricao());
        produtoDTO.setPreco(produtoSalvo.getPreco());
        produtoDTO.setNomeImagem(produtoSalvo.getNomeImagem());
        produtoDTO.setUser(userDTO);

        return ResponseEntity.ok(produtoDTO);
    }

    public List<ProdutoDTO> listaProdutos() {
        List<Produto> produtos = produtoRepository.findAll();
        return produtos.stream()
                .map(produto -> new ProdutoDTO(
                        produto.getNome(),
                        produto.getDescricao(),
                        produto.getPreco(),
                        convetUserDTO(produto.getUser()),
                        produto.getId(),
                        produto.getNomeImagem())) // Adicionando o nome da imagem
                .collect(Collectors.toList());
    }

    public List<ProdutoDTO> listarProdutosPorUsuario(Long userId) {
        List<Produto> produtos = produtoRepository.findByUserId(userId);
        return produtos.stream()
                .map(produto -> new ProdutoDTO(
                        produto.getNome(),
                        produto.getDescricao(),
                        produto.getPreco(),
                        convetUserDTO(produto.getUser()),
                        produto.getId(),
                        produto.getNomeImagem())) // Adicionando o nome da imagem
                .collect(Collectors.toList());
    }

    public boolean deleteProduto(Long idProduto) {
        Optional<Produto> produtoExiste = produtoRepository.findById(idProduto);
        if (produtoExiste.isPresent()) {
            produtoRepository.deleteById(idProduto);
            return true;
        } else {
            return false;
        }
    }

    public Produto updateProduto(Long idProduto, ProdutoDTO produtoDTO, MultipartFile file) {
        Produto produto = produtoRepository.findById(idProduto)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        // Atualize os campos do produto
        produto.setNome(produtoDTO.getNome());
        produto.setDescricao(produtoDTO.getDescricao());
        produto.setPreco(produtoDTO.getPreco());
        produto.setNomeImagem(produtoDTO.getNomeImagem()); // Atualizando o nome da imagem

        // Atualize o usuário do produto, se necessário
        User user = loginRepository.findById(produtoDTO.getUser().getId())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        produto.setUser(user);

        return produtoRepository.save(produto);
    }

    // Convertendo Usuario para Usuario DTO
    private UserDTO convetUserDTO(User user) {
        UserDTO userDTO = new UserDTO(user.getId());
        return userDTO;
    }
}
