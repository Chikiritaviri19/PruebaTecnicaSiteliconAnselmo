package com.example.prueba_tecnica.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.prueba_tecnica.Entidades.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
  
}