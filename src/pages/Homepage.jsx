import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <header>
        <div className="menu-left">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/PrintItText.jpg"} />
          </div>
          <div className="menu-item">Home</div>
          <div className="menu-item">Pricing</div>
          <div className="menu-item">About us</div>
          <div className="menu-item">Contact</div>
        </div>
      </header>
      <main>
        <div className="intro">
          <div className="intro-image">
            <img src={process.env.PUBLIC_URL + "/logo.png"} />
          </div>
          <div className="intro-text-container">
            <div className="intro-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              nulla. Asperiores deleniti porro at repellendus itaque maxime fuga
              eum rerum aliquam. Commodi assumenda delectus, nisi possimus
              similique excepturi sint quos.
            </div>
          </div>
        </div>
        <section>
          <div className="menu-container">
            <div className="option">
              <div className="icon">
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </div>
              <div className="description">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </div>
              <div className="description">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </div>
              <div className="description">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </div>
              <div className="description">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </div>
              <div className="description">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="option">
              <div className="icon">
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </div>
              <div className="description">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="content-image">
              <img src="https://constructionblog.autodesk.com/wp-content/uploads/2020/08/3d-printing-in-the-construction-industry.jpg" />
            </div>
            <div className="content">
              <div className="header">
                <h1>Technology name</h1>
              </div>
              <div className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                omnis debitis qui ad impedit maiores necessitatibus molestias
                rerum, facere sed, ea provident dolore obcaecati explicabo
                adipisci? Fugit doloremque iure iusto.
              </div>
              <div className="usage">
                <h1>Usage</h1>
                <ul>
                  <li>First usage</li>
                  <li>Second one</li>
                  <li>Third crazy</li>
                </ul>
              </div>
              <div className="menu">
                <div className="menu-button">
                  <i class="fas fa-tags"></i> Pricing
                </div>
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Learn More...
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="content">
              <div className="header">
                <h1>Technology name</h1>
              </div>
              <div className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                omnis debitis qui ad impedit maiores necessitatibus molestias
                rerum, facere sed, ea provident dolore obcaecati explicabo
                adipisci? Fugit doloremque iure iusto.
              </div>
              <div className="usage">
                <h1>Usage</h1>
                <ul>
                  <li>First usage</li>
                  <li>Second one</li>
                  <li>Third crazy</li>
                </ul>
              </div>
              <div className="menu">
                <div className="menu-button">
                  <i class="fas fa-tags"></i> Pricing
                </div>
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Learn More...
                </div>
              </div>
            </div>
            <div className="content-image">
              <img src="https://images.theconversation.com/files/285678/original/file-20190725-136781-153x4jj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="content-image">
              <img src="https://images.ctfassets.net/dovsnf6qrcem/5xYXTaagt1Mt4yjRWcEans/cf7de41fc2480359318e2e729cb2e759/LAL_8195.jpeg?w=1200&h=871&fl=progressive&q=50&fm=jpg" />
            </div>
            <div className="content">
              <div className="header">
                <h1>Technology name</h1>
              </div>
              <div className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                omnis debitis qui ad impedit maiores necessitatibus molestias
                rerum, facere sed, ea provident dolore obcaecati explicabo
                adipisci? Fugit doloremque iure iusto.
              </div>
              <div className="usage">
                <h1>Usage</h1>
                <ul>
                  <li>First usage</li>
                  <li>Second one</li>
                  <li>Third crazy</li>
                </ul>
              </div>
              <div className="menu">
                <div className="menu-button">
                  <i class="fas fa-tags"></i> Pricing
                </div>
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Learn More...
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="content">
              <div className="header">
                <h1>Technology name</h1>
              </div>
              <div className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                omnis debitis qui ad impedit maiores necessitatibus molestias
                rerum, facere sed, ea provident dolore obcaecati explicabo
                adipisci? Fugit doloremque iure iusto.
              </div>
              <div className="usage">
                <h1>Usage</h1>
                <ul>
                  <li>First usage</li>
                  <li>Second one</li>
                  <li>Third crazy</li>
                </ul>
              </div>
              <div className="menu">
                <div className="menu-button">
                  <i class="fas fa-tags"></i> Pricing
                </div>
                <div className="menu-button">
                  <i class="fas fa-info-circle"></i> Learn More...
                </div>
              </div>
            </div>
            <div className="content-image">
              <img src="https://images.squarespace-cdn.com/content/v1/51b94f0ce4b01efb8e2bde98/1577746381872-VZRQSD81RSZDFKDDSVS1/TPU-rubber-printed-lattice.gif" />
            </div>
          </div>
        </section>
        <section>
          <div className="content-container">
            <div className="contact">
              <div className="item">
                <i class="fab fa-facebook-square"></i>
                Facebook
              </div>
              <div className="item">
                <i class="fab fa-twitter-square"></i>
                Twitter
              </div>
              <div className="item">
                <i class="fas fa-envelope"></i>
                contact@PrintIt3D.com
              </div>
              <div className="item">
                <i class="fab fa-instagram"></i> Instagram
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
