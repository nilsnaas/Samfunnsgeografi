(function () {
  const CHAPTERS = [
    {
      num: '1',
      title: 'Urfolk',
      href: 'urfolk.html',
      sections: [
        { id: 'innledning', label: '1. Innledning' },
        { id: 'hvem-er-urfolk', label: '2. Hvem er urfolk?' },
        { id: 'kolonisering', label: '3. Kolonisering' },
        { id: 'assimilering-og-motstand', label: '4. Assimilering & fornorsking' },
        { id: 'sannhetskommisjonen', label: '↳ Sannhetskommisjonen', sub: true },
        { id: 'urfolksrettigheter', label: '5. Urfolksrettigheter (ILO 169)' },
        { id: 'nasjoner-i-nasjoner', label: '6. Nasjoner i nasjoner' },
        { id: 'areal-og-ressurskonflikter', label: '7. Areal- & ressurskonflikter' },
        { id: 'fosen-saken', label: '↳ Fosen-dommen & vindkraft', sub: true },
        { id: 'aktiviteter', label: '8. Test deg selv & diskusjon' },
        { id: 'ordliste', label: '9. Sammendrag & Ordliste' },
        { id: 'kilder', label: '10. Kilder' }
      ]
    },
    {
      num: '2',
      title: 'Norges urfolk',
      href: 'samenes-hjemland.html',
      sections: [
        { id: 'innledning', label: '1. Innledning' },
        { id: 'samenes-hjemland', label: '2. Samenes hjemland' },
        { id: 'samiske-sprak', label: '3. Samiske språk' },
        { id: 'kolonisering', label: '4. Koloniseringen av Sápmi' },
        { id: 'alta-aksjonen', label: '5. Alta-aksjonen' },
        { id: 'sametinget-og-finnmarksloven', label: '6. Sametinget & Finnmarksloven' },
        { id: 'vindmoller', label: '7. En kamp mot vindmøller' },
        { id: 'natur-og-rovdyr', label: '8. Natur, rovdyr & laksefiske' },
        { id: 'aktiviteter', label: '9. Test deg selv & diskusjon' },
        { id: 'ordliste', label: '10. Sammendrag & Ordliste' },
        { id: 'kilder', label: '11. Kilder' }
      ]
    },
    {
      num: '3',
      title: 'Ressurser og muligheter',
      href: 'ressurser.html',
      parts: [
        {
          title: '3.1 Norges ressursparadoks',
          href: 'ressurser.html',
          sections: [
            { id: 'innledning', label: '1. Ressurser & næringsliv' },
            { id: 'paradokset', label: '2. Det fossile paradokset' },
            { id: 'energi', label: '3. Olje, vind, sol & bio' },
            { id: 'berggrunn', label: '4. Berggrunn & sjødeponi' },
            { id: 'gronne-ressurser', label: '5. Jord, skog & hav' },
            { id: 'baerekraft', label: '6. Bærekraft & balansegang' },
            { id: 'aktiviteter', label: '7. Test deg selv & diskusjon' },
            { id: 'ordliste', label: '8. Sammendrag & Ordliste' },
            { id: 'kilder', label: '9. Kilder' }
          ]
        },
        {
          title: '3.2 Materialstormakt & mineraler',
          href: 'mineraler.html',
          sections: [
            { id: 'innledning', label: '1. Innledning' },
            { id: 'geopolitikk', label: '2. Råvaremangel & geopolitikk' },
            { id: 'fensfeltet', label: '3. Fensfeltet (REE)' },
            { id: 'havbunn', label: '4. Havbunnsmineraler' },
            { id: 'dalane', label: '5. Dalane (Fosfat & batterier)' },
            { id: 'verdikjeder', label: '6. Verdikjeder & maktposisjon' },
            { id: 'aktiviteter', label: '7. Test deg selv & diskusjon' },
            { id: 'ordliste', label: '8. Sammendrag & Ordliste' },
            { id: 'kilder', label: '9. Kilder' }
          ]
        }
      ]
    },
    {
      num: '4',
      title: 'Velstand',
      href: 'velstand.html',
      parts: [
        {
          title: '4.1 Hvorfor er vi rike i Norge?',
          href: 'velstand.html',
          sections: [
            { id: 'innledning', label: '1. Innledning' },
            { id: 'rikt-land', label: '2. Hva er et rikt land?' },
            { id: 'storbritannia', label: '3. Det begynte i Storbritannia' },
            { id: 'norge-kopierte', label: '4. Britisk teknologi & toll' },
            { id: 'eksportindustri', label: '5. Eksportindustri & fisk' },
            { id: 'vannkraft-og-industri', label: '6. Vannkraft & Telemark' },
            { id: 'aktiviteter', label: '7. Test deg selv & diskusjon' },
            { id: 'ordliste', label: '8. Sammendrag & Ordliste' },
            { id: 'kilder', label: '9. Kilder' }
          ]
        }
      ]
    }
  ];

  const currentFile = (window.location.pathname.split('/').pop() || 'urfolk.html').toLowerCase();

  function isChapterActive(ch) {
    if (ch.parts) {
      return ch.parts.some(p => p.href.toLowerCase() === currentFile);
    }
    return ch.href.toLowerCase() === currentFile;
  }

  function injectStyles() {
    if (document.getElementById('samfgeo-nav-styles')) return;
    const style = document.createElement('style');
    style.id = 'samfgeo-nav-styles';
    style.textContent = `
      .sg-sidebar-shell {
        background: #ffffff;
        border: 1px solid #e7e5e4;
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      }
      html.dark-mode .sg-sidebar-shell {
        background: #10171b !important;
        border-color: rgba(148, 163, 184, 0.16) !important;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
      }
      .sg-brand-badge {
        background: #2dd4bf;
        color: #0b1316;
      }
      .sg-progress-track {
        background: #e7e5e4;
      }
      html.dark-mode .sg-progress-track {
        background: rgba(148, 163, 184, 0.18);
      }
      .sg-progress-fill {
        background: #14b8a6;
      }
      .sg-chapter-card {
        border: 1px solid #e7e5e4;
        background: #fafaf9;
        border-radius: 0.85rem;
        transition: border-color 150ms ease, background-color 150ms ease;
      }
      .sg-chapter-card:hover {
        border-color: #a8a29e;
      }
      .sg-chapter-card.is-active {
        border-color: #14b8a6;
        background: #f0fdfa;
      }
      html.dark-mode .sg-chapter-card {
        border-color: rgba(255, 255, 255, 0.14);
        background: rgba(255, 255, 255, 0.02);
      }
      html.dark-mode .sg-chapter-card:hover {
        border-color: rgba(255, 255, 255, 0.3);
      }
      html.dark-mode .sg-chapter-card.is-active {
        border-color: rgba(45, 212, 191, 0.65);
        background: rgba(45, 212, 191, 0.06);
      }
      .sg-num-badge {
        background: #2dd4bf;
        color: #0b1316;
      }
      .sg-chapter-card:not(.is-active) .sg-num-badge {
        background: #ccfbf1;
        color: #115e59;
      }
      html.dark-mode .sg-chapter-card:not(.is-active) .sg-num-badge {
        background: #2dd4bf;
        color: #0b1316;
      }
      .sg-nav-item.is-current-section {
        background: #ccfbf1;
        color: #115e59;
        font-weight: 600;
      }
      html.dark-mode .sg-nav-item.is-current-section {
        background: rgba(45, 212, 191, 0.16);
        color: #5eead4;
        font-weight: 600;
      }
      .sg-part-link.is-active-part {
        color: #0f766e;
        font-weight: 700;
      }
      html.dark-mode .sg-part-link.is-active-part {
        color: #5eead4;
        font-weight: 700;
      }
    `;
    document.head.appendChild(style);
  }

  function renderSectionsHtml(sections, prefixHref, isCurrentPage) {
    return `<ul class="space-y-0.5 pt-1 pb-2 pl-2 pr-1">
      ${sections.map(sec => {
        const href = isCurrentPage ? `#${sec.id}` : `${prefixHref}#${sec.id}`;
        const pad = sec.sub ? 'pl-5 text-[11px]' : 'pl-2.5 text-xs';
        return `<li>
          <a href="${href}" ${isCurrentPage ? `data-target="${sec.id}"` : ''} class="sg-nav-item ${isCurrentPage ? 'nav-link' : ''} block ${pad} pr-2 py-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 dark:hover:bg-white/5 transition-colors">
            ${sec.label}
          </a>
        </li>`;
      }).join('')}
    </ul>`;
  }

  function renderSidebarMarkup(isMobile) {
    const progressId = isMobile ? 'mobile-progress-pct' : 'sidebar-progress-pct';
    const barId = isMobile ? 'mobile-progress-bar' : 'sidebar-progress-bar';

    const chaptersHtml = CHAPTERS.map(ch => {
      const active = isChapterActive(ch);
      const expanded = active;
      let innerHtml = '';

      if (ch.parts) {
        innerHtml = `<div class="px-2 pb-2 space-y-1.5">
          ${ch.parts.map(part => {
            const partActive = part.href.toLowerCase() === currentFile;
            return `<div class="rounded-lg ${partActive ? 'bg-white/80 dark:bg-white/5 border border-teal-500/30' : ''}">
              <a href="${part.href}" class="sg-part-link ${partActive ? 'is-active-part' : 'text-stone-700 hover:text-stone-900'} flex items-center justify-between px-2.5 py-1.5 text-xs font-medium rounded-lg">
                <span>${part.title}</span>
                <span class="text-[10px] opacity-70">${partActive ? '●' : '→'}</span>
              </a>
              ${partActive ? renderSectionsHtml(part.sections, part.href, true) : ''}
            </div>`;
          }).join('')}
        </div>`;
      } else {
        innerHtml = renderSectionsHtml(ch.sections, ch.href, active);
      }

      return `<div class="sg-chapter-card ${active ? 'is-active' : ''}" data-chapter="${ch.num}">
        <div class="flex items-center justify-between gap-2 px-3 py-2.5">
          <a href="${ch.href}" class="flex items-center gap-2.5 min-w-0 flex-1 group">
            <span class="sg-num-badge w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0">${ch.num}</span>
            <span class="text-sm font-semibold text-stone-900 truncate group-hover:underline decoration-teal-500/60 underline-offset-2">${ch.title}</span>
          </a>
          <button type="button" class="sg-toggle-btn p-1 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-transform ${expanded ? 'rotate-90' : ''}" aria-expanded="${expanded}" aria-label="Vis eller skjul delkapitler for ${ch.title}">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div class="sg-chapter-body ${expanded ? '' : 'hidden'} border-t border-stone-200/70">
          ${innerHtml}
        </div>
      </div>`;
    }).join('');

    return `
      <div class="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-200">
        <a href="index.html" class="flex items-center gap-2.5 min-w-0 group" title="Til startsiden">
          <div class="sg-brand-badge w-9 h-9 rounded-xl font-bold text-sm flex items-center justify-center tracking-tight shrink-0">NN</div>
          <div class="min-w-0">
            <span class="text-sm font-bold text-stone-900 block truncate leading-tight group-hover:underline decoration-teal-500/60 underline-offset-2">Nils sin samfunnsgeografi</span>
            <span class="text-[10px] font-semibold uppercase tracking-widest text-stone-500 block mt-0.5">Læringsplattform</span>
          </div>
        </a>
        <div class="flex items-center gap-1 shrink-0">
          <button type="button" onclick="toggleClassicTheme()" title="Bytt mørk/lys modus" class="theme-toggle-btn w-8 h-8 rounded-lg border border-stone-200 flex items-center justify-center text-sm hover:bg-stone-100">🌙</button>
          ${isMobile ? `<button id="mobile-drawer-close" type="button" aria-label="Lukk meny" class="w-8 h-8 rounded-lg border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>` : ''}
        </div>
      </div>

      <div class="pb-3.5 mb-3.5 border-b border-stone-200">
        <div class="flex items-center justify-between text-xs mb-1.5">
          <span class="text-stone-500 font-medium">Lesefremdrift</span>
          <span id="${progressId}" class="font-semibold text-stone-800">0 %</span>
        </div>
        <div class="sg-progress-track h-1.5 w-full rounded-full overflow-hidden">
          <div id="${barId}" class="sg-progress-fill h-full rounded-full transition-all duration-150" style="width: 0%"></div>
        </div>
      </div>

      <nav aria-label="Kapittelmeny" class="space-y-2.5">
        ${chaptersHtml}
      </nav>

      <div class="mt-4 pt-3.5 border-t border-stone-200 space-y-2">
        <p class="text-[10px] font-semibold uppercase tracking-widest text-stone-500 px-1">Visning &amp; verktøy</p>
        <div class="grid grid-cols-2 gap-1.5">
          <a href="kunnskapstre.html" class="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-[11px] font-medium text-white transition-colors">
            <span>🌳 Tre (Kap. 1–3)</span>
          </a>
          <a href="kunnskapstre-velstand.html" class="flex items-center justify-center gap-1 px-2 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-[11px] font-medium text-white transition-colors">
            <span>🌳 Tre (Kap. 4+)</span>
          </a>
        </div>
        <div class="grid grid-cols-2 gap-1.5">
          <a href="index.html" class="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-xs font-medium text-stone-700 transition-colors">
            <span>🏠 Startside</span>
          </a>
          <button type="button" onclick="window.print()" class="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-nordic-700 hover:bg-nordic-800 text-xs font-semibold text-white transition-colors">
            <span>📄 PDF</span>
          </button>
        </div>
      </div>
    `;
  }

  function wireAccordion(container) {
    container.querySelectorAll('.sg-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.sg-chapter-card');
        const body = card.querySelector('.sg-chapter-body');
        const isHidden = body.classList.toggle('hidden');
        btn.classList.toggle('rotate-90', !isHidden);
        btn.setAttribute('aria-expanded', String(!isHidden));
      });
    });
  }

  function initSamfunnsgeografiNav() {
    injectStyles();

    const aside = document.querySelector('aside');
    if (aside) {
      aside.innerHTML = `<div class="sg-sidebar-shell">${renderSidebarMarkup(false)}</div>`;
      wireAccordion(aside);
    }

    const mobileNav = document.querySelector('#mobile-drawer nav');
    if (mobileNav) {
      mobileNav.innerHTML = renderSidebarMarkup(true);
      wireAccordion(mobileNav);
    }

    // Re-attach mobile drawer close & link click listeners
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeDrawer = () => mobileDrawer && mobileDrawer.classList.add('hidden');
    const closeBtn = document.getElementById('mobile-drawer-close');
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (mobileNav) {
      mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
    }

    // Re-sync scroll-spy & reading progress across new links and progress bar
    const navLinks = document.querySelectorAll('.sg-nav-item[data-target]');
    const sectionIds = Array.from(new Set(Array.from(navLinks).map(a => a.dataset.target)));
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    function updateProgressAndSpy() {
      const scrollPos = window.scrollY + 140;
      let currentId = sections[0]?.id;
      for (const sec of sections) {
        if (sec.offsetTop <= scrollPos) currentId = sec.id;
      }
      navLinks.forEach(link => {
        const match = link.dataset.target === currentId;
        link.classList.toggle('is-current-section', match);
      });

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((window.scrollY / docHeight) * 100))) : 0;
      const topBar = document.getElementById('reading-progress');
      if (topBar) topBar.style.width = `${pct}%`;
      const sidePct = document.getElementById('sidebar-progress-pct');
      const sideBar = document.getElementById('sidebar-progress-bar');
      const mobPct = document.getElementById('mobile-progress-pct');
      const mobBar = document.getElementById('mobile-progress-bar');
      if (sidePct) sidePct.textContent = `${pct} %`;
      if (sideBar) sideBar.style.width = `${pct}%`;
      if (mobPct) mobPct.textContent = `${pct} %`;
      if (mobBar) mobBar.style.width = `${pct}%`;
    }

    window.addEventListener('scroll', updateProgressAndSpy, { passive: true });
    updateProgressAndSpy();

    // Ensure theme button icon matches current state
    const isDark = document.documentElement.classList.contains('dark-mode') || localStorage.getItem('samfgeo_classic_dark') === '1';
    document.querySelectorAll('.theme-toggle-btn').forEach(b => {
      b.textContent = isDark ? '☀️' : '🌙';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSamfunnsgeografiNav);
  } else {
    initSamfunnsgeografiNav();
  }
})();
