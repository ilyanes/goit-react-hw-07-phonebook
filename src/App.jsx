import Header from 'components/Header/Header';
import Section from 'components/Section/Section';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { useSelector } from 'react-redux';
import { isLoading } from 'redux/selectors';
import { Oval } from 'react-loader-spinner';

export const App = () => {
  const loader = useSelector(isLoading);
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
      }}
    >
      <Header title={'PhoneBook'}>
        <Filter />
      </Header>
      {loader && (
        <Section>
          <Oval color="blue" height={'50vh'} width={80} />
        </Section>
      )}
      <Section title={'Contacts'}>
        <Form />
        <ContactList />
      </Section>
    </div>
  );
};
