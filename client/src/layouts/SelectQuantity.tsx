import { ISelectQuantityProps } from '../interfaces';
import { Select } from '../components';

function SelectQuantity(props: ISelectQuantityProps) {
  const { countInStock, value, setter } = props;
  const stockIndices = Array.from({ length: countInStock ?? 0 }, (_, index) => index);

  return (
    <Select
      value={value}
      onChange={(event) => setter(event)}
    >
      {stockIndices.map(x => (
        <option
          key={x + 1}
          value={x + 1}
        >
          {x + 1}
        </option>
      ))}
    </Select>
  )
}

export default SelectQuantity;
