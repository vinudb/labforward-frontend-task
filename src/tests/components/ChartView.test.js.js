import React from 'react';
import ReactDOM from 'react-dom';
import ChartView from '../../components/ChartView';
import { findByTestAtrr } from "../utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';

const setUp = () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<ChartView />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChartView />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'chartViewComponent');
    expect(component.length).toBe(1);
});