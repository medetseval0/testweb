import { useLocation } from 'react-router-dom';

export default function RouteInfo() {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-4 right-4 bg-[#222222] border border-gray-600 rounded-lg p-3 text-white z-50">
      <div className="text-xs text-gray-400 mb-1">Mevcut URL:</div>
      <div className="text-sm font-mono text-[#81a743]">{location.pathname}</div>
    </div>
  );
}