const sparkles=document.querySelector('.sparkles');
const symbols=['♡','✦','♥','✧'];
function makeSpark(){if(!sparkles)return;const el=document.createElement('span');el.className='spark';el.textContent=symbols[Math.floor(Math.random()*symbols.length)];el.style.left=Math.random()*100+'%';el.style.fontSize=(10+Math.random()*16)+'px';const duration=7+Math.random()*8;el.style.animationDuration=duration+'s';sparkles.appendChild(el);setTimeout(()=>el.remove(),duration*1000)}
for(let i=0;i<14;i++)setTimeout(makeSpark,i*250);setInterval(makeSpark,650);
const heartMessages=['Kareja, tumhari muskaan meri sabse pasandida hai. ❤️','Tum jaisi ho, waise hi bahut anmol ho. 🥹','Apne sapno ke liye hamesha chamakti rehna. ✨','Aaj yaad rakhna: tum bahut pyaari ho. 💗','Meri taraf se ek pyaara sa gale lagna! 🤗'];
let messageIndex=0;
document.getElementById('heartBtn').addEventListener('click',()=>{document.getElementById('heartMessage').textContent=heartMessages[messageIndex%heartMessages.length];messageIndex++;for(let i=0;i<8;i++)setTimeout(makeSpark,i*80)});
const musicBtn=document.getElementById('musicBtn');
musicBtn.addEventListener('click',()=>{const label=document.getElementById('musicLabel');const isOn=label.textContent==='Gaana chalu hai';label.textContent=isOn?'Gaana band hai':'Gaana chalu hai';showToast(isOn?'Gaana band kar diya.':'Gaana bajane ke liye apni pasand ka gaana jodna hoga. 🎵')});
function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}
document.getElementById('headerShareBtn').addEventListener('click',async()=>{const shareData={title:'Kareja ♡',text:'Kareja, tumhare liye ek chhota sa tohfa hai. ❤️',url:location.href};try{if(navigator.share)await navigator.share(shareData);else if(navigator.clipboard){await navigator.clipboard.writeText(location.href);showToast('Tohfe ka link nakal ho gaya! ❤️')}else showToast('Upar dikh raha pata nakal karke bhej do. ❤️')}catch(e){if(e.name!=='AbortError')showToast('Link nakal karke WhatsApp par bhej do. ❤️')}});
const music = document.getElementById("backgroundMusic");

if (music) {
  music.volume = 0.55;

  const startMusic = () => {
    music.play().catch(() => {});
  };

  window.addEventListener("load", startMusic);

  document.addEventListener("click", startMusic, { once: true });
}
