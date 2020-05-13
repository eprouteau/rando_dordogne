{
mviewer.customLayers.directionnel = {};

var fGeoJSON = function() {
    $.ajax('http://emeric-prouteau.alwaysdata.net/gis/data/data.php').done(function(reponse){
        if(reponse=='erreur'){
            $('#liste').html('<h3>Problème de lecture des données</h3>');
        }else if(reponse=='NaN'){
            $('#liste').html('<h3>Acune donnée</h3>');
        }else{
            var format = new ol.format.GeoJSON();
            var features = format.readFeatures(reponse,{featureProjection: 'EPSG:3857'});
            sourceDemo.addFeatures(features);
        }
    }).fail(function () {
        $('#liste').html('<h3>Problème de lecture des données</h3>');
    });
}
var sourceDemo = new ol.source.Vector({
    loader: fGeoJSON,
    strategy: ol.loadingstrategy.all
});

mviewer.customLayers.directionnel.layer = new ol.layer.Vector({
        source: sourceDemo,
style: new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: "#239BDC"
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 2
        }),
        radius: 6
    })
})        
  });
mviewer.customLayers.directionnel.handle = false;
} 