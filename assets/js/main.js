let gallery = document.getElementById ("gallery")
console.log(gallery);

/* gallery.innerHTML(<figure><p>Figure1</p><p>Figure2</p><p>Figure3</p> </figure>) */


gallery.innerHTML += `<figure><img src="https://picsum.photos/200/301" alt="picture">
<figcaption>Figure1</figcaption></figure>` + `<figure><img src="https://picsum.photos/200/301" alt="picture">
<figcaption>Figure2</figcaption></figure>` + `<figure><img src="https://picsum.photos/200/301" alt="picture">
<figcaption>Figure3</figcaption></figure>`;

gallery.style.display = "flex";