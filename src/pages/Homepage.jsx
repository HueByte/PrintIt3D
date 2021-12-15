import React from "react";

export const Homepage = () => {
  return (
    <>
      <header>
        <div className="menu-container">
          <div className="menu-container left">
            <div className="logo">
              <img src={process.env.PUBLIC_URL + "/PrintItText.jpg"} />
            </div>
            <div className="item">Home</div>
            <div className="item">Pricing</div>
            <div className="item">About us</div>
            <div className="item">Contact</div>
          </div>
        </div>
      </header>
      <div className="intro">
        <img src={process.env.PUBLIC_URL + "/logo.png"} />
        <div className="intro-text-container">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nulla.
            Asperiores deleniti porro at repellendus itaque maxime fuga eum
            rerum aliquam. Commodi assumenda delectus, nisi possimus similique
            excepturi sint quos.
          </div>
        </div>
      </div>
      <main className="content-container">
        <div className="content-menu">
          <div className="option">
            <i class="fa fa-bolt" aria-hidden="true"></i> Option
          </div>
          <div className="option">
            <i class="fa fa-bolt" aria-hidden="true"></i> Option
          </div>
          <div className="option">
            <i class="fa fa-bolt" aria-hidden="true"></i> Option
          </div>
          <div className="option">
            <i class="fa fa-bolt" aria-hidden="true"></i> Option
          </div>
          <div className="option">
            <i class="fa fa-bolt" aria-hidden="true"></i> Option
          </div>
          <div className="option">
            <i class="fa fa-bolt" aria-hidden="true"></i> Option
          </div>
          <div className="option">
            <i class="fa fa-bolt" aria-hidden="true"></i> Option
          </div>
          <div className="option">
            <i class="fa fa-bolt" aria-hidden="true"></i> Option
          </div>
        </div>
        <section>
          <div className="section-container">
            <div className="image">
              <img src="https://www.theupsstore.com/Image%20Library/theupsstore/general-content/gc1/gc1_print-3d-print.jpg" />
            </div>
            <div className="text">
              <h1>Some title</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              voluptatum, doloribus dolores, tenetur similique itaque animi eius
              nisi quos adipisci assumenda error? Blanditiis assumenda alias
              atque iste, nemo amet doloremque!
            </div>
          </div>
        </section>
        <section>
          <div className="section-container">
            <div className="text">
              <h1>Some title</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              voluptatum, doloribus dolores, tenetur similique itaque animi eius
              nisi quos adipisci assumenda error? Blanditiis assumenda alias
              atque iste, nemo amet doloremque!
            </div>
            <div className="image">
              <img src="https://images.theconversation.com/files/285678/original/file-20190725-136781-153x4jj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
            </div>
          </div>
        </section>
        <section>
          <div className="section-container">
            <div className="image">
              <img src="https://images.ctfassets.net/dovsnf6qrcem/5xYXTaagt1Mt4yjRWcEans/cf7de41fc2480359318e2e729cb2e759/LAL_8195.jpeg?w=1200&h=871&fl=progressive&q=50&fm=jpg" />
            </div>
            <div className="text">
              <h1>Some title</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              voluptatum, doloribus dolores, tenetur similique itaque animi eius
              nisi quos adipisci assumenda error? Blanditiis assumenda alias
              atque iste, nemo amet doloremque!
            </div>
          </div>
        </section>
        <section>
          <div className="section-container">
            <div className="text">
              <h1>Some title</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              voluptatum, doloribus dolores, tenetur similique itaque animi eius
              nisi quos adipisci assumenda error? Blanditiis assumenda alias
              atque iste, nemo amet doloremque!
            </div>
            <div className="image">
              <img src="https://images.squarespace-cdn.com/content/v1/51b94f0ce4b01efb8e2bde98/1577746381872-VZRQSD81RSZDFKDDSVS1/TPU-rubber-printed-lattice.gif" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
