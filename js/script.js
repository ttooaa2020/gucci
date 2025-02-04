$(function () {
  // 모바일 더보기
  const btnMenu = document.querySelector(".mobile-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const btnClose = document.querySelector(".mobile-btn-close");

  btnMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
  // 모바일 더보기 end
});
