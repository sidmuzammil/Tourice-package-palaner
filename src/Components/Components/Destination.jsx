import React from "react";
import "./Destination.css";
import Destinationdata from "../Destinationdata";

const Destination = () => {
  return (
    <div className="destination">
      <div className="main-heding">
        <h1>popular Destination</h1>
        <p>
          We travel, some of us forever, to seek other states,<br/> other lives,
          other souls
        </p>
      </div>
      <Destinationdata
        classname="first-des"
        heading="Paris"
        text=" Paris, the City of Light, is brimming with iconic attractions. From
       the Eiffel Tower's panoramic views to the artistic treasures in the
       Louvre and the charming streets of Montmartre, there's something for
       every traveler. Explore Notre-Dame Cathedral, stroll the
       Champs-Élysées to the Arc de Triomphe, or enjoy a Seine River cruise.
       Nearby, Versailles Palace dazzles, and the Musée d'Orsay houses
       Impressionist gems. Relax in Luxembourg Gardens, marvel at the Palais
       Garnier, or catch a show at the Moulin Rouge. Paris weaves history,
       art, and culture into an unforgettable experience"
        img1="https://images.unsplash.com/photo-1590498418623-40431bd3b088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        img2="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
      />
      <Destinationdata
        classname="first-des-reverse"
        heading="Maldives"
        text=" The Maldives, an exquisite tropical paradise in the Indian Ocean, is a dream 
        destination for beach lovers and divers alike. Comprising 26 coral atolls and over 1,000 coral islands
        , it offers stunning white-sand beaches, crystal-clear waters, and vibrant coral reefs teeming with marine life
        . Visitors can stay in overwater bungalows, relish fresh seafood, and indulge in water sports like 
        snorkeling and scuba diving. The Maldives epitomizes luxury and natural beauty, making it a coveted
         escape for honeymooners and travelers seeking idyllic island bliss."
        img1="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
        img2="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
      />
      <Destinationdata
        classname="first-des"
        heading="Hong Kong"
        text=" Hong Kong, a vibrant metropolis on China's southern coast, is a captivating blend of modernity and tradition. Its iconic skyline boasts towering skyscrapers while nestled beside serene temples and bustling street markets. The city offers a dynamic culinary scene, from street food stalls to Michelin-starred restaurants. Explore Victoria Peak for panoramic views, visit historic sites like Man Mo Temple, or take a ferry ride across Victoria Harbour. With its rich history, shopping meccas like Causeway Bay, and the lively atmosphere of Mong Kok, Hong Kong is a captivating destination for culture, commerce, and exploration."
        img1="https://images.unsplash.com/photo-1594973782943-3314fe063f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        img2="https://images.unsplash.com/photo-1576788369575-4ab045b9287e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1944&q=80"
      />
    </div>
  );
};

export default Destination;
