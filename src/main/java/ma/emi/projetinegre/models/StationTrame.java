
    package ma.emi.projetinegre.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

    @Document(collection = "stationTrame")
    public class StationTrame {

        @Id
        private String id;
        private String name;
        private double lat;
        private double lng;
        private String[] lines;

        public void setLines(String[] lines) {
            this.lines = lines;
        }

        public String[] getLines() {
            return lines;
        }

        // Getters and setters
        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public double getLat() {
            return lat;
        }

        public void setLat(double lat) {
            this.lat = lat;
        }

        public double getLng() {
            return lng;
        }

        public void setLng(double lng) {
            this.lng = lng;
        }
    }


