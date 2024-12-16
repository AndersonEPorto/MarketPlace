package com.lojaVirtual.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lojaVirtual.dto.ProdutoDTO;
import com.lojaVirtual.entities.Produto;
import com.lojaVirtual.service.ProdutoService;

// Anotação que define esta classe como um controlador REST
@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    // http://127.0.0.1:8080/pedido/ok
    @RequestMapping("/ok")
    public String produtoOk() {
        return "produtoOk";
    }

    @PostMapping
    public ResponseEntity<ProdutoDTO> addProduto(
            @RequestParam("produto") String produtoJson,
            @RequestParam("file") MultipartFile file) throws JsonMappingException, JsonProcessingException {

        ProdutoDTO produto = new ObjectMapper().readValue(produtoJson, ProdutoDTO.class);
        return produtoService.criarProduto(produto, file);
    }

    @GetMapping
    public List<ProdutoDTO> geProdutos() {
        return produtoService.listaProdutos();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<ProdutoDTO>> listarProdutosPorUsuario(@PathVariable Long userId) {
        List<ProdutoDTO> produtos = produtoService.listarProdutosPorUsuario(userId);
        return ResponseEntity.ok(produtos);
    }

    @DeleteMapping("/{idProduto}")
    public ResponseEntity<Void> deleteProdutoById(@PathVariable Long idProduto) {
        boolean itemDeletado = produtoService.deleteProduto(idProduto);
        if (itemDeletado) {
            return ResponseEntity.noContent().build(); // 204 Exclusão com sucesso
        } else {
            return ResponseEntity.notFound().build(); // 404 Não encontrou
        }
    }

    @PutMapping("/{idProduto}")
    public ResponseEntity<Produto> updateProduto(
            @PathVariable Long idProduto,
            @RequestParam("produto") String produtoJson,
            @RequestParam(value = "file", required = false) MultipartFile file)
            throws JsonMappingException, JsonProcessingException {

        ProdutoDTO produtoDTO = new ObjectMapper().readValue(produtoJson, ProdutoDTO.class);
        Produto updateProduto = produtoService.updateProduto(idProduto, produtoDTO, file);

        return ResponseEntity.ok(updateProduto);
    }
}
