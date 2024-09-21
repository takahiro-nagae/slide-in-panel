import Header from '../../components/Header/Header';
import { SlideInPanel } from './components/SlideInPanel/SlideInPanel';
import { useApp } from './hooks/useApp';


const App: React.FC = () => {
  const { handleOpen, isOpen, panel } = useApp();

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => handleOpen('/page1')}>Open Panel with Page 1</button>
      </div>
      {isOpen && <SlideInPanel {...panel} /> }
    </div>
  );
};

export default App;