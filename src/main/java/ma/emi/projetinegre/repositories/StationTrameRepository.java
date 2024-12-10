package ma.emi.projetinegre.repositories;

import ma.emi.projetinegre.models.StationTrame;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StationTrameRepository extends MongoRepository<StationTrame, String> {
}
