import React from 'react';
import PropTypes from 'prop-types';

function QuantitySelect({ defaultQty, onQtyChange }) {
  const [selectedQty, setSelectedQty] = React.useState(defaultQty);
  const handleQtyChange = (event) => {
    setSelectedQty(event.target.value);
    onQtyChange(event.target.value);
  };
  const nums = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="quantity_select">
      <select name="quantity" title="Qty" className="qty" value={selectedQty} onChange={handleQtyChange}>
        {nums.map((i)=><option key={i} value={i}>{i}</option>)}
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
