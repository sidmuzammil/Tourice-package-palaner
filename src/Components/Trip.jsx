import React from "react";
import "./Trip.css";
import TripData from "./TripData";

const Trip = () => {
  return (
    <div className="trip">
      <div className="Trip-heading">
        <h1>Recent Trips</h1>
        <p>You can deserve unique destination using google Maps.</p>
      </div>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1584098731294-e1e5453c8039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          heading="Indonesia"
          text="Indonesia, an enchanting Southeast Asian archipelago, beckons with its diverse natural beauty and cultural richness. Comprising thousands of islands, it offers lush rainforests, pristine beaches, and active volcanoes, including iconic Mount Bromo and Mount Rinjani. Bali, one of its most famous islands, captivates visitors with its serene temples, vibrant arts scene, and world-class surfing. Jakarta, the capital, is a bustling hub of commerce and culture. Indonesia is a tapestry of traditions, from intricate batik textiles to vibrant festivals like Nyepi and Galungan. With its warm hospitality and stunning landscapes, Indonesia is a captivating destination for adventure and cultural exploration."
        />
        <TripData
          image="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          heading="Iceland"
          text="Iceland, a captivating Nordic island nation, is known for its dramatic landscapes and unique natural wonders. It's often called the Land of Fire and Ice due to its contrasting elements: geothermal hot springs and glaciers. The country boasts stunning waterfalls like Gullfoss and Skogafoss, as well as the otherworldly landscapes of the Golden Circle, including geysers like Strokkur. Visitors can also relax in the healing waters of the Blue Lagoon, explore the vibrant capital city of Reykjavik, or embark on thrilling adventures like glacier hiking and whale watching. Iceland's pristine wilderness, rich folklore, and welcoming culture make it a must-visit destination for nature enthusiasts and adventurers alike."
        />
        <TripData
          image="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          heading="Switzerland"
          text=" Switzerland is a picturesque country nestled in the heart of Europe, renowned for its stunning Alpine landscapes, precision engineering, and cultural diversity. It's often called the Swiss Confederation and is famous for its pristine lakes, towering mountains, and charming villages. The Swiss cities, such as Zurich, Geneva, and Lucerne, offer a blend of modern amenities and historical charm. Switzerland is celebrated for its precision watchmaking and delectable chocolate. Visitors flock to enjoy outdoor activities like skiing and hiking in the Swiss Alps, while also savoring its world-class cuisine and exploring its rich cultural heritage. With its efficient public transportation system and a reputation for neutrality and political stability, Switzerland is a top destination for travelers seeking natural beauty, culture, and adventure."
        />
      </div>
    </div>
  );
};

export default Trip;
