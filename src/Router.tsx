import { Route, Routes } from 'react-router-dom';
import { Editor } from './pages/Editor';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Editor />} />
    </Routes>
  )
}