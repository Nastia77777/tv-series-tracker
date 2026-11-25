import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar} from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ShowDetailsPage } from './pages/ShowDetailsPage';
import { MyShowsPage } from './pages/MyShowsPage';
import { SchedulePage } from './pages/SchedulePage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main style={{padding:'1rem'}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/show/:id" element={<ShowDetailsPage />} />
        <Route path="/my-shows" element={<MyShowsPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;