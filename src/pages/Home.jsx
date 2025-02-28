import React, { useState } from 'react';
import '../components/styles.css';

const Home = () => {
  // State variables to manage visibility of extra content
  const [showChicken, setShowChicken] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [showCheesecake, setShowCheesecake] = useState(false);

  // Toggle function
  const toggleChicken = () => setShowChicken(!showChicken);
  const toggleBurger = () => setShowBurger(!showBurger);
  const toggleCheesecake = () => setShowCheesecake(!showCheesecake);

  return (
    <div>
    <div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="Food-best-hd-photos.jpg" class="d-block w-100" alt="PIZZA" />
            </div>
            <div class="carousel-item">
                <img src="wp7029319.webp" class="d-block w-100" alt="biriyani" />
            </div>
            <div class="carousel-item">
                <img src="wp3608465.webp" class="d-block w-100" alt="french fries" />
            </div>
            <div class="carousel-item">
                <img src="360_F_551072558_rENux9fqlec5GPBJSaToT69xjcYiGxje.jpg" class="d-block w-100" alt="french fries" />
            </div>
            <div class="carousel-item">
                <img src="OIP (3).jpeg" class="d-block w-100" alt="french fries" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>


    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 m-1">
        <div className="col">
            <div className="card">
                <img src="OIP (1).jpeg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Chicken Grill</h5>
                    <p className="card-text">Grilled chicken is one of the most popular and versatile dishes in the world, loved for its smoky flavor, tenderness, and juicy texture.</p>
                    {showChicken && (
                        <p className="extra-content">You can also try different marinades to give it various flavors. A simple garlic and lemon marinade gives the chicken a tangy and savory taste.</p>
                    )}
                    <button className="scroll-button" onClick={toggleChicken}>
                        {showChicken ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="OIP.jpeg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Veg Burger</h5>
                    <p className="card-text">A burger is a popular and delicious sandwich made typically with a ground meat patty, often beef, placed between two slices of a bun.</p>
                    {showBurger && (
                        <p className="extra-content">It can be topped with a variety of ingredients like lettuce, tomato, cheese, onions, pickles, and condiments such as ketchup, mustard, or mayonnaise.</p>
                    )}
                    <button className="scroll-button" onClick={toggleBurger}>
                        {showBurger ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="OIP (2).jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Blueberry Cheesecake</h5>
                    <p className="card-text">Blueberry cheesecake is a creamy, indulgent dessert that combines the rich, smooth texture of cheesecake with the sweet and slightly tart flavor of fresh blueberries.</p>
                    {showCheesecake && (
                        <p className="extra-content">It's often topped with fresh or compote blueberries for added sweetness and texture, making it a perfect treat for any occasion.</p>
                    )}
                    <button className="scroll-button" onClick={toggleCheesecake}>
                        {showCheesecake ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Home;