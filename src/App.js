import './App.css';
import Preview from './components/Preview';
import { Provider } from 'react-redux';
import store from './stores/store';
import Editor from './components/Editor';
import { useState } from 'react';

function App() {
  const [FullViewSwitch, setFullViewSwitch] = useState(0);

  function handleFullViewSwitch(callerNumber)
  {
    //basically set to 0 if was already in full view
    //else set that component to full-view

    if (FullViewSwitch === callerNumber)
      setFullViewSwitch(0);
    else
      setFullViewSwitch(callerNumber);
  }

  return (
    <Provider store={store}>
      {(FullViewSwitch === 0 || FullViewSwitch === 1) && <Editor id="editor" onExpandCollapse={() => handleFullViewSwitch(1)} compressed={FullViewSwitch !== 0} />}
      {(FullViewSwitch === 0 || FullViewSwitch === 2) && <Preview id="preview" onExpandCollapse={() => handleFullViewSwitch(2)} compressed={FullViewSwitch !== 0} />}
    </Provider>
  );
}

export default App;
