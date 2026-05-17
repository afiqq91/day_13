package com.example.instructor_api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/instructors")
public class InstructorController {

    private List<Instructor> instructors = new ArrayList<>();

    @GetMapping
    public List<Instructor> getAllInstructors() {
        return instructors;
    }

    @PostMapping
    public Instructor createInstructor(
            @RequestBody Instructor instructor
    ) {

        instructors.add(instructor);

        return instructor;
    }
}

class Instructor {

    public String name;
    public String email;
    public String specialization;
    public int yearsExperience;
    public boolean active;
}