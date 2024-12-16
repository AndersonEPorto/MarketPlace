package com.lojaVirtual.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lojaVirtual.entities.Produto;

//Interface que estende JpaRepository para fornecer operações CRUD
@Repository
public interface ProdutoRepository extends JpaRepository <Produto, Long>{
    
    List<Produto> findByUserId(Long userId);
}
