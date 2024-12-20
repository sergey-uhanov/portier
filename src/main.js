import './scss/style.scss';
import { initMenu } from '@/modules/menu';
import { highlightActiveLink } from '@/modules/pageHighlight';
import { initAnimations } from '@/modules/animation';
import { initAudio } from '@/modules/audio';

// Инициализация DOM
document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  highlightActiveLink();
  initAnimations();
  initAudio();
});
