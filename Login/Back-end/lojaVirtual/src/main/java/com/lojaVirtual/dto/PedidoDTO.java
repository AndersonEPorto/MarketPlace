package com.lojaVirtual.dto;

public class PedidoDTO {
    private long idPedido;
    private String numPedido;
    private String data;
    private String status;

    private ProdutoDTO produtoDTO;
    private UserDTO userDTO;

    public PedidoDTO(long idPedido, String numPedido, String data, String status, ProdutoDTO produtoDTO,
            UserDTO userDTO) {
        this.idPedido = idPedido;
        this.numPedido = numPedido;
        this.data = data;
        this.status = status;
        this.produtoDTO = produtoDTO;
        this.userDTO = userDTO;
    }

    public long getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(long idPedido) {
        this.idPedido = idPedido;
    }

    public String getNumPedido() {
        return numPedido;
    }

    public void setNumPedido(String numPedido) {
        this.numPedido = numPedido;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public ProdutoDTO getProdutoDTO() {
        return produtoDTO;
    }

    public void setProdutoDTO(ProdutoDTO produtoDTO) {
        this.produtoDTO = produtoDTO;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }


    

}
