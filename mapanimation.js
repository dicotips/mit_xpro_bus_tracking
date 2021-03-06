// This array contains the coordinates for all Bus and Metro stops between
// where I as leaving in Chile and my path to the DCC Chile
  const stopsChile = [
    [-70.61766650800423, -33.427153863146240],
    [-70.61427333721471, -33.425479234519500],
    [-70.61920482640326, -33.428341972126510],
    [-70.63325169308580, -33.437277607154600],
    [-70.64055917449286, -33.440216325912466],
    [-70.64569170196627, -33.442679616164130],
    [-70.65482039662307, -33.444856021105835],
    [-70.66037180086784, -33.446138017774660],
    [-70.66702606737105, -33.447718954026264],
    [-70.66646298391292, -33.447725298197480],
    [-70.66593418731169, -33.447636433939070],
    [-70.66568685775839, -33.449385553296020],
    [-70.66568685775839, -33.449385553296020],
    [-70.66463296698333, -33.451566395516615],
    [-70.66444652922016, -33.452788535014020],
    [-70.66434853312292, -33.453919196748220],
    [-70.66418342960851, -33.455071237201780],
    [-70.66408961402499, -33.456248321576410],
    [-70.66411587382677, -33.456943303760210],
    [-70.66400706935907, -33.457725905033530],
    [-70.66468622539031, -33.457891822664830]
  ]
  
  // TODO: add your own Mapbox access token
  mapboxgl.accessToken = '<ACCESS_KEY>';
  
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    //center: [-71.104081, 42.365554],
    center: [-70.673676, -33.447487],
    zoom: 13,
  });

  var marker = new mapboxgl.Marker()
    //.setLngLat([-71.093729, 42.359244])
    .setLngLat([-70.61766650800423, -33.427153863146240],)
    .addTo(map);

  let counter = 0;
  function move() {
    setTimeout(() => {
      if (counter >= stopsChile.length) return;
      marker.setLngLat(stopsChile[counter]);
      counter++;
      move();
    }, 1000);
  
  }
  
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  