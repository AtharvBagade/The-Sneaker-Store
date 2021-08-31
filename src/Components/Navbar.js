import React from 'react';


export const Navbar = () => {

   

    
    return (
       <div className="navbar-contain">

          <div className="mobile"  >
              <section>
             <button ><i className="fas fa-times"></i></button>
             <div>
             <i className="fas fa-shopping-cart"></i>
             <i className="fas fa-user-circle"></i>
             </div>
             </section>
              <ol>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>Casual</li>
                  <li>Sports</li>
              </ol>
        </div>
       <div className="navbar1">
            <div className="logo">
                <span id="white">The Sne</span><span id="color">aker Store</span>
            </div>


            <ul className="categories">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>

           

            <ul className="cart-options">
               <li><i className="fas fa-shopping-cart"></i></li>
               <li><i className="fas fa-user-circle"></i></li>
            </ul>

            <div className="mobile-navbar">
            <button ><i className="fas fa-bars" ></i></button>
            </div>
          
             
            
        </div>
        <div className="navbar2">
        <i className="fas fa-search"></i>
        <input type="text" id="search_query" placeholder="Search what your heart wants">
        </input>
        </div>
        </div>
    )
}
