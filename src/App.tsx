import React from 'react';
import { WhitePaperViewer } from './components/WhitePaperViewer';
import { COLORS } from './constants';
import { Download } from 'lucide-react';

const App: React.FC = () => {
  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    // Small timeout to ensure UI updates and browser doesn't block the action
    setTimeout(() => {
      window.print();
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: COLORS.background }}>
      
      {/* Simple Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b no-print" style={{ borderColor: COLORS.border }}>
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6A8EAE] to-[#4A6E8E] flex items-center justify-center text-white font-bold serif text-xl shadow-sm">
               A
             </div>
             <div className="flex flex-col">
                <span className="font-bold text-sm tracking-widest text-gray-900 uppercase">L'Athlète de 2025</span>
                <span className="text-xs text-gray-500">Le Manifeste</span>
             </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              type="button"
              onClick={handlePrint}
              title="Imprimer ou Enregistrer en PDF (Ctrl+P)"
              className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-gray-100 hover:text-gray-900 text-gray-600 active:bg-gray-200 border border-transparent hover:border-gray-200"
            >
               <Download size={18} />
               <span className="hidden sm:inline">Télécharger le PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-0 md:px-6 py-0 md:py-10 print:p-0 print:max-w-none">
           <WhitePaperViewer />
      </main>

      {/* Footer */}
      <footer className="border-t py-12 mt-auto bg-white no-print" style={{ borderColor: COLORS.border }}>
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© 2025 KM Mania Research. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/daclinhgiao-nguyen/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">LinkedIn</a>
            <a href="mailto:dlg.nguyen@gmail.com" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;