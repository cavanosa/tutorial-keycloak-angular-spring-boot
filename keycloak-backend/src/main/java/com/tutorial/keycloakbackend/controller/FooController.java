package com.tutorial.keycloakbackend.controller;

import com.tutorial.keycloakbackend.dto.ResponseMessage;
import com.tutorial.keycloakbackend.model.Foo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/foo")
@CrossOrigin
public class FooController {

    List<Foo> foos =
            Stream.of(new Foo(1, "foo 1"),
                    new Foo(2, "foo 2"),
                    new Foo(3, "foo 3")).collect(Collectors.toList());

    @GetMapping("/list")
    @RolesAllowed("backend-user")
    public ResponseEntity<List<Foo>> list(){
        return new ResponseEntity(foos, HttpStatus.OK);
    }

    @RolesAllowed("backend-user")
    @GetMapping("/detail/{id}")
    public ResponseEntity<Foo> detail(@PathVariable("id") int id){
        Foo foo = foos.stream().filter(f -> f.getId() == id).findFirst().orElse(null);
        return new ResponseEntity(foo, HttpStatus.OK);
    }

    @RolesAllowed("backend-admin")
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody Foo foo){
        int maxIndex = foos.stream().max(Comparator.comparing(m -> m.getId())).get().getId();
        foo.setId(maxIndex + 1);
        foos.add(foo);
        return new ResponseEntity(new ResponseMessage("creado"), HttpStatus.CREATED);
    }

    @RolesAllowed("backend-admin")
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody Foo foo){
        Foo fooUpdate = foos.stream().filter(f -> f.getId() == id).findFirst().orElse(null);
        fooUpdate.setName(foo.getName());
        return new ResponseEntity(new ResponseMessage("actualizado"), HttpStatus.OK);
    }

    @RolesAllowed("backend-admin")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        Foo foo = foos.stream().filter(f -> f.getId() == id).findFirst().orElse(null);
        foos.remove(foo);
        return new ResponseEntity(new ResponseMessage("eliminado"), HttpStatus.OK);
    }


}
