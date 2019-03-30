import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer'

describe('my app unit test',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected',()=> {
    const tree = renderer
    .create(<App message = 'testing'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
