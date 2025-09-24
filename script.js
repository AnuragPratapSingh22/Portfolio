document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".skill-fill");
  skillFills.forEach(fill => {
    const width = fill.getAttribute("style").match(/width:\s*(\d+)%/)[1] + "%";
    fill.style.width = "0%";
    setTimeout(() => {
      fill.style.width = width;
    }, 500);
  });
});
