import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
    <App />
    <Analytics />
    <SpeedInsights />
  </ThemeProvider>
);
