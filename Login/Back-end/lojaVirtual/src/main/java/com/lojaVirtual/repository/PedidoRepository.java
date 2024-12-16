package com.lojaVirtual.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lojaVirtual.entities.Pedido;

//Interface que estende JpaRepository para fornecer operações CRUD
@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {

}
