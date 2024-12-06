package ma.emi.projetinegre.services;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class DirectionsService {
    @Value("${openrouteservice.api.key}")
    private String apiKey; // Clé API à définir dans application.properties

    private static final String BASE_URL = "https://api.openrouteservice.org/v2/directions/driving-car";

    public String getRoute(double startLat, double startLng, double endLat, double endLng) {
        RestTemplate restTemplate = new RestTemplate();

        // Construire l'URL avec les paramètres
        String url = UriComponentsBuilder.fromHttpUrl(BASE_URL)
                .queryParam("api_key", apiKey)
                .queryParam("start", startLng + "," + startLat)
                .queryParam("end", endLng + "," + endLat)
                .toUriString();

        // Effectuer la requête GET
        String response = restTemplate.getForObject(url, String.class);

        // Retourner la réponse brute
        return response;
    }
}
