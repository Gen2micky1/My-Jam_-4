// To toggle we need to call the icon
const shareButton = document.querySelector(".article-preview__share-icon");

// Add event to the icon (click event)
shareButton.addEventListener("click", () => {
  // onClick the icon should change
  const isClicked = shareButton.classList.toggle("active");

  // To display the share content, we need to call the content wrapper
  const contentWrapper = document.querySelector(
    ".article-preview__share-socials-wrapper"
  );

  // If the user click outside share button it should display nothing
  if (!shareButton) return;

  // If the user click the share button it should display this
  if (isClicked) {
    shareButton.style.backgroundColor = "#6e8098";
    contentWrapper.style.display = "block";
    shareButton.innerHTML = `
    <img
      src="./images/icon-share-alt.svg"
      alt="icon-share-alt"
      width="15"
      height="13"
    />

    <figcaption class="offscreen">icon-share</figcaption>`;
  }
  // If the user click the share button again it should display this
  else {
    shareButton.style.backgroundColor = "#ecf2f8";
    contentWrapper.style.display = "none";
    shareButton.innerHTML = `
    <img
      src="./images/icon-share.svg"
      alt="icon-share"
      width="15"
      height="13"
    />

    <figcaption class="offscreen">icon-share</figcaption>`;
  }
});
