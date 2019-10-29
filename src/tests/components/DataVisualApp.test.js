import React from 'react';
import ReactDOM from 'react-dom';
import DataVisualApp from '../../components/DataVisualApp';
import { findByTestAtrr } from "../utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';

const setUp = () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<DataVisualApp />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataVisualApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'dataVisualAppComponent');
    expect(component.length).toBe(1);
});

test('on previous button click state value of series is decremented',async ()=>{
    const component = findByTestAtrr(wrapper, 'prevButton');
    await wrapper.setState({
        series: 2
      }); 
    component.simulate('click');
    expect(wrapper.state('series')).toBe(1);
  })

  test('on next button click state value of series is incremented',async ()=>{
    const component = findByTestAtrr(wrapper, 'nextButton');
    await wrapper.setState({
        series: 1
      }); 
    component.simulate('click');
    expect(wrapper.state('series')).toBe(2);
  });