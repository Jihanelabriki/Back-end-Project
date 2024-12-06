package ma.emi.projetinegre.controller;


import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import ma.emi.projetinegre.services.DirectionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DirectionsController {
    @Autowired
    private DirectionsService openRouteService;

    @GetMapping("/route")
    public JsonNode getRoute(@RequestParam double startLat,
                             @RequestParam double startLng,
                             @RequestParam double endLat,
                             @RequestParam double endLng) {
        // Appel au service pour obtenir la réponse brute
        String response = openRouteService.getRoute(startLat, startLng, endLat, endLng);

        // Convertir la chaîne JSON en un objet JSON avec Jackson
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readTree(response);
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la conversion de la réponse en JSON", e);
        }
    }
}
