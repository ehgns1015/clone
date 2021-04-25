import React from 'react';
import PropTypes from 'prop-types';

function QuantitySelect({ defaultQty, onQtyChange }) {
  const [selectedQty, setSelectedQty] = React.useState(defaultQty);
  const handleQtyChange = (event) => {
    setSelectedQty(event.target.value);
    onQtyChange(event.target.value);
  };
  return (
    <div className="quantity_select">
      <select name="quantity" title="Qty" className="qty" value={selectedQty} onChange={handleQtyChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      <style jsx>{`
        @media (min-width: 1280px) {
          .quantity_select {
            width: 70px !important;
            background-position: 50px !important;
          }
        }
        .quantity_select {
          width: 60px;
          overflow: hidden;
          background-color: #fff;
          background-image: url(assets/images/down_arrow.png);
          background-repeat: no-repeat;
          background-position: 40px;
          border: 2px solid #e2e2e2;
          border-radius: 2px;
          height: 55px;
          display: inline-block;
          margin-right: 20px;
        }
        .qty {
          background: none repeat scroll 0% 0% transparent;
          width: 80px;
          padding: 5px;
          border: none;
          height: 52px;
          font-size: 18px;
          text-transform: uppercase;
          cursor: pointer;
          padding-left: 16px;
        }
        .qty:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}

QuantitySelect.propTypes = {
  defaultQty: PropTypes.number.isRequired,
  onQtyChange: PropTypes.func.isRequired,
};

export default QuantitySelect;
