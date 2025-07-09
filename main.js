const shareButton = document.querySelector('.article-preview__share-icon');
shareButton.addEventListener("click", () => {
  const isPresent = shareButton.classList.toggle('active');

  const wrapper = document.querySelector('.article-preview__share-socials-wrapper');

  if (!shareButton) return;

  if (isPresent) {
    shareButton.style.backgroundColor = '#6E8098';
    wrapper.style.display = 'block';
    shareButton.innerHTML = `<img
    src="./images/icon-share-alt.svg"
    alt="icon-share-alt"
    width="15"
    height="13"
    />

    <figcaption class="offscreen">icon-share</figcaption>`;
  } else {
    shareButton.style.backgroundColor = '#ECF2F8';
    wrapper.style.display = 'none';
    shareButton.innerHTML = `<img
    src="./images/icon-share.svg"
    alt="icon-share"
    width="15"
    height="13"
    />

    <figcaption class="offscreen">icon-share</figcaption>`;
  }
});