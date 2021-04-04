import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreadcrumbLink = (link) => (
  <li key={link.name} className="breadcrumb-item active">
    {link.to ? <Link to={link.to}>{link.name}</Link> : link.name}
    <style jsx>{`
      .active {
        color: #252525;
        text-transform: uppercase;
      }
      li :global(a) {
        text-transform: uppercase;
        color: #969696;
      }
      li :global(a:focus) {
        text-transform: uppercase;
        color: #969696;
      }

      @media (min-width: 480px) {
        li {
          font-size: 9px;
          line-height: 15px;
        }
      }

      @media (min-width: 768px) {
        li {
          font-size: 14px;
        }
      }
    `}</style>
  </li>
);

function Breadcrumb({ title, links }) {
  return (
    <React.Fragment>
      <section className="breadcrumb-wrapper mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="page-title">
                <h2>{title}</h2>
              </div>
            </div>
            <div className="col-6">
              <ol className="breadcrumb justify-content-end align-items-center">{links.map(BreadcrumbLink)}</ol>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .breadcrumb-wrapper {
          padding-top: 108px;
          background: #ffffff;
        }
        .breadcrumb-wrapper ol.breadcrumb {
          background-color: transparent;
          margin-bottom: 0;
          padding: 0;
        }
        .breadcrumb-wrapper .page-title h2 {
          color: #797979;
          text-transform: uppercase;
          font-weight: 400;
          margin-bottom: 0;
        }

        @media (min-width: 480px) {
          .breadcrumb-wrapper ol.breadcrumb {
            float: right !important;
            min-height: 70px;
          }
        }
      `}</style>
    </React.Fragment>
  );
}

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumb;
