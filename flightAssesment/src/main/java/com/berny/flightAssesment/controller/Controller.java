package com.berny.flightAssesment.controller;

import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class Controller {

    @GetMapping("/origins")
    public List<String> findOrigins(){
        List<String> origins = new ArrayList<>();

        origins.add("Sevilla");
        origins.add("Madrid");
        origins.add("Barcelona");

        return origins;
    }

    @GetMapping("/destinations")
    public List<String> findDestinations(){
        List<String> destinations = new ArrayList<>();

        destinations.add("Paris");
        destinations.add("Granada");
        destinations.add("Seul");

        return destinations;
    }


    @GetMapping("/dates")
    public List<LocalDateTime> findDates(){
        List<LocalDateTime> destinations = new ArrayList<>();

        destinations.add(LocalDateTime.now());
        destinations.add(LocalDateTime.of(2022, 12,20, 10, 0));
        destinations.add(LocalDateTime.of(2023, 4,3, 22, 0));

        return destinations;
    }

}
