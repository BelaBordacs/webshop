import TermekekModell from '../modell/TermekekModell.js';
import KosarModell from '../modell/KosarModell.js';
import PublikusTermekek from '../view/PublikusTermekek.js';
import KosarTermekek from '../view/KosarTermekek.js';

export default class TermekekPublikusController {
  constructor() {
    // Modellek példányosítása
    this.termekekModell = new TermekekModell();

    // View-k példányosítása
    this.termekView = new PublikusTermekek('#termekek-container', this.hozzaadKosarhoz.bind(this));

    // Termékek megjelenítése
    this.termekView.megjelenitTermekek(this.termekekModell.getTermekek());
  }

}