package ma.emi.projetinegre.repositories;

import ma.emi.projetinegre.models.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface RestaurantRepository extends MongoRepository<Restaurant,String> {
}
