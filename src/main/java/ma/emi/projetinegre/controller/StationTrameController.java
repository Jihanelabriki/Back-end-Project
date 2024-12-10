package ma.emi.projetinegre.controller;

import ma.emi.projetinegre.models.StationTrame;
import ma.emi.projetinegre.services.StationTrameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StationTrameController {

    @Autowired
    private StationTrameService stationTrameService;

    @GetMapping("/stations")
    public List<StationTrame> getAllStations() {
        return stationTrameService.getAllStations();
    }

    @GetMapping("/stations/{id}")
    public StationTrame getStationById(@PathVariable String id) {
        return stationTrameService.getStationById(id);
    }
}
