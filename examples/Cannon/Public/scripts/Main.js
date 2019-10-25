//@input SceneObject floor
//@input SceneObject[] meshes

//@input SceneObject sphere1
//@input SceneObject sphere2
//@input SceneObject camera

global.touchSystem.touchBlocking = true

// add the delay to stop bugging out on startup
var delayedEvent = script.createEvent('DelayedCallbackEvent')
delayedEvent.bind(function(eventData) {
  init()
})
delayedEvent.reset(0.1)

function init() {
  var CannonHelper = global.Physics.CannonHelper

  var floor = CannonHelper.makeFloor()

  var worldObjects = [
    // { sceneObject: script.box, physicsObject: box },
    { sceneObject: script.floor, physicsObject: floor }
  ]

  // using the scripts attached to the scene objects for setup
  script.meshes.forEach(function(mesh) {
    if (mesh.getComponentCount('Component.ScriptComponent') > 0) {
      var meshSettings = mesh.getFirstComponent('Component.ScriptComponent')

      var shape
      if (meshSettings.api.shapeType == 'sphere') {
        shape = CannonHelper.makeSphere(meshSettings.api.size, meshSettings.api.position, meshSettings.api.rotation)
      } else {
        shape = CannonHelper.makeBox(meshSettings.api.size, meshSettings.api.position, meshSettings.api.rotation)
      }

      worldObjects.push({ sceneObject: mesh, physicsObject: shape })
    } else {
      print('scene object is missing a script componenet, add the physicsMesh script')
    }
  })

  // adding objects manuallly using the original Cannon module
  var cannon = new CannonHelper(worldObjects)
  var originalCannon = cannon.CANNON

  var sphere1 = CannonHelper.makeSphere(10, { x: 0, y: 50, z: 0 }, 0.1)
  var sphere2 = CannonHelper.makeSphere(10, { x: 0, y: 50, z: 0 }, 0.1)

  // attempt to boost performance by making sleeping more agressive
  // sphere1.sleepSpeedLimit = 1.0
  // sphere2.sleepSpeedLimit = 1.0

  var s1 = { sceneObject: script.sphere1, physicsObject: sphere1 }
  var s2 = { sceneObject: script.sphere2, physicsObject: sphere2 }
  cannon.addWorldObject(s1)
  cannon.addWorldObject(s2)

  var cameraBox = new originalCannon.Body({
    mass: 100,
    position: new originalCannon.Vec3(0, 0, -1000),
    shape: new originalCannon.Box(new originalCannon.Vec3(100, 1000, 100)),
    // if no rotation on W set something, seems to stall if nothing is set!
    quaternion: new originalCannon.Quaternion(0.01, 0.01, 0.01, 0.01),
    // quaternion: new CANNON.Quaternion(rotation.x || 0.5, rotation.y || 0.5, rotation.z || 0.5, rotation.w || 0.5),
    // material: mat
    DYNAMIC: 0
    // fixedRotation: true
    // linearDamping: 0.1,
    // angularDamping: 0.5
  })

  // print(originalCannon)
  cannon.world.addBody(cameraBox)

  // sphere1.mass = 0
  // sphere2.velocity = new originalCannon.Vec3(5, 0, 0)

  // // Connect this body to the last one
  // var c = new originalCannon.PointToPointConstraint(
  //   sphere1,
  //   new originalCannon.Vec3(50, 150, 10),
  //   sphere2,
  //   new originalCannon.Vec3(-50, 60, 0)
  // )
  // cannon.world.addConstraint(c)
  var camTransform = script.camera.getTransform()
  var event = script.createEvent('UpdateEvent')
  event.bind(function(eventData) {
    cannon.update()

    cannon.syncSceneObject(camTransform, cameraBox)
    // print(camTransform.getWorldPosition().z)
    // print(cameraBox.position.z)
  })
}
