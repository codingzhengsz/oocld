import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/Button';

/**
 * It returns the App model
 * @constructor
 */
function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line max-len */}
      <Button disabled>Hello</Button><Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Baidu Link</Button>
      <button>123</button>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
