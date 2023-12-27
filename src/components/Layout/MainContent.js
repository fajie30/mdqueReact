import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import User from '../Pages/User';

const MainContent = () => {
    return (
      <main className="p-4">
        <Routes>
          {/* other routes... */}
          
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/user" element={<User />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>
    );
  };
  
  export default MainContent;