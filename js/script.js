
const start = ()=>{
  //por defecto openyaler usa la proyeciion 3857 world marcador
  const map = new ol.Map({
    view: new ol.View({
      center:[0,0],
      zoom:3
    }),
    layers:[
      new ol.layer.Tile({
        source:new ol.source.OSM()
    })
    ],
    target:"map"
  })
}

const handler = () =>{
  document.addEventListener('DOMContentLoaded',(event)=>{
   start();
    console.log('hola');
  
});
}
handler();
