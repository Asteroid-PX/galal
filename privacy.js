//  Accordion functionality
const accordionItems = document.querySelectorAll(".accordion");
console.log(accordionItems, "accordion items");

accordionItems.forEach((item) => {
  const accordionButton = item.querySelector(".accordion-item");
  const chevronIcon = item.querySelector(".chevron-icon");
  const content = item.querySelector(".accordion-content");

  accordionButton.addEventListener("click", () => {
    content.classList.toggle("accordion-active");
    chevronIcon.classList.toggle("chevron-active");
    if (content.classList.contains("accordion-active")) {
      item.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
});
