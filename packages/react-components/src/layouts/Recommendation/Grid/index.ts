/**
 * @module components/Dropdown
 */
import Loadable from 'react-loadable';
import chunks from 'helpers/chunks';

export default Loadable({
  loader: chunks.recommendation.grid,
  loading: () => null,
});
