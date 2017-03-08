ymaps.ready(init);
function init () {
    var myMap = new ymaps.Map('map',{
        center: [51.12, 71.43],
        zoom: 12,
        controls: ['zoomControl']
    }),  
    myGeoObject = new ymaps.GeoObject({        
    });
    myMap.geoObjects
    .add(myGeoObject)
    .add(new ymaps.Placemark([51.155877, 71.465089], {
        balloonContentHeader: "ДС Казахстан",
        balloonContentBody: "ДС Казахстан good",
        balloonContentFooter: "offical site kaz.kz",
        hintContent: "school adasd"
    }, {
        preset: "islands#sportIcon",
        iconColor: "red",        
    }));
}