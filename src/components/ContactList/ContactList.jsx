import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getVisibleContacts, isLoading } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/todo';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const loader = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    !loader &&
    contacts && (
      <table>
        <tbody>
          {contacts.map(({ id, name, number }) => {
            return (
              <tr id={id} key={id}>
                <td>{name}</td>
                <td>{number}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
}
