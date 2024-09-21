import { SlideInPanel } from './components/SlideInPanel/SlideInPanel';
import { useApp } from './hooks/useApp';


const App: React.FC = () => {
  const { openPanel, panel } = useApp();

  return (
    <div className="App">
      <button onClick={openPanel}>Open Panel</button>
      <SlideInPanel {...panel}>
        <p>This is the content inside the panel.</p>
      </SlideInPanel>
    </div>
  );
};

export default App;