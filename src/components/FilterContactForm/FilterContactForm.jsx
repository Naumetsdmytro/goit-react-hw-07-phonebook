import { filterContacts } from 'components/redux/filterSlice';
import { getFilterValue } from 'components/redux/selectors';
import { useSelector, useDispatch } from 'react-redux';

import style from './FilterContactForm.module.css';

export const FilterContactForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  return (
    <label className={style.inputTitle}>
      <span className={style.inputText}>Find contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.currentTarget.value))}
        className={style.filterInput}
      />
    </label>
  );
};
