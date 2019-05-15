import { configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
window.URL.createObjectURL = function() {};
configure({ adapter: new Adapter() });
