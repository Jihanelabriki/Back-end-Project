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
public class StationBusController {

    @Autowired
    private StationTrameService stationBusService;

    @GetMapping("/stationBus")
    public List<StationTrame> getAllStations() {
        return stationBusService.getAllStations();
    }

    @GetMapping("/stationBus/{id}")
    public StationTrame getStationById(@PathVariable String id) {
        return stationBusService.getStationById(id);
    }
}
