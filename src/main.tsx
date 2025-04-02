
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add CSS variables for the menu component
const style = document.createElement('style');
style.innerHTML = `
:root {
  --background: 255 255 255;
  --foreground: 0 0 0;
  --muted: 240 5% 96%;
  --muted-foreground: 240 4% 46%;
  --border: 240 6% 90%;
}

.dark {
  --background: 240 10% 4%;
  --foreground: 0 0% 98%;
  --muted: 240 4% 16%;
  --muted-foreground: 240 5% 65%;
  --border: 240 4% 16%;
}
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
