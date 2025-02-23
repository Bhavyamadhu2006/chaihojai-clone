import React from "react";

function MainContent() {
  return (
    <main className="container mx-auto p-4">
      <section id="home" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to Chaihojai</h2>
        <p>
          Experience the best tea from around the world, delivered to your
          doorstep.
        </p>
      </section>
      <section id="about" className="my-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          We are passionate about tea and committed to bringing you the finest
          blends.
        </p>
      </section>
      <section id="services" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <ul className="list-disc pl-5">
          <li>Curated tea selections</li>
          <li>Subscription plans</li>
          <li>Custom gift boxes</li>
        </ul>
      </section>
      <section id="contact" className="my-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions, feel free to{" "}
          <a href="mailto:info@chaihojai.com" className="text-blue-500">
            email us
          </a>
          .
        </p>
      </section>
    </main>
  );
}

export default MainContent;
