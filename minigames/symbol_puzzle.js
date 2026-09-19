/**
 * symbol_puzzle.js — Minigame: Puzzle de symboles
 * Appelé automatiquement par le moteur quand une scène contient
 * minigame: "symbol_puzzle" et minigameFile: "minigames/symbol_puzzle.js"
 *
 * La fonction exportée DOIT s'appeler registerMinigame(engine)
 * où engine est l'objet global LMTD.
 */

(function () {
  const SYMBOLS = ['✦', '◆', '✸', '❋', '⟡'];
  const SOLUTION = [0, 2, 4, 1, 3]; // indices dans SYMBOLS

  function render(container, onComplete) {
    container.innerHTML = `
      <div style="text-align:center; font-family:'Cinzel',serif; color:var(--silver); max-width:420px; width:92vw;">
        <div style="font-size:0.75rem; letter-spacing:0.35em; color:var(--blood); margin-bottom:1.2rem; text-transform:uppercase;">
          Énigme de Symboles
        </div>
        <div style="font-size:0.9rem; color:var(--mist); margin-bottom:2rem; font-family:'IM Fell English',serif; font-style:italic; line-height:1.6;">
          Arrangez les symboles dans le bon ordre pour déverrouiller la porte.
        </div>

        <!-- Emplacements cibles -->
        <div id="mg-slots" style="display:flex; gap:0.7rem; justify-content:center; margin-bottom:1.5rem;
             min-height:64px; align-items:center; border-bottom:1px solid var(--box-border); padding-bottom:1.5rem; flex-wrap:wrap;">
          ${SOLUTION.map((_, i) => `
            <div class="mg-slot" data-index="${i}"
                 style="width:52px;height:52px;border:1px dashed var(--box-border);
                        display:flex;align-items:center;justify-content:center;
                        font-size:1.5rem;background:rgba(0,0,0,0.5);
                        transition:all 0.2s;border-radius:3px;"></div>
          `).join('')}
        </div>

        <!-- Symboles cliquables -->
        <div id="mg-symbols" style="display:flex; gap:0.9rem; justify-content:center; flex-wrap:wrap; margin-bottom:1.5rem;">
          ${SYMBOLS.map((s, i) => `
            <button class="mg-sym" data-sym="${i}"
                    style="width:56px;height:56px;background:rgba(30,20,40,0.9);
                           border:1px solid var(--box-border);color:var(--silver);
                           font-size:1.6rem;cursor:pointer;transition:all 0.2s;
                           border-radius:3px;">${s}</button>
          `).join('')}
        </div>

        <div id="mg-msg" style="font-size:0.82rem; color:var(--text-dim); min-height:1.4rem; font-style:italic; margin-bottom:1rem;"></div>

        <button id="mg-reset"
                style="font-family:'Cinzel',serif;font-size:0.7rem;letter-spacing:0.2em;
                       background:transparent;border:1px solid var(--box-border);
                       color:var(--text-dim);padding:0.5rem 1.5rem;cursor:pointer;
                       transition:all 0.2s;">
          RÉINITIALISER
        </button>
      </div>`;

    const slots = container.querySelectorAll('.mg-slot');
    const syms  = container.querySelectorAll('.mg-sym');
    const msg   = container.querySelector('#mg-msg');
    let sequence = [];
    let usedSyms = new Set();

    function checkWin() {
      if (sequence.length < SOLUTION.length) return;
      const correct = SOLUTION.every((v, i) => sequence[i] === v);
      if (correct) {
        msg.style.color = 'var(--crimson)';
        msg.textContent = 'La serrure clique... la porte s\'ouvre.';
        setTimeout(onComplete, 1300);
      } else {
        msg.style.color = '#ff6b6b';
        msg.textContent = 'Les symboles scintillent — ce n\'est pas tout à fait juste.';
        setTimeout(reset, 1100);
      }
    }

    function reset() {
      sequence = []; usedSyms = new Set();
      slots.forEach(s => {
        s.textContent = '';
        s.style.borderColor = '';
        s.style.background = 'rgba(0,0,0,0.5)';
      });
      syms.forEach(s => {
        s.disabled = false;
        s.style.opacity = '1';
        s.style.borderColor = 'var(--box-border)';
      });
      msg.textContent = '';
    }

    syms.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        const si = parseInt(btn.dataset.sym);
        if (usedSyms.has(si)) return;
        usedSyms.add(si);
        sequence.push(si);
        btn.style.opacity = '0.3'; btn.disabled = true;
        const slot = slots[sequence.length - 1];
        slot.textContent = SYMBOLS[si];
        slot.style.borderColor = 'var(--crimson)';
        slot.style.background  = 'rgba(139,0,0,0.2)';
        checkWin();
      });
    });

    container.querySelector('#mg-reset').addEventListener('click', reset);

    // Hover reset button
    const resetBtn = container.querySelector('#mg-reset');
    resetBtn.addEventListener('mouseenter', () => { resetBtn.style.borderColor = 'var(--crimson)'; resetBtn.style.color = 'var(--silver)'; });
    resetBtn.addEventListener('mouseleave', () => { resetBtn.style.borderColor = 'var(--box-border)'; resetBtn.style.color = 'var(--text-dim)'; });
  }

  // Enregistrement dans le moteur
  if (window.LMTD && window.LMTD.registerMinigame) {
    window.LMTD.registerMinigame('symbol_puzzle', { render });
  }
})();