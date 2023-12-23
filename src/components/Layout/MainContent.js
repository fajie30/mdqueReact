import { Routes, Route } from 'react-router-dom';
import Dashboard from './../Contents/Dashboard';

const MainContent = () => {
    return (
      <main className="p-4">
        <Routes>
          {/* other routes... */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>
    );
  };
  
  export default MainContent;