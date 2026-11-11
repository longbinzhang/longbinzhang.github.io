"use strict";
// The page reads all academic content from content.js. No server or build step required.
(function () {
 const d = window.SITE_CONTENT;
 if (!d) { document.body.insertAdjacentText('afterbegin','Content missing: check content.js'); return; }
 const el = id => document.getElementById(id);
 const put = (id, text) => { el(id).textContent = text || ''; };
 const link = (container, label, href) => { if (!href) return; const a=document.createElement('a');a.textContent=label;a.href=href;if(/^https?:/.test(href)){a.target='_blank';a.rel='noopener noreferrer';}container.append(a); };
 const list = (id, items) => { const parent=el(id);parent.replaceChildren();(items||[]).forEach(item=>{const article=document.createElement('article');article.className='entry';const title=document.createElement('h3');title.textContent=item.title||'';article.append(title);const p=document.createElement('p');p.textContent=item.details||'';article.append(p);if(item.url){p.append(' · ');link(p,'Read more',item.url);}parent.append(article);}); };
 const p=d.profile||{};put('profile-name',p.name);put('profile-role',[p.position,p.institution].filter(Boolean).join(' | '));put('profile-tagline',p.tagline);el('profile-photo').src=p.photo||'assets/profile.jpg';
 const links=el('profile-links');link(links,'Email',p.email?'mailto:'+p.email:'');link(links,'Google Scholar',p.scholar);link(links,'ResearchGate',p.researchgate);link(links,'Download CV',p.cv);
 put('about-text',d.about);const tags=el('research-tags');(d.research_interests||[]).forEach(t=>{const span=document.createElement('span');span.textContent=t;tags.append(span);});
 ['publications','projects','patents','awards','news'].forEach(name=>list(name+'-list',d[name]));el('news').hidden=!(d.news||[]).length;
 put('contact-address',d.contact?.address);const mail=el('contact-email');mail.textContent='Email: ';link(mail,p.email,p.email?'mailto:'+p.email:'');
})();
