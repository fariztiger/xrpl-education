/* Progressive visual enhancements: no external services, no tracking. */
(()=>{'use strict';
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
if(matchMedia('(hover: hover) and (pointer: fine)').matches){
  const hero=document.querySelector('.hero');
  if(hero)hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--pointer-x',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');hero.style.setProperty('--pointer-y',((e.clientY-r.top)/r.height*100).toFixed(1)+'%')},{passive:true});
}
if(!('IntersectionObserver' in window))return;
const els=[...document.querySelectorAll('.card,section>.panel,section>.section-head')];
els.forEach(el=>{el.style.opacity='0';el.style.transform='translateY(26px)';el.style.transition='opacity .7s ease, transform .7s cubic-bezier(.2,.8,.2,1)'});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;e.target.style.opacity='1';e.target.style.transform='translateY(0)';obs.unobserve(e.target)}),{threshold:.08,rootMargin:'0px 0px 60px 0px'});
els.forEach(el=>obs.observe(el));
})();
