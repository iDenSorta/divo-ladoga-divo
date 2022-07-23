
const waterfall = document.querySelector(".waterfalls");
const tours = document.querySelector(".tours");
const options = {};

const MapObserver = new IntersectionObserver(function(entries, observer){

    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            let script = document.createElement('script');
            script.type = "text/javascript",
            script.charset = "utf-8",
            script.async,
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abfb64ed8dada6478f3fbb71eb6ba4ad3d82c6d1bfa59b9ad474b0a8eb7f9c677&amp;amp;width=100%25&amp;amp;height=100%25&amp;amp;lang=ru_RU&amp;amp;scroll=false"
            document.querySelector(".iframe-wrapper").classList.remove("observer");
            document.querySelector(".iframe-wrapper").prepend(script);
            MapObserver.disconnect();
        }

    });
}, options);

MapObserver.observe(waterfall);


// Код ниже экономит 52кб при первой загрузк

/*

const RoutesObserver = new IntersectionObserver(function(entries, observer){

    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            document.querySelector(".route-switcher").classList.remove("observer")
            RoutesObserver.disconnect();
        }

    });
}, options);



RoutesObserver.observe(tours);
*/