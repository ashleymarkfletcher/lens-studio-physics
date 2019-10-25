import CANNON from './cannon'

export class CannonHelper {
  constructor(worldObjects) {
    this.ShapeTypes = {
      SPHERE: 1,
      PLANE: 2,
      BOX: 4,
      COMPOUND: 8,
      CONVEXPOLYHEDRON: 16,
      HEIGHTFIELD: 32,
      PARTICLE: 64,
      CYLINDER: 128,
      TRIMESH: 256
    }

    // consts for stepping through time in the sim
    this.fixedTimeStep = 1.0 / 30.0 // seconds
    this.maxSubSteps = 3

    this.groundMaterial = new CANNON.Material()

    // pass them in at the beginning?
    this.worldObjects = worldObjects

    // Init our world
    this.world = new CANNON.World()

    // expose the original cannon object for static methods
    this.CANNON = CANNON

    // set the gravity
    this.world.gravity.set(0, -29.82, 0) // m/s²

    // set up the initial objects
    this.worldObjects.forEach((worldObject, i) => {
      // attempt to boost performance by making sleeping more agressive
      // worldObject.physicsObject.sleepSpeedLimit = 1.0

      // add the body to the world
      // this.worldObjects[i].physicsObject = this.world.addBody(worldObject.physicsObject)
      this.world.addBody(worldObject.physicsObject)

      // save the transform for later
      // using getTransform everywhere seemed to have a performance hit
      worldObject.transform = worldObject.sceneObject.getTransform()

      // sync the scale initially so that everything matches
      this.syncScale(this.worldObjects[i].transform, this.worldObjects[i].physicsObject)

      // if (this.groundBody && this.worldObjects[i].physicsObject) {
      //   print('here')
      //   var contactMat = new CANNON.ContactMaterial(this.groundBody.material, worldObject.physicsObject.material, {
      //     friction: 0.0,
      //     restitution: 0.7
      //   })
      //   this.world.addContactMaterial(contactMat)
      // }
    })

    // TEST CONTACT MATERIAL
    // var contactMat = new CANNON.ContactMaterial(
    //   this.worldObjects[0].physicsObject.material,
    //   this.worldObjects[1].physicsObject.material,
    //   {
    //     friction: 0.0,
    //     restitution: 0.7
    //   }
    // )
    // this.world.addContactMaterial(contactMat)
  }

  bodyPos(cannonBody) {
    return new vec3(cannonBody.position.x, cannonBody.position.y, cannonBody.position.z)
  }

  // return the scale/size of a physics object
  // use for scaling a sceneObject to match the physics world
  bodyScale(cannonBody) {
    const shape = cannonBody.shapes[0]

    // // TODO: change to switch to support more shapes
    // if (shape.type == this.ShapeTypes.SPHERE) return new vec3(shape.radius, shape.radius, shape.radius)
    // // the plane type seems to have no size
    // else if (shape.type == this.ShapeTypes.PLANE) return new vec3(10, 10, 10)

    switch (shape.type) {
      case this.ShapeTypes.SPHERE:
        return new vec3(shape.radius, shape.radius, shape.radius)
        break
      case this.ShapeTypes.PLANE:
        return new vec3(10, 10, 10)
        break

      case this.ShapeTypes.BOX:
      default:
        const size = shape.halfExtents

        return new vec3(size.x / 8, size.y / 8, size.z / 8)
        break
    }
  }

  bodyRot(cannonBody) {
    var rot = cannonBody.quaternion
    transform.setWorldRotation(new quat(rot.w, rot.x, rot.y, rot.z))
  }

  addWorldObject(worldObject) {
    this.world.addBody(worldObject.physicsObject)

    worldObject.transform = worldObject.sceneObject.getTransform()

    // sync the scale initially so that everything matches
    this.worldObjects.push(worldObject)

    this.syncScale(worldObject.transform, worldObject.physicsObject)
  }

  syncPos(transform, cannonBody) {
    // var transform = sceneObject.getTransform()
    var newPos = this.bodyPos(cannonBody)
    transform.setWorldPosition(newPos)

    var rot = cannonBody.quaternion
    transform.setWorldRotation(new quat(rot.w, rot.x, rot.y, rot.z))
  }

  syncScale(transform, cannonBody) {
    // const transform = sceneObject.getTransform()
    const physicsSize = this.bodyScale(cannonBody)
    transform.setWorldScale(physicsSize)
  }

  update() {
    // step the sim, can just take fixed time
    // this.world.step(this.fixedTimeStep, getDeltaTime(), this.maxSubSteps)

    this.world.step(global.getDeltaTime())

    // for loop faster, really worth it?
    for (var i = 0; i < this.worldObjects.length; i++) {
      // const element = array[i];
      this.syncPos(this.worldObjects[i].transform, this.worldObjects[i].physicsObject)
    }
    // this.worldObjects.forEach(worldObject => {
    //   this.syncPos(worldObject.transform, worldObject.physicsObject)
    // })
  }

  // sync from snap -> cannon
  syncSceneObject(transform, cannonBody) {
    // var transform = sceneObject.getTransform()
    var pos = transform.getWorldPosition()
    var rot = transform.getWorldRotation()

    //   var newPlayerPos = new CANNON.Vec3(pos.x, pos.y, pos.z)

    // XXX: probably a pretty bad way of syncing
    // might be better to add velocity towards the desired point
    cannonBody.position.set(pos.x, pos.y, pos.z)
    cannonBody.quaternion.set(rot.x, rot.z, rot.y, rot.w)
    cannonBody.velocity = new CANNON.Vec3(0, 0, 0)
    cannonBody.torque = new CANNON.Vec3(0, 0, 0)
    // cannonBody.type = CANNON.Body.STATIC
    //   cannonBody.position.set(pos.x, pos.z * -1, pos.y)
  }

  static makeBox(size, position, rotation) {
    var mat = new CANNON.Material()

    return new CANNON.Body({
      mass: 1,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      shape: new CANNON.Box(new CANNON.Vec3(size.x, size.y, size.z)),
      // if no rotation on W set something, seems to stall if nothing is set!
      quaternion: new CANNON.Quaternion(rotation.x, rotation.y, rotation.z, rotation.w || 0.5),
      // quaternion: new CANNON.Quaternion(rotation.x || 0.5, rotation.y || 0.5, rotation.z || 0.5, rotation.w || 0.5),
      material: mat
      // DYNAMIC: 1
      // fixedRotation: true
      // linearDamping: 0.1,
      // angularDamping: 0.5
    })
  }

  static makeSphere(size, position, rotation) {
    var mat = new CANNON.Material()
    return new CANNON.Body({
      mass: 1,
      // position: new CANNON.Vec3(0, 10, -10),
      // shape: new CANNON.Sphere(12)
      position: new CANNON.Vec3(position.x, position.y, position.z),
      shape: new CANNON.Sphere(size.x),
      material: mat
      // DYNAMIC: 1
      // fixedRotation: true
      // linearDamping: 0.1,
      // angularDamping: 0.5
    })
  }

  static makeFloor(size, position, rotation) {
    var mat = new CANNON.Material()
    // ground planes seem to be infinite in size...
    // var groundShape = new CANNON.Plane()
    const groundShape = new CANNON.Box(new CANNON.Vec3(1000, 1000, 1))
    var groundBody = new CANNON.Body({
      mass: 0, // mass == 0 makes the body static
      material: mat,
      shape: groundShape
    })

    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2)

    return groundBody
  }
}
