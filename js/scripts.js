document.addEventListener("DOMContentLoaded", function() {
    const movies = document.querySelectorAll(".movie");

    movies.forEach((movie, index) => {
        movie.style.opacity = 0;
        movie.style.transform = "translateY(20px)";
        setTimeout(() => {
            movie.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            movie.style.opacity = 1;
            movie.style.transform = "translateY(0)";
        }, index * 100); // Stagger the animation with 100ms delay between each movie
    });
});
