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
    </div>
  );
}

QuantitySelect.propTypes = {
  defaultQty: PropTypes.number.isRequired,
  onQtyChange: PropTypes.func.isRequired,
};

export default QuantitySelect;
