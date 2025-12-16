const btn = document.getElementById("btnTop");

        // Affiche le bouton si on descend, le cache si on remonte
        window.addEventListener("scroll", () => {
            if ( window.scrollY > 75 ) {
                btn.style.display = "block";
            } 
            else {
                btn.style.display = "none";
            }
        });

        // Scroll vers le haut
        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
            });
        });
