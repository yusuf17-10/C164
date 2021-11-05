AFRAME.registerComponent('wirefence', {
    schema: {
        
    },

    init: function () {
      this.createfence()  
    },

    createfence:function(){
        posX = -20
        for (i = 0;i<10;i++){
           var fence = document.createElement("a-entity")
           posX = posX+5
           posY = 2.5
           console.log("hi")
           fence.setAttribute("id","fence"+i)
           fence.setAttribute("position",{x:posX,y:posY,z:-30})
           fence.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
           fence.setAttribute("static-body",{})
           fence.setAttribute("scale",{x:5,y:5,z:5})
           var sceneel = document.querySelector("#scene")
           sceneel.appendChild(fence)
        }
    }


});
