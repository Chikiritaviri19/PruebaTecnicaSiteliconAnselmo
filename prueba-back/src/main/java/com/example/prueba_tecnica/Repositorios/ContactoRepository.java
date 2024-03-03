package com.example.prueba_tecnica.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.prueba_tecnica.Entidades.Contacto;

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long> {

}