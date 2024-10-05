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
