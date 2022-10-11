window.onload = function () {
  addContent();
};

function addContent() {
  // 1.1 Basandote en el array siguiente, crea una lista ul > li
  // dinámicamente en el html que imprima cada uno de los paises.
  const countries1 = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

  const ulList = document.createElement("ul");
  document.body.appendChild(ulList);
  for (const country of countries1) {
    const li$$ = document.createElement("li");
    li$$.textContent = country;
    ulList.appendChild(li$$);
  }

  // 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

  const removeElementClass = document.querySelector(".fn-remove-me");
  removeElementClass.remove();

  // 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
  // en el div de html con el atributo data-function="printHere".
  const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
  const ulList1 = document.createElement("ul");
  document.body.appendChild(ulList1);
  for (const car of cars) {
    const li$$ = document.createElement("li");
    li$$.textContent = car;
    ulList1.appendChild(li$$);
  }
  // 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
  // h4 para el titulo y otro elemento img para la imagen.

  const countries2 = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  const ulListContainer = document.createElement("ul");
  document.body.appendChild(ulListContainer);
  for (const country of countries2) {
    const li$$ = document.createElement("li");
    const div$$ = document.createElement("div");
    const h4$$ = document.createElement("h4");
    h4$$.textContent = country.title;
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", country.imgUrl);
    ulListContainer.appendChild(li$$);
    li$$.appendChild(div$$);
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
  }

  // 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
  // elemento de la lista.

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Eliminar ultimo elemento";
  document.body.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    ulListContainer.lastChild.remove();
  });

  // 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
  // elementos de las listas que elimine ese mismo elemento del html.

  const ulListContainer2 = document.createElement("ul");
  document.body.appendChild(ulListContainer2);

  for (const country of countries2) {
    const li$$ = document.createElement("li");
    const div$$ = document.createElement("div");
    const h4$$ = document.createElement("h4");
    const img$$ = document.createElement("img");
    const deleteButton = document.createElement("button");

    h4$$.textContent = country.title;
    img$$.setAttribute("src", country.imgUrl);
    deleteButton.textContent = "Eliminar elemento";

    ulListContainer2.appendChild(li$$);

    li$$.appendChild(div$$);
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    li$$.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      li$$.remove();
    });
  }
}
