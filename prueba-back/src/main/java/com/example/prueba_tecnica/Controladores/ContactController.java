package com.example.prueba_tecnica.Controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.prueba_tecnica.Entidades.Contacto;
import com.example.prueba_tecnica.Repositorios.ContactoRepository;

// ContactController.java
@RestController
@RequestMapping("/contacts")
public class ContactController {
    @Autowired
    private ContactoRepository contactRepository;

    @GetMapping
    public List<Contacto> getAllContacts() {
        return contactRepository.findAll();
    }

    // Implementar otros métodos para CRUD
}