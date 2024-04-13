    const loadNavBar = () => {
    fetch("./templates/nav.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", data);
        });
    };

    const loadFooter = () => {
    fetch("./templates/footer.html")
        .then((response) => response.text())
        .then((data) => {
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", data);
        });
    };