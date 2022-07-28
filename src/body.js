import React from "react";

import { NftGallery } from 'react-nft-gallery';

class body extends React.Component {
  render() {
    return (
      <div>
        <section className="center padding">
          <div className="margin-bottom max-width-m">
            <h3>My Non-Fungible Token Collection!</h3>
            <p className="lead">
              Welcome to my online digital gallery of pieces of art that belong
              to me and my foundation.
            </p>
          </div>
          <div className="max-width-l">
          <NftGallery ownerAddress="0x840d64888b9595163ba26ec8e04e533b1a4afa1d" />
          </div>
        </section>
        <footer className="footer-main bg-light">
          <div className="padding">
            <div className="row max-width-l">
              <div className="col-one-fifth">
                <h6>Other Links</h6>


              </div>
              <div className="col-one-fifth">
                <h6>Connect</h6>
                <ul className="blank">
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Medium</a>
                  </li>
                </ul>
              </div>
              <div className="col-two-fifths">
                <div className="max-width-s">
                  <h6>Sunscribe to our digital gallery!</h6>
                  <p>
                    Get the latest news and updates about new additions to my digital art collection.
                  </p>
                  <form className="row reduce-spacing">
                    <div className="col-two-thirds">
                      <input
                        id="subscribe"
                        type="email"
                        name="email"
                        placeholder="Your email..."
                      />
                    </div>
                    <div className="col-one-third">
                      <a
                        href="#"
                        className="button button-primary button-m full-width"
                        role="button"
                      >
                        Subscribe
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <p className="copyright">
            <span> © 2021, all rights reserved.</span>
          </p>
        </footer>
      </div>
    );
  }
}

export default body;
