var wms_layers = [];

var format_Limite_de_Bairros_0 = new ol.format.GeoJSON();
var features_Limite_de_Bairros_0 = format_Limite_de_Bairros_0.readFeatures(json_Limite_de_Bairros_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_de_Bairros_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_de_Bairros_0.addFeatures(features_Limite_de_Bairros_0);
var lyr_Limite_de_Bairros_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_de_Bairros_0, 
                style: style_Limite_de_Bairros_0,
                popuplayertitle: "Limite_de_Bairros",
                interactive: true,
                title: '<img src="styles/legend/Limite_de_Bairros_0.png" /> Limite_de_Bairros'
            });
var format_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1 = new ol.format.GeoJSON();
var features_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1 = format_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1.readFeatures(json_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1.addFeatures(features_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1);
var lyr_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1, 
                style: style_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1,
                popuplayertitle: "Limite_do_MunicADpio_do_Rio_de_Janeiro — Limite_do_Munic%C3%ADpio_do_Rio_de_Janeiro",
                interactive: true,
                title: '<img src="styles/legend/Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1.png" /> Limite_do_MunicADpio_do_Rio_de_Janeiro — Limite_do_Munic%C3%ADpio_do_Rio_de_Janeiro'
            });
var format_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2 = new ol.format.GeoJSON();
var features_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2 = format_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2.readFeatures(json_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2.addFeatures(features_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2);
var lyr_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2, 
                style: style_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2,
                popuplayertitle: "Limite_81reas_de_Planejamento_(AP) — Limite_%C3%81reas_de_Planejamento_(AP)",
                interactive: true,
                title: '<img src="styles/legend/Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2.png" /> Limite_81reas_de_Planejamento_(AP) — Limite_%C3%81reas_de_Planejamento_(AP)'
            });

lyr_Limite_de_Bairros_0.setVisible(true);lyr_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1.setVisible(true);lyr_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2.setVisible(true);
var layersList = [lyr_Limite_de_Bairros_0,lyr_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1,lyr_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2];
lyr_Limite_de_Bairros_0.set('fieldAliases', {'objectid': 'objectid', 'área': 'área', 'nome': 'nome', 'regiao_adm': 'regiao_adm', 'area_plane': 'area_plane', 'codbairro': 'codbairro', 'codra': 'codra', 'codbnum': 'codbnum', 'link': 'link', 'rp': 'rp', 'cod_rp': 'cod_rp', 'codbairro_long': 'codbairro_long', 'st_areashape': 'st_areashape', 'st_perimetershape': 'st_perimetershape', });
lyr_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'mun': 'mun', 'shape_leng': 'shape_leng', 'st_areashape': 'st_areashape', 'st_perimetershape': 'st_perimetershape', });
lyr_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'sum_sum_ar': 'sum_sum_ar', 'shape_leng': 'shape_leng', 'codap': 'codap', 'codapnum': 'codapnum', 'st_areashape': 'st_areashape', 'st_perimetershape': 'st_perimetershape', });
lyr_Limite_de_Bairros_0.set('fieldImages', {'objectid': '', 'área': '', 'nome': '', 'regiao_adm': '', 'area_plane': '', 'codbairro': '', 'codra': '', 'codbnum': '', 'link': '', 'rp': '', 'cod_rp': '', 'codbairro_long': '', 'st_areashape': '', 'st_perimetershape': '', });
lyr_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1.set('fieldImages', {'objectid_1': '', 'objectid': '', 'mun': '', 'shape_leng': '', 'st_areashape': '', 'st_perimetershape': '', });
lyr_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2.set('fieldImages', {'objectid_1': '', 'objectid': '', 'sum_sum_ar': '', 'shape_leng': '', 'codap': '', 'codapnum': '', 'st_areashape': '', 'st_perimetershape': '', });
lyr_Limite_de_Bairros_0.set('fieldLabels', {'objectid': 'no label', 'área': 'no label', 'nome': 'no label', 'regiao_adm': 'no label', 'area_plane': 'no label', 'codbairro': 'no label', 'codra': 'no label', 'codbnum': 'no label', 'link': 'no label', 'rp': 'no label', 'cod_rp': 'no label', 'codbairro_long': 'no label', 'st_areashape': 'no label', 'st_perimetershape': 'no label', });
lyr_Limite_do_MunicADpio_do_Rio_de_JaneiroLimite_do_MunicC3ADpio_do_Rio_de_Janeiro_1.set('fieldLabels', {'objectid_1': 'no label', 'objectid': 'no label', 'mun': 'no label', 'shape_leng': 'no label', 'st_areashape': 'no label', 'st_perimetershape': 'no label', });
lyr_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2.set('fieldLabels', {'objectid_1': 'no label', 'objectid': 'no label', 'sum_sum_ar': 'no label', 'shape_leng': 'no label', 'codap': 'no label', 'codapnum': 'no label', 'st_areashape': 'no label', 'st_perimetershape': 'no label', });
lyr_Limite_81reas_de_Planejamento_APLimite_C381reas_de_Planejamento_AP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});