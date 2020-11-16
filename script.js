const timer = document.querySelector('.timer')


const tick = () => {

  const countdownDate = new Date('November 22 2020 00:00:00').getTime()
  const now = new Date().getTime()


  const diff = countdownDate - now;

  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  const hours = Math.round((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.round((diff / (1000 * 60)) % 60);
  const secs = Math.round((diff / (1000)) % (60));


  const html = `
    <span>${days} d</span>
    <span>${hours} h</span>
    <span>${mins} m</span>
    <span><span class='secs'>${secs}</span> s</span>
 `

timer.innerHTML = html;

}
setInterval(tick, 1000);
