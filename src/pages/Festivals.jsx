import React from "react";
import Media from "../components/Media";
import "./Festivals.css";

function Festivals() {
  return (
    <div className="festivals">
      <h1>Festivals of India</h1>
      <section>
        <h2>Diwali</h2>
        <p>
          Diwali, the Festival of Lights, is celebrated with grandeur across
          India, marking the triumph of light over darkness.
        </p>
        <Media type="image" src="/images/diwali.jpg" alt="Diwali Celebration" />
        <Media type="video" src="/videos/diwali.mp4" />
      </section>

      <section>
        <h2>Holi</h2>
        <p>
          Holi, the Festival of Colors, brings people together to celebrate
          love, joy, and the arrival of spring.
        </p>
        <Media type="image" src="/images/holi.jpg" alt="Holi Celebration" />
        <Media type="video" src="/videos/holi.mp4" />
      </section>

      <section>
        <h2>Eid</h2>
        <p>
          Eid al-Fitr is a time for charity, celebration, and feasting,
          celebrated at the end of Ramadan.
        </p>
        <Media type="image" src="/images/eid.jpg" alt="Eid Celebration" />
        <Media type="video" src="/videos/eid.mp4" />
      </section>
    </div>
  );
}

export default Festivals;
