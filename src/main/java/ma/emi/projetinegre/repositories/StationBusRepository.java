package ma.emi.projetinegre.repositories;

import ma.emi.projetinegre.models.StationBus;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StationBusRepository extends MongoRepository<StationBus, String> {
}
