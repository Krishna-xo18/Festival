import React from "react";
import Media from "../components/Media";
import "./Monuments.css";

function Monuments() {
  return (
    <div className="monuments">
      <h1>Indian Monuments</h1>

      <section>
        <h2>Taj Mahal</h2>
        <p>
          The Taj Mahal, a symbol of love, is a UNESCO World Heritage site
          located in Agra, India.
        </p>
        <Media type="image" src="/images/taj-mahal.jpg" alt="Taj Mahal" />
      </section>

      <section>
        <h2>Qutub Minar</h2>
        <p>
          The Qutub Minar in Delhi is one of the tallest brick minarets in the
          world, showcasing Indo-Islamic architecture.
        </p>
        <Media type="image" src="/images/qutub-minar.jpg" alt="Qutub Minar" />
      </section>

      <section>
        <h2>Red Fort</h2>
        <p>
          The Red Fort in Delhi is an iconic symbol of India's independence,
          known for its massive red sandstone walls.
        </p>
        <Media type="image" src="/images/red-fort.jpg" alt="Red Fort" />
      </section>
    </div>
  );
}

export default Monuments;
