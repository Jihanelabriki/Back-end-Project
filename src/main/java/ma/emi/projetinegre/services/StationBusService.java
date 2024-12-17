package ma.emi.projetinegre.services;

import ma.emi.projetinegre.models.StationBus;
import ma.emi.projetinegre.models.StationTrame;
import ma.emi.projetinegre.repositories.StationBusRepository;
import ma.emi.projetinegre.repositories.StationTrameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationBusService {

    @Autowired
    private StationBusRepository stationBusRepository;

    public List<StationBus> getAllStations() {
        return stationBusRepository.findAll();
    }

    public StationBus getStationById(String id) {
        return stationBusRepository.findById(id).orElse(null);
    }
}