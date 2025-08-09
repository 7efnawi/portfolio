import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'next-themes'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.tsx'
import './index.css'

// Inject Vercel Analytics & Speed Insights (non-React APIs)
inject()
injectSpeedInsights()

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
    <App />
  </ThemeProvider>
);
