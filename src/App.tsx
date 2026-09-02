import { useState } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { ResumeModal } from '@/components/ResumeModal';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ErrorBoundary>
      <main className="noise min-h-[100dvh] overflow-hidden bg-[#080d16] text-slate-100">
        <div className="pointer-events-none fixed inset-0 z-0 opacity-70" aria-hidden="true">
          <div className="absolute -right-40 top-[-18rem] h-[38rem] w-[38rem] rounded-full bg-cyan-400/[.07] blur-3xl" />
          <div className="absolute -left-56 top-[40rem] h-[34rem] w-[34rem] rounded-full bg-indigo-500/[.07] blur-3xl" />
        </div>

        <Navbar />
        <Hero onViewResume={() => setResumeOpen(true)} />
        <About />
        <Contact />

        {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
      </main>
    </ErrorBoundary>
  );
}

export default App;
