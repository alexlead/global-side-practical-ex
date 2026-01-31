import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import MessageListPage from './pages/MessageListPage';
import CreateMessagePage from './pages/CreateMessagePage';
import MessageDetailsPage from './pages/MessageDetailsPage';
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MessageListPage />} />
            <Route path="create" element={<CreateMessagePage />} />
            <Route path="message/:id" element={<MessageDetailsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
