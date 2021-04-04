import React from 'react';
import worldMapImg from '../../assets/images/world_map.png';

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="flex-fill bg-light contact p-4">
        <div className="container">
          <div className="row copy mb-4 mt-3">
            <div className="col-12 text-center">
              <div className="navy-line"></div>
              <h1>Contact Us</h1>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.</p>
            </div>
          </div>
          <div className="row mb-m">
            <div className="col-lg-3 col-lg-offset-3">
              <address>
                <strong>
                  <span className="navy">Fastcampus, Inc.</span>
                </strong>
                <br />
                339, Teheran-ro, Gangnam-gu
                <br />
                Seoul, Republic of Korea
                <br />
                <abbr title="Phone">P:</abbr> (02) 111-1111
              </address>
            </div>
            <div className="col-lg-4">
              <p className="text-color">
                Consectetur adipisicing elit. Aut eaque, totam corporis laboriosam veritatis quis ad perspiciatis, totam
                corporis laboriosam veritatis, consectetur adipisicing elit quos non quis ad perspiciatis, totam
                corporis ea,
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 text-center">
              <a href="mailto:test@email.com" className="btn btn-primary">
                Send us mail
              </a>
              <p className="m-t-sm">Or follow us on social platform</p>
              <ul className="list-line social-icon m-0 p-0">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-m mb-m">
              <p>
                <strong>&copy; 2020 Fastcampus</strong>
                <br />
                consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
                corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer p {
          color: #aeaeae;
          font-size: 13px;
        }
        .social-icon a {
          background: #1ab394;
          color: #fff;
          padding: 4px 8px;
          height: 28px;
          width: 28px;
          display: block;
          border-radius: 50px;
          font-size: 13px;
        }
        .contact {
          background-image: url(${worldMapImg});
          background-position: 50% 50%;
          background-repeat: no-repeat;
        }
      `}</style>
    </React.Fragment>
  );
}
