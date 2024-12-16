package com.lojaVirtual.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.lojaVirtual.entities.Pedido;
import com.lojaVirtual.repository.PedidoRepository;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

     // Método para criar um novo Pedido
    public ResponseEntity<Pedido> criarPedido(Pedido pedido) {

        return ResponseEntity.ok(pedidoRepository.save(pedido));
    }

    // Método para obter todos os Pedido
    public List<Pedido> obterTodosPedidos() {
        // Retornar todos os Pedido's do banco
        return pedidoRepository.findAll();

    }
}
