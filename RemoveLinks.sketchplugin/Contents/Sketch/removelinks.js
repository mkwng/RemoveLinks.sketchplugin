function onRun(context) {

    var sketch = require('sketch')
    var Flow = require('sketch/dom').Flow
    
    var document = sketch.getSelectedDocument()
    
    var selectedLayers = document.selectedLayers
    var i = 0;
    
    function doSomething(object) {
      // do something with the object
    
      if(object.flow && object.flow.targetId) {
        object.flow.targetId = null;
      }
      
      // you can know what type of object you have using object.type. That would be "Artboard" or "Group" or whatever
    
      if (object.layers && object.layers.length) {
        // iterate through the children
        object.layers.forEach(doSomething)
      }
    
    }
    
    // start the recursion
    selectedLayers.forEach(doSomething)
    
    sketch.message("All links removed");
    
};
