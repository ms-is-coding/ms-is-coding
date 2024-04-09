const $cards = document.querySelectorAll(".card");

$cards.forEach($card => {
  $card.addEventListener("mousemove", ev => {

    const rect = $card.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    $card.style.setProperty("--left", x + "px");
    $card.style.setProperty("--top", y + "px");
  });
});


let scrolling = false;
let height = innerHeight;
let t1, t2;

addEventListener("wheel", (e) => {
  e.preventDefault();
  if (scrolling) return;
  if (e.deltaY > 0) {
    scrl(scrollY + height);
  } else if (e.deltaY < 0) {
    scrl(scrollY - height);
  }
}, { passive: false });

let prevscroll = scrollY;

addEventListener("scroll", (e) => {
  if (t1) clearTimeout(t1);
  if (t2) clearTimeout(t2);
  scrolling = true;
  t1 = setTimeout(() => {
    checkscroll();
  }, 200);
  t2 = setTimeout(() => {
    scrolling = false;
  }, 50);
}, true);

addEventListener("keydown", (e) => {
  if (scrolling) return;
  if (e.keyCode == 38 || (e.keyCode == 32 && e.shiftKey)) {
    e.preventDefault();
    scrl(scrollY - height);
  } else if (e.keyCode == 40 || (e.keyCode == 32 && !e.shiftKey)) {
    e.preventDefault();
    scrl(scrollY + height);
  }
});

function checkscroll() {
  if (scrollY / height != ~~(scrollY / height)) {
    scrl(height * Math.round(scrollY / height));
  }
}

function scrl(y) { scrollTo({ behavior: "smooth", top: y }); }
