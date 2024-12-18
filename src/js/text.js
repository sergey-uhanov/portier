import '../scss/style.scss';
import { Footer } from '@/components/Footer'
const wrapper = document.querySelector('.wrapper');
if (wrapper) {

	wrapper.appendChild(Footer());
}