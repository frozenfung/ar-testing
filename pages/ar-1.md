<a-scene embedded arjs='sourceType: webcam;'>
  <!--城堡本體-->
  <a-box position="0 1 0"  color="#fff" width="1" height="1" depth="1.3"></a-box>
  <!--上面八個突起-->
  <a-box position="0 0.6 -0.75" color="#fff" width="0.2" height="0.2" depth="0.2"></a-box>
  <a-box position="-0.4 0.6 -0.75" color="#fff" width="0.2" height="0.2" depth="0.2"></a-box>
  <a-box position="0.4 0.6 -0.75" color="#fff" width="0.2" height="0.2" depth="0.2"></a-box>
  <a-box position="-0.4 1 -0.75" color="#fff" width="0.2" height="0.2" depth="0.2"></a-box>
  <a-box position="0.4 1 -0.75" color="#fff" width="0.2" height="0.2" depth="0.2"></a-box>
  <a-box position="-0.4 1.4 -0.75" color="#fff" width="0.2" height="0.2" depth="0.2"></a-box>
  <a-box position="0 1.4 -0.75" color="#fff" width="0.2" height="0.2" depth="0.2"></a-box>
  <a-box position="0.4 1.4 -0.75" color="#fff" width="0.2" height="0.2" depth="0.2"></a-box>
  <!--城堡窗戶-->
  <a-box position="0.25 1.5 -0.25" color="black" width="0.025" height="0.05" depth="0.3"></a-box>
  <a-box position="-0.25 1.5 -0.25" color="black" width="0.025" height="0.05" depth="0.3"></a-box>
  <!--城門-->
  <a-box position="0 1.5 0.375" color="yellow" width="0.5" height="0.05" depth="0.55"></a-box>
  <!--圈圈-->
  <a-ring position="0 1 -0.1" color="#000" radius-outer="1.2" radius-inner="1.1" rotation="-90 0 0"></a-ring>
  <!--相機-->
  <a-marker-camera preset='hiro'></a-marker-camera>
</a-scene>
