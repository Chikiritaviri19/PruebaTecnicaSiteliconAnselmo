package com.example.prueba_tecnica.Controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.prueba_tecnica.Entidades.Usuario;
import com.example.prueba_tecnica.Repositorios.UsuarioRepository;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UsuarioRepository userRepository;

    @GetMapping
    public List<Usuario> getAllUsers() {
        return userRepository.findAll();
    }

 
}