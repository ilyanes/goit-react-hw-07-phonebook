import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/selectors';

function Section({ title, children }) {
  const loader = useSelector(isLoading);
  return (
    <section>
      {!loader && <h2>{title}</h2>}
      <div>{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
