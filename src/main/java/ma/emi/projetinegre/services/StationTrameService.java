package ma.emi.projetinegre.services;

import ma.emi.projetinegre.models.StationTrame;
import ma.emi.projetinegre.models.StationTrame;
import ma.emi.projetinegre.repositories.StationTrameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationTrameService {

    @Autowired
    private StationTrameRepository stationTrameRepository;

    public List<StationTrame> getAllStations() {
        return stationTrameRepository.findAll();
    }

    public StationTrame getStationById(String id) {
        return stationTrameRepository.findById(id).orElse(null);
    }
}
