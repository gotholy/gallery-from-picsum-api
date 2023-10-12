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
      imageElement.style.minWidth = "300px";
      imageElement.style.maxWidth = "300px";
      imageElement.style.height = "200px";
      imageElement.style.marginTop = "2vh";
      imageElement.style.borderRadius = "15px";

      const authorElement = document.createElement("h2");
      authorElement.textContent = `${image.author}`;

      // // Button Element erstellen, Text im Btn festlegen, und Pfad wohin er führen soll festlegen
      const button = document.createElement("button");
      button.textContent = `Bild ${index + 1}`;
      button.style.backgroundColor = "#9d7538";
      button.style.border = "2px solid #a4a4a4";
      button.style.borderRadius = "50px";
      button.style.height = "30px";
      button.style.width = "80px";
      button.style.fontSize = "1.8vh";
      button.style.fontWeight = "bold";
      button.addEventListener("click", () => {
        window.open(image.url, "_blank");
      });
      // // Elemente ins div einfügen
      imageContainer.appendChild(imageElement);
      imageContainer.appendChild(authorElement);
      imageContainer.appendChild(button);
      imageContainer.style.backgroundColor = "#555";
      imageContainer.style.height = "340px";
      imageContainer.style.width = "350px";
      imageContainer.style.border = "3px solid black";
      imageContainer.style.borderRadius = "15px";

      galleryContainer.appendChild(imageContainer);
    });
  });
