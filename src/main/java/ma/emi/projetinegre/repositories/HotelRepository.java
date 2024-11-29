package ma.emi.projetinegre.repositories;

import ma.emi.projetinegre.models.Hotel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HotelRepository extends MongoRepository<Hotel, String> {
}
