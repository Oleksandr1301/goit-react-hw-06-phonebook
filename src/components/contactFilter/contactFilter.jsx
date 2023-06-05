import { useDispatch, useSelector } from 'react-redux';
import { setValueFilter } from 'redux/filterSlice';
import { getValueFilter } from 'redux/selectors';
import { FilterBox, FilterInput } from './contactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getValueFilter);

  const onFilter = e => {
    dispatch(setValueFilter(e.target.value));
  };

  return (
    <FilterBox htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </FilterBox>
  );
};
