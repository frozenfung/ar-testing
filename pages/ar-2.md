<a-scene id="clubon-aframe" embedded arjs='sourceType: webcam; debugUIEnabled: false;'>
  <a-assets>
    <a-asset-item id="beagle" src="images/beagle.obj"></a-asset-item>
    <a-asset-item id="color" src="images/beagle.mtl"></a-asset-item>
  </a-assets>
  <a-marker preset='custom' type='pattern' url='images/clubon-marker.patt'>
    <a-obj-model src="#beagle" mtl="#color"></a-obj-model>
  <!--marker-->
  </a-marker>
  <a-entity camera></a-entity>
</a-scene>

<div id="clubon-marker">
  <img src="images/clubon-marker.png">
</div>
