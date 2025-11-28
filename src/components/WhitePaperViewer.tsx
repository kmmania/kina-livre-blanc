import React from 'react';
import { COLORS } from '../constants';

const SectionHeader = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="text-3xl font-bold mb-8 serif mt-16 leading-tight break-inside-avoid" style={{ color: COLORS.primary }}>
    {children}
  </h2>
);

const HighlightBox = ({ title, quote, desc }: { title: string, quote: string, desc: string }) => (
  <div className="p-8 rounded-xl my-6 shadow-sm border bg-white hover:shadow-md transition-shadow duration-300 break-inside-avoid" style={{ borderColor: COLORS.border }}>
    <h4 className="font-bold mb-4 text-lg uppercase tracking-wide" style={{ color: COLORS.primary }}>{title}</h4>
    <p className="italic text-lg mb-5 text-gray-800 font-serif leading-relaxed text-justify">"{quote}"</p>
    <p className="text-gray-600 mb-5 leading-relaxed text-[15px] text-justify">{desc}</p>
    <p className="font-bold text-sm flex items-center gap-2" style={{ color: COLORS.secondary }}>
        <span>→</span> Ça vous parle ?
    </p>
  </div>
);

export const WhitePaperViewer: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-xl rounded-none md:rounded-lg overflow-hidden my-0 md:my-4 print:shadow-none print:my-0 print:rounded-none">
      
      {/* CONTENT CONTAINER */}
      <div className="max-w-3xl mx-auto px-8 md:px-12 py-16 md:py-24 text-gray-800 print:py-0 print:px-4">

          {/* Cover Page Header - Designed Style */}
          <header className="mb-24 text-center print:mb-16 print:pt-12">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-800 text-xs font-bold tracking-widest uppercase mb-6" style={{ color: COLORS.primary, backgroundColor: '#f0f4f8' }}>
                Livre Blanc
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight serif text-gray-900">
              ÊTES-VOUS L'ATHLÈTE <br/>
              <span style={{ color: COLORS.primary }}>DE 2025 ?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-500 font-light">
              Le Manifeste. Découvrez les défis de la nouvelle ère et les clés d'une performance éclairée.
            </p>
            
            <p className="text-base md:text-lg text-gray-400 font-medium">
               Par <span className="text-gray-800 font-semibold">Dac Linh Giao NGUYEN</span>, le 20 novembre 2025
            </p>
          </header>

          {/* Avant-propos */}
          <section className="mb-24 break-inside-avoid">
            <h3 className="text-lg font-bold uppercase tracking-widest mb-8 text-gray-400">Avant-propos</h3>
            <div className="prose prose-lg text-gray-700 text-justify">
                <p className="leading-relaxed mb-6">
                Ce manifeste est la synthèse des échanges que j'ai eu la chance d'avoir avec vous,
                athlètes passionnés. Vos témoignages ont été la matière première de cette réflexion.
                </p>
                <p className="leading-relaxed mb-10">
                Je tenais à vous remercier personnellement pour votre temps et votre confiance. C'est
                cette vision d'une performance plus humaine qui guide aujourd'hui mes travaux de
                développement technologique.
                </p>
            </div>
            <div className="mt-8 border-l-4 pl-6" style={{ borderColor: COLORS.secondary }}>
                <p className="font-bold text-gray-900">Sportivement,</p>
                <p className="text-lg mt-1 text-gray-600">Dac Linh Giao NGUYEN</p>
            </div>
          </section>

          {/* L'introspection */}
          <section className="mb-24 break-inside-avoid">
            <SectionHeader>L’introspection</SectionHeader>
            <p className="font-bold text-xl mb-10 text-gray-900">Vous êtes-vous déjà demandé...</p>
            
            <div className="space-y-8 mb-16">
              {[
                "Pourquoi cette sortie \"lente\" vous a gâché la journée, alors que vous avez simplement couru pour le plaisir ?",
                "Pourquoi vous culpabilisez à prendre un jour de repos, même quand votre corps le réclame ?",
                "Pourquoi vous regardez votre montre toutes les deux minutes, au lieu de simplement sentir l'effort ?",
                "Pourquoi vous hésitez à publier votre entraînement sur Strava s'il n'est pas \"à la hauteur\" ?"
              ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <span className="text-2xl h-8 leading-none" style={{ color: COLORS.secondary }}>•</span>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {item}
                    </p>
                 </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-l-4" style={{ borderColor: COLORS.primary }}>
              <p className="text-lg font-bold text-gray-900 mb-4 text-justify">
                  Si l'une de ces questions résonne en vous, bienvenue. Vous n'êtes pas seul. 
              </p>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Vous êtes l'athlète de 2025, et vous vivez une transformation sans précédent dans l'histoire du
                sport d'endurance.
              </p>
              <p className="text-lg text-gray-700 italic text-justify">
                  Ce n'est ni un défaut, ni une faiblesse. C'est votre époque. Et il est temps de la
                  comprendre pour mieux la vivre.
              </p>
            </div>
          </section>

          {/* La grande transformation */}
          <section className="mb-24">
            <SectionHeader>La grande transformation : Portrait de l'athlète moderne</SectionHeader>
            <p className="leading-relaxed mb-6 text-lg text-gray-700 text-justify">
              Il y a quinze ans, un coureur avait un chronomètre et ses sensations. Aujourd'hui, vous
              naviguez dans un océan de données : fréquence cardiaque, zones d'entraînement,
              cadence, variabilité cardiaque, scores de récupération, métriques sociales, classements
              de segments.
            </p>
            <p className="leading-relaxed mb-12 text-xl font-medium text-gray-900 text-justify">
              Vous n'êtes plus seul dans votre tête pendant que vous courez. Vous êtes accompagné
              par des algorithmes qui vous jugent, des communautés qui vous observent, et des
              métriques qui vous comparent.
            </p>

            <h3 className="text-xl font-bold mb-10 text-gray-900 break-after-avoid">Cette révolution a créé trois tensions majeures que vous vivez probablement au quotidien :</h3>

            <div className="space-y-10">
                {[
                    {
                        title: "1. Technologie vs Sensations",
                        desc: "Votre montre vous dit que vous êtes dans la bonne zone. Mais vos jambes vous disent que c'est trop dur. Qui croire ? Vous oscillez constamment entre vos signaux corporels naturels et les recommandations algorithmiques. Résultat : vous ne savez plus faire confiance à votre propre corps."
                    },
                    {
                        title: "2. Repos vs Culpabilité",
                        desc: "Votre coach vous dit de récupérer. Votre corps vous réclame du repos. Mais votre application affiche \"Désentraînement détecté\" ou \"Condition physique en baisse\". Alors vous culpabilisez. Vous sortez quand même. Et vous vous épuisez progressivement, en pensant bien faire."
                    },
                    {
                        title: "3. Plaisir vs Performance sociale",
                        desc: "Vous êtes parti courir pour le plaisir, pour vous vider la tête, pour vous sentir vivant. Mais pendant la sortie, vous pensez déjà à ce que diront vos amis Strava. Vous accélérez sur un segment pour grappiller une place au classement. Vous rentrez avec un bon chrono, mais avez-vous vraiment pris du plaisir ?"
                    }
                ].map((tension, i) => (
                    <div key={i} className="pl-6 border-l-2 break-inside-avoid" style={{ borderColor: COLORS.border }}>
                        <h4 className="font-bold text-lg mb-3" style={{ color: COLORS.textPrimary }}>{tension.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-lg text-justify">{tension.desc}</p>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 p-8 text-center bg-[#F8F8F8] rounded-xl break-inside-avoid">
                <p className="text-2xl font-serif font-bold italic leading-relaxed text-center" style={{ color: COLORS.primary }}>
                    "La question est simple : la technologie vous aide-t-elle vraiment à courir mieux, ou
                    vous empêche-t-elle de courir libre ?"
                </p>
            </div>
          </section>

          {/* Ces nouveaux défis (Patterns) */}
          <section className="mb-24">
            <SectionHeader>Ces nouveaux défis qui vous concernent</SectionHeader>
            <p className="mb-10 text-lg text-gray-600 text-justify">
                Nous avons identifié les patterns psychologiques émergents chez les coureurs modernes.
                En voici quelques-uns. Combien vous parlent ?
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <HighlightBox 
                    title="Le syndrome du bon élève"
                    quote="Je dois suivre mon plan à la lettre, sinon j'ai raté ma semaine."
                    desc="Vous avez le plan parfait. Mais la vie arrive : une journée difficile au travail, un enfant malade, une fatigue inhabituelle. Impossible de faire votre séance de fractionné. Vous vous sentez coupable, en échec. Alors que l'adaptation est la clé de la progression."
                />
                <HighlightBox 
                    title="L'obsession de l'amélioration continue"
                    quote="Ça fait trois semaines que je stagne. Il faut que je change quelque chose."
                    desc="Vos temps ne progressent plus. Panique. Vous modifiez votre plan, testez une nouvelle méthode, achetez un nouveau gadget. Mais en réalité, les plateaux sont normaux. L'amélioration n'est jamais linéaire. Pourtant, vous ne supportez plus l'idée de stagner, même temporairement."
                />
                <HighlightBox 
                    title="La paralysie par l'information"
                    quote="Entre VMA, seuil lactique, zones cardiaques... je ne sais même plus par où commencer."
                    desc="Vous voulez bien faire. Alors vous lisez tout, écoutez tous les podcasts, suivez tous les experts. Résultat : vous avez tellement d'informations contradictoires que vous ne savez plus quoi faire. Vous passez plus de temps à chercher le plan parfait qu'à courir."
                />
                <HighlightBox 
                    title="L'anxiété du regard des autres"
                    quote="Je ne vais pas publier cette sortie, elle est trop lente."
                    desc='Vous venez de terminer une belle sortie en nature. Vous vous sentiez bien. Mais en regardant votre allure, vous hésitez à la publier sur Strava. "Les autres vont penser que je régresse." Alors vous la gardez privée. Ou pire, vous ne la faites pas du tout par peur du jugement.'
                />
                <HighlightBox 
                    title="La perte de confiance en soi"
                    quote="Avant j'adorais courir sans me poser de questions. Maintenant je doute tout le temps."
                    desc="Il y a quelques mois, vous courriez instinctivement. Vous sentiez quand accélérer, quand ralentir, quand vous reposer. Aujourd'hui, vous ne faites plus confiance à vos sensations. Vous vérifiez constamment votre montre. Vous avez perdu votre boussole intérieure."
                />
                <HighlightBox 
                    title="Le piège de la comparaison permanente"
                    quote="Tous mes amis Strava ont couru plus vite cette semaine. Je me sens nul."
                    desc="Vous faites une excellente séance. Mais en scrollant votre feed, vous voyez que d'autres ont fait mieux. Plus vite, plus long, plus de dénivelé. Votre satisfaction s'évapore instantanément. Vous ne vous comparez plus à vous-même, mais à un univers élargi infiniment par le numérique."
                />
            </div>
          </section>

          {/* Performance Éclairée */}
          <section className="mb-24">
            <SectionHeader>Vers une performance éclairée : L'espoir existe</SectionHeader>
            <p className="text-xl font-bold mb-4 text-gray-900 text-justify">La bonne nouvelle ? Rien de tout cela n'est une fatalité.</p>
            <p className="text-lg text-gray-700 mb-4 text-justify">
                La technologie n'est pas votre ennemie. Les réseaux sociaux ne sont pas intrinsèquement
                toxiques. Les données ne sont pas mauvaises en soi.
            </p>
            <p className="text-lg text-gray-700 mb-12 text-justify">
                Le problème, c'est l'usage non-conscient de ces outils. C'est la perte de votre souveraineté cognitive et émotionnelle.
            </p>

            <h3 className="text-lg font-bold mb-10 uppercase tracking-wider text-center" style={{ color: COLORS.secondary }}>Les principes d'une pratique équilibrée</h3>
            
            <div className="space-y-8">
                {[
                    { title: "1. La technologie comme copilote, pas comme pilote automatique", desc: "Les données éclairent vos décisions, elles ne les prennent pas à votre place. Vous restez aux commandes." },
                    { title: "2. La progression long terme plutôt que l'optimisation constante", desc: "Les plateaux sont normaux. Les cycles de forme sont naturels. Accepter la temporalité du corps, c'est respecter son humanité." },
                    { title: "3. Le plaisir intrinsèque comme boussole centrale", desc: "Pourquoi avez-vous commencé à courir ? Cette raison première doit rester votre étoile polaire, même entourée de métriques et de classements." },
                    { title: "4. La confiance en vos sensations, complétées par les données", desc: "Votre corps vous parle. Les algorithmes aussi. Apprendre à naviguer entre les deux, c'est développer une nouvelle forme d'intelligence." }
                ].map((p, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-lg transition-colors hover:bg-gray-50 break-inside-avoid">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ backgroundColor: COLORS.secondary }}>
                            {i + 1}
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-3" style={{ color: COLORS.textPrimary }}>{p.title.substring(3)}</h4>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-24 break-inside-avoid">
            <h3 className="text-3xl font-bold mb-8 serif text-center" style={{ color: COLORS.primary }}>Vous n'êtes pas seul dans ce voyage</h3>
            <div className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed space-y-6 text-justify">
                <p>
                  Des milliers de coureurs vivent exactement les mêmes défis que vous. Certains ont trouvé
                  leur équilibre. D'autres cherchent encore. Mais tous partagent cette expérience : celle de
                  courir à l'ère du numérique, entre performance et humanité.
                </p>
                
                <p className="font-bold text-gray-800">La clé ? Comprendre d'abord quel athlète vous êtes.</p>
                
                <p>
                  Êtes-vous celui qui se noie dans les données ? Celui qui court pour les autres plus que
                  pour lui-même ? Celui qui a perdu confiance en ses sensations ? Celui qui s'épuise à
                  vouloir tout optimiser ?
                </p>

                <p>
                  Chacun a son propre chemin vers l'équilibre. Ce manifeste avait pour but d'éclairer le
                  terrain. La prochaine étape est de construire les outils qui nous permettront de le
                  traverser sereinement.
                </p>
            </div>
            <div className="text-center">
              <div className="p-10 bg-blue-50 rounded-2xl inline-block border border-blue-100">
                  <p className="text-2xl font-serif italic mb-0 text-gray-800 text-center">
                      "Le sport d'endurance est un voyage. Assurez-vous d'en rester le capitaine."
                  </p>
              </div>
            </div>
          </section>

          {/* About - UPDATED WITH LINKS */}
          <section className="border-t pt-16 mt-16 bg-[#fafafa] -mx-8 md:-mx-12 px-8 md:px-12 pb-12 break-inside-avoid">
            <div className="max-w-3xl mx-auto">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-10 text-center text-gray-400">À Propos de l'auteur</h3>
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="text-center md:text-left w-full">
                        <h4 className="font-bold text-2xl mb-2" style={{ color: COLORS.textPrimary }}>Dac Linh Giao NGUYEN</h4>
                        <p className="text-lg italic mb-6 font-serif" style={{ color: COLORS.primary }}>Tech Entrepreneur & Marathonien</p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg text-justify">
                            Pionnier du digital et ingénieur de l'innovation, Giao combine 25 ans d'expérience
                            technologique avec une pratique passionnée de l'endurance.
                            Il est le fondateur de KM Mania, une initiative dédiée à l'innovation centrée sur l'humain
                            pour libérer le véritable potentiel des athlètes d'endurance.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start text-base font-medium border-t border-b py-6 border-gray-200" style={{ color: COLORS.secondary }}>
                            <a 
                                href="https://www.linkedin.com/in/daclinhgiao-nguyen/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:underline hover:text-[#0077b5] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                Retrouvez-moi sur LinkedIn
                            </a>
                            <span className="hidden sm:block text-gray-300">|</span>
                            <a 
                                href="mailto:dlg.nguyen@gmail.com" 
                                className="flex items-center gap-2 hover:underline hover:text-gray-800 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                dlg.nguyen@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 text-center text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed text-justify">
                    <p className="mb-2 text-center">© 2025 - Dac Linh Giao NGUYEN / KM Mania Research.</p>
                    <p>Ce document est protégé par le droit d'auteur. Toutefois, je crois au partage de la connaissance. Vous êtes autorisé et encouragé à diffuser ce manifeste, à condition de le transmettre dans son intégralité, sans modification, et de toujours citer l'auteur et la source.</p>
                    <p className="mt-4 italic">Avis de non-responsabilité : Les analyses présentées ici sont le fruit d'une recherche qualitative. Elles visent à éclairer la pratique sportive mais ne remplacent en aucun cas un avis médical ou un coaching professionnel.</p>
                </div>
            </div>
          </section>
      </div>
    </div>
  );
};