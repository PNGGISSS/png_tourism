var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ExistingTourism_1 = new ol.format.GeoJSON();
var features_ExistingTourism_1 = format_ExistingTourism_1.readFeatures(json_ExistingTourism_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingTourism_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingTourism_1.addFeatures(features_ExistingTourism_1);
cluster_ExistingTourism_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ExistingTourism_1
});
var lyr_ExistingTourism_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ExistingTourism_1, 
                style: style_ExistingTourism_1,
                popuplayertitle: 'Existing Tourism',
                interactive: true,
                title: '<img src="styles/legend/ExistingTourism_1.png" /> Existing Tourism'
            });
var format_PotentialTourism_2 = new ol.format.GeoJSON();
var features_PotentialTourism_2 = format_PotentialTourism_2.readFeatures(json_PotentialTourism_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialTourism_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialTourism_2.addFeatures(features_PotentialTourism_2);
cluster_PotentialTourism_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PotentialTourism_2
});
var lyr_PotentialTourism_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PotentialTourism_2, 
                style: style_PotentialTourism_2,
                popuplayertitle: 'Potential Tourism',
                interactive: true,
                title: '<img src="styles/legend/PotentialTourism_2.png" /> Potential Tourism'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ExistingTourism_1.setVisible(true);lyr_PotentialTourism_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ExistingTourism_1,lyr_PotentialTourism_2];
lyr_ExistingTourism_1.set('fieldAliases', {'ET': 'ET', 'Products': 'Products', 'Dates': 'Dates', 'Rd Cond.': 'Rd Cond.', 'Safety': 'Safety', });
lyr_PotentialTourism_2.set('fieldAliases', {'id': 'id', 'Potential': 'Potential', 'Products': 'Products', 'Dates': 'Dates', 'Rd Cond.': 'Rd Cond.', 'Safety': 'Safety', });
lyr_ExistingTourism_1.set('fieldImages', {'ET': 'TextEdit', 'Products': 'TextEdit', 'Dates': 'TextEdit', 'Rd Cond.': 'TextEdit', 'Safety': 'TextEdit', });
lyr_PotentialTourism_2.set('fieldImages', {'id': 'TextEdit', 'Potential': 'TextEdit', 'Products': 'TextEdit', 'Dates': 'TextEdit', 'Rd Cond.': 'TextEdit', 'Safety': 'TextEdit', });
lyr_ExistingTourism_1.set('fieldLabels', {'ET': 'inline label - visible with data', 'Products': 'inline label - visible with data', 'Dates': 'inline label - visible with data', 'Rd Cond.': 'inline label - visible with data', 'Safety': 'inline label - visible with data', });
lyr_PotentialTourism_2.set('fieldLabels', {'id': 'header label - visible with data', 'Potential': 'inline label - always visible', 'Products': 'inline label - visible with data', 'Dates': 'inline label - visible with data', 'Rd Cond.': 'inline label - always visible', 'Safety': 'inline label - always visible', });
lyr_PotentialTourism_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});