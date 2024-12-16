package com.lojaVirtual.dto;

public class ProdutoDTO {
    private long idProduto;
    private String nome;
    private String descricao;
    private String preco;
    private String nomeImagem;

    private UserDTO user;

    public ProdutoDTO(String nome, String descricao, String preco, UserDTO userDTO, long idProduto, String nomeImagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.user = userDTO;
        this.idProduto = idProduto;
        this.nomeImagem = nomeImagem;
    }

    public ProdutoDTO() {
        //TODO Auto-generated constructor stub
    }

    public long getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(long idProduto) {
        this.idProduto = idProduto;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getPreco() {
        return preco;
    }

    public void setPreco(String preco) {
        this.preco = preco;
    }

    public String getNomeImagem() {
        return nomeImagem;
    }

    public void setNomeImagem(String nomeImagem) {
        this.nomeImagem = nomeImagem;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}
