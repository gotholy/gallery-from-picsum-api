fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    const picture = data;
    const galleryContainer = document.getElementById("gallery");
    picture.forEach((image, index) => {
      // // Container für jedes Bild erstellen
      const imageContainer = document.createElement("div");
      // // Bild Element erstellen und Bild Pfad zuweisen
      const imageElement = document.createElement("img");
      imageElement.src = image.download_url;
      imageElement.style.maxWidth = "200px";

      const authorElement = document.createElement("h2");
      authorElement.textContent = `${image.author}`;

      // // Button Element erstellen, Text im Btn festlegen, und Pfad wohin er führen soll festlegen
      const button = document.createElement("button");
      button.textContent = `Bild ${index + 1}`;
      button.addEventListener("click", () => {});
      // // Elemente ins div einfügen
      imageContainer.appendChild(imageElement);
      imageContainer.appendChild(authorElement);
      imageContainer.appendChild(button);

      galleryContainer.appendChild(imageContainer);
    });
  });
