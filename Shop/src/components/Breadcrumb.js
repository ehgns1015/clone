import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreadcrumbLink = (link) => (
  <li key={link.name} className="breadcrumb-item active">
    {link.to ? <Link to={link.to}>{link.name}</Link> : link.name}
  </li>
);

function Breadcrumb({ title, links }) {
  return (
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
