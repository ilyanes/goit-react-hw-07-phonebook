import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor="">
        Filter contacts by name
        <input
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search ..."
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
