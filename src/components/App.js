import React from 'react';
import ReactDom from 'react-dom';

function App(){
    return <div id="main">
<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
       
    </div>
}

ReactDom.render(<App />, document.getElementById('root'));
