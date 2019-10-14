// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"luXt":[function(require,module,exports) {
module.exports = {
  "_from": "github:schteppe/cannon.js",
  "_id": "cannon@0.6.2",
  "_inBundle": false,
  "_integrity": "",
  "_location": "/cannon",
  "_phantomChildren": {},
  "_requested": {
    "type": "git",
    "raw": "schteppe/cannon.js",
    "rawSpec": "schteppe/cannon.js",
    "saveSpec": "github:schteppe/cannon.js",
    "fetchSpec": null,
    "gitCommittish": null
  },
  "_requiredBy": [
    "#USER",
    "/"
  ],
  "_resolved": "github:schteppe/cannon.js#569730f94a1d9da47967a24fad0323ef7d5b4119",
  "_spec": "schteppe/cannon.js",
  "_where": "/Users/ashley/Documents/repos/snapchat-util",
  "author": {
    "name": "Stefan Hedman",
    "email": "schteppe@gmail.com",
    "url": "http://steffe.se"
  },
  "bugs": {
    "url": "https://github.com/schteppe/cannon.js/issues"
  },
  "bundleDependencies": false,
  "dependencies": {},
  "deprecated": false,
  "description": "A lightweight 3D physics engine written in JavaScript.",
  "devDependencies": {
    "browserify": "*",
    "grunt": "~0.4.0",
    "grunt-browserify": "^2.1.4",
    "grunt-contrib-concat": "~0.1.3",
    "grunt-contrib-jshint": "~0.1.1",
    "grunt-contrib-nodeunit": "^0.4.1",
    "grunt-contrib-uglify": "^0.5.1",
    "grunt-contrib-yuidoc": "^0.5.2",
    "jshint": "latest",
    "nodeunit": "^0.9.0",
    "uglify-js": "latest"
  },
  "engines": {
    "node": "*"
  },
  "homepage": "https://github.com/schteppe/cannon.js",
  "keywords": [
    "cannon.js",
    "cannon",
    "physics",
    "engine",
    "3d"
  ],
  "licenses": [
    {
      "type": "MIT"
    }
  ],
  "main": "./src/Cannon.js",
  "name": "cannon",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/schteppe/cannon.js.git"
  },
  "version": "0.6.2"
}
;
},{}],"etZO":[function(require,module,exports) {
module.exports = Mat3;

var Vec3 = require('./Vec3');

/**
 * A 3x3 matrix.
 * @class Mat3
 * @constructor
 * @param array elements Array of nine elements. Optional.
 * @author schteppe / http://github.com/schteppe
 */
function Mat3(elements){
    /**
     * A vector of length 9, containing all matrix elements
     * @property {Array} elements
     */
    if(elements){
        this.elements = elements;
    } else {
        this.elements = [0,0,0,0,0,0,0,0,0];
    }
}

/**
 * Sets the matrix to identity
 * @method identity
 * @todo Should perhaps be renamed to setIdentity() to be more clear.
 * @todo Create another function that immediately creates an identity matrix eg. eye()
 */
Mat3.prototype.identity = function(){
    var e = this.elements;
    e[0] = 1;
    e[1] = 0;
    e[2] = 0;

    e[3] = 0;
    e[4] = 1;
    e[5] = 0;

    e[6] = 0;
    e[7] = 0;
    e[8] = 1;
};

/**
 * Set all elements to zero
 * @method setZero
 */
Mat3.prototype.setZero = function(){
    var e = this.elements;
    e[0] = 0;
    e[1] = 0;
    e[2] = 0;
    e[3] = 0;
    e[4] = 0;
    e[5] = 0;
    e[6] = 0;
    e[7] = 0;
    e[8] = 0;
};

/**
 * Sets the matrix diagonal elements from a Vec3
 * @method setTrace
 * @param {Vec3} vec3
 */
Mat3.prototype.setTrace = function(vec3){
    var e = this.elements;
    e[0] = vec3.x;
    e[4] = vec3.y;
    e[8] = vec3.z;
};

/**
 * Gets the matrix diagonal elements
 * @method getTrace
 * @return {Vec3}
 */
Mat3.prototype.getTrace = function(target){
    var target = target || new Vec3();
    var e = this.elements;
    target.x = e[0];
    target.y = e[4];
    target.z = e[8];
};

/**
 * Matrix-Vector multiplication
 * @method vmult
 * @param {Vec3} v The vector to multiply with
 * @param {Vec3} target Optional, target to save the result in.
 */
Mat3.prototype.vmult = function(v,target){
    target = target || new Vec3();

    var e = this.elements,
        x = v.x,
        y = v.y,
        z = v.z;
    target.x = e[0]*x + e[1]*y + e[2]*z;
    target.y = e[3]*x + e[4]*y + e[5]*z;
    target.z = e[6]*x + e[7]*y + e[8]*z;

    return target;
};

/**
 * Matrix-scalar multiplication
 * @method smult
 * @param {Number} s
 */
Mat3.prototype.smult = function(s){
    for(var i=0; i<this.elements.length; i++){
        this.elements[i] *= s;
    }
};

/**
 * Matrix multiplication
 * @method mmult
 * @param {Mat3} m Matrix to multiply with from left side.
 * @return {Mat3} The result.
 */
Mat3.prototype.mmult = function(m,target){
    var r = target || new Mat3();
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            var sum = 0.0;
            for(var k=0; k<3; k++){
                sum += m.elements[i+k*3] * this.elements[k+j*3];
            }
            r.elements[i+j*3] = sum;
        }
    }
    return r;
};

/**
 * Scale each column of the matrix
 * @method scale
 * @param {Vec3} v
 * @return {Mat3} The result.
 */
Mat3.prototype.scale = function(v,target){
    target = target || new Mat3();
    var e = this.elements,
        t = target.elements;
    for(var i=0; i!==3; i++){
        t[3*i + 0] = v.x * e[3*i + 0];
        t[3*i + 1] = v.y * e[3*i + 1];
        t[3*i + 2] = v.z * e[3*i + 2];
    }
    return target;
};

/**
 * Solve Ax=b
 * @method solve
 * @param {Vec3} b The right hand side
 * @param {Vec3} target Optional. Target vector to save in.
 * @return {Vec3} The solution x
 * @todo should reuse arrays
 */
Mat3.prototype.solve = function(b,target){
    target = target || new Vec3();

    // Construct equations
    var nr = 3; // num rows
    var nc = 4; // num cols
    var eqns = [];
    for(var i=0; i<nr*nc; i++){
        eqns.push(0);
    }
    var i,j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            eqns[i+nc*j] = this.elements[i+3*j];
        }
    }
    eqns[3+4*0] = b.x;
    eqns[3+4*1] = b.y;
    eqns[3+4*2] = b.z;

    // Compute right upper triangular version of the matrix - Gauss elimination
    var n = 3, k = n, np;
    var kp = 4; // num rows
    var p, els;
    do {
        i = k - n;
        if (eqns[i+nc*i] === 0) {
            // the pivot is null, swap lines
            for (j = i + 1; j < k; j++) {
                if (eqns[i+nc*j] !== 0) {
                    np = kp;
                    do {  // do ligne( i ) = ligne( i ) + ligne( k )
                        p = kp - np;
                        eqns[p+nc*i] += eqns[p+nc*j];
                    } while (--np);
                    break;
                }
            }
        }
        if (eqns[i+nc*i] !== 0) {
            for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                np = kp;
                do {  // do ligne( k ) = ligne( k ) - multiplier * ligne( i )
                    p = kp - np;
                    eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                } while (--np);
            }
        }
    } while (--n);

    // Get the solution
    target.z = eqns[2*nc+3] / eqns[2*nc+2];
    target.y = (eqns[1*nc+3] - eqns[1*nc+2]*target.z) / eqns[1*nc+1];
    target.x = (eqns[0*nc+3] - eqns[0*nc+2]*target.z - eqns[0*nc+1]*target.y) / eqns[0*nc+0];

    if(isNaN(target.x) || isNaN(target.y) || isNaN(target.z) || target.x===Infinity || target.y===Infinity || target.z===Infinity){
        throw "Could not solve equation! Got x=["+target.toString()+"], b=["+b.toString()+"], A=["+this.toString()+"]";
    }

    return target;
};

/**
 * Get an element in the matrix by index. Index starts at 0, not 1!!!
 * @method e
 * @param {Number} row
 * @param {Number} column
 * @param {Number} value Optional. If provided, the matrix element will be set to this value.
 * @return {Number}
 */
Mat3.prototype.e = function( row , column ,value){
    if(value===undefined){
        return this.elements[column+3*row];
    } else {
        // Set value
        this.elements[column+3*row] = value;
    }
};

/**
 * Copy another matrix into this matrix object.
 * @method copy
 * @param {Mat3} source
 * @return {Mat3} this
 */
Mat3.prototype.copy = function(source){
    for(var i=0; i < source.elements.length; i++){
        this.elements[i] = source.elements[i];
    }
    return this;
};

/**
 * Returns a string representation of the matrix.
 * @method toString
 * @return string
 */
Mat3.prototype.toString = function(){
    var r = "";
    var sep = ",";
    for(var i=0; i<9; i++){
        r += this.elements[i] + sep;
    }
    return r;
};

/**
 * reverse the matrix
 * @method reverse
 * @param {Mat3} target Optional. Target matrix to save in.
 * @return {Mat3} The solution x
 */
Mat3.prototype.reverse = function(target){

    target = target || new Mat3();

    // Construct equations
    var nr = 3; // num rows
    var nc = 6; // num cols
    var eqns = [];
    for(var i=0; i<nr*nc; i++){
        eqns.push(0);
    }
    var i,j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            eqns[i+nc*j] = this.elements[i+3*j];
        }
    }
    eqns[3+6*0] = 1;
    eqns[3+6*1] = 0;
    eqns[3+6*2] = 0;
    eqns[4+6*0] = 0;
    eqns[4+6*1] = 1;
    eqns[4+6*2] = 0;
    eqns[5+6*0] = 0;
    eqns[5+6*1] = 0;
    eqns[5+6*2] = 1;

    // Compute right upper triangular version of the matrix - Gauss elimination
    var n = 3, k = n, np;
    var kp = nc; // num rows
    var p;
    do {
        i = k - n;
        if (eqns[i+nc*i] === 0) {
            // the pivot is null, swap lines
            for (j = i + 1; j < k; j++) {
                if (eqns[i+nc*j] !== 0) {
                    np = kp;
                    do { // do line( i ) = line( i ) + line( k )
                        p = kp - np;
                        eqns[p+nc*i] += eqns[p+nc*j];
                    } while (--np);
                    break;
                }
            }
        }
        if (eqns[i+nc*i] !== 0) {
            for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                np = kp;
                do { // do line( k ) = line( k ) - multiplier * line( i )
                    p = kp - np;
                    eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                } while (--np);
            }
        }
    } while (--n);

    // eliminate the upper left triangle of the matrix
    i = 2;
    do {
        j = i-1;
        do {
            var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
            np = nc;
            do {
                p = nc - np;
                eqns[p+nc*j] =  eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
            } while (--np);
        } while (j--);
    } while (--i);

    // operations on the diagonal
    i = 2;
    do {
        var multiplier = 1 / eqns[i+nc*i];
        np = nc;
        do {
            p = nc - np;
            eqns[p+nc*i] = eqns[p+nc*i] * multiplier ;
        } while (--np);
    } while (i--);

    i = 2;
    do {
        j = 2;
        do {
            p = eqns[nr+j+nc*i];
            if( isNaN( p ) || p ===Infinity ){
                throw "Could not reverse! A=["+this.toString()+"]";
            }
            target.e( i , j , p );
        } while (j--);
    } while (i--);

    return target;
};

/**
 * Set the matrix from a quaterion
 * @method setRotationFromQuaternion
 * @param {Quaternion} q
 */
Mat3.prototype.setRotationFromQuaternion = function( q ) {
    var x = q.x, y = q.y, z = q.z, w = q.w,
        x2 = x + x, y2 = y + y, z2 = z + z,
        xx = x * x2, xy = x * y2, xz = x * z2,
        yy = y * y2, yz = y * z2, zz = z * z2,
        wx = w * x2, wy = w * y2, wz = w * z2,
        e = this.elements;

    e[3*0 + 0] = 1 - ( yy + zz );
    e[3*0 + 1] = xy - wz;
    e[3*0 + 2] = xz + wy;

    e[3*1 + 0] = xy + wz;
    e[3*1 + 1] = 1 - ( xx + zz );
    e[3*1 + 2] = yz - wx;

    e[3*2 + 0] = xz - wy;
    e[3*2 + 1] = yz + wx;
    e[3*2 + 2] = 1 - ( xx + yy );

    return this;
};

/**
 * Transpose the matrix
 * @method transpose
 * @param  {Mat3} target Where to store the result.
 * @return {Mat3} The target Mat3, or a new Mat3 if target was omitted.
 */
Mat3.prototype.transpose = function( target ) {
    target = target || new Mat3();

    var Mt = target.elements,
        M = this.elements;

    for(var i=0; i!==3; i++){
        for(var j=0; j!==3; j++){
            Mt[3*i + j] = M[3*j + i];
        }
    }

    return target;
};

},{"./Vec3":"XG60"}],"XG60":[function(require,module,exports) {
module.exports = Vec3;

var Mat3 = require('./Mat3');

/**
 * 3-dimensional vector
 * @class Vec3
 * @constructor
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @author schteppe
 * @example
 *     var v = new Vec3(1, 2, 3);
 *     //.log('x=' + v.x); // x=1
 */
function Vec3(x,y,z){
    /**
     * @property x
     * @type {Number}
     */
    this.x = x||0.0;

    /**
     * @property y
     * @type {Number}
     */
    this.y = y||0.0;

    /**
     * @property z
     * @type {Number}
     */
    this.z = z||0.0;
}

/**
 * @static
 * @property {Vec3} ZERO
 */
Vec3.ZERO = new Vec3(0, 0, 0);

/**
 * @static
 * @property {Vec3} UNIT_X
 */
Vec3.UNIT_X = new Vec3(1, 0, 0);

/**
 * @static
 * @property {Vec3} UNIT_Y
 */
Vec3.UNIT_Y = new Vec3(0, 1, 0);

/**
 * @static
 * @property {Vec3} UNIT_Z
 */
Vec3.UNIT_Z = new Vec3(0, 0, 1);

/**
 * Vector cross product
 * @method cross
 * @param {Vec3} v
 * @param {Vec3} target Optional. Target to save in.
 * @return {Vec3}
 */
Vec3.prototype.cross = function(v,target){
    var vx=v.x, vy=v.y, vz=v.z, x=this.x, y=this.y, z=this.z;
    target = target || new Vec3();

    target.x = (y * vz) - (z * vy);
    target.y = (z * vx) - (x * vz);
    target.z = (x * vy) - (y * vx);

    return target;
};

/**
 * Set the vectors' 3 elements
 * @method set
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return Vec3
 */
Vec3.prototype.set = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
};

/**
 * Set all components of the vector to zero.
 * @method setZero
 */
Vec3.prototype.setZero = function(){
    this.x = this.y = this.z = 0;
};

/**
 * Vector addition
 * @method vadd
 * @param {Vec3} v
 * @param {Vec3} target Optional.
 * @return {Vec3}
 */
Vec3.prototype.vadd = function(v,target){
    if(target){
        target.x = v.x + this.x;
        target.y = v.y + this.y;
        target.z = v.z + this.z;
    } else {
        return new Vec3(this.x + v.x,
                               this.y + v.y,
                               this.z + v.z);
    }
};

/**
 * Vector subtraction
 * @method vsub
 * @param {Vec3} v
 * @param {Vec3} target Optional. Target to save in.
 * @return {Vec3}
 */
Vec3.prototype.vsub = function(v,target){
    if(target){
        target.x = this.x - v.x;
        target.y = this.y - v.y;
        target.z = this.z - v.z;
    } else {
        return new Vec3(this.x-v.x,
                               this.y-v.y,
                               this.z-v.z);
    }
};

/**
 * Get the cross product matrix a_cross from a vector, such that a x b = a_cross * b = c
 * @method crossmat
 * @see http://www8.cs.umu.se/kurser/TDBD24/VT06/lectures/Lecture6.pdf
 * @return {Mat3}
 */
Vec3.prototype.crossmat = function(){
    return new Mat3([     0,  -this.z,   this.y,
                            this.z,        0,  -this.x,
                           -this.y,   this.x,        0]);
};

/**
 * Normalize the vector. Note that this changes the values in the vector.
 * @method normalize
 * @return {Number} Returns the norm of the vector
 */
Vec3.prototype.normalize = function(){
    var x=this.x, y=this.y, z=this.z;
    var n = Math.sqrt(x*x + y*y + z*z);
    if(n>0.0){
        var invN = 1/n;
        this.x *= invN;
        this.y *= invN;
        this.z *= invN;
    } else {
        // Make something up
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    return n;
};

/**
 * Get the version of this vector that is of length 1.
 * @method unit
 * @param {Vec3} target Optional target to save in
 * @return {Vec3} Returns the unit vector
 */
Vec3.prototype.unit = function(target){
    target = target || new Vec3();
    var x=this.x, y=this.y, z=this.z;
    var ninv = Math.sqrt(x*x + y*y + z*z);
    if(ninv>0.0){
        ninv = 1.0/ninv;
        target.x = x * ninv;
        target.y = y * ninv;
        target.z = z * ninv;
    } else {
        target.x = 1;
        target.y = 0;
        target.z = 0;
    }
    return target;
};

/**
 * Get the length of the vector
 * @method norm
 * @return {Number}
 * @deprecated Use .length() instead
 */
Vec3.prototype.norm = function(){
    var x=this.x, y=this.y, z=this.z;
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Get the length of the vector
 * @method length
 * @return {Number}
 */
Vec3.prototype.length = Vec3.prototype.norm;

/**
 * Get the squared length of the vector
 * @method norm2
 * @return {Number}
 * @deprecated Use .lengthSquared() instead.
 */
Vec3.prototype.norm2 = function(){
    return this.dot(this);
};

/**
 * Get the squared length of the vector.
 * @method lengthSquared
 * @return {Number}
 */
Vec3.prototype.lengthSquared = Vec3.prototype.norm2;

/**
 * Get distance from this point to another point
 * @method distanceTo
 * @param  {Vec3} p
 * @return {Number}
 */
Vec3.prototype.distanceTo = function(p){
    var x=this.x, y=this.y, z=this.z;
    var px=p.x, py=p.y, pz=p.z;
    return Math.sqrt((px-x)*(px-x)+
                     (py-y)*(py-y)+
                     (pz-z)*(pz-z));
};

/**
 * Get squared distance from this point to another point
 * @method distanceSquared
 * @param  {Vec3} p
 * @return {Number}
 */
Vec3.prototype.distanceSquared = function(p){
    var x=this.x, y=this.y, z=this.z;
    var px=p.x, py=p.y, pz=p.z;
    return (px-x)*(px-x) + (py-y)*(py-y) + (pz-z)*(pz-z);
};

/**
 * Multiply all the components of the vector with a scalar.
 * @deprecated Use .scale instead
 * @method mult
 * @param {Number} scalar
 * @param {Vec3} target The vector to save the result in.
 * @return {Vec3}
 * @deprecated Use .scale() instead
 */
Vec3.prototype.mult = function(scalar,target){
    target = target || new Vec3();
    var x = this.x,
        y = this.y,
        z = this.z;
    target.x = scalar * x;
    target.y = scalar * y;
    target.z = scalar * z;
    return target;
};

/**
 * Multiply the vector with an other vector, component-wise.
 * @method mult
 * @param {Number} vector
 * @param {Vec3} target The vector to save the result in.
 * @return {Vec3}
 */
Vec3.prototype.vmul = function(vector, target){
    target = target || new Vec3();
    target.x = vector.x * this.x;
    target.y = vector.y * this.y;
    target.z = vector.z * this.z;
    return target;
};

/**
 * Multiply the vector with a scalar.
 * @method scale
 * @param {Number} scalar
 * @param {Vec3} target
 * @return {Vec3}
 */
Vec3.prototype.scale = Vec3.prototype.mult;

/**
 * Scale a vector and add it to this vector. Save the result in "target". (target = this + vector * scalar)
 * @method addScaledVector
 * @param {Number} scalar
 * @param {Vec3} vector
 * @param {Vec3} target The vector to save the result in.
 * @return {Vec3}
 */
Vec3.prototype.addScaledVector = function(scalar, vector, target){
    target = target || new Vec3();
    target.x = this.x + scalar * vector.x;
    target.y = this.y + scalar * vector.y;
    target.z = this.z + scalar * vector.z;
    return target;
};

/**
 * Calculate dot product
 * @method dot
 * @param {Vec3} v
 * @return {Number}
 */
Vec3.prototype.dot = function(v){
    return this.x * v.x + this.y * v.y + this.z * v.z;
};

/**
 * @method isZero
 * @return bool
 */
Vec3.prototype.isZero = function(){
    return this.x===0 && this.y===0 && this.z===0;
};

/**
 * Make the vector point in the opposite direction.
 * @method negate
 * @param {Vec3} target Optional target to save in
 * @return {Vec3}
 */
Vec3.prototype.negate = function(target){
    target = target || new Vec3();
    target.x = -this.x;
    target.y = -this.y;
    target.z = -this.z;
    return target;
};

/**
 * Compute two artificial tangents to the vector
 * @method tangents
 * @param {Vec3} t1 Vector object to save the first tangent in
 * @param {Vec3} t2 Vector object to save the second tangent in
 */
var Vec3_tangents_n = new Vec3();
var Vec3_tangents_randVec = new Vec3();
Vec3.prototype.tangents = function(t1,t2){
    var norm = this.norm();
    if(norm>0.0){
        var n = Vec3_tangents_n;
        var inorm = 1/norm;
        n.set(this.x*inorm,this.y*inorm,this.z*inorm);
        var randVec = Vec3_tangents_randVec;
        if(Math.abs(n.x) < 0.9){
            randVec.set(1,0,0);
            n.cross(randVec,t1);
        } else {
            randVec.set(0,1,0);
            n.cross(randVec,t1);
        }
        n.cross(t1,t2);
    } else {
        // The normal length is zero, make something up
        t1.set(1, 0, 0);
        t2.set(0, 1, 0);
    }
};

/**
 * Converts to a more readable format
 * @method toString
 * @return string
 */
Vec3.prototype.toString = function(){
    return this.x+","+this.y+","+this.z;
};

/**
 * Converts to an array
 * @method toArray
 * @return Array
 */
Vec3.prototype.toArray = function(){
    return [this.x, this.y, this.z];
};

/**
 * Copies value of source to this vector.
 * @method copy
 * @param {Vec3} source
 * @return {Vec3} this
 */
Vec3.prototype.copy = function(source){
    this.x = source.x;
    this.y = source.y;
    this.z = source.z;
    return this;
};


/**
 * Do a linear interpolation between two vectors
 * @method lerp
 * @param {Vec3} v
 * @param {Number} t A number between 0 and 1. 0 will make this function return u, and 1 will make it return v. Numbers in between will generate a vector in between them.
 * @param {Vec3} target
 */
Vec3.prototype.lerp = function(v,t,target){
    var x=this.x, y=this.y, z=this.z;
    target.x = x + (v.x-x)*t;
    target.y = y + (v.y-y)*t;
    target.z = z + (v.z-z)*t;
};

/**
 * Check if a vector equals is almost equal to another one.
 * @method almostEquals
 * @param {Vec3} v
 * @param {Number} precision
 * @return bool
 */
Vec3.prototype.almostEquals = function(v,precision){
    if(precision===undefined){
        precision = 1e-6;
    }
    if( Math.abs(this.x-v.x)>precision ||
        Math.abs(this.y-v.y)>precision ||
        Math.abs(this.z-v.z)>precision){
        return false;
    }
    return true;
};

/**
 * Check if a vector is almost zero
 * @method almostZero
 * @param {Number} precision
 */
Vec3.prototype.almostZero = function(precision){
    if(precision===undefined){
        precision = 1e-6;
    }
    if( Math.abs(this.x)>precision ||
        Math.abs(this.y)>precision ||
        Math.abs(this.z)>precision){
        return false;
    }
    return true;
};

var antip_neg = new Vec3();

/**
 * Check if the vector is anti-parallel to another vector.
 * @method isAntiparallelTo
 * @param  {Vec3}  v
 * @param  {Number}  precision Set to zero for exact comparisons
 * @return {Boolean}
 */
Vec3.prototype.isAntiparallelTo = function(v,precision){
    this.negate(antip_neg);
    return antip_neg.almostEquals(v,precision);
};

/**
 * Clone the vector
 * @method clone
 * @return {Vec3}
 */
Vec3.prototype.clone = function(){
    return new Vec3(this.x, this.y, this.z);
};
},{"./Mat3":"etZO"}],"Yq2j":[function(require,module,exports) {
function Utils(){}

module.exports = Utils;

/**
 * Extend an options object with default values.
 * @static
 * @method defaults
 * @param  {object} options The options object. May be falsy: in this case, a new object is created and returned.
 * @param  {object} defaults An object containing default values.
 * @return {object} The modified options object.
 */
Utils.defaults = function(options, defaults){
    options = options || {};

    for(var key in defaults){
        if(!(key in options)){
            options[key] = defaults[key];
        }
    }

    return options;
};

},{}],"78Lf":[function(require,module,exports) {
var Vec3 = require('../math/Vec3');
var Utils = require('../utils/Utils');

module.exports = AABB;

/**
 * Axis aligned bounding box class.
 * @class AABB
 * @constructor
 * @param {Object} [options]
 * @param {Vec3}   [options.upperBound]
 * @param {Vec3}   [options.lowerBound]
 */
function AABB(options){
    options = options || {};

    /**
     * The lower bound of the bounding box.
     * @property lowerBound
     * @type {Vec3}
     */
    this.lowerBound = new Vec3();
    if(options.lowerBound){
        this.lowerBound.copy(options.lowerBound);
    }

    /**
     * The upper bound of the bounding box.
     * @property upperBound
     * @type {Vec3}
     */
    this.upperBound = new Vec3();
    if(options.upperBound){
        this.upperBound.copy(options.upperBound);
    }
}

var tmp = new Vec3();

/**
 * Set the AABB bounds from a set of points.
 * @method setFromPoints
 * @param {Array} points An array of Vec3's.
 * @param {Vec3} position
 * @param {Quaternion} quaternion
 * @param {number} skinSize
 * @return {AABB} The self object
 */
AABB.prototype.setFromPoints = function(points, position, quaternion, skinSize){
    var l = this.lowerBound,
        u = this.upperBound,
        q = quaternion;

    // Set to the first point
    l.copy(points[0]);
    if(q){
        q.vmult(l, l);
    }
    u.copy(l);

    for(var i = 1; i<points.length; i++){
        var p = points[i];

        if(q){
            q.vmult(p, tmp);
            p = tmp;
        }

        if(p.x > u.x){ u.x = p.x; }
        if(p.x < l.x){ l.x = p.x; }
        if(p.y > u.y){ u.y = p.y; }
        if(p.y < l.y){ l.y = p.y; }
        if(p.z > u.z){ u.z = p.z; }
        if(p.z < l.z){ l.z = p.z; }
    }

    // Add offset
    if (position) {
        position.vadd(l, l);
        position.vadd(u, u);
    }

    if(skinSize){
        l.x -= skinSize;
        l.y -= skinSize;
        l.z -= skinSize;
        u.x += skinSize;
        u.y += skinSize;
        u.z += skinSize;
    }

    return this;
};

/**
 * Copy bounds from an AABB to this AABB
 * @method copy
 * @param  {AABB} aabb Source to copy from
 * @return {AABB} The this object, for chainability
 */
AABB.prototype.copy = function(aabb){
    this.lowerBound.copy(aabb.lowerBound);
    this.upperBound.copy(aabb.upperBound);
    return this;
};

/**
 * Clone an AABB
 * @method clone
 */
AABB.prototype.clone = function(){
    return new AABB().copy(this);
};

/**
 * Extend this AABB so that it covers the given AABB too.
 * @method extend
 * @param  {AABB} aabb
 */
AABB.prototype.extend = function(aabb){
    this.lowerBound.x = Math.min(this.lowerBound.x, aabb.lowerBound.x);
    this.upperBound.x = Math.max(this.upperBound.x, aabb.upperBound.x);
    this.lowerBound.y = Math.min(this.lowerBound.y, aabb.lowerBound.y);
    this.upperBound.y = Math.max(this.upperBound.y, aabb.upperBound.y);
    this.lowerBound.z = Math.min(this.lowerBound.z, aabb.lowerBound.z);
    this.upperBound.z = Math.max(this.upperBound.z, aabb.upperBound.z);
};

/**
 * Returns true if the given AABB overlaps this AABB.
 * @method overlaps
 * @param  {AABB} aabb
 * @return {Boolean}
 */
AABB.prototype.overlaps = function(aabb){
    var l1 = this.lowerBound,
        u1 = this.upperBound,
        l2 = aabb.lowerBound,
        u2 = aabb.upperBound;

    //      l2        u2
    //      |---------|
    // |--------|
    // l1       u1

    var overlapsX = ((l2.x <= u1.x && u1.x <= u2.x) || (l1.x <= u2.x && u2.x <= u1.x));
    var overlapsY = ((l2.y <= u1.y && u1.y <= u2.y) || (l1.y <= u2.y && u2.y <= u1.y));
    var overlapsZ = ((l2.z <= u1.z && u1.z <= u2.z) || (l1.z <= u2.z && u2.z <= u1.z));

    return overlapsX && overlapsY && overlapsZ;
};

// Mostly for debugging
AABB.prototype.volume = function(){
    var l = this.lowerBound,
        u = this.upperBound;
    return (u.x - l.x) * (u.y - l.y) * (u.z - l.z);
};


/**
 * Returns true if the given AABB is fully contained in this AABB.
 * @method contains
 * @param {AABB} aabb
 * @return {Boolean}
 */
AABB.prototype.contains = function(aabb){
    var l1 = this.lowerBound,
        u1 = this.upperBound,
        l2 = aabb.lowerBound,
        u2 = aabb.upperBound;

    //      l2        u2
    //      |---------|
    // |---------------|
    // l1              u1

    return (
        (l1.x <= l2.x && u1.x >= u2.x) &&
        (l1.y <= l2.y && u1.y >= u2.y) &&
        (l1.z <= l2.z && u1.z >= u2.z)
    );
};

/**
 * @method getCorners
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Vec3} c
 * @param {Vec3} d
 * @param {Vec3} e
 * @param {Vec3} f
 * @param {Vec3} g
 * @param {Vec3} h
 */
AABB.prototype.getCorners = function(a, b, c, d, e, f, g, h){
    var l = this.lowerBound,
        u = this.upperBound;

    a.copy(l);
    b.set( u.x, l.y, l.z );
    c.set( u.x, u.y, l.z );
    d.set( l.x, u.y, u.z );
    e.set( u.x, l.y, l.z );
    f.set( l.x, u.y, l.z );
    g.set( l.x, l.y, u.z );
    h.copy(u);
};

var transformIntoFrame_corners = [
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3()
];

/**
 * Get the representation of an AABB in another frame.
 * @method toLocalFrame
 * @param  {Transform} frame
 * @param  {AABB} target
 * @return {AABB} The "target" AABB object.
 */
AABB.prototype.toLocalFrame = function(frame, target){

    var corners = transformIntoFrame_corners;
    var a = corners[0];
    var b = corners[1];
    var c = corners[2];
    var d = corners[3];
    var e = corners[4];
    var f = corners[5];
    var g = corners[6];
    var h = corners[7];

    // Get corners in current frame
    this.getCorners(a, b, c, d, e, f, g, h);

    // Transform them to new local frame
    for(var i=0; i !== 8; i++){
        var corner = corners[i];
        frame.pointToLocal(corner, corner);
    }

    return target.setFromPoints(corners);
};

/**
 * Get the representation of an AABB in the global frame.
 * @method toWorldFrame
 * @param  {Transform} frame
 * @param  {AABB} target
 * @return {AABB} The "target" AABB object.
 */
AABB.prototype.toWorldFrame = function(frame, target){

    var corners = transformIntoFrame_corners;
    var a = corners[0];
    var b = corners[1];
    var c = corners[2];
    var d = corners[3];
    var e = corners[4];
    var f = corners[5];
    var g = corners[6];
    var h = corners[7];

    // Get corners in current frame
    this.getCorners(a, b, c, d, e, f, g, h);

    // Transform them to new local frame
    for(var i=0; i !== 8; i++){
        var corner = corners[i];
        frame.pointToWorld(corner, corner);
    }

    return target.setFromPoints(corners);
};

/**
 * Check if the AABB is hit by a ray.
 * @param  {Ray} ray
 * @return {number}
 */
AABB.prototype.overlapsRay = function(ray){
    var t = 0;

    // ray.direction is unit direction vector of ray
    var dirFracX = 1 / ray._direction.x;
    var dirFracY = 1 / ray._direction.y;
    var dirFracZ = 1 / ray._direction.z;

    // this.lowerBound is the corner of AABB with minimal coordinates - left bottom, rt is maximal corner
    var t1 = (this.lowerBound.x - ray.from.x) * dirFracX;
    var t2 = (this.upperBound.x - ray.from.x) * dirFracX;
    var t3 = (this.lowerBound.y - ray.from.y) * dirFracY;
    var t4 = (this.upperBound.y - ray.from.y) * dirFracY;
    var t5 = (this.lowerBound.z - ray.from.z) * dirFracZ;
    var t6 = (this.upperBound.z - ray.from.z) * dirFracZ;

    // var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)));
    // var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)));
    var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
    var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));

    // if tmax < 0, ray (line) is intersecting AABB, but whole AABB is behing us
    if (tmax < 0){
        //t = tmax;
        return false;
    }

    // if tmin > tmax, ray doesn't intersect AABB
    if (tmin > tmax){
        //t = tmax;
        return false;
    }

    return true;
};
},{"../math/Vec3":"XG60","../utils/Utils":"Yq2j"}],"yOl/":[function(require,module,exports) {
module.exports = ArrayCollisionMatrix;

/**
 * Collision "matrix". It's actually a triangular-shaped array of whether two bodies are touching this step, for reference next step
 * @class ArrayCollisionMatrix
 * @constructor
 */
function ArrayCollisionMatrix() {

    /**
     * The matrix storage
     * @property matrix
     * @type {Array}
     */
    this.matrix = [];
}

/**
 * Get an element
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
ArrayCollisionMatrix.prototype.get = function(i, j) {
    i = i.index;
    j = j.index;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
    return this.matrix[(i*(i + 1)>>1) + j-1];
};

/**
 * Set an element
 * @method set
 * @param {Number} i
 * @param {Number} j
 * @param {Number} value
 */
ArrayCollisionMatrix.prototype.set = function(i, j, value) {
    i = i.index;
    j = j.index;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
    this.matrix[(i*(i + 1)>>1) + j-1] = value ? 1 : 0;
};

/**
 * Sets all elements to zero
 * @method reset
 */
ArrayCollisionMatrix.prototype.reset = function() {
    for (var i=0, l=this.matrix.length; i!==l; i++) {
        this.matrix[i]=0;
    }
};

/**
 * Sets the max number of objects
 * @method setNumObjects
 * @param {Number} n
 */
ArrayCollisionMatrix.prototype.setNumObjects = function(n) {
    this.matrix.length = n*(n-1)>>1;
};

},{}],"E7r9":[function(require,module,exports) {
/**
 * Base class for objects that dispatches events.
 * @class EventTarget
 * @constructor
 */
var EventTarget = function () {

};

module.exports = EventTarget;

EventTarget.prototype = {
    constructor: EventTarget,

    /**
     * Add an event listener
     * @method addEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {EventTarget} The self object, for chainability.
     */
    addEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ this._listeners = {}; }
        var listeners = this._listeners;
        if ( listeners[ type ] === undefined ) {
            listeners[ type ] = [];
        }
        if ( listeners[ type ].indexOf( listener ) === - 1 ) {
            listeners[ type ].push( listener );
        }
        return this;
    },

    /**
     * Check if an event listener is added
     * @method hasEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {Boolean}
     */
    hasEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ return false; }
        var listeners = this._listeners;
        if ( listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1 ) {
            return true;
        }
        return false;
    },

    /**
     * Check if any event listener of the given type is added
     * @method hasAnyEventListener
     * @param  {String} type
     * @return {Boolean}
     */
    hasAnyEventListener: function ( type ) {
        if ( this._listeners === undefined ){ return false; }
        var listeners = this._listeners;
        return ( listeners[ type ] !== undefined );
    },

    /**
     * Remove an event listener
     * @method removeEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {EventTarget} The self object, for chainability.
     */
    removeEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ return this; }
        var listeners = this._listeners;
        if ( listeners[type] === undefined ){ return this; }
        var index = listeners[ type ].indexOf( listener );
        if ( index !== - 1 ) {
            listeners[ type ].splice( index, 1 );
        }
        return this;
    },

    /**
     * Emit an event.
     * @method dispatchEvent
     * @param  {Object} event
     * @param  {String} event.type
     * @return {EventTarget} The self object, for chainability.
     */
    dispatchEvent: function ( event ) {
        if ( this._listeners === undefined ){ return this; }
        var listeners = this._listeners;
        var listenerArray = listeners[ event.type ];
        if ( listenerArray !== undefined ) {
            event.target = this;
            for ( var i = 0, l = listenerArray.length; i < l; i ++ ) {
                listenerArray[ i ].call( this, event );
            }
        }
        return this;
    }
};

},{}],"bEmM":[function(require,module,exports) {
module.exports = Quaternion;

var Vec3 = require('./Vec3');

/**
 * A Quaternion describes a rotation in 3D space. The Quaternion is mathematically defined as Q = x*i + y*j + z*k + w, where (i,j,k) are imaginary basis vectors. (x,y,z) can be seen as a vector related to the axis of rotation, while the real multiplier, w, is related to the amount of rotation.
 * @class Quaternion
 * @constructor
 * @param {Number} x Multiplier of the imaginary basis vector i.
 * @param {Number} y Multiplier of the imaginary basis vector j.
 * @param {Number} z Multiplier of the imaginary basis vector k.
 * @param {Number} w Multiplier of the real part.
 * @see http://en.wikipedia.org/wiki/Quaternion
 */
function Quaternion(x,y,z,w){
    /**
     * @property {Number} x
     */
    this.x = x!==undefined ? x : 0;

    /**
     * @property {Number} y
     */
    this.y = y!==undefined ? y : 0;

    /**
     * @property {Number} z
     */
    this.z = z!==undefined ? z : 0;

    /**
     * The multiplier of the real quaternion basis vector.
     * @property {Number} w
     */
    this.w = w!==undefined ? w : 1;
}

/**
 * Set the value of the quaternion.
 * @method set
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} w
 */
Quaternion.prototype.set = function(x,y,z,w){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
};

/**
 * Convert to a readable format
 * @method toString
 * @return string
 */
Quaternion.prototype.toString = function(){
    return this.x+","+this.y+","+this.z+","+this.w;
};

/**
 * Convert to an Array
 * @method toArray
 * @return Array
 */
Quaternion.prototype.toArray = function(){
    return [this.x, this.y, this.z, this.w];
};

/**
 * Set the quaternion components given an axis and an angle.
 * @method setFromAxisAngle
 * @param {Vec3} axis
 * @param {Number} angle in radians
 */
Quaternion.prototype.setFromAxisAngle = function(axis,angle){
    var s = Math.sin(angle*0.5);
    this.x = axis.x * s;
    this.y = axis.y * s;
    this.z = axis.z * s;
    this.w = Math.cos(angle*0.5);
    return this;
};

/**
 * Converts the quaternion to axis/angle representation.
 * @method toAxisAngle
 * @param {Vec3} [targetAxis] A vector object to reuse for storing the axis.
 * @return {Array} An array, first elemnt is the axis and the second is the angle in radians.
 */
Quaternion.prototype.toAxisAngle = function(targetAxis){
    targetAxis = targetAxis || new Vec3();
    this.normalize(); // if w>1 acos and sqrt will produce errors, this cant happen if quaternion is normalised
    var angle = 2 * Math.acos(this.w);
    var s = Math.sqrt(1-this.w*this.w); // assuming quaternion normalised then w is less than 1, so term always positive.
    if (s < 0.001) { // test to avoid divide by zero, s is always positive due to sqrt
        // if s close to zero then direction of axis not important
        targetAxis.x = this.x; // if it is important that axis is normalised then replace with x=1; y=z=0;
        targetAxis.y = this.y;
        targetAxis.z = this.z;
    } else {
        targetAxis.x = this.x / s; // normalise axis
        targetAxis.y = this.y / s;
        targetAxis.z = this.z / s;
    }
    return [targetAxis,angle];
};

var sfv_t1 = new Vec3(),
    sfv_t2 = new Vec3();

/**
 * Set the quaternion value given two vectors. The resulting rotation will be the needed rotation to rotate u to v.
 * @method setFromVectors
 * @param {Vec3} u
 * @param {Vec3} v
 */
Quaternion.prototype.setFromVectors = function(u,v){
    if(u.isAntiparallelTo(v)){
        var t1 = sfv_t1;
        var t2 = sfv_t2;

        u.tangents(t1,t2);
        this.setFromAxisAngle(t1,Math.PI);
    } else {
        var a = u.cross(v);
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = Math.sqrt(Math.pow(u.norm(),2) * Math.pow(v.norm(),2)) + u.dot(v);
        this.normalize();
    }
    return this;
};

/**
 * Quaternion multiplication
 * @method mult
 * @param {Quaternion} q
 * @param {Quaternion} target Optional.
 * @return {Quaternion}
 */
var Quaternion_mult_va = new Vec3();
var Quaternion_mult_vb = new Vec3();
var Quaternion_mult_vaxvb = new Vec3();
Quaternion.prototype.mult = function(q,target){
    target = target || new Quaternion();

    var ax = this.x, ay = this.y, az = this.z, aw = this.w,
        bx = q.x, by = q.y, bz = q.z, bw = q.w;

    target.x = ax * bw + aw * bx + ay * bz - az * by;
    target.y = ay * bw + aw * by + az * bx - ax * bz;
    target.z = az * bw + aw * bz + ax * by - ay * bx;
    target.w = aw * bw - ax * bx - ay * by - az * bz;

    return target;
};

/**
 * Get the inverse quaternion rotation.
 * @method inverse
 * @param {Quaternion} target
 * @return {Quaternion}
 */
Quaternion.prototype.inverse = function(target){
    var x = this.x, y = this.y, z = this.z, w = this.w;
    target = target || new Quaternion();

    this.conjugate(target);
    var inorm2 = 1/(x*x + y*y + z*z + w*w);
    target.x *= inorm2;
    target.y *= inorm2;
    target.z *= inorm2;
    target.w *= inorm2;

    return target;
};

/**
 * Get the quaternion conjugate
 * @method conjugate
 * @param {Quaternion} target
 * @return {Quaternion}
 */
Quaternion.prototype.conjugate = function(target){
    target = target || new Quaternion();

    target.x = -this.x;
    target.y = -this.y;
    target.z = -this.z;
    target.w = this.w;

    return target;
};

/**
 * Normalize the quaternion. Note that this changes the values of the quaternion.
 * @method normalize
 */
Quaternion.prototype.normalize = function(){
    var l = Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);
    if ( l === 0 ) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    } else {
        l = 1 / l;
        this.x *= l;
        this.y *= l;
        this.z *= l;
        this.w *= l;
    }
    return this;
};

/**
 * Approximation of quaternion normalization. Works best when quat is already almost-normalized.
 * @method normalizeFast
 * @see http://jsperf.com/fast-quaternion-normalization
 * @author unphased, https://github.com/unphased
 */
Quaternion.prototype.normalizeFast = function () {
    var f = (3.0-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2.0;
    if ( f === 0 ) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    } else {
        this.x *= f;
        this.y *= f;
        this.z *= f;
        this.w *= f;
    }
    return this;
};

/**
 * Multiply the quaternion by a vector
 * @method vmult
 * @param {Vec3} v
 * @param {Vec3} target Optional
 * @return {Vec3}
 */
Quaternion.prototype.vmult = function(v,target){
    target = target || new Vec3();

    var x = v.x,
        y = v.y,
        z = v.z;

    var qx = this.x,
        qy = this.y,
        qz = this.z,
        qw = this.w;

    // q*v
    var ix =  qw * x + qy * z - qz * y,
    iy =  qw * y + qz * x - qx * z,
    iz =  qw * z + qx * y - qy * x,
    iw = -qx * x - qy * y - qz * z;

    target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return target;
};

/**
 * Copies value of source to this quaternion.
 * @method copy
 * @param {Quaternion} source
 * @return {Quaternion} this
 */
Quaternion.prototype.copy = function(source){
    this.x = source.x;
    this.y = source.y;
    this.z = source.z;
    this.w = source.w;
    return this;
};

/**
 * Convert the quaternion to euler angle representation. Order: YZX, as this page describes: http://www.euclideanspace.com/maths/standards/index.htm
 * @method toEuler
 * @param {Vec3} target
 * @param string order Three-character string e.g. "YZX", which also is default.
 */
Quaternion.prototype.toEuler = function(target,order){
    order = order || "YZX";

    var heading, attitude, bank;
    var x = this.x, y = this.y, z = this.z, w = this.w;

    switch(order){
    case "YZX":
        var test = x*y + z*w;
        if (test > 0.499) { // singularity at north pole
            heading = 2 * Math.atan2(x,w);
            attitude = Math.PI/2;
            bank = 0;
        }
        if (test < -0.499) { // singularity at south pole
            heading = -2 * Math.atan2(x,w);
            attitude = - Math.PI/2;
            bank = 0;
        }
        if(isNaN(heading)){
            var sqx = x*x;
            var sqy = y*y;
            var sqz = z*z;
            heading = Math.atan2(2*y*w - 2*x*z , 1 - 2*sqy - 2*sqz); // Heading
            attitude = Math.asin(2*test); // attitude
            bank = Math.atan2(2*x*w - 2*y*z , 1 - 2*sqx - 2*sqz); // bank
        }
        break;
    default:
        throw new Error("Euler order "+order+" not supported yet.");
    }

    target.y = heading;
    target.z = attitude;
    target.x = bank;
};

/**
 * See http://www.mathworks.com/matlabcentral/fileexchange/20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/content/SpinCalc.m
 * @method setFromEuler
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {String} order The order to apply angles: 'XYZ' or 'YXZ' or any other combination
 */
Quaternion.prototype.setFromEuler = function ( x, y, z, order ) {
    order = order || "XYZ";

    var c1 = Math.cos( x / 2 );
    var c2 = Math.cos( y / 2 );
    var c3 = Math.cos( z / 2 );
    var s1 = Math.sin( x / 2 );
    var s2 = Math.sin( y / 2 );
    var s3 = Math.sin( z / 2 );

    if ( order === 'XYZ' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'YXZ' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    } else if ( order === 'ZXY' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'ZYX' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    } else if ( order === 'YZX' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'XZY' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    }

    return this;
};

/**
 * @method clone
 * @return {Quaternion}
 */
Quaternion.prototype.clone = function(){
    return new Quaternion(this.x, this.y, this.z, this.w);
};

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @method slerp
 * @param {Quaternion} toQuat second operand
 * @param {Number} t interpolation amount between the self quaternion and toQuat
 * @param {Quaternion} [target] A quaternion to store the result in. If not provided, a new one will be created.
 * @returns {Quaternion} The "target" object
 */
Quaternion.prototype.slerp = function (toQuat, t, target) {
    target = target || new Quaternion();

    var ax = this.x,
        ay = this.y,
        az = this.z,
        aw = this.w,
        bx = toQuat.x,
        by = toQuat.y,
        bz = toQuat.z,
        bw = toQuat.w;

    var omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;

    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }

    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }

    // calculate final values
    target.x = scale0 * ax + scale1 * bx;
    target.y = scale0 * ay + scale1 * by;
    target.z = scale0 * az + scale1 * bz;
    target.w = scale0 * aw + scale1 * bw;

    return target;
};

/**
 * Rotate an absolute orientation quaternion given an angular velocity and a time step.
 * @param  {Vec3} angularVelocity
 * @param  {number} dt
 * @param  {Vec3} angularFactor
 * @param  {Quaternion} target
 * @return {Quaternion} The "target" object
 */
Quaternion.prototype.integrate = function(angularVelocity, dt, angularFactor, target){
    target = target || new Quaternion();

    var ax = angularVelocity.x * angularFactor.x,
        ay = angularVelocity.y * angularFactor.y,
        az = angularVelocity.z * angularFactor.z,
        bx = this.x,
        by = this.y,
        bz = this.z,
        bw = this.w;

    var half_dt = dt * 0.5;

    target.x += half_dt * (ax * bw + ay * bz - az * by);
    target.y += half_dt * (ay * bw + az * bx - ax * bz);
    target.z += half_dt * (az * bw + ax * by - ay * bx);
    target.w += half_dt * (- ax * bx - ay * by - az * bz);

    return target;
};
},{"./Vec3":"XG60"}],"JCSk":[function(require,module,exports) {
module.exports = Material;

/**
 * Defines a physics material.
 * @class Material
 * @constructor
 * @param {object} [options]
 * @author schteppe
 */
function Material(options){
    var name = '';
    options = options || {};

    // Backwards compatibility fix
    if(typeof(options) === 'string'){
        name = options;
        options = {};
    } else if(typeof(options) === 'object') {
        name = '';
    }

    /**
     * @property name
     * @type {String}
     */
    this.name = name;

    /**
     * material id.
     * @property id
     * @type {number}
     */
    this.id = Material.idCounter++;

    /**
     * Friction for this material. If non-negative, it will be used instead of the friction given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} friction
     */
    this.friction = typeof(options.friction) !== 'undefined' ? options.friction : -1;

    /**
     * Restitution for this material. If non-negative, it will be used instead of the restitution given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} restitution
     */
    this.restitution = typeof(options.restitution) !== 'undefined' ? options.restitution : -1;
}

Material.idCounter = 0;

},{}],"Ggpt":[function(require,module,exports) {
module.exports = Shape;

var Shape = require('./Shape');
var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var Material = require('../material/Material');

/**
 * Base class for shapes
 * @class Shape
 * @constructor
 * @param {object} [options]
 * @param {number} [options.collisionFilterGroup=1]
 * @param {number} [options.collisionFilterMask=-1]
 * @param {number} [options.collisionResponse=true]
 * @param {number} [options.material=null]
 * @author schteppe
 */
function Shape(options){
    options = options || {};

    /**
     * Identifyer of the Shape.
     * @property {number} id
     */
    this.id = Shape.idCounter++;

    /**
     * The type of this shape. Must be set to an int > 0 by subclasses.
     * @property type
     * @type {Number}
     * @see Shape.types
     */
    this.type = options.type || 0;

    /**
     * The local bounding sphere radius of this shape.
     * @property {Number} boundingSphereRadius
     */
    this.boundingSphereRadius = 0;

    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {boolean} collisionResponse
     */
    this.collisionResponse = options.collisionResponse ? options.collisionResponse : true;

    /**
     * @property {Number} collisionFilterGroup
     */
    this.collisionFilterGroup = options.collisionFilterGroup !== undefined ? options.collisionFilterGroup : 1;

    /**
     * @property {Number} collisionFilterMask
     */
    this.collisionFilterMask = options.collisionFilterMask !== undefined ? options.collisionFilterMask : -1;

    /**
     * @property {Material} material
     */
    this.material = options.material ? options.material : null;

    /**
     * @property {Body} body
     */
    this.body = null;
}
Shape.prototype.constructor = Shape;

/**
 * Computes the bounding sphere radius. The result is stored in the property .boundingSphereRadius
 * @method updateBoundingSphereRadius
 */
Shape.prototype.updateBoundingSphereRadius = function(){
    throw "computeBoundingSphereRadius() not implemented for shape type "+this.type;
};

/**
 * Get the volume of this shape
 * @method volume
 * @return {Number}
 */
Shape.prototype.volume = function(){
    throw "volume() not implemented for shape type "+this.type;
};

/**
 * Calculates the inertia in the local frame for this shape.
 * @method calculateLocalInertia
 * @param {Number} mass
 * @param {Vec3} target
 * @see http://en.wikipedia.org/wiki/List_of_moments_of_inertia
 */
Shape.prototype.calculateLocalInertia = function(mass,target){
    throw "calculateLocalInertia() not implemented for shape type "+this.type;
};

Shape.idCounter = 0;

/**
 * The available shape types.
 * @static
 * @property types
 * @type {Object}
 */
Shape.types = {
    SPHERE:1,
    PLANE:2,
    BOX:4,
    COMPOUND:8,
    CONVEXPOLYHEDRON:16,
    HEIGHTFIELD:32,
    PARTICLE:64,
    CYLINDER:128,
    TRIMESH:256
};


},{"./Shape":"Ggpt","../math/Vec3":"XG60","../math/Quaternion":"bEmM","../material/Material":"JCSk"}],"CcAe":[function(require,module,exports) {
var Vec3 = require('./Vec3');
var Quaternion = require('./Quaternion');

module.exports = Transform;

/**
 * @class Transform
 * @constructor
 */
function Transform(options) {
    options = options || {};

	/**
	 * @property {Vec3} position
	 */
	this.position = new Vec3();
    if(options.position){
        this.position.copy(options.position);
    }

	/**
	 * @property {Quaternion} quaternion
	 */
	this.quaternion = new Quaternion();
    if(options.quaternion){
        this.quaternion.copy(options.quaternion);
    }
}

var tmpQuat = new Quaternion();

/**
 * @static
 * @method pointToLocaFrame
 * @param {Vec3} position
 * @param {Quaternion} quaternion
 * @param {Vec3} worldPoint
 * @param {Vec3} result
 */
Transform.pointToLocalFrame = function(position, quaternion, worldPoint, result){
    var result = result || new Vec3();
    worldPoint.vsub(position, result);
    quaternion.conjugate(tmpQuat);
    tmpQuat.vmult(result, result);
    return result;
};

/**
 * Get a global point in local transform coordinates.
 * @method pointToLocal
 * @param  {Vec3} point
 * @param  {Vec3} result
 * @return {Vec3} The "result" vector object
 */
Transform.prototype.pointToLocal = function(worldPoint, result){
    return Transform.pointToLocalFrame(this.position, this.quaternion, worldPoint, result);
};

/**
 * @static
 * @method pointToWorldFrame
 * @param {Vec3} position
 * @param {Vec3} quaternion
 * @param {Vec3} localPoint
 * @param {Vec3} result
 */
Transform.pointToWorldFrame = function(position, quaternion, localPoint, result){
    var result = result || new Vec3();
    quaternion.vmult(localPoint, result);
    result.vadd(position, result);
    return result;
};

/**
 * Get a local point in global transform coordinates.
 * @method pointToWorld
 * @param  {Vec3} point
 * @param  {Vec3} result
 * @return {Vec3} The "result" vector object
 */
Transform.prototype.pointToWorld = function(localPoint, result){
    return Transform.pointToWorldFrame(this.position, this.quaternion, localPoint, result);
};


Transform.prototype.vectorToWorldFrame = function(localVector, result){
    var result = result || new Vec3();
    this.quaternion.vmult(localVector, result);
    return result;
};

Transform.vectorToWorldFrame = function(quaternion, localVector, result){
    quaternion.vmult(localVector, result);
    return result;
};

Transform.vectorToLocalFrame = function(position, quaternion, worldVector, result){
    var result = result || new Vec3();
    quaternion.w *= -1;
    quaternion.vmult(worldVector, result);
    quaternion.w *= -1;
    return result;
};

},{"./Vec3":"XG60","./Quaternion":"bEmM"}],"1+Yp":[function(require,module,exports) {
module.exports = ConvexPolyhedron;

var Shape = require('./Shape');
var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var Transform = require('../math/Transform');

/**
 * A set of polygons describing a convex shape.
 * @class ConvexPolyhedron
 * @constructor
 * @extends Shape
 * @description The shape MUST be convex for the code to work properly. No polygons may be coplanar (contained
 * in the same 3D plane), instead these should be merged into one polygon.
 *
 * @param {array} points An array of Vec3's
 * @param {array} faces Array of integer arrays, describing which vertices that is included in each face.
 *
 * @author qiao / https://github.com/qiao (original author, see https://github.com/qiao/three.js/commit/85026f0c769e4000148a67d45a9e9b9c5108836f)
 * @author schteppe / https://github.com/schteppe
 * @see http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/
 * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
 *
 * @todo Move the clipping functions to ContactGenerator?
 * @todo Automatically merge coplanar polygons in constructor.
 */
function ConvexPolyhedron(points, faces, uniqueAxes) {
    Shape.call(this, {
        type: Shape.types.CONVEXPOLYHEDRON
    });

    /**
     * Array of Vec3
     * @property vertices
     * @type {Array}
     */
    this.vertices = points||[];

    this.worldVertices = []; // World transformed version of .vertices
    this.worldVerticesNeedsUpdate = true;

    /**
     * Array of integer arrays, indicating which vertices each face consists of
     * @property faces
     * @type {Array}
     */
    this.faces = faces||[];

    /**
     * Array of Vec3
     * @property faceNormals
     * @type {Array}
     */
    this.faceNormals = [];
    this.computeNormals();

    this.worldFaceNormalsNeedsUpdate = true;
    this.worldFaceNormals = []; // World transformed version of .faceNormals

    /**
     * Array of Vec3
     * @property uniqueEdges
     * @type {Array}
     */
    this.uniqueEdges = [];

    /**
     * If given, these locally defined, normalized axes are the only ones being checked when doing separating axis check.
     * @property {Array} uniqueAxes
     */
    this.uniqueAxes = uniqueAxes ? uniqueAxes.slice() : null;

    this.computeEdges();
    this.updateBoundingSphereRadius();
}
ConvexPolyhedron.prototype = new Shape();
ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;

var computeEdges_tmpEdge = new Vec3();
/**
 * Computes uniqueEdges
 * @method computeEdges
 */
ConvexPolyhedron.prototype.computeEdges = function(){
    var faces = this.faces;
    var vertices = this.vertices;
    var nv = vertices.length;
    var edges = this.uniqueEdges;

    edges.length = 0;

    var edge = computeEdges_tmpEdge;

    for(var i=0; i !== faces.length; i++){
        var face = faces[i];
        var numVertices = face.length;
        for(var j = 0; j !== numVertices; j++){
            var k = ( j+1 ) % numVertices;
            vertices[face[j]].vsub(vertices[face[k]], edge);
            edge.normalize();
            var found = false;
            for(var p=0; p !== edges.length; p++){
                if (edges[p].almostEquals(edge) || edges[p].almostEquals(edge)){
                    found = true;
                    break;
                }
            }

            if (!found){
                edges.push(edge.clone());
            }
        }
    }
};

/**
 * Compute the normals of the faces. Will reuse existing Vec3 objects in the .faceNormals array if they exist.
 * @method computeNormals
 */
ConvexPolyhedron.prototype.computeNormals = function(){
    this.faceNormals.length = this.faces.length;

    // Generate normals
    for(var i=0; i<this.faces.length; i++){

        // Check so all vertices exists for this face
        for(var j=0; j<this.faces[i].length; j++){
            if(!this.vertices[this.faces[i][j]]){
                throw new Error("Vertex "+this.faces[i][j]+" not found!");
            }
        }

        var n = this.faceNormals[i] || new Vec3();
        this.getFaceNormal(i,n);
        n.negate(n);
        this.faceNormals[i] = n;
        var vertex = this.vertices[this.faces[i][0]];
        if(n.dot(vertex) < 0){
            //.error(".faceNormals[" + i + "] = Vec3("+n.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
            for(var j=0; j<this.faces[i].length; j++){
                //.warn(".vertices["+this.faces[i][j]+"] = Vec3("+this.vertices[this.faces[i][j]].toString()+")");
            }
        }
    }
};

/**
 * Get face normal given 3 vertices
 * @static
 * @method getFaceNormal
 * @param {Vec3} va
 * @param {Vec3} vb
 * @param {Vec3} vc
 * @param {Vec3} target
 */
var cb = new Vec3();
var ab = new Vec3();
ConvexPolyhedron.computeNormal = function ( va, vb, vc, target ) {
    vb.vsub(va,ab);
    vc.vsub(vb,cb);
    cb.cross(ab,target);
    if ( !target.isZero() ) {
        target.normalize();
    }
};

/**
 * Compute the normal of a face from its vertices
 * @method getFaceNormal
 * @param  {Number} i
 * @param  {Vec3} target
 */
ConvexPolyhedron.prototype.getFaceNormal = function(i,target){
    var f = this.faces[i];
    var va = this.vertices[f[0]];
    var vb = this.vertices[f[1]];
    var vc = this.vertices[f[2]];
    return ConvexPolyhedron.computeNormal(va,vb,vc,target);
};

/**
 * @method clipAgainstHull
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @param {Vec3} separatingNormal
 * @param {Number} minDist Clamp distance
 * @param {Number} maxDist
 * @param {array} result The an array of contact point objects, see clipFaceAgainstHull
 * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
 */
var cah_WorldNormal = new Vec3();
ConvexPolyhedron.prototype.clipAgainstHull = function(posA,quatA,hullB,posB,quatB,separatingNormal,minDist,maxDist,result){
    var WorldNormal = cah_WorldNormal;
    var hullA = this;
    var curMaxDist = maxDist;
    var closestFaceB = -1;
    var dmax = -Number.MAX_VALUE;
    for(var face=0; face < hullB.faces.length; face++){
        WorldNormal.copy(hullB.faceNormals[face]);
        quatB.vmult(WorldNormal,WorldNormal);
        //posB.vadd(WorldNormal,WorldNormal);
        var d = WorldNormal.dot(separatingNormal);
        if (d > dmax){
            dmax = d;
            closestFaceB = face;
        }
    }
    var worldVertsB1 = [];
    var polyB = hullB.faces[closestFaceB];
    var numVertices = polyB.length;
    for(var e0=0; e0<numVertices; e0++){
        var b = hullB.vertices[polyB[e0]];
        var worldb = new Vec3();
        worldb.copy(b);
        quatB.vmult(worldb,worldb);
        posB.vadd(worldb,worldb);
        worldVertsB1.push(worldb);
    }

    if (closestFaceB>=0){
        this.clipFaceAgainstHull(separatingNormal,
                                 posA,
                                 quatA,
                                 worldVertsB1,
                                 minDist,
                                 maxDist,
                                 result);
    }
};

/**
 * Find the separating axis between this hull and another
 * @method findSeparatingAxis
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @param {Vec3} target The target vector to save the axis in
 * @return {bool} Returns false if a separation is found, else true
 */
var fsa_faceANormalWS3 = new Vec3(),
    fsa_Worldnormal1 = new Vec3(),
    fsa_deltaC = new Vec3(),
    fsa_worldEdge0 = new Vec3(),
    fsa_worldEdge1 = new Vec3(),
    fsa_Cross = new Vec3();
ConvexPolyhedron.prototype.findSeparatingAxis = function(hullB,posA,quatA,posB,quatB,target, faceListA, faceListB){
    var faceANormalWS3 = fsa_faceANormalWS3,
        Worldnormal1 = fsa_Worldnormal1,
        deltaC = fsa_deltaC,
        worldEdge0 = fsa_worldEdge0,
        worldEdge1 = fsa_worldEdge1,
        Cross = fsa_Cross;

    var dmin = Number.MAX_VALUE;
    var hullA = this;
    var curPlaneTests=0;

    if(!hullA.uniqueAxes){

        var numFacesA = faceListA ? faceListA.length : hullA.faces.length;

        // Test face normals from hullA
        for(var i=0; i<numFacesA; i++){
            var fi = faceListA ? faceListA[i] : i;

            // Get world face normal
            faceANormalWS3.copy(hullA.faceNormals[fi]);
            quatA.vmult(faceANormalWS3,faceANormalWS3);

            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(faceANormalWS3);
            }
        }

    } else {

        // Test unique axes
        for(var i = 0; i !== hullA.uniqueAxes.length; i++){

            // Get world axis
            quatA.vmult(hullA.uniqueAxes[i],faceANormalWS3);

            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(faceANormalWS3);
            }
        }
    }

    if(!hullB.uniqueAxes){

        // Test face normals from hullB
        var numFacesB = faceListB ? faceListB.length : hullB.faces.length;
        for(var i=0;i<numFacesB;i++){

            var fi = faceListB ? faceListB[i] : i;

            Worldnormal1.copy(hullB.faceNormals[fi]);
            quatB.vmult(Worldnormal1,Worldnormal1);
            curPlaneTests++;
            var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(Worldnormal1);
            }
        }
    } else {

        // Test unique axes in B
        for(var i = 0; i !== hullB.uniqueAxes.length; i++){
            quatB.vmult(hullB.uniqueAxes[i],Worldnormal1);

            curPlaneTests++;
            var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(Worldnormal1);
            }
        }
    }

    // Test edges
    for(var e0=0; e0 !== hullA.uniqueEdges.length; e0++){

        // Get world edge
        quatA.vmult(hullA.uniqueEdges[e0],worldEdge0);

        for(var e1=0; e1 !== hullB.uniqueEdges.length; e1++){

            // Get world edge 2
            quatB.vmult(hullB.uniqueEdges[e1], worldEdge1);
            worldEdge0.cross(worldEdge1,Cross);

            if(!Cross.almostZero()){
                Cross.normalize();
                var dist = hullA.testSepAxis(Cross, hullB, posA, quatA, posB, quatB);
                if(dist === false){
                    return false;
                }
                if(dist < dmin){
                    dmin = dist;
                    target.copy(Cross);
                }
            }
        }
    }

    posB.vsub(posA,deltaC);
    if((deltaC.dot(target))>0.0){
        target.negate(target);
    }

    return true;
};

var maxminA=[], maxminB=[];

/**
 * Test separating axis against two hulls. Both hulls are projected onto the axis and the overlap size is returned if there is one.
 * @method testSepAxis
 * @param {Vec3} axis
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @return {number} The overlap depth, or FALSE if no penetration.
 */
ConvexPolyhedron.prototype.testSepAxis = function(axis, hullB, posA, quatA, posB, quatB){
    var hullA=this;
    ConvexPolyhedron.project(hullA, axis, posA, quatA, maxminA);
    ConvexPolyhedron.project(hullB, axis, posB, quatB, maxminB);
    var maxA = maxminA[0];
    var minA = maxminA[1];
    var maxB = maxminB[0];
    var minB = maxminB[1];
    if(maxA<minB || maxB<minA){
        return false; // Separated
    }
    var d0 = maxA - minB;
    var d1 = maxB - minA;
    var depth = d0<d1 ? d0:d1;
    return depth;
};

var cli_aabbmin = new Vec3(),
    cli_aabbmax = new Vec3();

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 */
ConvexPolyhedron.prototype.calculateLocalInertia = function(mass,target){
    // Approximate with box inertia
    // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
    this.computeLocalAABB(cli_aabbmin,cli_aabbmax);
    var x = cli_aabbmax.x - cli_aabbmin.x,
        y = cli_aabbmax.y - cli_aabbmin.y,
        z = cli_aabbmax.z - cli_aabbmin.z;
    target.x = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z );
    target.y = 1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z );
    target.z = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x );
};

/**
 * @method getPlaneConstantOfFace
 * @param  {Number} face_i Index of the face
 * @return {Number}
 */
ConvexPolyhedron.prototype.getPlaneConstantOfFace = function(face_i){
    var f = this.faces[face_i];
    var n = this.faceNormals[face_i];
    var v = this.vertices[f[0]];
    var c = -n.dot(v);
    return c;
};

/**
 * Clip a face against a hull.
 * @method clipFaceAgainstHull
 * @param {Vec3} separatingNormal
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Array} worldVertsB1 An array of Vec3 with vertices in the world frame.
 * @param {Number} minDist Distance clamping
 * @param {Number} maxDist
 * @param Array result Array to store resulting contact points in. Will be objects with properties: point, depth, normal. These are represented in world coordinates.
 */
var cfah_faceANormalWS = new Vec3(),
    cfah_edge0 = new Vec3(),
    cfah_WorldEdge0 = new Vec3(),
    cfah_worldPlaneAnormal1 = new Vec3(),
    cfah_planeNormalWS1 = new Vec3(),
    cfah_worldA1 = new Vec3(),
    cfah_localPlaneNormal = new Vec3(),
    cfah_planeNormalWS = new Vec3();
ConvexPolyhedron.prototype.clipFaceAgainstHull = function(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist,result){
    var faceANormalWS = cfah_faceANormalWS,
        edge0 = cfah_edge0,
        WorldEdge0 = cfah_WorldEdge0,
        worldPlaneAnormal1 = cfah_worldPlaneAnormal1,
        planeNormalWS1 = cfah_planeNormalWS1,
        worldA1 = cfah_worldA1,
        localPlaneNormal = cfah_localPlaneNormal,
        planeNormalWS = cfah_planeNormalWS;

    var hullA = this;
    var worldVertsB2 = [];
    var pVtxIn = worldVertsB1;
    var pVtxOut = worldVertsB2;
    // Find the face with normal closest to the separating axis
    var closestFaceA = -1;
    var dmin = Number.MAX_VALUE;
    for(var face=0; face<hullA.faces.length; face++){
        faceANormalWS.copy(hullA.faceNormals[face]);
        quatA.vmult(faceANormalWS,faceANormalWS);
        //posA.vadd(faceANormalWS,faceANormalWS);
        var d = faceANormalWS.dot(separatingNormal);
        if (d < dmin){
            dmin = d;
            closestFaceA = face;
        }
    }
    if (closestFaceA < 0){
        // //.log("--- did not find any closest face... ---");
        return;
    }
    ////.log("closest A: ",closestFaceA);
    // Get the face and construct connected faces
    var polyA = hullA.faces[closestFaceA];
    polyA.connectedFaces = [];
    for(var i=0; i<hullA.faces.length; i++){
        for(var j=0; j<hullA.faces[i].length; j++){
            if(polyA.indexOf(hullA.faces[i][j])!==-1 /* Sharing a vertex*/ && i!==closestFaceA /* Not the one we are looking for connections from */ && polyA.connectedFaces.indexOf(i)===-1 /* Not already added */ ){
                polyA.connectedFaces.push(i);
            }
        }
    }
    // Clip the polygon to the back of the planes of all faces of hull A, that are adjacent to the witness face
    var numContacts = pVtxIn.length;
    var numVerticesA = polyA.length;
    var res = [];
    for(var e0=0; e0<numVerticesA; e0++){
        var a = hullA.vertices[polyA[e0]];
        var b = hullA.vertices[polyA[(e0+1)%numVerticesA]];
        a.vsub(b,edge0);
        WorldEdge0.copy(edge0);
        quatA.vmult(WorldEdge0,WorldEdge0);
        posA.vadd(WorldEdge0,WorldEdge0);
        worldPlaneAnormal1.copy(this.faceNormals[closestFaceA]);//transA.getBasis()* btVector3(polyA.m_plane[0],polyA.m_plane[1],polyA.m_plane[2]);
        quatA.vmult(worldPlaneAnormal1,worldPlaneAnormal1);
        posA.vadd(worldPlaneAnormal1,worldPlaneAnormal1);
        WorldEdge0.cross(worldPlaneAnormal1,planeNormalWS1);
        planeNormalWS1.negate(planeNormalWS1);
        worldA1.copy(a);
        quatA.vmult(worldA1,worldA1);
        posA.vadd(worldA1,worldA1);
        var planeEqWS1 = -worldA1.dot(planeNormalWS1);
        var planeEqWS;
        if(true){
            var otherFace = polyA.connectedFaces[e0];
            localPlaneNormal.copy(this.faceNormals[otherFace]);
            var localPlaneEq = this.getPlaneConstantOfFace(otherFace);

            planeNormalWS.copy(localPlaneNormal);
            quatA.vmult(planeNormalWS,planeNormalWS);
            //posA.vadd(planeNormalWS,planeNormalWS);
            var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
        } else  {
            planeNormalWS.copy(planeNormalWS1);
            planeEqWS = planeEqWS1;
        }

        // Clip face against our constructed plane
        this.clipFaceAgainstPlane(pVtxIn, pVtxOut, planeNormalWS, planeEqWS);

        // Throw away all clipped points, but save the reamining until next clip
        while(pVtxIn.length){
            pVtxIn.shift();
        }
        while(pVtxOut.length){
            pVtxIn.push(pVtxOut.shift());
        }
    }

    ////.log("Resulting points after clip:",pVtxIn);

    // only keep contact points that are behind the witness face
    localPlaneNormal.copy(this.faceNormals[closestFaceA]);

    var localPlaneEq = this.getPlaneConstantOfFace(closestFaceA);
    planeNormalWS.copy(localPlaneNormal);
    quatA.vmult(planeNormalWS,planeNormalWS);

    var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
    for (var i=0; i<pVtxIn.length; i++){
        var depth = planeNormalWS.dot(pVtxIn[i]) + planeEqWS; //???
        /*//.log("depth calc from normal=",planeNormalWS.toString()," and constant "+planeEqWS+" and vertex ",pVtxIn[i].toString()," gives "+depth);*/
        if (depth <=minDist){
            //.log("clamped: depth="+depth+" to minDist="+(minDist+""));
            depth = minDist;
        }

        if (depth <=maxDist){
            var point = pVtxIn[i];
            if(depth<=0){
                /*//.log("Got contact point ",point.toString(),
                  ", depth=",depth,
                  "contact normal=",separatingNormal.toString(),
                  "plane",planeNormalWS.toString(),
                  "planeConstant",planeEqWS);*/
                var p = {
                    point:point,
                    normal:planeNormalWS,
                    depth: depth,
                };
                result.push(p);
            }
        }
    }
};

/**
 * Clip a face in a hull against the back of a plane.
 * @method clipFaceAgainstPlane
 * @param {Array} inVertices
 * @param {Array} outVertices
 * @param {Vec3} planeNormal
 * @param {Number} planeConstant The constant in the mathematical plane equation
 */
ConvexPolyhedron.prototype.clipFaceAgainstPlane = function(inVertices,outVertices, planeNormal, planeConstant){
    var n_dot_first, n_dot_last;
    var numVerts = inVertices.length;

    if(numVerts < 2){
        return outVertices;
    }

    var firstVertex = inVertices[inVertices.length-1],
        lastVertex =   inVertices[0];

    n_dot_first = planeNormal.dot(firstVertex) + planeConstant;

    for(var vi = 0; vi < numVerts; vi++){
        lastVertex = inVertices[vi];
        n_dot_last = planeNormal.dot(lastVertex) + planeConstant;
        if(n_dot_first < 0){
            if(n_dot_last < 0){
                // Start < 0, end < 0, so output lastVertex
                var newv = new Vec3();
                newv.copy(lastVertex);
                outVertices.push(newv);
            } else {
                // Start < 0, end >= 0, so output intersection
                var newv = new Vec3();
                firstVertex.lerp(lastVertex,
                                 n_dot_first / (n_dot_first - n_dot_last),
                                 newv);
                outVertices.push(newv);
            }
        } else {
            if(n_dot_last<0){
                // Start >= 0, end < 0 so output intersection and end
                var newv = new Vec3();
                firstVertex.lerp(lastVertex,
                                 n_dot_first / (n_dot_first - n_dot_last),
                                 newv);
                outVertices.push(newv);
                outVertices.push(lastVertex);
            }
        }
        firstVertex = lastVertex;
        n_dot_first = n_dot_last;
    }
    return outVertices;
};

// Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
ConvexPolyhedron.prototype.computeWorldVertices = function(position,quat){
    var N = this.vertices.length;
    while(this.worldVertices.length < N){
        this.worldVertices.push( new Vec3() );
    }

    var verts = this.vertices,
        worldVerts = this.worldVertices;
    for(var i=0; i!==N; i++){
        quat.vmult( verts[i] , worldVerts[i] );
        position.vadd( worldVerts[i] , worldVerts[i] );
    }

    this.worldVerticesNeedsUpdate = false;
};

var computeLocalAABB_worldVert = new Vec3();
ConvexPolyhedron.prototype.computeLocalAABB = function(aabbmin,aabbmax){
    var n = this.vertices.length,
        vertices = this.vertices,
        worldVert = computeLocalAABB_worldVert;

    aabbmin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
    aabbmax.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);

    for(var i=0; i<n; i++){
        var v = vertices[i];
        if     (v.x < aabbmin.x){
            aabbmin.x = v.x;
        } else if(v.x > aabbmax.x){
            aabbmax.x = v.x;
        }
        if     (v.y < aabbmin.y){
            aabbmin.y = v.y;
        } else if(v.y > aabbmax.y){
            aabbmax.y = v.y;
        }
        if     (v.z < aabbmin.z){
            aabbmin.z = v.z;
        } else if(v.z > aabbmax.z){
            aabbmax.z = v.z;
        }
    }
};

/**
 * Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
 * @method computeWorldFaceNormals
 * @param  {Quaternion} quat
 */
ConvexPolyhedron.prototype.computeWorldFaceNormals = function(quat){
    var N = this.faceNormals.length;
    while(this.worldFaceNormals.length < N){
        this.worldFaceNormals.push( new Vec3() );
    }

    var normals = this.faceNormals,
        worldNormals = this.worldFaceNormals;
    for(var i=0; i!==N; i++){
        quat.vmult( normals[i] , worldNormals[i] );
    }

    this.worldFaceNormalsNeedsUpdate = false;
};

/**
 * @method updateBoundingSphereRadius
 */
ConvexPolyhedron.prototype.updateBoundingSphereRadius = function(){
    // Assume points are distributed with local (0,0,0) as center
    var max2 = 0;
    var verts = this.vertices;
    for(var i=0, N=verts.length; i!==N; i++) {
        var norm2 = verts[i].norm2();
        if(norm2 > max2){
            max2 = norm2;
        }
    }
    this.boundingSphereRadius = Math.sqrt(max2);
};

var tempWorldVertex = new Vec3();

/**
 * @method calculateWorldAABB
 * @param {Vec3}        pos
 * @param {Quaternion}  quat
 * @param {Vec3}        min
 * @param {Vec3}        max
 */
ConvexPolyhedron.prototype.calculateWorldAABB = function(pos,quat,min,max){
    var n = this.vertices.length, verts = this.vertices;
    var minx,miny,minz,maxx,maxy,maxz;
    for(var i=0; i<n; i++){
        tempWorldVertex.copy(verts[i]);
        quat.vmult(tempWorldVertex,tempWorldVertex);
        pos.vadd(tempWorldVertex,tempWorldVertex);
        var v = tempWorldVertex;
        if     (v.x < minx || minx===undefined){
            minx = v.x;
        } else if(v.x > maxx || maxx===undefined){
            maxx = v.x;
        }

        if     (v.y < miny || miny===undefined){
            miny = v.y;
        } else if(v.y > maxy || maxy===undefined){
            maxy = v.y;
        }

        if     (v.z < minz || minz===undefined){
            minz = v.z;
        } else if(v.z > maxz || maxz===undefined){
            maxz = v.z;
        }
    }
    min.set(minx,miny,minz);
    max.set(maxx,maxy,maxz);
};

/**
 * Get approximate convex volume
 * @method volume
 * @return {Number}
 */
ConvexPolyhedron.prototype.volume = function(){
    return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
};

/**
 * Get an average of all the vertices positions
 * @method getAveragePointLocal
 * @param  {Vec3} target
 * @return {Vec3}
 */
ConvexPolyhedron.prototype.getAveragePointLocal = function(target){
    target = target || new Vec3();
    var n = this.vertices.length,
        verts = this.vertices;
    for(var i=0; i<n; i++){
        target.vadd(verts[i],target);
    }
    target.mult(1/n,target);
    return target;
};

/**
 * Transform all local points. Will change the .vertices
 * @method transformAllPoints
 * @param  {Vec3} offset
 * @param  {Quaternion} quat
 */
ConvexPolyhedron.prototype.transformAllPoints = function(offset,quat){
    var n = this.vertices.length,
        verts = this.vertices;

    // Apply rotation
    if(quat){
        // Rotate vertices
        for(var i=0; i<n; i++){
            var v = verts[i];
            quat.vmult(v,v);
        }
        // Rotate face normals
        for(var i=0; i<this.faceNormals.length; i++){
            var v = this.faceNormals[i];
            quat.vmult(v,v);
        }
        /*
        // Rotate edges
        for(var i=0; i<this.uniqueEdges.length; i++){
            var v = this.uniqueEdges[i];
            quat.vmult(v,v);
        }*/
    }

    // Apply offset
    if(offset){
        for(var i=0; i<n; i++){
            var v = verts[i];
            v.vadd(offset,v);
        }
    }
};

/**
 * Checks whether p is inside the polyhedra. Must be in local coords. The point lies outside of the convex hull of the other points if and only if the direction of all the vectors from it to those other points are on less than one half of a sphere around it.
 * @method pointIsInside
 * @param  {Vec3} p      A point given in local coordinates
 * @return {Boolean}
 */
var ConvexPolyhedron_pointIsInside = new Vec3();
var ConvexPolyhedron_vToP = new Vec3();
var ConvexPolyhedron_vToPointInside = new Vec3();
ConvexPolyhedron.prototype.pointIsInside = function(p){
    var n = this.vertices.length,
        verts = this.vertices,
        faces = this.faces,
        normals = this.faceNormals;
    var positiveResult = null;
    var N = this.faces.length;
    var pointInside = ConvexPolyhedron_pointIsInside;
    this.getAveragePointLocal(pointInside);
    for(var i=0; i<N; i++){
        var numVertices = this.faces[i].length;
        var n = normals[i];
        var v = verts[faces[i][0]]; // We only need one point in the face

        // This dot product determines which side of the edge the point is
        var vToP = ConvexPolyhedron_vToP;
        p.vsub(v,vToP);
        var r1 = n.dot(vToP);

        var vToPointInside = ConvexPolyhedron_vToPointInside;
        pointInside.vsub(v,vToPointInside);
        var r2 = n.dot(vToPointInside);

        if((r1<0 && r2>0) || (r1>0 && r2<0)){
            return false; // Encountered some other sign. Exit.
        } else {
        }
    }

    // If we got here, all dot products were of the same sign.
    return positiveResult ? 1 : -1;
};

/**
 * Get max and min dot product of a convex hull at position (pos,quat) projected onto an axis. Results are saved in the array maxmin.
 * @static
 * @method project
 * @param {ConvexPolyhedron} hull
 * @param {Vec3} axis
 * @param {Vec3} pos
 * @param {Quaternion} quat
 * @param {array} result result[0] and result[1] will be set to maximum and minimum, respectively.
 */
var project_worldVertex = new Vec3();
var project_localAxis = new Vec3();
var project_localOrigin = new Vec3();
ConvexPolyhedron.project = function(hull, axis, pos, quat, result){
    var n = hull.vertices.length,
        worldVertex = project_worldVertex,
        localAxis = project_localAxis,
        max = 0,
        min = 0,
        localOrigin = project_localOrigin,
        vs = hull.vertices;

    localOrigin.setZero();

    // Transform the axis to local
    Transform.vectorToLocalFrame(pos, quat, axis, localAxis);
    Transform.pointToLocalFrame(pos, quat, localOrigin, localOrigin);
    var add = localOrigin.dot(localAxis);

    min = max = vs[0].dot(localAxis);

    for(var i = 1; i < n; i++){
        var val = vs[i].dot(localAxis);

        if(val > max){
            max = val;
        }

        if(val < min){
            min = val;
        }
    }

    min -= add;
    max -= add;

    if(min > max){
        // Inconsistent - swap
        var temp = min;
        min = max;
        max = temp;
    }
    // Output
    result[0] = max;
    result[1] = min;
};

},{"./Shape":"Ggpt","../math/Vec3":"XG60","../math/Quaternion":"bEmM","../math/Transform":"CcAe"}],"o0NO":[function(require,module,exports) {
module.exports = Box;

var Shape = require('./Shape');
var Vec3 = require('../math/Vec3');
var ConvexPolyhedron = require('./ConvexPolyhedron');

/**
 * A 3d box shape.
 * @class Box
 * @constructor
 * @param {Vec3} halfExtents
 * @author schteppe
 * @extends Shape
 */
function Box(halfExtents){
    Shape.call(this, {
        type: Shape.types.BOX
    });

    /**
     * @property halfExtents
     * @type {Vec3}
     */
    this.halfExtents = halfExtents;

    /**
     * Used by the contact generator to make contacts with other convex polyhedra for example
     * @property convexPolyhedronRepresentation
     * @type {ConvexPolyhedron}
     */
    this.convexPolyhedronRepresentation = null;

    this.updateConvexPolyhedronRepresentation();
    this.updateBoundingSphereRadius();
}
Box.prototype = new Shape();
Box.prototype.constructor = Box;

/**
 * Updates the local convex polyhedron representation used for some collisions.
 * @method updateConvexPolyhedronRepresentation
 */
Box.prototype.updateConvexPolyhedronRepresentation = function(){
    var sx = this.halfExtents.x;
    var sy = this.halfExtents.y;
    var sz = this.halfExtents.z;
    var V = Vec3;

    var vertices = [
        new V(-sx,-sy,-sz),
        new V( sx,-sy,-sz),
        new V( sx, sy,-sz),
        new V(-sx, sy,-sz),
        new V(-sx,-sy, sz),
        new V( sx,-sy, sz),
        new V( sx, sy, sz),
        new V(-sx, sy, sz)
    ];

    var indices = [
        [3,2,1,0], // -z
        [4,5,6,7], // +z
        [5,4,0,1], // -y
        [2,3,7,6], // +y
        [0,4,7,3], // -x
        [1,2,6,5], // +x
    ];

    var axes = [
        new V(0, 0, 1),
        new V(0, 1, 0),
        new V(1, 0, 0)
    ];

    var h = new ConvexPolyhedron(vertices, indices);
    this.convexPolyhedronRepresentation = h;
    h.material = this.material;
};

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3}
 */
Box.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    Box.calculateInertia(this.halfExtents, mass, target);
    return target;
};

Box.calculateInertia = function(halfExtents,mass,target){
    var e = halfExtents;
    target.x = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.z*2*e.z );
    target.y = 1.0 / 12.0 * mass * (   2*e.x*2*e.x + 2*e.z*2*e.z );
    target.z = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.x*2*e.x );
};

/**
 * Get the box 6 side normals
 * @method getSideNormals
 * @param {array}      sixTargetVectors An array of 6 vectors, to store the resulting side normals in.
 * @param {Quaternion} quat             Orientation to apply to the normal vectors. If not provided, the vectors will be in respect to the local frame.
 * @return {array}
 */
Box.prototype.getSideNormals = function(sixTargetVectors,quat){
    var sides = sixTargetVectors;
    var ex = this.halfExtents;
    sides[0].set(  ex.x,     0,     0);
    sides[1].set(     0,  ex.y,     0);
    sides[2].set(     0,     0,  ex.z);
    sides[3].set( -ex.x,     0,     0);
    sides[4].set(     0, -ex.y,     0);
    sides[5].set(     0,     0, -ex.z);

    if(quat!==undefined){
        for(var i=0; i!==sides.length; i++){
            quat.vmult(sides[i],sides[i]);
        }
    }

    return sides;
};

Box.prototype.volume = function(){
    return 8.0 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
};

Box.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = this.halfExtents.norm();
};

var worldCornerTempPos = new Vec3();
var worldCornerTempNeg = new Vec3();
Box.prototype.forEachWorldCorner = function(pos,quat,callback){

    var e = this.halfExtents;
    var corners = [[  e.x,  e.y,  e.z],
                   [ -e.x,  e.y,  e.z],
                   [ -e.x, -e.y,  e.z],
                   [ -e.x, -e.y, -e.z],
                   [  e.x, -e.y, -e.z],
                   [  e.x,  e.y, -e.z],
                   [ -e.x,  e.y, -e.z],
                   [  e.x, -e.y,  e.z]];
    for(var i=0; i<corners.length; i++){
        worldCornerTempPos.set(corners[i][0],corners[i][1],corners[i][2]);
        quat.vmult(worldCornerTempPos,worldCornerTempPos);
        pos.vadd(worldCornerTempPos,worldCornerTempPos);
        callback(worldCornerTempPos.x,
                 worldCornerTempPos.y,
                 worldCornerTempPos.z);
    }
};

var worldCornersTemp = [
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3()
];
Box.prototype.calculateWorldAABB = function(pos,quat,min,max){

    var e = this.halfExtents;
    worldCornersTemp[0].set(e.x, e.y, e.z);
    worldCornersTemp[1].set(-e.x,  e.y, e.z);
    worldCornersTemp[2].set(-e.x, -e.y, e.z);
    worldCornersTemp[3].set(-e.x, -e.y, -e.z);
    worldCornersTemp[4].set(e.x, -e.y, -e.z);
    worldCornersTemp[5].set(e.x,  e.y, -e.z);
    worldCornersTemp[6].set(-e.x,  e.y, -e.z);
    worldCornersTemp[7].set(e.x, -e.y,  e.z);

    var wc = worldCornersTemp[0];
    quat.vmult(wc, wc);
    pos.vadd(wc, wc);
    max.copy(wc);
    min.copy(wc);
    for(var i=1; i<8; i++){
        var wc = worldCornersTemp[i];
        quat.vmult(wc, wc);
        pos.vadd(wc, wc);
        var x = wc.x;
        var y = wc.y;
        var z = wc.z;
        if(x > max.x){
            max.x = x;
        }
        if(y > max.y){
            max.y = y;
        }
        if(z > max.z){
            max.z = z;
        }

        if(x < min.x){
            min.x = x;
        }
        if(y < min.y){
            min.y = y;
        }
        if(z < min.z){
            min.z = z;
        }
    }

    // Get each axis max
    // min.set(Infinity,Infinity,Infinity);
    // max.set(-Infinity,-Infinity,-Infinity);
    // this.forEachWorldCorner(pos,quat,function(x,y,z){
    //     if(x > max.x){
    //         max.x = x;
    //     }
    //     if(y > max.y){
    //         max.y = y;
    //     }
    //     if(z > max.z){
    //         max.z = z;
    //     }

    //     if(x < min.x){
    //         min.x = x;
    //     }
    //     if(y < min.y){
    //         min.y = y;
    //     }
    //     if(z < min.z){
    //         min.z = z;
    //     }
    // });
};

},{"./Shape":"Ggpt","../math/Vec3":"XG60","./ConvexPolyhedron":"1+Yp"}],"UPq9":[function(require,module,exports) {
module.exports = Body;

var EventTarget = require('../utils/EventTarget');
var Shape = require('../shapes/Shape');
var Vec3 = require('../math/Vec3');
var Mat3 = require('../math/Mat3');
var Quaternion = require('../math/Quaternion');
var Material = require('../material/Material');
var AABB = require('../collision/AABB');
var Box = require('../shapes/Box');

/**
 * Base class for all body types.
 * @class Body
 * @constructor
 * @extends EventTarget
 * @param {object} [options]
 * @param {Vec3} [options.position]
 * @param {Vec3} [options.velocity]
 * @param {Vec3} [options.angularVelocity]
 * @param {Quaternion} [options.quaternion]
 * @param {number} [options.mass]
 * @param {Material} [options.material]
 * @param {number} [options.type]
 * @param {number} [options.linearDamping=0.01]
 * @param {number} [options.angularDamping=0.01]
 * @param {boolean} [options.allowSleep=true]
 * @param {number} [options.sleepSpeedLimit=0.1]
 * @param {number} [options.sleepTimeLimit=1]
 * @param {number} [options.collisionFilterGroup=1]
 * @param {number} [options.collisionFilterMask=-1]
 * @param {boolean} [options.fixedRotation=false]
 * @param {Vec3} [options.linearFactor]
 * @param {Vec3} [options.angularFactor]
 * @param {Shape} [options.shape]
 * @example
 *     var body = new Body({
 *         mass: 1
 *     });
 *     var shape = new Sphere(1);
 *     body.addShape(shape);
 *     world.addBody(body);
 */
function Body(options){
    options = options || {};

    EventTarget.apply(this);

    this.id = Body.idCounter++;

    /**
     * Reference to the world the body is living in
     * @property world
     * @type {World}
     */
    this.world = null;

    /**
     * Callback function that is used BEFORE stepping the system. Use it to apply forces, for example. Inside the function, "this" will refer to this Body object.
     * @property preStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    this.preStep = null;

    /**
     * Callback function that is used AFTER stepping the system. Inside the function, "this" will refer to this Body object.
     * @property postStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    this.postStep = null;

    this.vlambda = new Vec3();

    /**
     * @property {Number} collisionFilterGroup
     */
    this.collisionFilterGroup = typeof(options.collisionFilterGroup) === 'number' ? options.collisionFilterGroup : 1;

    /**
     * @property {Number} collisionFilterMask
     */
    this.collisionFilterMask = typeof(options.collisionFilterMask) === 'number' ? options.collisionFilterMask : -1;

    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {Number} collisionResponse
     */
	this.collisionResponse = true;

    /**
     * World space position of the body.
     * @property position
     * @type {Vec3}
     */
    this.position = new Vec3();

    /**
     * @property {Vec3} previousPosition
     */
    this.previousPosition = new Vec3();

    /**
     * Interpolated position of the body.
     * @property {Vec3} interpolatedPosition
     */
    this.interpolatedPosition = new Vec3();

    /**
     * Initial position of the body
     * @property initPosition
     * @type {Vec3}
     */
    this.initPosition = new Vec3();

    if(options.position){
        this.position.copy(options.position);
        this.previousPosition.copy(options.position);
        this.interpolatedPosition.copy(options.position);
        this.initPosition.copy(options.position);
    }

    /**
     * World space velocity of the body.
     * @property velocity
     * @type {Vec3}
     */
    this.velocity = new Vec3();

    if(options.velocity){
        this.velocity.copy(options.velocity);
    }

    /**
     * @property initVelocity
     * @type {Vec3}
     */
    this.initVelocity = new Vec3();

    /**
     * Linear force on the body in world space.
     * @property force
     * @type {Vec3}
     */
    this.force = new Vec3();

    var mass = typeof(options.mass) === 'number' ? options.mass : 0;

    /**
     * @property mass
     * @type {Number}
     * @default 0
     */
    this.mass = mass;

    /**
     * @property invMass
     * @type {Number}
     */
    this.invMass = mass > 0 ? 1.0 / mass : 0;

    /**
     * @property material
     * @type {Material}
     */
    this.material = options.material || null;

    /**
     * @property linearDamping
     * @type {Number}
     */
    this.linearDamping = typeof(options.linearDamping) === 'number' ? options.linearDamping : 0.01;

    /**
     * One of: Body.DYNAMIC, Body.STATIC and Body.KINEMATIC.
     * @property type
     * @type {Number}
     */
    this.type = (mass <= 0.0 ? Body.STATIC : Body.DYNAMIC);
    if(typeof(options.type) === typeof(Body.STATIC)){
        this.type = options.type;
    }

    /**
     * If true, the body will automatically fall to sleep.
     * @property allowSleep
     * @type {Boolean}
     * @default true
     */
    this.allowSleep = typeof(options.allowSleep) !== 'undefined' ? options.allowSleep : true;

    /**
     * Current sleep state.
     * @property sleepState
     * @type {Number}
     */
    this.sleepState = 0;

    /**
     * If the speed (the norm of the velocity) is smaller than this value, the body is considered sleepy.
     * @property sleepSpeedLimit
     * @type {Number}
     * @default 0.1
     */
    this.sleepSpeedLimit = typeof(options.sleepSpeedLimit) !== 'undefined' ? options.sleepSpeedLimit : 0.1;

    /**
     * If the body has been sleepy for this sleepTimeLimit seconds, it is considered sleeping.
     * @property sleepTimeLimit
     * @type {Number}
     * @default 1
     */
    this.sleepTimeLimit = typeof(options.sleepTimeLimit) !== 'undefined' ? options.sleepTimeLimit : 1;

    this.timeLastSleepy = 0;

    this._wakeUpAfterNarrowphase = false;

    /**
     * World space rotational force on the body, around center of mass.
     * @property {Vec3} torque
     */
    this.torque = new Vec3();

    /**
     * World space orientation of the body.
     * @property quaternion
     * @type {Quaternion}
     */
    this.quaternion = new Quaternion();

    /**
     * @property initQuaternion
     * @type {Quaternion}
     */
    this.initQuaternion = new Quaternion();

    /**
     * @property {Quaternion} previousQuaternion
     */
    this.previousQuaternion = new Quaternion();

    /**
     * Interpolated orientation of the body.
     * @property {Quaternion} interpolatedQuaternion
     */
    this.interpolatedQuaternion = new Quaternion();

    if(options.quaternion){
        this.quaternion.copy(options.quaternion);
        this.initQuaternion.copy(options.quaternion);
        this.previousQuaternion.copy(options.quaternion);
        this.interpolatedQuaternion.copy(options.quaternion);
    }

    /**
     * Angular velocity of the body, in world space. Think of the angular velocity as a vector, which the body rotates around. The length of this vector determines how fast (in radians per second) the body rotates.
     * @property angularVelocity
     * @type {Vec3}
     */
    this.angularVelocity = new Vec3();

    if(options.angularVelocity){
        this.angularVelocity.copy(options.angularVelocity);
    }

    /**
     * @property initAngularVelocity
     * @type {Vec3}
     */
    this.initAngularVelocity = new Vec3();

    /**
     * @property shapes
     * @type {array}
     */
    this.shapes = [];

    /**
     * Position of each Shape in the body, given in local Body space.
     * @property shapeOffsets
     * @type {array}
     */
    this.shapeOffsets = [];

    /**
     * Orientation of each Shape, given in local Body space.
     * @property shapeOrientations
     * @type {array}
     */
    this.shapeOrientations = [];

    /**
     * @property inertia
     * @type {Vec3}
     */
    this.inertia = new Vec3();

    /**
     * @property {Vec3} invInertia
     */
    this.invInertia = new Vec3();

    /**
     * @property {Mat3} invInertiaWorld
     */
    this.invInertiaWorld = new Mat3();

    this.invMassSolve = 0;

    /**
     * @property {Vec3} invInertiaSolve
     */
    this.invInertiaSolve = new Vec3();

    /**
     * @property {Mat3} invInertiaWorldSolve
     */
    this.invInertiaWorldSolve = new Mat3();

    /**
     * Set to true if you don't want the body to rotate. Make sure to run .updateMassProperties() after changing this.
     * @property {Boolean} fixedRotation
     * @default false
     */
    this.fixedRotation = typeof(options.fixedRotation) !== "undefined" ? options.fixedRotation : false;

    /**
     * @property {Number} angularDamping
     */
    this.angularDamping = typeof(options.angularDamping) !== 'undefined' ? options.angularDamping : 0.01;

    /**
     * Use this property to limit the motion along any world axis. (1,1,1) will allow motion along all axes while (0,0,0) allows none.
     * @property {Vec3} linearFactor
     */
    this.linearFactor = new Vec3(1,1,1);
    if(options.linearFactor){
        this.linearFactor.copy(options.linearFactor);
    }

    /**
     * Use this property to limit the rotational motion along any world axis. (1,1,1) will allow rotation along all axes while (0,0,0) allows none.
     * @property {Vec3} angularFactor
     */
    this.angularFactor = new Vec3(1,1,1);
    if(options.angularFactor){
        this.angularFactor.copy(options.angularFactor);
    }

    /**
     * World space bounding box of the body and its shapes.
     * @property aabb
     * @type {AABB}
     */
    this.aabb = new AABB();

    /**
     * Indicates if the AABB needs to be updated before use.
     * @property aabbNeedsUpdate
     * @type {Boolean}
     */
    this.aabbNeedsUpdate = true;

    /**
     * Total bounding radius of the Body including its shapes, relative to body.position.
     * @property boundingRadius
     * @type {Number}
     */
    this.boundingRadius = 0;

    this.wlambda = new Vec3();

    if(options.shape){
        this.addShape(options.shape);
    }

    this.updateMassProperties();
}
Body.prototype = new EventTarget();
Body.prototype.constructor = Body;

/**
 * Dispatched after two bodies collide. This event is dispatched on each
 * of the two bodies involved in the collision.
 * @event collide
 * @param {Body} body The body that was involved in the collision.
 * @param {ContactEquation} contact The details of the collision.
 */
Body.COLLIDE_EVENT_NAME = "collide";

/**
 * A dynamic body is fully simulated. Can be moved manually by the user, but normally they move according to forces. A dynamic body can collide with all body types. A dynamic body always has finite, non-zero mass.
 * @static
 * @property DYNAMIC
 * @type {Number}
 */
Body.DYNAMIC = 1;

/**
 * A static body does not move during simulation and behaves as if it has infinite mass. Static bodies can be moved manually by setting the position of the body. The velocity of a static body is always zero. Static bodies do not collide with other static or kinematic bodies.
 * @static
 * @property STATIC
 * @type {Number}
 */
Body.STATIC = 2;

/**
 * A kinematic body moves under simulation according to its velocity. They do not respond to forces. They can be moved manually, but normally a kinematic body is moved by setting its velocity. A kinematic body behaves as if it has infinite mass. Kinematic bodies do not collide with other static or kinematic bodies.
 * @static
 * @property KINEMATIC
 * @type {Number}
 */
Body.KINEMATIC = 4;



/**
 * @static
 * @property AWAKE
 * @type {number}
 */
Body.AWAKE = 0;

/**
 * @static
 * @property SLEEPY
 * @type {number}
 */
Body.SLEEPY = 1;

/**
 * @static
 * @property SLEEPING
 * @type {number}
 */
Body.SLEEPING = 2;

Body.idCounter = 0;

/**
 * Dispatched after a sleeping body has woken up.
 * @event wakeup
 */
Body.wakeupEvent = {
    type: "wakeup"
};

/**
 * Wake the body up.
 * @method wakeUp
 */
Body.prototype.wakeUp = function(){
    var s = this.sleepState;
    this.sleepState = 0;
    this._wakeUpAfterNarrowphase = false;
    if(s === Body.SLEEPING){
        this.dispatchEvent(Body.wakeupEvent);
    }
};

/**
 * Force body sleep
 * @method sleep
 */
Body.prototype.sleep = function(){
    this.sleepState = Body.SLEEPING;
    this.velocity.set(0,0,0);
    this.angularVelocity.set(0,0,0);
    this._wakeUpAfterNarrowphase = false;
};

/**
 * Dispatched after a body has gone in to the sleepy state.
 * @event sleepy
 */
Body.sleepyEvent = {
    type: "sleepy"
};

/**
 * Dispatched after a body has fallen asleep.
 * @event sleep
 */
Body.sleepEvent = {
    type: "sleep"
};

/**
 * Called every timestep to update internal sleep timer and change sleep state if needed.
 * @method sleepTick
 * @param {Number} time The world time in seconds
 */
Body.prototype.sleepTick = function(time){
    if(this.allowSleep){
        var sleepState = this.sleepState;
        var speedSquared = this.velocity.norm2() + this.angularVelocity.norm2();
        var speedLimitSquared = Math.pow(this.sleepSpeedLimit,2);
        if(sleepState===Body.AWAKE && speedSquared < speedLimitSquared){
            this.sleepState = Body.SLEEPY; // Sleepy
            this.timeLastSleepy = time;
            this.dispatchEvent(Body.sleepyEvent);
        } else if(sleepState===Body.SLEEPY && speedSquared > speedLimitSquared){
            this.wakeUp(); // Wake up
        } else if(sleepState===Body.SLEEPY && (time - this.timeLastSleepy ) > this.sleepTimeLimit){
            this.sleep(); // Sleeping
            this.dispatchEvent(Body.sleepEvent);
        }
    }
};

/**
 * If the body is sleeping, it should be immovable / have infinite mass during solve. We solve it by having a separate "solve mass".
 * @method updateSolveMassProperties
 */
Body.prototype.updateSolveMassProperties = function(){
    if(this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC){
        this.invMassSolve = 0;
        this.invInertiaSolve.setZero();
        this.invInertiaWorldSolve.setZero();
    } else {
        this.invMassSolve = this.invMass;
        this.invInertiaSolve.copy(this.invInertia);
        this.invInertiaWorldSolve.copy(this.invInertiaWorld);
    }
};

/**
 * Convert a world point to local body frame.
 * @method pointToLocalFrame
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.pointToLocalFrame = function(worldPoint,result){
    var result = result || new Vec3();
    worldPoint.vsub(this.position,result);
    this.quaternion.conjugate().vmult(result,result);
    return result;
};

/**
 * Convert a world vector to local body frame.
 * @method vectorToLocalFrame
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.vectorToLocalFrame = function(worldVector, result){
    var result = result || new Vec3();
    this.quaternion.conjugate().vmult(worldVector,result);
    return result;
};

/**
 * Convert a local body point to world frame.
 * @method pointToWorldFrame
 * @param  {Vec3} localPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.pointToWorldFrame = function(localPoint,result){
    var result = result || new Vec3();
    this.quaternion.vmult(localPoint,result);
    result.vadd(this.position,result);
    return result;
};

/**
 * Convert a local body point to world frame.
 * @method vectorToWorldFrame
 * @param  {Vec3} localVector
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.vectorToWorldFrame = function(localVector, result){
    var result = result || new Vec3();
    this.quaternion.vmult(localVector, result);
    return result;
};

var tmpVec = new Vec3();
var tmpQuat = new Quaternion();

/**
 * Add a shape to the body with a local offset and orientation.
 * @method addShape
 * @param {Shape} shape
 * @param {Vec3} [_offset]
 * @param {Quaternion} [_orientation]
 * @return {Body} The body object, for chainability.
 */
Body.prototype.addShape = function(shape, _offset, _orientation){
    var offset = new Vec3();
    var orientation = new Quaternion();

    if(_offset){
        offset.copy(_offset);
    }
    if(_orientation){
        orientation.copy(_orientation);
    }

    this.shapes.push(shape);
    this.shapeOffsets.push(offset);
    this.shapeOrientations.push(orientation);
    this.updateMassProperties();
    this.updateBoundingRadius();

    this.aabbNeedsUpdate = true;

    shape.body = this;

    return this;
};

/**
 * Update the bounding radius of the body. Should be done if any of the shapes are changed.
 * @method updateBoundingRadius
 */
Body.prototype.updateBoundingRadius = function(){
    var shapes = this.shapes,
        shapeOffsets = this.shapeOffsets,
        N = shapes.length,
        radius = 0;

    for(var i=0; i!==N; i++){
        var shape = shapes[i];
        shape.updateBoundingSphereRadius();
        var offset = shapeOffsets[i].norm(),
            r = shape.boundingSphereRadius;
        if(offset + r > radius){
            radius = offset + r;
        }
    }

    this.boundingRadius = radius;
};

var computeAABB_shapeAABB = new AABB();

/**
 * Updates the .aabb
 * @method computeAABB
 * @todo rename to updateAABB()
 */
Body.prototype.computeAABB = function(){
    var shapes = this.shapes,
        shapeOffsets = this.shapeOffsets,
        shapeOrientations = this.shapeOrientations,
        N = shapes.length,
        offset = tmpVec,
        orientation = tmpQuat,
        bodyQuat = this.quaternion,
        aabb = this.aabb,
        shapeAABB = computeAABB_shapeAABB;

    for(var i=0; i!==N; i++){
        var shape = shapes[i];

        // Get shape world position
        bodyQuat.vmult(shapeOffsets[i], offset);
        offset.vadd(this.position, offset);

        // Get shape world quaternion
        shapeOrientations[i].mult(bodyQuat, orientation);

        // Get shape AABB
        shape.calculateWorldAABB(offset, orientation, shapeAABB.lowerBound, shapeAABB.upperBound);

        if(i === 0){
            aabb.copy(shapeAABB);
        } else {
            aabb.extend(shapeAABB);
        }
    }

    this.aabbNeedsUpdate = false;
};

var uiw_m1 = new Mat3(),
    uiw_m2 = new Mat3(),
    uiw_m3 = new Mat3();

/**
 * Update .inertiaWorld and .invInertiaWorld
 * @method updateInertiaWorld
 */
Body.prototype.updateInertiaWorld = function(force){
    var I = this.invInertia;
    if (I.x === I.y && I.y === I.z && !force) {
        // If inertia M = s*I, where I is identity and s a scalar, then
        //    R*M*R' = R*(s*I)*R' = s*R*I*R' = s*R*R' = s*I = M
        // where R is the rotation matrix.
        // In other words, we don't have to transform the inertia if all
        // inertia diagonal entries are equal.
    } else {
        var m1 = uiw_m1,
            m2 = uiw_m2,
            m3 = uiw_m3;
        m1.setRotationFromQuaternion(this.quaternion);
        m1.transpose(m2);
        m1.scale(I,m1);
        m1.mmult(m2,this.invInertiaWorld);
    }
};

/**
 * Apply force to a world point. This could for example be a point on the Body surface. Applying force this way will add to Body.force and Body.torque.
 * @method applyForce
 * @param  {Vec3} force The amount of force to add.
 * @param  {Vec3} relativePoint A point relative to the center of mass to apply the force on.
 */
var Body_applyForce_r = new Vec3();
var Body_applyForce_rotForce = new Vec3();
Body.prototype.applyForce = function(force,relativePoint){
    if(this.type !== Body.DYNAMIC){ // Needed?
        return;
    }

    // Compute produced rotational force
    var rotForce = Body_applyForce_rotForce;
    relativePoint.cross(force,rotForce);

    // Add linear force
    this.force.vadd(force,this.force);

    // Add rotational force
    this.torque.vadd(rotForce,this.torque);
};

/**
 * Apply force to a local point in the body.
 * @method applyLocalForce
 * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
 * @param  {Vec3} localPoint A local point in the body to apply the force on.
 */
var Body_applyLocalForce_worldForce = new Vec3();
var Body_applyLocalForce_relativePointWorld = new Vec3();
Body.prototype.applyLocalForce = function(localForce, localPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    var worldForce = Body_applyLocalForce_worldForce;
    var relativePointWorld = Body_applyLocalForce_relativePointWorld;

    // Transform the force vector to world space
    this.vectorToWorldFrame(localForce, worldForce);
    this.vectorToWorldFrame(localPoint, relativePointWorld);

    this.applyForce(worldForce, relativePointWorld);
};

/**
 * Apply impulse to a world point. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.
 * @method applyImpulse
 * @param  {Vec3} impulse The amount of impulse to add.
 * @param  {Vec3} relativePoint A point relative to the center of mass to apply the force on.
 */
var Body_applyImpulse_r = new Vec3();
var Body_applyImpulse_velo = new Vec3();
var Body_applyImpulse_rotVelo = new Vec3();
Body.prototype.applyImpulse = function(impulse, relativePoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    // Compute point position relative to the body center
    var r = relativePoint;

    // Compute produced central impulse velocity
    var velo = Body_applyImpulse_velo;
    velo.copy(impulse);
    velo.mult(this.invMass,velo);

    // Add linear impulse
    this.velocity.vadd(velo, this.velocity);

    // Compute produced rotational impulse velocity
    var rotVelo = Body_applyImpulse_rotVelo;
    r.cross(impulse,rotVelo);

    /*
    rotVelo.x *= this.invInertia.x;
    rotVelo.y *= this.invInertia.y;
    rotVelo.z *= this.invInertia.z;
    */
    this.invInertiaWorld.vmult(rotVelo,rotVelo);

    // Add rotational Impulse
    this.angularVelocity.vadd(rotVelo, this.angularVelocity);
};

/**
 * Apply locally-defined impulse to a local point in the body.
 * @method applyLocalImpulse
 * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
 * @param  {Vec3} localPoint A local point in the body to apply the force on.
 */
var Body_applyLocalImpulse_worldImpulse = new Vec3();
var Body_applyLocalImpulse_relativePoint = new Vec3();
Body.prototype.applyLocalImpulse = function(localImpulse, localPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    var worldImpulse = Body_applyLocalImpulse_worldImpulse;
    var relativePointWorld = Body_applyLocalImpulse_relativePoint;

    // Transform the force vector to world space
    this.vectorToWorldFrame(localImpulse, worldImpulse);
    this.vectorToWorldFrame(localPoint, relativePointWorld);

    this.applyImpulse(worldImpulse, relativePointWorld);
};

var Body_updateMassProperties_halfExtents = new Vec3();

/**
 * Should be called whenever you change the body shape or mass.
 * @method updateMassProperties
 */
Body.prototype.updateMassProperties = function(){
    var halfExtents = Body_updateMassProperties_halfExtents;

    this.invMass = this.mass > 0 ? 1.0 / this.mass : 0;
    var I = this.inertia;
    var fixed = this.fixedRotation;

    // Approximate with AABB box
    this.computeAABB();
    halfExtents.set(
        (this.aabb.upperBound.x-this.aabb.lowerBound.x) / 2,
        (this.aabb.upperBound.y-this.aabb.lowerBound.y) / 2,
        (this.aabb.upperBound.z-this.aabb.lowerBound.z) / 2
    );
    Box.calculateInertia(halfExtents, this.mass, I);

    this.invInertia.set(
        I.x > 0 && !fixed ? 1.0 / I.x : 0,
        I.y > 0 && !fixed ? 1.0 / I.y : 0,
        I.z > 0 && !fixed ? 1.0 / I.z : 0
    );
    this.updateInertiaWorld(true);
};

/**
 * Get world velocity of a point in the body.
 * @method getVelocityAtWorldPoint
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3} The result vector.
 */
Body.prototype.getVelocityAtWorldPoint = function(worldPoint, result){
    var r = new Vec3();
    worldPoint.vsub(this.position, r);
    this.angularVelocity.cross(r, result);
    this.velocity.vadd(result, result);
    return result;
};

var torque = new Vec3();
var invI_tau_dt = new Vec3();
var w = new Quaternion();
var wq = new Quaternion();

/**
 * Move the body forward in time.
 * @param {number} dt Time step
 * @param {boolean} quatNormalize Set to true to normalize the body quaternion
 * @param {boolean} quatNormalizeFast If the quaternion should be normalized using "fast" quaternion normalization
 */
Body.prototype.integrate = function(dt, quatNormalize, quatNormalizeFast){

    // Save previous position
    this.previousPosition.copy(this.position);
    this.previousQuaternion.copy(this.quaternion);

    if(!(this.type === Body.DYNAMIC || this.type === Body.KINEMATIC) || this.sleepState === Body.SLEEPING){ // Only for dynamic
        return;
    }

    var velo = this.velocity,
        angularVelo = this.angularVelocity,
        pos = this.position,
        force = this.force,
        torque = this.torque,
        quat = this.quaternion,
        invMass = this.invMass,
        invInertia = this.invInertiaWorld,
        linearFactor = this.linearFactor;

    var iMdt = invMass * dt;
    velo.x += force.x * iMdt * linearFactor.x;
    velo.y += force.y * iMdt * linearFactor.y;
    velo.z += force.z * iMdt * linearFactor.z;

    var e = invInertia.elements;
    var angularFactor = this.angularFactor;
    var tx = torque.x * angularFactor.x;
    var ty = torque.y * angularFactor.y;
    var tz = torque.z * angularFactor.z;
    angularVelo.x += dt * (e[0] * tx + e[1] * ty + e[2] * tz);
    angularVelo.y += dt * (e[3] * tx + e[4] * ty + e[5] * tz);
    angularVelo.z += dt * (e[6] * tx + e[7] * ty + e[8] * tz);

    // Use new velocity  - leap frog
    pos.x += velo.x * dt;
    pos.y += velo.y * dt;
    pos.z += velo.z * dt;

    quat.integrate(this.angularVelocity, dt, this.angularFactor, quat);

    if(quatNormalize){
        if(quatNormalizeFast){
            quat.normalizeFast();
        } else {
            quat.normalize();
        }
    }

    this.aabbNeedsUpdate = true;

    // Update world inertia
    this.updateInertiaWorld();
};

},{"../utils/EventTarget":"E7r9","../shapes/Shape":"Ggpt","../math/Vec3":"XG60","../math/Mat3":"etZO","../math/Quaternion":"bEmM","../material/Material":"JCSk","../collision/AABB":"78Lf","../shapes/Box":"o0NO"}],"zWST":[function(require,module,exports) {
module.exports = Plane;

var Shape = require('./Shape');
var Vec3 = require('../math/Vec3');

/**
 * A plane, facing in the Z direction. The plane has its surface at z=0 and everything below z=0 is assumed to be solid plane. To make the plane face in some other direction than z, you must put it inside a Body and rotate that body. See the demos.
 * @class Plane
 * @constructor
 * @extends Shape
 * @author schteppe
 */
function Plane(){
    Shape.call(this, {
        type: Shape.types.PLANE
    });

    // World oriented normal
    this.worldNormal = new Vec3();
    this.worldNormalNeedsUpdate = true;

    this.boundingSphereRadius = Number.MAX_VALUE;
}
Plane.prototype = new Shape();
Plane.prototype.constructor = Plane;

Plane.prototype.computeWorldNormal = function(quat){
    var n = this.worldNormal;
    n.set(0,0,1);
    quat.vmult(n,n);
    this.worldNormalNeedsUpdate = false;
};

Plane.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    return target;
};

Plane.prototype.volume = function(){
    return Number.MAX_VALUE; // The plane is infinite...
};

var tempNormal = new Vec3();
Plane.prototype.calculateWorldAABB = function(pos, quat, min, max){
    // The plane AABB is infinite, except if the normal is pointing along any axis
    tempNormal.set(0,0,1); // Default plane normal is z
    quat.vmult(tempNormal,tempNormal);
    var maxVal = Number.MAX_VALUE;
    min.set(-maxVal, -maxVal, -maxVal);
    max.set(maxVal, maxVal, maxVal);

    if(tempNormal.x === 1){ max.x = pos.x; }
    if(tempNormal.y === 1){ max.y = pos.y; }
    if(tempNormal.z === 1){ max.z = pos.z; }

    if(tempNormal.x === -1){ min.x = pos.x; }
    if(tempNormal.y === -1){ min.y = pos.y; }
    if(tempNormal.z === -1){ min.z = pos.z; }
};

Plane.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = Number.MAX_VALUE;
};
},{"./Shape":"Ggpt","../math/Vec3":"XG60"}],"ksz+":[function(require,module,exports) {
var Body = require('../objects/Body');
var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var Shape = require('../shapes/Shape');
var Plane = require('../shapes/Plane');

module.exports = Broadphase;

/**
 * Base class for broadphase implementations
 * @class Broadphase
 * @constructor
 * @author schteppe
 */
function Broadphase(){
    /**
    * The world to search for collisions in.
    * @property world
    * @type {World}
    */
    this.world = null;

    /**
     * If set to true, the broadphase uses bounding boxes for intersection test, else it uses bounding spheres.
     * @property useBoundingBoxes
     * @type {Boolean}
     */
    this.useBoundingBoxes = false;

    /**
     * Set to true if the objects in the world moved.
     * @property {Boolean} dirty
     */
    this.dirty = true;
}

/**
 * Get the collision pairs from the world
 * @method collisionPairs
 * @param {World} world The world to search in
 * @param {Array} p1 Empty array to be filled with body objects
 * @param {Array} p2 Empty array to be filled with body objects
 */
Broadphase.prototype.collisionPairs = function(world,p1,p2){
    throw new Error("collisionPairs not implemented for this BroadPhase class!");
};

/**
 * Check if a body pair needs to be intersection tested at all.
 * @method needBroadphaseCollision
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @return {bool}
 */
Broadphase.prototype.needBroadphaseCollision = function(bodyA,bodyB){

    // Check collision filter masks
    if( (bodyA.collisionFilterGroup & bodyB.collisionFilterMask)===0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask)===0){
        return false;
    }

    // Check types
    if(((bodyA.type & Body.STATIC)!==0 || bodyA.sleepState === Body.SLEEPING) &&
       ((bodyB.type & Body.STATIC)!==0 || bodyB.sleepState === Body.SLEEPING)) {
        // Both bodies are static or sleeping. Skip.
        return false;
    }

    return true;
};

/**
 * Check if the bounding volumes of two bodies intersect.
 * @method intersectionTest
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {array} pairs1
 * @param {array} pairs2
  */
Broadphase.prototype.intersectionTest = function(bodyA, bodyB, pairs1, pairs2){
    if(this.useBoundingBoxes){
        this.doBoundingBoxBroadphase(bodyA,bodyB,pairs1,pairs2);
    } else {
        this.doBoundingSphereBroadphase(bodyA,bodyB,pairs1,pairs2);
    }
};

/**
 * Check if the bounding spheres of two bodies are intersecting.
 * @method doBoundingSphereBroadphase
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Array} pairs1 bodyA is appended to this array if intersection
 * @param {Array} pairs2 bodyB is appended to this array if intersection
 */
var Broadphase_collisionPairs_r = new Vec3(), // Temp objects
    Broadphase_collisionPairs_normal =  new Vec3(),
    Broadphase_collisionPairs_quat =  new Quaternion(),
    Broadphase_collisionPairs_relpos  =  new Vec3();
Broadphase.prototype.doBoundingSphereBroadphase = function(bodyA,bodyB,pairs1,pairs2){
    var r = Broadphase_collisionPairs_r;
    bodyB.position.vsub(bodyA.position,r);
    var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
    var norm2 = r.norm2();
    if(norm2 < boundingRadiusSum2){
        pairs1.push(bodyA);
        pairs2.push(bodyB);
    }
};

/**
 * Check if the bounding boxes of two bodies are intersecting.
 * @method doBoundingBoxBroadphase
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
Broadphase.prototype.doBoundingBoxBroadphase = function(bodyA,bodyB,pairs1,pairs2){
    if(bodyA.aabbNeedsUpdate){
        bodyA.computeAABB();
    }
    if(bodyB.aabbNeedsUpdate){
        bodyB.computeAABB();
    }

    // Check AABB / AABB
    if(bodyA.aabb.overlaps(bodyB.aabb)){
        pairs1.push(bodyA);
        pairs2.push(bodyB);
    }
};

/**
 * Removes duplicate pairs from the pair arrays.
 * @method makePairsUnique
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
var Broadphase_makePairsUnique_temp = { keys:[] },
    Broadphase_makePairsUnique_p1 = [],
    Broadphase_makePairsUnique_p2 = [];
Broadphase.prototype.makePairsUnique = function(pairs1,pairs2){
    var t = Broadphase_makePairsUnique_temp,
        p1 = Broadphase_makePairsUnique_p1,
        p2 = Broadphase_makePairsUnique_p2,
        N = pairs1.length;

    for(var i=0; i!==N; i++){
        p1[i] = pairs1[i];
        p2[i] = pairs2[i];
    }

    pairs1.length = 0;
    pairs2.length = 0;

    for(var i=0; i!==N; i++){
        var id1 = p1[i].id,
            id2 = p2[i].id;
        var key = id1 < id2 ? id1+","+id2 :  id2+","+id1;
        t[key] = i;
        t.keys.push(key);
    }

    for(var i=0; i!==t.keys.length; i++){
        var key = t.keys.pop(),
            pairIndex = t[key];
        pairs1.push(p1[pairIndex]);
        pairs2.push(p2[pairIndex]);
        delete t[key];
    }
};

/**
 * To be implemented by subcasses
 * @method setWorld
 * @param {World} world
 */
Broadphase.prototype.setWorld = function(world){
};

/**
 * Check if the bounding spheres of two bodies overlap.
 * @method boundingSphereCheck
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @return {boolean}
 */
var bsc_dist = new Vec3();
Broadphase.boundingSphereCheck = function(bodyA,bodyB){
    var dist = bsc_dist;
    bodyA.position.vsub(bodyB.position,dist);
    return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius,2) > dist.norm2();
};

/**
 * Returns all the bodies within the AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param  {array} result An array to store resulting bodies in.
 * @return {array}
 */
Broadphase.prototype.aabbQuery = function(world, aabb, result){
    //.warn('.aabbQuery is not implemented in this Broadphase subclass.');
    return [];
};
},{"../objects/Body":"UPq9","../math/Vec3":"XG60","../math/Quaternion":"bEmM","../shapes/Shape":"Ggpt","../shapes/Plane":"zWST"}],"/p7L":[function(require,module,exports) {
module.exports = Constraint;

var Utils = require('../utils/Utils');

/**
 * Constraint base class
 * @class Constraint
 * @author schteppe
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {boolean} [options.collideConnected=true]
 * @param {boolean} [options.wakeUpBodies=true]
 */
function Constraint(bodyA, bodyB, options){
    options = Utils.defaults(options,{
        collideConnected : true,
        wakeUpBodies : true,
    });

    /**
     * Equations to be solved in this constraint
     * @property equations
     * @type {Array}
     */
    this.equations = [];

    /**
     * @property {Body} bodyA
     */
    this.bodyA = bodyA;

    /**
     * @property {Body} bodyB
     */
    this.bodyB = bodyB;

    /**
     * @property {Number} id
     */
    this.id = Constraint.idCounter++;

    /**
     * Set to true if you want the bodies to collide when they are connected.
     * @property collideConnected
     * @type {boolean}
     */
    this.collideConnected = options.collideConnected;

    if(options.wakeUpBodies){
        if(bodyA){
            bodyA.wakeUp();
        }
        if(bodyB){
            bodyB.wakeUp();
        }
    }
}

/**
 * Update all the equations with data.
 * @method update
 */
Constraint.prototype.update = function(){
    throw new Error("method update() not implmemented in this Constraint subclass!");
};

/**
 * Enables all equations in the constraint.
 * @method enable
 */
Constraint.prototype.enable = function(){
    var eqs = this.equations;
    for(var i=0; i<eqs.length; i++){
        eqs[i].enabled = true;
    }
};

/**
 * Disables all equations in the constraint.
 * @method disable
 */
Constraint.prototype.disable = function(){
    var eqs = this.equations;
    for(var i=0; i<eqs.length; i++){
        eqs[i].enabled = false;
    }
};

Constraint.idCounter = 0;

},{"../utils/Utils":"Yq2j"}],"xxex":[function(require,module,exports) {
module.exports = JacobianElement;

var Vec3 = require('./Vec3');

/**
 * An element containing 6 entries, 3 spatial and 3 rotational degrees of freedom.
 * @class JacobianElement
 * @constructor
 */
function JacobianElement(){

    /**
     * @property {Vec3} spatial
     */
    this.spatial = new Vec3();

    /**
     * @property {Vec3} rotational
     */
    this.rotational = new Vec3();
}

/**
 * Multiply with other JacobianElement
 * @method multiplyElement
 * @param  {JacobianElement} element
 * @return {Number}
 */
JacobianElement.prototype.multiplyElement = function(element){
    return element.spatial.dot(this.spatial) + element.rotational.dot(this.rotational);
};

/**
 * Multiply with two vectors
 * @method multiplyVectors
 * @param  {Vec3} spatial
 * @param  {Vec3} rotational
 * @return {Number}
 */
JacobianElement.prototype.multiplyVectors = function(spatial,rotational){
    return spatial.dot(this.spatial) + rotational.dot(this.rotational);
};

},{"./Vec3":"XG60"}],"m/dE":[function(require,module,exports) {
module.exports = Equation;

var JacobianElement = require('../math/JacobianElement'),
    Vec3 = require('../math/Vec3');

/**
 * Equation base class
 * @class Equation
 * @constructor
 * @author schteppe
 * @param {Body} bi
 * @param {Body} bj
 * @param {Number} minForce Minimum (read: negative max) force to be applied by the constraint.
 * @param {Number} maxForce Maximum (read: positive max) force to be applied by the constraint.
 */
function Equation(bi,bj,minForce,maxForce){
    this.id = Equation.id++;

    /**
     * @property {number} minForce
     */
    this.minForce = typeof(minForce)==="undefined" ? -1e6 : minForce;

    /**
     * @property {number} maxForce
     */
    this.maxForce = typeof(maxForce)==="undefined" ? 1e6 : maxForce;

    /**
     * @property bi
     * @type {Body}
     */
    this.bi = bi;

    /**
     * @property bj
     * @type {Body}
     */
    this.bj = bj;

    /**
     * SPOOK parameter
     * @property {number} a
     */
    this.a = 0.0;

    /**
     * SPOOK parameter
     * @property {number} b
     */
    this.b = 0.0;

    /**
     * SPOOK parameter
     * @property {number} eps
     */
    this.eps = 0.0;

    /**
     * @property {JacobianElement} jacobianElementA
     */
    this.jacobianElementA = new JacobianElement();

    /**
     * @property {JacobianElement} jacobianElementB
     */
    this.jacobianElementB = new JacobianElement();

    /**
     * @property {boolean} enabled
     * @default true
     */
    this.enabled = true;

    /**
     * A number, proportional to the force added to the bodies.
     * @property {number} multiplier
     * @readonly
     */
    this.multiplier = 0;

    // Set typical spook params
    this.setSpookParams(1e7,4,1/60);
}
Equation.prototype.constructor = Equation;

Equation.id = 0;

/**
 * Recalculates a,b,eps.
 * @method setSpookParams
 */
Equation.prototype.setSpookParams = function(stiffness,relaxation,timeStep){
    var d = relaxation,
        k = stiffness,
        h = timeStep;
    this.a = 4.0 / (h * (1 + 4 * d));
    this.b = (4.0 * d) / (1 + 4 * d);
    this.eps = 4.0 / (h * h * k * (1 + 4 * d));
};

/**
 * Computes the RHS of the SPOOK equation
 * @method computeB
 * @return {Number}
 */
Equation.prototype.computeB = function(a,b,h){
    var GW = this.computeGW(),
        Gq = this.computeGq(),
        GiMf = this.computeGiMf();
    return - Gq * a - GW * b - GiMf*h;
};

/**
 * Computes G*q, where q are the generalized body coordinates
 * @method computeGq
 * @return {Number}
 */
Equation.prototype.computeGq = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        xi = bi.position,
        xj = bj.position;
    return GA.spatial.dot(xi) + GB.spatial.dot(xj);
};

var zero = new Vec3();

/**
 * Computes G*W, where W are the body velocities
 * @method computeGW
 * @return {Number}
 */
Equation.prototype.computeGW = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        vi = bi.velocity,
        vj = bj.velocity,
        wi = bi.angularVelocity,
        wj = bj.angularVelocity;
    return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
};


/**
 * Computes G*Wlambda, where W are the body velocities
 * @method computeGWlambda
 * @return {Number}
 */
Equation.prototype.computeGWlambda = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        vi = bi.vlambda,
        vj = bj.vlambda,
        wi = bi.wlambda,
        wj = bj.wlambda;
    return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
};

/**
 * Computes G*inv(M)*f, where M is the mass matrix with diagonal blocks for each body, and f are the forces on the bodies.
 * @method computeGiMf
 * @return {Number}
 */
var iMfi = new Vec3(),
    iMfj = new Vec3(),
    invIi_vmult_taui = new Vec3(),
    invIj_vmult_tauj = new Vec3();
Equation.prototype.computeGiMf = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        fi = bi.force,
        ti = bi.torque,
        fj = bj.force,
        tj = bj.torque,
        invMassi = bi.invMassSolve,
        invMassj = bj.invMassSolve;

    fi.scale(invMassi,iMfi);
    fj.scale(invMassj,iMfj);

    bi.invInertiaWorldSolve.vmult(ti,invIi_vmult_taui);
    bj.invInertiaWorldSolve.vmult(tj,invIj_vmult_tauj);

    return GA.multiplyVectors(iMfi,invIi_vmult_taui) + GB.multiplyVectors(iMfj,invIj_vmult_tauj);
};

/**
 * Computes G*inv(M)*G'
 * @method computeGiMGt
 * @return {Number}
 */
var tmp = new Vec3();
Equation.prototype.computeGiMGt = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        invMassi = bi.invMassSolve,
        invMassj = bj.invMassSolve,
        invIi = bi.invInertiaWorldSolve,
        invIj = bj.invInertiaWorldSolve,
        result = invMassi + invMassj;

    invIi.vmult(GA.rotational,tmp);
    result += tmp.dot(GA.rotational);

    invIj.vmult(GB.rotational,tmp);
    result += tmp.dot(GB.rotational);

    return  result;
};

var addToWlambda_temp = new Vec3(),
    addToWlambda_Gi = new Vec3(),
    addToWlambda_Gj = new Vec3(),
    addToWlambda_ri = new Vec3(),
    addToWlambda_rj = new Vec3(),
    addToWlambda_Mdiag = new Vec3();

/**
 * Add constraint velocity to the bodies.
 * @method addToWlambda
 * @param {Number} deltalambda
 */
Equation.prototype.addToWlambda = function(deltalambda){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        temp = addToWlambda_temp;

    // Add to linear velocity
    // v_lambda += inv(M) * delta_lamba * G
    bi.vlambda.addScaledVector(bi.invMassSolve * deltalambda, GA.spatial, bi.vlambda);
    bj.vlambda.addScaledVector(bj.invMassSolve * deltalambda, GB.spatial, bj.vlambda);

    // Add to angular velocity
    bi.invInertiaWorldSolve.vmult(GA.rotational,temp);
    bi.wlambda.addScaledVector(deltalambda, temp, bi.wlambda);

    bj.invInertiaWorldSolve.vmult(GB.rotational,temp);
    bj.wlambda.addScaledVector(deltalambda, temp, bj.wlambda);
};

/**
 * Compute the denominator part of the SPOOK equation: C = G*inv(M)*G' + eps
 * @method computeInvC
 * @param  {Number} eps
 * @return {Number}
 */
Equation.prototype.computeC = function(){
    return this.computeGiMGt() + this.eps;
};

},{"../math/JacobianElement":"xxex","../math/Vec3":"XG60"}],"waBd":[function(require,module,exports) {
module.exports = ContactEquation;

var Equation = require('./Equation');
var Vec3 = require('../math/Vec3');
var Mat3 = require('../math/Mat3');

/**
 * Contact/non-penetration constraint equation
 * @class ContactEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @extends Equation
 */
function ContactEquation(bodyA, bodyB, maxForce){
    maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;
    Equation.call(this, bodyA, bodyB, 0, maxForce);

    /**
     * @property restitution
     * @type {Number}
     */
    this.restitution = 0.0; // "bounciness": u1 = -e*u0

    /**
     * World-oriented vector that goes from the center of bi to the contact point.
     * @property {Vec3} ri
     */
    this.ri = new Vec3();

    /**
     * World-oriented vector that starts in body j position and goes to the contact point.
     * @property {Vec3} rj
     */
    this.rj = new Vec3();

    /**
     * Contact normal, pointing out of body i.
     * @property {Vec3} ni
     */
    this.ni = new Vec3();
}

ContactEquation.prototype = new Equation();
ContactEquation.prototype.constructor = ContactEquation;

var ContactEquation_computeB_temp1 = new Vec3(); // Temp vectors
var ContactEquation_computeB_temp2 = new Vec3();
var ContactEquation_computeB_temp3 = new Vec3();
ContactEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,
        ri = this.ri,
        rj = this.rj,
        rixn = ContactEquation_computeB_temp1,
        rjxn = ContactEquation_computeB_temp2,

        vi = bi.velocity,
        wi = bi.angularVelocity,
        fi = bi.force,
        taui = bi.torque,

        vj = bj.velocity,
        wj = bj.angularVelocity,
        fj = bj.force,
        tauj = bj.torque,

        penetrationVec = ContactEquation_computeB_temp3,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB,

        n = this.ni;

    // Caluclate cross products
    ri.cross(n,rixn);
    rj.cross(n,rjxn);

    // g = xj+rj -(xi+ri)
    // G = [ -ni  -rixn  ni  rjxn ]
    n.negate(GA.spatial);
    rixn.negate(GA.rotational);
    GB.spatial.copy(n);
    GB.rotational.copy(rjxn);

    // Calculate the penetration vector
    penetrationVec.copy(bj.position);
    penetrationVec.vadd(rj,penetrationVec);
    penetrationVec.vsub(bi.position,penetrationVec);
    penetrationVec.vsub(ri,penetrationVec);

    var g = n.dot(penetrationVec);

    // Compute iteration
    var ePlusOne = this.restitution + 1;
    var GW = ePlusOne * vj.dot(n) - ePlusOne * vi.dot(n) + wj.dot(rjxn) - wi.dot(rixn);
    var GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h*GiMf;

    return B;
};

var ContactEquation_getImpactVelocityAlongNormal_vi = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_vj = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_xi = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_xj = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_relVel = new Vec3();

/**
 * Get the current relative velocity in the contact point.
 * @method getImpactVelocityAlongNormal
 * @return {number}
 */
ContactEquation.prototype.getImpactVelocityAlongNormal = function(){
    var vi = ContactEquation_getImpactVelocityAlongNormal_vi;
    var vj = ContactEquation_getImpactVelocityAlongNormal_vj;
    var xi = ContactEquation_getImpactVelocityAlongNormal_xi;
    var xj = ContactEquation_getImpactVelocityAlongNormal_xj;
    var relVel = ContactEquation_getImpactVelocityAlongNormal_relVel;

    this.bi.position.vadd(this.ri, xi);
    this.bj.position.vadd(this.rj, xj);

    this.bi.getVelocityAtWorldPoint(xi, vi);
    this.bj.getVelocityAtWorldPoint(xj, vj);

    vi.vsub(vj, relVel);

    return this.ni.dot(relVel);
};


},{"./Equation":"m/dE","../math/Vec3":"XG60","../math/Mat3":"etZO"}],"Pzss":[function(require,module,exports) {
var Vec3 = require('../math/Vec3');

module.exports = RaycastResult;

/**
 * Storage for Ray casting data.
 * @class RaycastResult
 * @constructor
 */
function RaycastResult(){

	/**
	 * @property {Vec3} rayFromWorld
	 */
	this.rayFromWorld = new Vec3();

	/**
	 * @property {Vec3} rayToWorld
	 */
	this.rayToWorld = new Vec3();

	/**
	 * @property {Vec3} hitNormalWorld
	 */
	this.hitNormalWorld = new Vec3();

	/**
	 * @property {Vec3} hitPointWorld
	 */
	this.hitPointWorld = new Vec3();

	/**
	 * @property {boolean} hasHit
	 */
	this.hasHit = false;

	/**
	 * The hit shape, or null.
	 * @property {Shape} shape
	 */
	this.shape = null;

	/**
	 * The hit body, or null.
	 * @property {Body} body
	 */
	this.body = null;

	/**
	 * The index of the hit triangle, if the hit shape was a trimesh.
	 * @property {number} hitFaceIndex
	 * @default -1
	 */
	this.hitFaceIndex = -1;

	/**
	 * Distance to the hit. Will be set to -1 if there was no hit.
	 * @property {number} distance
	 * @default -1
	 */
	this.distance = -1;

	/**
	 * If the ray should stop traversing the bodies.
	 * @private
	 * @property {Boolean} _shouldStop
	 * @default false
	 */
	this._shouldStop = false;
}

/**
 * Reset all result data.
 * @method reset
 */
RaycastResult.prototype.reset = function () {
	this.rayFromWorld.setZero();
	this.rayToWorld.setZero();
	this.hitNormalWorld.setZero();
	this.hitPointWorld.setZero();
	this.hasHit = false;
	this.shape = null;
	this.body = null;
	this.hitFaceIndex = -1;
	this.distance = -1;
	this._shouldStop = false;
};

/**
 * @method abort
 */
RaycastResult.prototype.abort = function(){
	this._shouldStop = true;
};

/**
 * @method set
 * @param {Vec3} rayFromWorld
 * @param {Vec3} rayToWorld
 * @param {Vec3} hitNormalWorld
 * @param {Vec3} hitPointWorld
 * @param {Shape} shape
 * @param {Body} body
 * @param {number} distance
 */
RaycastResult.prototype.set = function(
	rayFromWorld,
	rayToWorld,
	hitNormalWorld,
	hitPointWorld,
	shape,
	body,
	distance
){
	this.rayFromWorld.copy(rayFromWorld);
	this.rayToWorld.copy(rayToWorld);
	this.hitNormalWorld.copy(hitNormalWorld);
	this.hitPointWorld.copy(hitPointWorld);
	this.shape = shape;
	this.body = body;
	this.distance = distance;
};
},{"../math/Vec3":"XG60"}],"CqEM":[function(require,module,exports) {
module.exports = Ray;

var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var Transform = require('../math/Transform');
var ConvexPolyhedron = require('../shapes/ConvexPolyhedron');
var Box = require('../shapes/Box');
var RaycastResult = require('../collision/RaycastResult');
var Shape = require('../shapes/Shape');
var AABB = require('../collision/AABB');

/**
 * A line in 3D space that intersects bodies and return points.
 * @class Ray
 * @constructor
 * @param {Vec3} from
 * @param {Vec3} to
 */
function Ray(from, to){
    /**
     * @property {Vec3} from
     */
    this.from = from ? from.clone() : new Vec3();

    /**
     * @property {Vec3} to
     */
    this.to = to ? to.clone() : new Vec3();

    /**
     * @private
     * @property {Vec3} _direction
     */
    this._direction = new Vec3();

    /**
     * The precision of the ray. Used when checking parallelity etc.
     * @property {Number} precision
     */
    this.precision = 0.0001;

    /**
     * Set to true if you want the Ray to take .collisionResponse flags into account on bodies and shapes.
     * @property {Boolean} checkCollisionResponse
     */
    this.checkCollisionResponse = true;

    /**
     * If set to true, the ray skips any hits with normal.dot(rayDirection) < 0.
     * @property {Boolean} skipBackfaces
     */
    this.skipBackfaces = false;

    /**
     * @property {number} collisionFilterMask
     * @default -1
     */
    this.collisionFilterMask = -1;

    /**
     * @property {number} collisionFilterGroup
     * @default -1
     */
    this.collisionFilterGroup = -1;

    /**
     * The intersection mode. Should be Ray.ANY, Ray.ALL or Ray.CLOSEST.
     * @property {number} mode
     */
    this.mode = Ray.ANY;

    /**
     * Current result object.
     * @property {RaycastResult} result
     */
    this.result = new RaycastResult();

    /**
     * Will be set to true during intersectWorld() if the ray hit anything.
     * @property {Boolean} hasHit
     */
    this.hasHit = false;

    /**
     * Current, user-provided result callback. Will be used if mode is Ray.ALL.
     * @property {Function} callback
     */
    this.callback = function(result){};
}
Ray.prototype.constructor = Ray;

Ray.CLOSEST = 1;
Ray.ANY = 2;
Ray.ALL = 4;

var tmpAABB = new AABB();
var tmpArray = [];

/**
 * Do itersection against all bodies in the given World.
 * @method intersectWorld
 * @param  {World} world
 * @param  {object} options
 * @return {Boolean} True if the ray hit anything, otherwise false.
 */
Ray.prototype.intersectWorld = function (world, options) {
    this.mode = options.mode || Ray.ANY;
    this.result = options.result || new RaycastResult();
    this.skipBackfaces = !!options.skipBackfaces;
    this.collisionFilterMask = typeof(options.collisionFilterMask) !== 'undefined' ? options.collisionFilterMask : -1;
    this.collisionFilterGroup = typeof(options.collisionFilterGroup) !== 'undefined' ? options.collisionFilterGroup : -1;
    if(options.from){
        this.from.copy(options.from);
    }
    if(options.to){
        this.to.copy(options.to);
    }
    this.callback = options.callback || function(){};
    this.hasHit = false;

    this.result.reset();
    this._updateDirection();

    this.getAABB(tmpAABB);
    tmpArray.length = 0;
    world.broadphase.aabbQuery(world, tmpAABB, tmpArray);
    this.intersectBodies(tmpArray);

    return this.hasHit;
};

var v1 = new Vec3(),
    v2 = new Vec3();

/*
 * As per "Barycentric Technique" as named here http://www.blackpawn.com/texts/pointinpoly/default.html But without the division
 */
Ray.pointInTriangle = pointInTriangle;
function pointInTriangle(p, a, b, c) {
    c.vsub(a,v0);
    b.vsub(a,v1);
    p.vsub(a,v2);

    var dot00 = v0.dot( v0 );
    var dot01 = v0.dot( v1 );
    var dot02 = v0.dot( v2 );
    var dot11 = v1.dot( v1 );
    var dot12 = v1.dot( v2 );

    var u,v;

    return  ( (u = dot11 * dot02 - dot01 * dot12) >= 0 ) &&
            ( (v = dot00 * dot12 - dot01 * dot02) >= 0 ) &&
            ( u + v < ( dot00 * dot11 - dot01 * dot01 ) );
}

/**
 * Shoot a ray at a body, get back information about the hit.
 * @method intersectBody
 * @private
 * @param {Body} body
 * @param {RaycastResult} [result] Deprecated - set the result property of the Ray instead.
 */
var intersectBody_xi = new Vec3();
var intersectBody_qi = new Quaternion();
Ray.prototype.intersectBody = function (body, result) {
    if(result){
        this.result = result;
        this._updateDirection();
    }
    var checkCollisionResponse = this.checkCollisionResponse;

    if(checkCollisionResponse && !body.collisionResponse){
        return;
    }

    if((this.collisionFilterGroup & body.collisionFilterMask)===0 || (body.collisionFilterGroup & this.collisionFilterMask)===0){
        return;
    }

    var xi = intersectBody_xi;
    var qi = intersectBody_qi;

    for (var i = 0, N = body.shapes.length; i < N; i++) {
        var shape = body.shapes[i];

        if(checkCollisionResponse && !shape.collisionResponse){
            continue; // Skip
        }

        body.quaternion.mult(body.shapeOrientations[i], qi);
        body.quaternion.vmult(body.shapeOffsets[i], xi);
        xi.vadd(body.position, xi);

        this.intersectShape(
            shape,
            qi,
            xi,
            body
        );

        if(this.result._shouldStop){
            break;
        }
    }
};

/**
 * @method intersectBodies
 * @param {Array} bodies An array of Body objects.
 * @param {RaycastResult} [result] Deprecated
 */
Ray.prototype.intersectBodies = function (bodies, result) {
    if(result){
        this.result = result;
        this._updateDirection();
    }

    for ( var i = 0, l = bodies.length; !this.result._shouldStop && i < l; i ++ ) {
        this.intersectBody(bodies[i]);
    }
};

/**
 * Updates the _direction vector.
 * @private
 * @method _updateDirection
 */
Ray.prototype._updateDirection = function(){
    this.to.vsub(this.from, this._direction);
    this._direction.normalize();
};

/**
 * @method intersectShape
 * @private
 * @param {Shape} shape
 * @param {Quaternion} quat
 * @param {Vec3} position
 * @param {Body} body
 */
Ray.prototype.intersectShape = function(shape, quat, position, body){
    var from = this.from;


    // Checking boundingSphere
    var distance = distanceFromIntersection(from, this._direction, position);
    if ( distance > shape.boundingSphereRadius ) {
        return;
    }

    var intersectMethod = this[shape.type];
    if(intersectMethod){
        intersectMethod.call(this, shape, quat, position, body, shape);
    }
};

var vector = new Vec3();
var normal = new Vec3();
var intersectPoint = new Vec3();

var a = new Vec3();
var b = new Vec3();
var c = new Vec3();
var d = new Vec3();

var tmpRaycastResult = new RaycastResult();

/**
 * @method intersectBox
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectBox = function(shape, quat, position, body, reportedShape){
    return this.intersectConvex(shape.convexPolyhedronRepresentation, quat, position, body, reportedShape);
};
Ray.prototype[Shape.types.BOX] = Ray.prototype.intersectBox;

/**
 * @method intersectPlane
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectPlane = function(shape, quat, position, body, reportedShape){
    var from = this.from;
    var to = this.to;
    var direction = this._direction;

    // Get plane normal
    var worldNormal = new Vec3(0, 0, 1);
    quat.vmult(worldNormal, worldNormal);

    var len = new Vec3();
    from.vsub(position, len);
    var planeToFrom = len.dot(worldNormal);
    to.vsub(position, len);
    var planeToTo = len.dot(worldNormal);

    if(planeToFrom * planeToTo > 0){
        // "from" and "to" are on the same side of the plane... bail out
        return;
    }

    if(from.distanceTo(to) < planeToFrom){
        return;
    }

    var n_dot_dir = worldNormal.dot(direction);

    if (Math.abs(n_dot_dir) < this.precision) {
        // No intersection
        return;
    }

    var planePointToFrom = new Vec3();
    var dir_scaled_with_t = new Vec3();
    var hitPointWorld = new Vec3();

    from.vsub(position, planePointToFrom);
    var t = -worldNormal.dot(planePointToFrom) / n_dot_dir;
    direction.scale(t, dir_scaled_with_t);
    from.vadd(dir_scaled_with_t, hitPointWorld);

    this.reportIntersection(worldNormal, hitPointWorld, reportedShape, body, -1);
};
Ray.prototype[Shape.types.PLANE] = Ray.prototype.intersectPlane;

/**
 * Get the world AABB of the ray.
 * @method getAABB
 * @param  {AABB} aabb
 */
Ray.prototype.getAABB = function(result){
    var to = this.to;
    var from = this.from;
    result.lowerBound.x = Math.min(to.x, from.x);
    result.lowerBound.y = Math.min(to.y, from.y);
    result.lowerBound.z = Math.min(to.z, from.z);
    result.upperBound.x = Math.max(to.x, from.x);
    result.upperBound.y = Math.max(to.y, from.y);
    result.upperBound.z = Math.max(to.z, from.z);
};

var intersectConvexOptions = {
    faceList: [0]
};
var worldPillarOffset = new Vec3();
var intersectHeightfield_localRay = new Ray();
var intersectHeightfield_index = [];
var intersectHeightfield_minMax = [];

/**
 * @method intersectHeightfield
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectHeightfield = function(shape, quat, position, body, reportedShape){
    var data = shape.data,
        w = shape.elementSize;

    // Convert the ray to local heightfield coordinates
    var localRay = intersectHeightfield_localRay; //new Ray(this.from, this.to);
    localRay.from.copy(this.from);
    localRay.to.copy(this.to);
    Transform.pointToLocalFrame(position, quat, localRay.from, localRay.from);
    Transform.pointToLocalFrame(position, quat, localRay.to, localRay.to);
    localRay._updateDirection();

    // Get the index of the data points to test against
    var index = intersectHeightfield_index;
    var iMinX, iMinY, iMaxX, iMaxY;

    // Set to max
    iMinX = iMinY = 0;
    iMaxX = iMaxY = shape.data.length - 1;

    var aabb = new AABB();
    localRay.getAABB(aabb);

    shape.getIndexOfPosition(aabb.lowerBound.x, aabb.lowerBound.y, index, true);
    iMinX = Math.max(iMinX, index[0]);
    iMinY = Math.max(iMinY, index[1]);
    shape.getIndexOfPosition(aabb.upperBound.x, aabb.upperBound.y, index, true);
    iMaxX = Math.min(iMaxX, index[0] + 1);
    iMaxY = Math.min(iMaxY, index[1] + 1);

    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            if(this.result._shouldStop){
                return;
            }

            shape.getAabbAtIndex(i, j, aabb);
            if(!aabb.overlapsRay(localRay)){
                continue;
            }

            // Lower triangle
            shape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, reportedShape, intersectConvexOptions);

            if(this.result._shouldStop){
                return;
            }

            // Upper triangle
            shape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, reportedShape, intersectConvexOptions);
        }
    }
};
Ray.prototype[Shape.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;

var Ray_intersectSphere_intersectionPoint = new Vec3();
var Ray_intersectSphere_normal = new Vec3();

/**
 * @method intersectSphere
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectSphere = function(shape, quat, position, body, reportedShape){
    var from = this.from,
        to = this.to,
        r = shape.radius;

    var a = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2) + Math.pow(to.z - from.z, 2);
    var b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y) + (to.z - from.z) * (from.z - position.z));
    var c = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) + Math.pow(from.z - position.z, 2) - Math.pow(r, 2);

    var delta = Math.pow(b, 2) - 4 * a * c;

    var intersectionPoint = Ray_intersectSphere_intersectionPoint;
    var normal = Ray_intersectSphere_normal;

    if(delta < 0){
        // No intersection
        return;

    } else if(delta === 0){
        // single intersection point
        from.lerp(to, delta, intersectionPoint);

        intersectionPoint.vsub(position, normal);
        normal.normalize();

        this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);

    } else {
        var d1 = (- b - Math.sqrt(delta)) / (2 * a);
        var d2 = (- b + Math.sqrt(delta)) / (2 * a);

        if(d1 >= 0 && d1 <= 1){
            from.lerp(to, d1, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);
        }

        if(this.result._shouldStop){
            return;
        }

        if(d2 >= 0 && d2 <= 1){
            from.lerp(to, d2, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);
        }
    }
};
Ray.prototype[Shape.types.SPHERE] = Ray.prototype.intersectSphere;


var intersectConvex_normal = new Vec3();
var intersectConvex_minDistNormal = new Vec3();
var intersectConvex_minDistIntersect = new Vec3();
var intersectConvex_vector = new Vec3();

/**
 * @method intersectConvex
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 * @param {object} [options]
 * @param {array} [options.faceList]
 */
Ray.prototype.intersectConvex = function intersectConvex(
    shape,
    quat,
    position,
    body,
    reportedShape,
    options
){
    var minDistNormal = intersectConvex_minDistNormal;
    var normal = intersectConvex_normal;
    var vector = intersectConvex_vector;
    var minDistIntersect = intersectConvex_minDistIntersect;
    var faceList = (options && options.faceList) || null;

    // Checking faces
    var faces = shape.faces,
        vertices = shape.vertices,
        normals = shape.faceNormals;
    var direction = this._direction;

    var from = this.from;
    var to = this.to;
    var fromToDistance = from.distanceTo(to);

    var minDist = -1;
    var Nfaces = faceList ? faceList.length : faces.length;
    var result = this.result;

    for (var j = 0; !result._shouldStop && j < Nfaces; j++) {
        var fi = faceList ? faceList[j] : j;

        var face = faces[fi];
        var faceNormal = normals[fi];
        var q = quat;
        var x = position;

        // determine if ray intersects the plane of the face
        // note: this works regardless of the direction of the face normal

        // Get plane point in world coordinates...
        vector.copy(vertices[face[0]]);
        q.vmult(vector,vector);
        vector.vadd(x,vector);

        // ...but make it relative to the ray from. We'll fix this later.
        vector.vsub(from,vector);

        // Get plane normal
        q.vmult(faceNormal,normal);

        // If this dot product is negative, we have something interesting
        var dot = direction.dot(normal);

        // Bail out if ray and plane are parallel
        if ( Math.abs( dot ) < this.precision ){
            continue;
        }

        // calc distance to plane
        var scalar = normal.dot(vector) / dot;

        // if negative distance, then plane is behind ray
        if (scalar < 0){
            continue;
        }

        // if (dot < 0) {

        // Intersection point is from + direction * scalar
        direction.mult(scalar,intersectPoint);
        intersectPoint.vadd(from,intersectPoint);

        // a is the point we compare points b and c with.
        a.copy(vertices[face[0]]);
        q.vmult(a,a);
        x.vadd(a,a);

        for(var i = 1; !result._shouldStop && i < face.length - 1; i++){
            // Transform 3 vertices to world coords
            b.copy(vertices[face[i]]);
            c.copy(vertices[face[i+1]]);
            q.vmult(b,b);
            q.vmult(c,c);
            x.vadd(b,b);
            x.vadd(c,c);

            var distance = intersectPoint.distanceTo(from);

            if(!(pointInTriangle(intersectPoint, a, b, c) || pointInTriangle(intersectPoint, b, a, c)) || distance > fromToDistance){
                continue;
            }

            this.reportIntersection(normal, intersectPoint, reportedShape, body, fi);
        }
        // }
    }
};
Ray.prototype[Shape.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;

var intersectTrimesh_normal = new Vec3();
var intersectTrimesh_localDirection = new Vec3();
var intersectTrimesh_localFrom = new Vec3();
var intersectTrimesh_localTo = new Vec3();
var intersectTrimesh_worldNormal = new Vec3();
var intersectTrimesh_worldIntersectPoint = new Vec3();
var intersectTrimesh_localAABB = new AABB();
var intersectTrimesh_triangles = [];
var intersectTrimesh_treeTransform = new Transform();

/**
 * @method intersectTrimesh
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 * @param {object} [options]
 * @todo Optimize by transforming the world to local space first.
 * @todo Use Octree lookup
 */
Ray.prototype.intersectTrimesh = function intersectTrimesh(
    mesh,
    quat,
    position,
    body,
    reportedShape,
    options
){
    var normal = intersectTrimesh_normal;
    var triangles = intersectTrimesh_triangles;
    var treeTransform = intersectTrimesh_treeTransform;
    var minDistNormal = intersectConvex_minDistNormal;
    var vector = intersectConvex_vector;
    var minDistIntersect = intersectConvex_minDistIntersect;
    var localAABB = intersectTrimesh_localAABB;
    var localDirection = intersectTrimesh_localDirection;
    var localFrom = intersectTrimesh_localFrom;
    var localTo = intersectTrimesh_localTo;
    var worldIntersectPoint = intersectTrimesh_worldIntersectPoint;
    var worldNormal = intersectTrimesh_worldNormal;
    var faceList = (options && options.faceList) || null;

    // Checking faces
    var indices = mesh.indices,
        vertices = mesh.vertices,
        normals = mesh.faceNormals;

    var from = this.from;
    var to = this.to;
    var direction = this._direction;

    var minDist = -1;
    treeTransform.position.copy(position);
    treeTransform.quaternion.copy(quat);

    // Transform ray to local space!
    Transform.vectorToLocalFrame(position, quat, direction, localDirection);
    Transform.pointToLocalFrame(position, quat, from, localFrom);
    Transform.pointToLocalFrame(position, quat, to, localTo);

    localTo.x *= mesh.scale.x;
    localTo.y *= mesh.scale.y;
    localTo.z *= mesh.scale.z;
    localFrom.x *= mesh.scale.x;
    localFrom.y *= mesh.scale.y;
    localFrom.z *= mesh.scale.z;

    localTo.vsub(localFrom, localDirection);
    localDirection.normalize();

    var fromToDistanceSquared = localFrom.distanceSquared(localTo);

    mesh.tree.rayQuery(this, treeTransform, triangles);

    for (var i = 0, N = triangles.length; !this.result._shouldStop && i !== N; i++) {
        var trianglesIndex = triangles[i];

        mesh.getNormal(trianglesIndex, normal);

        // determine if ray intersects the plane of the face
        // note: this works regardless of the direction of the face normal

        // Get plane point in world coordinates...
        mesh.getVertex(indices[trianglesIndex * 3], a);

        // ...but make it relative to the ray from. We'll fix this later.
        a.vsub(localFrom,vector);

        // If this dot product is negative, we have something interesting
        var dot = localDirection.dot(normal);

        // Bail out if ray and plane are parallel
        // if (Math.abs( dot ) < this.precision){
        //     continue;
        // }

        // calc distance to plane
        var scalar = normal.dot(vector) / dot;

        // if negative distance, then plane is behind ray
        if (scalar < 0){
            continue;
        }

        // Intersection point is from + direction * scalar
        localDirection.scale(scalar,intersectPoint);
        intersectPoint.vadd(localFrom,intersectPoint);

        // Get triangle vertices
        mesh.getVertex(indices[trianglesIndex * 3 + 1], b);
        mesh.getVertex(indices[trianglesIndex * 3 + 2], c);

        var squaredDistance = intersectPoint.distanceSquared(localFrom);

        if(!(pointInTriangle(intersectPoint, b, a, c) || pointInTriangle(intersectPoint, a, b, c)) || squaredDistance > fromToDistanceSquared){
            continue;
        }

        // transform intersectpoint and normal to world
        Transform.vectorToWorldFrame(quat, normal, worldNormal);
        Transform.pointToWorldFrame(position, quat, intersectPoint, worldIntersectPoint);
        this.reportIntersection(worldNormal, worldIntersectPoint, reportedShape, body, trianglesIndex);
    }
    triangles.length = 0;
};
Ray.prototype[Shape.types.TRIMESH] = Ray.prototype.intersectTrimesh;


/**
 * @method reportIntersection
 * @private
 * @param  {Vec3} normal
 * @param  {Vec3} hitPointWorld
 * @param  {Shape} shape
 * @param  {Body} body
 * @return {boolean} True if the intersections should continue
 */
Ray.prototype.reportIntersection = function(normal, hitPointWorld, shape, body, hitFaceIndex){
    var from = this.from;
    var to = this.to;
    var distance = from.distanceTo(hitPointWorld);
    var result = this.result;

    // Skip back faces?
    if(this.skipBackfaces && normal.dot(this._direction) > 0){
        return;
    }

    result.hitFaceIndex = typeof(hitFaceIndex) !== 'undefined' ? hitFaceIndex : -1;

    switch(this.mode){
    case Ray.ALL:
        this.hasHit = true;
        result.set(
            from,
            to,
            normal,
            hitPointWorld,
            shape,
            body,
            distance
        );
        result.hasHit = true;
        this.callback(result);
        break;

    case Ray.CLOSEST:

        // Store if closer than current closest
        if(distance < result.distance || !result.hasHit){
            this.hasHit = true;
            result.hasHit = true;
            result.set(
                from,
                to,
                normal,
                hitPointWorld,
                shape,
                body,
                distance
            );
        }
        break;

    case Ray.ANY:

        // Report and stop.
        this.hasHit = true;
        result.hasHit = true;
        result.set(
            from,
            to,
            normal,
            hitPointWorld,
            shape,
            body,
            distance
        );
        result._shouldStop = true;
        break;
    }
};

var v0 = new Vec3(),
    intersect = new Vec3();
function distanceFromIntersection(from, direction, position) {

    // v0 is vector from from to position
    position.vsub(from,v0);
    var dot = v0.dot(direction);

    // intersect = direction*dot + from
    direction.mult(dot,intersect);
    intersect.vadd(from,intersect);

    var distance = position.distanceTo(intersect);

    return distance;
}


},{"../math/Vec3":"XG60","../math/Quaternion":"bEmM","../math/Transform":"CcAe","../shapes/ConvexPolyhedron":"1+Yp","../shapes/Box":"o0NO","../collision/RaycastResult":"Pzss","../shapes/Shape":"Ggpt","../collision/AABB":"78Lf"}],"n/aQ":[function(require,module,exports) {
module.exports = Solver;

/**
 * Constraint equation solver base class.
 * @class Solver
 * @constructor
 * @author schteppe / https://github.com/schteppe
 */
function Solver(){
    /**
     * All equations to be solved
     * @property {Array} equations
     */
    this.equations = [];
}

/**
 * Should be implemented in subclasses!
 * @method solve
 * @param  {Number} dt
 * @param  {World} world
 */
Solver.prototype.solve = function(dt,world){
    // Should return the number of iterations done!
    return 0;
};

/**
 * Add an equation
 * @method addEquation
 * @param {Equation} eq
 */
Solver.prototype.addEquation = function(eq){
    if (eq.enabled) {
        this.equations.push(eq);
    }
};

/**
 * Remove an equation
 * @method removeEquation
 * @param {Equation} eq
 */
Solver.prototype.removeEquation = function(eq){
    var eqs = this.equations;
    var i = eqs.indexOf(eq);
    if(i !== -1){
        eqs.splice(i,1);
    }
};

/**
 * Add all equations
 * @method removeAllEquations
 */
Solver.prototype.removeAllEquations = function(){
    this.equations.length = 0;
};


},{}],"/qMa":[function(require,module,exports) {
module.exports = Pool;

/**
 * For pooling objects that can be reused.
 * @class Pool
 * @constructor
 */
function Pool(){
    /**
     * The pooled objects
     * @property {Array} objects
     */
    this.objects = [];

    /**
     * Constructor of the objects
     * @property {mixed} type
     */
    this.type = Object;
}

/**
 * Release an object after use
 * @method release
 * @param {Object} obj
 */
Pool.prototype.release = function(){
    var Nargs = arguments.length;
    for(var i=0; i!==Nargs; i++){
        this.objects.push(arguments[i]);
    }
    return this;
};

/**
 * Get an object
 * @method get
 * @return {mixed}
 */
Pool.prototype.get = function(){
    if(this.objects.length===0){
        return this.constructObject();
    } else {
        return this.objects.pop();
    }
};

/**
 * Construct an object. Should be implmented in each subclass.
 * @method constructObject
 * @return {mixed}
 */
Pool.prototype.constructObject = function(){
    throw new Error("constructObject() not implemented in this Pool subclass yet!");
};

/**
 * @method resize
 * @param {number} size
 * @return {Pool} Self, for chaining
 */
Pool.prototype.resize = function (size) {
    var objects = this.objects;

    while (objects.length > size) {
        objects.pop();
    }

    while (objects.length < size) {
        objects.push(this.constructObject());
    }

    return this;
};


},{}],"MTUm":[function(require,module,exports) {
module.exports = Vec3Pool;

var Vec3 = require('../math/Vec3');
var Pool = require('./Pool');

/**
 * @class Vec3Pool
 * @constructor
 * @extends Pool
 */
function Vec3Pool(){
    Pool.call(this);
    this.type = Vec3;
}
Vec3Pool.prototype = new Pool();

/**
 * Construct a vector
 * @method constructObject
 * @return {Vec3}
 */
Vec3Pool.prototype.constructObject = function(){
    return new Vec3();
};

},{"../math/Vec3":"XG60","./Pool":"/qMa"}],"We/N":[function(require,module,exports) {
module.exports = FrictionEquation;

var Equation = require('./Equation');
var Vec3 = require('../math/Vec3');
var Mat3 = require('../math/Mat3');

/**
 * Constrains the slipping in a contact along a tangent
 * @class FrictionEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} slipForce should be +-F_friction = +-mu * F_normal = +-mu * m * g
 * @extends Equation
 */
function FrictionEquation(bodyA, bodyB, slipForce){
    Equation.call(this,bodyA, bodyB, -slipForce, slipForce);
    this.ri = new Vec3();
    this.rj = new Vec3();
    this.t = new Vec3(); // tangent
}

FrictionEquation.prototype = new Equation();
FrictionEquation.prototype.constructor = FrictionEquation;

var FrictionEquation_computeB_temp1 = new Vec3();
var FrictionEquation_computeB_temp2 = new Vec3();
FrictionEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,
        ri = this.ri,
        rj = this.rj,
        rixt = FrictionEquation_computeB_temp1,
        rjxt = FrictionEquation_computeB_temp2,
        t = this.t;

    // Caluclate cross products
    ri.cross(t,rixt);
    rj.cross(t,rjxt);

    // G = [-t -rixt t rjxt]
    // And remember, this is a pure velocity constraint, g is always zero!
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB;
    t.negate(GA.spatial);
    rixt.negate(GA.rotational);
    GB.spatial.copy(t);
    GB.rotational.copy(rjxt);

    var GW = this.computeGW();
    var GiMf = this.computeGiMf();

    var B = - GW * b - h * GiMf;

    return B;
};

},{"./Equation":"m/dE","../math/Vec3":"XG60","../math/Mat3":"etZO"}],"L4TN":[function(require,module,exports) {
module.exports = Narrowphase;

var AABB = require('../collision/AABB');
var Body = require('../objects/Body');
var Shape = require('../shapes/Shape');
var Ray = require('../collision/Ray');
var Vec3 = require('../math/Vec3');
var Transform = require('../math/Transform');
var ConvexPolyhedron = require('../shapes/ConvexPolyhedron');
var Quaternion = require('../math/Quaternion');
var Solver = require('../solver/Solver');
var Vec3Pool = require('../utils/Vec3Pool');
var ContactEquation = require('../equations/ContactEquation');
var FrictionEquation = require('../equations/FrictionEquation');

/**
 * Helper class for the World. Generates ContactEquations.
 * @class Narrowphase
 * @constructor
 * @todo Sphere-ConvexPolyhedron contacts
 * @todo Contact reduction
 * @todo  should move methods to prototype
 */
function Narrowphase(world){

    /**
     * Internal storage of pooled contact points.
     * @property {Array} contactPointPool
     */
    this.contactPointPool = [];

    this.frictionEquationPool = [];

    this.result = [];
    this.frictionResult = [];

    /**
     * Pooled vectors.
     * @property {Vec3Pool} v3pool
     */
    this.v3pool = new Vec3Pool();

    this.world = world;
    this.currentContactMaterial = null;

    /**
     * @property {Boolean} enableFrictionReduction
     */
    this.enableFrictionReduction = false;
}

/**
 * Make a contact object, by using the internal pool or creating a new one.
 * @method createContactEquation
 * @param {Body} bi
 * @param {Body} bj
 * @param {Shape} si
 * @param {Shape} sj
 * @param {Shape} overrideShapeA
 * @param {Shape} overrideShapeB
 * @return {ContactEquation}
 */
Narrowphase.prototype.createContactEquation = function(bi, bj, si, sj, overrideShapeA, overrideShapeB){
    var c;
    if(this.contactPointPool.length){
        c = this.contactPointPool.pop();
        c.bi = bi;
        c.bj = bj;
    } else {
        c = new ContactEquation(bi, bj);
    }

    c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

    var cm = this.currentContactMaterial;

    c.restitution = cm.restitution;

    c.setSpookParams(
        cm.contactEquationStiffness,
        cm.contactEquationRelaxation,
        this.world.dt
    );

    var matA = si.material || bi.material;
    var matB = sj.material || bj.material;
    if(matA && matB && matA.restitution >= 0 && matB.restitution >= 0){
        c.restitution = matA.restitution * matB.restitution;
    }

    c.si = overrideShapeA || si;
    c.sj = overrideShapeB || sj;

    return c;
};

Narrowphase.prototype.createFrictionEquationsFromContact = function(contactEquation, outArray){
    var bodyA = contactEquation.bi;
    var bodyB = contactEquation.bj;
    var shapeA = contactEquation.si;
    var shapeB = contactEquation.sj;

    var world = this.world;
    var cm = this.currentContactMaterial;

    // If friction or restitution were specified in the material, use them
    var friction = cm.friction;
    var matA = shapeA.material || bodyA.material;
    var matB = shapeB.material || bodyB.material;
    if(matA && matB && matA.friction >= 0 && matB.friction >= 0){
        friction = matA.friction * matB.friction;
    }

    if(friction > 0){

        // Create 2 tangent equations
        var mug = friction * world.gravity.length();
        var reducedMass = (bodyA.invMass + bodyB.invMass);
        if(reducedMass > 0){
            reducedMass = 1/reducedMass;
        }
        var pool = this.frictionEquationPool;
        var c1 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);
        var c2 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);

        c1.bi = c2.bi = bodyA;
        c1.bj = c2.bj = bodyB;
        c1.minForce = c2.minForce = -mug*reducedMass;
        c1.maxForce = c2.maxForce = mug*reducedMass;

        // Copy over the relative vectors
        c1.ri.copy(contactEquation.ri);
        c1.rj.copy(contactEquation.rj);
        c2.ri.copy(contactEquation.ri);
        c2.rj.copy(contactEquation.rj);

        // Construct tangents
        contactEquation.ni.tangents(c1.t, c2.t);

        // Set spook params
        c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
        c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);

        c1.enabled = c2.enabled = contactEquation.enabled;

        outArray.push(c1, c2);

        return true;
    }

    return false;
};

var averageNormal = new Vec3();
var averageContactPointA = new Vec3();
var averageContactPointB = new Vec3();

// Take the average N latest contact point on the plane.
Narrowphase.prototype.createFrictionFromAverage = function(numContacts){
    // The last contactEquation
    var c = this.result[this.result.length - 1];

    // Create the result: two "average" friction equations
    if (!this.createFrictionEquationsFromContact(c, this.frictionResult) || numContacts === 1) {
        return;
    }

    var f1 = this.frictionResult[this.frictionResult.length - 2];
    var f2 = this.frictionResult[this.frictionResult.length - 1];

    averageNormal.setZero();
    averageContactPointA.setZero();
    averageContactPointB.setZero();

    var bodyA = c.bi;
    var bodyB = c.bj;
    for(var i=0; i!==numContacts; i++){
        c = this.result[this.result.length - 1 - i];
        if(c.bodyA !== bodyA){
            averageNormal.vadd(c.ni, averageNormal);
            averageContactPointA.vadd(c.ri, averageContactPointA);
            averageContactPointB.vadd(c.rj, averageContactPointB);
        } else {
            averageNormal.vsub(c.ni, averageNormal);
            averageContactPointA.vadd(c.rj, averageContactPointA);
            averageContactPointB.vadd(c.ri, averageContactPointB);
        }
    }

    var invNumContacts = 1 / numContacts;
    averageContactPointA.scale(invNumContacts, f1.ri);
    averageContactPointB.scale(invNumContacts, f1.rj);
    f2.ri.copy(f1.ri); // Should be the same
    f2.rj.copy(f1.rj);
    averageNormal.normalize();
    averageNormal.tangents(f1.t, f2.t);
    // return eq;
};


var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();
var tmpQuat1 = new Quaternion();
var tmpQuat2 = new Quaternion();

/**
 * Generate all contacts between a list of body pairs
 * @method getContacts
 * @param {array} p1 Array of body indices
 * @param {array} p2 Array of body indices
 * @param {World} world
 * @param {array} result Array to store generated contacts
 * @param {array} oldcontacts Optional. Array of reusable contact objects
 */
Narrowphase.prototype.getContacts = function(p1, p2, world, result, oldcontacts, frictionResult, frictionPool){
    // Save old contact objects
    this.contactPointPool = oldcontacts;
    this.frictionEquationPool = frictionPool;
    this.result = result;
    this.frictionResult = frictionResult;

    var qi = tmpQuat1;
    var qj = tmpQuat2;
    var xi = tmpVec1;
    var xj = tmpVec2;

    for(var k=0, N=p1.length; k!==N; k++){

        // Get current collision bodies
        var bi = p1[k],
            bj = p2[k];

        // Get contact material
        var bodyContactMaterial = null;
        if(bi.material && bj.material){
            bodyContactMaterial = world.getContactMaterial(bi.material,bj.material) || null;
        }

        var justTest = (
            (
                (bi.type & Body.KINEMATIC) && (bj.type & Body.STATIC)
            ) || (
                (bi.type & Body.STATIC) && (bj.type & Body.KINEMATIC)
            ) || (
                (bi.type & Body.KINEMATIC) && (bj.type & Body.KINEMATIC)
            )
        );

        for (var i = 0; i < bi.shapes.length; i++) {
            bi.quaternion.mult(bi.shapeOrientations[i], qi);
            bi.quaternion.vmult(bi.shapeOffsets[i], xi);
            xi.vadd(bi.position, xi);
            var si = bi.shapes[i];

            for (var j = 0; j < bj.shapes.length; j++) {

                // Compute world transform of shapes
                bj.quaternion.mult(bj.shapeOrientations[j], qj);
                bj.quaternion.vmult(bj.shapeOffsets[j], xj);
                xj.vadd(bj.position, xj);
                var sj = bj.shapes[j];

                if(!((si.collisionFilterMask & sj.collisionFilterGroup) && (sj.collisionFilterMask & si.collisionFilterGroup))){
                    continue;
                }

                if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
                    continue;
                }

                // Get collision material
                var shapeContactMaterial = null;
                if(si.material && sj.material){
                    shapeContactMaterial = world.getContactMaterial(si.material,sj.material) || null;
                }

                this.currentContactMaterial = shapeContactMaterial || bodyContactMaterial || world.defaultContactMaterial;

                // Get contacts
                var resolver = this[si.type | sj.type];
                if(resolver){
                    var retval = false;
                    if (si.type < sj.type) {
                        retval = resolver.call(this, si, sj, xi, xj, qi, qj, bi, bj, si, sj, justTest);
                    } else {
                        retval = resolver.call(this, sj, si, xj, xi, qj, qi, bj, bi, si, sj, justTest);
                    }

                    if(retval && justTest){
                        // Register overlap
                        world.shapeOverlapKeeper.set(si.id, sj.id);
                        world.bodyOverlapKeeper.set(bi.id, bj.id);
                    }
                }
            }
        }
    }
};

var numWarnings = 0;
var maxWarnings = 10;

function warn(msg){
    if(numWarnings > maxWarnings){
        return;
    }

    numWarnings++;

    //.warn(msg);
}

Narrowphase.prototype[Shape.types.BOX | Shape.types.BOX] =
Narrowphase.prototype.boxBox = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    si.convexPolyhedronRepresentation.material = si.material;
    sj.convexPolyhedronRepresentation.material = sj.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
    return this.convexConvex(si.convexPolyhedronRepresentation,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.boxConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    return this.convexConvex(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.PARTICLE] =
Narrowphase.prototype.boxParticle = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    return this.convexParticle(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

/**
 * @method sphereSphere
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE] =
Narrowphase.prototype.sphereSphere = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    if(justTest){
        return xi.distanceSquared(xj) < Math.pow(si.radius + sj.radius, 2);
    }

    // We will have only one contact in this case
    var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);

    // Contact normal
    xj.vsub(xi, r.ni);
    r.ni.normalize();

    // Contact point locations
    r.ri.copy(r.ni);
    r.rj.copy(r.ni);
    r.ri.mult(si.radius, r.ri);
    r.rj.mult(-sj.radius, r.rj);

    r.ri.vadd(xi, r.ri);
    r.ri.vsub(bi.position, r.ri);

    r.rj.vadd(xj, r.rj);
    r.rj.vsub(bj.position, r.rj);

    this.result.push(r);

    this.createFrictionEquationsFromContact(r, this.frictionResult);
};

/**
 * @method planeTrimesh
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
var planeTrimesh_normal = new Vec3();
var planeTrimesh_relpos = new Vec3();
var planeTrimesh_projected = new Vec3();
Narrowphase.prototype[Shape.types.PLANE | Shape.types.TRIMESH] =
Narrowphase.prototype.planeTrimesh = function(
    planeShape,
    trimeshShape,
    planePos,
    trimeshPos,
    planeQuat,
    trimeshQuat,
    planeBody,
    trimeshBody,
    rsi,
    rsj,
    justTest
){
    // Make contacts!
    var v = new Vec3();

    var normal = planeTrimesh_normal;
    normal.set(0,0,1);
    planeQuat.vmult(normal,normal); // Turn normal according to plane

    for(var i=0; i<trimeshShape.vertices.length / 3; i++){

        // Get world vertex from trimesh
        trimeshShape.getVertex(i, v);

        // Safe up
        var v2 = new Vec3();
        v2.copy(v);
        Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

        // Check plane side
        var relpos = planeTrimesh_relpos;
        v.vsub(planePos, relpos);
        var dot = normal.dot(relpos);

        if(dot <= 0.0){
            if(justTest){
                return true;
            }

            var r = this.createContactEquation(planeBody,trimeshBody,planeShape,trimeshShape,rsi,rsj);

            r.ni.copy(normal); // Contact normal is the plane normal

            // Get vertex position projected on plane
            var projected = planeTrimesh_projected;
            normal.scale(relpos.dot(normal), projected);
            v.vsub(projected,projected);

            // ri is the projected world position minus plane position
            r.ri.copy(projected);
            r.ri.vsub(planeBody.position, r.ri);

            r.rj.copy(v);
            r.rj.vsub(trimeshBody.position, r.rj);

            // Store result
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
    }
};

/**
 * @method sphereTrimesh
 * @param  {Shape}      sphereShape
 * @param  {Shape}      trimeshShape
 * @param  {Vec3}       spherePos
 * @param  {Vec3}       trimeshPos
 * @param  {Quaternion} sphereQuat
 * @param  {Quaternion} trimeshQuat
 * @param  {Body}       sphereBody
 * @param  {Body}       trimeshBody
 */
var sphereTrimesh_normal = new Vec3();
var sphereTrimesh_relpos = new Vec3();
var sphereTrimesh_projected = new Vec3();
var sphereTrimesh_v = new Vec3();
var sphereTrimesh_v2 = new Vec3();
var sphereTrimesh_edgeVertexA = new Vec3();
var sphereTrimesh_edgeVertexB = new Vec3();
var sphereTrimesh_edgeVector = new Vec3();
var sphereTrimesh_edgeVectorUnit = new Vec3();
var sphereTrimesh_localSpherePos = new Vec3();
var sphereTrimesh_tmp = new Vec3();
var sphereTrimesh_va = new Vec3();
var sphereTrimesh_vb = new Vec3();
var sphereTrimesh_vc = new Vec3();
var sphereTrimesh_localSphereAABB = new AABB();
var sphereTrimesh_triangles = [];
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.TRIMESH] =
Narrowphase.prototype.sphereTrimesh = function (
    sphereShape,
    trimeshShape,
    spherePos,
    trimeshPos,
    sphereQuat,
    trimeshQuat,
    sphereBody,
    trimeshBody,
    rsi,
    rsj,
    justTest
) {

    var edgeVertexA = sphereTrimesh_edgeVertexA;
    var edgeVertexB = sphereTrimesh_edgeVertexB;
    var edgeVector = sphereTrimesh_edgeVector;
    var edgeVectorUnit = sphereTrimesh_edgeVectorUnit;
    var localSpherePos = sphereTrimesh_localSpherePos;
    var tmp = sphereTrimesh_tmp;
    var localSphereAABB = sphereTrimesh_localSphereAABB;
    var v2 = sphereTrimesh_v2;
    var relpos = sphereTrimesh_relpos;
    var triangles = sphereTrimesh_triangles;

    // Convert sphere position to local in the trimesh
    Transform.pointToLocalFrame(trimeshPos, trimeshQuat, spherePos, localSpherePos);

    // Get the aabb of the sphere locally in the trimesh
    var sphereRadius = sphereShape.radius;
    localSphereAABB.lowerBound.set(
        localSpherePos.x - sphereRadius,
        localSpherePos.y - sphereRadius,
        localSpherePos.z - sphereRadius
    );
    localSphereAABB.upperBound.set(
        localSpherePos.x + sphereRadius,
        localSpherePos.y + sphereRadius,
        localSpherePos.z + sphereRadius
    );

    trimeshShape.getTrianglesInAABB(localSphereAABB, triangles);
    //for (var i = 0; i < trimeshShape.indices.length / 3; i++) triangles.push(i); // All

    // Vertices
    var v = sphereTrimesh_v;
    var radiusSquared = sphereShape.radius * sphereShape.radius;
    for(var i=0; i<triangles.length; i++){
        for (var j = 0; j < 3; j++) {

            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], v);

            // Check vertex overlap in sphere
            v.vsub(localSpherePos, relpos);

            if(relpos.norm2() <= radiusSquared){

                // Safe up
                v2.copy(v);
                Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

                v.vsub(spherePos, relpos);

                if(justTest){
                    return true;
                }

                var r = this.createContactEquation(sphereBody,trimeshBody,sphereShape,trimeshShape,rsi,rsj);
                r.ni.copy(relpos);
                r.ni.normalize();

                // ri is the vector from sphere center to the sphere surface
                r.ri.copy(r.ni);
                r.ri.scale(sphereShape.radius, r.ri);
                r.ri.vadd(spherePos, r.ri);
                r.ri.vsub(sphereBody.position, r.ri);

                r.rj.copy(v);
                r.rj.vsub(trimeshBody.position, r.rj);

                // Store result
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
    }

    // Check all edges
    for(var i=0; i<triangles.length; i++){
        for (var j = 0; j < 3; j++) {

            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], edgeVertexA);
            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + ((j+1)%3)], edgeVertexB);
            edgeVertexB.vsub(edgeVertexA, edgeVector);

            // Project sphere position to the edge
            localSpherePos.vsub(edgeVertexB, tmp);
            var positionAlongEdgeB = tmp.dot(edgeVector);

            localSpherePos.vsub(edgeVertexA, tmp);
            var positionAlongEdgeA = tmp.dot(edgeVector);

            if(positionAlongEdgeA > 0 && positionAlongEdgeB < 0){

                // Now check the orthogonal distance from edge to sphere center
                localSpherePos.vsub(edgeVertexA, tmp);

                edgeVectorUnit.copy(edgeVector);
                edgeVectorUnit.normalize();
                positionAlongEdgeA = tmp.dot(edgeVectorUnit);

                edgeVectorUnit.scale(positionAlongEdgeA, tmp);
                tmp.vadd(edgeVertexA, tmp);

                // tmp is now the sphere center position projected to the edge, defined locally in the trimesh frame
                var dist = tmp.distanceTo(localSpherePos);
                if(dist < sphereShape.radius){

                    if(justTest){
                        return true;
                    }

                    var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape,rsi,rsj);

                    tmp.vsub(localSpherePos, r.ni);
                    r.ni.normalize();
                    r.ni.scale(sphereShape.radius, r.ri);

                    Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                    tmp.vsub(trimeshBody.position, r.rj);

                    Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                    Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
            }
        }
    }

    // Triangle faces
    var va = sphereTrimesh_va;
    var vb = sphereTrimesh_vb;
    var vc = sphereTrimesh_vc;
    var normal = sphereTrimesh_normal;
    for(var i=0, N = triangles.length; i !== N; i++){
        trimeshShape.getTriangleVertices(triangles[i], va, vb, vc);
        trimeshShape.getNormal(triangles[i], normal);
        localSpherePos.vsub(va, tmp);
        var dist = tmp.dot(normal);
        normal.scale(dist, tmp);
        localSpherePos.vsub(tmp, tmp);

        // tmp is now the sphere position projected to the triangle plane
        dist = tmp.distanceTo(localSpherePos);
        if(Ray.pointInTriangle(tmp, va, vb, vc) && dist < sphereShape.radius){
            if(justTest){
                return true;
            }
            var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape,rsi,rsj);

            tmp.vsub(localSpherePos, r.ni);
            r.ni.normalize();
            r.ni.scale(sphereShape.radius, r.ri);

            Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
            tmp.vsub(trimeshBody.position, r.rj);

            Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
            Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
    }

    triangles.length = 0;
};

var point_on_plane_to_sphere = new Vec3();
var plane_to_sphere_ortho = new Vec3();

/**
 * @method spherePlane
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.PLANE] =
Narrowphase.prototype.spherePlane = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    // We will have one contact in this case
    var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);

    // Contact normal
    r.ni.set(0,0,1);
    qj.vmult(r.ni, r.ni);
    r.ni.negate(r.ni); // body i is the sphere, flip normal
    r.ni.normalize(); // Needed?

    // Vector from sphere center to contact point
    r.ni.mult(si.radius, r.ri);

    // Project down sphere on plane
    xi.vsub(xj, point_on_plane_to_sphere);
    r.ni.mult(r.ni.dot(point_on_plane_to_sphere), plane_to_sphere_ortho);
    point_on_plane_to_sphere.vsub(plane_to_sphere_ortho,r.rj); // The sphere position projected to plane

    if(-point_on_plane_to_sphere.dot(r.ni) <= si.radius){

        if(justTest){
            return true;
        }

        // Make it relative to the body
        var ri = r.ri;
        var rj = r.rj;
        ri.vadd(xi, ri);
        ri.vsub(bi.position, ri);
        rj.vadd(xj, rj);
        rj.vsub(bj.position, rj);

        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

// See http://bulletphysics.com/Bullet/BulletFull/SphereTriangleDetector_8cpp_source.html
var pointInPolygon_edge = new Vec3();
var pointInPolygon_edge_x_normal = new Vec3();
var pointInPolygon_vtp = new Vec3();
function pointInPolygon(verts, normal, p){
    var positiveResult = null;
    var N = verts.length;
    for(var i=0; i!==N; i++){
        var v = verts[i];

        // Get edge to the next vertex
        var edge = pointInPolygon_edge;
        verts[(i+1) % (N)].vsub(v,edge);

        // Get cross product between polygon normal and the edge
        var edge_x_normal = pointInPolygon_edge_x_normal;
        //var edge_x_normal = new Vec3();
        edge.cross(normal,edge_x_normal);

        // Get vector between point and current vertex
        var vertex_to_p = pointInPolygon_vtp;
        p.vsub(v,vertex_to_p);

        // This dot product determines which side of the edge the point is
        var r = edge_x_normal.dot(vertex_to_p);

        // If all such dot products have same sign, we are inside the polygon.
        if(positiveResult===null || (r>0 && positiveResult===true) || (r<=0 && positiveResult===false)){
            if(positiveResult===null){
                positiveResult = r>0;
            }
            continue;
        } else {
            return false; // Encountered some other sign. Exit.
        }
    }

    // If we got here, all dot products were of the same sign.
    return true;
}

var box_to_sphere = new Vec3();
var sphereBox_ns = new Vec3();
var sphereBox_ns1 = new Vec3();
var sphereBox_ns2 = new Vec3();
var sphereBox_sides = [new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3()];
var sphereBox_sphere_to_corner = new Vec3();
var sphereBox_side_ns = new Vec3();
var sphereBox_side_ns1 = new Vec3();
var sphereBox_side_ns2 = new Vec3();

/**
 * @method sphereBox
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.BOX] =
Narrowphase.prototype.sphereBox = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    var v3pool = this.v3pool;

    // we refer to the box as body j
    var sides = sphereBox_sides;
    xi.vsub(xj,box_to_sphere);
    sj.getSideNormals(sides,qj);
    var R =     si.radius;
    var penetrating_sides = [];

    // Check side (plane) intersections
    var found = false;

    // Store the resulting side penetration info
    var side_ns = sphereBox_side_ns;
    var side_ns1 = sphereBox_side_ns1;
    var side_ns2 = sphereBox_side_ns2;
    var side_h = null;
    var side_penetrations = 0;
    var side_dot1 = 0;
    var side_dot2 = 0;
    var side_distance = null;
    for(var idx=0,nsides=sides.length; idx!==nsides && found===false; idx++){
        // Get the plane side normal (ns)
        var ns = sphereBox_ns;
        ns.copy(sides[idx]);

        var h = ns.norm();
        ns.normalize();

        // The normal/distance dot product tells which side of the plane we are
        var dot = box_to_sphere.dot(ns);

        if(dot<h+R && dot>0){
            // Intersects plane. Now check the other two dimensions
            var ns1 = sphereBox_ns1;
            var ns2 = sphereBox_ns2;
            ns1.copy(sides[(idx+1)%3]);
            ns2.copy(sides[(idx+2)%3]);
            var h1 = ns1.norm();
            var h2 = ns2.norm();
            ns1.normalize();
            ns2.normalize();
            var dot1 = box_to_sphere.dot(ns1);
            var dot2 = box_to_sphere.dot(ns2);
            if(dot1<h1 && dot1>-h1 && dot2<h2 && dot2>-h2){
                var dist = Math.abs(dot-h-R);
                if(side_distance===null || dist < side_distance){
                    side_distance = dist;
                    side_dot1 = dot1;
                    side_dot2 = dot2;
                    side_h = h;
                    side_ns.copy(ns);
                    side_ns1.copy(ns1);
                    side_ns2.copy(ns2);
                    side_penetrations++;

                    if(justTest){
                        return true;
                    }
                }
            }
        }
    }
    if(side_penetrations){
        found = true;
        var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
        side_ns.mult(-R,r.ri); // Sphere r
        r.ni.copy(side_ns);
        r.ni.negate(r.ni); // Normal should be out of sphere
        side_ns.mult(side_h,side_ns);
        side_ns1.mult(side_dot1,side_ns1);
        side_ns.vadd(side_ns1,side_ns);
        side_ns2.mult(side_dot2,side_ns2);
        side_ns.vadd(side_ns2,r.rj);

        // Make relative to bodies
        r.ri.vadd(xi, r.ri);
        r.ri.vsub(bi.position, r.ri);
        r.rj.vadd(xj, r.rj);
        r.rj.vsub(bj.position, r.rj);

        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }

    // Check corners
    var rj = v3pool.get();
    var sphere_to_corner = sphereBox_sphere_to_corner;
    for(var j=0; j!==2 && !found; j++){
        for(var k=0; k!==2 && !found; k++){
            for(var l=0; l!==2 && !found; l++){
                rj.set(0,0,0);
                if(j){
                    rj.vadd(sides[0],rj);
                } else {
                    rj.vsub(sides[0],rj);
                }
                if(k){
                    rj.vadd(sides[1],rj);
                } else {
                    rj.vsub(sides[1],rj);
                }
                if(l){
                    rj.vadd(sides[2],rj);
                } else {
                    rj.vsub(sides[2],rj);
                }

                // World position of corner
                xj.vadd(rj,sphere_to_corner);
                sphere_to_corner.vsub(xi,sphere_to_corner);

                if(sphere_to_corner.norm2() < R*R){
                    if(justTest){
                        return true;
                    }
                    found = true;
                    var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                    r.ri.copy(sphere_to_corner);
                    r.ri.normalize();
                    r.ni.copy(r.ri);
                    r.ri.mult(R,r.ri);
                    r.rj.copy(rj);

                    // Make relative to bodies
                    r.ri.vadd(xi, r.ri);
                    r.ri.vsub(bi.position, r.ri);
                    r.rj.vadd(xj, r.rj);
                    r.rj.vsub(bj.position, r.rj);

                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
            }
        }
    }
    v3pool.release(rj);
    rj = null;

    // Check edges
    var edgeTangent = v3pool.get();
    var edgeCenter = v3pool.get();
    var r = v3pool.get(); // r = edge center to sphere center
    var orthogonal = v3pool.get();
    var dist = v3pool.get();
    var Nsides = sides.length;
    for(var j=0; j!==Nsides && !found; j++){
        for(var k=0; k!==Nsides && !found; k++){
            if(j%3 !== k%3){
                // Get edge tangent
                sides[k].cross(sides[j],edgeTangent);
                edgeTangent.normalize();
                sides[j].vadd(sides[k], edgeCenter);
                r.copy(xi);
                r.vsub(edgeCenter,r);
                r.vsub(xj,r);
                var orthonorm = r.dot(edgeTangent); // distance from edge center to sphere center in the tangent direction
                edgeTangent.mult(orthonorm,orthogonal); // Vector from edge center to sphere center in the tangent direction

                // Find the third side orthogonal to this one
                var l = 0;
                while(l===j%3 || l===k%3){
                    l++;
                }

                // vec from edge center to sphere projected to the plane orthogonal to the edge tangent
                dist.copy(xi);
                dist.vsub(orthogonal,dist);
                dist.vsub(edgeCenter,dist);
                dist.vsub(xj,dist);

                // Distances in tangent direction and distance in the plane orthogonal to it
                var tdist = Math.abs(orthonorm);
                var ndist = dist.norm();

                if(tdist < sides[l].norm() && ndist<R){
                    if(justTest){
                        return true;
                    }
                    found = true;
                    var res = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                    edgeCenter.vadd(orthogonal,res.rj); // box rj
                    res.rj.copy(res.rj);
                    dist.negate(res.ni);
                    res.ni.normalize();

                    res.ri.copy(res.rj);
                    res.ri.vadd(xj,res.ri);
                    res.ri.vsub(xi,res.ri);
                    res.ri.normalize();
                    res.ri.mult(R,res.ri);

                    // Make relative to bodies
                    res.ri.vadd(xi, res.ri);
                    res.ri.vsub(bi.position, res.ri);
                    res.rj.vadd(xj, res.rj);
                    res.rj.vsub(bj.position, res.rj);

                    this.result.push(res);
                    this.createFrictionEquationsFromContact(res, this.frictionResult);
                }
            }
        }
    }
    v3pool.release(edgeTangent,edgeCenter,r,orthogonal,dist);
};

var convex_to_sphere = new Vec3();
var sphereConvex_edge = new Vec3();
var sphereConvex_edgeUnit = new Vec3();
var sphereConvex_sphereToCorner = new Vec3();
var sphereConvex_worldCorner = new Vec3();
var sphereConvex_worldNormal = new Vec3();
var sphereConvex_worldPoint = new Vec3();
var sphereConvex_worldSpherePointClosestToPlane = new Vec3();
var sphereConvex_penetrationVec = new Vec3();
var sphereConvex_sphereToWorldPoint = new Vec3();

/**
 * @method sphereConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.sphereConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    var v3pool = this.v3pool;
    xi.vsub(xj,convex_to_sphere);
    var normals = sj.faceNormals;
    var faces = sj.faces;
    var verts = sj.vertices;
    var R =     si.radius;
    var penetrating_sides = [];

    // if(convex_to_sphere.norm2() > si.boundingSphereRadius + sj.boundingSphereRadius){
    //     return;
    // }

    // Check corners
    for(var i=0; i!==verts.length; i++){
        var v = verts[i];

        // World position of corner
        var worldCorner = sphereConvex_worldCorner;
        qj.vmult(v,worldCorner);
        xj.vadd(worldCorner,worldCorner);
        var sphere_to_corner = sphereConvex_sphereToCorner;
        worldCorner.vsub(xi, sphere_to_corner);
        if(sphere_to_corner.norm2() < R * R){
            if(justTest){
                return true;
            }
            found = true;
            var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
            r.ri.copy(sphere_to_corner);
            r.ri.normalize();
            r.ni.copy(r.ri);
            r.ri.mult(R,r.ri);
            worldCorner.vsub(xj,r.rj);

            // Should be relative to the body.
            r.ri.vadd(xi, r.ri);
            r.ri.vsub(bi.position, r.ri);

            // Should be relative to the body.
            r.rj.vadd(xj, r.rj);
            r.rj.vsub(bj.position, r.rj);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
            return;
        }
    }

    // Check side (plane) intersections
    var found = false;
    for(var i=0, nfaces=faces.length; i!==nfaces && found===false; i++){
        var normal = normals[i];
        var face = faces[i];

        // Get world-transformed normal of the face
        var worldNormal = sphereConvex_worldNormal;
        qj.vmult(normal,worldNormal);

        // Get a world vertex from the face
        var worldPoint = sphereConvex_worldPoint;
        qj.vmult(verts[face[0]],worldPoint);
        worldPoint.vadd(xj,worldPoint);

        // Get a point on the sphere, closest to the face normal
        var worldSpherePointClosestToPlane = sphereConvex_worldSpherePointClosestToPlane;
        worldNormal.mult(-R, worldSpherePointClosestToPlane);
        xi.vadd(worldSpherePointClosestToPlane, worldSpherePointClosestToPlane);

        // Vector from a face point to the closest point on the sphere
        var penetrationVec = sphereConvex_penetrationVec;
        worldSpherePointClosestToPlane.vsub(worldPoint,penetrationVec);

        // The penetration. Negative value means overlap.
        var penetration = penetrationVec.dot(worldNormal);

        var worldPointToSphere = sphereConvex_sphereToWorldPoint;
        xi.vsub(worldPoint, worldPointToSphere);

        if(penetration < 0 && worldPointToSphere.dot(worldNormal)>0){
            // Intersects plane. Now check if the sphere is inside the face polygon
            var faceVerts = []; // Face vertices, in world coords
            for(var j=0, Nverts=face.length; j!==Nverts; j++){
                var worldVertex = v3pool.get();
                qj.vmult(verts[face[j]], worldVertex);
                xj.vadd(worldVertex,worldVertex);
                faceVerts.push(worldVertex);
            }

            if(pointInPolygon(faceVerts,worldNormal,xi)){ // Is the sphere center in the face polygon?
                if(justTest){
                    return true;
                }
                found = true;
                var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);

                worldNormal.mult(-R, r.ri); // Contact offset, from sphere center to contact
                worldNormal.negate(r.ni); // Normal pointing out of sphere

                var penetrationVec2 = v3pool.get();
                worldNormal.mult(-penetration, penetrationVec2);
                var penetrationSpherePoint = v3pool.get();
                worldNormal.mult(-R, penetrationSpherePoint);

                //xi.vsub(xj).vadd(penetrationSpherePoint).vadd(penetrationVec2 , r.rj);
                xi.vsub(xj,r.rj);
                r.rj.vadd(penetrationSpherePoint,r.rj);
                r.rj.vadd(penetrationVec2 , r.rj);

                // Should be relative to the body.
                r.rj.vadd(xj, r.rj);
                r.rj.vsub(bj.position, r.rj);

                // Should be relative to the body.
                r.ri.vadd(xi, r.ri);
                r.ri.vsub(bi.position, r.ri);

                v3pool.release(penetrationVec2);
                v3pool.release(penetrationSpherePoint);

                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);

                // Release world vertices
                for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                    v3pool.release(faceVerts[j]);
                }

                return; // We only expect *one* face contact
            } else {
                // Edge?
                for(var j=0; j!==face.length; j++){

                    // Get two world transformed vertices
                    var v1 = v3pool.get();
                    var v2 = v3pool.get();
                    qj.vmult(verts[face[(j+1)%face.length]], v1);
                    qj.vmult(verts[face[(j+2)%face.length]], v2);
                    xj.vadd(v1, v1);
                    xj.vadd(v2, v2);

                    // Construct edge vector
                    var edge = sphereConvex_edge;
                    v2.vsub(v1,edge);

                    // Construct the same vector, but normalized
                    var edgeUnit = sphereConvex_edgeUnit;
                    edge.unit(edgeUnit);

                    // p is xi projected onto the edge
                    var p = v3pool.get();
                    var v1_to_xi = v3pool.get();
                    xi.vsub(v1, v1_to_xi);
                    var dot = v1_to_xi.dot(edgeUnit);
                    edgeUnit.mult(dot, p);
                    p.vadd(v1, p);

                    // Compute a vector from p to the center of the sphere
                    var xi_to_p = v3pool.get();
                    p.vsub(xi, xi_to_p);

                    // Collision if the edge-sphere distance is less than the radius
                    // AND if p is in between v1 and v2
                    if(dot > 0 && dot*dot<edge.norm2() && xi_to_p.norm2() < R*R){ // Collision if the edge-sphere distance is less than the radius
                        // Edge contact!
                        if(justTest){
                            return true;
                        }
                        var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                        p.vsub(xj,r.rj);

                        p.vsub(xi,r.ni);
                        r.ni.normalize();

                        r.ni.mult(R,r.ri);

                        // Should be relative to the body.
                        r.rj.vadd(xj, r.rj);
                        r.rj.vsub(bj.position, r.rj);

                        // Should be relative to the body.
                        r.ri.vadd(xi, r.ri);
                        r.ri.vsub(bi.position, r.ri);

                        this.result.push(r);
                        this.createFrictionEquationsFromContact(r, this.frictionResult);

                        // Release world vertices
                        for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                            v3pool.release(faceVerts[j]);
                        }

                        v3pool.release(v1);
                        v3pool.release(v2);
                        v3pool.release(p);
                        v3pool.release(xi_to_p);
                        v3pool.release(v1_to_xi);

                        return;
                    }

                    v3pool.release(v1);
                    v3pool.release(v2);
                    v3pool.release(p);
                    v3pool.release(xi_to_p);
                    v3pool.release(v1_to_xi);
                }
            }

            // Release world vertices
            for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                v3pool.release(faceVerts[j]);
            }
        }
    }
};

var planeBox_normal = new Vec3();
var plane_to_corner = new Vec3();

/**
 * @method planeBox
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.BOX] =
Narrowphase.prototype.planeBox = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    sj.convexPolyhedronRepresentation.material = sj.material;
    sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
    sj.convexPolyhedronRepresentation.id = sj.id;
    return this.planeConvex(si,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

var planeConvex_v = new Vec3();
var planeConvex_normal = new Vec3();
var planeConvex_relpos = new Vec3();
var planeConvex_projected = new Vec3();

/**
 * @method planeConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.planeConvex = function(
    planeShape,
    convexShape,
    planePosition,
    convexPosition,
    planeQuat,
    convexQuat,
    planeBody,
    convexBody,
    si,
    sj,
    justTest
){
    // Simply return the points behind the plane.
    var worldVertex = planeConvex_v,
        worldNormal = planeConvex_normal;
    worldNormal.set(0,0,1);
    planeQuat.vmult(worldNormal,worldNormal); // Turn normal according to plane orientation

    var numContacts = 0;
    var relpos = planeConvex_relpos;
    for(var i = 0; i !== convexShape.vertices.length; i++){

        // Get world convex vertex
        worldVertex.copy(convexShape.vertices[i]);
        convexQuat.vmult(worldVertex, worldVertex);
        convexPosition.vadd(worldVertex, worldVertex);
        worldVertex.vsub(planePosition, relpos);

        var dot = worldNormal.dot(relpos);
        if(dot <= 0.0){
            if(justTest){
                return true;
            }

            var r = this.createContactEquation(planeBody, convexBody, planeShape, convexShape, si, sj);

            // Get vertex position projected on plane
            var projected = planeConvex_projected;
            worldNormal.mult(worldNormal.dot(relpos),projected);
            worldVertex.vsub(projected, projected);
            projected.vsub(planePosition, r.ri); // From plane to vertex projected on plane

            r.ni.copy(worldNormal); // Contact normal is the plane normal out from plane

            // rj is now just the vector from the convex center to the vertex
            worldVertex.vsub(convexPosition, r.rj);

            // Make it relative to the body
            r.ri.vadd(planePosition, r.ri);
            r.ri.vsub(planeBody.position, r.ri);
            r.rj.vadd(convexPosition, r.rj);
            r.rj.vsub(convexBody.position, r.rj);

            this.result.push(r);
            numContacts++;
            if(!this.enableFrictionReduction){
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
    }

    if(this.enableFrictionReduction && numContacts){
        this.createFrictionFromAverage(numContacts);
    }
};

var convexConvex_sepAxis = new Vec3();
var convexConvex_q = new Vec3();

/**
 * @method convexConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.convexConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest,faceListA,faceListB){
    var sepAxis = convexConvex_sepAxis;

    if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
        return;
    }

    if(si.findSeparatingAxis(sj,xi,qi,xj,qj,sepAxis,faceListA,faceListB)){
        var res = [];
        var q = convexConvex_q;
        si.clipAgainstHull(xi,qi,sj,xj,qj,sepAxis,-100,100,res);
        var numContacts = 0;
        for(var j = 0; j !== res.length; j++){
            if(justTest){
                return true;
            }
            var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
                ri = r.ri,
                rj = r.rj;
            sepAxis.negate(r.ni);
            res[j].normal.negate(q);
            q.mult(res[j].depth, q);
            res[j].point.vadd(q, ri);
            rj.copy(res[j].point);

            // Contact points are in world coordinates. Transform back to relative
            ri.vsub(xi,ri);
            rj.vsub(xj,rj);

            // Make relative to bodies
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);

            this.result.push(r);
            numContacts++;
            if(!this.enableFrictionReduction){
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
        if(this.enableFrictionReduction && numContacts){
            this.createFrictionFromAverage(numContacts);
        }
    }
};


/**
 * @method convexTrimesh
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
// Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.TRIMESH] =
// Narrowphase.prototype.convexTrimesh = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,faceListA,faceListB){
//     var sepAxis = convexConvex_sepAxis;

//     if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
//         return;
//     }

//     // Construct a temp hull for each triangle
//     var hullB = new ConvexPolyhedron();

//     hullB.faces = [[0,1,2]];
//     var va = new Vec3();
//     var vb = new Vec3();
//     var vc = new Vec3();
//     hullB.vertices = [
//         va,
//         vb,
//         vc
//     ];

//     for (var i = 0; i < sj.indices.length / 3; i++) {

//         var triangleNormal = new Vec3();
//         sj.getNormal(i, triangleNormal);
//         hullB.faceNormals = [triangleNormal];

//         sj.getTriangleVertices(i, va, vb, vc);

//         var d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);
//         if(!d){
//             triangleNormal.scale(-1, triangleNormal);
//             d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);

//             if(!d){
//                 continue;
//             }
//         }

//         var res = [];
//         var q = convexConvex_q;
//         si.clipAgainstHull(xi,qi,hullB,xj,qj,triangleNormal,-100,100,res);
//         for(var j = 0; j !== res.length; j++){
//             var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
//                 ri = r.ri,
//                 rj = r.rj;
//             r.ni.copy(triangleNormal);
//             r.ni.negate(r.ni);
//             res[j].normal.negate(q);
//             q.mult(res[j].depth, q);
//             res[j].point.vadd(q, ri);
//             rj.copy(res[j].point);

//             // Contact points are in world coordinates. Transform back to relative
//             ri.vsub(xi,ri);
//             rj.vsub(xj,rj);

//             // Make relative to bodies
//             ri.vadd(xi, ri);
//             ri.vsub(bi.position, ri);
//             rj.vadd(xj, rj);
//             rj.vsub(bj.position, rj);

//             result.push(r);
//         }
//     }
// };

var particlePlane_normal = new Vec3();
var particlePlane_relpos = new Vec3();
var particlePlane_projected = new Vec3();

/**
 * @method particlePlane
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.PARTICLE] =
Narrowphase.prototype.planeParticle = function(sj,si,xj,xi,qj,qi,bj,bi,rsi,rsj,justTest){
    var normal = particlePlane_normal;
    normal.set(0,0,1);
    bj.quaternion.vmult(normal,normal); // Turn normal according to plane orientation
    var relpos = particlePlane_relpos;
    xi.vsub(bj.position,relpos);
    var dot = normal.dot(relpos);
    if(dot <= 0.0){

        if(justTest){
            return true;
        }

        var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
        r.ni.copy(normal); // Contact normal is the plane normal
        r.ni.negate(r.ni);
        r.ri.set(0,0,0); // Center of particle

        // Get particle position projected on plane
        var projected = particlePlane_projected;
        normal.mult(normal.dot(xi),projected);
        xi.vsub(projected,projected);
        //projected.vadd(bj.position,projected);

        // rj is now the projected world position minus plane position
        r.rj.copy(projected);
        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

var particleSphere_normal = new Vec3();

/**
 * @method particleSphere
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.SPHERE] =
Narrowphase.prototype.sphereParticle = function(sj,si,xj,xi,qj,qi,bj,bi,rsi,rsj,justTest){
    // The normal is the unit vector from sphere center to particle center
    var normal = particleSphere_normal;
    normal.set(0,0,1);
    xi.vsub(xj,normal);
    var lengthSquared = normal.norm2();

    if(lengthSquared <= sj.radius * sj.radius){
        if(justTest){
            return true;
        }
        var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
        normal.normalize();
        r.rj.copy(normal);
        r.rj.mult(sj.radius,r.rj);
        r.ni.copy(normal); // Contact normal
        r.ni.negate(r.ni);
        r.ri.set(0,0,0); // Center of particle
        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

// WIP
var cqj = new Quaternion();
var convexParticle_local = new Vec3();
var convexParticle_normal = new Vec3();
var convexParticle_penetratedFaceNormal = new Vec3();
var convexParticle_vertexToParticle = new Vec3();
var convexParticle_worldPenetrationVec = new Vec3();

/**
 * @method convexParticle
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.convexParticle = function(sj,si,xj,xi,qj,qi,bj,bi,rsi,rsj,justTest){
    var penetratedFaceIndex = -1;
    var penetratedFaceNormal = convexParticle_penetratedFaceNormal;
    var worldPenetrationVec = convexParticle_worldPenetrationVec;
    var minPenetration = null;
    var numDetectedFaces = 0;

    // Convert particle position xi to local coords in the convex
    var local = convexParticle_local;
    local.copy(xi);
    local.vsub(xj,local); // Convert position to relative the convex origin
    qj.conjugate(cqj);
    cqj.vmult(local,local);

    if(sj.pointIsInside(local)){

        if(sj.worldVerticesNeedsUpdate){
            sj.computeWorldVertices(xj,qj);
        }
        if(sj.worldFaceNormalsNeedsUpdate){
            sj.computeWorldFaceNormals(qj);
        }

        // For each world polygon in the polyhedra
        for(var i=0,nfaces=sj.faces.length; i!==nfaces; i++){

            // Construct world face vertices
            var verts = [ sj.worldVertices[ sj.faces[i][0] ] ];
            var normal = sj.worldFaceNormals[i];

            // Check how much the particle penetrates the polygon plane.
            xi.vsub(verts[0],convexParticle_vertexToParticle);
            var penetration = -normal.dot(convexParticle_vertexToParticle);
            if(minPenetration===null || Math.abs(penetration)<Math.abs(minPenetration)){

                if(justTest){
                    return true;
                }

                minPenetration = penetration;
                penetratedFaceIndex = i;
                penetratedFaceNormal.copy(normal);
                numDetectedFaces++;
            }
        }

        if(penetratedFaceIndex!==-1){
            // Setup contact
            var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
            penetratedFaceNormal.mult(minPenetration, worldPenetrationVec);

            // rj is the particle position projected to the face
            worldPenetrationVec.vadd(xi,worldPenetrationVec);
            worldPenetrationVec.vsub(xj,worldPenetrationVec);
            r.rj.copy(worldPenetrationVec);
            //var projectedToFace = xi.vsub(xj).vadd(worldPenetrationVec);
            //projectedToFace.copy(r.rj);

            //qj.vmult(r.rj,r.rj);
            penetratedFaceNormal.negate( r.ni ); // Contact normal
            r.ri.set(0,0,0); // Center of particle

            var ri = r.ri,
                rj = r.rj;

            // Make relative to bodies
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        } else {
            //.warn("Point found inside convex, but did not find penetrating face!");
        }
    }
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.boxHeightfield = function (si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    return this.convexHeightfield(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

var convexHeightfield_tmp1 = new Vec3();
var convexHeightfield_tmp2 = new Vec3();
var convexHeightfield_faceList = [0];

/**
 * @method convexHeightfield
 */
Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.convexHeightfield = function (
    convexShape,
    hfShape,
    convexPos,
    hfPos,
    convexQuat,
    hfQuat,
    convexBody,
    hfBody,
    rsi,
    rsj,
    justTest
){
    var data = hfShape.data,
        w = hfShape.elementSize,
        radius = convexShape.boundingSphereRadius,
        worldPillarOffset = convexHeightfield_tmp2,
        faceList = convexHeightfield_faceList;

    // Get sphere position to heightfield local!
    var localConvexPos = convexHeightfield_tmp1;
    Transform.pointToLocalFrame(hfPos, hfQuat, convexPos, localConvexPos);

    // Get the index of the data points to test against
    var iMinX = Math.floor((localConvexPos.x - radius) / w) - 1,
        iMaxX = Math.ceil((localConvexPos.x + radius) / w) + 1,
        iMinY = Math.floor((localConvexPos.y - radius) / w) - 1,
        iMaxY = Math.ceil((localConvexPos.y + radius) / w) + 1;

    // Bail out if we are out of the terrain
    if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length){
        return;
    }

    // Clamp index to edges
    if(iMinX < 0){ iMinX = 0; }
    if(iMaxX < 0){ iMaxX = 0; }
    if(iMinY < 0){ iMinY = 0; }
    if(iMaxY < 0){ iMaxY = 0; }
    if(iMinX >= data.length){ iMinX = data.length - 1; }
    if(iMaxX >= data.length){ iMaxX = data.length - 1; }
    if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
    if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

    var minMax = [];
    hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // Bail out if we're cant touch the bounding height box
    if(localConvexPos.z - radius > max || localConvexPos.z + radius < min){
        return;
    }

    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            var intersecting = false;

            // Lower triangle
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                intersecting = this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, justTest, faceList, null);
            }

            if(justTest && intersecting){
                return true;
            }

            // Upper triangle
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                intersecting = this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, justTest, faceList, null);
            }

            if(justTest && intersecting){
                return true;
            }
        }
    }
};

var sphereHeightfield_tmp1 = new Vec3();
var sphereHeightfield_tmp2 = new Vec3();

/**
 * @method sphereHeightfield
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.sphereHeightfield = function (
    sphereShape,
    hfShape,
    spherePos,
    hfPos,
    sphereQuat,
    hfQuat,
    sphereBody,
    hfBody,
    rsi,
    rsj,
    justTest
){
    var data = hfShape.data,
        radius = sphereShape.radius,
        w = hfShape.elementSize,
        worldPillarOffset = sphereHeightfield_tmp2;

    // Get sphere position to heightfield local!
    var localSpherePos = sphereHeightfield_tmp1;
    Transform.pointToLocalFrame(hfPos, hfQuat, spherePos, localSpherePos);

    // Get the index of the data points to test against
    var iMinX = Math.floor((localSpherePos.x - radius) / w) - 1,
        iMaxX = Math.ceil((localSpherePos.x + radius) / w) + 1,
        iMinY = Math.floor((localSpherePos.y - radius) / w) - 1,
        iMaxY = Math.ceil((localSpherePos.y + radius) / w) + 1;

    // Bail out if we are out of the terrain
    if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMaxY > data[0].length){
        return;
    }

    // Clamp index to edges
    if(iMinX < 0){ iMinX = 0; }
    if(iMaxX < 0){ iMaxX = 0; }
    if(iMinY < 0){ iMinY = 0; }
    if(iMaxY < 0){ iMaxY = 0; }
    if(iMinX >= data.length){ iMinX = data.length - 1; }
    if(iMaxX >= data.length){ iMaxX = data.length - 1; }
    if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
    if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

    var minMax = [];
    hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // Bail out if we're cant touch the bounding height box
    if(localSpherePos.z - radius > max || localSpherePos.z + radius < min){
        return;
    }

    var result = this.result;
    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            var numContactsBefore = result.length;

            var intersecting = false;

            // Lower triangle
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                intersecting = this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody, sphereShape, hfShape, justTest);
            }

            if(justTest && intersecting){
                return true;
            }

            // Upper triangle
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                intersecting = this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody, sphereShape, hfShape, justTest);
            }

            if(justTest && intersecting){
                return true;
            }

            var numContacts = result.length - numContactsBefore;

            if(numContacts > 2){
                return;
            }
            /*
            // Skip all but 1
            for (var k = 0; k < numContacts - 1; k++) {
                result.pop();
            }
            */
        }
    }
};

},{"../collision/AABB":"78Lf","../objects/Body":"UPq9","../shapes/Shape":"Ggpt","../collision/Ray":"CqEM","../math/Vec3":"XG60","../math/Transform":"CcAe","../shapes/ConvexPolyhedron":"1+Yp","../math/Quaternion":"bEmM","../solver/Solver":"n/aQ","../utils/Vec3Pool":"MTUm","../equations/ContactEquation":"waBd","../equations/FrictionEquation":"We/N"}],"0odR":[function(require,module,exports) {
module.exports = PointToPointConstraint;

var Constraint = require('./Constraint');
var ContactEquation = require('../equations/ContactEquation');
var Vec3 = require('../math/Vec3');

/**
 * Connects two bodies at given offset points.
 * @class PointToPointConstraint
 * @extends Constraint
 * @constructor
 * @param {Body} bodyA
 * @param {Vec3} pivotA The point relative to the center of mass of bodyA which bodyA is constrained to.
 * @param {Body} bodyB Body that will be constrained in a similar way to the same point as bodyA. We will therefore get a link between bodyA and bodyB. If not specified, bodyA will be constrained to a static point.
 * @param {Vec3} pivotB See pivotA.
 * @param {Number} maxForce The maximum force that should be applied to constrain the bodies.
 *
 * @example
 *     var bodyA = new Body({ mass: 1 });
 *     var bodyB = new Body({ mass: 1 });
 *     bodyA.position.set(-1, 0, 0);
 *     bodyB.position.set(1, 0, 0);
 *     bodyA.addShape(shapeA);
 *     bodyB.addShape(shapeB);
 *     world.addBody(bodyA);
 *     world.addBody(bodyB);
 *     var localPivotA = new Vec3(1, 0, 0);
 *     var localPivotB = new Vec3(-1, 0, 0);
 *     var constraint = new PointToPointConstraint(bodyA, localPivotA, bodyB, localPivotB);
 *     world.addConstraint(constraint);
 */
function PointToPointConstraint(bodyA,pivotA,bodyB,pivotB,maxForce){
    Constraint.call(this,bodyA,bodyB);

    maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;

    /**
     * Pivot, defined locally in bodyA.
     * @property {Vec3} pivotA
     */
    this.pivotA = pivotA ? pivotA.clone() : new Vec3();

    /**
     * Pivot, defined locally in bodyB.
     * @property {Vec3} pivotB
     */
    this.pivotB = pivotB ? pivotB.clone() : new Vec3();

    /**
     * @property {ContactEquation} equationX
     */
    var x = this.equationX = new ContactEquation(bodyA,bodyB);

    /**
     * @property {ContactEquation} equationY
     */
    var y = this.equationY = new ContactEquation(bodyA,bodyB);

    /**
     * @property {ContactEquation} equationZ
     */
    var z = this.equationZ = new ContactEquation(bodyA,bodyB);

    // Equations to be fed to the solver
    this.equations.push(x, y, z);

    // Make the equations bidirectional
    x.minForce = y.minForce = z.minForce = -maxForce;
    x.maxForce = y.maxForce = z.maxForce =  maxForce;

    x.ni.set(1, 0, 0);
    y.ni.set(0, 1, 0);
    z.ni.set(0, 0, 1);
}
PointToPointConstraint.prototype = new Constraint();

PointToPointConstraint.prototype.update = function(){
    var bodyA = this.bodyA;
    var bodyB = this.bodyB;
    var x = this.equationX;
    var y = this.equationY;
    var z = this.equationZ;

    // Rotate the pivots to world space
    bodyA.quaternion.vmult(this.pivotA,x.ri);
    bodyB.quaternion.vmult(this.pivotB,x.rj);

    y.ri.copy(x.ri);
    y.rj.copy(x.rj);
    z.ri.copy(x.ri);
    z.rj.copy(x.rj);
};
},{"./Constraint":"/p7L","../equations/ContactEquation":"waBd","../math/Vec3":"XG60"}],"eaF1":[function(require,module,exports) {
module.exports = ConeEquation;

var Vec3 = require('../math/Vec3');
var Mat3 = require('../math/Mat3');
var Equation = require('./Equation');

/**
 * Cone equation. Works to keep the given body world vectors aligned, or tilted within a given angle from each other.
 * @class ConeEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA] Local axis in A
 * @param {Vec3} [options.axisB] Local axis in B
 * @param {Vec3} [options.angle] The "cone angle" to keep
 * @param {number} [options.maxForce=1e6]
 * @extends Equation
 */
function ConeEquation(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

    this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

    /**
     * The cone angle to keep
     * @property {number} angle
     */
    this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;
}

ConeEquation.prototype = new Equation();
ConeEquation.prototype.constructor = ConeEquation;

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();

ConeEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,

        ni = this.axisA,
        nj = this.axisB,

        nixnj = tmpVec1,
        njxni = tmpVec2,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // Caluclate cross products
    ni.cross(nj, nixnj);
    nj.cross(ni, njxni);

    // The angle between two vector is:
    // cos(theta) = a * b / (length(a) * length(b) = { len(a) = len(b) = 1 } = a * b

    // g = a * b
    // gdot = (b x a) * wi + (a x b) * wj
    // G = [0 bxa 0 axb]
    // W = [vi wi vj wj]
    GA.rotational.copy(njxni);
    GB.rotational.copy(nixnj);

    var g = Math.cos(this.angle) - ni.dot(nj),
        GW = this.computeGW(),
        GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h * GiMf;

    return B;
};


},{"../math/Vec3":"XG60","../math/Mat3":"etZO","./Equation":"m/dE"}],"JvZw":[function(require,module,exports) {
module.exports = RotationalEquation;

var Vec3 = require('../math/Vec3');
var Mat3 = require('../math/Mat3');
var Equation = require('./Equation');

/**
 * Rotational constraint. Works to keep the local vectors orthogonal to each other in world space.
 * @class RotationalEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {number} [options.maxForce]
 * @extends Equation
 */
function RotationalEquation(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

    this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

    this.maxAngle = Math.PI / 2;
}

RotationalEquation.prototype = new Equation();
RotationalEquation.prototype.constructor = RotationalEquation;

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();

RotationalEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,

        ni = this.axisA,
        nj = this.axisB,

        nixnj = tmpVec1,
        njxni = tmpVec2,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // Caluclate cross products
    ni.cross(nj, nixnj);
    nj.cross(ni, njxni);

    // g = ni * nj
    // gdot = (nj x ni) * wi + (ni x nj) * wj
    // G = [0 njxni 0 nixnj]
    // W = [vi wi vj wj]
    GA.rotational.copy(njxni);
    GB.rotational.copy(nixnj);

    var g = Math.cos(this.maxAngle) - ni.dot(nj),
        GW = this.computeGW(),
        GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h * GiMf;

    return B;
};


},{"../math/Vec3":"XG60","../math/Mat3":"etZO","./Equation":"m/dE"}],"1bnE":[function(require,module,exports) {
module.exports = ConeTwistConstraint;

var Constraint = require('./Constraint');
var PointToPointConstraint = require('./PointToPointConstraint');
var ConeEquation = require('../equations/ConeEquation');
var RotationalEquation = require('../equations/RotationalEquation');
var ContactEquation = require('../equations/ContactEquation');
var Vec3 = require('../math/Vec3');

/**
 * @class ConeTwistConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA]
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function ConeTwistConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    // Set pivot point in between
    var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
    var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
    this.axisA = options.axisA ? options.axisA.clone() : new Vec3();
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3();

    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    this.collideConnected = !!options.collideConnected;

    this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;

    /**
     * @property {ConeEquation} coneEquation
     */
    var c = this.coneEquation = new ConeEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} twistEquation
     */
    var t = this.twistEquation = new RotationalEquation(bodyA,bodyB,options);
    this.twistAngle = typeof(options.twistAngle) !== 'undefined' ? options.twistAngle : 0;

    // Make the cone equation push the bodies toward the cone axis, not outward
    c.maxForce = 0;
    c.minForce = -maxForce;

    // Make the twist equation add torque toward the initial position
    t.maxForce = 0;
    t.minForce = -maxForce;

    this.equations.push(c, t);
}
ConeTwistConstraint.prototype = new PointToPointConstraint();
ConeTwistConstraint.constructor = ConeTwistConstraint;

var ConeTwistConstraint_update_tmpVec1 = new Vec3();
var ConeTwistConstraint_update_tmpVec2 = new Vec3();

ConeTwistConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        cone = this.coneEquation,
        twist = this.twistEquation;

    PointToPointConstraint.prototype.update.call(this);

    // Update the axes to the cone constraint
    bodyA.vectorToWorldFrame(this.axisA, cone.axisA);
    bodyB.vectorToWorldFrame(this.axisB, cone.axisB);

    // Update the world axes in the twist constraint
    this.axisA.tangents(twist.axisA, twist.axisA);
    bodyA.vectorToWorldFrame(twist.axisA, twist.axisA);

    this.axisB.tangents(twist.axisB, twist.axisB);
    bodyB.vectorToWorldFrame(twist.axisB, twist.axisB);

    cone.angle = this.angle;
    twist.maxAngle = this.twistAngle;
};


},{"./Constraint":"/p7L","./PointToPointConstraint":"0odR","../equations/ConeEquation":"eaF1","../equations/RotationalEquation":"JvZw","../equations/ContactEquation":"waBd","../math/Vec3":"XG60"}],"B/aW":[function(require,module,exports) {
var Utils = require('../utils/Utils');

module.exports = ContactMaterial;

/**
 * Defines what happens when two materials meet.
 * @class ContactMaterial
 * @constructor
 * @param {Material} m1
 * @param {Material} m2
 * @param {object} [options]
 * @param {Number} [options.friction=0.3]
 * @param {Number} [options.restitution=0.3]
 * @param {number} [options.contactEquationStiffness=1e7]
 * @param {number} [options.contactEquationRelaxation=3]
 * @param {number} [options.frictionEquationStiffness=1e7]
 * @param {Number} [options.frictionEquationRelaxation=3]
 */
function ContactMaterial(m1, m2, options){
    options = Utils.defaults(options, {
        friction: 0.3,
        restitution: 0.3,
        contactEquationStiffness: 1e7,
        contactEquationRelaxation: 3,
        frictionEquationStiffness: 1e7,
        frictionEquationRelaxation: 3
    });

    /**
     * Identifier of this material
     * @property {Number} id
     */
    this.id = ContactMaterial.idCounter++;

    /**
     * Participating materials
     * @property {Array} materials
     * @todo  Should be .materialA and .materialB instead
     */
    this.materials = [m1, m2];

    /**
     * Friction coefficient
     * @property {Number} friction
     */
    this.friction = options.friction;

    /**
     * Restitution coefficient
     * @property {Number} restitution
     */
    this.restitution = options.restitution;

    /**
     * Stiffness of the produced contact equations
     * @property {Number} contactEquationStiffness
     */
    this.contactEquationStiffness = options.contactEquationStiffness;

    /**
     * Relaxation time of the produced contact equations
     * @property {Number} contactEquationRelaxation
     */
    this.contactEquationRelaxation = options.contactEquationRelaxation;

    /**
     * Stiffness of the produced friction equations
     * @property {Number} frictionEquationStiffness
     */
    this.frictionEquationStiffness = options.frictionEquationStiffness;

    /**
     * Relaxation time of the produced friction equations
     * @property {Number} frictionEquationRelaxation
     */
    this.frictionEquationRelaxation = options.frictionEquationRelaxation;
}

ContactMaterial.idCounter = 0;

},{"../utils/Utils":"Yq2j"}],"Qiai":[function(require,module,exports) {
module.exports = Cylinder;

var Shape = require('./Shape');
var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var ConvexPolyhedron = require('./ConvexPolyhedron');

/**
 * @class Cylinder
 * @constructor
 * @extends ConvexPolyhedron
 * @author schteppe / https://github.com/schteppe
 * @param {Number} radiusTop
 * @param {Number} radiusBottom
 * @param {Number} height
 * @param {Number} numSegments The number of segments to build the cylinder out of
 */
function Cylinder( radiusTop, radiusBottom, height , numSegments ) {
    var N = numSegments,
        verts = [],
        axes = [],
        faces = [],
        bottomface = [],
        topface = [],
        cos = Math.cos,
        sin = Math.sin;

    // First bottom point
    verts.push(new Vec3(radiusBottom*cos(0),
                               radiusBottom*sin(0),
                               -height*0.5));
    bottomface.push(0);

    // First top point
    verts.push(new Vec3(radiusTop*cos(0),
                               radiusTop*sin(0),
                               height*0.5));
    topface.push(1);

    for(var i=0; i<N; i++){
        var theta = 2*Math.PI/N * (i+1);
        var thetaN = 2*Math.PI/N * (i+0.5);
        if(i<N-1){
            // Bottom
            verts.push(new Vec3(radiusBottom*cos(theta),
                                       radiusBottom*sin(theta),
                                       -height*0.5));
            bottomface.push(2*i+2);
            // Top
            verts.push(new Vec3(radiusTop*cos(theta),
                                       radiusTop*sin(theta),
                                       height*0.5));
            topface.push(2*i+3);

            // Face
            faces.push([2*i+2, 2*i+3, 2*i+1,2*i]);
        } else {
            faces.push([0,1, 2*i+1, 2*i]); // Connect
        }

        // Axis: we can cut off half of them if we have even number of segments
        if(N % 2 === 1 || i < N / 2){
            axes.push(new Vec3(cos(thetaN), sin(thetaN), 0));
        }
    }
    faces.push(topface);
    axes.push(new Vec3(0,0,1));

    // Reorder bottom face
    var temp = [];
    for(var i=0; i<bottomface.length; i++){
        temp.push(bottomface[bottomface.length - i - 1]);
    }
    faces.push(temp);

    ConvexPolyhedron.call( this, verts, faces, axes );
}

Cylinder.prototype = new ConvexPolyhedron();

},{"./Shape":"Ggpt","../math/Vec3":"XG60","../math/Quaternion":"bEmM","./ConvexPolyhedron":"1+Yp"}],"xpJg":[function(require,module,exports) {
module.exports = DistanceConstraint;

var Constraint = require('./Constraint');
var ContactEquation = require('../equations/ContactEquation');

/**
 * Constrains two bodies to be at a constant distance from each others center of mass.
 * @class DistanceConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} [distance] The distance to keep. If undefined, it will be set to the current distance between bodyA and bodyB
 * @param {Number} [maxForce=1e6]
 * @extends Constraint
 */
function DistanceConstraint(bodyA,bodyB,distance,maxForce){
    Constraint.call(this,bodyA,bodyB);

    if(typeof(distance)==="undefined") {
        distance = bodyA.position.distanceTo(bodyB.position);
    }

    if(typeof(maxForce)==="undefined") {
        maxForce = 1e6;
    }

    /**
     * @property {number} distance
     */
    this.distance = distance;

    /**
     * @property {ContactEquation} distanceEquation
     */
    var eq = this.distanceEquation = new ContactEquation(bodyA, bodyB);
    this.equations.push(eq);

    // Make it bidirectional
    eq.minForce = -maxForce;
    eq.maxForce =  maxForce;
}
DistanceConstraint.prototype = new Constraint();

DistanceConstraint.prototype.update = function(){
    var bodyA = this.bodyA;
    var bodyB = this.bodyB;
    var eq = this.distanceEquation;
    var halfDist = this.distance * 0.5;
    var normal = eq.ni;

    bodyB.position.vsub(bodyA.position, normal);
    normal.normalize();
    normal.mult(halfDist, eq.ri);
    normal.mult(-halfDist, eq.rj);
};
},{"./Constraint":"/p7L","../equations/ContactEquation":"waBd"}],"7tMV":[function(require,module,exports) {
module.exports = GSSolver;

var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var Solver = require('./Solver');

/**
 * Constraint equation Gauss-Seidel solver.
 * @class GSSolver
 * @constructor
 * @todo The spook parameters should be specified for each constraint, not globally.
 * @author schteppe / https://github.com/schteppe
 * @see https://www8.cs.umu.se/kurser/5DV058/VT09/lectures/spooknotes.pdf
 * @extends Solver
 */
function GSSolver(){
    Solver.call(this);

    /**
     * The number of solver iterations determines quality of the constraints in the world. The more iterations, the more correct simulation. More iterations need more computations though. If you have a large gravity force in your world, you will need more iterations.
     * @property iterations
     * @type {Number}
     * @todo write more about solver and iterations in the wiki
     */
    this.iterations = 10;

    /**
     * When tolerance is reached, the system is assumed to be converged.
     * @property tolerance
     * @type {Number}
     */
    this.tolerance = 1e-7;
}
GSSolver.prototype = new Solver();

var GSSolver_solve_lambda = []; // Just temporary number holders that we want to reuse each solve.
var GSSolver_solve_invCs = [];
var GSSolver_solve_Bs = [];
GSSolver.prototype.solve = function(dt,world){
    var iter = 0,
        maxIter = this.iterations,
        tolSquared = this.tolerance*this.tolerance,
        equations = this.equations,
        Neq = equations.length,
        bodies = world.bodies,
        Nbodies = bodies.length,
        h = dt,
        q, B, invC, deltalambda, deltalambdaTot, GWlambda, lambdaj;

    // Update solve mass
    if(Neq !== 0){
        for(var i=0; i!==Nbodies; i++){
            bodies[i].updateSolveMassProperties();
        }
    }

    // Things that does not change during iteration can be computed once
    var invCs = GSSolver_solve_invCs,
        Bs = GSSolver_solve_Bs,
        lambda = GSSolver_solve_lambda;
    invCs.length = Neq;
    Bs.length = Neq;
    lambda.length = Neq;
    for(var i=0; i!==Neq; i++){
        var c = equations[i];
        lambda[i] = 0.0;
        Bs[i] = c.computeB(h);
        invCs[i] = 1.0 / c.computeC();
    }

    if(Neq !== 0){

        // Reset vlambda
        for(var i=0; i!==Nbodies; i++){
            var b=bodies[i],
                vlambda=b.vlambda,
                wlambda=b.wlambda;
            vlambda.set(0,0,0);
            wlambda.set(0,0,0);
        }

        // Iterate over equations
        for(iter=0; iter!==maxIter; iter++){

            // Accumulate the total error for each iteration.
            deltalambdaTot = 0.0;

            for(var j=0; j!==Neq; j++){

                var c = equations[j];

                // Compute iteration
                B = Bs[j];
                invC = invCs[j];
                lambdaj = lambda[j];
                GWlambda = c.computeGWlambda();
                deltalambda = invC * ( B - GWlambda - c.eps * lambdaj );

                // Clamp if we are not within the min/max interval
                if(lambdaj + deltalambda < c.minForce){
                    deltalambda = c.minForce - lambdaj;
                } else if(lambdaj + deltalambda > c.maxForce){
                    deltalambda = c.maxForce - lambdaj;
                }
                lambda[j] += deltalambda;

                deltalambdaTot += deltalambda > 0.0 ? deltalambda : -deltalambda; // abs(deltalambda)

                c.addToWlambda(deltalambda);
            }

            // If the total error is small enough - stop iterate
            if(deltalambdaTot*deltalambdaTot < tolSquared){
                break;
            }
        }

        // Add result to velocity
        for(var i=0; i!==Nbodies; i++){
            var b=bodies[i],
                v=b.velocity,
                w=b.angularVelocity;

            b.vlambda.vmul(b.linearFactor, b.vlambda);
            v.vadd(b.vlambda, v);

            b.wlambda.vmul(b.angularFactor, b.wlambda);
            w.vadd(b.wlambda, w);
        }

        // Set the .multiplier property of each equation
        var l = equations.length;
        var invDt = 1 / h;
        while(l--){
            equations[l].multiplier = lambda[l] * invDt;
        }
    }

    return iter;
};

},{"../math/Vec3":"XG60","../math/Quaternion":"bEmM","./Solver":"n/aQ"}],"pxpW":[function(require,module,exports) {
module.exports = GridBroadphase;

var Broadphase = require('./Broadphase');
var Vec3 = require('../math/Vec3');
var Shape = require('../shapes/Shape');

/**
 * Axis aligned uniform grid broadphase.
 * @class GridBroadphase
 * @constructor
 * @extends Broadphase
 * @todo Needs support for more than just planes and spheres.
 * @param {Vec3} aabbMin
 * @param {Vec3} aabbMax
 * @param {Number} nx Number of boxes along x
 * @param {Number} ny Number of boxes along y
 * @param {Number} nz Number of boxes along z
 */
function GridBroadphase(aabbMin,aabbMax,nx,ny,nz){
    Broadphase.apply(this);
    this.nx = nx || 10;
    this.ny = ny || 10;
    this.nz = nz || 10;
    this.aabbMin = aabbMin || new Vec3(100,100,100);
    this.aabbMax = aabbMax || new Vec3(-100,-100,-100);
	var nbins = this.nx * this.ny * this.nz;
	if (nbins <= 0) {
		throw "GridBroadphase: Each dimension's n must be >0";
	}
    this.bins = [];
	this.binLengths = []; //Rather than continually resizing arrays (thrashing the memory), just record length and allow them to grow
	this.bins.length = nbins;
	this.binLengths.length = nbins;
	for (var i=0;i<nbins;i++) {
		this.bins[i]=[];
		this.binLengths[i]=0;
	}
}
GridBroadphase.prototype = new Broadphase();
GridBroadphase.prototype.constructor = GridBroadphase;

/**
 * Get all the collision pairs in the physics world
 * @method collisionPairs
 * @param {World} world
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
var GridBroadphase_collisionPairs_d = new Vec3();
var GridBroadphase_collisionPairs_binPos = new Vec3();
GridBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
    var N = world.numObjects(),
        bodies = world.bodies;

    var max = this.aabbMax,
        min = this.aabbMin,
        nx = this.nx,
        ny = this.ny,
        nz = this.nz;

	var xstep = ny*nz;
	var ystep = nz;
	var zstep = 1;

    var xmax = max.x,
        ymax = max.y,
        zmax = max.z,
        xmin = min.x,
        ymin = min.y,
        zmin = min.z;

    var xmult = nx / (xmax-xmin),
        ymult = ny / (ymax-ymin),
        zmult = nz / (zmax-zmin);

    var binsizeX = (xmax - xmin) / nx,
        binsizeY = (ymax - ymin) / ny,
        binsizeZ = (zmax - zmin) / nz;

	var binRadius = Math.sqrt(binsizeX*binsizeX + binsizeY*binsizeY + binsizeZ*binsizeZ) * 0.5;

    var types = Shape.types;
    var SPHERE =            types.SPHERE,
        PLANE =             types.PLANE,
        BOX =               types.BOX,
        COMPOUND =          types.COMPOUND,
        CONVEXPOLYHEDRON =  types.CONVEXPOLYHEDRON;

    var bins=this.bins,
		binLengths=this.binLengths,
        Nbins=this.bins.length;

    // Reset bins
    for(var i=0; i!==Nbins; i++){
        binLengths[i] = 0;
    }

    var ceil = Math.ceil;
	var min = Math.min;
	var max = Math.max;

	function addBoxToBins(x0,y0,z0,x1,y1,z1,bi) {
		var xoff0 = ((x0 - xmin) * xmult)|0,
			yoff0 = ((y0 - ymin) * ymult)|0,
			zoff0 = ((z0 - zmin) * zmult)|0,
			xoff1 = ceil((x1 - xmin) * xmult),
			yoff1 = ceil((y1 - ymin) * ymult),
			zoff1 = ceil((z1 - zmin) * zmult);

		if (xoff0 < 0) { xoff0 = 0; } else if (xoff0 >= nx) { xoff0 = nx - 1; }
		if (yoff0 < 0) { yoff0 = 0; } else if (yoff0 >= ny) { yoff0 = ny - 1; }
		if (zoff0 < 0) { zoff0 = 0; } else if (zoff0 >= nz) { zoff0 = nz - 1; }
		if (xoff1 < 0) { xoff1 = 0; } else if (xoff1 >= nx) { xoff1 = nx - 1; }
		if (yoff1 < 0) { yoff1 = 0; } else if (yoff1 >= ny) { yoff1 = ny - 1; }
		if (zoff1 < 0) { zoff1 = 0; } else if (zoff1 >= nz) { zoff1 = nz - 1; }

		xoff0 *= xstep;
		yoff0 *= ystep;
		zoff0 *= zstep;
		xoff1 *= xstep;
		yoff1 *= ystep;
		zoff1 *= zstep;

		for (var xoff = xoff0; xoff <= xoff1; xoff += xstep) {
			for (var yoff = yoff0; yoff <= yoff1; yoff += ystep) {
				for (var zoff = zoff0; zoff <= zoff1; zoff += zstep) {
					var idx = xoff+yoff+zoff;
					bins[idx][binLengths[idx]++] = bi;
				}
			}
		}
	}

    // Put all bodies into the bins
    for(var i=0; i!==N; i++){
        var bi = bodies[i];
        var si = bi.shape;

        switch(si.type){
        case SPHERE:
            // Put in bin
            // check if overlap with other bins
            var x = bi.position.x,
                y = bi.position.y,
                z = bi.position.z;
            var r = si.radius;

			addBoxToBins(x-r, y-r, z-r, x+r, y+r, z+r, bi);
            break;

        case PLANE:
            if(si.worldNormalNeedsUpdate){
                si.computeWorldNormal(bi.quaternion);
            }
            var planeNormal = si.worldNormal;

			//Relative position from origin of plane object to the first bin
			//Incremented as we iterate through the bins
			var xreset = xmin + binsizeX*0.5 - bi.position.x,
				yreset = ymin + binsizeY*0.5 - bi.position.y,
				zreset = zmin + binsizeZ*0.5 - bi.position.z;

            var d = GridBroadphase_collisionPairs_d;
			d.set(xreset, yreset, zreset);

			for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) {
				for (var yi = 0, yoff = 0; yi !== ny; yi++, yoff += ystep, d.z = zreset, d.y += binsizeY) {
					for (var zi = 0, zoff = 0; zi !== nz; zi++, zoff += zstep, d.z += binsizeZ) {
						if (d.dot(planeNormal) < binRadius) {
							var idx = xoff + yoff + zoff;
							bins[idx][binLengths[idx]++] = bi;
						}
					}
				}
			}
            break;

        default:
			if (bi.aabbNeedsUpdate) {
				bi.computeAABB();
			}

			addBoxToBins(
				bi.aabb.lowerBound.x,
				bi.aabb.lowerBound.y,
				bi.aabb.lowerBound.z,
				bi.aabb.upperBound.x,
				bi.aabb.upperBound.y,
				bi.aabb.upperBound.z,
				bi);
            break;
        }
    }

    // Check each bin
    for(var i=0; i!==Nbins; i++){
		var binLength = binLengths[i];
		//Skip bins with no potential collisions
		if (binLength > 1) {
			var bin = bins[i];

			// Do N^2 broadphase inside
			for(var xi=0; xi!==binLength; xi++){
				var bi = bin[xi];
				for(var yi=0; yi!==xi; yi++){
					var bj = bin[yi];
					if(this.needBroadphaseCollision(bi,bj)){
						this.intersectionTest(bi,bj,pairs1,pairs2);
					}
				}
			}
		}
    }

//	for (var zi = 0, zoff=0; zi < nz; zi++, zoff+= zstep) {
//		//.log("layer "+zi);
//		for (var yi = 0, yoff=0; yi < ny; yi++, yoff += ystep) {
//			var row = '';
//			for (var xi = 0, xoff=0; xi < nx; xi++, xoff += xstep) {
//				var idx = xoff + yoff + zoff;
//				row += ' ' + binLengths[idx];
//			}
//			//.log(row);
//		}
//	}

    this.makePairsUnique(pairs1,pairs2);
};

},{"./Broadphase":"ksz+","../math/Vec3":"XG60","../shapes/Shape":"Ggpt"}],"MAvk":[function(require,module,exports) {
var Shape = require('./Shape');
var ConvexPolyhedron = require('./ConvexPolyhedron');
var Vec3 = require('../math/Vec3');
var Utils = require('../utils/Utils');

module.exports = Heightfield;

/**
 * Heightfield shape class. Height data is given as an array. These data points are spread out evenly with a given distance.
 * @class Heightfield
 * @extends Shape
 * @constructor
 * @param {Array} data An array of Y values that will be used to construct the terrain.
 * @param {object} options
 * @param {Number} [options.minValue] Minimum value of the data points in the data array. Will be computed automatically if not given.
 * @param {Number} [options.maxValue] Maximum value.
 * @param {Number} [options.elementSize=0.1] World spacing between the data points in X direction.
 * @todo Should be possible to use along all axes, not just y
 * @todo should be possible to scale along all axes
 *
 * @example
 *     // Generate some height data (y-values).
 *     var data = [];
 *     for(var i = 0; i < 1000; i++){
 *         var y = 0.5 * Math.cos(0.2 * i);
 *         data.push(y);
 *     }
 *
 *     // Create the heightfield shape
 *     var heightfieldShape = new Heightfield(data, {
 *         elementSize: 1 // Distance between the data points in X and Y directions
 *     });
 *     var heightfieldBody = new Body();
 *     heightfieldBody.addShape(heightfieldShape);
 *     world.addBody(heightfieldBody);
 */
function Heightfield(data, options){
    options = Utils.defaults(options, {
        maxValue : null,
        minValue : null,
        elementSize : 1
    });

    /**
     * An array of numbers, or height values, that are spread out along the x axis.
     * @property {array} data
     */
    this.data = data;

    /**
     * Max value of the data
     * @property {number} maxValue
     */
    this.maxValue = options.maxValue;

    /**
     * Max value of the data
     * @property {number} minValue
     */
    this.minValue = options.minValue;

    /**
     * The width of each element
     * @property {number} elementSize
     * @todo elementSizeX and Y
     */
    this.elementSize = options.elementSize;

    if(options.minValue === null){
        this.updateMinValue();
    }
    if(options.maxValue === null){
        this.updateMaxValue();
    }

    this.cacheEnabled = true;

    Shape.call(this, {
        type: Shape.types.HEIGHTFIELD
    });

    this.pillarConvex = new ConvexPolyhedron();
    this.pillarOffset = new Vec3();

    this.updateBoundingSphereRadius();

    // "i_j_isUpper" => { convex: ..., offset: ... }
    // for example:
    // _cachedPillars["0_2_1"]
    this._cachedPillars = {};
}
Heightfield.prototype = new Shape();

/**
 * Call whenever you change the data array.
 * @method update
 */
Heightfield.prototype.update = function(){
    this._cachedPillars = {};
};

/**
 * Update the .minValue property
 * @method updateMinValue
 */
Heightfield.prototype.updateMinValue = function(){
    var data = this.data;
    var minValue = data[0][0];
    for(var i=0; i !== data.length; i++){
        for(var j=0; j !== data[i].length; j++){
            var v = data[i][j];
            if(v < minValue){
                minValue = v;
            }
        }
    }
    this.minValue = minValue;
};

/**
 * Update the .maxValue property
 * @method updateMaxValue
 */
Heightfield.prototype.updateMaxValue = function(){
    var data = this.data;
    var maxValue = data[0][0];
    for(var i=0; i !== data.length; i++){
        for(var j=0; j !== data[i].length; j++){
            var v = data[i][j];
            if(v > maxValue){
                maxValue = v;
            }
        }
    }
    this.maxValue = maxValue;
};

/**
 * Set the height value at an index. Don't forget to update maxValue and minValue after you're done.
 * @method setHeightValueAtIndex
 * @param {integer} xi
 * @param {integer} yi
 * @param {number} value
 */
Heightfield.prototype.setHeightValueAtIndex = function(xi, yi, value){
    var data = this.data;
    data[xi][yi] = value;

    // Invalidate cache
    this.clearCachedConvexTrianglePillar(xi, yi, false);
    if(xi > 0){
        this.clearCachedConvexTrianglePillar(xi - 1, yi, true);
        this.clearCachedConvexTrianglePillar(xi - 1, yi, false);
    }
    if(yi > 0){
        this.clearCachedConvexTrianglePillar(xi, yi - 1, true);
        this.clearCachedConvexTrianglePillar(xi, yi - 1, false);
    }
    if(yi > 0 && xi > 0){
        this.clearCachedConvexTrianglePillar(xi - 1, yi - 1, true);
    }
};

/**
 * Get max/min in a rectangle in the matrix data
 * @method getRectMinMax
 * @param  {integer} iMinX
 * @param  {integer} iMinY
 * @param  {integer} iMaxX
 * @param  {integer} iMaxY
 * @param  {array} [result] An array to store the results in.
 * @return {array} The result array, if it was passed in. Minimum will be at position 0 and max at 1.
 */
Heightfield.prototype.getRectMinMax = function (iMinX, iMinY, iMaxX, iMaxY, result) {
    result = result || [];

    // Get max and min of the data
    var data = this.data,
        max = this.minValue; // Set first value
    for(var i = iMinX; i <= iMaxX; i++){
        for(var j = iMinY; j <= iMaxY; j++){
            var height = data[i][j];
            if(height > max){
                max = height;
            }
        }
    }

    result[0] = this.minValue;
    result[1] = max;
};



/**
 * Get the index of a local position on the heightfield. The indexes indicate the rectangles, so if your terrain is made of N x N height data points, you will have rectangle indexes ranging from 0 to N-1.
 * @method getIndexOfPosition
 * @param  {number} x
 * @param  {number} y
 * @param  {array} result Two-element array
 * @param  {boolean} clamp If the position should be clamped to the heightfield edge.
 * @return {boolean}
 */
Heightfield.prototype.getIndexOfPosition = function (x, y, result, clamp) {

    // Get the index of the data points to test against
    var w = this.elementSize;
    var data = this.data;
    var xi = Math.floor(x / w);
    var yi = Math.floor(y / w);

    result[0] = xi;
    result[1] = yi;

    if(clamp){
        // Clamp index to edges
        if(xi < 0){ xi = 0; }
        if(yi < 0){ yi = 0; }
        if(xi >= data.length - 1){ xi = data.length - 1; }
        if(yi >= data[0].length - 1){ yi = data[0].length - 1; }
    }

    // Bail out if we are out of the terrain
    if(xi < 0 || yi < 0 || xi >= data.length-1 || yi >= data[0].length-1){
        return false;
    }

    return true;
};


var getHeightAt_idx = [];
var getHeightAt_weights = new Vec3();
var getHeightAt_a = new Vec3();
var getHeightAt_b = new Vec3();
var getHeightAt_c = new Vec3();

Heightfield.prototype.getTriangleAt = function(x, y, edgeClamp, a, b, c){
    var idx = getHeightAt_idx;
    this.getIndexOfPosition(x, y, idx, edgeClamp);
    var xi = idx[0];
    var yi = idx[1];

    var data = this.data;
    if(edgeClamp){
        xi = Math.min(data.length - 2, Math.max(0, xi));
        yi = Math.min(data[0].length - 2, Math.max(0, yi));
    }

    var elementSize = this.elementSize;
    var lowerDist2 = Math.pow(x / elementSize - xi, 2) + Math.pow(y / elementSize - yi, 2);
    var upperDist2 = Math.pow(x / elementSize - (xi + 1), 2) + Math.pow(y / elementSize - (yi + 1), 2);
    var upper = lowerDist2 > upperDist2;
    this.getTriangle(xi, yi, upper, a, b, c);
    return upper;
};

var getNormalAt_a = new Vec3();
var getNormalAt_b = new Vec3();
var getNormalAt_c = new Vec3();
var getNormalAt_e0 = new Vec3();
var getNormalAt_e1 = new Vec3();
Heightfield.prototype.getNormalAt = function(x, y, edgeClamp, result){
    var a = getNormalAt_a;
    var b = getNormalAt_b;
    var c = getNormalAt_c;
    var e0 = getNormalAt_e0;
    var e1 = getNormalAt_e1;
    this.getTriangleAt(x, y, edgeClamp, a, b, c);
    b.vsub(a, e0);
    c.vsub(a, e1);
    e0.cross(e1, result);
    result.normalize();
};


/**
 * Get an AABB of a square in the heightfield
 * @param  {number} xi
 * @param  {number} yi
 * @param  {AABB} result
 */
Heightfield.prototype.getAabbAtIndex = function(xi, yi, result){
    var data = this.data;
    var elementSize = this.elementSize;

    result.lowerBound.set(
        xi * elementSize,
        yi * elementSize,
        data[xi][yi]
    );
    result.upperBound.set(
        (xi + 1) * elementSize,
        (yi + 1) * elementSize,
        data[xi + 1][yi + 1]
    );
};


/**
 * Get the height in the heightfield at a given position
 * @param  {number} x
 * @param  {number} y
 * @param  {boolean} edgeClamp
 * @return {number}
 */
Heightfield.prototype.getHeightAt = function(x, y, edgeClamp){
    var data = this.data;
    var a = getHeightAt_a;
    var b = getHeightAt_b;
    var c = getHeightAt_c;
    var idx = getHeightAt_idx;

    this.getIndexOfPosition(x, y, idx, edgeClamp);
    var xi = idx[0];
    var yi = idx[1];
    if(edgeClamp){
        xi = Math.min(data.length - 2, Math.max(0, xi));
        yi = Math.min(data[0].length - 2, Math.max(0, yi));
    }
    var upper = this.getTriangleAt(x, y, edgeClamp, a, b, c);
    barycentricWeights(x, y, a.x, a.y, b.x, b.y, c.x, c.y, getHeightAt_weights);

    var w = getHeightAt_weights;

    if(upper){

        // Top triangle verts
        return data[xi + 1][yi + 1] * w.x + data[xi][yi + 1] * w.y + data[xi + 1][yi] * w.z;

    } else {

        // Top triangle verts
        return data[xi][yi] * w.x + data[xi + 1][yi] * w.y + data[xi][yi + 1] * w.z;
    }
};

// from https://en.wikipedia.org/wiki/Barycentric_coordinate_system
function barycentricWeights(x, y, ax, ay, bx, by, cx, cy, result){
    result.x = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / ((by - cy) * (ax - cx) + (cx - bx) * (ay - cy));
    result.y = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / ((by - cy) * (ax - cx) + (cx - bx) * (ay - cy));
    result.z = 1 - result.x - result.y;
}

Heightfield.prototype.getCacheConvexTrianglePillarKey = function(xi, yi, getUpperTriangle){
    return xi + '_' + yi + '_' + (getUpperTriangle ? 1 : 0);
};

Heightfield.prototype.getCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    return this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
};

Heightfield.prototype.setCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle, convex, offset){
    this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)] = {
        convex: convex,
        offset: offset
    };
};

Heightfield.prototype.clearCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
};

/**
 * Get a triangle from the heightfield
 * @param  {number} xi
 * @param  {number} yi
 * @param  {boolean} upper
 * @param  {Vec3} a
 * @param  {Vec3} b
 * @param  {Vec3} c
 */
Heightfield.prototype.getTriangle = function(xi, yi, upper, a, b, c){
    var data = this.data;
    var elementSize = this.elementSize;

    if(upper){

        // Top triangle verts
        a.set(
            (xi + 1) * elementSize,
            (yi + 1) * elementSize,
            data[xi + 1][yi + 1]
        );
        b.set(
            xi * elementSize,
            (yi + 1) * elementSize,
            data[xi][yi + 1]
        );
        c.set(
            (xi + 1) * elementSize,
            yi * elementSize,
            data[xi + 1][yi]
        );

    } else {

        // Top triangle verts
        a.set(
            xi * elementSize,
            yi * elementSize,
            data[xi][yi]
        );
        b.set(
            (xi + 1) * elementSize,
            yi * elementSize,
            data[xi + 1][yi]
        );
        c.set(
            xi * elementSize,
            (yi + 1) * elementSize,
            data[xi][yi + 1]
        );
    }
};

/**
 * Get a triangle in the terrain in the form of a triangular convex shape.
 * @method getConvexTrianglePillar
 * @param  {integer} i
 * @param  {integer} j
 * @param  {boolean} getUpperTriangle
 */
Heightfield.prototype.getConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    var result = this.pillarConvex;
    var offsetResult = this.pillarOffset;

    if(this.cacheEnabled){
        var data = this.getCachedConvexTrianglePillar(xi, yi, getUpperTriangle);
        if(data){
            this.pillarConvex = data.convex;
            this.pillarOffset = data.offset;
            return;
        }

        result = new ConvexPolyhedron();
        offsetResult = new Vec3();

        this.pillarConvex = result;
        this.pillarOffset = offsetResult;
    }

    var data = this.data;
    var elementSize = this.elementSize;
    var faces = result.faces;

    // Reuse verts if possible
    result.vertices.length = 6;
    for (var i = 0; i < 6; i++) {
        if(!result.vertices[i]){
            result.vertices[i] = new Vec3();
        }
    }

    // Reuse faces if possible
    faces.length = 5;
    for (var i = 0; i < 5; i++) {
        if(!faces[i]){
            faces[i] = [];
        }
    }

    var verts = result.vertices;

    var h = (Math.min(
        data[xi][yi],
        data[xi+1][yi],
        data[xi][yi+1],
        data[xi+1][yi+1]
    ) - this.minValue ) / 2 + this.minValue;

    if (!getUpperTriangle) {

        // Center of the triangle pillar - all polygons are given relative to this one
        offsetResult.set(
            (xi + 0.25) * elementSize, // sort of center of a triangle
            (yi + 0.25) * elementSize,
            h // vertical center
        );

        // Top triangle verts
        verts[0].set(
            -0.25 * elementSize,
            -0.25 * elementSize,
            data[xi][yi] - h
        );
        verts[1].set(
            0.75 * elementSize,
            -0.25 * elementSize,
            data[xi + 1][yi] - h
        );
        verts[2].set(
            -0.25 * elementSize,
            0.75 * elementSize,
            data[xi][yi + 1] - h
        );

        // bottom triangle verts
        verts[3].set(
            -0.25 * elementSize,
            -0.25 * elementSize,
            -h-1
        );
        verts[4].set(
            0.75 * elementSize,
            -0.25 * elementSize,
            -h-1
        );
        verts[5].set(
            -0.25 * elementSize,
            0.75  * elementSize,
            -h-1
        );

        // top triangle
        faces[0][0] = 0;
        faces[0][1] = 1;
        faces[0][2] = 2;

        // bottom triangle
        faces[1][0] = 5;
        faces[1][1] = 4;
        faces[1][2] = 3;

        // -x facing quad
        faces[2][0] = 0;
        faces[2][1] = 2;
        faces[2][2] = 5;
        faces[2][3] = 3;

        // -y facing quad
        faces[3][0] = 1;
        faces[3][1] = 0;
        faces[3][2] = 3;
        faces[3][3] = 4;

        // +xy facing quad
        faces[4][0] = 4;
        faces[4][1] = 5;
        faces[4][2] = 2;
        faces[4][3] = 1;


    } else {

        // Center of the triangle pillar - all polygons are given relative to this one
        offsetResult.set(
            (xi + 0.75) * elementSize, // sort of center of a triangle
            (yi + 0.75) * elementSize,
            h // vertical center
        );

        // Top triangle verts
        verts[0].set(
            0.25 * elementSize,
            0.25 * elementSize,
            data[xi + 1][yi + 1] - h
        );
        verts[1].set(
            -0.75 * elementSize,
            0.25 * elementSize,
            data[xi][yi + 1] - h
        );
        verts[2].set(
            0.25 * elementSize,
            -0.75 * elementSize,
            data[xi + 1][yi] - h
        );

        // bottom triangle verts
        verts[3].set(
            0.25 * elementSize,
            0.25 * elementSize,
            - h-1
        );
        verts[4].set(
            -0.75 * elementSize,
            0.25 * elementSize,
            - h-1
        );
        verts[5].set(
            0.25 * elementSize,
            -0.75 * elementSize,
            - h-1
        );

        // Top triangle
        faces[0][0] = 0;
        faces[0][1] = 1;
        faces[0][2] = 2;

        // bottom triangle
        faces[1][0] = 5;
        faces[1][1] = 4;
        faces[1][2] = 3;

        // +x facing quad
        faces[2][0] = 2;
        faces[2][1] = 5;
        faces[2][2] = 3;
        faces[2][3] = 0;

        // +y facing quad
        faces[3][0] = 3;
        faces[3][1] = 4;
        faces[3][2] = 1;
        faces[3][3] = 0;

        // -xy facing quad
        faces[4][0] = 1;
        faces[4][1] = 4;
        faces[4][2] = 5;
        faces[4][3] = 2;
    }

    result.computeNormals();
    result.computeEdges();
    result.updateBoundingSphereRadius();

    this.setCachedConvexTrianglePillar(xi, yi, getUpperTriangle, result, offsetResult);
};

Heightfield.prototype.calculateLocalInertia = function(mass, target){
    target = target || new Vec3();
    target.set(0, 0, 0);
    return target;
};

Heightfield.prototype.volume = function(){
    return Number.MAX_VALUE; // The terrain is infinite
};

Heightfield.prototype.calculateWorldAABB = function(pos, quat, min, max){
    // TODO: do it properly
    min.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    max.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
};

Heightfield.prototype.updateBoundingSphereRadius = function(){
    // Use the bounding box of the min/max values
    var data = this.data,
        s = this.elementSize;
    this.boundingSphereRadius = new Vec3(data.length * s, data[0].length * s, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
};

/**
 * Sets the height values from an image. Currently only supported in browser.
 * @method setHeightsFromImage
 * @param {Image} image
 * @param {Vec3} scale
 */
Heightfield.prototype.setHeightsFromImage = function(image, scale){
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    var imageData = context.getImageData(0, 0, image.width, image.height);

    var matrix = this.data;
    matrix.length = 0;
    this.elementSize = Math.abs(scale.x) / imageData.width;
    for(var i=0; i<imageData.height; i++){
        var row = [];
        for(var j=0; j<imageData.width; j++){
            var a = imageData.data[(i*imageData.height + j) * 4];
            var b = imageData.data[(i*imageData.height + j) * 4 + 1];
            var c = imageData.data[(i*imageData.height + j) * 4 + 2];
            var height = (a + b + c) / 4 / 255 * scale.z;
            if(scale.x < 0){
                row.push(height);
            } else {
                row.unshift(height);
            }
        }
        if(scale.y < 0){
            matrix.unshift(row);
        } else {
            matrix.push(row);
        }
    }
    this.updateMaxValue();
    this.updateMinValue();
    this.update();
};
},{"./Shape":"Ggpt","./ConvexPolyhedron":"1+Yp","../math/Vec3":"XG60","../utils/Utils":"Yq2j"}],"awjA":[function(require,module,exports) {
module.exports = RotationalMotorEquation;

var Vec3 = require('../math/Vec3');
var Mat3 = require('../math/Mat3');
var Equation = require('./Equation');

/**
 * Rotational motor constraint. Tries to keep the relative angular velocity of the bodies to a given value.
 * @class RotationalMotorEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} maxForce
 * @extends Equation
 */
function RotationalMotorEquation(bodyA, bodyB, maxForce){
    maxForce = typeof(maxForce)!=='undefined' ? maxForce : 1e6;
    Equation.call(this,bodyA,bodyB,-maxForce,maxForce);

    /**
     * World oriented rotational axis
     * @property {Vec3} axisA
     */
    this.axisA = new Vec3();

    /**
     * World oriented rotational axis
     * @property {Vec3} axisB
     */
    this.axisB = new Vec3(); // World oriented rotational axis

    /**
     * Motor velocity
     * @property {Number} targetVelocity
     */
    this.targetVelocity = 0;
}

RotationalMotorEquation.prototype = new Equation();
RotationalMotorEquation.prototype.constructor = RotationalMotorEquation;

RotationalMotorEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,

        axisA = this.axisA,
        axisB = this.axisB,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // g = 0
    // gdot = axisA * wi - axisB * wj
    // gdot = G * W = G * [vi wi vj wj]
    // =>
    // G = [0 axisA 0 -axisB]

    GA.rotational.copy(axisA);
    axisB.negate(GB.rotational);

    var GW = this.computeGW() - this.targetVelocity,
        GiMf = this.computeGiMf();

    var B = - GW * b - h * GiMf;

    return B;
};

},{"../math/Vec3":"XG60","../math/Mat3":"etZO","./Equation":"m/dE"}],"eA4Z":[function(require,module,exports) {
module.exports = HingeConstraint;

var Constraint = require('./Constraint');
var PointToPointConstraint = require('./PointToPointConstraint');
var RotationalEquation = require('../equations/RotationalEquation');
var RotationalMotorEquation = require('../equations/RotationalMotorEquation');
var ContactEquation = require('../equations/ContactEquation');
var Vec3 = require('../math/Vec3');

/**
 * Hinge constraint. Think of it as a door hinge. It tries to keep the door in the correct place and with the correct orientation.
 * @class HingeConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA] A point defined locally in bodyA. This defines the offset of axisA.
 * @param {Vec3} [options.axisA] An axis that bodyA can rotate around, defined locally in bodyA.
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function HingeConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;
    var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
    var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();

    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    /**
     * Rotation axis, defined locally in bodyA.
     * @property {Vec3} axisA
     */
    var axisA = this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1,0,0);
    axisA.normalize();

    /**
     * Rotation axis, defined locally in bodyB.
     * @property {Vec3} axisB
     */
    var axisB = this.axisB = options.axisB ? options.axisB.clone() : new Vec3(1,0,0);
    axisB.normalize();

    /**
     * @property {RotationalEquation} rotationalEquation1
     */
    var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation2
     */
    var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalMotorEquation} motorEquation
     */
    var motor = this.motorEquation = new RotationalMotorEquation(bodyA,bodyB,maxForce);
    motor.enabled = false; // Not enabled by default

    // Equations to be fed to the solver
    this.equations.push(
        r1, // rotational1
        r2, // rotational2
        motor
    );
}
HingeConstraint.prototype = new PointToPointConstraint();
HingeConstraint.constructor = HingeConstraint;

/**
 * @method enableMotor
 */
HingeConstraint.prototype.enableMotor = function(){
    this.motorEquation.enabled = true;
};

/**
 * @method disableMotor
 */
HingeConstraint.prototype.disableMotor = function(){
    this.motorEquation.enabled = false;
};

/**
 * @method setMotorSpeed
 * @param {number} speed
 */
HingeConstraint.prototype.setMotorSpeed = function(speed){
    this.motorEquation.targetVelocity = speed;
};

/**
 * @method setMotorMaxForce
 * @param {number} maxForce
 */
HingeConstraint.prototype.setMotorMaxForce = function(maxForce){
    this.motorEquation.maxForce = maxForce;
    this.motorEquation.minForce = -maxForce;
};

var HingeConstraint_update_tmpVec1 = new Vec3();
var HingeConstraint_update_tmpVec2 = new Vec3();

HingeConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        motor = this.motorEquation,
        r1 = this.rotationalEquation1,
        r2 = this.rotationalEquation2,
        worldAxisA = HingeConstraint_update_tmpVec1,
        worldAxisB = HingeConstraint_update_tmpVec2;

    var axisA = this.axisA;
    var axisB = this.axisB;

    PointToPointConstraint.prototype.update.call(this);

    // Get world axes
    bodyA.quaternion.vmult(axisA, worldAxisA);
    bodyB.quaternion.vmult(axisB, worldAxisB);

    worldAxisA.tangents(r1.axisA, r2.axisA);
    r1.axisB.copy(worldAxisB);
    r2.axisB.copy(worldAxisB);

    if(this.motorEquation.enabled){
        bodyA.quaternion.vmult(this.axisA, motor.axisA);
        bodyB.quaternion.vmult(this.axisB, motor.axisB);
    }
};


},{"./Constraint":"/p7L","./PointToPointConstraint":"0odR","../equations/RotationalEquation":"JvZw","../equations/RotationalMotorEquation":"awjA","../equations/ContactEquation":"waBd","../math/Vec3":"XG60"}],"Br95":[function(require,module,exports) {
module.exports = LockConstraint;

var Constraint = require('./Constraint');
var PointToPointConstraint = require('./PointToPointConstraint');
var RotationalEquation = require('../equations/RotationalEquation');
var RotationalMotorEquation = require('../equations/RotationalMotorEquation');
var ContactEquation = require('../equations/ContactEquation');
var Vec3 = require('../math/Vec3');

/**
 * Lock constraint. Will remove all degrees of freedom between the bodies.
 * @class LockConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function LockConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    // Set pivot point in between
    var pivotA = new Vec3();
    var pivotB = new Vec3();
    var halfWay = new Vec3();
    bodyA.position.vadd(bodyB.position, halfWay);
    halfWay.scale(0.5, halfWay);
    bodyB.pointToLocalFrame(halfWay, pivotB);
    bodyA.pointToLocalFrame(halfWay, pivotA);

    // The point-to-point constraint will keep a point shared between the bodies
    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    // Store initial rotation of the bodies as unit vectors in the local body spaces
    this.xA = bodyA.vectorToLocalFrame(Vec3.UNIT_X);
    this.xB = bodyB.vectorToLocalFrame(Vec3.UNIT_X);
    this.yA = bodyA.vectorToLocalFrame(Vec3.UNIT_Y);
    this.yB = bodyB.vectorToLocalFrame(Vec3.UNIT_Y);
    this.zA = bodyA.vectorToLocalFrame(Vec3.UNIT_Z);
    this.zB = bodyB.vectorToLocalFrame(Vec3.UNIT_Z);

    // ...and the following rotational equations will keep all rotational DOF's in place

    /**
     * @property {RotationalEquation} rotationalEquation1
     */
    var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation2
     */
    var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation3
     */
    var r3 = this.rotationalEquation3 = new RotationalEquation(bodyA,bodyB,options);

    this.equations.push(r1, r2, r3);
}
LockConstraint.prototype = new PointToPointConstraint();
LockConstraint.constructor = LockConstraint;

var LockConstraint_update_tmpVec1 = new Vec3();
var LockConstraint_update_tmpVec2 = new Vec3();

LockConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        motor = this.motorEquation,
        r1 = this.rotationalEquation1,
        r2 = this.rotationalEquation2,
        r3 = this.rotationalEquation3,
        worldAxisA = LockConstraint_update_tmpVec1,
        worldAxisB = LockConstraint_update_tmpVec2;

    PointToPointConstraint.prototype.update.call(this);

    // These vector pairs must be orthogonal
    bodyA.vectorToWorldFrame(this.xA, r1.axisA);
    bodyB.vectorToWorldFrame(this.yB, r1.axisB);

    bodyA.vectorToWorldFrame(this.yA, r2.axisA);
    bodyB.vectorToWorldFrame(this.zB, r2.axisB);

    bodyA.vectorToWorldFrame(this.zA, r3.axisA);
    bodyB.vectorToWorldFrame(this.xB, r3.axisB);
};


},{"./Constraint":"/p7L","./PointToPointConstraint":"0odR","../equations/RotationalEquation":"JvZw","../equations/RotationalMotorEquation":"awjA","../equations/ContactEquation":"waBd","../math/Vec3":"XG60"}],"HPrd":[function(require,module,exports) {
module.exports = NaiveBroadphase;

var Broadphase = require('./Broadphase');
var AABB = require('./AABB');

/**
 * Naive broadphase implementation, used in lack of better ones.
 * @class NaiveBroadphase
 * @constructor
 * @description The naive broadphase looks at all possible pairs without restriction, therefore it has complexity N^2 (which is bad)
 * @extends Broadphase
 */
function NaiveBroadphase(){
    Broadphase.apply(this);
}
NaiveBroadphase.prototype = new Broadphase();
NaiveBroadphase.prototype.constructor = NaiveBroadphase;

/**
 * Get all the collision pairs in the physics world
 * @method collisionPairs
 * @param {World} world
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
NaiveBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
    var bodies = world.bodies,
        n = bodies.length,
        i,j,bi,bj;

    // Naive N^2 ftw!
    for(i=0; i!==n; i++){
        for(j=0; j!==i; j++){

            bi = bodies[i];
            bj = bodies[j];

            if(!this.needBroadphaseCollision(bi,bj)){
                continue;
            }

            this.intersectionTest(bi,bj,pairs1,pairs2);
        }
    }
};

var tmpAABB = new AABB();

/**
 * Returns all the bodies within an AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param {array} result An array to store resulting bodies in.
 * @return {array}
 */
NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result){
    result = result || [];

    for(var i = 0; i < world.bodies.length; i++){
        var b = world.bodies[i];

        if(b.aabbNeedsUpdate){
            b.computeAABB();
        }

        // Ugly hack until Body gets aabb
        if(b.aabb.overlaps(aabb)){
            result.push(b);
        }
    }

    return result;
};
},{"./Broadphase":"ksz+","./AABB":"78Lf"}],"WKip":[function(require,module,exports) {
module.exports = ObjectCollisionMatrix;

/**
 * Records what objects are colliding with each other
 * @class ObjectCollisionMatrix
 * @constructor
 */
function ObjectCollisionMatrix() {

    /**
     * The matrix storage
     * @property matrix
     * @type {Object}
     */
	this.matrix = {};
}

/**
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
ObjectCollisionMatrix.prototype.get = function(i, j) {
	i = i.id;
	j = j.id;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
	return i+'-'+j in this.matrix;
};

/**
 * @method set
 * @param  {Number} i
 * @param  {Number} j
 * @param {Number} value
 */
ObjectCollisionMatrix.prototype.set = function(i, j, value) {
	i = i.id;
	j = j.id;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
	}
	if (value) {
		this.matrix[i+'-'+j] = true;
	}
	else {
		delete this.matrix[i+'-'+j];
	}
};

/**
 * Empty the matrix
 * @method reset
 */
ObjectCollisionMatrix.prototype.reset = function() {
	this.matrix = {};
};

/**
 * Set max number of objects
 * @method setNumObjects
 * @param {Number} n
 */
ObjectCollisionMatrix.prototype.setNumObjects = function(n) {
};

},{}],"eQce":[function(require,module,exports) {
module.exports = Particle;

var Shape = require('./Shape');
var Vec3 = require('../math/Vec3');

/**
 * Particle shape.
 * @class Particle
 * @constructor
 * @author schteppe
 * @extends Shape
 */
function Particle(){
    Shape.call(this, {
        type: Shape.types.PARTICLE
    });
}
Particle.prototype = new Shape();
Particle.prototype.constructor = Particle;

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3}
 */
Particle.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    target.set(0, 0, 0);
    return target;
};

Particle.prototype.volume = function(){
    return 0;
};

Particle.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = 0;
};

Particle.prototype.calculateWorldAABB = function(pos,quat,min,max){
    // Get each axis max
    min.copy(pos);
    max.copy(pos);
};

},{"./Shape":"Ggpt","../math/Vec3":"XG60"}],"8E8Y":[function(require,module,exports) {
var Vec3 = require('../math/Vec3');
var Transform = require('../math/Transform');
var RaycastResult = require('../collision/RaycastResult');
var Utils = require('../utils/Utils');

module.exports = WheelInfo;

/**
 * @class WheelInfo
 * @constructor
 * @param {Object} [options]
 *
 * @param {Vec3} [options.chassisConnectionPointLocal]
 * @param {Vec3} [options.chassisConnectionPointWorld]
 * @param {Vec3} [options.directionLocal]
 * @param {Vec3} [options.directionWorld]
 * @param {Vec3} [options.axleLocal]
 * @param {Vec3} [options.axleWorld]
 * @param {number} [options.suspensionRestLength=1]
 * @param {number} [options.suspensionMaxLength=2]
 * @param {number} [options.radius=1]
 * @param {number} [options.suspensionStiffness=100]
 * @param {number} [options.dampingCompression=10]
 * @param {number} [options.dampingRelaxation=10]
 * @param {number} [options.frictionSlip=10000]
 * @param {number} [options.steering=0]
 * @param {number} [options.rotation=0]
 * @param {number} [options.deltaRotation=0]
 * @param {number} [options.rollInfluence=0.01]
 * @param {number} [options.maxSuspensionForce]
 * @param {boolean} [options.isFrontWheel=true]
 * @param {number} [options.clippedInvContactDotSuspension=1]
 * @param {number} [options.suspensionRelativeVelocity=0]
 * @param {number} [options.suspensionForce=0]
 * @param {number} [options.skidInfo=0]
 * @param {number} [options.suspensionLength=0]
 * @param {number} [options.maxSuspensionTravel=1]
 * @param {boolean} [options.useCustomSlidingRotationalSpeed=false]
 * @param {number} [options.customSlidingRotationalSpeed=-0.1]
 */
function WheelInfo(options){
    options = Utils.defaults(options, {
        chassisConnectionPointLocal: new Vec3(),
        chassisConnectionPointWorld: new Vec3(),
        directionLocal: new Vec3(),
        directionWorld: new Vec3(),
        axleLocal: new Vec3(),
        axleWorld: new Vec3(),
        suspensionRestLength: 1,
        suspensionMaxLength: 2,
        radius: 1,
        suspensionStiffness: 100,
        dampingCompression: 10,
        dampingRelaxation: 10,
        frictionSlip: 10000,
        steering: 0,
        rotation: 0,
        deltaRotation: 0,
        rollInfluence: 0.01,
        maxSuspensionForce: Number.MAX_VALUE,
        isFrontWheel: true,
        clippedInvContactDotSuspension: 1,
        suspensionRelativeVelocity: 0,
        suspensionForce: 0,
        skidInfo: 0,
        suspensionLength: 0,
        maxSuspensionTravel: 1,
        useCustomSlidingRotationalSpeed: false,
        customSlidingRotationalSpeed: -0.1
    });

    /**
     * Max travel distance of the suspension, in meters.
     * @property {number} maxSuspensionTravel
     */
    this.maxSuspensionTravel = options.maxSuspensionTravel;

    /**
     * Speed to apply to the wheel rotation when the wheel is sliding.
     * @property {number} customSlidingRotationalSpeed
     */
    this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;

    /**
     * If the customSlidingRotationalSpeed should be used.
     * @property {Boolean} useCustomSlidingRotationalSpeed
     */
    this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;

    /**
     * @property {Boolean} sliding
     */
    this.sliding = false;

    /**
     * Connection point, defined locally in the chassis body frame.
     * @property {Vec3} chassisConnectionPointLocal
     */
    this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();

    /**
     * @property {Vec3} chassisConnectionPointWorld
     */
    this.chassisConnectionPointWorld = options.chassisConnectionPointWorld.clone();

    /**
     * @property {Vec3} directionLocal
     */
    this.directionLocal = options.directionLocal.clone();

    /**
     * @property {Vec3} directionWorld
     */
    this.directionWorld = options.directionWorld.clone();

    /**
     * @property {Vec3} axleLocal
     */
    this.axleLocal = options.axleLocal.clone();

    /**
     * @property {Vec3} axleWorld
     */
    this.axleWorld = options.axleWorld.clone();

    /**
     * @property {number} suspensionRestLength
     */
    this.suspensionRestLength = options.suspensionRestLength;

    /**
     * @property {number} suspensionMaxLength
     */
    this.suspensionMaxLength = options.suspensionMaxLength;

    /**
     * @property {number} radius
     */
    this.radius = options.radius;

    /**
     * @property {number} suspensionStiffness
     */
    this.suspensionStiffness = options.suspensionStiffness;

    /**
     * @property {number} dampingCompression
     */
    this.dampingCompression = options.dampingCompression;

    /**
     * @property {number} dampingRelaxation
     */
    this.dampingRelaxation = options.dampingRelaxation;

    /**
     * @property {number} frictionSlip
     */
    this.frictionSlip = options.frictionSlip;

    /**
     * @property {number} steering
     */
    this.steering = 0;

    /**
     * Rotation value, in radians.
     * @property {number} rotation
     */
    this.rotation = 0;

    /**
     * @property {number} deltaRotation
     */
    this.deltaRotation = 0;

    /**
     * @property {number} rollInfluence
     */
    this.rollInfluence = options.rollInfluence;

    /**
     * @property {number} maxSuspensionForce
     */
    this.maxSuspensionForce = options.maxSuspensionForce;

    /**
     * @property {number} engineForce
     */
    this.engineForce = 0;

    /**
     * @property {number} brake
     */
    this.brake = 0;

    /**
     * @property {number} isFrontWheel
     */
    this.isFrontWheel = options.isFrontWheel;

    /**
     * @property {number} clippedInvContactDotSuspension
     */
    this.clippedInvContactDotSuspension = 1;

    /**
     * @property {number} suspensionRelativeVelocity
     */
    this.suspensionRelativeVelocity = 0;

    /**
     * @property {number} suspensionForce
     */
    this.suspensionForce = 0;

    /**
     * @property {number} skidInfo
     */
    this.skidInfo = 0;

    /**
     * @property {number} suspensionLength
     */
    this.suspensionLength = 0;

    /**
     * @property {number} sideImpulse
     */
    this.sideImpulse = 0;

    /**
     * @property {number} forwardImpulse
     */
    this.forwardImpulse = 0;

    /**
     * The result from raycasting
     * @property {RaycastResult} raycastResult
     */
    this.raycastResult = new RaycastResult();

    /**
     * Wheel world transform
     * @property {Transform} worldTransform
     */
    this.worldTransform = new Transform();

    /**
     * @property {boolean} isInContact
     */
    this.isInContact = false;
}

var chassis_velocity_at_contactPoint = new Vec3();
var relpos = new Vec3();
var chassis_velocity_at_contactPoint = new Vec3();
WheelInfo.prototype.updateWheel = function(chassis){
    var raycastResult = this.raycastResult;

    if (this.isInContact){
        var project= raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
        raycastResult.hitPointWorld.vsub(chassis.position, relpos);
        chassis.getVelocityAtWorldPoint(relpos, chassis_velocity_at_contactPoint);
        var projVel = raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );
        if (project >= -0.1) {
            this.suspensionRelativeVelocity = 0.0;
            this.clippedInvContactDotSuspension = 1.0 / 0.1;
        } else {
            var inv = -1 / project;
            this.suspensionRelativeVelocity = projVel * inv;
            this.clippedInvContactDotSuspension = inv;
        }

    } else {
        // Not in contact : position wheel in a nice (rest length) position
        raycastResult.suspensionLength = this.suspensionRestLength;
        this.suspensionRelativeVelocity = 0.0;
        raycastResult.directionWorld.scale(-1, raycastResult.hitNormalWorld);
        this.clippedInvContactDotSuspension = 1.0;
    }
};
},{"../math/Vec3":"XG60","../math/Transform":"CcAe","../collision/RaycastResult":"Pzss","../utils/Utils":"Yq2j"}],"RUjU":[function(require,module,exports) {
var Body = require('./Body');
var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var RaycastResult = require('../collision/RaycastResult');
var Ray = require('../collision/Ray');
var WheelInfo = require('../objects/WheelInfo');

module.exports = RaycastVehicle;

/**
 * Vehicle helper class that casts rays from the wheel positions towards the ground and applies forces.
 * @class RaycastVehicle
 * @constructor
 * @param {object} [options]
 * @param {Body} [options.chassisBody] The car chassis body.
 * @param {integer} [options.indexRightAxis] Axis to use for right. x=0, y=1, z=2
 * @param {integer} [options.indexLeftAxis]
 * @param {integer} [options.indexUpAxis]
 */
function RaycastVehicle(options){

    /**
     * @property {Body} chassisBody
     */
    this.chassisBody = options.chassisBody;

    /**
     * An array of WheelInfo objects.
     * @property {array} wheelInfos
     */
    this.wheelInfos = [];

    /**
     * Will be set to true if the car is sliding.
     * @property {boolean} sliding
     */
    this.sliding = false;

    /**
     * @property {World} world
     */
    this.world = null;

    /**
     * Index of the right axis, 0=x, 1=y, 2=z
     * @property {integer} indexRightAxis
     * @default 1
     */
    this.indexRightAxis = typeof(options.indexRightAxis) !== 'undefined' ? options.indexRightAxis : 1;

    /**
     * Index of the forward axis, 0=x, 1=y, 2=z
     * @property {integer} indexForwardAxis
     * @default 0
     */
    this.indexForwardAxis = typeof(options.indexForwardAxis) !== 'undefined' ? options.indexForwardAxis : 0;

    /**
     * Index of the up axis, 0=x, 1=y, 2=z
     * @property {integer} indexUpAxis
     * @default 2
     */
    this.indexUpAxis = typeof(options.indexUpAxis) !== 'undefined' ? options.indexUpAxis : 2;
}

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();
var tmpVec3 = new Vec3();
var tmpVec4 = new Vec3();
var tmpVec5 = new Vec3();
var tmpVec6 = new Vec3();
var tmpRay = new Ray();

/**
 * Add a wheel. For information about the options, see WheelInfo.
 * @method addWheel
 * @param {object} [options]
 */
RaycastVehicle.prototype.addWheel = function(options){
    options = options || {};

    var info = new WheelInfo(options);
    var index = this.wheelInfos.length;
    this.wheelInfos.push(info);

    return index;
};

/**
 * Set the steering value of a wheel.
 * @method setSteeringValue
 * @param {number} value
 * @param {integer} wheelIndex
 */
RaycastVehicle.prototype.setSteeringValue = function(value, wheelIndex){
    var wheel = this.wheelInfos[wheelIndex];
    wheel.steering = value;
};

var torque = new Vec3();

/**
 * Set the wheel force to apply on one of the wheels each time step
 * @method applyEngineForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RaycastVehicle.prototype.applyEngineForce = function(value, wheelIndex){
    this.wheelInfos[wheelIndex].engineForce = value;
};

/**
 * Set the braking force of a wheel
 * @method setBrake
 * @param {number} brake
 * @param {integer} wheelIndex
 */
RaycastVehicle.prototype.setBrake = function(brake, wheelIndex){
    this.wheelInfos[wheelIndex].brake = brake;
};

/**
 * Add the vehicle including its constraints to the world.
 * @method addToWorld
 * @param {World} world
 */
RaycastVehicle.prototype.addToWorld = function(world){
    var constraints = this.constraints;
    world.addBody(this.chassisBody);
    var that = this;
    this.preStepCallback = function(){
        that.updateVehicle(world.dt);
    };
    world.addEventListener('preStep', this.preStepCallback);
    this.world = world;
};

/**
 * Get one of the wheel axles, world-oriented.
 * @private
 * @method getVehicleAxisWorld
 * @param  {integer} axisIndex
 * @param  {Vec3} result
 */
RaycastVehicle.prototype.getVehicleAxisWorld = function(axisIndex, result){
    result.set(
        axisIndex === 0 ? 1 : 0,
        axisIndex === 1 ? 1 : 0,
        axisIndex === 2 ? 1 : 0
    );
    this.chassisBody.vectorToWorldFrame(result, result);
};

RaycastVehicle.prototype.updateVehicle = function(timeStep){
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;
    var chassisBody = this.chassisBody;

    for (var i = 0; i < numWheels; i++) {
        this.updateWheelTransform(i);
    }

    this.currentVehicleSpeedKmHour = 3.6 * chassisBody.velocity.norm();

    var forwardWorld = new Vec3();
    this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);

    if (forwardWorld.dot(chassisBody.velocity) < 0){
        this.currentVehicleSpeedKmHour *= -1;
    }

    // simulate suspension
    for (var i = 0; i < numWheels; i++) {
        this.castRay(wheelInfos[i]);
    }

    this.updateSuspension(timeStep);

    var impulse = new Vec3();
    var relpos = new Vec3();
    for (var i = 0; i < numWheels; i++) {
        //apply suspension force
        var wheel = wheelInfos[i];
        var suspensionForce = wheel.suspensionForce;
        if (suspensionForce > wheel.maxSuspensionForce) {
            suspensionForce = wheel.maxSuspensionForce;
        }
        wheel.raycastResult.hitNormalWorld.scale(suspensionForce * timeStep, impulse);

        wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, relpos);
        chassisBody.applyImpulse(impulse, relpos);
    }

    this.updateFriction(timeStep);

    var hitNormalWorldScaledWithProj = new Vec3();
    var fwd  = new Vec3();
    var vel = new Vec3();
    for (i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];
        //var relpos = new Vec3();
        //wheel.chassisConnectionPointWorld.vsub(chassisBody.position, relpos);
        chassisBody.getVelocityAtWorldPoint(wheel.chassisConnectionPointWorld, vel);

        // Hack to get the rotation in the correct direction
        var m = 1;
        switch(this.indexUpAxis){
        case 1:
            m = -1;
            break;
        }

        if (wheel.isInContact) {

            this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
            var proj = fwd.dot(wheel.raycastResult.hitNormalWorld);
            wheel.raycastResult.hitNormalWorld.scale(proj, hitNormalWorldScaledWithProj);

            fwd.vsub(hitNormalWorldScaledWithProj, fwd);

            var proj2 = fwd.dot(vel);
            wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
        }

        if((wheel.sliding || !wheel.isInContact) && wheel.engineForce !== 0 && wheel.useCustomSlidingRotationalSpeed){
            // Apply custom rotation when accelerating and sliding
            wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep;
        }

        // Lock wheels
        if(Math.abs(wheel.brake) > Math.abs(wheel.engineForce)){
            wheel.deltaRotation = 0;
        }

        wheel.rotation += wheel.deltaRotation; // Use the old value
        wheel.deltaRotation *= 0.99; // damping of rotation when not in contact
    }
};

RaycastVehicle.prototype.updateSuspension = function(deltaTime) {
    var chassisBody = this.chassisBody;
    var chassisMass = chassisBody.mass;
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;

    for (var w_it = 0; w_it < numWheels; w_it++){
        var wheel = wheelInfos[w_it];

        if (wheel.isInContact){
            var force;

            // Spring
            var susp_length = wheel.suspensionRestLength;
            var current_length = wheel.suspensionLength;
            var length_diff = (susp_length - current_length);

            force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;

            // Damper
            var projected_rel_vel = wheel.suspensionRelativeVelocity;
            var susp_damping;
            if (projected_rel_vel < 0) {
                susp_damping = wheel.dampingCompression;
            } else {
                susp_damping = wheel.dampingRelaxation;
            }
            force -= susp_damping * projected_rel_vel;

            wheel.suspensionForce = force * chassisMass;
            if (wheel.suspensionForce < 0) {
                wheel.suspensionForce = 0;
            }
        } else {
            wheel.suspensionForce = 0;
        }
    }
};

/**
 * Remove the vehicle including its constraints from the world.
 * @method removeFromWorld
 * @param {World} world
 */
RaycastVehicle.prototype.removeFromWorld = function(world){
    var constraints = this.constraints;
    world.remove(this.chassisBody);
    world.removeEventListener('preStep', this.preStepCallback);
    this.world = null;
};

var castRay_rayvector = new Vec3();
var castRay_target = new Vec3();
RaycastVehicle.prototype.castRay = function(wheel) {
    var rayvector = castRay_rayvector;
    var target = castRay_target;

    this.updateWheelTransformWorld(wheel);
    var chassisBody = this.chassisBody;

    var depth = -1;

    var raylen = wheel.suspensionRestLength + wheel.radius;

    wheel.directionWorld.scale(raylen, rayvector);
    var source = wheel.chassisConnectionPointWorld;
    source.vadd(rayvector, target);
    var raycastResult = wheel.raycastResult;

    var param = 0;

    raycastResult.reset();
    // Turn off ray collision with the chassis temporarily
    var oldState = chassisBody.collisionResponse;
    chassisBody.collisionResponse = false;

    // Cast ray against world
    this.world.rayTest(source, target, raycastResult);
    chassisBody.collisionResponse = oldState;

    var object = raycastResult.body;

    wheel.raycastResult.groundObject = 0;

    if (object) {
        depth = raycastResult.distance;
        wheel.raycastResult.hitNormalWorld  = raycastResult.hitNormalWorld;
        wheel.isInContact = true;

        var hitDistance = raycastResult.distance;
        wheel.suspensionLength = hitDistance - wheel.radius;

        // clamp on max suspension travel
        var minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel;
        var maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel;
        if (wheel.suspensionLength < minSuspensionLength) {
            wheel.suspensionLength = minSuspensionLength;
        }
        if (wheel.suspensionLength > maxSuspensionLength) {
            wheel.suspensionLength = maxSuspensionLength;
            wheel.raycastResult.reset();
        }

        var denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld);

        var chassis_velocity_at_contactPoint = new Vec3();
        chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint);

        var projVel = wheel.raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );

        if (denominator >= -0.1) {
            wheel.suspensionRelativeVelocity = 0;
            wheel.clippedInvContactDotSuspension = 1 / 0.1;
        } else {
            var inv = -1 / denominator;
            wheel.suspensionRelativeVelocity = projVel * inv;
            wheel.clippedInvContactDotSuspension = inv;
        }

    } else {

        //put wheel info as in rest position
        wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel;
        wheel.suspensionRelativeVelocity = 0.0;
        wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld);
        wheel.clippedInvContactDotSuspension = 1.0;
    }

    return depth;
};

RaycastVehicle.prototype.updateWheelTransformWorld = function(wheel){
    wheel.isInContact = false;
    var chassisBody = this.chassisBody;
    chassisBody.pointToWorldFrame(wheel.chassisConnectionPointLocal, wheel.chassisConnectionPointWorld);
    chassisBody.vectorToWorldFrame(wheel.directionLocal, wheel.directionWorld);
    chassisBody.vectorToWorldFrame(wheel.axleLocal, wheel.axleWorld);
};


/**
 * Update one of the wheel transform.
 * Note when rendering wheels: during each step, wheel transforms are updated BEFORE the chassis; ie. their position becomes invalid after the step. Thus when you render wheels, you must update wheel transforms before rendering them. See raycastVehicle demo for an example.
 * @method updateWheelTransform
 * @param {integer} wheelIndex The wheel index to update.
 */
RaycastVehicle.prototype.updateWheelTransform = function(wheelIndex){
    var up = tmpVec4;
    var right = tmpVec5;
    var fwd = tmpVec6;

    var wheel = this.wheelInfos[wheelIndex];
    this.updateWheelTransformWorld(wheel);

    wheel.directionLocal.scale(-1, up);
    right.copy(wheel.axleLocal);
    up.cross(right, fwd);
    fwd.normalize();
    right.normalize();

    // Rotate around steering over the wheelAxle
    var steering = wheel.steering;
    var steeringOrn = new Quaternion();
    steeringOrn.setFromAxisAngle(up, steering);

    var rotatingOrn = new Quaternion();
    rotatingOrn.setFromAxisAngle(right, wheel.rotation);

    // World rotation of the wheel
    var q = wheel.worldTransform.quaternion;
    this.chassisBody.quaternion.mult(steeringOrn, q);
    q.mult(rotatingOrn, q);

    q.normalize();

    // world position of the wheel
    var p = wheel.worldTransform.position;
    p.copy(wheel.directionWorld);
    p.scale(wheel.suspensionLength, p);
    p.vadd(wheel.chassisConnectionPointWorld, p);
};

var directions = [
    new Vec3(1, 0, 0),
    new Vec3(0, 1, 0),
    new Vec3(0, 0, 1)
];

/**
 * Get the world transform of one of the wheels
 * @method getWheelTransformWorld
 * @param  {integer} wheelIndex
 * @return {Transform}
 */
RaycastVehicle.prototype.getWheelTransformWorld = function(wheelIndex) {
    return this.wheelInfos[wheelIndex].worldTransform;
};


var updateFriction_surfNormalWS_scaled_proj = new Vec3();
var updateFriction_axle = [];
var updateFriction_forwardWS = [];
var sideFrictionStiffness2 = 1;
RaycastVehicle.prototype.updateFriction = function(timeStep) {
    var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;

    //calculate the impulse, so that the wheels don't move sidewards
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;
    var chassisBody = this.chassisBody;
    var forwardWS = updateFriction_forwardWS;
    var axle = updateFriction_axle;

    var numWheelsOnGround = 0;

    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];

        var groundObject = wheel.raycastResult.body;
        if (groundObject){
            numWheelsOnGround++;
        }

        wheel.sideImpulse = 0;
        wheel.forwardImpulse = 0;
        if(!forwardWS[i]){
            forwardWS[i] = new Vec3();
        }
        if(!axle[i]){
            axle[i] = new Vec3();
        }
    }

    for (var i = 0; i < numWheels; i++){
        var wheel = wheelInfos[i];

        var groundObject = wheel.raycastResult.body;

        if (groundObject) {
            var axlei = axle[i];
            var wheelTrans = this.getWheelTransformWorld(i);

            // Get world axle
            wheelTrans.vectorToWorldFrame(directions[this.indexRightAxis], axlei);

            var surfNormalWS = wheel.raycastResult.hitNormalWorld;
            var proj = axlei.dot(surfNormalWS);
            surfNormalWS.scale(proj, surfNormalWS_scaled_proj);
            axlei.vsub(surfNormalWS_scaled_proj, axlei);
            axlei.normalize();

            surfNormalWS.cross(axlei, forwardWS[i]);
            forwardWS[i].normalize();

            wheel.sideImpulse = resolveSingleBilateral(
                chassisBody,
                wheel.raycastResult.hitPointWorld,
                groundObject,
                wheel.raycastResult.hitPointWorld,
                axlei
            );

            wheel.sideImpulse *= sideFrictionStiffness2;
        }
    }

    var sideFactor = 1;
    var fwdFactor = 0.5;

    this.sliding = false;
    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];
        var groundObject = wheel.raycastResult.body;

        var rollingFriction = 0;

        wheel.slipInfo = 1;
        if (groundObject) {
            var defaultRollingFrictionImpulse = 0;
            var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;

            // btWheelContactPoint contactPt(chassisBody,groundObject,wheelInfraycastInfo.hitPointWorld,forwardWS[wheel],maxImpulse);
            // rollingFriction = calcRollingFriction(contactPt);
            rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);

            rollingFriction += wheel.engineForce * timeStep;

            // rollingFriction = 0;
            var factor = maxImpulse / rollingFriction;
            wheel.slipInfo *= factor;
        }

        //switch between active rolling (throttle), braking and non-active rolling friction (nthrottle/break)

        wheel.forwardImpulse = 0;
        wheel.skidInfo = 1;

        if (groundObject) {
            wheel.skidInfo = 1;

            var maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
            var maximpSide = maximp;

            var maximpSquared = maximp * maximpSide;

            wheel.forwardImpulse = rollingFriction;//wheelInfo.engineForce* timeStep;

            var x = wheel.forwardImpulse * fwdFactor;
            var y = wheel.sideImpulse * sideFactor;

            var impulseSquared = x * x + y * y;

            wheel.sliding = false;
            if (impulseSquared > maximpSquared) {
                this.sliding = true;
                wheel.sliding = true;

                var factor = maximp / Math.sqrt(impulseSquared);

                wheel.skidInfo *= factor;
            }
        }
    }

    if (this.sliding) {
        for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            if (wheel.sideImpulse !== 0) {
                if (wheel.skidInfo < 1){
                    wheel.forwardImpulse *= wheel.skidInfo;
                    wheel.sideImpulse *= wheel.skidInfo;
                }
            }
        }
    }

    // apply the impulses
    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];

        var rel_pos = new Vec3();
        wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, rel_pos);
        // cannons applyimpulse is using world coord for the position
        //rel_pos.copy(wheel.raycastResult.hitPointWorld);

        if (wheel.forwardImpulse !== 0) {
            var impulse = new Vec3();
            forwardWS[i].scale(wheel.forwardImpulse, impulse);
            chassisBody.applyImpulse(impulse, rel_pos);
        }

        if (wheel.sideImpulse !== 0){
            var groundObject = wheel.raycastResult.body;

            var rel_pos2 = new Vec3();
            wheel.raycastResult.hitPointWorld.vsub(groundObject.position, rel_pos2);
            //rel_pos2.copy(wheel.raycastResult.hitPointWorld);
            var sideImp = new Vec3();
            axle[i].scale(wheel.sideImpulse, sideImp);

            // Scale the relative position in the up direction with rollInfluence.
            // If rollInfluence is 1, the impulse will be applied on the hitPoint (easy to roll over), if it is zero it will be applied in the same plane as the center of mass (not easy to roll over).
            chassisBody.vectorToLocalFrame(rel_pos, rel_pos);
            rel_pos['xyz'[this.indexUpAxis]] *= wheel.rollInfluence;
            chassisBody.vectorToWorldFrame(rel_pos, rel_pos);
            chassisBody.applyImpulse(sideImp, rel_pos);

            //apply friction impulse on the ground
            sideImp.scale(-1, sideImp);
            groundObject.applyImpulse(sideImp, rel_pos2);
        }
    }
};

var calcRollingFriction_vel1 = new Vec3();
var calcRollingFriction_vel2 = new Vec3();
var calcRollingFriction_vel = new Vec3();

function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
    var j1 = 0;
    var contactPosWorld = frictionPosWorld;

    // var rel_pos1 = new Vec3();
    // var rel_pos2 = new Vec3();
    var vel1 = calcRollingFriction_vel1;
    var vel2 = calcRollingFriction_vel2;
    var vel = calcRollingFriction_vel;
    // contactPosWorld.vsub(body0.position, rel_pos1);
    // contactPosWorld.vsub(body1.position, rel_pos2);

    body0.getVelocityAtWorldPoint(contactPosWorld, vel1);
    body1.getVelocityAtWorldPoint(contactPosWorld, vel2);
    vel1.vsub(vel2, vel);

    var vrel = frictionDirectionWorld.dot(vel);

    var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
    var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
    var relaxation = 1;
    var jacDiagABInv = relaxation / (denom0 + denom1);

    // calculate j that moves us to zero relative velocity
    j1 = -vrel * jacDiagABInv;

    if (maxImpulse < j1) {
        j1 = maxImpulse;
    }
    if (j1 < -maxImpulse) {
        j1 = -maxImpulse;
    }

    return j1;
}

var computeImpulseDenominator_r0 = new Vec3();
var computeImpulseDenominator_c0 = new Vec3();
var computeImpulseDenominator_vec = new Vec3();
var computeImpulseDenominator_m = new Vec3();
function computeImpulseDenominator(body, pos, normal) {
    var r0 = computeImpulseDenominator_r0;
    var c0 = computeImpulseDenominator_c0;
    var vec = computeImpulseDenominator_vec;
    var m = computeImpulseDenominator_m;

    pos.vsub(body.position, r0);
    r0.cross(normal, c0);
    body.invInertiaWorld.vmult(c0, m);
    m.cross(r0, vec);

    return body.invMass + normal.dot(vec);
}


var resolveSingleBilateral_vel1 = new Vec3();
var resolveSingleBilateral_vel2 = new Vec3();
var resolveSingleBilateral_vel = new Vec3();

//bilateral constraint between two dynamic objects
function resolveSingleBilateral(body1, pos1, body2, pos2, normal, impulse){
    var normalLenSqr = normal.norm2();
    if (normalLenSqr > 1.1){
        return 0; // no impulse
    }
    // var rel_pos1 = new Vec3();
    // var rel_pos2 = new Vec3();
    // pos1.vsub(body1.position, rel_pos1);
    // pos2.vsub(body2.position, rel_pos2);

    var vel1 = resolveSingleBilateral_vel1;
    var vel2 = resolveSingleBilateral_vel2;
    var vel = resolveSingleBilateral_vel;
    body1.getVelocityAtWorldPoint(pos1, vel1);
    body2.getVelocityAtWorldPoint(pos2, vel2);

    vel1.vsub(vel2, vel);

    var rel_vel = normal.dot(vel);

    var contactDamping = 0.2;
    var massTerm = 1 / (body1.invMass + body2.invMass);
    var impulse = - contactDamping * rel_vel * massTerm;

    return impulse;
}
},{"./Body":"UPq9","../math/Vec3":"XG60","../math/Quaternion":"bEmM","../collision/RaycastResult":"Pzss","../collision/Ray":"CqEM","../objects/WheelInfo":"8E8Y"}],"+bqW":[function(require,module,exports) {
module.exports = Sphere;

var Shape = require('./Shape');
var Vec3 = require('../math/Vec3');

/**
 * Spherical shape
 * @class Sphere
 * @constructor
 * @extends Shape
 * @param {Number} radius The radius of the sphere, a non-negative number.
 * @author schteppe / http://github.com/schteppe
 */
function Sphere(radius){
    Shape.call(this, {
        type: Shape.types.SPHERE
    });

    /**
     * @property {Number} radius
     */
    this.radius = radius !== undefined ? radius : 1.0;

    if(this.radius < 0){
        throw new Error('The sphere radius cannot be negative.');
    }

    this.updateBoundingSphereRadius();
}
Sphere.prototype = new Shape();
Sphere.prototype.constructor = Sphere;

Sphere.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    var I = 2.0*mass*this.radius*this.radius/5.0;
    target.x = I;
    target.y = I;
    target.z = I;
    return target;
};

Sphere.prototype.volume = function(){
    return 4.0 * Math.PI * this.radius / 3.0;
};

Sphere.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = this.radius;
};

Sphere.prototype.calculateWorldAABB = function(pos,quat,min,max){
    var r = this.radius;
    var axes = ['x','y','z'];
    for(var i=0; i<axes.length; i++){
        var ax = axes[i];
        min[ax] = pos[ax] - r;
        max[ax] = pos[ax] + r;
    }
};

},{"./Shape":"Ggpt","../math/Vec3":"XG60"}],"v9yn":[function(require,module,exports) {
var Body = require('./Body');
var Sphere = require('../shapes/Sphere');
var Box = require('../shapes/Box');
var Vec3 = require('../math/Vec3');
var HingeConstraint = require('../constraints/HingeConstraint');

module.exports = RigidVehicle;

/**
 * Simple vehicle helper class with spherical rigid body wheels.
 * @class RigidVehicle
 * @constructor
 * @param {Body} [options.chassisBody]
 */
function RigidVehicle(options){
    this.wheelBodies = [];

    /**
     * @property coordinateSystem
     * @type {Vec3}
     */
    this.coordinateSystem = typeof(options.coordinateSystem)==='undefined' ? new Vec3(1, 2, 3) : options.coordinateSystem.clone();

    /**
     * @property {Body} chassisBody
     */
    this.chassisBody = options.chassisBody;

    if(!this.chassisBody){
        // No chassis body given. Create it!
        var chassisShape = new Box(new Vec3(5, 2, 0.5));
        this.chassisBody = new Body(1, chassisShape);
    }

    /**
     * @property constraints
     * @type {Array}
     */
    this.constraints = [];

    this.wheelAxes = [];
    this.wheelForces = [];
}

/**
 * Add a wheel
 * @method addWheel
 * @param {object} options
 * @param {boolean} [options.isFrontWheel]
 * @param {Vec3} [options.position] Position of the wheel, locally in the chassis body.
 * @param {Vec3} [options.direction] Slide direction of the wheel along the suspension.
 * @param {Vec3} [options.axis] Axis of rotation of the wheel, locally defined in the chassis.
 * @param {Body} [options.body] The wheel body.
 */
RigidVehicle.prototype.addWheel = function(options){
    options = options || {};
    var wheelBody = options.body;
    if(!wheelBody){
        wheelBody =  new Body(1, new Sphere(1.2));
    }
    this.wheelBodies.push(wheelBody);
    this.wheelForces.push(0);

    // Position constrain wheels
    var zero = new Vec3();
    var position = typeof(options.position) !== 'undefined' ? options.position.clone() : new Vec3();

    // Set position locally to the chassis
    var worldPosition = new Vec3();
    this.chassisBody.pointToWorldFrame(position, worldPosition);
    wheelBody.position.set(worldPosition.x, worldPosition.y, worldPosition.z);

    // Constrain wheel
    var axis = typeof(options.axis) !== 'undefined' ? options.axis.clone() : new Vec3(0, 1, 0);
    this.wheelAxes.push(axis);

    var hingeConstraint = new HingeConstraint(this.chassisBody, wheelBody, {
        pivotA: position,
        axisA: axis,
        pivotB: Vec3.ZERO,
        axisB: axis,
        collideConnected: false
    });
    this.constraints.push(hingeConstraint);

    return this.wheelBodies.length - 1;
};

/**
 * Set the steering value of a wheel.
 * @method setSteeringValue
 * @param {number} value
 * @param {integer} wheelIndex
 * @todo check coordinateSystem
 */
RigidVehicle.prototype.setSteeringValue = function(value, wheelIndex){
    // Set angle of the hinge axis
    var axis = this.wheelAxes[wheelIndex];

    var c = Math.cos(value),
        s = Math.sin(value),
        x = axis.x,
        y = axis.y;
    this.constraints[wheelIndex].axisA.set(
        c*x -s*y,
        s*x +c*y,
        0
    );
};

/**
 * Set the target rotational speed of the hinge constraint.
 * @method setMotorSpeed
 * @param {number} value
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.setMotorSpeed = function(value, wheelIndex){
    var hingeConstraint = this.constraints[wheelIndex];
    hingeConstraint.enableMotor();
    hingeConstraint.motorTargetVelocity = value;
};

/**
 * Set the target rotational speed of the hinge constraint.
 * @method disableMotor
 * @param {number} value
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.disableMotor = function(wheelIndex){
    var hingeConstraint = this.constraints[wheelIndex];
    hingeConstraint.disableMotor();
};

var torque = new Vec3();

/**
 * Set the wheel force to apply on one of the wheels each time step
 * @method setWheelForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RigidVehicle.prototype.setWheelForce = function(value, wheelIndex){
    this.wheelForces[wheelIndex] = value;
};

/**
 * Apply a torque on one of the wheels.
 * @method applyWheelForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RigidVehicle.prototype.applyWheelForce = function(value, wheelIndex){
    var axis = this.wheelAxes[wheelIndex];
    var wheelBody = this.wheelBodies[wheelIndex];
    var bodyTorque = wheelBody.torque;

    axis.scale(value, torque);
    wheelBody.vectorToWorldFrame(torque, torque);
    bodyTorque.vadd(torque, bodyTorque);
};

/**
 * Add the vehicle including its constraints to the world.
 * @method addToWorld
 * @param {World} world
 */
RigidVehicle.prototype.addToWorld = function(world){
    var constraints = this.constraints;
    var bodies = this.wheelBodies.concat([this.chassisBody]);

    for (var i = 0; i < bodies.length; i++) {
        world.addBody(bodies[i]);
    }

    for (var i = 0; i < constraints.length; i++) {
        world.addConstraint(constraints[i]);
    }

    world.addEventListener('preStep', this._update.bind(this));
};

RigidVehicle.prototype._update = function(){
    var wheelForces = this.wheelForces;
    for (var i = 0; i < wheelForces.length; i++) {
        this.applyWheelForce(wheelForces[i], i);
    }
};

/**
 * Remove the vehicle including its constraints from the world.
 * @method removeFromWorld
 * @param {World} world
 */
RigidVehicle.prototype.removeFromWorld = function(world){
    var constraints = this.constraints;
    var bodies = this.wheelBodies.concat([this.chassisBody]);

    for (var i = 0; i < bodies.length; i++) {
        world.remove(bodies[i]);
    }

    for (var i = 0; i < constraints.length; i++) {
        world.removeConstraint(constraints[i]);
    }
};

var worldAxis = new Vec3();

/**
 * Get current rotational velocity of a wheel
 * @method getWheelSpeed
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.getWheelSpeed = function(wheelIndex){
    var axis = this.wheelAxes[wheelIndex];
    var wheelBody = this.wheelBodies[wheelIndex];
    var w = wheelBody.angularVelocity;
    this.chassisBody.vectorToWorldFrame(axis, worldAxis);
    return w.dot(worldAxis);
};

},{"./Body":"UPq9","../shapes/Sphere":"+bqW","../shapes/Box":"o0NO","../math/Vec3":"XG60","../constraints/HingeConstraint":"eA4Z"}],"zUl4":[function(require,module,exports) {
var Shape = require('../shapes/Shape');
var Broadphase = require('../collision/Broadphase');

module.exports = SAPBroadphase;

/**
 * Sweep and prune broadphase along one axis.
 *
 * @class SAPBroadphase
 * @constructor
 * @param {World} [world]
 * @extends Broadphase
 */
function SAPBroadphase(world){
    Broadphase.apply(this);

    /**
     * List of bodies currently in the broadphase.
     * @property axisList
     * @type {Array}
     */
    this.axisList = [];

    /**
     * The world to search in.
     * @property world
     * @type {World}
     */
    this.world = null;

    /**
     * Axis to sort the bodies along. Set to 0 for x axis, and 1 for y axis. For best performance, choose an axis that the bodies are spread out more on.
     * @property axisIndex
     * @type {Number}
     */
    this.axisIndex = 0;

    var axisList = this.axisList;

    this._addBodyHandler = function(e){
        axisList.push(e.body);
    };

    this._removeBodyHandler = function(e){
        var idx = axisList.indexOf(e.body);
        if(idx !== -1){
            axisList.splice(idx,1);
        }
    };

    if(world){
        this.setWorld(world);
    }
}
SAPBroadphase.prototype = new Broadphase();

/**
 * Change the world
 * @method setWorld
 * @param  {World} world
 */
SAPBroadphase.prototype.setWorld = function(world){
    // Clear the old axis array
    this.axisList.length = 0;

    // Add all bodies from the new world
    for(var i=0; i<world.bodies.length; i++){
        this.axisList.push(world.bodies[i]);
    }

    // Remove old handlers, if any
    world.removeEventListener("addBody", this._addBodyHandler);
    world.removeEventListener("removeBody", this._removeBodyHandler);

    // Add handlers to update the list of bodies.
    world.addEventListener("addBody", this._addBodyHandler);
    world.addEventListener("removeBody", this._removeBodyHandler);

    this.world = world;
    this.dirty = true;
};

/**
 * @static
 * @method insertionSortX
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortX = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.x <= v.aabb.lowerBound.x){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * @static
 * @method insertionSortY
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortY = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.y <= v.aabb.lowerBound.y){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * @static
 * @method insertionSortZ
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortZ = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.z <= v.aabb.lowerBound.z){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * Collect all collision pairs
 * @method collisionPairs
 * @param  {World} world
 * @param  {Array} p1
 * @param  {Array} p2
 */
SAPBroadphase.prototype.collisionPairs = function(world,p1,p2){
    var bodies = this.axisList,
        N = bodies.length,
        axisIndex = this.axisIndex,
        i, j;

    if(this.dirty){
        this.sortList();
        this.dirty = false;
    }

    // Look through the list
    for(i=0; i !== N; i++){
        var bi = bodies[i];

        for(j=i+1; j < N; j++){
            var bj = bodies[j];

            if(!this.needBroadphaseCollision(bi,bj)){
                continue;
            }

            if(!SAPBroadphase.checkBounds(bi,bj,axisIndex)){
                break;
            }

            this.intersectionTest(bi,bj,p1,p2);
        }
    }
};

SAPBroadphase.prototype.sortList = function(){
    var axisList = this.axisList;
    var axisIndex = this.axisIndex;
    var N = axisList.length;

    // Update AABBs
    for(var i = 0; i!==N; i++){
        var bi = axisList[i];
        if(bi.aabbNeedsUpdate){
            bi.computeAABB();
        }
    }

    // Sort the list
    if(axisIndex === 0){
        SAPBroadphase.insertionSortX(axisList);
    } else if(axisIndex === 1){
        SAPBroadphase.insertionSortY(axisList);
    } else if(axisIndex === 2){
        SAPBroadphase.insertionSortZ(axisList);
    }
};

/**
 * Check if the bounds of two bodies overlap, along the given SAP axis.
 * @static
 * @method checkBounds
 * @param  {Body} bi
 * @param  {Body} bj
 * @param  {Number} axisIndex
 * @return {Boolean}
 */
SAPBroadphase.checkBounds = function(bi, bj, axisIndex){
    var biPos;
    var bjPos;

    if(axisIndex === 0){
        biPos = bi.position.x;
        bjPos = bj.position.x;
    } else if(axisIndex === 1){
        biPos = bi.position.y;
        bjPos = bj.position.y;
    } else if(axisIndex === 2){
        biPos = bi.position.z;
        bjPos = bj.position.z;
    }

    var ri = bi.boundingRadius,
        rj = bj.boundingRadius,
        boundA1 = biPos - ri,
        boundA2 = biPos + ri,
        boundB1 = bjPos - rj,
        boundB2 = bjPos + rj;

    return boundB1 < boundA2;
};

/**
 * Computes the variance of the body positions and estimates the best
 * axis to use. Will automatically set property .axisIndex.
 * @method autoDetectAxis
 */
SAPBroadphase.prototype.autoDetectAxis = function(){
    var sumX=0,
        sumX2=0,
        sumY=0,
        sumY2=0,
        sumZ=0,
        sumZ2=0,
        bodies = this.axisList,
        N = bodies.length,
        invN=1/N;

    for(var i=0; i!==N; i++){
        var b = bodies[i];

        var centerX = b.position.x;
        sumX += centerX;
        sumX2 += centerX*centerX;

        var centerY = b.position.y;
        sumY += centerY;
        sumY2 += centerY*centerY;

        var centerZ = b.position.z;
        sumZ += centerZ;
        sumZ2 += centerZ*centerZ;
    }

    var varianceX = sumX2 - sumX*sumX*invN,
        varianceY = sumY2 - sumY*sumY*invN,
        varianceZ = sumZ2 - sumZ*sumZ*invN;

    if(varianceX > varianceY){
        if(varianceX > varianceZ){
            this.axisIndex = 0;
        } else{
            this.axisIndex = 2;
        }
    } else if(varianceY > varianceZ){
        this.axisIndex = 1;
    } else{
        this.axisIndex = 2;
    }
};

/**
 * Returns all the bodies within an AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param {array} result An array to store resulting bodies in.
 * @return {array}
 */
SAPBroadphase.prototype.aabbQuery = function(world, aabb, result){
    result = result || [];

    if(this.dirty){
        this.sortList();
        this.dirty = false;
    }

    var axisIndex = this.axisIndex, axis = 'x';
    if(axisIndex === 1){ axis = 'y'; }
    if(axisIndex === 2){ axis = 'z'; }

    var axisList = this.axisList;
    var lower = aabb.lowerBound[axis];
    var upper = aabb.upperBound[axis];
    for(var i = 0; i < axisList.length; i++){
        var b = axisList[i];

        if(b.aabbNeedsUpdate){
            b.computeAABB();
        }

        if(b.aabb.overlaps(aabb)){
            result.push(b);
        }
    }

    return result;
};
},{"../shapes/Shape":"Ggpt","../collision/Broadphase":"ksz+"}],"XygV":[function(require,module,exports) {
module.exports = SPHSystem;

var Shape = require('../shapes/Shape');
var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var Particle = require('../shapes/Particle');
var Body = require('../objects/Body');
var Material = require('../material/Material');

/**
 * Smoothed-particle hydrodynamics system
 * @class SPHSystem
 * @constructor
 */
function SPHSystem(){
    this.particles = [];
	
    /**
     * Density of the system (kg/m3).
     * @property {number} density
     */
    this.density = 1;
	
    /**
     * Distance below which two particles are considered to be neighbors.
     * It should be adjusted so there are about 15-20 neighbor particles within this radius.
     * @property {number} smoothingRadius
     */
    this.smoothingRadius = 1;
    this.speedOfSound = 1;
	
    /**
     * Viscosity of the system.
     * @property {number} viscosity
     */
    this.viscosity = 0.01;
    this.eps = 0.000001;

    // Stuff Computed per particle
    this.pressures = [];
    this.densities = [];
    this.neighbors = [];
}

/**
 * Add a particle to the system.
 * @method add
 * @param {Body} particle
 */
SPHSystem.prototype.add = function(particle){
    this.particles.push(particle);
    if(this.neighbors.length < this.particles.length){
        this.neighbors.push([]);
    }
};

/**
 * Remove a particle from the system.
 * @method remove
 * @param {Body} particle
 */
SPHSystem.prototype.remove = function(particle){
    var idx = this.particles.indexOf(particle);
    if(idx !== -1){
        this.particles.splice(idx,1);
        if(this.neighbors.length > this.particles.length){
            this.neighbors.pop();
        }
    }
};

/**
 * Get neighbors within smoothing volume, save in the array neighbors
 * @method getNeighbors
 * @param {Body} particle
 * @param {Array} neighbors
 */
var SPHSystem_getNeighbors_dist = new Vec3();
SPHSystem.prototype.getNeighbors = function(particle,neighbors){
    var N = this.particles.length,
        id = particle.id,
        R2 = this.smoothingRadius * this.smoothingRadius,
        dist = SPHSystem_getNeighbors_dist;
    for(var i=0; i!==N; i++){
        var p = this.particles[i];
        p.position.vsub(particle.position,dist);
        if(id!==p.id && dist.norm2() < R2){
            neighbors.push(p);
        }
    }
};

// Temp vectors for calculation
var SPHSystem_update_dist = new Vec3(),
    SPHSystem_update_a_pressure = new Vec3(),
    SPHSystem_update_a_visc = new Vec3(),
    SPHSystem_update_gradW = new Vec3(),
    SPHSystem_update_r_vec = new Vec3(),
    SPHSystem_update_u = new Vec3(); // Relative velocity
SPHSystem.prototype.update = function(){
    var N = this.particles.length,
        dist = SPHSystem_update_dist,
        cs = this.speedOfSound,
        eps = this.eps;

    for(var i=0; i!==N; i++){
        var p = this.particles[i]; // Current particle
        var neighbors = this.neighbors[i];

        // Get neighbors
        neighbors.length = 0;
        this.getNeighbors(p,neighbors);
        neighbors.push(this.particles[i]); // Add current too
        var numNeighbors = neighbors.length;

        // Accumulate density for the particle
        var sum = 0.0;
        for(var j=0; j!==numNeighbors; j++){

            //printf("Current particle has position %f %f %f\n",objects[id].pos.x(),objects[id].pos.y(),objects[id].pos.z());
            p.position.vsub(neighbors[j].position, dist);
            var len = dist.norm();

            var weight = this.w(len);
            sum += neighbors[j].mass * weight;
        }

        // Save
        this.densities[i] = sum;
        this.pressures[i] = cs * cs * (this.densities[i] - this.density);
    }

    // Add forces

    // Sum to these accelerations
    var a_pressure= SPHSystem_update_a_pressure;
    var a_visc =    SPHSystem_update_a_visc;
    var gradW =     SPHSystem_update_gradW;
    var r_vec =     SPHSystem_update_r_vec;
    var u =         SPHSystem_update_u;

    for(var i=0; i!==N; i++){

        var particle = this.particles[i];

        a_pressure.set(0,0,0);
        a_visc.set(0,0,0);

        // Init vars
        var Pij;
        var nabla;
        var Vij;

        // Sum up for all other neighbors
        var neighbors = this.neighbors[i];
        var numNeighbors = neighbors.length;

        //printf("Neighbors: ");
        for(var j=0; j!==numNeighbors; j++){

            var neighbor = neighbors[j];
            //printf("%d ",nj);

            // Get r once for all..
            particle.position.vsub(neighbor.position,r_vec);
            var r = r_vec.norm();

            // Pressure contribution
            Pij = -neighbor.mass * (this.pressures[i] / (this.densities[i]*this.densities[i] + eps) + this.pressures[j] / (this.densities[j]*this.densities[j] + eps));
            this.gradw(r_vec, gradW);
            // Add to pressure acceleration
            gradW.mult(Pij , gradW);
            a_pressure.vadd(gradW, a_pressure);

            // Viscosity contribution
            neighbor.velocity.vsub(particle.velocity, u);
            u.mult( 1.0 / (0.0001+this.densities[i] * this.densities[j]) * this.viscosity * neighbor.mass , u );
            nabla = this.nablaw(r);
            u.mult(nabla,u);
            // Add to viscosity acceleration
            a_visc.vadd( u, a_visc );
        }

        // Calculate force
        a_visc.mult(particle.mass, a_visc);
        a_pressure.mult(particle.mass, a_pressure);

        // Add force to particles
        particle.force.vadd(a_visc, particle.force);
        particle.force.vadd(a_pressure, particle.force);
    }
};

// Calculate the weight using the W(r) weightfunction
SPHSystem.prototype.w = function(r){
    // 315
    var h = this.smoothingRadius;
    return 315.0/(64.0*Math.PI*Math.pow(h,9)) * Math.pow(h*h-r*r,3);
};

// calculate gradient of the weight function
SPHSystem.prototype.gradw = function(rVec,resultVec){
    var r = rVec.norm(),
        h = this.smoothingRadius;
    rVec.mult(945.0/(32.0*Math.PI*Math.pow(h,9)) * Math.pow((h*h-r*r),2) , resultVec);
};

// Calculate nabla(W)
SPHSystem.prototype.nablaw = function(r){
    var h = this.smoothingRadius;
    var nabla = 945.0/(32.0*Math.PI*Math.pow(h,9)) * (h*h-r*r)*(7*r*r - 3*h*h);
    return nabla;
};

},{"../shapes/Shape":"Ggpt","../math/Vec3":"XG60","../math/Quaternion":"bEmM","../shapes/Particle":"eQce","../objects/Body":"UPq9","../material/Material":"JCSk"}],"v3o/":[function(require,module,exports) {
module.exports = SplitSolver;

var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var Solver = require('./Solver');
var Body = require('../objects/Body');

/**
 * Splits the equations into islands and solves them independently. Can improve performance.
 * @class SplitSolver
 * @constructor
 * @extends Solver
 * @param {Solver} subsolver
 */
function SplitSolver(subsolver){
    Solver.call(this);
    this.iterations = 10;
    this.tolerance = 1e-7;
    this.subsolver = subsolver;
    this.nodes = [];
    this.nodePool = [];

    // Create needed nodes, reuse if possible
    while(this.nodePool.length < 128){
        this.nodePool.push(this.createNode());
    }
}
SplitSolver.prototype = new Solver();

// Returns the number of subsystems
var SplitSolver_solve_nodes = []; // All allocated node objects
var SplitSolver_solve_nodePool = []; // All allocated node objects
var SplitSolver_solve_eqs = [];   // Temp array
var SplitSolver_solve_bds = [];   // Temp array
var SplitSolver_solve_dummyWorld = {bodies:[]}; // Temp object

var STATIC = Body.STATIC;
function getUnvisitedNode(nodes){
    var Nnodes = nodes.length;
    for(var i=0; i!==Nnodes; i++){
        var node = nodes[i];
        if(!node.visited && !(node.body.type & STATIC)){
            return node;
        }
    }
    return false;
}

var queue = [];
function bfs(root,visitFunc,bds,eqs){
    queue.push(root);
    root.visited = true;
    visitFunc(root,bds,eqs);
    while(queue.length) {
        var node = queue.pop();
        // Loop over unvisited child nodes
        var child;
        while((child = getUnvisitedNode(node.children))) {
            child.visited = true;
            visitFunc(child,bds,eqs);
            queue.push(child);
        }
    }
}

function visitFunc(node,bds,eqs){
    bds.push(node.body);
    var Neqs = node.eqs.length;
    for(var i=0; i!==Neqs; i++){
        var eq = node.eqs[i];
        if(eqs.indexOf(eq) === -1){
            eqs.push(eq);
        }
    }
}

SplitSolver.prototype.createNode = function(){
    return { body:null, children:[], eqs:[], visited:false };
};

/**
 * Solve the subsystems
 * @method solve
 * @param  {Number} dt
 * @param  {World} world
 */
SplitSolver.prototype.solve = function(dt,world){
    var nodes=SplitSolver_solve_nodes,
        nodePool=this.nodePool,
        bodies=world.bodies,
        equations=this.equations,
        Neq=equations.length,
        Nbodies=bodies.length,
        subsolver=this.subsolver;

    // Create needed nodes, reuse if possible
    while(nodePool.length < Nbodies){
        nodePool.push(this.createNode());
    }
    nodes.length = Nbodies;
    for (var i = 0; i < Nbodies; i++) {
        nodes[i] = nodePool[i];
    }

    // Reset node values
    for(var i=0; i!==Nbodies; i++){
        var node = nodes[i];
        node.body = bodies[i];
        node.children.length = 0;
        node.eqs.length = 0;
        node.visited = false;
    }
    for(var k=0; k!==Neq; k++){
        var eq=equations[k],
            i=bodies.indexOf(eq.bi),
            j=bodies.indexOf(eq.bj),
            ni=nodes[i],
            nj=nodes[j];
        ni.children.push(nj);
        ni.eqs.push(eq);
        nj.children.push(ni);
        nj.eqs.push(eq);
    }

    var child, n=0, eqs=SplitSolver_solve_eqs;

    subsolver.tolerance = this.tolerance;
    subsolver.iterations = this.iterations;

    var dummyWorld = SplitSolver_solve_dummyWorld;
    while((child = getUnvisitedNode(nodes))){
        eqs.length = 0;
        dummyWorld.bodies.length = 0;
        bfs(child, visitFunc, dummyWorld.bodies, eqs);

        var Neqs = eqs.length;

        eqs = eqs.sort(sortById);

        for(var i=0; i!==Neqs; i++){
            subsolver.addEquation(eqs[i]);
        }

        var iter = subsolver.solve(dt,dummyWorld);
        subsolver.removeAllEquations();
        n++;
    }

    return n;
};

function sortById(a, b){
    return b.id - a.id;
}
},{"../math/Vec3":"XG60","../math/Quaternion":"bEmM","./Solver":"n/aQ","../objects/Body":"UPq9"}],"4Smo":[function(require,module,exports) {
var Vec3 = require('../math/Vec3');

module.exports = Spring;

/**
 * A spring, connecting two bodies.
 *
 * @class Spring
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Object} [options]
 * @param {number} [options.restLength]   A number > 0. Default: 1
 * @param {number} [options.stiffness]    A number >= 0. Default: 100
 * @param {number} [options.damping]      A number >= 0. Default: 1
 * @param {Vec3}  [options.worldAnchorA] Where to hook the spring to body A, in world coordinates.
 * @param {Vec3}  [options.worldAnchorB]
 * @param {Vec3}  [options.localAnchorA] Where to hook the spring to body A, in local body coordinates.
 * @param {Vec3}  [options.localAnchorB]
 */
function Spring(bodyA,bodyB,options){
    options = options || {};

    /**
     * Rest length of the spring.
     * @property restLength
     * @type {number}
     */
    this.restLength = typeof(options.restLength) === "number" ? options.restLength : 1;

    /**
     * Stiffness of the spring.
     * @property stiffness
     * @type {number}
     */
    this.stiffness = options.stiffness || 100;

    /**
     * Damping of the spring.
     * @property damping
     * @type {number}
     */
    this.damping = options.damping || 1;

    /**
     * First connected body.
     * @property bodyA
     * @type {Body}
     */
    this.bodyA = bodyA;

    /**
     * Second connected body.
     * @property bodyB
     * @type {Body}
     */
    this.bodyB = bodyB;

    /**
     * Anchor for bodyA in local bodyA coordinates.
     * @property localAnchorA
     * @type {Vec3}
     */
    this.localAnchorA = new Vec3();

    /**
     * Anchor for bodyB in local bodyB coordinates.
     * @property localAnchorB
     * @type {Vec3}
     */
    this.localAnchorB = new Vec3();

    if(options.localAnchorA){
        this.localAnchorA.copy(options.localAnchorA);
    }
    if(options.localAnchorB){
        this.localAnchorB.copy(options.localAnchorB);
    }
    if(options.worldAnchorA){
        this.setWorldAnchorA(options.worldAnchorA);
    }
    if(options.worldAnchorB){
        this.setWorldAnchorB(options.worldAnchorB);
    }
}

/**
 * Set the anchor point on body A, using world coordinates.
 * @method setWorldAnchorA
 * @param {Vec3} worldAnchorA
 */
Spring.prototype.setWorldAnchorA = function(worldAnchorA){
    this.bodyA.pointToLocalFrame(worldAnchorA,this.localAnchorA);
};

/**
 * Set the anchor point on body B, using world coordinates.
 * @method setWorldAnchorB
 * @param {Vec3} worldAnchorB
 */
Spring.prototype.setWorldAnchorB = function(worldAnchorB){
    this.bodyB.pointToLocalFrame(worldAnchorB,this.localAnchorB);
};

/**
 * Get the anchor point on body A, in world coordinates.
 * @method getWorldAnchorA
 * @param {Vec3} result The vector to store the result in.
 */
Spring.prototype.getWorldAnchorA = function(result){
    this.bodyA.pointToWorldFrame(this.localAnchorA,result);
};

/**
 * Get the anchor point on body B, in world coordinates.
 * @method getWorldAnchorB
 * @param {Vec3} result The vector to store the result in.
 */
Spring.prototype.getWorldAnchorB = function(result){
    this.bodyB.pointToWorldFrame(this.localAnchorB,result);
};

var applyForce_r =              new Vec3(),
    applyForce_r_unit =         new Vec3(),
    applyForce_u =              new Vec3(),
    applyForce_f =              new Vec3(),
    applyForce_worldAnchorA =   new Vec3(),
    applyForce_worldAnchorB =   new Vec3(),
    applyForce_ri =             new Vec3(),
    applyForce_rj =             new Vec3(),
    applyForce_ri_x_f =         new Vec3(),
    applyForce_rj_x_f =         new Vec3(),
    applyForce_tmp =            new Vec3();

/**
 * Apply the spring force to the connected bodies.
 * @method applyForce
 */
Spring.prototype.applyForce = function(){
    var k = this.stiffness,
        d = this.damping,
        l = this.restLength,
        bodyA = this.bodyA,
        bodyB = this.bodyB,
        r = applyForce_r,
        r_unit = applyForce_r_unit,
        u = applyForce_u,
        f = applyForce_f,
        tmp = applyForce_tmp;

    var worldAnchorA = applyForce_worldAnchorA,
        worldAnchorB = applyForce_worldAnchorB,
        ri = applyForce_ri,
        rj = applyForce_rj,
        ri_x_f = applyForce_ri_x_f,
        rj_x_f = applyForce_rj_x_f;

    // Get world anchors
    this.getWorldAnchorA(worldAnchorA);
    this.getWorldAnchorB(worldAnchorB);

    // Get offset points
    worldAnchorA.vsub(bodyA.position,ri);
    worldAnchorB.vsub(bodyB.position,rj);

    // Compute distance vector between world anchor points
    worldAnchorB.vsub(worldAnchorA,r);
    var rlen = r.norm();
    r_unit.copy(r);
    r_unit.normalize();

    // Compute relative velocity of the anchor points, u
    bodyB.velocity.vsub(bodyA.velocity,u);
    // Add rotational velocity

    bodyB.angularVelocity.cross(rj,tmp);
    u.vadd(tmp,u);
    bodyA.angularVelocity.cross(ri,tmp);
    u.vsub(tmp,u);

    // F = - k * ( x - L ) - D * ( u )
    r_unit.mult(-k*(rlen-l) - d*u.dot(r_unit), f);

    // Add forces to bodies
    bodyA.force.vsub(f,bodyA.force);
    bodyB.force.vadd(f,bodyB.force);

    // Angular force
    ri.cross(f,ri_x_f);
    rj.cross(f,rj_x_f);
    bodyA.torque.vsub(ri_x_f,bodyA.torque);
    bodyB.torque.vadd(rj_x_f,bodyB.torque);
};

},{"../math/Vec3":"XG60"}],"p55F":[function(require,module,exports) {
var AABB = require('../collision/AABB');
var Vec3 = require('../math/Vec3');

module.exports = Octree;

/**
 * @class OctreeNode
 * @param {object} [options]
 * @param {Octree} [options.root]
 * @param {AABB} [options.aabb]
 */
function OctreeNode(options){
    options = options || {};

    /**
     * The root node
     * @property {OctreeNode} root
     */
    this.root = options.root || null;

    /**
     * Boundary of this node
     * @property {AABB} aabb
     */
    this.aabb = options.aabb ? options.aabb.clone() : new AABB();

    /**
     * Contained data at the current node level.
     * @property {Array} data
     */
    this.data = [];

    /**
     * Children to this node
     * @property {Array} children
     */
    this.children = [];
}

/**
 * @class Octree
 * @param {AABB} aabb The total AABB of the tree
 * @param {object} [options]
 * @param {number} [options.maxDepth=8]
 * @extends OctreeNode
 */
function Octree(aabb, options){
    options = options || {};
    options.root = null;
    options.aabb = aabb;
    OctreeNode.call(this, options);

    /**
     * Maximum subdivision depth
     * @property {number} maxDepth
     */
    this.maxDepth = typeof(options.maxDepth) !== 'undefined' ? options.maxDepth : 8;
}
Octree.prototype = new OctreeNode();

OctreeNode.prototype.reset = function(aabb, options){
    this.children.length = this.data.length = 0;
};

/**
 * Insert data into this node
 * @method insert
 * @param  {AABB} aabb
 * @param  {object} elementData
 * @return {boolean} True if successful, otherwise false
 */
OctreeNode.prototype.insert = function(aabb, elementData, level){
    var nodeData = this.data;
    level = level || 0;

    // Ignore objects that do not belong in this node
    if (!this.aabb.contains(aabb)){
        return false; // object cannot be added
    }

    var children = this.children;

    if(level < (this.maxDepth || this.root.maxDepth)){
        // Subdivide if there are no children yet
        var subdivided = false;
        if (!children.length){
            this.subdivide();
            subdivided = true;
        }

        // add to whichever node will accept it
        for (var i = 0; i !== 8; i++) {
            if (children[i].insert(aabb, elementData, level + 1)){
                return true;
            }
        }

        if(subdivided){
            // No children accepted! Might as well just remove em since they contain none
            children.length = 0;
        }
    }

    // Too deep, or children didnt want it. add it in current node
    nodeData.push(elementData);

    return true;
};

var halfDiagonal = new Vec3();

/**
 * Create 8 equally sized children nodes and put them in the .children array.
 * @method subdivide
 */
OctreeNode.prototype.subdivide = function() {
    var aabb = this.aabb;
    var l = aabb.lowerBound;
    var u = aabb.upperBound;

    var children = this.children;

    children.push(
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,0) }) })
    );

    u.vsub(l, halfDiagonal);
    halfDiagonal.scale(0.5, halfDiagonal);

    var root = this.root || this;

    for (var i = 0; i !== 8; i++) {
        var child = children[i];

        // Set current node as root
        child.root = root;

        // Compute bounds
        var lowerBound = child.aabb.lowerBound;
        lowerBound.x *= halfDiagonal.x;
        lowerBound.y *= halfDiagonal.y;
        lowerBound.z *= halfDiagonal.z;

        lowerBound.vadd(l, lowerBound);

        // Upper bound is always lower bound + halfDiagonal
        lowerBound.vadd(halfDiagonal, child.aabb.upperBound);
    }
};

/**
 * Get all data, potentially within an AABB
 * @method aabbQuery
 * @param  {AABB} aabb
 * @param  {array} result
 * @return {array} The "result" object
 */
OctreeNode.prototype.aabbQuery = function(aabb, result) {

    var nodeData = this.data;

    // abort if the range does not intersect this node
    // if (!this.aabb.overlaps(aabb)){
    //     return result;
    // }

    // Add objects at this level
    // Array.prototype.push.apply(result, nodeData);

    // Add child data
    // @todo unwrap recursion into a queue / loop, that's faster in JS
    var children = this.children;


    // for (var i = 0, N = this.children.length; i !== N; i++) {
    //     children[i].aabbQuery(aabb, result);
    // }

    var queue = [this];
    while (queue.length) {
        var node = queue.pop();
        if (node.aabb.overlaps(aabb)){
            Array.prototype.push.apply(result, node.data);
        }
        Array.prototype.push.apply(queue, node.children);
    }

    return result;
};

var tmpAABB = new AABB();

/**
 * Get all data, potentially intersected by a ray.
 * @method rayQuery
 * @param  {Ray} ray
 * @param  {Transform} treeTransform
 * @param  {array} result
 * @return {array} The "result" object
 */
OctreeNode.prototype.rayQuery = function(ray, treeTransform, result) {

    // Use aabb query for now.
    // @todo implement real ray query which needs less lookups
    ray.getAABB(tmpAABB);
    tmpAABB.toLocalFrame(treeTransform, tmpAABB);
    this.aabbQuery(tmpAABB, result);

    return result;
};

/**
 * @method removeEmptyNodes
 */
OctreeNode.prototype.removeEmptyNodes = function() {
    var queue = [this];
    while (queue.length) {
        var node = queue.pop();
        for (var i = node.children.length - 1; i >= 0; i--) {
            if(!node.children[i].data.length){
                node.children.splice(i, 1);
            }
        }
        Array.prototype.push.apply(queue, node.children);
    }
};

},{"../collision/AABB":"78Lf","../math/Vec3":"XG60"}],"efSK":[function(require,module,exports) {
module.exports = Trimesh;

var Shape = require('./Shape');
var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var Transform = require('../math/Transform');
var AABB = require('../collision/AABB');
var Octree = require('../utils/Octree');

/**
 * @class Trimesh
 * @constructor
 * @param {array} vertices
 * @param {array} indices
 * @extends Shape
 * @example
 *     // How to make a mesh with a single triangle
 *     var vertices = [
 *         0, 0, 0, // vertex 0
 *         1, 0, 0, // vertex 1
 *         0, 1, 0  // vertex 2
 *     ];
 *     var indices = [
 *         0, 1, 2  // triangle 0
 *     ];
 *     var trimeshShape = new Trimesh(vertices, indices);
 */
function Trimesh(vertices, indices) {
    Shape.call(this, {
        type: Shape.types.TRIMESH
    });

    /**
     * @property vertices
     * @type {Array}
     */
    this.vertices = new Float32Array(vertices);

    /**
     * Array of integers, indicating which vertices each triangle consists of. The length of this array is thus 3 times the number of triangles.
     * @property indices
     * @type {Array}
     */
    this.indices = new Int16Array(indices);

    /**
     * The normals data.
     * @property normals
     * @type {Array}
     */
    this.normals = new Float32Array(indices.length);

    /**
     * The local AABB of the mesh.
     * @property aabb
     * @type {Array}
     */
    this.aabb = new AABB();

    /**
     * References to vertex pairs, making up all unique edges in the trimesh.
     * @property {array} edges
     */
    this.edges = null;

    /**
     * Local scaling of the mesh. Use .setScale() to set it.
     * @property {Vec3} scale
     */
    this.scale = new Vec3(1, 1, 1);

    /**
     * The indexed triangles. Use .updateTree() to update it.
     * @property {Octree} tree
     */
    this.tree = new Octree();

    this.updateEdges();
    this.updateNormals();
    this.updateAABB();
    this.updateBoundingSphereRadius();
    this.updateTree();
}
Trimesh.prototype = new Shape();
Trimesh.prototype.constructor = Trimesh;

var computeNormals_n = new Vec3();

/**
 * @method updateTree
 */
Trimesh.prototype.updateTree = function(){
    var tree = this.tree;

    tree.reset();
    tree.aabb.copy(this.aabb);
    var scale = this.scale; // The local mesh AABB is scaled, but the octree AABB should be unscaled
    tree.aabb.lowerBound.x *= 1 / scale.x;
    tree.aabb.lowerBound.y *= 1 / scale.y;
    tree.aabb.lowerBound.z *= 1 / scale.z;
    tree.aabb.upperBound.x *= 1 / scale.x;
    tree.aabb.upperBound.y *= 1 / scale.y;
    tree.aabb.upperBound.z *= 1 / scale.z;

    // Insert all triangles
    var triangleAABB = new AABB();
    var a = new Vec3();
    var b = new Vec3();
    var c = new Vec3();
    var points = [a, b, c];
    for (var i = 0; i < this.indices.length / 3; i++) {
        //this.getTriangleVertices(i, a, b, c);

        // Get unscaled triangle verts
        var i3 = i * 3;
        this._getUnscaledVertex(this.indices[i3], a);
        this._getUnscaledVertex(this.indices[i3 + 1], b);
        this._getUnscaledVertex(this.indices[i3 + 2], c);

        triangleAABB.setFromPoints(points);
        tree.insert(triangleAABB, i);
    }
    tree.removeEmptyNodes();
};

var unscaledAABB = new AABB();

/**
 * Get triangles in a local AABB from the trimesh.
 * @method getTrianglesInAABB
 * @param  {AABB} aabb
 * @param  {array} result An array of integers, referencing the queried triangles.
 */
Trimesh.prototype.getTrianglesInAABB = function(aabb, result){
    unscaledAABB.copy(aabb);

    // Scale it to local
    var scale = this.scale;
    var isx = scale.x;
    var isy = scale.y;
    var isz = scale.z;
    var l = unscaledAABB.lowerBound;
    var u = unscaledAABB.upperBound;
    l.x /= isx;
    l.y /= isy;
    l.z /= isz;
    u.x /= isx;
    u.y /= isy;
    u.z /= isz;

    return this.tree.aabbQuery(unscaledAABB, result);
};

/**
 * @method setScale
 * @param {Vec3} scale
 */
Trimesh.prototype.setScale = function(scale){
    var wasUniform = this.scale.x === this.scale.y === this.scale.z;
    var isUniform = scale.x === scale.y === scale.z;

    if(!(wasUniform && isUniform)){
        // Non-uniform scaling. Need to update normals.
        this.updateNormals();
    }
    this.scale.copy(scale);
    this.updateAABB();
    this.updateBoundingSphereRadius();
};

/**
 * Compute the normals of the faces. Will save in the .normals array.
 * @method updateNormals
 */
Trimesh.prototype.updateNormals = function(){
    var n = computeNormals_n;

    // Generate normals
    var normals = this.normals;
    for(var i=0; i < this.indices.length / 3; i++){
        var i3 = i * 3;

        var a = this.indices[i3],
            b = this.indices[i3 + 1],
            c = this.indices[i3 + 2];

        this.getVertex(a, va);
        this.getVertex(b, vb);
        this.getVertex(c, vc);

        Trimesh.computeNormal(vb, va, vc, n);

        normals[i3] = n.x;
        normals[i3 + 1] = n.y;
        normals[i3 + 2] = n.z;
    }
};

/**
 * Update the .edges property
 * @method updateEdges
 */
Trimesh.prototype.updateEdges = function(){
    var edges = {};
    var add = function(indexA, indexB){
        var key = a < b ? a + '_' + b : b + '_' + a;
        edges[key] = true;
    };
    for(var i=0; i < this.indices.length / 3; i++){
        var i3 = i * 3;
        var a = this.indices[i3],
            b = this.indices[i3 + 1],
            c = this.indices[i3 + 2];
        add(a,b);
        add(b,c);
        add(c,a);
    }
    var keys = Object.keys(edges);
    this.edges = new Int16Array(keys.length * 2);
    for (var i = 0; i < keys.length; i++) {
        var indices = keys[i].split('_');
        this.edges[2 * i] = parseInt(indices[0], 10);
        this.edges[2 * i + 1] = parseInt(indices[1], 10);
    }
};

/**
 * Get an edge vertex
 * @method getEdgeVertex
 * @param  {number} edgeIndex
 * @param  {number} firstOrSecond 0 or 1, depending on which one of the vertices you need.
 * @param  {Vec3} vertexStore Where to store the result
 */
Trimesh.prototype.getEdgeVertex = function(edgeIndex, firstOrSecond, vertexStore){
    var vertexIndex = this.edges[edgeIndex * 2 + (firstOrSecond ? 1 : 0)];
    this.getVertex(vertexIndex, vertexStore);
};

var getEdgeVector_va = new Vec3();
var getEdgeVector_vb = new Vec3();

/**
 * Get a vector along an edge.
 * @method getEdgeVector
 * @param  {number} edgeIndex
 * @param  {Vec3} vectorStore
 */
Trimesh.prototype.getEdgeVector = function(edgeIndex, vectorStore){
    var va = getEdgeVector_va;
    var vb = getEdgeVector_vb;
    this.getEdgeVertex(edgeIndex, 0, va);
    this.getEdgeVertex(edgeIndex, 1, vb);
    vb.vsub(va, vectorStore);
};

/**
 * Get face normal given 3 vertices
 * @static
 * @method computeNormal
 * @param {Vec3} va
 * @param {Vec3} vb
 * @param {Vec3} vc
 * @param {Vec3} target
 */
var cb = new Vec3();
var ab = new Vec3();
Trimesh.computeNormal = function ( va, vb, vc, target ) {
    vb.vsub(va,ab);
    vc.vsub(vb,cb);
    cb.cross(ab,target);
    if ( !target.isZero() ) {
        target.normalize();
    }
};

var va = new Vec3();
var vb = new Vec3();
var vc = new Vec3();

/**
 * Get vertex i.
 * @method getVertex
 * @param  {number} i
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype.getVertex = function(i, out){
    var scale = this.scale;
    this._getUnscaledVertex(i, out);
    out.x *= scale.x;
    out.y *= scale.y;
    out.z *= scale.z;
    return out;
};

/**
 * Get raw vertex i
 * @private
 * @method _getUnscaledVertex
 * @param  {number} i
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype._getUnscaledVertex = function(i, out){
    var i3 = i * 3;
    var vertices = this.vertices;
    return out.set(
        vertices[i3],
        vertices[i3 + 1],
        vertices[i3 + 2]
    );
};

/**
 * Get a vertex from the trimesh,transformed by the given position and quaternion.
 * @method getWorldVertex
 * @param  {number} i
 * @param  {Vec3} pos
 * @param  {Quaternion} quat
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype.getWorldVertex = function(i, pos, quat, out){
    this.getVertex(i, out);
    Transform.pointToWorldFrame(pos, quat, out, out);
    return out;
};

/**
 * Get the three vertices for triangle i.
 * @method getTriangleVertices
 * @param  {number} i
 * @param  {Vec3} a
 * @param  {Vec3} b
 * @param  {Vec3} c
 */
Trimesh.prototype.getTriangleVertices = function(i, a, b, c){
    var i3 = i * 3;
    this.getVertex(this.indices[i3], a);
    this.getVertex(this.indices[i3 + 1], b);
    this.getVertex(this.indices[i3 + 2], c);
};

/**
 * Compute the normal of triangle i.
 * @method getNormal
 * @param  {Number} i
 * @param  {Vec3} target
 * @return {Vec3} The "target" vector object
 */
Trimesh.prototype.getNormal = function(i, target){
    var i3 = i * 3;
    return target.set(
        this.normals[i3],
        this.normals[i3 + 1],
        this.normals[i3 + 2]
    );
};

var cli_aabb = new AABB();

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3} The "target" vector object
 */
Trimesh.prototype.calculateLocalInertia = function(mass,target){
    // Approximate with box inertia
    // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
    this.computeLocalAABB(cli_aabb);
    var x = cli_aabb.upperBound.x - cli_aabb.lowerBound.x,
        y = cli_aabb.upperBound.y - cli_aabb.lowerBound.y,
        z = cli_aabb.upperBound.z - cli_aabb.lowerBound.z;
    return target.set(
        1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z ),
        1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z ),
        1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x )
    );
};

var computeLocalAABB_worldVert = new Vec3();

/**
 * Compute the local AABB for the trimesh
 * @method computeLocalAABB
 * @param  {AABB} aabb
 */
Trimesh.prototype.computeLocalAABB = function(aabb){
    var l = aabb.lowerBound,
        u = aabb.upperBound,
        n = this.vertices.length,
        vertices = this.vertices,
        v = computeLocalAABB_worldVert;

    this.getVertex(0, v);
    l.copy(v);
    u.copy(v);

    for(var i=0; i !== n; i++){
        this.getVertex(i, v);

        if(v.x < l.x){
            l.x = v.x;
        } else if(v.x > u.x){
            u.x = v.x;
        }

        if(v.y < l.y){
            l.y = v.y;
        } else if(v.y > u.y){
            u.y = v.y;
        }

        if(v.z < l.z){
            l.z = v.z;
        } else if(v.z > u.z){
            u.z = v.z;
        }
    }
};


/**
 * Update the .aabb property
 * @method updateAABB
 */
Trimesh.prototype.updateAABB = function(){
    this.computeLocalAABB(this.aabb);
};

/**
 * Will update the .boundingSphereRadius property
 * @method updateBoundingSphereRadius
 */
Trimesh.prototype.updateBoundingSphereRadius = function(){
    // Assume points are distributed with local (0,0,0) as center
    var max2 = 0;
    var vertices = this.vertices;
    var v = new Vec3();
    for(var i=0, N=vertices.length / 3; i !== N; i++) {
        this.getVertex(i, v);
        var norm2 = v.norm2();
        if(norm2 > max2){
            max2 = norm2;
        }
    }
    this.boundingSphereRadius = Math.sqrt(max2);
};

var tempWorldVertex = new Vec3();
var calculateWorldAABB_frame = new Transform();
var calculateWorldAABB_aabb = new AABB();

/**
 * @method calculateWorldAABB
 * @param {Vec3}        pos
 * @param {Quaternion}  quat
 * @param {Vec3}        min
 * @param {Vec3}        max
 */
Trimesh.prototype.calculateWorldAABB = function(pos,quat,min,max){
    /*
    var n = this.vertices.length / 3,
        verts = this.vertices;
    var minx,miny,minz,maxx,maxy,maxz;

    var v = tempWorldVertex;
    for(var i=0; i<n; i++){
        this.getVertex(i, v);
        quat.vmult(v, v);
        pos.vadd(v, v);
        if (v.x < minx || minx===undefined){
            minx = v.x;
        } else if(v.x > maxx || maxx===undefined){
            maxx = v.x;
        }

        if (v.y < miny || miny===undefined){
            miny = v.y;
        } else if(v.y > maxy || maxy===undefined){
            maxy = v.y;
        }

        if (v.z < minz || minz===undefined){
            minz = v.z;
        } else if(v.z > maxz || maxz===undefined){
            maxz = v.z;
        }
    }
    min.set(minx,miny,minz);
    max.set(maxx,maxy,maxz);
    */

    // Faster approximation using local AABB
    var frame = calculateWorldAABB_frame;
    var result = calculateWorldAABB_aabb;
    frame.position = pos;
    frame.quaternion = quat;
    this.aabb.toWorldFrame(frame, result);
    min.copy(result.lowerBound);
    max.copy(result.upperBound);
};

/**
 * Get approximate volume
 * @method volume
 * @return {Number}
 */
Trimesh.prototype.volume = function(){
    return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
};

/**
 * Create a Trimesh instance, shaped as a torus.
 * @static
 * @method createTorus
 * @param  {number} [radius=1]
 * @param  {number} [tube=0.5]
 * @param  {number} [radialSegments=8]
 * @param  {number} [tubularSegments=6]
 * @param  {number} [arc=6.283185307179586]
 * @return {Trimesh} A torus
 */
Trimesh.createTorus = function (radius, tube, radialSegments, tubularSegments, arc) {
    radius = radius || 1;
    tube = tube || 0.5;
    radialSegments = radialSegments || 8;
    tubularSegments = tubularSegments || 6;
    arc = arc || Math.PI * 2;

    var vertices = [];
    var indices = [];

    for ( var j = 0; j <= radialSegments; j ++ ) {
        for ( var i = 0; i <= tubularSegments; i ++ ) {
            var u = i / tubularSegments * arc;
            var v = j / radialSegments * Math.PI * 2;

            var x = ( radius + tube * Math.cos( v ) ) * Math.cos( u );
            var y = ( radius + tube * Math.cos( v ) ) * Math.sin( u );
            var z = tube * Math.sin( v );

            vertices.push( x, y, z );
        }
    }

    for ( var j = 1; j <= radialSegments; j ++ ) {
        for ( var i = 1; i <= tubularSegments; i ++ ) {
            var a = ( tubularSegments + 1 ) * j + i - 1;
            var b = ( tubularSegments + 1 ) * ( j - 1 ) + i - 1;
            var c = ( tubularSegments + 1 ) * ( j - 1 ) + i;
            var d = ( tubularSegments + 1 ) * j + i;

            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }

    return new Trimesh(vertices, indices);
};

},{"./Shape":"Ggpt","../math/Vec3":"XG60","../math/Quaternion":"bEmM","../math/Transform":"CcAe","../collision/AABB":"78Lf","../utils/Octree":"p55F"}],"a7GZ":[function(require,module,exports) {
module.exports = OverlapKeeper;

/**
 * @class OverlapKeeper
 * @constructor
 */
function OverlapKeeper() {
    this.current = [];
    this.previous = [];
}

OverlapKeeper.prototype.getKey = function(i, j) {
    if (j < i) {
        var temp = j;
        j = i;
        i = temp;
    }
    return (i << 16) | j;
};


/**
 * @method set
 * @param {Number} i
 * @param {Number} j
 */
OverlapKeeper.prototype.set = function(i, j) {
    // Insertion sort. This way the diff will have linear complexity.
    var key = this.getKey(i, j);
    var current = this.current;
    var index = 0;
    while(key > current[index]){
        index++;
    }
    if(key === current[index]){
        return; // Pair was already added
    }
    for(var j=current.length-1; j>=index; j--){
        current[j + 1] = current[j];
    }
    current[index] = key;
};

/**
 * @method tick
 */
OverlapKeeper.prototype.tick = function() {
    var tmp = this.current;
    this.current = this.previous;
    this.previous = tmp;
    this.current.length = 0;
};

function unpackAndPush(array, key){
    array.push((key & 0xFFFF0000) >> 16, key & 0x0000FFFF);
}

/**
 * @method getDiff
 * @param  {array} additions
 * @param  {array} removals
 */
OverlapKeeper.prototype.getDiff = function(additions, removals) {
    var a = this.current;
    var b = this.previous;
    var al = a.length;
    var bl = b.length;

    var j=0;
    for (var i = 0; i < al; i++) {
        var found = false;
        var keyA = a[i];
        while(keyA > b[j]){
            j++;
        }
        found = keyA === b[j];

        if(!found){
            unpackAndPush(additions, keyA);
        }
    }
    j = 0;
    for (var i = 0; i < bl; i++) {
        var found = false;
        var keyB = b[i];
        while(keyB > a[j]){
            j++;
        }
        found = a[j] === keyB;

        if(!found){
            unpackAndPush(removals, keyB);
        }
    }
};
},{}],"YTuz":[function(require,module,exports) {
module.exports = TupleDictionary;

/**
 * @class TupleDictionary
 * @constructor
 */
function TupleDictionary() {

    /**
     * The data storage
     * @property data
     * @type {Object}
     */
    this.data = { keys:[] };
}

/**
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
TupleDictionary.prototype.get = function(i, j) {
    if (i > j) {
        // swap
        var temp = j;
        j = i;
        i = temp;
    }
    return this.data[i+'-'+j];
};

/**
 * @method set
 * @param  {Number} i
 * @param  {Number} j
 * @param {Number} value
 */
TupleDictionary.prototype.set = function(i, j, value) {
    if (i > j) {
        var temp = j;
        j = i;
        i = temp;
    }
    var key = i+'-'+j;

    // Check if key already exists
    if(!this.get(i,j)){
        this.data.keys.push(key);
    }

    this.data[key] = value;
};

/**
 * @method reset
 */
TupleDictionary.prototype.reset = function() {
    var data = this.data,
        keys = data.keys;
    while(keys.length > 0){
        var key = keys.pop();
        delete data[key];
    }
};

},{}],"rTjn":[function(require,module,exports) {
/* global performance */

module.exports = World;

var Shape = require('../shapes/Shape');
var Vec3 = require('../math/Vec3');
var Quaternion = require('../math/Quaternion');
var GSSolver = require('../solver/GSSolver');
var ContactEquation = require('../equations/ContactEquation');
var FrictionEquation = require('../equations/FrictionEquation');
var Narrowphase = require('./Narrowphase');
var EventTarget = require('../utils/EventTarget');
var ArrayCollisionMatrix = require('../collision/ArrayCollisionMatrix');
var OverlapKeeper = require('../collision/OverlapKeeper');
var Material = require('../material/Material');
var ContactMaterial = require('../material/ContactMaterial');
var Body = require('../objects/Body');
var TupleDictionary = require('../utils/TupleDictionary');
var RaycastResult = require('../collision/RaycastResult');
var AABB = require('../collision/AABB');
var Ray = require('../collision/Ray');
var NaiveBroadphase = require('../collision/NaiveBroadphase');

/**
 * The physics world
 * @class World
 * @constructor
 * @extends EventTarget
 * @param {object} [options]
 * @param {Vec3} [options.gravity]
 * @param {boolean} [options.allowSleep]
 * @param {Broadphase} [options.broadphase]
 * @param {Solver} [options.solver]
 * @param {boolean} [options.quatNormalizeFast]
 * @param {number} [options.quatNormalizeSkip]
 */
function World(options){
    options = options || {};
    EventTarget.apply(this);

    /**
     * Currently / last used timestep. Is set to -1 if not available. This value is updated before each internal step, which means that it is "fresh" inside event callbacks.
     * @property {Number} dt
     */
    this.dt = -1;

    /**
     * Makes bodies go to sleep when they've been inactive
     * @property allowSleep
     * @type {Boolean}
     * @default false
     */
    this.allowSleep = !!options.allowSleep;

    /**
     * All the current contacts (instances of ContactEquation) in the world.
     * @property contacts
     * @type {Array}
     */
    this.contacts = [];
    this.frictionEquations = [];

    /**
     * How often to normalize quaternions. Set to 0 for every step, 1 for every second etc.. A larger value increases performance. If bodies tend to explode, set to a smaller value (zero to be sure nothing can go wrong).
     * @property quatNormalizeSkip
     * @type {Number}
     * @default 0
     */
    this.quatNormalizeSkip = options.quatNormalizeSkip !== undefined ? options.quatNormalizeSkip : 0;

    /**
     * Set to true to use fast quaternion normalization. It is often enough accurate to use. If bodies tend to explode, set to false.
     * @property quatNormalizeFast
     * @type {Boolean}
     * @see Quaternion.normalizeFast
     * @see Quaternion.normalize
     * @default false
     */
    this.quatNormalizeFast = options.quatNormalizeFast !== undefined ? options.quatNormalizeFast : false;

    /**
     * The wall-clock time since simulation start
     * @property time
     * @type {Number}
     */
    this.time = 0.0;

    /**
     * Number of timesteps taken since start
     * @property stepnumber
     * @type {Number}
     */
    this.stepnumber = 0;

    /// Default and last timestep sizes
    this.default_dt = 1/60;

    this.nextId = 0;
    /**
     * @property gravity
     * @type {Vec3}
     */
    this.gravity = new Vec3();
    if(options.gravity){
        this.gravity.copy(options.gravity);
    }

    /**
     * The broadphase algorithm to use. Default is NaiveBroadphase
     * @property broadphase
     * @type {Broadphase}
     */
    this.broadphase = options.broadphase !== undefined ? options.broadphase : new NaiveBroadphase();

    /**
     * @property bodies
     * @type {Array}
     */
    this.bodies = [];

    /**
     * The solver algorithm to use. Default is GSSolver
     * @property solver
     * @type {Solver}
     */
    this.solver = options.solver !== undefined ? options.solver : new GSSolver();

    /**
     * @property constraints
     * @type {Array}
     */
    this.constraints = [];

    /**
     * @property narrowphase
     * @type {Narrowphase}
     */
    this.narrowphase = new Narrowphase(this);

    /**
     * @property {ArrayCollisionMatrix} collisionMatrix
	 * @type {ArrayCollisionMatrix}
	 */
	this.collisionMatrix = new ArrayCollisionMatrix();

    /**
     * CollisionMatrix from the previous step.
     * @property {ArrayCollisionMatrix} collisionMatrixPrevious
	 * @type {ArrayCollisionMatrix}
	 */
	this.collisionMatrixPrevious = new ArrayCollisionMatrix();

    this.bodyOverlapKeeper = new OverlapKeeper();
    this.shapeOverlapKeeper = new OverlapKeeper();

    /**
     * All added materials
     * @property materials
     * @type {Array}
     */
    this.materials = [];

    /**
     * @property contactmaterials
     * @type {Array}
     */
    this.contactmaterials = [];

    /**
     * Used to look up a ContactMaterial given two instances of Material.
     * @property {TupleDictionary} contactMaterialTable
     */
    this.contactMaterialTable = new TupleDictionary();

    this.defaultMaterial = new Material("default");

    /**
     * This contact material is used if no suitable contactmaterial is found for a contact.
     * @property defaultContactMaterial
     * @type {ContactMaterial}
     */
    this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial, { friction: 0.3, restitution: 0.0 });

    /**
     * @property doProfiling
     * @type {Boolean}
     */
    this.doProfiling = false;

    /**
     * @property profile
     * @type {Object}
     */
    this.profile = {
        solve:0,
        makeContactConstraints:0,
        broadphase:0,
        integrate:0,
        narrowphase:0,
    };

    /**
     * Time accumulator for interpolation. See http://gafferongames.com/game-physics/fix-your-timestep/
     * @property {Number} accumulator
     */
    this.accumulator = 0;

    /**
     * @property subsystems
     * @type {Array}
     */
    this.subsystems = [];

    /**
     * Dispatched after a body has been added to the world.
     * @event addBody
     * @param {Body} body The body that has been added to the world.
     */
    this.addBodyEvent = {
        type:"addBody",
        body : null
    };

    /**
     * Dispatched after a body has been removed from the world.
     * @event removeBody
     * @param {Body} body The body that has been removed from the world.
     */
    this.removeBodyEvent = {
        type:"removeBody",
        body : null
    };

    this.idToBodyMap = {};

    this.broadphase.setWorld(this);
}
World.prototype = new EventTarget();

// Temp stuff
var tmpAABB1 = new AABB();
var tmpArray1 = [];
var tmpRay = new Ray();

/**
 * Get the contact material between materials m1 and m2
 * @method getContactMaterial
 * @param {Material} m1
 * @param {Material} m2
 * @return {ContactMaterial} The contact material if it was found.
 */
World.prototype.getContactMaterial = function(m1,m2){
    return this.contactMaterialTable.get(m1.id,m2.id); //this.contactmaterials[this.mats2cmat[i+j*this.materials.length]];
};

/**
 * Get number of objects in the world.
 * @method numObjects
 * @return {Number}
 * @deprecated
 */
World.prototype.numObjects = function(){
    return this.bodies.length;
};

/**
 * Store old collision state info
 * @method collisionMatrixTick
 */
World.prototype.collisionMatrixTick = function(){
	var temp = this.collisionMatrixPrevious;
	this.collisionMatrixPrevious = this.collisionMatrix;
	this.collisionMatrix = temp;
	this.collisionMatrix.reset();

    this.bodyOverlapKeeper.tick();
    this.shapeOverlapKeeper.tick();
};

/**
 * Add a rigid body to the simulation.
 * @method add
 * @param {Body} body
 * @todo If the simulation has not yet started, why recrete and copy arrays for each body? Accumulate in dynamic arrays in this case.
 * @todo Adding an array of bodies should be possible. This would save some loops too
 * @deprecated Use .addBody instead
 */
World.prototype.add = World.prototype.addBody = function(body){
    if(this.bodies.indexOf(body) !== -1){
        return;
    }
    body.index = this.bodies.length;
    this.bodies.push(body);
    body.world = this;
    body.initPosition.copy(body.position);
    body.initVelocity.copy(body.velocity);
    body.timeLastSleepy = this.time;
    if(body instanceof Body){
        body.initAngularVelocity.copy(body.angularVelocity);
        body.initQuaternion.copy(body.quaternion);
    }
	this.collisionMatrix.setNumObjects(this.bodies.length);
    this.addBodyEvent.body = body;
    this.idToBodyMap[body.id] = body;
    this.dispatchEvent(this.addBodyEvent);
};

/**
 * Add a constraint to the simulation.
 * @method addConstraint
 * @param {Constraint} c
 */
World.prototype.addConstraint = function(c){
    this.constraints.push(c);
};

/**
 * Removes a constraint
 * @method removeConstraint
 * @param {Constraint} c
 */
World.prototype.removeConstraint = function(c){
    var idx = this.constraints.indexOf(c);
    if(idx!==-1){
        this.constraints.splice(idx,1);
    }
};

/**
 * Raycast test
 * @method rayTest
 * @param {Vec3} from
 * @param {Vec3} to
 * @param {RaycastResult} result
 * @deprecated Use .raycastAll, .raycastClosest or .raycastAny instead.
 */
World.prototype.rayTest = function(from, to, result){
    if(result instanceof RaycastResult){
        // Do raycastclosest
        this.raycastClosest(from, to, {
            skipBackfaces: true
        }, result);
    } else {
        // Do raycastAll
        this.raycastAll(from, to, {
            skipBackfaces: true
        }, result);
    }
};

/**
 * Ray cast against all bodies. The provided callback will be executed for each hit with a RaycastResult as single argument.
 * @method raycastAll
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {Function} callback
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastAll = function(from, to, options, callback){
    options.mode = Ray.ALL;
    options.from = from;
    options.to = to;
    options.callback = callback;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Ray cast, and stop at the first result. Note that the order is random - but the method is fast.
 * @method raycastAny
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {RaycastResult} result
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastAny = function(from, to, options, result){
    options.mode = Ray.ANY;
    options.from = from;
    options.to = to;
    options.result = result;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Ray cast, and return information of the closest hit.
 * @method raycastClosest
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {RaycastResult} result
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastClosest = function(from, to, options, result){
    options.mode = Ray.CLOSEST;
    options.from = from;
    options.to = to;
    options.result = result;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Remove a rigid body from the simulation.
 * @method remove
 * @param {Body} body
 * @deprecated Use .removeBody instead
 */
World.prototype.remove = function(body){
    body.world = null;
    var n = this.bodies.length - 1,
        bodies = this.bodies,
        idx = bodies.indexOf(body);
    if(idx !== -1){
        bodies.splice(idx, 1); // Todo: should use a garbage free method

        // Recompute index
        for(var i=0; i!==bodies.length; i++){
            bodies[i].index = i;
        }

        this.collisionMatrix.setNumObjects(n);
        this.removeBodyEvent.body = body;
        delete this.idToBodyMap[body.id];
        this.dispatchEvent(this.removeBodyEvent);
    }
};

/**
 * Remove a rigid body from the simulation.
 * @method removeBody
 * @param {Body} body
 */
World.prototype.removeBody = World.prototype.remove;

World.prototype.getBodyById = function(id){
    return this.idToBodyMap[id];
};

// TODO Make a faster map
World.prototype.getShapeById = function(id){
    var bodies = this.bodies;
    for(var i=0, bl = bodies.length; i<bl; i++){
        var shapes = bodies[i].shapes;
        for (var j = 0, sl = shapes.length; j < sl; j++) {
            var shape = shapes[j];
            if(shape.id === id){
                return shape;
            }
        }
    }
};

/**
 * Adds a material to the World.
 * @method addMaterial
 * @param {Material} m
 * @todo Necessary?
 */
World.prototype.addMaterial = function(m){
    this.materials.push(m);
};

/**
 * Adds a contact material to the World
 * @method addContactMaterial
 * @param {ContactMaterial} cmat
 */
World.prototype.addContactMaterial = function(cmat) {

    // Add contact material
    this.contactmaterials.push(cmat);

    // Add current contact material to the material table
    this.contactMaterialTable.set(cmat.materials[0].id,cmat.materials[1].id,cmat);
};

// performance.now()
if(typeof performance === 'undefined'){
    performance = {};
}
if(!performance.now){
    var nowOffset = Date.now();
    if (performance.timing && performance.timing.navigationStart){
        nowOffset = performance.timing.navigationStart;
    }
    performance.now = function(){
        return Date.now() - nowOffset;
    };
}

var step_tmp1 = new Vec3();

/**
 * Step the physics world forward in time.
 *
 * There are two modes. The simple mode is fixed timestepping without interpolation. In this case you only use the first argument. The second case uses interpolation. In that you also provide the time since the function was last used, as well as the maximum fixed timesteps to take.
 *
 * @method step
 * @param {Number} dt                       The fixed time step size to use.
 * @param {Number} [timeSinceLastCalled]    The time elapsed since the function was last called.
 * @param {Number} [maxSubSteps=10]         Maximum number of fixed steps to take per function call.
 *
 * @example
 *     // fixed timestepping without interpolation
 *     world.step(1/60);
 *
 * @see http://bulletphysics.org/mediawiki-1.5.8/index.php/Stepping_The_World
 */
World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps){
    maxSubSteps = maxSubSteps || 10;
    timeSinceLastCalled = timeSinceLastCalled || 0;

    if(timeSinceLastCalled === 0){ // Fixed, simple stepping

        this.internalStep(dt);

        // Increment time
        this.time += dt;

    } else {

        this.accumulator += timeSinceLastCalled;
        var substeps = 0;
        while (this.accumulator >= dt && substeps < maxSubSteps) {
            // Do fixed steps to catch up
            this.internalStep(dt);
            this.accumulator -= dt;
            substeps++;
        }

        var t = (this.accumulator % dt) / dt;
        for(var j=0; j !== this.bodies.length; j++){
            var b = this.bodies[j];
            b.previousPosition.lerp(b.position, t, b.interpolatedPosition);
            b.previousQuaternion.slerp(b.quaternion, t, b.interpolatedQuaternion);
            b.previousQuaternion.normalize();
        }
        this.time += timeSinceLastCalled;
    }
};

var
    /**
     * Dispatched after the world has stepped forward in time.
     * @event postStep
     */
    World_step_postStepEvent = {type:"postStep"}, // Reusable event objects to save memory
    /**
     * Dispatched before the world steps forward in time.
     * @event preStep
     */
    World_step_preStepEvent = {type:"preStep"},
    World_step_collideEvent = {type:Body.COLLIDE_EVENT_NAME, body:null, contact:null },
    World_step_oldContacts = [], // Pools for unused objects
    World_step_frictionEquationPool = [],
    World_step_p1 = [], // Reusable arrays for collision pairs
    World_step_p2 = [],
    World_step_gvec = new Vec3(), // Temporary vectors and quats
    World_step_vi = new Vec3(),
    World_step_vj = new Vec3(),
    World_step_wi = new Vec3(),
    World_step_wj = new Vec3(),
    World_step_t1 = new Vec3(),
    World_step_t2 = new Vec3(),
    World_step_rixn = new Vec3(),
    World_step_rjxn = new Vec3(),
    World_step_step_q = new Quaternion(),
    World_step_step_w = new Quaternion(),
    World_step_step_wq = new Quaternion(),
    invI_tau_dt = new Vec3();
World.prototype.internalStep = function(dt){
    this.dt = dt;

    var world = this,
        that = this,
        contacts = this.contacts,
        p1 = World_step_p1,
        p2 = World_step_p2,
        N = this.numObjects(),
        bodies = this.bodies,
        solver = this.solver,
        gravity = this.gravity,
        doProfiling = this.doProfiling,
        profile = this.profile,
        DYNAMIC = Body.DYNAMIC,
        profilingStart,
        constraints = this.constraints,
        frictionEquationPool = World_step_frictionEquationPool,
        gnorm = gravity.norm(),
        gx = gravity.x,
        gy = gravity.y,
        gz = gravity.z,
        i=0;

    if(doProfiling){
        profilingStart = performance.now();
    }

    // Add gravity to all objects
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.type === DYNAMIC){ // Only for dynamic bodies
            var f = bi.force, m = bi.mass;
            f.x += m*gx;
            f.y += m*gy;
            f.z += m*gz;
        }
    }

    // Update subsystems
    for(var i=0, Nsubsystems=this.subsystems.length; i!==Nsubsystems; i++){
        this.subsystems[i].update();
    }

    // Collision detection
    if(doProfiling){ profilingStart = performance.now(); }
    p1.length = 0; // Clean up pair arrays from last step
    p2.length = 0;
    this.broadphase.collisionPairs(this,p1,p2);
    if(doProfiling){ profile.broadphase = performance.now() - profilingStart; }

    // Remove constrained pairs with collideConnected == false
    var Nconstraints = constraints.length;
    for(i=0; i!==Nconstraints; i++){
        var c = constraints[i];
        if(!c.collideConnected){
            for(var j = p1.length-1; j>=0; j-=1){
                if( (c.bodyA === p1[j] && c.bodyB === p2[j]) ||
                    (c.bodyB === p1[j] && c.bodyA === p2[j])){
                    p1.splice(j, 1);
                    p2.splice(j, 1);
                }
            }
        }
    }

    this.collisionMatrixTick();

    // Generate contacts
    if(doProfiling){ profilingStart = performance.now(); }
    var oldcontacts = World_step_oldContacts;
    var NoldContacts = contacts.length;

    for(i=0; i!==NoldContacts; i++){
        oldcontacts.push(contacts[i]);
    }
    contacts.length = 0;

    // Transfer FrictionEquation from current list to the pool for reuse
    var NoldFrictionEquations = this.frictionEquations.length;
    for(i=0; i!==NoldFrictionEquations; i++){
        frictionEquationPool.push(this.frictionEquations[i]);
    }
    this.frictionEquations.length = 0;

    this.narrowphase.getContacts(
        p1,
        p2,
        this,
        contacts,
        oldcontacts, // To be reused
        this.frictionEquations,
        frictionEquationPool
    );

    if(doProfiling){
        profile.narrowphase = performance.now() - profilingStart;
    }

    // Loop over all collisions
    if(doProfiling){
        profilingStart = performance.now();
    }

    // Add all friction eqs
    for (var i = 0; i < this.frictionEquations.length; i++) {
        solver.addEquation(this.frictionEquations[i]);
    }

    var ncontacts = contacts.length;
    for(var k=0; k!==ncontacts; k++){

        // Current contact
        var c = contacts[k];

        // Get current collision indeces
        var bi = c.bi,
            bj = c.bj,
            si = c.si,
            sj = c.sj;

        // Get collision properties
        var cm;
        if(bi.material && bj.material){
            cm = this.getContactMaterial(bi.material,bj.material) || this.defaultContactMaterial;
        } else {
            cm = this.defaultContactMaterial;
        }

        // c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

        var mu = cm.friction;
        // c.restitution = cm.restitution;

        // If friction or restitution were specified in the material, use them
        if(bi.material && bj.material){
            if(bi.material.friction >= 0 && bj.material.friction >= 0){
                mu = bi.material.friction * bj.material.friction;
            }

            if(bi.material.restitution >= 0 && bj.material.restitution >= 0){
                c.restitution = bi.material.restitution * bj.material.restitution;
            }
        }

		// c.setSpookParams(
  //           cm.contactEquationStiffness,
  //           cm.contactEquationRelaxation,
  //           dt
  //       );

		solver.addEquation(c);

		// // Add friction constraint equation
		// if(mu > 0){

		// 	// Create 2 tangent equations
		// 	var mug = mu * gnorm;
		// 	var reducedMass = (bi.invMass + bj.invMass);
		// 	if(reducedMass > 0){
		// 		reducedMass = 1/reducedMass;
		// 	}
		// 	var pool = frictionEquationPool;
		// 	var c1 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
		// 	var c2 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
		// 	this.frictionEquations.push(c1, c2);

		// 	c1.bi = c2.bi = bi;
		// 	c1.bj = c2.bj = bj;
		// 	c1.minForce = c2.minForce = -mug*reducedMass;
		// 	c1.maxForce = c2.maxForce = mug*reducedMass;

		// 	// Copy over the relative vectors
		// 	c1.ri.copy(c.ri);
		// 	c1.rj.copy(c.rj);
		// 	c2.ri.copy(c.ri);
		// 	c2.rj.copy(c.rj);

		// 	// Construct tangents
		// 	c.ni.tangents(c1.t, c2.t);

  //           // Set spook params
  //           c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);
  //           c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);

  //           c1.enabled = c2.enabled = c.enabled;

		// 	// Add equations to solver
		// 	solver.addEquation(c1);
		// 	solver.addEquation(c2);
		// }

        if( bi.allowSleep &&
            bi.type === Body.DYNAMIC &&
            bi.sleepState  === Body.SLEEPING &&
            bj.sleepState  === Body.AWAKE &&
            bj.type !== Body.STATIC
        ){
            var speedSquaredB = bj.velocity.norm2() + bj.angularVelocity.norm2();
            var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit,2);
            if(speedSquaredB >= speedLimitSquaredB*2){
                bi._wakeUpAfterNarrowphase = true;
            }
        }

        if( bj.allowSleep &&
            bj.type === Body.DYNAMIC &&
            bj.sleepState  === Body.SLEEPING &&
            bi.sleepState  === Body.AWAKE &&
            bi.type !== Body.STATIC
        ){
            var speedSquaredA = bi.velocity.norm2() + bi.angularVelocity.norm2();
            var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit,2);
            if(speedSquaredA >= speedLimitSquaredA*2){
                bj._wakeUpAfterNarrowphase = true;
            }
        }

        // Now we know that i and j are in contact. Set collision matrix state
		this.collisionMatrix.set(bi, bj, true);

        if (!this.collisionMatrixPrevious.get(bi, bj)) {
            // First contact!
            // We reuse the collideEvent object, otherwise we will end up creating new objects for each new contact, even if there's no event listener attached.
            World_step_collideEvent.body = bj;
            World_step_collideEvent.contact = c;
            bi.dispatchEvent(World_step_collideEvent);

            World_step_collideEvent.body = bi;
            bj.dispatchEvent(World_step_collideEvent);
        }

        this.bodyOverlapKeeper.set(bi.id, bj.id);
        this.shapeOverlapKeeper.set(si.id, sj.id);
    }

    this.emitContactEvents();

    if(doProfiling){
        profile.makeContactConstraints = performance.now() - profilingStart;
        profilingStart = performance.now();
    }

    // Wake up bodies
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi._wakeUpAfterNarrowphase){
            bi.wakeUp();
            bi._wakeUpAfterNarrowphase = false;
        }
    }

    // Add user-added constraints
    var Nconstraints = constraints.length;
    for(i=0; i!==Nconstraints; i++){
        var c = constraints[i];
        c.update();
        for(var j=0, Neq=c.equations.length; j!==Neq; j++){
            var eq = c.equations[j];
            solver.addEquation(eq);
        }
    }

    // Solve the constrained system
    solver.solve(dt,this);

    if(doProfiling){
        profile.solve = performance.now() - profilingStart;
    }

    // Remove all contacts from solver
    solver.removeAllEquations();

    // Apply damping, see http://code.google.com/p/bullet/issues/detail?id=74 for details
    var pow = Math.pow;
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.type & DYNAMIC){ // Only for dynamic bodies
            var ld = pow(1.0 - bi.linearDamping,dt);
            var v = bi.velocity;
            v.mult(ld,v);
            var av = bi.angularVelocity;
            if(av){
                var ad = pow(1.0 - bi.angularDamping,dt);
                av.mult(ad,av);
            }
        }
    }

    this.dispatchEvent(World_step_preStepEvent);

    // Invoke pre-step callbacks
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.preStep){
            bi.preStep.call(bi);
        }
    }

    // Leap frog
    // vnew = v + h*f/m
    // xnew = x + h*vnew
    if(doProfiling){
        profilingStart = performance.now();
    }
    var stepnumber = this.stepnumber;
    var quatNormalize = stepnumber % (this.quatNormalizeSkip + 1) === 0;
    var quatNormalizeFast = this.quatNormalizeFast;

    for(i=0; i!==N; i++){
        bodies[i].integrate(dt, quatNormalize, quatNormalizeFast);
    }
    this.clearForces();

    this.broadphase.dirty = true;

    if(doProfiling){
        profile.integrate = performance.now() - profilingStart;
    }

    // Update world time
    this.time += dt;
    this.stepnumber += 1;

    this.dispatchEvent(World_step_postStepEvent);

    // Invoke post-step callbacks
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        var postStep = bi.postStep;
        if(postStep){
            postStep.call(bi);
        }
    }

    // Sleeping update
    if(this.allowSleep){
        for(i=0; i!==N; i++){
            bodies[i].sleepTick(this.time);
        }
    }
};

World.prototype.emitContactEvents = (function(){
    var additions = [];
    var removals = [];
    var beginContactEvent = {
        type: 'beginContact',
        bodyA: null,
        bodyB: null
    };
    var endContactEvent = {
        type: 'endContact',
        bodyA: null,
        bodyB: null
    };
    var beginShapeContactEvent = {
        type: 'beginShapeContact',
        bodyA: null,
        bodyB: null,
        shapeA: null,
        shapeB: null
    };
    var endShapeContactEvent = {
        type: 'endShapeContact',
        bodyA: null,
        bodyB: null,
        shapeA: null,
        shapeB: null
    };
    return function(){
        var hasBeginContact = this.hasAnyEventListener('beginContact');
        var hasEndContact = this.hasAnyEventListener('endContact');

        if(hasBeginContact || hasEndContact){
            this.bodyOverlapKeeper.getDiff(additions, removals);
        }

        if(hasBeginContact){
            for (var i = 0, l = additions.length; i < l; i += 2) {
                beginContactEvent.bodyA = this.getBodyById(additions[i]);
                beginContactEvent.bodyB = this.getBodyById(additions[i+1]);
                this.dispatchEvent(beginContactEvent);
            }
            beginContactEvent.bodyA = beginContactEvent.bodyB = null;
        }

        if(hasEndContact){
            for (var i = 0, l = removals.length; i < l; i += 2) {
                endContactEvent.bodyA = this.getBodyById(removals[i]);
                endContactEvent.bodyB = this.getBodyById(removals[i+1]);
                this.dispatchEvent(endContactEvent);
            }
            endContactEvent.bodyA = endContactEvent.bodyB = null;
        }

        additions.length = removals.length = 0;

        var hasBeginShapeContact = this.hasAnyEventListener('beginShapeContact');
        var hasEndShapeContact = this.hasAnyEventListener('endShapeContact');

        if(hasBeginShapeContact || hasEndShapeContact){
            this.shapeOverlapKeeper.getDiff(additions, removals);
        }

        if(hasBeginShapeContact){
            for (var i = 0, l = additions.length; i < l; i += 2) {
                var shapeA = this.getShapeById(additions[i]);
                var shapeB = this.getShapeById(additions[i+1]);
                beginShapeContactEvent.shapeA = shapeA;
                beginShapeContactEvent.shapeB = shapeB;
                beginShapeContactEvent.bodyA = shapeA.body;
                beginShapeContactEvent.bodyB = shapeB.body;
                this.dispatchEvent(beginShapeContactEvent);
            }
            beginShapeContactEvent.bodyA = beginShapeContactEvent.bodyB = beginShapeContactEvent.shapeA = beginShapeContactEvent.shapeB = null;
        }

        if(hasEndShapeContact){
            for (var i = 0, l = removals.length; i < l; i += 2) {
                var shapeA = this.getShapeById(removals[i]);
                var shapeB = this.getShapeById(removals[i+1]);
                endShapeContactEvent.shapeA = shapeA;
                endShapeContactEvent.shapeB = shapeB;
                endShapeContactEvent.bodyA = shapeA.body;
                endShapeContactEvent.bodyB = shapeB.body;
                this.dispatchEvent(endShapeContactEvent);
            }
            endShapeContactEvent.bodyA = endShapeContactEvent.bodyB = endShapeContactEvent.shapeA = endShapeContactEvent.shapeB = null;
        }

    };
})();

/**
 * Sets all body forces in the world to zero.
 * @method clearForces
 */
World.prototype.clearForces = function(){
    var bodies = this.bodies;
    var N = bodies.length;
    for(var i=0; i !== N; i++){
        var b = bodies[i],
            force = b.force,
            tau = b.torque;

        b.force.set(0,0,0);
        b.torque.set(0,0,0);
    }
};

},{"../shapes/Shape":"Ggpt","../math/Vec3":"XG60","../math/Quaternion":"bEmM","../solver/GSSolver":"7tMV","../equations/ContactEquation":"waBd","../equations/FrictionEquation":"We/N","./Narrowphase":"L4TN","../utils/EventTarget":"E7r9","../collision/ArrayCollisionMatrix":"yOl/","../collision/OverlapKeeper":"a7GZ","../material/Material":"JCSk","../material/ContactMaterial":"B/aW","../objects/Body":"UPq9","../utils/TupleDictionary":"YTuz","../collision/RaycastResult":"Pzss","../collision/AABB":"78Lf","../collision/Ray":"CqEM","../collision/NaiveBroadphase":"HPrd"}],"xZVR":[function(require,module,exports) {
// Export classes
module.exports = {
    version :                       require('../package.json').version,

    AABB :                          require('./collision/AABB'),
    ArrayCollisionMatrix :          require('./collision/ArrayCollisionMatrix'),
    Body :                          require('./objects/Body'),
    Box :                           require('./shapes/Box'),
    Broadphase :                    require('./collision/Broadphase'),
    Constraint :                    require('./constraints/Constraint'),
    ContactEquation :               require('./equations/ContactEquation'),
    Narrowphase :                   require('./world/Narrowphase'),
    ConeTwistConstraint :           require('./constraints/ConeTwistConstraint'),
    ContactMaterial :               require('./material/ContactMaterial'),
    ConvexPolyhedron :              require('./shapes/ConvexPolyhedron'),
    Cylinder :                      require('./shapes/Cylinder'),
    DistanceConstraint :            require('./constraints/DistanceConstraint'),
    Equation :                      require('./equations/Equation'),
    EventTarget :                   require('./utils/EventTarget'),
    FrictionEquation :              require('./equations/FrictionEquation'),
    GSSolver :                      require('./solver/GSSolver'),
    GridBroadphase :                require('./collision/GridBroadphase'),
    Heightfield :                   require('./shapes/Heightfield'),
    HingeConstraint :               require('./constraints/HingeConstraint'),
    LockConstraint :                require('./constraints/LockConstraint'),
    Mat3 :                          require('./math/Mat3'),
    Material :                      require('./material/Material'),
    NaiveBroadphase :               require('./collision/NaiveBroadphase'),
    ObjectCollisionMatrix :         require('./collision/ObjectCollisionMatrix'),
    Pool :                          require('./utils/Pool'),
    Particle :                      require('./shapes/Particle'),
    Plane :                         require('./shapes/Plane'),
    PointToPointConstraint :        require('./constraints/PointToPointConstraint'),
    Quaternion :                    require('./math/Quaternion'),
    Ray :                           require('./collision/Ray'),
    RaycastVehicle :                require('./objects/RaycastVehicle'),
    RaycastResult :                 require('./collision/RaycastResult'),
    RigidVehicle :                  require('./objects/RigidVehicle'),
    RotationalEquation :            require('./equations/RotationalEquation'),
    RotationalMotorEquation :       require('./equations/RotationalMotorEquation'),
    SAPBroadphase :                 require('./collision/SAPBroadphase'),
    SPHSystem :                     require('./objects/SPHSystem'),
    Shape :                         require('./shapes/Shape'),
    Solver :                        require('./solver/Solver'),
    Sphere :                        require('./shapes/Sphere'),
    SplitSolver :                   require('./solver/SplitSolver'),
    Spring :                        require('./objects/Spring'),
    Transform :                     require('./math/Transform'),
    Trimesh :                       require('./shapes/Trimesh'),
    Vec3 :                          require('./math/Vec3'),
    Vec3Pool :                      require('./utils/Vec3Pool'),
    World :                         require('./world/World'),
};

},{"../package.json":"luXt","./collision/AABB":"78Lf","./collision/ArrayCollisionMatrix":"yOl/","./objects/Body":"UPq9","./shapes/Box":"o0NO","./collision/Broadphase":"ksz+","./constraints/Constraint":"/p7L","./equations/ContactEquation":"waBd","./world/Narrowphase":"L4TN","./constraints/ConeTwistConstraint":"1bnE","./material/ContactMaterial":"B/aW","./shapes/ConvexPolyhedron":"1+Yp","./shapes/Cylinder":"Qiai","./constraints/DistanceConstraint":"xpJg","./equations/Equation":"m/dE","./utils/EventTarget":"E7r9","./equations/FrictionEquation":"We/N","./solver/GSSolver":"7tMV","./collision/GridBroadphase":"pxpW","./shapes/Heightfield":"MAvk","./constraints/HingeConstraint":"eA4Z","./constraints/LockConstraint":"Br95","./math/Mat3":"etZO","./material/Material":"JCSk","./collision/NaiveBroadphase":"HPrd","./collision/ObjectCollisionMatrix":"WKip","./utils/Pool":"/qMa","./shapes/Particle":"eQce","./shapes/Plane":"zWST","./constraints/PointToPointConstraint":"0odR","./math/Quaternion":"bEmM","./collision/Ray":"CqEM","./objects/RaycastVehicle":"RUjU","./collision/RaycastResult":"Pzss","./objects/RigidVehicle":"v9yn","./equations/RotationalEquation":"JvZw","./equations/RotationalMotorEquation":"awjA","./collision/SAPBroadphase":"zUl4","./objects/SPHSystem":"XygV","./shapes/Shape":"Ggpt","./solver/Solver":"n/aQ","./shapes/Sphere":"+bqW","./solver/SplitSolver":"v3o/","./objects/Spring":"4Smo","./math/Transform":"CcAe","./shapes/Trimesh":"efSK","./math/Vec3":"XG60","./utils/Vec3Pool":"MTUm","./world/World":"rTjn"}],"REVM":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CannonHelper = void 0;

var _cannon = _interopRequireDefault(require("cannon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CannonHelper =
/*#__PURE__*/
function () {
  function CannonHelper(worldObjects) {
    var _this = this;

    _classCallCheck(this, CannonHelper);

    this.ShapeTypes = {
      SPHERE: 1,
      PLANE: 2,
      BOX: 4,
      COMPOUND: 8,
      CONVEXPOLYHEDRON: 16,
      HEIGHTFIELD: 32,
      PARTICLE: 64,
      CYLINDER: 128,
      TRIMESH: 256 // consts for stepping through time in the sim

    };
    this.fixedTimeStep = 1.0 / 30.0; // seconds

    this.maxSubSteps = 3;
    this.groundMaterial = new _cannon.default.Material(); // pass them in at the beginning?

    this.worldObjects = worldObjects; // Init our world

    this.world = new _cannon.default.World(); // expose the original cannon object for static methods

    this.CANNON = _cannon.default; // set the gravity

    this.world.gravity.set(0, -29.82, 0); // m/s²
    // set up the initial objects

    this.worldObjects.forEach(function (worldObject, i) {
      // attempt to boost performance by making sleeping more agressive
      // worldObject.physicsObject.sleepSpeedLimit = 1.0
      // add the body to the world
      // this.worldObjects[i].physicsObject = this.world.addBody(worldObject.physicsObject)
      _this.world.addBody(worldObject.physicsObject); // save the transform for later
      // using getTransform everywhere seemed to have a performance hit


      worldObject.transform = worldObject.sceneObject.getTransform(); // sync the scale initially so that everything matches

      _this.syncScale(_this.worldObjects[i].transform, _this.worldObjects[i].physicsObject); // if (this.groundBody && this.worldObjects[i].physicsObject) {
      //   print('here')
      //   var contactMat = new CANNON.ContactMaterial(this.groundBody.material, worldObject.physicsObject.material, {
      //     friction: 0.0,
      //     restitution: 0.7
      //   })
      //   this.world.addContactMaterial(contactMat)
      // }

    }); // TEST CONTACT MATERIAL
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

  _createClass(CannonHelper, [{
    key: "bodyPos",
    value: function bodyPos(cannonBody) {
      return new vec3(cannonBody.position.x, cannonBody.position.y, cannonBody.position.z);
    } // return the scale/size of a physics object
    // use for scaling a sceneObject to match the physics world

  }, {
    key: "bodyScale",
    value: function bodyScale(cannonBody) {
      var shape = cannonBody.shapes[0]; // // TODO: change to switch to support more shapes
      // if (shape.type == this.ShapeTypes.SPHERE) return new vec3(shape.radius, shape.radius, shape.radius)
      // // the plane type seems to have no size
      // else if (shape.type == this.ShapeTypes.PLANE) return new vec3(10, 10, 10)

      switch (shape.type) {
        case this.ShapeTypes.SPHERE:
          return new vec3(shape.radius, shape.radius, shape.radius);
          break;

        case this.ShapeTypes.PLANE:
          return new vec3(10, 10, 10);
          break;

        case this.ShapeTypes.BOX:
        default:
          var size = shape.halfExtents;
          return new vec3(size.x / 8, size.y / 8, size.z / 8);
          break;
      }
    }
  }, {
    key: "bodyRot",
    value: function bodyRot(cannonBody) {
      var rot = cannonBody.quaternion;
      transform.setWorldRotation(new quat(rot.w, rot.x, rot.y, rot.z));
    }
  }, {
    key: "addWorldObject",
    value: function addWorldObject(worldObject) {
      this.world.addBody(worldObject.physicsObject);
      worldObject.transform = worldObject.sceneObject.getTransform(); // sync the scale initially so that everything matches

      this.worldObjects.push(worldObject);
      this.syncScale(worldObject.transform, worldObject.physicsObject);
    }
  }, {
    key: "syncPos",
    value: function syncPos(transform, cannonBody) {
      // var transform = sceneObject.getTransform()
      var newPos = this.bodyPos(cannonBody);
      transform.setWorldPosition(newPos);
      var rot = cannonBody.quaternion;
      transform.setWorldRotation(new quat(rot.w, rot.x, rot.y, rot.z));
    }
  }, {
    key: "syncScale",
    value: function syncScale(transform, cannonBody) {
      // const transform = sceneObject.getTransform()
      var physicsSize = this.bodyScale(cannonBody);
      transform.setWorldScale(physicsSize);
    }
  }, {
    key: "update",
    value: function update() {
      // step the sim, can just take fixed time
      // this.world.step(this.fixedTimeStep, getDeltaTime(), this.maxSubSteps)
      this.world.step(global.getDeltaTime()); // for loop faster, really worth it?

      for (var i = 0; i < this.worldObjects.length; i++) {
        // const element = array[i];
        this.syncPos(this.worldObjects[i].transform, this.worldObjects[i].physicsObject);
      } // this.worldObjects.forEach(worldObject => {
      //   this.syncPos(worldObject.transform, worldObject.physicsObject)
      // })

    } // sync from snap -> cannon

  }, {
    key: "syncSceneObject",
    value: function syncSceneObject(transform, cannonBody) {
      // var transform = sceneObject.getTransform()
      var pos = transform.getWorldPosition();
      var rot = transform.getWorldRotation(); //   var newPlayerPos = new CANNON.Vec3(pos.x, pos.y, pos.z)
      // XXX: probably a pretty bad way of syncing
      // might be better to add velocity towards the desired point

      cannonBody.position.set(pos.x, pos.y, pos.z);
      cannonBody.quaternion.set(rot.x, rot.z, rot.y, rot.w);
      cannonBody.velocity = new _cannon.default.Vec3(0, 0, 0);
      cannonBody.torque = new _cannon.default.Vec3(0, 0, 0); // cannonBody.type = CANNON.Body.STATIC
      //   cannonBody.position.set(pos.x, pos.z * -1, pos.y)
    }
  }], [{
    key: "makeBox",
    value: function makeBox(size, position, rotation) {
      var mat = new _cannon.default.Material();
      return new _cannon.default.Body({
        mass: 1,
        position: new _cannon.default.Vec3(position.x, position.y, position.z),
        shape: new _cannon.default.Box(new _cannon.default.Vec3(size.x, size.y, size.z)),
        // if no rotation on W set something, seems to stall if nothing is set!
        quaternion: new _cannon.default.Quaternion(rotation.x, rotation.y, rotation.z, rotation.w || 0.5),
        // quaternion: new CANNON.Quaternion(rotation.x || 0.5, rotation.y || 0.5, rotation.z || 0.5, rotation.w || 0.5),
        material: mat // DYNAMIC: 1
        // fixedRotation: true
        // linearDamping: 0.1,
        // angularDamping: 0.5

      });
    }
  }, {
    key: "makeSphere",
    value: function makeSphere(size, position, rotation) {
      var mat = new _cannon.default.Material();
      return new _cannon.default.Body({
        mass: 1,
        // position: new CANNON.Vec3(0, 10, -10),
        // shape: new CANNON.Sphere(12)
        position: new _cannon.default.Vec3(position.x, position.y, position.z),
        shape: new _cannon.default.Sphere(size.x),
        material: mat // DYNAMIC: 1
        // fixedRotation: true
        // linearDamping: 0.1,
        // angularDamping: 0.5

      });
    }
  }, {
    key: "makeFloor",
    value: function makeFloor(size, position, rotation) {
      var mat = new _cannon.default.Material(); // ground planes seem to be infinite in size...
      // var groundShape = new CANNON.Plane()

      var groundShape = new _cannon.default.Box(new _cannon.default.Vec3(1000, 1000, 1));
      var groundBody = new _cannon.default.Body({
        mass: 0,
        // mass == 0 makes the body static
        material: mat,
        shape: groundShape
      });
      groundBody.quaternion.setFromAxisAngle(new _cannon.default.Vec3(1, 0, 0), -Math.PI / 2);
      return groundBody;
    }
  }]);

  return CannonHelper;
}();

exports.CannonHelper = CannonHelper;
},{"cannon":"xZVR"}],"36RA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vec3 = Vec3;
exports.Quat = Quat;
exports.Mat33 = Mat33;
exports.Shape = Shape;
exports.Box = Box;
exports.Sphere = Sphere;
exports.Cylinder = Cylinder;
exports.Plane = Plane;
exports.Particle = Particle;
exports.ShapeConfig = ShapeConfig;
exports.LimitMotor = LimitMotor;
exports.HingeJoint = HingeJoint;
exports.BallAndSocketJoint = BallAndSocketJoint;
exports.DistanceJoint = DistanceJoint;
exports.PrismaticJoint = PrismaticJoint;
exports.SliderJoint = SliderJoint;
exports.WheelJoint = WheelJoint;
exports.JointConfig = JointConfig;
exports.RigidBody = RigidBody;
exports.World = World;
exports.printError = printError;
exports.InfoDisplay = InfoDisplay;
exports.AABB_PROX = exports.JOINT_PRISMATIC = exports.JOINT_SLIDER = exports.JOINT_WHEEL = exports.JOINT_HINGE = exports.JOINT_BALL_AND_SOCKET = exports.JOINT_DISTANCE = exports.JOINT_NULL = exports.SHAPE_TETRA = exports.SHAPE_PARTICLE = exports.SHAPE_PLANE = exports.SHAPE_CYLINDER = exports.SHAPE_BOX = exports.SHAPE_SPHERE = exports.SHAPE_NULL = exports.BODY_GHOST = exports.BODY_KINEMATIC = exports.BODY_STATIC = exports.BODY_DYNAMIC = exports.BODY_NULL = exports.BR_BOUNDING_VOLUME_TREE = exports.BR_SWEEP_AND_PRUNE = exports.BR_BRUTE_FORCE = exports.BR_NULL = exports.REVISION = exports.Math = void 0;

// Polyfills
if (Number.EPSILON === undefined) {
  Number.EPSILON = Math.pow(2, -52);
} //


if (Math.sign === undefined) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
  Math.sign = function (x) {
    return x < 0 ? -1 : x > 0 ? 1 : +x;
  };
}

if (Function.prototype.name === undefined) {
  // Missing in IE9-11.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  Object.defineProperty(Function.prototype, 'name', {
    get: function () {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
    }
  });
}

if (Object.assign === undefined) {
  // Missing in IE.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  (function () {
    Object.assign = function (target) {
      'use strict';

      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];

        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }

      return output;
    };
  })();
}
/*
 * A list of constants built-in for
 * the physics engine.
 */


var REVISION = '1.0.9'; // BroadPhase

exports.REVISION = REVISION;
var BR_NULL = 0;
exports.BR_NULL = BR_NULL;
var BR_BRUTE_FORCE = 1;
exports.BR_BRUTE_FORCE = BR_BRUTE_FORCE;
var BR_SWEEP_AND_PRUNE = 2;
exports.BR_SWEEP_AND_PRUNE = BR_SWEEP_AND_PRUNE;
var BR_BOUNDING_VOLUME_TREE = 3; // Body type

exports.BR_BOUNDING_VOLUME_TREE = BR_BOUNDING_VOLUME_TREE;
var BODY_NULL = 0;
exports.BODY_NULL = BODY_NULL;
var BODY_DYNAMIC = 1;
exports.BODY_DYNAMIC = BODY_DYNAMIC;
var BODY_STATIC = 2;
exports.BODY_STATIC = BODY_STATIC;
var BODY_KINEMATIC = 3;
exports.BODY_KINEMATIC = BODY_KINEMATIC;
var BODY_GHOST = 4; // Shape type

exports.BODY_GHOST = BODY_GHOST;
var SHAPE_NULL = 0;
exports.SHAPE_NULL = SHAPE_NULL;
var SHAPE_SPHERE = 1;
exports.SHAPE_SPHERE = SHAPE_SPHERE;
var SHAPE_BOX = 2;
exports.SHAPE_BOX = SHAPE_BOX;
var SHAPE_CYLINDER = 3;
exports.SHAPE_CYLINDER = SHAPE_CYLINDER;
var SHAPE_PLANE = 4;
exports.SHAPE_PLANE = SHAPE_PLANE;
var SHAPE_PARTICLE = 5;
exports.SHAPE_PARTICLE = SHAPE_PARTICLE;
var SHAPE_TETRA = 6; // Joint type

exports.SHAPE_TETRA = SHAPE_TETRA;
var JOINT_NULL = 0;
exports.JOINT_NULL = JOINT_NULL;
var JOINT_DISTANCE = 1;
exports.JOINT_DISTANCE = JOINT_DISTANCE;
var JOINT_BALL_AND_SOCKET = 2;
exports.JOINT_BALL_AND_SOCKET = JOINT_BALL_AND_SOCKET;
var JOINT_HINGE = 3;
exports.JOINT_HINGE = JOINT_HINGE;
var JOINT_WHEEL = 4;
exports.JOINT_WHEEL = JOINT_WHEEL;
var JOINT_SLIDER = 5;
exports.JOINT_SLIDER = JOINT_SLIDER;
var JOINT_PRISMATIC = 6; // AABB aproximation

exports.JOINT_PRISMATIC = JOINT_PRISMATIC;
var AABB_PROX = 0.005;
exports.AABB_PROX = AABB_PROX;
var _Math = {
  sqrt: Math.sqrt,
  abs: Math.abs,
  floor: Math.floor,
  cos: Math.cos,
  sin: Math.sin,
  acos: Math.acos,
  asin: Math.asin,
  atan2: Math.atan2,
  round: Math.round,
  pow: Math.pow,
  max: Math.max,
  min: Math.min,
  random: Math.random,
  degtorad: 0.0174532925199432957,
  radtodeg: 57.295779513082320876,
  PI: 3.141592653589793,
  TwoPI: 6.283185307179586,
  PI90: 1.570796326794896,
  PI270: 4.712388980384689,
  INF: Infinity,
  EPZ: 0.00001,
  EPZ2: 0.000001,
  lerp: function (x, y, t) {
    return (1 - t) * x + t * y;
  },
  randInt: function (low, high) {
    return low + _Math.floor(_Math.random() * (high - low + 1));
  },
  rand: function (low, high) {
    return low + _Math.random() * (high - low);
  },
  generateUUID: function () {
    // http://www.broofa.com/Tools/Math.uuid.htm
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = new Array(36);
    var rnd = 0,
        r;
    return function generateUUID() {
      for (var i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
          uuid[i] = '-';
        } else if (i === 14) {
          uuid[i] = '4';
        } else {
          if (rnd <= 0x02) rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
          r = rnd & 0xf;
          rnd = rnd >> 4;
          uuid[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
        }
      }

      return uuid.join('');
    };
  }(),
  int: function (x) {
    return _Math.floor(x);
  },
  fix: function (x, n) {
    return x.toFixed(n || 3, 10);
  },
  clamp: function (value, min, max) {
    return _Math.max(min, _Math.min(max, value));
  },
  //clamp: function ( x, a, b ) { return ( x < a ) ? a : ( ( x > b ) ? b : x ); },
  distance: function (p1, p2) {
    var xd = p2[0] - p1[0];
    var yd = p2[1] - p1[1];
    var zd = p2[2] - p1[2];
    return _Math.sqrt(xd * xd + yd * yd + zd * zd);
  },

  /*unwrapDegrees: function ( r ) {
        r = r % 360;
      if (r > 180) r -= 360;
      if (r < -180) r += 360;
      return r;
    },
    unwrapRadian: function( r ){
        r = r % _Math.TwoPI;
      if (r > _Math.PI) r -= _Math.TwoPI;
      if (r < -_Math.PI) r += _Math.TwoPI;
      return r;
    },*/
  acosClamp: function (cos) {
    if (cos > 1) return 0;else if (cos < -1) return _Math.PI;else return _Math.acos(cos);
  },
  distanceVector: function (v1, v2) {
    var xd = v1.x - v2.x;
    var yd = v1.y - v2.y;
    var zd = v1.z - v2.z;
    return xd * xd + yd * yd + zd * zd;
  },
  dotVectors: function (a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }
};
exports.Math = _Math;

function printError(clazz, msg) {
  //.error("[OIMO] " + clazz + ": " + msg);
} // A performance evaluator


function InfoDisplay(world) {
  this.parent = world;
  this.infos = new Float32Array(13);
  this.f = [0, 0, 0];
  this.times = [0, 0, 0, 0];
  this.broadPhase = this.parent.broadPhaseType;
  this.version = REVISION;
  this.fps = 0;
  this.tt = 0;
  this.broadPhaseTime = 0;
  this.narrowPhaseTime = 0;
  this.solvingTime = 0;
  this.totalTime = 0;
  this.updateTime = 0;
  this.MaxBroadPhaseTime = 0;
  this.MaxNarrowPhaseTime = 0;
  this.MaxSolvingTime = 0;
  this.MaxTotalTime = 0;
  this.MaxUpdateTime = 0;
}

Object.assign(InfoDisplay.prototype, {
  setTime: function (n) {
    this.times[n || 0] = performance.now();
  },
  resetMax: function () {
    this.MaxBroadPhaseTime = 0;
    this.MaxNarrowPhaseTime = 0;
    this.MaxSolvingTime = 0;
    this.MaxTotalTime = 0;
    this.MaxUpdateTime = 0;
  },
  calcBroadPhase: function () {
    this.setTime(2);
    this.broadPhaseTime = this.times[2] - this.times[1];
  },
  calcNarrowPhase: function () {
    this.setTime(3);
    this.narrowPhaseTime = this.times[3] - this.times[2];
  },
  calcEnd: function () {
    this.setTime(2);
    this.solvingTime = this.times[2] - this.times[1];
    this.totalTime = this.times[2] - this.times[0];
    this.updateTime = this.totalTime - (this.broadPhaseTime + this.narrowPhaseTime + this.solvingTime);
    if (this.tt === 100) this.resetMax();

    if (this.tt > 100) {
      if (this.broadPhaseTime > this.MaxBroadPhaseTime) this.MaxBroadPhaseTime = this.broadPhaseTime;
      if (this.narrowPhaseTime > this.MaxNarrowPhaseTime) this.MaxNarrowPhaseTime = this.narrowPhaseTime;
      if (this.solvingTime > this.MaxSolvingTime) this.MaxSolvingTime = this.solvingTime;
      if (this.totalTime > this.MaxTotalTime) this.MaxTotalTime = this.totalTime;
      if (this.updateTime > this.MaxUpdateTime) this.MaxUpdateTime = this.updateTime;
    }

    this.upfps();
    this.tt++;
    if (this.tt > 500) this.tt = 0;
  },
  upfps: function () {
    this.f[1] = Date.now();

    if (this.f[1] - 1000 > this.f[0]) {
      this.f[0] = this.f[1];
      this.fps = this.f[2];
      this.f[2] = 0;
    }

    this.f[2]++;
  },
  show: function () {
    var info = ["Oimo.js " + this.version + "<br>", this.broadPhase + "<br><br>", "FPS: " + this.fps + " fps<br><br>", "rigidbody " + this.parent.numRigidBodies + "<br>", "contact &nbsp;&nbsp;" + this.parent.numContacts + "<br>", "ct-point &nbsp;" + this.parent.numContactPoints + "<br>", "paircheck " + this.parent.broadPhase.numPairChecks + "<br>", "island &nbsp;&nbsp;&nbsp;" + this.parent.numIslands + "<br><br>", "Time in milliseconds<br><br>", "broadphase &nbsp;" + _Math.fix(this.broadPhaseTime) + " | " + _Math.fix(this.MaxBroadPhaseTime) + "<br>", "narrowphase " + _Math.fix(this.narrowPhaseTime) + " | " + _Math.fix(this.MaxNarrowPhaseTime) + "<br>", "solving &nbsp;&nbsp;&nbsp;&nbsp;" + _Math.fix(this.solvingTime) + " | " + _Math.fix(this.MaxSolvingTime) + "<br>", "total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + _Math.fix(this.totalTime) + " | " + _Math.fix(this.MaxTotalTime) + "<br>", "updating &nbsp;&nbsp;&nbsp;" + _Math.fix(this.updateTime) + " | " + _Math.fix(this.MaxUpdateTime) + "<br>"].join("\n");
    return info;
  },
  toArray: function () {
    this.infos[0] = this.parent.broadPhase.types;
    this.infos[1] = this.parent.numRigidBodies;
    this.infos[2] = this.parent.numContacts;
    this.infos[3] = this.parent.broadPhase.numPairChecks;
    this.infos[4] = this.parent.numContactPoints;
    this.infos[5] = this.parent.numIslands;
    this.infos[6] = this.broadPhaseTime;
    this.infos[7] = this.narrowPhaseTime;
    this.infos[8] = this.solvingTime;
    this.infos[9] = this.updateTime;
    this.infos[10] = this.totalTime;
    this.infos[11] = this.fps;
    return this.infos;
  }
});

function Vec3(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Object.assign(Vec3.prototype, {
  Vec3: true,
  set: function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  },
  add: function (a, b) {
    if (b !== undefined) return this.addVectors(a, b);
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    return this;
  },
  addVectors: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  },
  addEqual: function (v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  },
  sub: function (a, b) {
    if (b !== undefined) return this.subVectors(a, b);
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    return this;
  },
  subVectors: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  },
  subEqual: function (v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  },
  scale: function (v, s) {
    this.x = v.x * s;
    this.y = v.y * s;
    this.z = v.z * s;
    return this;
  },
  scaleEqual: function (s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  },
  multiply: function (v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  },
  multiplyScalar: function (s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  },

  /*scaleV: function( v ){
       this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
   },
   scaleVectorEqual: function( v ){
       this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
   },*/
  addScaledVector: function (v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  },
  subScaledVector: function (v, s) {
    this.x -= v.x * s;
    this.y -= v.y * s;
    this.z -= v.z * s;
    return this;
  },

  /*addTime: function ( v, t ) {
       this.x += v.x * t;
      this.y += v.y * t;
      this.z += v.z * t;
      return this;
   },
  
  addScale: function ( v, s ) {
       this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      return this;
   },
   subScale: function ( v, s ) {
       this.x -= v.x * s;
      this.y -= v.y * s;
      this.z -= v.z * s;
      return this;
   },*/
  cross: function (a, b) {
    if (b !== undefined) return this.crossVectors(a, b);
    var x = this.x,
        y = this.y,
        z = this.z;
    this.x = y * a.z - z * a.y;
    this.y = z * a.x - x * a.z;
    this.z = x * a.y - y * a.x;
    return this;
  },
  crossVectors: function (a, b) {
    var ax = a.x,
        ay = a.y,
        az = a.z;
    var bx = b.x,
        by = b.y,
        bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  },
  tangent: function (a) {
    var ax = a.x,
        ay = a.y,
        az = a.z;
    this.x = ay * ax - az * az;
    this.y = -az * ay - ax * ax;
    this.z = ax * az + ay * ay;
    return this;
  },
  invert: function (v) {
    this.x = -v.x;
    this.y = -v.y;
    this.z = -v.z;
    return this;
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  },
  dot: function (v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  },
  addition: function () {
    return this.x + this.y + this.z;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  length: function () {
    return _Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  },
  copy: function (v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  },

  /*mul: function( b, a, m ){
       return this.mulMat( m, a ).add( b );
   },
   mulMat: function( m, a ){
       var e = m.elements;
      var x = a.x, y = a.y, z = a.z;
       this.x = e[ 0 ] * x + e[ 1 ] * y + e[ 2 ] * z;
      this.y = e[ 3 ] * x + e[ 4 ] * y + e[ 5 ] * z;
      this.z = e[ 6 ] * x + e[ 7 ] * y + e[ 8 ] * z;
      return this;
   },*/
  applyMatrix3: function (m, transpose) {
    //if( transpose ) m = m.clone().transpose();
    var x = this.x,
        y = this.y,
        z = this.z;
    var e = m.elements;

    if (transpose) {
      this.x = e[0] * x + e[1] * y + e[2] * z;
      this.y = e[3] * x + e[4] * y + e[5] * z;
      this.z = e[6] * x + e[7] * y + e[8] * z;
    } else {
      this.x = e[0] * x + e[3] * y + e[6] * z;
      this.y = e[1] * x + e[4] * y + e[7] * z;
      this.z = e[2] * x + e[5] * y + e[8] * z;
    }

    return this;
  },
  applyQuaternion: function (q) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var qx = q.x;
    var qy = q.y;
    var qz = q.z;
    var qw = q.w; // calculate quat * vector

    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
  },
  testZero: function () {
    if (this.x !== 0 || this.y !== 0 || this.z !== 0) return true;else return false;
  },
  testDiff: function (v) {
    return this.equals(v) ? false : true;
  },
  equals: function (v) {
    return v.x === this.x && v.y === this.y && v.z === this.z;
  },
  clone: function () {
    return new this.constructor(this.x, this.y, this.z);
  },
  toString: function () {
    return "Vec3[" + this.x.toFixed(4) + ", " + this.y.toFixed(4) + ", " + this.z.toFixed(4) + "]";
  },
  multiplyScalar: function (scalar) {
    if (isFinite(scalar)) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
    } else {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    }

    return this;
  },
  divideScalar: function (scalar) {
    return this.multiplyScalar(1 / scalar);
  },
  normalize: function () {
    return this.divideScalar(this.length());
  },
  toArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
  },
  fromArray: function (array, offset) {
    if (offset === undefined) offset = 0;
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
});

function Quat(x, y, z, w) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
  this.w = w !== undefined ? w : 1;
}

Object.assign(Quat.prototype, {
  Quat: true,
  set: function (x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  },
  addTime: function (v, t) {
    var ax = v.x,
        ay = v.y,
        az = v.z;
    var qw = this.w,
        qx = this.x,
        qy = this.y,
        qz = this.z;
    t *= 0.5;
    this.x += t * (ax * qw + ay * qz - az * qy);
    this.y += t * (ay * qw + az * qx - ax * qz);
    this.z += t * (az * qw + ax * qy - ay * qx);
    this.w += t * (-ax * qx - ay * qy - az * qz);
    this.normalize();
    return this;
  },

  /*mul: function( q1, q2 ){
       var ax = q1.x, ay = q1.y, az = q1.z, as = q1.w,
      bx = q2.x, by = q2.y, bz = q2.z, bs = q2.w;
      this.x = ax * bs + as * bx + ay * bz - az * by;
      this.y = ay * bs + as * by + az * bx - ax * bz;
      this.z = az * bs + as * bz + ax * by - ay * bx;
      this.w = as * bs - ax * bx - ay * by - az * bz;
      return this;
   },*/
  multiply: function (q, p) {
    if (p !== undefined) return this.multiplyQuaternions(q, p);
    return this.multiplyQuaternions(this, q);
  },
  multiplyQuaternions: function (a, b) {
    var qax = a.x,
        qay = a.y,
        qaz = a.z,
        qaw = a.w;
    var qbx = b.x,
        qby = b.y,
        qbz = b.z,
        qbw = b.w;
    this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    return this;
  },
  setFromUnitVectors: function (v1, v2) {
    var vx = new Vec3();
    var r = v1.dot(v2) + 1;

    if (r < _Math.EPS2) {
      r = 0;
      if (_Math.abs(v1.x) > _Math.abs(v1.z)) vx.set(-v1.y, v1.x, 0);else vx.set(0, -v1.z, v1.y);
    } else {
      vx.crossVectors(v1, v2);
    }

    this._x = vx.x;
    this._y = vx.y;
    this._z = vx.z;
    this._w = r;
    return this.normalize();
  },
  arc: function (v1, v2) {
    var x1 = v1.x;
    var y1 = v1.y;
    var z1 = v1.z;
    var x2 = v2.x;
    var y2 = v2.y;
    var z2 = v2.z;
    var d = x1 * x2 + y1 * y2 + z1 * z2;

    if (d == -1) {
      x2 = y1 * x1 - z1 * z1;
      y2 = -z1 * y1 - x1 * x1;
      z2 = x1 * z1 + y1 * y1;
      d = 1 / _Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);
      this.w = 0;
      this.x = x2 * d;
      this.y = y2 * d;
      this.z = z2 * d;
      return this;
    }

    var cx = y1 * z2 - z1 * y2;
    var cy = z1 * x2 - x1 * z2;
    var cz = x1 * y2 - y1 * x2;
    this.w = _Math.sqrt((1 + d) * 0.5);
    d = 0.5 / this.w;
    this.x = cx * d;
    this.y = cy * d;
    this.z = cz * d;
    return this;
  },
  normalize: function () {
    var l = this.length();

    if (l === 0) {
      this.set(0, 0, 0, 1);
    } else {
      l = 1 / l;
      this.x = this.x * l;
      this.y = this.y * l;
      this.z = this.z * l;
      this.w = this.w * l;
    }

    return this;
  },
  inverse: function () {
    return this.conjugate().normalize();
  },
  invert: function (q) {
    this.x = q.x;
    this.y = q.y;
    this.z = q.z;
    this.w = q.w;
    this.conjugate().normalize();
    return this;
  },
  conjugate: function () {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this;
  },
  length: function () {
    return _Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  },
  copy: function (q) {
    this.x = q.x;
    this.y = q.y;
    this.z = q.z;
    this.w = q.w;
    return this;
  },
  clone: function (q) {
    return new Quat(this.x, this.y, this.z, this.w);
  },
  testDiff: function (q) {
    return this.equals(q) ? false : true;
  },
  equals: function (q) {
    return this.x === q.x && this.y === q.y && this.z === q.z && this.w === q.w;
  },
  toString: function () {
    return "Quat[" + this.x.toFixed(4) + ", (" + this.y.toFixed(4) + ", " + this.z.toFixed(4) + ", " + this.w.toFixed(4) + ")]";
  },
  setFromEuler: function (x, y, z) {
    var c1 = Math.cos(x * 0.5);
    var c2 = Math.cos(y * 0.5);
    var c3 = Math.cos(z * 0.5);
    var s1 = Math.sin(x * 0.5);
    var s2 = Math.sin(y * 0.5);
    var s3 = Math.sin(z * 0.5); // XYZ

    this.x = s1 * c2 * c3 + c1 * s2 * s3;
    this.y = c1 * s2 * c3 - s1 * c2 * s3;
    this.z = c1 * c2 * s3 + s1 * s2 * c3;
    this.w = c1 * c2 * c3 - s1 * s2 * s3;
    return this;
  },
  setFromAxis: function (axis, rad) {
    axis.normalize();
    rad = rad * 0.5;

    var s = _Math.sin(rad);

    this.x = s * axis.x;
    this.y = s * axis.y;
    this.z = s * axis.z;
    this.w = _Math.cos(rad);
    return this;
  },
  setFromMat33: function (m) {
    var trace = m[0] + m[4] + m[8];
    var s;

    if (trace > 0) {
      s = _Math.sqrt(trace + 1.0);
      this.w = 0.5 / s;
      s = 0.5 / s;
      this.x = (m[5] - m[7]) * s;
      this.y = (m[6] - m[2]) * s;
      this.z = (m[1] - m[3]) * s;
    } else {
      var out = [];
      var i = 0;
      if (m[4] > m[0]) i = 1;
      if (m[8] > m[i * 3 + i]) i = 2;
      var j = (i + 1) % 3;
      var k = (i + 2) % 3;
      s = _Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
      out[i] = 0.5 * fRoot;
      s = 0.5 / fRoot;
      this.w = (m[j * 3 + k] - m[k * 3 + j]) * s;
      out[j] = (m[j * 3 + i] + m[i * 3 + j]) * s;
      out[k] = (m[k * 3 + i] + m[i * 3 + k]) * s;
      this.x = out[1];
      this.y = out[2];
      this.z = out[3];
    }

    return this;
  },
  toArray: function (array, offset) {
    offset = offset || 0;
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
  },
  fromArray: function (array, offset) {
    offset = offset || 0;
    this.set(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
    return this;
  }
});

function Mat33(e00, e01, e02, e10, e11, e12, e20, e21, e22) {
  this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];

  if (arguments.length > 0) {
    //.error('OIMO.Mat33: the constructor no longer reads arguments. use .set() instead.');
  }
}

Object.assign(Mat33.prototype, {
  Mat33: true,
  set: function (e00, e01, e02, e10, e11, e12, e20, e21, e22) {
    var te = this.elements;
    te[0] = e00;
    te[1] = e01;
    te[2] = e02;
    te[3] = e10;
    te[4] = e11;
    te[5] = e12;
    te[6] = e20;
    te[7] = e21;
    te[8] = e22;
    return this;
  },
  add: function (a, b) {
    if (b !== undefined) return this.addMatrixs(a, b);
    var e = this.elements,
        te = a.elements;
    e[0] += te[0];
    e[1] += te[1];
    e[2] += te[2];
    e[3] += te[3];
    e[4] += te[4];
    e[5] += te[5];
    e[6] += te[6];
    e[7] += te[7];
    e[8] += te[8];
    return this;
  },
  addMatrixs: function (a, b) {
    var te = this.elements,
        tem1 = a.elements,
        tem2 = b.elements;
    te[0] = tem1[0] + tem2[0];
    te[1] = tem1[1] + tem2[1];
    te[2] = tem1[2] + tem2[2];
    te[3] = tem1[3] + tem2[3];
    te[4] = tem1[4] + tem2[4];
    te[5] = tem1[5] + tem2[5];
    te[6] = tem1[6] + tem2[6];
    te[7] = tem1[7] + tem2[7];
    te[8] = tem1[8] + tem2[8];
    return this;
  },
  addEqual: function (m) {
    var te = this.elements,
        tem = m.elements;
    te[0] += tem[0];
    te[1] += tem[1];
    te[2] += tem[2];
    te[3] += tem[3];
    te[4] += tem[4];
    te[5] += tem[5];
    te[6] += tem[6];
    te[7] += tem[7];
    te[8] += tem[8];
    return this;
  },
  sub: function (a, b) {
    if (b !== undefined) return this.subMatrixs(a, b);
    var e = this.elements,
        te = a.elements;
    e[0] -= te[0];
    e[1] -= te[1];
    e[2] -= te[2];
    e[3] -= te[3];
    e[4] -= te[4];
    e[5] -= te[5];
    e[6] -= te[6];
    e[7] -= te[7];
    e[8] -= te[8];
    return this;
  },
  subMatrixs: function (a, b) {
    var te = this.elements,
        tem1 = a.elements,
        tem2 = b.elements;
    te[0] = tem1[0] - tem2[0];
    te[1] = tem1[1] - tem2[1];
    te[2] = tem1[2] - tem2[2];
    te[3] = tem1[3] - tem2[3];
    te[4] = tem1[4] - tem2[4];
    te[5] = tem1[5] - tem2[5];
    te[6] = tem1[6] - tem2[6];
    te[7] = tem1[7] - tem2[7];
    te[8] = tem1[8] - tem2[8];
    return this;
  },
  subEqual: function (m) {
    var te = this.elements,
        tem = m.elements;
    te[0] -= tem[0];
    te[1] -= tem[1];
    te[2] -= tem[2];
    te[3] -= tem[3];
    te[4] -= tem[4];
    te[5] -= tem[5];
    te[6] -= tem[6];
    te[7] -= tem[7];
    te[8] -= tem[8];
    return this;
  },
  scale: function (m, s) {
    var te = this.elements,
        tm = m.elements;
    te[0] = tm[0] * s;
    te[1] = tm[1] * s;
    te[2] = tm[2] * s;
    te[3] = tm[3] * s;
    te[4] = tm[4] * s;
    te[5] = tm[5] * s;
    te[6] = tm[6] * s;
    te[7] = tm[7] * s;
    te[8] = tm[8] * s;
    return this;
  },
  scaleEqual: function (s) {
    // multiplyScalar
    var te = this.elements;
    te[0] *= s;
    te[1] *= s;
    te[2] *= s;
    te[3] *= s;
    te[4] *= s;
    te[5] *= s;
    te[6] *= s;
    te[7] *= s;
    te[8] *= s;
    return this;
  },
  multiplyMatrices: function (m1, m2, transpose) {
    if (transpose) m2 = m2.clone().transpose();
    var te = this.elements;
    var tm1 = m1.elements;
    var tm2 = m2.elements;
    var a0 = tm1[0],
        a3 = tm1[3],
        a6 = tm1[6];
    var a1 = tm1[1],
        a4 = tm1[4],
        a7 = tm1[7];
    var a2 = tm1[2],
        a5 = tm1[5],
        a8 = tm1[8];
    var b0 = tm2[0],
        b3 = tm2[3],
        b6 = tm2[6];
    var b1 = tm2[1],
        b4 = tm2[4],
        b7 = tm2[7];
    var b2 = tm2[2],
        b5 = tm2[5],
        b8 = tm2[8];
    te[0] = a0 * b0 + a1 * b3 + a2 * b6;
    te[1] = a0 * b1 + a1 * b4 + a2 * b7;
    te[2] = a0 * b2 + a1 * b5 + a2 * b8;
    te[3] = a3 * b0 + a4 * b3 + a5 * b6;
    te[4] = a3 * b1 + a4 * b4 + a5 * b7;
    te[5] = a3 * b2 + a4 * b5 + a5 * b8;
    te[6] = a6 * b0 + a7 * b3 + a8 * b6;
    te[7] = a6 * b1 + a7 * b4 + a8 * b7;
    te[8] = a6 * b2 + a7 * b5 + a8 * b8;
    return this;
  },

  /*mul: function ( m1, m2, transpose ) {
        if( transpose ) m2 = m2.clone().transpose();
        var te = this.elements;
      var tm1 = m1.elements;
      var tm2 = m2.elements;
      //var tmp;
        var a0 = tm1[0], a3 = tm1[3], a6 = tm1[6];
      var a1 = tm1[1], a4 = tm1[4], a7 = tm1[7];
      var a2 = tm1[2], a5 = tm1[5], a8 = tm1[8];
        var b0 = tm2[0], b3 = tm2[3], b6 = tm2[6];
      var b1 = tm2[1], b4 = tm2[4], b7 = tm2[7];
      var b2 = tm2[2], b5 = tm2[5], b8 = tm2[8];
        /*if( transpose ){
            tmp = b1; b1 = b3; b3 = tmp;
          tmp = b2; b2 = b6; b6 = tmp;
          tmp = b5; b5 = b7; b7 = tmp;
        }
        te[0] = a0*b0 + a1*b3 + a2*b6;
      te[1] = a0*b1 + a1*b4 + a2*b7;
      te[2] = a0*b2 + a1*b5 + a2*b8;
      te[3] = a3*b0 + a4*b3 + a5*b6;
      te[4] = a3*b1 + a4*b4 + a5*b7;
      te[5] = a3*b2 + a4*b5 + a5*b8;
      te[6] = a6*b0 + a7*b3 + a8*b6;
      te[7] = a6*b1 + a7*b4 + a8*b7;
      te[8] = a6*b2 + a7*b5 + a8*b8;
        return this;
    },*/
  transpose: function (m) {
    if (m !== undefined) {
      var a = m.elements;
      this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
      return this;
    }

    var te = this.elements;
    var a01 = te[1],
        a02 = te[2],
        a12 = te[5];
    te[1] = te[3];
    te[2] = te[6];
    te[3] = a01;
    te[5] = te[7];
    te[6] = a02;
    te[7] = a12;
    return this;
  },

  /*mulScale: function ( m, sx, sy, sz, Prepend ) {
        var prepend = Prepend || false;
      var te = this.elements, tm = m.elements;
      if(prepend){
          te[0] = sx*tm[0]; te[1] = sx*tm[1]; te[2] = sx*tm[2];
          te[3] = sy*tm[3]; te[4] = sy*tm[4]; te[5] = sy*tm[5];
          te[6] = sz*tm[6]; te[7] = sz*tm[7]; te[8] = sz*tm[8];
      }else{
          te[0] = tm[0]*sx; te[1] = tm[1]*sy; te[2] = tm[2]*sz;
          te[3] = tm[3]*sx; te[4] = tm[4]*sy; te[5] = tm[5]*sz;
          te[6] = tm[6]*sx; te[7] = tm[7]*sy; te[8] = tm[8]*sz;
      }
      return this;
    },
    transpose: function ( m ) {
        var te = this.elements, tm = m.elements;
      te[0] = tm[0]; te[1] = tm[3]; te[2] = tm[6];
      te[3] = tm[1]; te[4] = tm[4]; te[5] = tm[7];
      te[6] = tm[2]; te[7] = tm[5]; te[8] = tm[8];
      return this;
    },*/
  setQuat: function (q) {
    var te = this.elements;
    var x = q.x,
        y = q.y,
        z = q.z,
        w = q.w;
    var x2 = x + x,
        y2 = y + y,
        z2 = z + z;
    var xx = x * x2,
        xy = x * y2,
        xz = x * z2;
    var yy = y * y2,
        yz = y * z2,
        zz = z * z2;
    var wx = w * x2,
        wy = w * y2,
        wz = w * z2;
    te[0] = 1 - (yy + zz);
    te[1] = xy - wz;
    te[2] = xz + wy;
    te[3] = xy + wz;
    te[4] = 1 - (xx + zz);
    te[5] = yz - wx;
    te[6] = xz - wy;
    te[7] = yz + wx;
    te[8] = 1 - (xx + yy);
    return this;
  },
  invert: function (m) {
    var te = this.elements,
        tm = m.elements,
        a00 = tm[0],
        a10 = tm[3],
        a20 = tm[6],
        a01 = tm[1],
        a11 = tm[4],
        a21 = tm[7],
        a02 = tm[2],
        a12 = tm[5],
        a22 = tm[8],
        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,
        det = a00 * b01 + a01 * b11 + a02 * b21;

    if (det === 0) {
      //.log("can't invert matrix, determinant is 0");
      return this.identity();
    }

    det = 1.0 / det;
    te[0] = b01 * det;
    te[1] = (-a22 * a01 + a02 * a21) * det;
    te[2] = (a12 * a01 - a02 * a11) * det;
    te[3] = b11 * det;
    te[4] = (a22 * a00 - a02 * a20) * det;
    te[5] = (-a12 * a00 + a02 * a10) * det;
    te[6] = b21 * det;
    te[7] = (-a21 * a00 + a01 * a20) * det;
    te[8] = (a11 * a00 - a01 * a10) * det;
    return this;
  },
  addOffset: function (m, v) {
    var relX = v.x;
    var relY = v.y;
    var relZ = v.z;
    var te = this.elements;
    te[0] += m * (relY * relY + relZ * relZ);
    te[4] += m * (relX * relX + relZ * relZ);
    te[8] += m * (relX * relX + relY * relY);
    var xy = m * relX * relY;
    var yz = m * relY * relZ;
    var zx = m * relZ * relX;
    te[1] -= xy;
    te[3] -= xy;
    te[2] -= yz;
    te[6] -= yz;
    te[5] -= zx;
    te[7] -= zx;
    return this;
  },
  subOffset: function (m, v) {
    var relX = v.x;
    var relY = v.y;
    var relZ = v.z;
    var te = this.elements;
    te[0] -= m * (relY * relY + relZ * relZ);
    te[4] -= m * (relX * relX + relZ * relZ);
    te[8] -= m * (relX * relX + relY * relY);
    var xy = m * relX * relY;
    var yz = m * relY * relZ;
    var zx = m * relZ * relX;
    te[1] += xy;
    te[3] += xy;
    te[2] += yz;
    te[6] += yz;
    te[5] += zx;
    te[7] += zx;
    return this;
  },
  // OK 
  multiplyScalar: function (s) {
    var te = this.elements;
    te[0] *= s;
    te[3] *= s;
    te[6] *= s;
    te[1] *= s;
    te[4] *= s;
    te[7] *= s;
    te[2] *= s;
    te[5] *= s;
    te[8] *= s;
    return this;
  },
  identity: function () {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  },
  clone: function () {
    return new Mat33().fromArray(this.elements);
  },
  copy: function (m) {
    for (var i = 0; i < 9; i++) this.elements[i] = m.elements[i];

    return this;
  },
  determinant: function () {
    var te = this.elements;
    var a = te[0],
        b = te[1],
        c = te[2],
        d = te[3],
        e = te[4],
        f = te[5],
        g = te[6],
        h = te[7],
        i = te[8];
    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
  },
  fromArray: function (array, offset) {
    if (offset === undefined) offset = 0;

    for (var i = 0; i < 9; i++) {
      this.elements[i] = array[i + offset];
    }

    return this;
  },
  toArray: function (array, offset) {
    if (array === undefined) array = [];
    if (offset === undefined) offset = 0;
    var te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    return array;
  }
});
/**
 * An axis-aligned bounding box.
 *
 * @author saharan
 * @author lo-th
 */

function AABB(minX, maxX, minY, maxY, minZ, maxZ) {
  this.elements = new Float32Array(6);
  var te = this.elements;
  te[0] = minX || 0;
  te[1] = minY || 0;
  te[2] = minZ || 0;
  te[3] = maxX || 0;
  te[4] = maxY || 0;
  te[5] = maxZ || 0;
}

Object.assign(AABB.prototype, {
  AABB: true,
  set: function (minX, maxX, minY, maxY, minZ, maxZ) {
    var te = this.elements;
    te[0] = minX;
    te[3] = maxX;
    te[1] = minY;
    te[4] = maxY;
    te[2] = minZ;
    te[5] = maxZ;
    return this;
  },
  intersectTest: function (aabb) {
    var te = this.elements;
    var ue = aabb.elements;
    return te[0] > ue[3] || te[1] > ue[4] || te[2] > ue[5] || te[3] < ue[0] || te[4] < ue[1] || te[5] < ue[2] ? true : false;
  },
  intersectTestTwo: function (aabb) {
    var te = this.elements;
    var ue = aabb.elements;
    return te[0] < ue[0] || te[1] < ue[1] || te[2] < ue[2] || te[3] > ue[3] || te[4] > ue[4] || te[5] > ue[5] ? true : false;
  },
  clone: function () {
    return new this.constructor().fromArray(this.elements);
  },
  copy: function (aabb, margin) {
    var m = margin || 0;
    var me = aabb.elements;
    this.set(me[0] - m, me[3] + m, me[1] - m, me[4] + m, me[2] - m, me[5] + m);
    return this;
  },
  fromArray: function (array) {
    this.elements.set(array);
    return this;
  },
  // Set this AABB to the combined AABB of aabb1 and aabb2.
  combine: function (aabb1, aabb2) {
    var a = aabb1.elements;
    var b = aabb2.elements;
    var te = this.elements;
    te[0] = a[0] < b[0] ? a[0] : b[0];
    te[1] = a[1] < b[1] ? a[1] : b[1];
    te[2] = a[2] < b[2] ? a[2] : b[2];
    te[3] = a[3] > b[3] ? a[3] : b[3];
    te[4] = a[4] > b[4] ? a[4] : b[4];
    te[5] = a[5] > b[5] ? a[5] : b[5];
    return this;
  },
  // Get the surface area.
  surfaceArea: function () {
    var te = this.elements;
    var a = te[3] - te[0];
    var h = te[4] - te[1];
    var d = te[5] - te[2];
    return 2 * (a * (h + d) + h * d);
  },
  // Get whether the AABB intersects with the point or not.
  intersectsWithPoint: function (x, y, z) {
    var te = this.elements;
    return x >= te[0] && x <= te[3] && y >= te[1] && y <= te[4] && z >= te[2] && z <= te[5];
  },

  /**
   * Set the AABB from an array
   * of vertices. From THREE.
   * @author WestLangley
   * @author xprogram
   */
  setFromPoints: function (arr) {
    this.makeEmpty();

    for (var i = 0; i < arr.length; i++) {
      this.expandByPoint(arr[i]);
    }
  },
  makeEmpty: function () {
    this.set(-Infinity, -Infinity, -Infinity, Infinity, Infinity, Infinity);
  },
  expandByPoint: function (pt) {
    var te = this.elements;
    this.set(_Math.min(te[0], pt.x), _Math.min(te[1], pt.y), _Math.min(te[2], pt.z), _Math.max(te[3], pt.x), _Math.max(te[4], pt.y), _Math.max(te[5], pt.z));
  },
  expandByScalar: function (s) {
    var te = this.elements;
    te[0] += -s;
    te[1] += -s;
    te[2] += -s;
    te[3] += s;
    te[4] += s;
    te[5] += s;
  }
});
var count = 0;

function ShapeIdCount() {
  return count++;
}
/**
 * A shape is used to detect collisions of rigid bodies.
 *
 * @author saharan
 * @author lo-th
 */


function Shape(config) {
  this.type = SHAPE_NULL; // global identification of the shape should be unique to the shape.

  this.id = ShapeIdCount(); // previous shape in parent rigid body. Used for fast interations.

  this.prev = null; // next shape in parent rigid body. Used for fast interations.

  this.next = null; // proxy of the shape used for broad-phase collision detection.

  this.proxy = null; // parent rigid body of the shape.

  this.parent = null; // linked list of the contacts with the shape.

  this.contactLink = null; // number of the contacts with the shape.

  this.numContacts = 0; // center of gravity of the shape in world coordinate system.

  this.position = new Vec3(); // rotation matrix of the shape in world coordinate system.

  this.rotation = new Mat33(); // position of the shape in parent's coordinate system.

  this.relativePosition = new Vec3().copy(config.relativePosition); // rotation matrix of the shape in parent's coordinate system.

  this.relativeRotation = new Mat33().copy(config.relativeRotation); // axis-aligned bounding box of the shape.

  this.aabb = new AABB(); // density of the shape.

  this.density = config.density; // coefficient of friction of the shape.

  this.friction = config.friction; // coefficient of restitution of the shape.

  this.restitution = config.restitution; // bits of the collision groups to which the shape belongs.

  this.belongsTo = config.belongsTo; // bits of the collision groups with which the shape collides.

  this.collidesWith = config.collidesWith;
}

Object.assign(Shape.prototype, {
  Shape: true,
  // Calculate the mass information of the shape.
  calculateMassInfo: function (out) {
    printError("Shape", "Inheritance error.");
  },
  // Update the proxy of the shape.
  updateProxy: function () {
    printError("Shape", "Inheritance error.");
  }
});
/**
 * Box shape.
 * @author saharan
 * @author lo-th
 */

function Box(config, Width, Height, Depth) {
  Shape.call(this, config);
  this.type = SHAPE_BOX;
  this.width = Width;
  this.height = Height;
  this.depth = Depth;
  this.halfWidth = Width * 0.5;
  this.halfHeight = Height * 0.5;
  this.halfDepth = Depth * 0.5;
  this.dimentions = new Float32Array(18);
  this.elements = new Float32Array(24);
}

Box.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Box,
  calculateMassInfo: function (out) {
    var mass = this.width * this.height * this.depth * this.density;
    var divid = 1 / 12;
    out.mass = mass;
    out.inertia.set(mass * (this.height * this.height + this.depth * this.depth) * divid, 0, 0, 0, mass * (this.width * this.width + this.depth * this.depth) * divid, 0, 0, 0, mass * (this.width * this.width + this.height * this.height) * divid);
  },
  updateProxy: function () {
    var te = this.rotation.elements;
    var di = this.dimentions; // Width

    di[0] = te[0];
    di[1] = te[3];
    di[2] = te[6]; // Height

    di[3] = te[1];
    di[4] = te[4];
    di[5] = te[7]; // Depth

    di[6] = te[2];
    di[7] = te[5];
    di[8] = te[8]; // half Width

    di[9] = te[0] * this.halfWidth;
    di[10] = te[3] * this.halfWidth;
    di[11] = te[6] * this.halfWidth; // half Height

    di[12] = te[1] * this.halfHeight;
    di[13] = te[4] * this.halfHeight;
    di[14] = te[7] * this.halfHeight; // half Depth

    di[15] = te[2] * this.halfDepth;
    di[16] = te[5] * this.halfDepth;
    di[17] = te[8] * this.halfDepth;
    var wx = di[9];
    var wy = di[10];
    var wz = di[11];
    var hx = di[12];
    var hy = di[13];
    var hz = di[14];
    var dx = di[15];
    var dy = di[16];
    var dz = di[17];
    var x = this.position.x;
    var y = this.position.y;
    var z = this.position.z;
    var v = this.elements; //v1

    v[0] = x + wx + hx + dx;
    v[1] = y + wy + hy + dy;
    v[2] = z + wz + hz + dz; //v2

    v[3] = x + wx + hx - dx;
    v[4] = y + wy + hy - dy;
    v[5] = z + wz + hz - dz; //v3

    v[6] = x + wx - hx + dx;
    v[7] = y + wy - hy + dy;
    v[8] = z + wz - hz + dz; //v4

    v[9] = x + wx - hx - dx;
    v[10] = y + wy - hy - dy;
    v[11] = z + wz - hz - dz; //v5

    v[12] = x - wx + hx + dx;
    v[13] = y - wy + hy + dy;
    v[14] = z - wz + hz + dz; //v6

    v[15] = x - wx + hx - dx;
    v[16] = y - wy + hy - dy;
    v[17] = z - wz + hz - dz; //v7

    v[18] = x - wx - hx + dx;
    v[19] = y - wy - hy + dy;
    v[20] = z - wz - hz + dz; //v8

    v[21] = x - wx - hx - dx;
    v[22] = y - wy - hy - dy;
    v[23] = z - wz - hz - dz;
    var w = di[9] < 0 ? -di[9] : di[9];
    var h = di[10] < 0 ? -di[10] : di[10];
    var d = di[11] < 0 ? -di[11] : di[11];
    w = di[12] < 0 ? w - di[12] : w + di[12];
    h = di[13] < 0 ? h - di[13] : h + di[13];
    d = di[14] < 0 ? d - di[14] : d + di[14];
    w = di[15] < 0 ? w - di[15] : w + di[15];
    h = di[16] < 0 ? h - di[16] : h + di[16];
    d = di[17] < 0 ? d - di[17] : d + di[17];
    var p = AABB_PROX;
    this.aabb.set(this.position.x - w - p, this.position.x + w + p, this.position.y - h - p, this.position.y + h + p, this.position.z - d - p, this.position.z + d + p);
    if (this.proxy != null) this.proxy.update();
  }
});
/**
 * Sphere shape
 * @author saharan
 * @author lo-th
 */

function Sphere(config, radius) {
  Shape.call(this, config);
  this.type = SHAPE_SPHERE; // radius of the shape.

  this.radius = radius;
}

Sphere.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Sphere,
  volume: function () {
    return _Math.PI * this.radius * 1.333333;
  },
  calculateMassInfo: function (out) {
    var mass = this.volume() * this.radius * this.radius * this.density; //1.333 * _Math.PI * this.radius * this.radius * this.radius * this.density;

    out.mass = mass;
    var inertia = mass * this.radius * this.radius * 0.4;
    out.inertia.set(inertia, 0, 0, 0, inertia, 0, 0, 0, inertia);
  },
  updateProxy: function () {
    var p = AABB_PROX;
    this.aabb.set(this.position.x - this.radius - p, this.position.x + this.radius + p, this.position.y - this.radius - p, this.position.y + this.radius + p, this.position.z - this.radius - p, this.position.z + this.radius + p);
    if (this.proxy != null) this.proxy.update();
  }
});
/**
 * Cylinder shape
 * @author saharan
 * @author lo-th
 */

function Cylinder(config, radius, height) {
  Shape.call(this, config);
  this.type = SHAPE_CYLINDER;
  this.radius = radius;
  this.height = height;
  this.halfHeight = height * 0.5;
  this.normalDirection = new Vec3();
  this.halfDirection = new Vec3();
}

Cylinder.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Cylinder,
  calculateMassInfo: function (out) {
    var rsq = this.radius * this.radius;
    var mass = _Math.PI * rsq * this.height * this.density;
    var inertiaXZ = (0.25 * rsq + 0.0833 * this.height * this.height) * mass;
    var inertiaY = 0.5 * rsq;
    out.mass = mass;
    out.inertia.set(inertiaXZ, 0, 0, 0, inertiaY, 0, 0, 0, inertiaXZ);
  },
  updateProxy: function () {
    var te = this.rotation.elements;
    var len, wx, hy, dz, xx, yy, zz, w, h, d, p;
    xx = te[1] * te[1];
    yy = te[4] * te[4];
    zz = te[7] * te[7];
    this.normalDirection.set(te[1], te[4], te[7]);
    this.halfDirection.scale(this.normalDirection, this.halfHeight);
    wx = 1 - xx;
    len = _Math.sqrt(wx * wx + xx * yy + xx * zz);
    if (len > 0) len = this.radius / len;
    wx *= len;
    hy = 1 - yy;
    len = _Math.sqrt(yy * xx + hy * hy + yy * zz);
    if (len > 0) len = this.radius / len;
    hy *= len;
    dz = 1 - zz;
    len = _Math.sqrt(zz * xx + zz * yy + dz * dz);
    if (len > 0) len = this.radius / len;
    dz *= len;
    w = this.halfDirection.x < 0 ? -this.halfDirection.x : this.halfDirection.x;
    h = this.halfDirection.y < 0 ? -this.halfDirection.y : this.halfDirection.y;
    d = this.halfDirection.z < 0 ? -this.halfDirection.z : this.halfDirection.z;
    w = wx < 0 ? w - wx : w + wx;
    h = hy < 0 ? h - hy : h + hy;
    d = dz < 0 ? d - dz : d + dz;
    p = AABB_PROX;
    this.aabb.set(this.position.x - w - p, this.position.x + w + p, this.position.y - h - p, this.position.y + h + p, this.position.z - d - p, this.position.z + d + p);
    if (this.proxy != null) this.proxy.update();
  }
});
/**
 * Plane shape.
 * @author lo-th
 */

function Plane(config, normal) {
  Shape.call(this, config);
  this.type = SHAPE_PLANE; // radius of the shape.

  this.normal = new Vec3(0, 1, 0);
}

Plane.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Plane,
  volume: function () {
    return Number.MAX_VALUE;
  },
  calculateMassInfo: function (out) {
    out.mass = this.density; //0.0001;

    var inertia = 1;
    out.inertia.set(inertia, 0, 0, 0, inertia, 0, 0, 0, inertia);
  },
  updateProxy: function () {
    var p = AABB_PROX;
    var min = -_Math.INF;
    var max = _Math.INF;
    var n = this.normal; // The plane AABB is infinite, except if the normal is pointing along any axis

    this.aabb.set(n.x === -1 ? this.position.x - p : min, n.x === 1 ? this.position.x + p : max, n.y === -1 ? this.position.y - p : min, n.y === 1 ? this.position.y + p : max, n.z === -1 ? this.position.z - p : min, n.z === 1 ? this.position.z + p : max);
    if (this.proxy != null) this.proxy.update();
  }
});
/**
 * A Particule shape
 * @author lo-th
 */

function Particle(config, normal) {
  Shape.call(this, config);
  this.type = SHAPE_PARTICLE;
}

Particle.prototype = Object.assign(Object.create(Shape.prototype), {
  constructor: Particle,
  volume: function () {
    return Number.MAX_VALUE;
  },
  calculateMassInfo: function (out) {
    var inertia = 0;
    out.inertia.set(inertia, 0, 0, 0, inertia, 0, 0, 0, inertia);
  },
  updateProxy: function () {
    var p = 0; //AABB_PROX;

    this.aabb.set(this.position.x - p, this.position.x + p, this.position.y - p, this.position.y + p, this.position.z - p, this.position.z + p);
    if (this.proxy != null) this.proxy.update();
  }
});
/**
 * A shape configuration holds common configuration data for constructing a shape.
 * These configurations can be reused safely.
 *
 * @author saharan
 * @author lo-th
 */

function ShapeConfig() {
  // position of the shape in parent's coordinate system.
  this.relativePosition = new Vec3(); // rotation matrix of the shape in parent's coordinate system.

  this.relativeRotation = new Mat33(); // coefficient of friction of the shape.

  this.friction = 0.2; // 0.4
  // coefficient of restitution of the shape.

  this.restitution = 0.2; // density of the shape.

  this.density = 1; // bits of the collision groups to which the shape belongs.

  this.belongsTo = 1; // bits of the collision groups with which the shape collides.

  this.collidesWith = 0xffffffff;
}
/**
* An information of limit and motor.
*
* @author saharan
*/


function LimitMotor(axis, fixed) {
  fixed = fixed || false; // The axis of the constraint.

  this.axis = axis; // The current angle for rotational constraints.

  this.angle = 0; // The lower limit. Set lower > upper to disable

  this.lowerLimit = fixed ? 0 : 1; //  The upper limit. Set lower > upper to disable.

  this.upperLimit = 0; // The target motor speed.

  this.motorSpeed = 0; // The maximum motor force or torque. Set 0 to disable.

  this.maxMotorForce = 0; // The frequency of the spring. Set 0 to disable.

  this.frequency = 0; // The damping ratio of the spring. Set 0 for no damping, 1 for critical damping.

  this.dampingRatio = 0;
}

Object.assign(LimitMotor.prototype, {
  LimitMotor: true,
  // Set limit data into this constraint.
  setLimit: function (lowerLimit, upperLimit) {
    this.lowerLimit = lowerLimit;
    this.upperLimit = upperLimit;
  },
  // Set motor data into this constraint.
  setMotor: function (motorSpeed, maxMotorForce) {
    this.motorSpeed = motorSpeed;
    this.maxMotorForce = maxMotorForce;
  },
  // Set spring data into this constraint.
  setSpring: function (frequency, dampingRatio) {
    this.frequency = frequency;
    this.dampingRatio = dampingRatio;
  }
});
/**
 * The base class of all type of the constraints.
 *
 * @author saharan
 * @author lo-th
 */

function Constraint() {
  // parent world of the constraint.
  this.parent = null; // first body of the constraint.

  this.body1 = null; // second body of the constraint.

  this.body2 = null; // Internal

  this.addedToIsland = false;
}

Object.assign(Constraint.prototype, {
  Constraint: true,
  // Prepare for solving the constraint
  preSolve: function (timeStep, invTimeStep) {
    printError("Constraint", "Inheritance error.");
  },
  // Solve the constraint. This is usually called iteratively.
  solve: function () {
    printError("Constraint", "Inheritance error.");
  },
  // Do the post-processing.
  postSolve: function () {
    printError("Constraint", "Inheritance error.");
  }
});

function JointLink(joint) {
  // The previous joint link.
  this.prev = null; // The next joint link.

  this.next = null; // The other rigid body connected to the joint.

  this.body = null; // The joint of the link.

  this.joint = joint;
}
/**
 * Joints are used to constrain the motion between two rigid bodies.
 *
 * @author saharan
 * @author lo-th
 */


function Joint(config) {
  Constraint.call(this);
  this.scale = 1;
  this.invScale = 1; // joint name

  this.name = "";
  this.id = NaN; // The type of the joint.

  this.type = JOINT_NULL; //  The previous joint in the world.

  this.prev = null; // The next joint in the world.

  this.next = null;
  this.body1 = config.body1;
  this.body2 = config.body2; // anchor point on the first rigid body in local coordinate system.

  this.localAnchorPoint1 = new Vec3().copy(config.localAnchorPoint1); // anchor point on the second rigid body in local coordinate system.

  this.localAnchorPoint2 = new Vec3().copy(config.localAnchorPoint2); // anchor point on the first rigid body in world coordinate system relative to the body's origin.

  this.relativeAnchorPoint1 = new Vec3(); // anchor point on the second rigid body in world coordinate system relative to the body's origin.

  this.relativeAnchorPoint2 = new Vec3(); //  anchor point on the first rigid body in world coordinate system.

  this.anchorPoint1 = new Vec3(); // anchor point on the second rigid body in world coordinate system.

  this.anchorPoint2 = new Vec3(); // Whether allow collision between connected rigid bodies or not.

  this.allowCollision = config.allowCollision;
  this.b1Link = new JointLink(this);
  this.b2Link = new JointLink(this);
}

Joint.prototype = Object.assign(Object.create(Constraint.prototype), {
  constructor: Joint,
  setId: function (n) {
    this.id = i;
  },
  setParent: function (world) {
    this.parent = world;
    this.scale = this.parent.scale;
    this.invScale = this.parent.invScale;
    this.id = this.parent.numJoints;
    if (!this.name) this.name = 'J' + this.id;
  },
  // Update all the anchor points.
  updateAnchorPoints: function () {
    this.relativeAnchorPoint1.copy(this.localAnchorPoint1).applyMatrix3(this.body1.rotation, true);
    this.relativeAnchorPoint2.copy(this.localAnchorPoint2).applyMatrix3(this.body2.rotation, true);
    this.anchorPoint1.add(this.relativeAnchorPoint1, this.body1.position);
    this.anchorPoint2.add(this.relativeAnchorPoint2, this.body2.position);
  },
  // Attach the joint from the bodies.
  attach: function (isX) {
    this.b1Link.body = this.body2;
    this.b2Link.body = this.body1;

    if (isX) {
      this.body1.jointLink.push(this.b1Link);
      this.body2.jointLink.push(this.b2Link);
    } else {
      if (this.body1.jointLink != null) (this.b1Link.next = this.body1.jointLink).prev = this.b1Link;else this.b1Link.next = null;
      this.body1.jointLink = this.b1Link;
      this.body1.numJoints++;
      if (this.body2.jointLink != null) (this.b2Link.next = this.body2.jointLink).prev = this.b2Link;else this.b2Link.next = null;
      this.body2.jointLink = this.b2Link;
      this.body2.numJoints++;
    }
  },
  // Detach the joint from the bodies.
  detach: function (isX) {
    if (isX) {
      this.body1.jointLink.splice(this.body1.jointLink.indexOf(this.b1Link), 1);
      this.body2.jointLink.splice(this.body2.jointLink.indexOf(this.b2Link), 1);
    } else {
      var prev = this.b1Link.prev;
      var next = this.b1Link.next;
      if (prev != null) prev.next = next;
      if (next != null) next.prev = prev;
      if (this.body1.jointLink == this.b1Link) this.body1.jointLink = next;
      this.b1Link.prev = null;
      this.b1Link.next = null;
      this.b1Link.body = null;
      this.body1.numJoints--;
      prev = this.b2Link.prev;
      next = this.b2Link.next;
      if (prev != null) prev.next = next;
      if (next != null) next.prev = prev;
      if (this.body2.jointLink == this.b2Link) this.body2.jointLink = next;
      this.b2Link.prev = null;
      this.b2Link.next = null;
      this.b2Link.body = null;
      this.body2.numJoints--;
    }

    this.b1Link.body = null;
    this.b2Link.body = null;
  },
  // Awake the bodies.
  awake: function () {
    this.body1.awake();
    this.body2.awake();
  },
  // calculation function
  preSolve: function (timeStep, invTimeStep) {},
  solve: function () {},
  postSolve: function () {},
  // Delete process
  remove: function () {
    this.dispose();
  },
  dispose: function () {
    this.parent.removeJoint(this);
  },
  // Three js add
  getPosition: function () {
    var p1 = new Vec3().scale(this.anchorPoint1, this.scale);
    var p2 = new Vec3().scale(this.anchorPoint2, this.scale);
    return [p1, p2];
  }
});
/**
* A linear constraint for all axes for various joints.
* @author saharan
*/

function LinearConstraint(joint) {
  this.m1 = NaN;
  this.m2 = NaN;
  this.ii1 = null;
  this.ii2 = null;
  this.dd = null;
  this.r1x = NaN;
  this.r1y = NaN;
  this.r1z = NaN;
  this.r2x = NaN;
  this.r2y = NaN;
  this.r2z = NaN;
  this.ax1x = NaN;
  this.ax1y = NaN;
  this.ax1z = NaN;
  this.ay1x = NaN;
  this.ay1y = NaN;
  this.ay1z = NaN;
  this.az1x = NaN;
  this.az1y = NaN;
  this.az1z = NaN;
  this.ax2x = NaN;
  this.ax2y = NaN;
  this.ax2z = NaN;
  this.ay2x = NaN;
  this.ay2y = NaN;
  this.ay2z = NaN;
  this.az2x = NaN;
  this.az2y = NaN;
  this.az2z = NaN;
  this.vel = NaN;
  this.velx = NaN;
  this.vely = NaN;
  this.velz = NaN;
  this.joint = joint;
  this.r1 = joint.relativeAnchorPoint1;
  this.r2 = joint.relativeAnchorPoint2;
  this.p1 = joint.anchorPoint1;
  this.p2 = joint.anchorPoint2;
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.l1 = this.b1.linearVelocity;
  this.l2 = this.b2.linearVelocity;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
  this.impx = 0;
  this.impy = 0;
  this.impz = 0;
}

Object.assign(LinearConstraint.prototype, {
  LinearConstraint: true,
  preSolve: function (timeStep, invTimeStep) {
    this.r1x = this.r1.x;
    this.r1y = this.r1.y;
    this.r1z = this.r1.z;
    this.r2x = this.r2.x;
    this.r2y = this.r2.y;
    this.r2z = this.r2.z;
    this.m1 = this.b1.inverseMass;
    this.m2 = this.b2.inverseMass;
    this.ii1 = this.i1.clone();
    this.ii2 = this.i2.clone();
    var ii1 = this.ii1.elements;
    var ii2 = this.ii2.elements;
    this.ax1x = this.r1z * ii1[1] + -this.r1y * ii1[2];
    this.ax1y = this.r1z * ii1[4] + -this.r1y * ii1[5];
    this.ax1z = this.r1z * ii1[7] + -this.r1y * ii1[8];
    this.ay1x = -this.r1z * ii1[0] + this.r1x * ii1[2];
    this.ay1y = -this.r1z * ii1[3] + this.r1x * ii1[5];
    this.ay1z = -this.r1z * ii1[6] + this.r1x * ii1[8];
    this.az1x = this.r1y * ii1[0] + -this.r1x * ii1[1];
    this.az1y = this.r1y * ii1[3] + -this.r1x * ii1[4];
    this.az1z = this.r1y * ii1[6] + -this.r1x * ii1[7];
    this.ax2x = this.r2z * ii2[1] + -this.r2y * ii2[2];
    this.ax2y = this.r2z * ii2[4] + -this.r2y * ii2[5];
    this.ax2z = this.r2z * ii2[7] + -this.r2y * ii2[8];
    this.ay2x = -this.r2z * ii2[0] + this.r2x * ii2[2];
    this.ay2y = -this.r2z * ii2[3] + this.r2x * ii2[5];
    this.ay2z = -this.r2z * ii2[6] + this.r2x * ii2[8];
    this.az2x = this.r2y * ii2[0] + -this.r2x * ii2[1];
    this.az2y = this.r2y * ii2[3] + -this.r2x * ii2[4];
    this.az2z = this.r2y * ii2[6] + -this.r2x * ii2[7]; // calculate point-to-point mass matrix
    // from impulse equation
    // 
    // M = ([/m] - [r^][/I][r^]) ^ -1
    // 
    // where
    // 
    // [/m] = |1/m, 0, 0|
    //        |0, 1/m, 0|
    //        |0, 0, 1/m|
    // 
    // [r^] = |0, -rz, ry|
    //        |rz, 0, -rx|
    //        |-ry, rx, 0|
    // 
    // [/I] = Inverted moment inertia

    var rxx = this.m1 + this.m2;
    var kk = new Mat33().set(rxx, 0, 0, 0, rxx, 0, 0, 0, rxx);
    var k = kk.elements;
    k[0] += ii1[4] * this.r1z * this.r1z - (ii1[7] + ii1[5]) * this.r1y * this.r1z + ii1[8] * this.r1y * this.r1y;
    k[1] += (ii1[6] * this.r1y + ii1[5] * this.r1x) * this.r1z - ii1[3] * this.r1z * this.r1z - ii1[8] * this.r1x * this.r1y;
    k[2] += (ii1[3] * this.r1y - ii1[4] * this.r1x) * this.r1z - ii1[6] * this.r1y * this.r1y + ii1[7] * this.r1x * this.r1y;
    k[3] += (ii1[2] * this.r1y + ii1[7] * this.r1x) * this.r1z - ii1[1] * this.r1z * this.r1z - ii1[8] * this.r1x * this.r1y;
    k[4] += ii1[0] * this.r1z * this.r1z - (ii1[6] + ii1[2]) * this.r1x * this.r1z + ii1[8] * this.r1x * this.r1x;
    k[5] += (ii1[1] * this.r1x - ii1[0] * this.r1y) * this.r1z - ii1[7] * this.r1x * this.r1x + ii1[6] * this.r1x * this.r1y;
    k[6] += (ii1[1] * this.r1y - ii1[4] * this.r1x) * this.r1z - ii1[2] * this.r1y * this.r1y + ii1[5] * this.r1x * this.r1y;
    k[7] += (ii1[3] * this.r1x - ii1[0] * this.r1y) * this.r1z - ii1[5] * this.r1x * this.r1x + ii1[2] * this.r1x * this.r1y;
    k[8] += ii1[0] * this.r1y * this.r1y - (ii1[3] + ii1[1]) * this.r1x * this.r1y + ii1[4] * this.r1x * this.r1x;
    k[0] += ii2[4] * this.r2z * this.r2z - (ii2[7] + ii2[5]) * this.r2y * this.r2z + ii2[8] * this.r2y * this.r2y;
    k[1] += (ii2[6] * this.r2y + ii2[5] * this.r2x) * this.r2z - ii2[3] * this.r2z * this.r2z - ii2[8] * this.r2x * this.r2y;
    k[2] += (ii2[3] * this.r2y - ii2[4] * this.r2x) * this.r2z - ii2[6] * this.r2y * this.r2y + ii2[7] * this.r2x * this.r2y;
    k[3] += (ii2[2] * this.r2y + ii2[7] * this.r2x) * this.r2z - ii2[1] * this.r2z * this.r2z - ii2[8] * this.r2x * this.r2y;
    k[4] += ii2[0] * this.r2z * this.r2z - (ii2[6] + ii2[2]) * this.r2x * this.r2z + ii2[8] * this.r2x * this.r2x;
    k[5] += (ii2[1] * this.r2x - ii2[0] * this.r2y) * this.r2z - ii2[7] * this.r2x * this.r2x + ii2[6] * this.r2x * this.r2y;
    k[6] += (ii2[1] * this.r2y - ii2[4] * this.r2x) * this.r2z - ii2[2] * this.r2y * this.r2y + ii2[5] * this.r2x * this.r2y;
    k[7] += (ii2[3] * this.r2x - ii2[0] * this.r2y) * this.r2z - ii2[5] * this.r2x * this.r2x + ii2[2] * this.r2x * this.r2y;
    k[8] += ii2[0] * this.r2y * this.r2y - (ii2[3] + ii2[1]) * this.r2x * this.r2y + ii2[4] * this.r2x * this.r2x;
    var inv = 1 / (k[0] * (k[4] * k[8] - k[7] * k[5]) + k[3] * (k[7] * k[2] - k[1] * k[8]) + k[6] * (k[1] * k[5] - k[4] * k[2]));
    this.dd = new Mat33().set(k[4] * k[8] - k[5] * k[7], k[2] * k[7] - k[1] * k[8], k[1] * k[5] - k[2] * k[4], k[5] * k[6] - k[3] * k[8], k[0] * k[8] - k[2] * k[6], k[2] * k[3] - k[0] * k[5], k[3] * k[7] - k[4] * k[6], k[1] * k[6] - k[0] * k[7], k[0] * k[4] - k[1] * k[3]).scaleEqual(inv);
    this.velx = this.p2.x - this.p1.x;
    this.vely = this.p2.y - this.p1.y;
    this.velz = this.p2.z - this.p1.z;

    var len = _Math.sqrt(this.velx * this.velx + this.vely * this.vely + this.velz * this.velz);

    if (len > 0.005) {
      len = (0.005 - len) / len * invTimeStep * 0.05;
      this.velx *= len;
      this.vely *= len;
      this.velz *= len;
    } else {
      this.velx = 0;
      this.vely = 0;
      this.velz = 0;
    }

    this.impx *= 0.95;
    this.impy *= 0.95;
    this.impz *= 0.95;
    this.l1.x += this.impx * this.m1;
    this.l1.y += this.impy * this.m1;
    this.l1.z += this.impz * this.m1;
    this.a1.x += this.impx * this.ax1x + this.impy * this.ay1x + this.impz * this.az1x;
    this.a1.y += this.impx * this.ax1y + this.impy * this.ay1y + this.impz * this.az1y;
    this.a1.z += this.impx * this.ax1z + this.impy * this.ay1z + this.impz * this.az1z;
    this.l2.x -= this.impx * this.m2;
    this.l2.y -= this.impy * this.m2;
    this.l2.z -= this.impz * this.m2;
    this.a2.x -= this.impx * this.ax2x + this.impy * this.ay2x + this.impz * this.az2x;
    this.a2.y -= this.impx * this.ax2y + this.impy * this.ay2y + this.impz * this.az2y;
    this.a2.z -= this.impx * this.ax2z + this.impy * this.ay2z + this.impz * this.az2z;
  },
  solve: function () {
    var d = this.dd.elements;
    var rvx = this.l2.x - this.l1.x + this.a2.y * this.r2z - this.a2.z * this.r2y - this.a1.y * this.r1z + this.a1.z * this.r1y - this.velx;
    var rvy = this.l2.y - this.l1.y + this.a2.z * this.r2x - this.a2.x * this.r2z - this.a1.z * this.r1x + this.a1.x * this.r1z - this.vely;
    var rvz = this.l2.z - this.l1.z + this.a2.x * this.r2y - this.a2.y * this.r2x - this.a1.x * this.r1y + this.a1.y * this.r1x - this.velz;
    var nimpx = rvx * d[0] + rvy * d[1] + rvz * d[2];
    var nimpy = rvx * d[3] + rvy * d[4] + rvz * d[5];
    var nimpz = rvx * d[6] + rvy * d[7] + rvz * d[8];
    this.impx += nimpx;
    this.impy += nimpy;
    this.impz += nimpz;
    this.l1.x += nimpx * this.m1;
    this.l1.y += nimpy * this.m1;
    this.l1.z += nimpz * this.m1;
    this.a1.x += nimpx * this.ax1x + nimpy * this.ay1x + nimpz * this.az1x;
    this.a1.y += nimpx * this.ax1y + nimpy * this.ay1y + nimpz * this.az1y;
    this.a1.z += nimpx * this.ax1z + nimpy * this.ay1z + nimpz * this.az1z;
    this.l2.x -= nimpx * this.m2;
    this.l2.y -= nimpy * this.m2;
    this.l2.z -= nimpz * this.m2;
    this.a2.x -= nimpx * this.ax2x + nimpy * this.ay2x + nimpz * this.az2x;
    this.a2.y -= nimpx * this.ax2y + nimpy * this.ay2y + nimpz * this.az2y;
    this.a2.z -= nimpx * this.ax2z + nimpy * this.ay2z + nimpz * this.az2z;
  }
});
/**
* A three-axis rotational constraint for various joints.
* @author saharan
*/

function Rotational3Constraint(joint, limitMotor1, limitMotor2, limitMotor3) {
  this.cfm1 = NaN;
  this.cfm2 = NaN;
  this.cfm3 = NaN;
  this.i1e00 = NaN;
  this.i1e01 = NaN;
  this.i1e02 = NaN;
  this.i1e10 = NaN;
  this.i1e11 = NaN;
  this.i1e12 = NaN;
  this.i1e20 = NaN;
  this.i1e21 = NaN;
  this.i1e22 = NaN;
  this.i2e00 = NaN;
  this.i2e01 = NaN;
  this.i2e02 = NaN;
  this.i2e10 = NaN;
  this.i2e11 = NaN;
  this.i2e12 = NaN;
  this.i2e20 = NaN;
  this.i2e21 = NaN;
  this.i2e22 = NaN;
  this.ax1 = NaN;
  this.ay1 = NaN;
  this.az1 = NaN;
  this.ax2 = NaN;
  this.ay2 = NaN;
  this.az2 = NaN;
  this.ax3 = NaN;
  this.ay3 = NaN;
  this.az3 = NaN;
  this.a1x1 = NaN; // jacoians

  this.a1y1 = NaN;
  this.a1z1 = NaN;
  this.a2x1 = NaN;
  this.a2y1 = NaN;
  this.a2z1 = NaN;
  this.a1x2 = NaN;
  this.a1y2 = NaN;
  this.a1z2 = NaN;
  this.a2x2 = NaN;
  this.a2y2 = NaN;
  this.a2z2 = NaN;
  this.a1x3 = NaN;
  this.a1y3 = NaN;
  this.a1z3 = NaN;
  this.a2x3 = NaN;
  this.a2y3 = NaN;
  this.a2z3 = NaN;
  this.lowerLimit1 = NaN;
  this.upperLimit1 = NaN;
  this.limitVelocity1 = NaN;
  this.limitState1 = 0; // -1: at lower, 0: locked, 1: at upper, 2: free

  this.enableMotor1 = false;
  this.motorSpeed1 = NaN;
  this.maxMotorForce1 = NaN;
  this.maxMotorImpulse1 = NaN;
  this.lowerLimit2 = NaN;
  this.upperLimit2 = NaN;
  this.limitVelocity2 = NaN;
  this.limitState2 = 0; // -1: at lower, 0: locked, 1: at upper, 2: free

  this.enableMotor2 = false;
  this.motorSpeed2 = NaN;
  this.maxMotorForce2 = NaN;
  this.maxMotorImpulse2 = NaN;
  this.lowerLimit3 = NaN;
  this.upperLimit3 = NaN;
  this.limitVelocity3 = NaN;
  this.limitState3 = 0; // -1: at lower, 0: locked, 1: at upper, 2: free

  this.enableMotor3 = false;
  this.motorSpeed3 = NaN;
  this.maxMotorForce3 = NaN;
  this.maxMotorImpulse3 = NaN;
  this.k00 = NaN; // K = J*M*JT

  this.k01 = NaN;
  this.k02 = NaN;
  this.k10 = NaN;
  this.k11 = NaN;
  this.k12 = NaN;
  this.k20 = NaN;
  this.k21 = NaN;
  this.k22 = NaN;
  this.kv00 = NaN; // diagonals without CFMs

  this.kv11 = NaN;
  this.kv22 = NaN;
  this.dv00 = NaN; // ...inverted

  this.dv11 = NaN;
  this.dv22 = NaN;
  this.d00 = NaN; // K^-1

  this.d01 = NaN;
  this.d02 = NaN;
  this.d10 = NaN;
  this.d11 = NaN;
  this.d12 = NaN;
  this.d20 = NaN;
  this.d21 = NaN;
  this.d22 = NaN;
  this.limitMotor1 = limitMotor1;
  this.limitMotor2 = limitMotor2;
  this.limitMotor3 = limitMotor3;
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
  this.limitImpulse1 = 0;
  this.motorImpulse1 = 0;
  this.limitImpulse2 = 0;
  this.motorImpulse2 = 0;
  this.limitImpulse3 = 0;
  this.motorImpulse3 = 0;
}

Object.assign(Rotational3Constraint.prototype, {
  Rotational3Constraint: true,
  preSolve: function (timeStep, invTimeStep) {
    this.ax1 = this.limitMotor1.axis.x;
    this.ay1 = this.limitMotor1.axis.y;
    this.az1 = this.limitMotor1.axis.z;
    this.ax2 = this.limitMotor2.axis.x;
    this.ay2 = this.limitMotor2.axis.y;
    this.az2 = this.limitMotor2.axis.z;
    this.ax3 = this.limitMotor3.axis.x;
    this.ay3 = this.limitMotor3.axis.y;
    this.az3 = this.limitMotor3.axis.z;
    this.lowerLimit1 = this.limitMotor1.lowerLimit;
    this.upperLimit1 = this.limitMotor1.upperLimit;
    this.motorSpeed1 = this.limitMotor1.motorSpeed;
    this.maxMotorForce1 = this.limitMotor1.maxMotorForce;
    this.enableMotor1 = this.maxMotorForce1 > 0;
    this.lowerLimit2 = this.limitMotor2.lowerLimit;
    this.upperLimit2 = this.limitMotor2.upperLimit;
    this.motorSpeed2 = this.limitMotor2.motorSpeed;
    this.maxMotorForce2 = this.limitMotor2.maxMotorForce;
    this.enableMotor2 = this.maxMotorForce2 > 0;
    this.lowerLimit3 = this.limitMotor3.lowerLimit;
    this.upperLimit3 = this.limitMotor3.upperLimit;
    this.motorSpeed3 = this.limitMotor3.motorSpeed;
    this.maxMotorForce3 = this.limitMotor3.maxMotorForce;
    this.enableMotor3 = this.maxMotorForce3 > 0;
    var ti1 = this.i1.elements;
    var ti2 = this.i2.elements;
    this.i1e00 = ti1[0];
    this.i1e01 = ti1[1];
    this.i1e02 = ti1[2];
    this.i1e10 = ti1[3];
    this.i1e11 = ti1[4];
    this.i1e12 = ti1[5];
    this.i1e20 = ti1[6];
    this.i1e21 = ti1[7];
    this.i1e22 = ti1[8];
    this.i2e00 = ti2[0];
    this.i2e01 = ti2[1];
    this.i2e02 = ti2[2];
    this.i2e10 = ti2[3];
    this.i2e11 = ti2[4];
    this.i2e12 = ti2[5];
    this.i2e20 = ti2[6];
    this.i2e21 = ti2[7];
    this.i2e22 = ti2[8];
    var frequency1 = this.limitMotor1.frequency;
    var frequency2 = this.limitMotor2.frequency;
    var frequency3 = this.limitMotor3.frequency;
    var enableSpring1 = frequency1 > 0;
    var enableSpring2 = frequency2 > 0;
    var enableSpring3 = frequency3 > 0;
    var enableLimit1 = this.lowerLimit1 <= this.upperLimit1;
    var enableLimit2 = this.lowerLimit2 <= this.upperLimit2;
    var enableLimit3 = this.lowerLimit3 <= this.upperLimit3;
    var angle1 = this.limitMotor1.angle;

    if (enableLimit1) {
      if (this.lowerLimit1 == this.upperLimit1) {
        if (this.limitState1 != 0) {
          this.limitState1 = 0;
          this.limitImpulse1 = 0;
        }

        this.limitVelocity1 = this.lowerLimit1 - angle1;
      } else if (angle1 < this.lowerLimit1) {
        if (this.limitState1 != -1) {
          this.limitState1 = -1;
          this.limitImpulse1 = 0;
        }

        this.limitVelocity1 = this.lowerLimit1 - angle1;
      } else if (angle1 > this.upperLimit1) {
        if (this.limitState1 != 1) {
          this.limitState1 = 1;
          this.limitImpulse1 = 0;
        }

        this.limitVelocity1 = this.upperLimit1 - angle1;
      } else {
        this.limitState1 = 2;
        this.limitImpulse1 = 0;
        this.limitVelocity1 = 0;
      }

      if (!enableSpring1) {
        if (this.limitVelocity1 > 0.02) this.limitVelocity1 -= 0.02;else if (this.limitVelocity1 < -0.02) this.limitVelocity1 += 0.02;else this.limitVelocity1 = 0;
      }
    } else {
      this.limitState1 = 2;
      this.limitImpulse1 = 0;
    }

    var angle2 = this.limitMotor2.angle;

    if (enableLimit2) {
      if (this.lowerLimit2 == this.upperLimit2) {
        if (this.limitState2 != 0) {
          this.limitState2 = 0;
          this.limitImpulse2 = 0;
        }

        this.limitVelocity2 = this.lowerLimit2 - angle2;
      } else if (angle2 < this.lowerLimit2) {
        if (this.limitState2 != -1) {
          this.limitState2 = -1;
          this.limitImpulse2 = 0;
        }

        this.limitVelocity2 = this.lowerLimit2 - angle2;
      } else if (angle2 > this.upperLimit2) {
        if (this.limitState2 != 1) {
          this.limitState2 = 1;
          this.limitImpulse2 = 0;
        }

        this.limitVelocity2 = this.upperLimit2 - angle2;
      } else {
        this.limitState2 = 2;
        this.limitImpulse2 = 0;
        this.limitVelocity2 = 0;
      }

      if (!enableSpring2) {
        if (this.limitVelocity2 > 0.02) this.limitVelocity2 -= 0.02;else if (this.limitVelocity2 < -0.02) this.limitVelocity2 += 0.02;else this.limitVelocity2 = 0;
      }
    } else {
      this.limitState2 = 2;
      this.limitImpulse2 = 0;
    }

    var angle3 = this.limitMotor3.angle;

    if (enableLimit3) {
      if (this.lowerLimit3 == this.upperLimit3) {
        if (this.limitState3 != 0) {
          this.limitState3 = 0;
          this.limitImpulse3 = 0;
        }

        this.limitVelocity3 = this.lowerLimit3 - angle3;
      } else if (angle3 < this.lowerLimit3) {
        if (this.limitState3 != -1) {
          this.limitState3 = -1;
          this.limitImpulse3 = 0;
        }

        this.limitVelocity3 = this.lowerLimit3 - angle3;
      } else if (angle3 > this.upperLimit3) {
        if (this.limitState3 != 1) {
          this.limitState3 = 1;
          this.limitImpulse3 = 0;
        }

        this.limitVelocity3 = this.upperLimit3 - angle3;
      } else {
        this.limitState3 = 2;
        this.limitImpulse3 = 0;
        this.limitVelocity3 = 0;
      }

      if (!enableSpring3) {
        if (this.limitVelocity3 > 0.02) this.limitVelocity3 -= 0.02;else if (this.limitVelocity3 < -0.02) this.limitVelocity3 += 0.02;else this.limitVelocity3 = 0;
      }
    } else {
      this.limitState3 = 2;
      this.limitImpulse3 = 0;
    }

    if (this.enableMotor1 && (this.limitState1 != 0 || enableSpring1)) {
      this.maxMotorImpulse1 = this.maxMotorForce1 * timeStep;
    } else {
      this.motorImpulse1 = 0;
      this.maxMotorImpulse1 = 0;
    }

    if (this.enableMotor2 && (this.limitState2 != 0 || enableSpring2)) {
      this.maxMotorImpulse2 = this.maxMotorForce2 * timeStep;
    } else {
      this.motorImpulse2 = 0;
      this.maxMotorImpulse2 = 0;
    }

    if (this.enableMotor3 && (this.limitState3 != 0 || enableSpring3)) {
      this.maxMotorImpulse3 = this.maxMotorForce3 * timeStep;
    } else {
      this.motorImpulse3 = 0;
      this.maxMotorImpulse3 = 0;
    } // build jacobians


    this.a1x1 = this.ax1 * this.i1e00 + this.ay1 * this.i1e01 + this.az1 * this.i1e02;
    this.a1y1 = this.ax1 * this.i1e10 + this.ay1 * this.i1e11 + this.az1 * this.i1e12;
    this.a1z1 = this.ax1 * this.i1e20 + this.ay1 * this.i1e21 + this.az1 * this.i1e22;
    this.a2x1 = this.ax1 * this.i2e00 + this.ay1 * this.i2e01 + this.az1 * this.i2e02;
    this.a2y1 = this.ax1 * this.i2e10 + this.ay1 * this.i2e11 + this.az1 * this.i2e12;
    this.a2z1 = this.ax1 * this.i2e20 + this.ay1 * this.i2e21 + this.az1 * this.i2e22;
    this.a1x2 = this.ax2 * this.i1e00 + this.ay2 * this.i1e01 + this.az2 * this.i1e02;
    this.a1y2 = this.ax2 * this.i1e10 + this.ay2 * this.i1e11 + this.az2 * this.i1e12;
    this.a1z2 = this.ax2 * this.i1e20 + this.ay2 * this.i1e21 + this.az2 * this.i1e22;
    this.a2x2 = this.ax2 * this.i2e00 + this.ay2 * this.i2e01 + this.az2 * this.i2e02;
    this.a2y2 = this.ax2 * this.i2e10 + this.ay2 * this.i2e11 + this.az2 * this.i2e12;
    this.a2z2 = this.ax2 * this.i2e20 + this.ay2 * this.i2e21 + this.az2 * this.i2e22;
    this.a1x3 = this.ax3 * this.i1e00 + this.ay3 * this.i1e01 + this.az3 * this.i1e02;
    this.a1y3 = this.ax3 * this.i1e10 + this.ay3 * this.i1e11 + this.az3 * this.i1e12;
    this.a1z3 = this.ax3 * this.i1e20 + this.ay3 * this.i1e21 + this.az3 * this.i1e22;
    this.a2x3 = this.ax3 * this.i2e00 + this.ay3 * this.i2e01 + this.az3 * this.i2e02;
    this.a2y3 = this.ax3 * this.i2e10 + this.ay3 * this.i2e11 + this.az3 * this.i2e12;
    this.a2z3 = this.ax3 * this.i2e20 + this.ay3 * this.i2e21 + this.az3 * this.i2e22; // build an impulse matrix

    this.k00 = this.ax1 * (this.a1x1 + this.a2x1) + this.ay1 * (this.a1y1 + this.a2y1) + this.az1 * (this.a1z1 + this.a2z1);
    this.k01 = this.ax1 * (this.a1x2 + this.a2x2) + this.ay1 * (this.a1y2 + this.a2y2) + this.az1 * (this.a1z2 + this.a2z2);
    this.k02 = this.ax1 * (this.a1x3 + this.a2x3) + this.ay1 * (this.a1y3 + this.a2y3) + this.az1 * (this.a1z3 + this.a2z3);
    this.k10 = this.ax2 * (this.a1x1 + this.a2x1) + this.ay2 * (this.a1y1 + this.a2y1) + this.az2 * (this.a1z1 + this.a2z1);
    this.k11 = this.ax2 * (this.a1x2 + this.a2x2) + this.ay2 * (this.a1y2 + this.a2y2) + this.az2 * (this.a1z2 + this.a2z2);
    this.k12 = this.ax2 * (this.a1x3 + this.a2x3) + this.ay2 * (this.a1y3 + this.a2y3) + this.az2 * (this.a1z3 + this.a2z3);
    this.k20 = this.ax3 * (this.a1x1 + this.a2x1) + this.ay3 * (this.a1y1 + this.a2y1) + this.az3 * (this.a1z1 + this.a2z1);
    this.k21 = this.ax3 * (this.a1x2 + this.a2x2) + this.ay3 * (this.a1y2 + this.a2y2) + this.az3 * (this.a1z2 + this.a2z2);
    this.k22 = this.ax3 * (this.a1x3 + this.a2x3) + this.ay3 * (this.a1y3 + this.a2y3) + this.az3 * (this.a1z3 + this.a2z3);
    this.kv00 = this.k00;
    this.kv11 = this.k11;
    this.kv22 = this.k22;
    this.dv00 = 1 / this.kv00;
    this.dv11 = 1 / this.kv11;
    this.dv22 = 1 / this.kv22;

    if (enableSpring1 && this.limitState1 != 2) {
      var omega = 6.2831853 * frequency1;
      var k = omega * omega * timeStep;
      var dmp = invTimeStep / (k + 2 * this.limitMotor1.dampingRatio * omega);
      this.cfm1 = this.kv00 * dmp;
      this.limitVelocity1 *= k * dmp;
    } else {
      this.cfm1 = 0;
      this.limitVelocity1 *= invTimeStep * 0.05;
    }

    if (enableSpring2 && this.limitState2 != 2) {
      omega = 6.2831853 * frequency2;
      k = omega * omega * timeStep;
      dmp = invTimeStep / (k + 2 * this.limitMotor2.dampingRatio * omega);
      this.cfm2 = this.kv11 * dmp;
      this.limitVelocity2 *= k * dmp;
    } else {
      this.cfm2 = 0;
      this.limitVelocity2 *= invTimeStep * 0.05;
    }

    if (enableSpring3 && this.limitState3 != 2) {
      omega = 6.2831853 * frequency3;
      k = omega * omega * timeStep;
      dmp = invTimeStep / (k + 2 * this.limitMotor3.dampingRatio * omega);
      this.cfm3 = this.kv22 * dmp;
      this.limitVelocity3 *= k * dmp;
    } else {
      this.cfm3 = 0;
      this.limitVelocity3 *= invTimeStep * 0.05;
    }

    this.k00 += this.cfm1;
    this.k11 += this.cfm2;
    this.k22 += this.cfm3;
    var inv = 1 / (this.k00 * (this.k11 * this.k22 - this.k21 * this.k12) + this.k10 * (this.k21 * this.k02 - this.k01 * this.k22) + this.k20 * (this.k01 * this.k12 - this.k11 * this.k02));
    this.d00 = (this.k11 * this.k22 - this.k12 * this.k21) * inv;
    this.d01 = (this.k02 * this.k21 - this.k01 * this.k22) * inv;
    this.d02 = (this.k01 * this.k12 - this.k02 * this.k11) * inv;
    this.d10 = (this.k12 * this.k20 - this.k10 * this.k22) * inv;
    this.d11 = (this.k00 * this.k22 - this.k02 * this.k20) * inv;
    this.d12 = (this.k02 * this.k10 - this.k00 * this.k12) * inv;
    this.d20 = (this.k10 * this.k21 - this.k11 * this.k20) * inv;
    this.d21 = (this.k01 * this.k20 - this.k00 * this.k21) * inv;
    this.d22 = (this.k00 * this.k11 - this.k01 * this.k10) * inv;
    this.limitImpulse1 *= 0.95;
    this.motorImpulse1 *= 0.95;
    this.limitImpulse2 *= 0.95;
    this.motorImpulse2 *= 0.95;
    this.limitImpulse3 *= 0.95;
    this.motorImpulse3 *= 0.95;
    var totalImpulse1 = this.limitImpulse1 + this.motorImpulse1;
    var totalImpulse2 = this.limitImpulse2 + this.motorImpulse2;
    var totalImpulse3 = this.limitImpulse3 + this.motorImpulse3;
    this.a1.x += totalImpulse1 * this.a1x1 + totalImpulse2 * this.a1x2 + totalImpulse3 * this.a1x3;
    this.a1.y += totalImpulse1 * this.a1y1 + totalImpulse2 * this.a1y2 + totalImpulse3 * this.a1y3;
    this.a1.z += totalImpulse1 * this.a1z1 + totalImpulse2 * this.a1z2 + totalImpulse3 * this.a1z3;
    this.a2.x -= totalImpulse1 * this.a2x1 + totalImpulse2 * this.a2x2 + totalImpulse3 * this.a2x3;
    this.a2.y -= totalImpulse1 * this.a2y1 + totalImpulse2 * this.a2y2 + totalImpulse3 * this.a2y3;
    this.a2.z -= totalImpulse1 * this.a2z1 + totalImpulse2 * this.a2z2 + totalImpulse3 * this.a2z3;
  },
  solve_: function () {
    var rvx = this.a2.x - this.a1.x;
    var rvy = this.a2.y - this.a1.y;
    var rvz = this.a2.z - this.a1.z;
    this.limitVelocity3 = 30;
    var rvn1 = rvx * this.ax1 + rvy * this.ay1 + rvz * this.az1 - this.limitVelocity1;
    var rvn2 = rvx * this.ax2 + rvy * this.ay2 + rvz * this.az2 - this.limitVelocity2;
    var rvn3 = rvx * this.ax3 + rvy * this.ay3 + rvz * this.az3 - this.limitVelocity3;
    var dLimitImpulse1 = rvn1 * this.d00 + rvn2 * this.d01 + rvn3 * this.d02;
    var dLimitImpulse2 = rvn1 * this.d10 + rvn2 * this.d11 + rvn3 * this.d12;
    var dLimitImpulse3 = rvn1 * this.d20 + rvn2 * this.d21 + rvn3 * this.d22;
    this.limitImpulse1 += dLimitImpulse1;
    this.limitImpulse2 += dLimitImpulse2;
    this.limitImpulse3 += dLimitImpulse3;
    this.a1.x += dLimitImpulse1 * this.a1x1 + dLimitImpulse2 * this.a1x2 + dLimitImpulse3 * this.a1x3;
    this.a1.y += dLimitImpulse1 * this.a1y1 + dLimitImpulse2 * this.a1y2 + dLimitImpulse3 * this.a1y3;
    this.a1.z += dLimitImpulse1 * this.a1z1 + dLimitImpulse2 * this.a1z2 + dLimitImpulse3 * this.a1z3;
    this.a2.x -= dLimitImpulse1 * this.a2x1 + dLimitImpulse2 * this.a2x2 + dLimitImpulse3 * this.a2x3;
    this.a2.y -= dLimitImpulse1 * this.a2y1 + dLimitImpulse2 * this.a2y2 + dLimitImpulse3 * this.a2y3;
    this.a2.z -= dLimitImpulse1 * this.a2z1 + dLimitImpulse2 * this.a2z2 + dLimitImpulse3 * this.a2z3;
  },
  solve: function () {
    var rvx = this.a2.x - this.a1.x;
    var rvy = this.a2.y - this.a1.y;
    var rvz = this.a2.z - this.a1.z;
    var rvn1 = rvx * this.ax1 + rvy * this.ay1 + rvz * this.az1;
    var rvn2 = rvx * this.ax2 + rvy * this.ay2 + rvz * this.az2;
    var rvn3 = rvx * this.ax3 + rvy * this.ay3 + rvz * this.az3;
    var oldMotorImpulse1 = this.motorImpulse1;
    var oldMotorImpulse2 = this.motorImpulse2;
    var oldMotorImpulse3 = this.motorImpulse3;
    var dMotorImpulse1 = 0;
    var dMotorImpulse2 = 0;
    var dMotorImpulse3 = 0;

    if (this.enableMotor1) {
      dMotorImpulse1 = (rvn1 - this.motorSpeed1) * this.dv00;
      this.motorImpulse1 += dMotorImpulse1;

      if (this.motorImpulse1 > this.maxMotorImpulse1) {
        // clamp motor impulse
        this.motorImpulse1 = this.maxMotorImpulse1;
      } else if (this.motorImpulse1 < -this.maxMotorImpulse1) {
        this.motorImpulse1 = -this.maxMotorImpulse1;
      }

      dMotorImpulse1 = this.motorImpulse1 - oldMotorImpulse1;
    }

    if (this.enableMotor2) {
      dMotorImpulse2 = (rvn2 - this.motorSpeed2) * this.dv11;
      this.motorImpulse2 += dMotorImpulse2;

      if (this.motorImpulse2 > this.maxMotorImpulse2) {
        // clamp motor impulse
        this.motorImpulse2 = this.maxMotorImpulse2;
      } else if (this.motorImpulse2 < -this.maxMotorImpulse2) {
        this.motorImpulse2 = -this.maxMotorImpulse2;
      }

      dMotorImpulse2 = this.motorImpulse2 - oldMotorImpulse2;
    }

    if (this.enableMotor3) {
      dMotorImpulse3 = (rvn3 - this.motorSpeed3) * this.dv22;
      this.motorImpulse3 += dMotorImpulse3;

      if (this.motorImpulse3 > this.maxMotorImpulse3) {
        // clamp motor impulse
        this.motorImpulse3 = this.maxMotorImpulse3;
      } else if (this.motorImpulse3 < -this.maxMotorImpulse3) {
        this.motorImpulse3 = -this.maxMotorImpulse3;
      }

      dMotorImpulse3 = this.motorImpulse3 - oldMotorImpulse3;
    } // apply motor impulse to relative velocity


    rvn1 += dMotorImpulse1 * this.kv00 + dMotorImpulse2 * this.k01 + dMotorImpulse3 * this.k02;
    rvn2 += dMotorImpulse1 * this.k10 + dMotorImpulse2 * this.kv11 + dMotorImpulse3 * this.k12;
    rvn3 += dMotorImpulse1 * this.k20 + dMotorImpulse2 * this.k21 + dMotorImpulse3 * this.kv22; // subtract target velocity and applied impulse

    rvn1 -= this.limitVelocity1 + this.limitImpulse1 * this.cfm1;
    rvn2 -= this.limitVelocity2 + this.limitImpulse2 * this.cfm2;
    rvn3 -= this.limitVelocity3 + this.limitImpulse3 * this.cfm3;
    var oldLimitImpulse1 = this.limitImpulse1;
    var oldLimitImpulse2 = this.limitImpulse2;
    var oldLimitImpulse3 = this.limitImpulse3;
    var dLimitImpulse1 = rvn1 * this.d00 + rvn2 * this.d01 + rvn3 * this.d02;
    var dLimitImpulse2 = rvn1 * this.d10 + rvn2 * this.d11 + rvn3 * this.d12;
    var dLimitImpulse3 = rvn1 * this.d20 + rvn2 * this.d21 + rvn3 * this.d22;
    this.limitImpulse1 += dLimitImpulse1;
    this.limitImpulse2 += dLimitImpulse2;
    this.limitImpulse3 += dLimitImpulse3; // clamp

    var clampState = 0;

    if (this.limitState1 == 2 || this.limitImpulse1 * this.limitState1 < 0) {
      dLimitImpulse1 = -oldLimitImpulse1;
      rvn2 += dLimitImpulse1 * this.k10;
      rvn3 += dLimitImpulse1 * this.k20;
      clampState |= 1;
    }

    if (this.limitState2 == 2 || this.limitImpulse2 * this.limitState2 < 0) {
      dLimitImpulse2 = -oldLimitImpulse2;
      rvn1 += dLimitImpulse2 * this.k01;
      rvn3 += dLimitImpulse2 * this.k21;
      clampState |= 2;
    }

    if (this.limitState3 == 2 || this.limitImpulse3 * this.limitState3 < 0) {
      dLimitImpulse3 = -oldLimitImpulse3;
      rvn1 += dLimitImpulse3 * this.k02;
      rvn2 += dLimitImpulse3 * this.k12;
      clampState |= 4;
    } // update un-clamped impulse
    // TODO: isolate division


    var det;

    switch (clampState) {
      case 1:
        // update 2 3
        det = 1 / (this.k11 * this.k22 - this.k12 * this.k21);
        dLimitImpulse2 = (this.k22 * rvn2 + -this.k12 * rvn3) * det;
        dLimitImpulse3 = (-this.k21 * rvn2 + this.k11 * rvn3) * det;
        break;

      case 2:
        // update 1 3
        det = 1 / (this.k00 * this.k22 - this.k02 * this.k20);
        dLimitImpulse1 = (this.k22 * rvn1 + -this.k02 * rvn3) * det;
        dLimitImpulse3 = (-this.k20 * rvn1 + this.k00 * rvn3) * det;
        break;

      case 3:
        // update 3
        dLimitImpulse3 = rvn3 / this.k22;
        break;

      case 4:
        // update 1 2
        det = 1 / (this.k00 * this.k11 - this.k01 * this.k10);
        dLimitImpulse1 = (this.k11 * rvn1 + -this.k01 * rvn2) * det;
        dLimitImpulse2 = (-this.k10 * rvn1 + this.k00 * rvn2) * det;
        break;

      case 5:
        // update 2
        dLimitImpulse2 = rvn2 / this.k11;
        break;

      case 6:
        // update 1
        dLimitImpulse1 = rvn1 / this.k00;
        break;
    }

    this.limitImpulse1 = dLimitImpulse1 + oldLimitImpulse1;
    this.limitImpulse2 = dLimitImpulse2 + oldLimitImpulse2;
    this.limitImpulse3 = dLimitImpulse3 + oldLimitImpulse3;
    var dImpulse1 = dMotorImpulse1 + dLimitImpulse1;
    var dImpulse2 = dMotorImpulse2 + dLimitImpulse2;
    var dImpulse3 = dMotorImpulse3 + dLimitImpulse3; // apply impulse

    this.a1.x += dImpulse1 * this.a1x1 + dImpulse2 * this.a1x2 + dImpulse3 * this.a1x3;
    this.a1.y += dImpulse1 * this.a1y1 + dImpulse2 * this.a1y2 + dImpulse3 * this.a1y3;
    this.a1.z += dImpulse1 * this.a1z1 + dImpulse2 * this.a1z2 + dImpulse3 * this.a1z3;
    this.a2.x -= dImpulse1 * this.a2x1 + dImpulse2 * this.a2x2 + dImpulse3 * this.a2x3;
    this.a2.y -= dImpulse1 * this.a2y1 + dImpulse2 * this.a2y2 + dImpulse3 * this.a2y3;
    this.a2.z -= dImpulse1 * this.a2z1 + dImpulse2 * this.a2z2 + dImpulse3 * this.a2z3;
    rvx = this.a2.x - this.a1.x;
    rvy = this.a2.y - this.a1.y;
    rvz = this.a2.z - this.a1.z;
    rvn2 = rvx * this.ax2 + rvy * this.ay2 + rvz * this.az2;
  }
});
/**
 * A hinge joint allows only for relative rotation of rigid bodies along the axis.
 *
 * @author saharan
 * @author lo-th
 */

function HingeJoint(config, lowerAngleLimit, upperAngleLimit) {
  Joint.call(this, config);
  this.type = JOINT_HINGE; // The axis in the first body's coordinate system.

  this.localAxis1 = config.localAxis1.clone().normalize(); // The axis in the second body's coordinate system.

  this.localAxis2 = config.localAxis2.clone().normalize(); // make angle axis

  var arc = new Mat33().setQuat(new Quat().setFromUnitVectors(this.localAxis1, this.localAxis2));
  this.localAngle1 = new Vec3().tangent(this.localAxis1).normalize();
  this.localAngle2 = this.localAngle1.clone().applyMatrix3(arc, true);
  this.ax1 = new Vec3();
  this.ax2 = new Vec3();
  this.an1 = new Vec3();
  this.an2 = new Vec3();
  this.tmp = new Vec3();
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3(); // The rotational limit and motor information of the joint.

  this.limitMotor = new LimitMotor(this.nor, false);
  this.limitMotor.lowerLimit = lowerAngleLimit;
  this.limitMotor.upperLimit = upperAngleLimit;
  this.lc = new LinearConstraint(this);
  this.r3 = new Rotational3Constraint(this, this.limitMotor, new LimitMotor(this.tan, true), new LimitMotor(this.bin, true));
}

HingeJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: HingeJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, true);
    this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, true);
    this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, true);
    this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, true); // normal tangent binormal

    this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize();
    this.tan.tangent(this.nor).normalize();
    this.bin.crossVectors(this.nor, this.tan); // calculate hinge angle

    var limite = _Math.acosClamp(_Math.dotVectors(this.an1, this.an2));

    this.tmp.crossVectors(this.an1, this.an2);
    if (_Math.dotVectors(this.nor, this.tmp) < 0) this.limitMotor.angle = -limite;else this.limitMotor.angle = limite;
    this.tmp.crossVectors(this.ax1, this.ax2);
    this.r3.limitMotor2.angle = _Math.dotVectors(this.tan, this.tmp);
    this.r3.limitMotor3.angle = _Math.dotVectors(this.bin, this.tmp); // preSolve

    this.r3.preSolve(timeStep, invTimeStep);
    this.lc.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.r3.solve();
    this.lc.solve();
  },
  postSolve: function () {}
});
/**
 * A ball-and-socket joint limits relative translation on two anchor points on rigid bodies.
 *
 * @author saharan
 * @author lo-th
 */

function BallAndSocketJoint(config) {
  Joint.call(this, config);
  this.type = JOINT_BALL_AND_SOCKET;
  this.lc = new LinearConstraint(this);
}

BallAndSocketJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: BallAndSocketJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints(); // preSolve

    this.lc.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.lc.solve();
  },
  postSolve: function () {}
});
/**
* A translational constraint for various joints.
* @author saharan
*/

function TranslationalConstraint(joint, limitMotor) {
  this.cfm = NaN;
  this.m1 = NaN;
  this.m2 = NaN;
  this.i1e00 = NaN;
  this.i1e01 = NaN;
  this.i1e02 = NaN;
  this.i1e10 = NaN;
  this.i1e11 = NaN;
  this.i1e12 = NaN;
  this.i1e20 = NaN;
  this.i1e21 = NaN;
  this.i1e22 = NaN;
  this.i2e00 = NaN;
  this.i2e01 = NaN;
  this.i2e02 = NaN;
  this.i2e10 = NaN;
  this.i2e11 = NaN;
  this.i2e12 = NaN;
  this.i2e20 = NaN;
  this.i2e21 = NaN;
  this.i2e22 = NaN;
  this.motorDenom = NaN;
  this.invMotorDenom = NaN;
  this.invDenom = NaN;
  this.ax = NaN;
  this.ay = NaN;
  this.az = NaN;
  this.r1x = NaN;
  this.r1y = NaN;
  this.r1z = NaN;
  this.r2x = NaN;
  this.r2y = NaN;
  this.r2z = NaN;
  this.t1x = NaN;
  this.t1y = NaN;
  this.t1z = NaN;
  this.t2x = NaN;
  this.t2y = NaN;
  this.t2z = NaN;
  this.l1x = NaN;
  this.l1y = NaN;
  this.l1z = NaN;
  this.l2x = NaN;
  this.l2y = NaN;
  this.l2z = NaN;
  this.a1x = NaN;
  this.a1y = NaN;
  this.a1z = NaN;
  this.a2x = NaN;
  this.a2y = NaN;
  this.a2z = NaN;
  this.lowerLimit = NaN;
  this.upperLimit = NaN;
  this.limitVelocity = NaN;
  this.limitState = 0; // -1: at lower, 0: locked, 1: at upper, 2: free

  this.enableMotor = false;
  this.motorSpeed = NaN;
  this.maxMotorForce = NaN;
  this.maxMotorImpulse = NaN;
  this.limitMotor = limitMotor;
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.p1 = joint.anchorPoint1;
  this.p2 = joint.anchorPoint2;
  this.r1 = joint.relativeAnchorPoint1;
  this.r2 = joint.relativeAnchorPoint2;
  this.l1 = this.b1.linearVelocity;
  this.l2 = this.b2.linearVelocity;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
  this.limitImpulse = 0;
  this.motorImpulse = 0;
}

Object.assign(TranslationalConstraint.prototype, {
  TranslationalConstraint: true,
  preSolve: function (timeStep, invTimeStep) {
    this.ax = this.limitMotor.axis.x;
    this.ay = this.limitMotor.axis.y;
    this.az = this.limitMotor.axis.z;
    this.lowerLimit = this.limitMotor.lowerLimit;
    this.upperLimit = this.limitMotor.upperLimit;
    this.motorSpeed = this.limitMotor.motorSpeed;
    this.maxMotorForce = this.limitMotor.maxMotorForce;
    this.enableMotor = this.maxMotorForce > 0;
    this.m1 = this.b1.inverseMass;
    this.m2 = this.b2.inverseMass;
    var ti1 = this.i1.elements;
    var ti2 = this.i2.elements;
    this.i1e00 = ti1[0];
    this.i1e01 = ti1[1];
    this.i1e02 = ti1[2];
    this.i1e10 = ti1[3];
    this.i1e11 = ti1[4];
    this.i1e12 = ti1[5];
    this.i1e20 = ti1[6];
    this.i1e21 = ti1[7];
    this.i1e22 = ti1[8];
    this.i2e00 = ti2[0];
    this.i2e01 = ti2[1];
    this.i2e02 = ti2[2];
    this.i2e10 = ti2[3];
    this.i2e11 = ti2[4];
    this.i2e12 = ti2[5];
    this.i2e20 = ti2[6];
    this.i2e21 = ti2[7];
    this.i2e22 = ti2[8];
    var dx = this.p2.x - this.p1.x;
    var dy = this.p2.y - this.p1.y;
    var dz = this.p2.z - this.p1.z;
    var d = dx * this.ax + dy * this.ay + dz * this.az;
    var frequency = this.limitMotor.frequency;
    var enableSpring = frequency > 0;
    var enableLimit = this.lowerLimit <= this.upperLimit;

    if (enableSpring && d > 20 || d < -20) {
      enableSpring = false;
    }

    if (enableLimit) {
      if (this.lowerLimit == this.upperLimit) {
        if (this.limitState != 0) {
          this.limitState = 0;
          this.limitImpulse = 0;
        }

        this.limitVelocity = this.lowerLimit - d;
        if (!enableSpring) d = this.lowerLimit;
      } else if (d < this.lowerLimit) {
        if (this.limitState != -1) {
          this.limitState = -1;
          this.limitImpulse = 0;
        }

        this.limitVelocity = this.lowerLimit - d;
        if (!enableSpring) d = this.lowerLimit;
      } else if (d > this.upperLimit) {
        if (this.limitState != 1) {
          this.limitState = 1;
          this.limitImpulse = 0;
        }

        this.limitVelocity = this.upperLimit - d;
        if (!enableSpring) d = this.upperLimit;
      } else {
        this.limitState = 2;
        this.limitImpulse = 0;
        this.limitVelocity = 0;
      }

      if (!enableSpring) {
        if (this.limitVelocity > 0.005) this.limitVelocity -= 0.005;else if (this.limitVelocity < -0.005) this.limitVelocity += 0.005;else this.limitVelocity = 0;
      }
    } else {
      this.limitState = 2;
      this.limitImpulse = 0;
    }

    if (this.enableMotor && (this.limitState != 0 || enableSpring)) {
      this.maxMotorImpulse = this.maxMotorForce * timeStep;
    } else {
      this.motorImpulse = 0;
      this.maxMotorImpulse = 0;
    }

    var rdx = d * this.ax;
    var rdy = d * this.ay;
    var rdz = d * this.az;
    var w1 = this.m1 / (this.m1 + this.m2);
    var w2 = 1 - w1;
    this.r1x = this.r1.x + rdx * w1;
    this.r1y = this.r1.y + rdy * w1;
    this.r1z = this.r1.z + rdz * w1;
    this.r2x = this.r2.x - rdx * w2;
    this.r2y = this.r2.y - rdy * w2;
    this.r2z = this.r2.z - rdz * w2;
    this.t1x = this.r1y * this.az - this.r1z * this.ay;
    this.t1y = this.r1z * this.ax - this.r1x * this.az;
    this.t1z = this.r1x * this.ay - this.r1y * this.ax;
    this.t2x = this.r2y * this.az - this.r2z * this.ay;
    this.t2y = this.r2z * this.ax - this.r2x * this.az;
    this.t2z = this.r2x * this.ay - this.r2y * this.ax;
    this.l1x = this.ax * this.m1;
    this.l1y = this.ay * this.m1;
    this.l1z = this.az * this.m1;
    this.l2x = this.ax * this.m2;
    this.l2y = this.ay * this.m2;
    this.l2z = this.az * this.m2;
    this.a1x = this.t1x * this.i1e00 + this.t1y * this.i1e01 + this.t1z * this.i1e02;
    this.a1y = this.t1x * this.i1e10 + this.t1y * this.i1e11 + this.t1z * this.i1e12;
    this.a1z = this.t1x * this.i1e20 + this.t1y * this.i1e21 + this.t1z * this.i1e22;
    this.a2x = this.t2x * this.i2e00 + this.t2y * this.i2e01 + this.t2z * this.i2e02;
    this.a2y = this.t2x * this.i2e10 + this.t2y * this.i2e11 + this.t2z * this.i2e12;
    this.a2z = this.t2x * this.i2e20 + this.t2y * this.i2e21 + this.t2z * this.i2e22;
    this.motorDenom = this.m1 + this.m2 + this.ax * (this.a1y * this.r1z - this.a1z * this.r1y + this.a2y * this.r2z - this.a2z * this.r2y) + this.ay * (this.a1z * this.r1x - this.a1x * this.r1z + this.a2z * this.r2x - this.a2x * this.r2z) + this.az * (this.a1x * this.r1y - this.a1y * this.r1x + this.a2x * this.r2y - this.a2y * this.r2x);
    this.invMotorDenom = 1 / this.motorDenom;

    if (enableSpring && this.limitState != 2) {
      var omega = 6.2831853 * frequency;
      var k = omega * omega * timeStep;
      var dmp = invTimeStep / (k + 2 * this.limitMotor.dampingRatio * omega);
      this.cfm = this.motorDenom * dmp;
      this.limitVelocity *= k * dmp;
    } else {
      this.cfm = 0;
      this.limitVelocity *= invTimeStep * 0.05;
    }

    this.invDenom = 1 / (this.motorDenom + this.cfm);
    var totalImpulse = this.limitImpulse + this.motorImpulse;
    this.l1.x += totalImpulse * this.l1x;
    this.l1.y += totalImpulse * this.l1y;
    this.l1.z += totalImpulse * this.l1z;
    this.a1.x += totalImpulse * this.a1x;
    this.a1.y += totalImpulse * this.a1y;
    this.a1.z += totalImpulse * this.a1z;
    this.l2.x -= totalImpulse * this.l2x;
    this.l2.y -= totalImpulse * this.l2y;
    this.l2.z -= totalImpulse * this.l2z;
    this.a2.x -= totalImpulse * this.a2x;
    this.a2.y -= totalImpulse * this.a2y;
    this.a2.z -= totalImpulse * this.a2z;
  },
  solve: function () {
    var rvn = this.ax * (this.l2.x - this.l1.x) + this.ay * (this.l2.y - this.l1.y) + this.az * (this.l2.z - this.l1.z) + this.t2x * this.a2.x - this.t1x * this.a1.x + this.t2y * this.a2.y - this.t1y * this.a1.y + this.t2z * this.a2.z - this.t1z * this.a1.z; // motor part

    var newMotorImpulse;

    if (this.enableMotor) {
      newMotorImpulse = (rvn - this.motorSpeed) * this.invMotorDenom;
      var oldMotorImpulse = this.motorImpulse;
      this.motorImpulse += newMotorImpulse;
      if (this.motorImpulse > this.maxMotorImpulse) this.motorImpulse = this.maxMotorImpulse;else if (this.motorImpulse < -this.maxMotorImpulse) this.motorImpulse = -this.maxMotorImpulse;
      newMotorImpulse = this.motorImpulse - oldMotorImpulse;
      rvn -= newMotorImpulse * this.motorDenom;
    } else newMotorImpulse = 0; // limit part


    var newLimitImpulse;

    if (this.limitState != 2) {
      newLimitImpulse = (rvn - this.limitVelocity - this.limitImpulse * this.cfm) * this.invDenom;
      var oldLimitImpulse = this.limitImpulse;
      this.limitImpulse += newLimitImpulse;
      if (this.limitImpulse * this.limitState < 0) this.limitImpulse = 0;
      newLimitImpulse = this.limitImpulse - oldLimitImpulse;
    } else newLimitImpulse = 0;

    var totalImpulse = newLimitImpulse + newMotorImpulse;
    this.l1.x += totalImpulse * this.l1x;
    this.l1.y += totalImpulse * this.l1y;
    this.l1.z += totalImpulse * this.l1z;
    this.a1.x += totalImpulse * this.a1x;
    this.a1.y += totalImpulse * this.a1y;
    this.a1.z += totalImpulse * this.a1z;
    this.l2.x -= totalImpulse * this.l2x;
    this.l2.y -= totalImpulse * this.l2y;
    this.l2.z -= totalImpulse * this.l2z;
    this.a2.x -= totalImpulse * this.a2x;
    this.a2.y -= totalImpulse * this.a2y;
    this.a2.z -= totalImpulse * this.a2z;
  }
});
/**
 * A distance joint limits the distance between two anchor points on rigid bodies.
 *
 * @author saharan
 * @author lo-th
 */

function DistanceJoint(config, minDistance, maxDistance) {
  Joint.call(this, config);
  this.type = JOINT_DISTANCE;
  this.nor = new Vec3(); // The limit and motor information of the joint.

  this.limitMotor = new LimitMotor(this.nor, true);
  this.limitMotor.lowerLimit = minDistance;
  this.limitMotor.upperLimit = maxDistance;
  this.t = new TranslationalConstraint(this, this.limitMotor);
}

DistanceJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: DistanceJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.nor.sub(this.anchorPoint2, this.anchorPoint1).normalize(); // preSolve

    this.t.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.t.solve();
  },
  postSolve: function () {}
});
/**
* An angular constraint for all axes for various joints.
* @author saharan
*/

function AngularConstraint(joint, targetOrientation) {
  this.joint = joint;
  this.targetOrientation = new Quat().invert(targetOrientation);
  this.relativeOrientation = new Quat();
  this.ii1 = null;
  this.ii2 = null;
  this.dd = null;
  this.vel = new Vec3();
  this.imp = new Vec3();
  this.rn0 = new Vec3();
  this.rn1 = new Vec3();
  this.rn2 = new Vec3();
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
}

Object.assign(AngularConstraint.prototype, {
  AngularConstraint: true,
  preSolve: function (timeStep, invTimeStep) {
    var inv, len, v;
    this.ii1 = this.i1.clone();
    this.ii2 = this.i2.clone();
    v = new Mat33().add(this.ii1, this.ii2).elements;
    inv = 1 / (v[0] * (v[4] * v[8] - v[7] * v[5]) + v[3] * (v[7] * v[2] - v[1] * v[8]) + v[6] * (v[1] * v[5] - v[4] * v[2]));
    this.dd = new Mat33().set(v[4] * v[8] - v[5] * v[7], v[2] * v[7] - v[1] * v[8], v[1] * v[5] - v[2] * v[4], v[5] * v[6] - v[3] * v[8], v[0] * v[8] - v[2] * v[6], v[2] * v[3] - v[0] * v[5], v[3] * v[7] - v[4] * v[6], v[1] * v[6] - v[0] * v[7], v[0] * v[4] - v[1] * v[3]).multiplyScalar(inv);
    this.relativeOrientation.invert(this.b1.orientation).multiply(this.targetOrientation).multiply(this.b2.orientation);
    inv = this.relativeOrientation.w * 2;
    this.vel.copy(this.relativeOrientation).multiplyScalar(inv);
    len = this.vel.length();

    if (len > 0.02) {
      len = (0.02 - len) / len * invTimeStep * 0.05;
      this.vel.multiplyScalar(len);
    } else {
      this.vel.set(0, 0, 0);
    }

    this.rn1.copy(this.imp).applyMatrix3(this.ii1, true);
    this.rn2.copy(this.imp).applyMatrix3(this.ii2, true);
    this.a1.add(this.rn1);
    this.a2.sub(this.rn2);
  },
  solve: function () {
    var r = this.a2.clone().sub(this.a1).sub(this.vel);
    this.rn0.copy(r).applyMatrix3(this.dd, true);
    this.rn1.copy(this.rn0).applyMatrix3(this.ii1, true);
    this.rn2.copy(this.rn0).applyMatrix3(this.ii2, true);
    this.imp.add(this.rn0);
    this.a1.add(this.rn1);
    this.a2.sub(this.rn2);
  }
});
/**
* A three-axis translational constraint for various joints.
* @author saharan
*/

function Translational3Constraint(joint, limitMotor1, limitMotor2, limitMotor3) {
  this.m1 = NaN;
  this.m2 = NaN;
  this.i1e00 = NaN;
  this.i1e01 = NaN;
  this.i1e02 = NaN;
  this.i1e10 = NaN;
  this.i1e11 = NaN;
  this.i1e12 = NaN;
  this.i1e20 = NaN;
  this.i1e21 = NaN;
  this.i1e22 = NaN;
  this.i2e00 = NaN;
  this.i2e01 = NaN;
  this.i2e02 = NaN;
  this.i2e10 = NaN;
  this.i2e11 = NaN;
  this.i2e12 = NaN;
  this.i2e20 = NaN;
  this.i2e21 = NaN;
  this.i2e22 = NaN;
  this.ax1 = NaN;
  this.ay1 = NaN;
  this.az1 = NaN;
  this.ax2 = NaN;
  this.ay2 = NaN;
  this.az2 = NaN;
  this.ax3 = NaN;
  this.ay3 = NaN;
  this.az3 = NaN;
  this.r1x = NaN;
  this.r1y = NaN;
  this.r1z = NaN;
  this.r2x = NaN;
  this.r2y = NaN;
  this.r2z = NaN;
  this.t1x1 = NaN; // jacobians

  this.t1y1 = NaN;
  this.t1z1 = NaN;
  this.t2x1 = NaN;
  this.t2y1 = NaN;
  this.t2z1 = NaN;
  this.l1x1 = NaN;
  this.l1y1 = NaN;
  this.l1z1 = NaN;
  this.l2x1 = NaN;
  this.l2y1 = NaN;
  this.l2z1 = NaN;
  this.a1x1 = NaN;
  this.a1y1 = NaN;
  this.a1z1 = NaN;
  this.a2x1 = NaN;
  this.a2y1 = NaN;
  this.a2z1 = NaN;
  this.t1x2 = NaN;
  this.t1y2 = NaN;
  this.t1z2 = NaN;
  this.t2x2 = NaN;
  this.t2y2 = NaN;
  this.t2z2 = NaN;
  this.l1x2 = NaN;
  this.l1y2 = NaN;
  this.l1z2 = NaN;
  this.l2x2 = NaN;
  this.l2y2 = NaN;
  this.l2z2 = NaN;
  this.a1x2 = NaN;
  this.a1y2 = NaN;
  this.a1z2 = NaN;
  this.a2x2 = NaN;
  this.a2y2 = NaN;
  this.a2z2 = NaN;
  this.t1x3 = NaN;
  this.t1y3 = NaN;
  this.t1z3 = NaN;
  this.t2x3 = NaN;
  this.t2y3 = NaN;
  this.t2z3 = NaN;
  this.l1x3 = NaN;
  this.l1y3 = NaN;
  this.l1z3 = NaN;
  this.l2x3 = NaN;
  this.l2y3 = NaN;
  this.l2z3 = NaN;
  this.a1x3 = NaN;
  this.a1y3 = NaN;
  this.a1z3 = NaN;
  this.a2x3 = NaN;
  this.a2y3 = NaN;
  this.a2z3 = NaN;
  this.lowerLimit1 = NaN;
  this.upperLimit1 = NaN;
  this.limitVelocity1 = NaN;
  this.limitState1 = 0; // -1: at lower, 0: locked, 1: at upper, 2: unlimited

  this.enableMotor1 = false;
  this.motorSpeed1 = NaN;
  this.maxMotorForce1 = NaN;
  this.maxMotorImpulse1 = NaN;
  this.lowerLimit2 = NaN;
  this.upperLimit2 = NaN;
  this.limitVelocity2 = NaN;
  this.limitState2 = 0; // -1: at lower, 0: locked, 1: at upper, 2: unlimited

  this.enableMotor2 = false;
  this.motorSpeed2 = NaN;
  this.maxMotorForce2 = NaN;
  this.maxMotorImpulse2 = NaN;
  this.lowerLimit3 = NaN;
  this.upperLimit3 = NaN;
  this.limitVelocity3 = NaN;
  this.limitState3 = 0; // -1: at lower, 0: locked, 1: at upper, 2: unlimited

  this.enableMotor3 = false;
  this.motorSpeed3 = NaN;
  this.maxMotorForce3 = NaN;
  this.maxMotorImpulse3 = NaN;
  this.k00 = NaN; // K = J*M*JT

  this.k01 = NaN;
  this.k02 = NaN;
  this.k10 = NaN;
  this.k11 = NaN;
  this.k12 = NaN;
  this.k20 = NaN;
  this.k21 = NaN;
  this.k22 = NaN;
  this.kv00 = NaN; // diagonals without CFMs

  this.kv11 = NaN;
  this.kv22 = NaN;
  this.dv00 = NaN; // ...inverted

  this.dv11 = NaN;
  this.dv22 = NaN;
  this.d00 = NaN; // K^-1

  this.d01 = NaN;
  this.d02 = NaN;
  this.d10 = NaN;
  this.d11 = NaN;
  this.d12 = NaN;
  this.d20 = NaN;
  this.d21 = NaN;
  this.d22 = NaN;
  this.limitMotor1 = limitMotor1;
  this.limitMotor2 = limitMotor2;
  this.limitMotor3 = limitMotor3;
  this.b1 = joint.body1;
  this.b2 = joint.body2;
  this.p1 = joint.anchorPoint1;
  this.p2 = joint.anchorPoint2;
  this.r1 = joint.relativeAnchorPoint1;
  this.r2 = joint.relativeAnchorPoint2;
  this.l1 = this.b1.linearVelocity;
  this.l2 = this.b2.linearVelocity;
  this.a1 = this.b1.angularVelocity;
  this.a2 = this.b2.angularVelocity;
  this.i1 = this.b1.inverseInertia;
  this.i2 = this.b2.inverseInertia;
  this.limitImpulse1 = 0;
  this.motorImpulse1 = 0;
  this.limitImpulse2 = 0;
  this.motorImpulse2 = 0;
  this.limitImpulse3 = 0;
  this.motorImpulse3 = 0;
  this.cfm1 = 0; // Constraint Force Mixing

  this.cfm2 = 0;
  this.cfm3 = 0;
  this.weight = -1;
}

Object.assign(Translational3Constraint.prototype, {
  Translational3Constraint: true,
  preSolve: function (timeStep, invTimeStep) {
    this.ax1 = this.limitMotor1.axis.x;
    this.ay1 = this.limitMotor1.axis.y;
    this.az1 = this.limitMotor1.axis.z;
    this.ax2 = this.limitMotor2.axis.x;
    this.ay2 = this.limitMotor2.axis.y;
    this.az2 = this.limitMotor2.axis.z;
    this.ax3 = this.limitMotor3.axis.x;
    this.ay3 = this.limitMotor3.axis.y;
    this.az3 = this.limitMotor3.axis.z;
    this.lowerLimit1 = this.limitMotor1.lowerLimit;
    this.upperLimit1 = this.limitMotor1.upperLimit;
    this.motorSpeed1 = this.limitMotor1.motorSpeed;
    this.maxMotorForce1 = this.limitMotor1.maxMotorForce;
    this.enableMotor1 = this.maxMotorForce1 > 0;
    this.lowerLimit2 = this.limitMotor2.lowerLimit;
    this.upperLimit2 = this.limitMotor2.upperLimit;
    this.motorSpeed2 = this.limitMotor2.motorSpeed;
    this.maxMotorForce2 = this.limitMotor2.maxMotorForce;
    this.enableMotor2 = this.maxMotorForce2 > 0;
    this.lowerLimit3 = this.limitMotor3.lowerLimit;
    this.upperLimit3 = this.limitMotor3.upperLimit;
    this.motorSpeed3 = this.limitMotor3.motorSpeed;
    this.maxMotorForce3 = this.limitMotor3.maxMotorForce;
    this.enableMotor3 = this.maxMotorForce3 > 0;
    this.m1 = this.b1.inverseMass;
    this.m2 = this.b2.inverseMass;
    var ti1 = this.i1.elements;
    var ti2 = this.i2.elements;
    this.i1e00 = ti1[0];
    this.i1e01 = ti1[1];
    this.i1e02 = ti1[2];
    this.i1e10 = ti1[3];
    this.i1e11 = ti1[4];
    this.i1e12 = ti1[5];
    this.i1e20 = ti1[6];
    this.i1e21 = ti1[7];
    this.i1e22 = ti1[8];
    this.i2e00 = ti2[0];
    this.i2e01 = ti2[1];
    this.i2e02 = ti2[2];
    this.i2e10 = ti2[3];
    this.i2e11 = ti2[4];
    this.i2e12 = ti2[5];
    this.i2e20 = ti2[6];
    this.i2e21 = ti2[7];
    this.i2e22 = ti2[8];
    var dx = this.p2.x - this.p1.x;
    var dy = this.p2.y - this.p1.y;
    var dz = this.p2.z - this.p1.z;
    var d1 = dx * this.ax1 + dy * this.ay1 + dz * this.az1;
    var d2 = dx * this.ax2 + dy * this.ay2 + dz * this.az2;
    var d3 = dx * this.ax3 + dy * this.ay3 + dz * this.az3;
    var frequency1 = this.limitMotor1.frequency;
    var frequency2 = this.limitMotor2.frequency;
    var frequency3 = this.limitMotor3.frequency;
    var enableSpring1 = frequency1 > 0;
    var enableSpring2 = frequency2 > 0;
    var enableSpring3 = frequency3 > 0;
    var enableLimit1 = this.lowerLimit1 <= this.upperLimit1;
    var enableLimit2 = this.lowerLimit2 <= this.upperLimit2;
    var enableLimit3 = this.lowerLimit3 <= this.upperLimit3; // for stability

    if (enableSpring1 && d1 > 20 || d1 < -20) {
      enableSpring1 = false;
    }

    if (enableSpring2 && d2 > 20 || d2 < -20) {
      enableSpring2 = false;
    }

    if (enableSpring3 && d3 > 20 || d3 < -20) {
      enableSpring3 = false;
    }

    if (enableLimit1) {
      if (this.lowerLimit1 == this.upperLimit1) {
        if (this.limitState1 != 0) {
          this.limitState1 = 0;
          this.limitImpulse1 = 0;
        }

        this.limitVelocity1 = this.lowerLimit1 - d1;
        if (!enableSpring1) d1 = this.lowerLimit1;
      } else if (d1 < this.lowerLimit1) {
        if (this.limitState1 != -1) {
          this.limitState1 = -1;
          this.limitImpulse1 = 0;
        }

        this.limitVelocity1 = this.lowerLimit1 - d1;
        if (!enableSpring1) d1 = this.lowerLimit1;
      } else if (d1 > this.upperLimit1) {
        if (this.limitState1 != 1) {
          this.limitState1 = 1;
          this.limitImpulse1 = 0;
        }

        this.limitVelocity1 = this.upperLimit1 - d1;
        if (!enableSpring1) d1 = this.upperLimit1;
      } else {
        this.limitState1 = 2;
        this.limitImpulse1 = 0;
        this.limitVelocity1 = 0;
      }

      if (!enableSpring1) {
        if (this.limitVelocity1 > 0.005) this.limitVelocity1 -= 0.005;else if (this.limitVelocity1 < -0.005) this.limitVelocity1 += 0.005;else this.limitVelocity1 = 0;
      }
    } else {
      this.limitState1 = 2;
      this.limitImpulse1 = 0;
    }

    if (enableLimit2) {
      if (this.lowerLimit2 == this.upperLimit2) {
        if (this.limitState2 != 0) {
          this.limitState2 = 0;
          this.limitImpulse2 = 0;
        }

        this.limitVelocity2 = this.lowerLimit2 - d2;
        if (!enableSpring2) d2 = this.lowerLimit2;
      } else if (d2 < this.lowerLimit2) {
        if (this.limitState2 != -1) {
          this.limitState2 = -1;
          this.limitImpulse2 = 0;
        }

        this.limitVelocity2 = this.lowerLimit2 - d2;
        if (!enableSpring2) d2 = this.lowerLimit2;
      } else if (d2 > this.upperLimit2) {
        if (this.limitState2 != 1) {
          this.limitState2 = 1;
          this.limitImpulse2 = 0;
        }

        this.limitVelocity2 = this.upperLimit2 - d2;
        if (!enableSpring2) d2 = this.upperLimit2;
      } else {
        this.limitState2 = 2;
        this.limitImpulse2 = 0;
        this.limitVelocity2 = 0;
      }

      if (!enableSpring2) {
        if (this.limitVelocity2 > 0.005) this.limitVelocity2 -= 0.005;else if (this.limitVelocity2 < -0.005) this.limitVelocity2 += 0.005;else this.limitVelocity2 = 0;
      }
    } else {
      this.limitState2 = 2;
      this.limitImpulse2 = 0;
    }

    if (enableLimit3) {
      if (this.lowerLimit3 == this.upperLimit3) {
        if (this.limitState3 != 0) {
          this.limitState3 = 0;
          this.limitImpulse3 = 0;
        }

        this.limitVelocity3 = this.lowerLimit3 - d3;
        if (!enableSpring3) d3 = this.lowerLimit3;
      } else if (d3 < this.lowerLimit3) {
        if (this.limitState3 != -1) {
          this.limitState3 = -1;
          this.limitImpulse3 = 0;
        }

        this.limitVelocity3 = this.lowerLimit3 - d3;
        if (!enableSpring3) d3 = this.lowerLimit3;
      } else if (d3 > this.upperLimit3) {
        if (this.limitState3 != 1) {
          this.limitState3 = 1;
          this.limitImpulse3 = 0;
        }

        this.limitVelocity3 = this.upperLimit3 - d3;
        if (!enableSpring3) d3 = this.upperLimit3;
      } else {
        this.limitState3 = 2;
        this.limitImpulse3 = 0;
        this.limitVelocity3 = 0;
      }

      if (!enableSpring3) {
        if (this.limitVelocity3 > 0.005) this.limitVelocity3 -= 0.005;else if (this.limitVelocity3 < -0.005) this.limitVelocity3 += 0.005;else this.limitVelocity3 = 0;
      }
    } else {
      this.limitState3 = 2;
      this.limitImpulse3 = 0;
    }

    if (this.enableMotor1 && (this.limitState1 != 0 || enableSpring1)) {
      this.maxMotorImpulse1 = this.maxMotorForce1 * timeStep;
    } else {
      this.motorImpulse1 = 0;
      this.maxMotorImpulse1 = 0;
    }

    if (this.enableMotor2 && (this.limitState2 != 0 || enableSpring2)) {
      this.maxMotorImpulse2 = this.maxMotorForce2 * timeStep;
    } else {
      this.motorImpulse2 = 0;
      this.maxMotorImpulse2 = 0;
    }

    if (this.enableMotor3 && (this.limitState3 != 0 || enableSpring3)) {
      this.maxMotorImpulse3 = this.maxMotorForce3 * timeStep;
    } else {
      this.motorImpulse3 = 0;
      this.maxMotorImpulse3 = 0;
    }

    var rdx = d1 * this.ax1 + d2 * this.ax2 + d3 * this.ax2;
    var rdy = d1 * this.ay1 + d2 * this.ay2 + d3 * this.ay2;
    var rdz = d1 * this.az1 + d2 * this.az2 + d3 * this.az2;
    var w1 = this.m2 / (this.m1 + this.m2);
    if (this.weight >= 0) w1 = this.weight; // use given weight

    var w2 = 1 - w1;
    this.r1x = this.r1.x + rdx * w1;
    this.r1y = this.r1.y + rdy * w1;
    this.r1z = this.r1.z + rdz * w1;
    this.r2x = this.r2.x - rdx * w2;
    this.r2y = this.r2.y - rdy * w2;
    this.r2z = this.r2.z - rdz * w2; // build jacobians

    this.t1x1 = this.r1y * this.az1 - this.r1z * this.ay1;
    this.t1y1 = this.r1z * this.ax1 - this.r1x * this.az1;
    this.t1z1 = this.r1x * this.ay1 - this.r1y * this.ax1;
    this.t2x1 = this.r2y * this.az1 - this.r2z * this.ay1;
    this.t2y1 = this.r2z * this.ax1 - this.r2x * this.az1;
    this.t2z1 = this.r2x * this.ay1 - this.r2y * this.ax1;
    this.l1x1 = this.ax1 * this.m1;
    this.l1y1 = this.ay1 * this.m1;
    this.l1z1 = this.az1 * this.m1;
    this.l2x1 = this.ax1 * this.m2;
    this.l2y1 = this.ay1 * this.m2;
    this.l2z1 = this.az1 * this.m2;
    this.a1x1 = this.t1x1 * this.i1e00 + this.t1y1 * this.i1e01 + this.t1z1 * this.i1e02;
    this.a1y1 = this.t1x1 * this.i1e10 + this.t1y1 * this.i1e11 + this.t1z1 * this.i1e12;
    this.a1z1 = this.t1x1 * this.i1e20 + this.t1y1 * this.i1e21 + this.t1z1 * this.i1e22;
    this.a2x1 = this.t2x1 * this.i2e00 + this.t2y1 * this.i2e01 + this.t2z1 * this.i2e02;
    this.a2y1 = this.t2x1 * this.i2e10 + this.t2y1 * this.i2e11 + this.t2z1 * this.i2e12;
    this.a2z1 = this.t2x1 * this.i2e20 + this.t2y1 * this.i2e21 + this.t2z1 * this.i2e22;
    this.t1x2 = this.r1y * this.az2 - this.r1z * this.ay2;
    this.t1y2 = this.r1z * this.ax2 - this.r1x * this.az2;
    this.t1z2 = this.r1x * this.ay2 - this.r1y * this.ax2;
    this.t2x2 = this.r2y * this.az2 - this.r2z * this.ay2;
    this.t2y2 = this.r2z * this.ax2 - this.r2x * this.az2;
    this.t2z2 = this.r2x * this.ay2 - this.r2y * this.ax2;
    this.l1x2 = this.ax2 * this.m1;
    this.l1y2 = this.ay2 * this.m1;
    this.l1z2 = this.az2 * this.m1;
    this.l2x2 = this.ax2 * this.m2;
    this.l2y2 = this.ay2 * this.m2;
    this.l2z2 = this.az2 * this.m2;
    this.a1x2 = this.t1x2 * this.i1e00 + this.t1y2 * this.i1e01 + this.t1z2 * this.i1e02;
    this.a1y2 = this.t1x2 * this.i1e10 + this.t1y2 * this.i1e11 + this.t1z2 * this.i1e12;
    this.a1z2 = this.t1x2 * this.i1e20 + this.t1y2 * this.i1e21 + this.t1z2 * this.i1e22;
    this.a2x2 = this.t2x2 * this.i2e00 + this.t2y2 * this.i2e01 + this.t2z2 * this.i2e02;
    this.a2y2 = this.t2x2 * this.i2e10 + this.t2y2 * this.i2e11 + this.t2z2 * this.i2e12;
    this.a2z2 = this.t2x2 * this.i2e20 + this.t2y2 * this.i2e21 + this.t2z2 * this.i2e22;
    this.t1x3 = this.r1y * this.az3 - this.r1z * this.ay3;
    this.t1y3 = this.r1z * this.ax3 - this.r1x * this.az3;
    this.t1z3 = this.r1x * this.ay3 - this.r1y * this.ax3;
    this.t2x3 = this.r2y * this.az3 - this.r2z * this.ay3;
    this.t2y3 = this.r2z * this.ax3 - this.r2x * this.az3;
    this.t2z3 = this.r2x * this.ay3 - this.r2y * this.ax3;
    this.l1x3 = this.ax3 * this.m1;
    this.l1y3 = this.ay3 * this.m1;
    this.l1z3 = this.az3 * this.m1;
    this.l2x3 = this.ax3 * this.m2;
    this.l2y3 = this.ay3 * this.m2;
    this.l2z3 = this.az3 * this.m2;
    this.a1x3 = this.t1x3 * this.i1e00 + this.t1y3 * this.i1e01 + this.t1z3 * this.i1e02;
    this.a1y3 = this.t1x3 * this.i1e10 + this.t1y3 * this.i1e11 + this.t1z3 * this.i1e12;
    this.a1z3 = this.t1x3 * this.i1e20 + this.t1y3 * this.i1e21 + this.t1z3 * this.i1e22;
    this.a2x3 = this.t2x3 * this.i2e00 + this.t2y3 * this.i2e01 + this.t2z3 * this.i2e02;
    this.a2y3 = this.t2x3 * this.i2e10 + this.t2y3 * this.i2e11 + this.t2z3 * this.i2e12;
    this.a2z3 = this.t2x3 * this.i2e20 + this.t2y3 * this.i2e21 + this.t2z3 * this.i2e22; // build an impulse matrix

    var m12 = this.m1 + this.m2;
    this.k00 = (this.ax1 * this.ax1 + this.ay1 * this.ay1 + this.az1 * this.az1) * m12;
    this.k01 = (this.ax1 * this.ax2 + this.ay1 * this.ay2 + this.az1 * this.az2) * m12;
    this.k02 = (this.ax1 * this.ax3 + this.ay1 * this.ay3 + this.az1 * this.az3) * m12;
    this.k10 = (this.ax2 * this.ax1 + this.ay2 * this.ay1 + this.az2 * this.az1) * m12;
    this.k11 = (this.ax2 * this.ax2 + this.ay2 * this.ay2 + this.az2 * this.az2) * m12;
    this.k12 = (this.ax2 * this.ax3 + this.ay2 * this.ay3 + this.az2 * this.az3) * m12;
    this.k20 = (this.ax3 * this.ax1 + this.ay3 * this.ay1 + this.az3 * this.az1) * m12;
    this.k21 = (this.ax3 * this.ax2 + this.ay3 * this.ay2 + this.az3 * this.az2) * m12;
    this.k22 = (this.ax3 * this.ax3 + this.ay3 * this.ay3 + this.az3 * this.az3) * m12;
    this.k00 += this.t1x1 * this.a1x1 + this.t1y1 * this.a1y1 + this.t1z1 * this.a1z1;
    this.k01 += this.t1x1 * this.a1x2 + this.t1y1 * this.a1y2 + this.t1z1 * this.a1z2;
    this.k02 += this.t1x1 * this.a1x3 + this.t1y1 * this.a1y3 + this.t1z1 * this.a1z3;
    this.k10 += this.t1x2 * this.a1x1 + this.t1y2 * this.a1y1 + this.t1z2 * this.a1z1;
    this.k11 += this.t1x2 * this.a1x2 + this.t1y2 * this.a1y2 + this.t1z2 * this.a1z2;
    this.k12 += this.t1x2 * this.a1x3 + this.t1y2 * this.a1y3 + this.t1z2 * this.a1z3;
    this.k20 += this.t1x3 * this.a1x1 + this.t1y3 * this.a1y1 + this.t1z3 * this.a1z1;
    this.k21 += this.t1x3 * this.a1x2 + this.t1y3 * this.a1y2 + this.t1z3 * this.a1z2;
    this.k22 += this.t1x3 * this.a1x3 + this.t1y3 * this.a1y3 + this.t1z3 * this.a1z3;
    this.k00 += this.t2x1 * this.a2x1 + this.t2y1 * this.a2y1 + this.t2z1 * this.a2z1;
    this.k01 += this.t2x1 * this.a2x2 + this.t2y1 * this.a2y2 + this.t2z1 * this.a2z2;
    this.k02 += this.t2x1 * this.a2x3 + this.t2y1 * this.a2y3 + this.t2z1 * this.a2z3;
    this.k10 += this.t2x2 * this.a2x1 + this.t2y2 * this.a2y1 + this.t2z2 * this.a2z1;
    this.k11 += this.t2x2 * this.a2x2 + this.t2y2 * this.a2y2 + this.t2z2 * this.a2z2;
    this.k12 += this.t2x2 * this.a2x3 + this.t2y2 * this.a2y3 + this.t2z2 * this.a2z3;
    this.k20 += this.t2x3 * this.a2x1 + this.t2y3 * this.a2y1 + this.t2z3 * this.a2z1;
    this.k21 += this.t2x3 * this.a2x2 + this.t2y3 * this.a2y2 + this.t2z3 * this.a2z2;
    this.k22 += this.t2x3 * this.a2x3 + this.t2y3 * this.a2y3 + this.t2z3 * this.a2z3;
    this.kv00 = this.k00;
    this.kv11 = this.k11;
    this.kv22 = this.k22;
    this.dv00 = 1 / this.kv00;
    this.dv11 = 1 / this.kv11;
    this.dv22 = 1 / this.kv22;

    if (enableSpring1 && this.limitState1 != 2) {
      var omega = 6.2831853 * frequency1;
      var k = omega * omega * timeStep;
      var dmp = invTimeStep / (k + 2 * this.limitMotor1.dampingRatio * omega);
      this.cfm1 = this.kv00 * dmp;
      this.limitVelocity1 *= k * dmp;
    } else {
      this.cfm1 = 0;
      this.limitVelocity1 *= invTimeStep * 0.05;
    }

    if (enableSpring2 && this.limitState2 != 2) {
      omega = 6.2831853 * frequency2;
      k = omega * omega * timeStep;
      dmp = invTimeStep / (k + 2 * this.limitMotor2.dampingRatio * omega);
      this.cfm2 = this.kv11 * dmp;
      this.limitVelocity2 *= k * dmp;
    } else {
      this.cfm2 = 0;
      this.limitVelocity2 *= invTimeStep * 0.05;
    }

    if (enableSpring3 && this.limitState3 != 2) {
      omega = 6.2831853 * frequency3;
      k = omega * omega * timeStep;
      dmp = invTimeStep / (k + 2 * this.limitMotor3.dampingRatio * omega);
      this.cfm3 = this.kv22 * dmp;
      this.limitVelocity3 *= k * dmp;
    } else {
      this.cfm3 = 0;
      this.limitVelocity3 *= invTimeStep * 0.05;
    }

    this.k00 += this.cfm1;
    this.k11 += this.cfm2;
    this.k22 += this.cfm3;
    var inv = 1 / (this.k00 * (this.k11 * this.k22 - this.k21 * this.k12) + this.k10 * (this.k21 * this.k02 - this.k01 * this.k22) + this.k20 * (this.k01 * this.k12 - this.k11 * this.k02));
    this.d00 = (this.k11 * this.k22 - this.k12 * this.k21) * inv;
    this.d01 = (this.k02 * this.k21 - this.k01 * this.k22) * inv;
    this.d02 = (this.k01 * this.k12 - this.k02 * this.k11) * inv;
    this.d10 = (this.k12 * this.k20 - this.k10 * this.k22) * inv;
    this.d11 = (this.k00 * this.k22 - this.k02 * this.k20) * inv;
    this.d12 = (this.k02 * this.k10 - this.k00 * this.k12) * inv;
    this.d20 = (this.k10 * this.k21 - this.k11 * this.k20) * inv;
    this.d21 = (this.k01 * this.k20 - this.k00 * this.k21) * inv;
    this.d22 = (this.k00 * this.k11 - this.k01 * this.k10) * inv; // warm starting

    var totalImpulse1 = this.limitImpulse1 + this.motorImpulse1;
    var totalImpulse2 = this.limitImpulse2 + this.motorImpulse2;
    var totalImpulse3 = this.limitImpulse3 + this.motorImpulse3;
    this.l1.x += totalImpulse1 * this.l1x1 + totalImpulse2 * this.l1x2 + totalImpulse3 * this.l1x3;
    this.l1.y += totalImpulse1 * this.l1y1 + totalImpulse2 * this.l1y2 + totalImpulse3 * this.l1y3;
    this.l1.z += totalImpulse1 * this.l1z1 + totalImpulse2 * this.l1z2 + totalImpulse3 * this.l1z3;
    this.a1.x += totalImpulse1 * this.a1x1 + totalImpulse2 * this.a1x2 + totalImpulse3 * this.a1x3;
    this.a1.y += totalImpulse1 * this.a1y1 + totalImpulse2 * this.a1y2 + totalImpulse3 * this.a1y3;
    this.a1.z += totalImpulse1 * this.a1z1 + totalImpulse2 * this.a1z2 + totalImpulse3 * this.a1z3;
    this.l2.x -= totalImpulse1 * this.l2x1 + totalImpulse2 * this.l2x2 + totalImpulse3 * this.l2x3;
    this.l2.y -= totalImpulse1 * this.l2y1 + totalImpulse2 * this.l2y2 + totalImpulse3 * this.l2y3;
    this.l2.z -= totalImpulse1 * this.l2z1 + totalImpulse2 * this.l2z2 + totalImpulse3 * this.l2z3;
    this.a2.x -= totalImpulse1 * this.a2x1 + totalImpulse2 * this.a2x2 + totalImpulse3 * this.a2x3;
    this.a2.y -= totalImpulse1 * this.a2y1 + totalImpulse2 * this.a2y2 + totalImpulse3 * this.a2y3;
    this.a2.z -= totalImpulse1 * this.a2z1 + totalImpulse2 * this.a2z2 + totalImpulse3 * this.a2z3;
  },
  solve: function () {
    var rvx = this.l2.x - this.l1.x + this.a2.y * this.r2z - this.a2.z * this.r2y - this.a1.y * this.r1z + this.a1.z * this.r1y;
    var rvy = this.l2.y - this.l1.y + this.a2.z * this.r2x - this.a2.x * this.r2z - this.a1.z * this.r1x + this.a1.x * this.r1z;
    var rvz = this.l2.z - this.l1.z + this.a2.x * this.r2y - this.a2.y * this.r2x - this.a1.x * this.r1y + this.a1.y * this.r1x;
    var rvn1 = rvx * this.ax1 + rvy * this.ay1 + rvz * this.az1;
    var rvn2 = rvx * this.ax2 + rvy * this.ay2 + rvz * this.az2;
    var rvn3 = rvx * this.ax3 + rvy * this.ay3 + rvz * this.az3;
    var oldMotorImpulse1 = this.motorImpulse1;
    var oldMotorImpulse2 = this.motorImpulse2;
    var oldMotorImpulse3 = this.motorImpulse3;
    var dMotorImpulse1 = 0;
    var dMotorImpulse2 = 0;
    var dMotorImpulse3 = 0;

    if (this.enableMotor1) {
      dMotorImpulse1 = (rvn1 - this.motorSpeed1) * this.dv00;
      this.motorImpulse1 += dMotorImpulse1;

      if (this.motorImpulse1 > this.maxMotorImpulse1) {
        // clamp motor impulse
        this.motorImpulse1 = this.maxMotorImpulse1;
      } else if (this.motorImpulse1 < -this.maxMotorImpulse1) {
        this.motorImpulse1 = -this.maxMotorImpulse1;
      }

      dMotorImpulse1 = this.motorImpulse1 - oldMotorImpulse1;
    }

    if (this.enableMotor2) {
      dMotorImpulse2 = (rvn2 - this.motorSpeed2) * this.dv11;
      this.motorImpulse2 += dMotorImpulse2;

      if (this.motorImpulse2 > this.maxMotorImpulse2) {
        // clamp motor impulse
        this.motorImpulse2 = this.maxMotorImpulse2;
      } else if (this.motorImpulse2 < -this.maxMotorImpulse2) {
        this.motorImpulse2 = -this.maxMotorImpulse2;
      }

      dMotorImpulse2 = this.motorImpulse2 - oldMotorImpulse2;
    }

    if (this.enableMotor3) {
      dMotorImpulse3 = (rvn3 - this.motorSpeed3) * this.dv22;
      this.motorImpulse3 += dMotorImpulse3;

      if (this.motorImpulse3 > this.maxMotorImpulse3) {
        // clamp motor impulse
        this.motorImpulse3 = this.maxMotorImpulse3;
      } else if (this.motorImpulse3 < -this.maxMotorImpulse3) {
        this.motorImpulse3 = -this.maxMotorImpulse3;
      }

      dMotorImpulse3 = this.motorImpulse3 - oldMotorImpulse3;
    } // apply motor impulse to relative velocity


    rvn1 += dMotorImpulse1 * this.kv00 + dMotorImpulse2 * this.k01 + dMotorImpulse3 * this.k02;
    rvn2 += dMotorImpulse1 * this.k10 + dMotorImpulse2 * this.kv11 + dMotorImpulse3 * this.k12;
    rvn3 += dMotorImpulse1 * this.k20 + dMotorImpulse2 * this.k21 + dMotorImpulse3 * this.kv22; // subtract target velocity and applied impulse

    rvn1 -= this.limitVelocity1 + this.limitImpulse1 * this.cfm1;
    rvn2 -= this.limitVelocity2 + this.limitImpulse2 * this.cfm2;
    rvn3 -= this.limitVelocity3 + this.limitImpulse3 * this.cfm3;
    var oldLimitImpulse1 = this.limitImpulse1;
    var oldLimitImpulse2 = this.limitImpulse2;
    var oldLimitImpulse3 = this.limitImpulse3;
    var dLimitImpulse1 = rvn1 * this.d00 + rvn2 * this.d01 + rvn3 * this.d02;
    var dLimitImpulse2 = rvn1 * this.d10 + rvn2 * this.d11 + rvn3 * this.d12;
    var dLimitImpulse3 = rvn1 * this.d20 + rvn2 * this.d21 + rvn3 * this.d22;
    this.limitImpulse1 += dLimitImpulse1;
    this.limitImpulse2 += dLimitImpulse2;
    this.limitImpulse3 += dLimitImpulse3; // clamp

    var clampState = 0;

    if (this.limitState1 == 2 || this.limitImpulse1 * this.limitState1 < 0) {
      dLimitImpulse1 = -oldLimitImpulse1;
      rvn2 += dLimitImpulse1 * this.k10;
      rvn3 += dLimitImpulse1 * this.k20;
      clampState |= 1;
    }

    if (this.limitState2 == 2 || this.limitImpulse2 * this.limitState2 < 0) {
      dLimitImpulse2 = -oldLimitImpulse2;
      rvn1 += dLimitImpulse2 * this.k01;
      rvn3 += dLimitImpulse2 * this.k21;
      clampState |= 2;
    }

    if (this.limitState3 == 2 || this.limitImpulse3 * this.limitState3 < 0) {
      dLimitImpulse3 = -oldLimitImpulse3;
      rvn1 += dLimitImpulse3 * this.k02;
      rvn2 += dLimitImpulse3 * this.k12;
      clampState |= 4;
    } // update un-clamped impulse
    // TODO: isolate division


    var det;

    switch (clampState) {
      case 1:
        // update 2 3
        det = 1 / (this.k11 * this.k22 - this.k12 * this.k21);
        dLimitImpulse2 = (this.k22 * rvn2 + -this.k12 * rvn3) * det;
        dLimitImpulse3 = (-this.k21 * rvn2 + this.k11 * rvn3) * det;
        break;

      case 2:
        // update 1 3
        det = 1 / (this.k00 * this.k22 - this.k02 * this.k20);
        dLimitImpulse1 = (this.k22 * rvn1 + -this.k02 * rvn3) * det;
        dLimitImpulse3 = (-this.k20 * rvn1 + this.k00 * rvn3) * det;
        break;

      case 3:
        // update 3
        dLimitImpulse3 = rvn3 / this.k22;
        break;

      case 4:
        // update 1 2
        det = 1 / (this.k00 * this.k11 - this.k01 * this.k10);
        dLimitImpulse1 = (this.k11 * rvn1 + -this.k01 * rvn2) * det;
        dLimitImpulse2 = (-this.k10 * rvn1 + this.k00 * rvn2) * det;
        break;

      case 5:
        // update 2
        dLimitImpulse2 = rvn2 / this.k11;
        break;

      case 6:
        // update 1
        dLimitImpulse1 = rvn1 / this.k00;
        break;
    }

    this.limitImpulse1 = oldLimitImpulse1 + dLimitImpulse1;
    this.limitImpulse2 = oldLimitImpulse2 + dLimitImpulse2;
    this.limitImpulse3 = oldLimitImpulse3 + dLimitImpulse3;
    var dImpulse1 = dMotorImpulse1 + dLimitImpulse1;
    var dImpulse2 = dMotorImpulse2 + dLimitImpulse2;
    var dImpulse3 = dMotorImpulse3 + dLimitImpulse3; // apply impulse

    this.l1.x += dImpulse1 * this.l1x1 + dImpulse2 * this.l1x2 + dImpulse3 * this.l1x3;
    this.l1.y += dImpulse1 * this.l1y1 + dImpulse2 * this.l1y2 + dImpulse3 * this.l1y3;
    this.l1.z += dImpulse1 * this.l1z1 + dImpulse2 * this.l1z2 + dImpulse3 * this.l1z3;
    this.a1.x += dImpulse1 * this.a1x1 + dImpulse2 * this.a1x2 + dImpulse3 * this.a1x3;
    this.a1.y += dImpulse1 * this.a1y1 + dImpulse2 * this.a1y2 + dImpulse3 * this.a1y3;
    this.a1.z += dImpulse1 * this.a1z1 + dImpulse2 * this.a1z2 + dImpulse3 * this.a1z3;
    this.l2.x -= dImpulse1 * this.l2x1 + dImpulse2 * this.l2x2 + dImpulse3 * this.l2x3;
    this.l2.y -= dImpulse1 * this.l2y1 + dImpulse2 * this.l2y2 + dImpulse3 * this.l2y3;
    this.l2.z -= dImpulse1 * this.l2z1 + dImpulse2 * this.l2z2 + dImpulse3 * this.l2z3;
    this.a2.x -= dImpulse1 * this.a2x1 + dImpulse2 * this.a2x2 + dImpulse3 * this.a2x3;
    this.a2.y -= dImpulse1 * this.a2y1 + dImpulse2 * this.a2y2 + dImpulse3 * this.a2y3;
    this.a2.z -= dImpulse1 * this.a2z1 + dImpulse2 * this.a2z2 + dImpulse3 * this.a2z3;
  }
});
/**
 * A prismatic joint allows only for relative translation of rigid bodies along the axis.
 *
 * @author saharan
 * @author lo-th
 */

function PrismaticJoint(config, lowerTranslation, upperTranslation) {
  Joint.call(this, config);
  this.type = JOINT_PRISMATIC; // The axis in the first body's coordinate system.

  this.localAxis1 = config.localAxis1.clone().normalize(); // The axis in the second body's coordinate system.

  this.localAxis2 = config.localAxis2.clone().normalize();
  this.ax1 = new Vec3();
  this.ax2 = new Vec3();
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3();
  this.ac = new AngularConstraint(this, new Quat().setFromUnitVectors(this.localAxis1, this.localAxis2)); // The translational limit and motor information of the joint.

  this.limitMotor = new LimitMotor(this.nor, true);
  this.limitMotor.lowerLimit = lowerTranslation;
  this.limitMotor.upperLimit = upperTranslation;
  this.t3 = new Translational3Constraint(this, this.limitMotor, new LimitMotor(this.tan, true), new LimitMotor(this.bin, true));
}

PrismaticJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: PrismaticJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, true);
    this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, true); // normal tangent binormal

    this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize();
    this.tan.tangent(this.nor).normalize();
    this.bin.crossVectors(this.nor, this.tan); // preSolve

    this.ac.preSolve(timeStep, invTimeStep);
    this.t3.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.ac.solve();
    this.t3.solve();
  },
  postSolve: function () {}
});
/**
 * A slider joint allows for relative translation and relative rotation between two rigid bodies along the axis.
 *
 * @author saharan
 * @author lo-th
 */

function SliderJoint(config, lowerTranslation, upperTranslation) {
  Joint.call(this, config);
  this.type = JOINT_SLIDER; // The axis in the first body's coordinate system.

  this.localAxis1 = config.localAxis1.clone().normalize(); // The axis in the second body's coordinate system.

  this.localAxis2 = config.localAxis2.clone().normalize(); // make angle axis

  var arc = new Mat33().setQuat(new Quat().setFromUnitVectors(this.localAxis1, this.localAxis2));
  this.localAngle1 = new Vec3().tangent(this.localAxis1).normalize();
  this.localAngle2 = this.localAngle1.clone().applyMatrix3(arc, true);
  this.ax1 = new Vec3();
  this.ax2 = new Vec3();
  this.an1 = new Vec3();
  this.an2 = new Vec3();
  this.tmp = new Vec3();
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3(); // The limit and motor for the rotation

  this.rotationalLimitMotor = new LimitMotor(this.nor, false);
  this.r3 = new Rotational3Constraint(this, this.rotationalLimitMotor, new LimitMotor(this.tan, true), new LimitMotor(this.bin, true)); // The limit and motor for the translation.

  this.translationalLimitMotor = new LimitMotor(this.nor, true);
  this.translationalLimitMotor.lowerLimit = lowerTranslation;
  this.translationalLimitMotor.upperLimit = upperTranslation;
  this.t3 = new Translational3Constraint(this, this.translationalLimitMotor, new LimitMotor(this.tan, true), new LimitMotor(this.bin, true));
}

SliderJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: SliderJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, true);
    this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, true);
    this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, true);
    this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, true); // normal tangent binormal

    this.nor.set(this.ax1.x * this.body2.inverseMass + this.ax2.x * this.body1.inverseMass, this.ax1.y * this.body2.inverseMass + this.ax2.y * this.body1.inverseMass, this.ax1.z * this.body2.inverseMass + this.ax2.z * this.body1.inverseMass).normalize();
    this.tan.tangent(this.nor).normalize();
    this.bin.crossVectors(this.nor, this.tan); // calculate hinge angle

    this.tmp.crossVectors(this.an1, this.an2);

    var limite = _Math.acosClamp(_Math.dotVectors(this.an1, this.an2));

    if (_Math.dotVectors(this.nor, this.tmp) < 0) this.rotationalLimitMotor.angle = -limite;else this.rotationalLimitMotor.angle = limite; // angular error

    this.tmp.crossVectors(this.ax1, this.ax2);
    this.r3.limitMotor2.angle = _Math.dotVectors(this.tan, this.tmp);
    this.r3.limitMotor3.angle = _Math.dotVectors(this.bin, this.tmp); // preSolve

    this.r3.preSolve(timeStep, invTimeStep);
    this.t3.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.r3.solve();
    this.t3.solve();
  },
  postSolve: function () {}
});
/**
 * A wheel joint allows for relative rotation between two rigid bodies along two axes.
 * The wheel joint also allows for relative translation for the suspension.
 *
 * @author saharan
 * @author lo-th
 */

function WheelJoint(config) {
  Joint.call(this, config);
  this.type = JOINT_WHEEL; // The axis in the first body's coordinate system.

  this.localAxis1 = config.localAxis1.clone().normalize(); // The axis in the second body's coordinate system.

  this.localAxis2 = config.localAxis2.clone().normalize();
  this.localAngle1 = new Vec3();
  this.localAngle2 = new Vec3();

  var dot = _Math.dotVectors(this.localAxis1, this.localAxis2);

  if (dot > -1 && dot < 1) {
    this.localAngle1.set(this.localAxis2.x - dot * this.localAxis1.x, this.localAxis2.y - dot * this.localAxis1.y, this.localAxis2.z - dot * this.localAxis1.z).normalize();
    this.localAngle2.set(this.localAxis1.x - dot * this.localAxis2.x, this.localAxis1.y - dot * this.localAxis2.y, this.localAxis1.z - dot * this.localAxis2.z).normalize();
  } else {
    var arc = new Mat33().setQuat(new Quat().setFromUnitVectors(this.localAxis1, this.localAxis2));
    this.localAngle1.tangent(this.localAxis1).normalize();
    this.localAngle2 = this.localAngle1.clone().applyMatrix3(arc, true);
  }

  this.ax1 = new Vec3();
  this.ax2 = new Vec3();
  this.an1 = new Vec3();
  this.an2 = new Vec3();
  this.tmp = new Vec3();
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3(); // The translational limit and motor information of the joint.

  this.translationalLimitMotor = new LimitMotor(this.tan, true);
  this.translationalLimitMotor.frequency = 8;
  this.translationalLimitMotor.dampingRatio = 1; // The first rotational limit and motor information of the joint.

  this.rotationalLimitMotor1 = new LimitMotor(this.tan, false); // The second rotational limit and motor information of the joint.

  this.rotationalLimitMotor2 = new LimitMotor(this.bin, false);
  this.t3 = new Translational3Constraint(this, new LimitMotor(this.nor, true), this.translationalLimitMotor, new LimitMotor(this.bin, true));
  this.t3.weight = 1;
  this.r3 = new Rotational3Constraint(this, new LimitMotor(this.nor, true), this.rotationalLimitMotor1, this.rotationalLimitMotor2);
}

WheelJoint.prototype = Object.assign(Object.create(Joint.prototype), {
  constructor: WheelJoint,
  preSolve: function (timeStep, invTimeStep) {
    this.updateAnchorPoints();
    this.ax1.copy(this.localAxis1).applyMatrix3(this.body1.rotation, true);
    this.an1.copy(this.localAngle1).applyMatrix3(this.body1.rotation, true);
    this.ax2.copy(this.localAxis2).applyMatrix3(this.body2.rotation, true);
    this.an2.copy(this.localAngle2).applyMatrix3(this.body2.rotation, true);
    this.r3.limitMotor1.angle = _Math.dotVectors(this.ax1, this.ax2);

    var limite = _Math.dotVectors(this.an1, this.ax2);

    if (_Math.dotVectors(this.ax1, this.tmp.crossVectors(this.an1, this.ax2)) < 0) this.rotationalLimitMotor1.angle = -limite;else this.rotationalLimitMotor1.angle = limite;
    limite = _Math.dotVectors(this.an2, this.ax1);
    if (_Math.dotVectors(this.ax2, this.tmp.crossVectors(this.an2, this.ax1)) < 0) this.rotationalLimitMotor2.angle = -limite;else this.rotationalLimitMotor2.angle = limite;
    this.nor.crossVectors(this.ax1, this.ax2).normalize();
    this.tan.crossVectors(this.nor, this.ax2).normalize();
    this.bin.crossVectors(this.nor, this.ax1).normalize();
    this.r3.preSolve(timeStep, invTimeStep);
    this.t3.preSolve(timeStep, invTimeStep);
  },
  solve: function () {
    this.r3.solve();
    this.t3.solve();
  },
  postSolve: function () {}
});

function JointConfig() {
  this.scale = 1;
  this.invScale = 1; // The first rigid body of the joint.

  this.body1 = null; // The second rigid body of the joint.

  this.body2 = null; // The anchor point on the first rigid body in local coordinate system.

  this.localAnchorPoint1 = new Vec3(); //  The anchor point on the second rigid body in local coordinate system.

  this.localAnchorPoint2 = new Vec3(); // The axis in the first body's coordinate system.
  // his property is available in some joints.

  this.localAxis1 = new Vec3(); // The axis in the second body's coordinate system.
  // This property is available in some joints.

  this.localAxis2 = new Vec3(); //  Whether allow collision between connected rigid bodies or not.

  this.allowCollision = false;
}
/**
 * This class holds mass information of a shape.
 * @author lo-th
 * @author saharan
 */


function MassInfo() {
  // Mass of the shape.
  this.mass = 0; // The moment inertia of the shape.

  this.inertia = new Mat33();
}
/**
* A link list of contacts.
* @author saharan
*/


function ContactLink(contact) {
  // The previous contact link.
  this.prev = null; // The next contact link.

  this.next = null; // The shape of the contact.

  this.shape = null; // The other rigid body.

  this.body = null; // The contact of the link.

  this.contact = contact;
}

function ImpulseDataBuffer() {
  this.lp1X = NaN;
  this.lp1Y = NaN;
  this.lp1Z = NaN;
  this.lp2X = NaN;
  this.lp2Y = NaN;
  this.lp2Z = NaN;
  this.impulse = NaN;
}
/**
* The class holds details of the contact point.
* @author saharan
*/


function ManifoldPoint() {
  // Whether this manifold point is persisting or not.
  this.warmStarted = false; //  The position of this manifold point.

  this.position = new Vec3(); // The position in the first shape's coordinate.

  this.localPoint1 = new Vec3(); //  The position in the second shape's coordinate.

  this.localPoint2 = new Vec3(); // The normal vector of this manifold point.

  this.normal = new Vec3(); // The tangent vector of this manifold point.

  this.tangent = new Vec3(); // The binormal vector of this manifold point.

  this.binormal = new Vec3(); // The impulse in normal direction.

  this.normalImpulse = 0; // The impulse in tangent direction.

  this.tangentImpulse = 0; // The impulse in binormal direction.

  this.binormalImpulse = 0; // The denominator in normal direction.

  this.normalDenominator = 0; // The denominator in tangent direction.

  this.tangentDenominator = 0; // The denominator in binormal direction.

  this.binormalDenominator = 0; // The depth of penetration.

  this.penetration = 0;
}
/**
* A contact manifold between two shapes.
* @author saharan
* @author lo-th
*/


function ContactManifold() {
  // The first rigid body.
  this.body1 = null; // The second rigid body.

  this.body2 = null; // The number of manifold points.

  this.numPoints = 0; // The manifold points.

  this.points = [new ManifoldPoint(), new ManifoldPoint(), new ManifoldPoint(), new ManifoldPoint()];
}

ContactManifold.prototype = {
  constructor: ContactManifold,
  //Reset the manifold.
  reset: function (shape1, shape2) {
    this.body1 = shape1.parent;
    this.body2 = shape2.parent;
    this.numPoints = 0;
  },
  //  Add a point into this manifold.
  addPointVec: function (pos, norm, penetration, flip) {
    var p = this.points[this.numPoints++];
    p.position.copy(pos);
    p.localPoint1.sub(pos, this.body1.position).applyMatrix3(this.body1.rotation);
    p.localPoint2.sub(pos, this.body2.position).applyMatrix3(this.body2.rotation);
    p.normal.copy(norm);
    if (flip) p.normal.negate();
    p.normalImpulse = 0;
    p.penetration = penetration;
    p.warmStarted = false;
  },
  //  Add a point into this manifold.
  addPoint: function (x, y, z, nx, ny, nz, penetration, flip) {
    var p = this.points[this.numPoints++];
    p.position.set(x, y, z);
    p.localPoint1.sub(p.position, this.body1.position).applyMatrix3(this.body1.rotation);
    p.localPoint2.sub(p.position, this.body2.position).applyMatrix3(this.body2.rotation);
    p.normalImpulse = 0;
    p.normal.set(nx, ny, nz);
    if (flip) p.normal.negate();
    p.penetration = penetration;
    p.warmStarted = false;
  }
};

function ContactPointDataBuffer() {
  this.nor = new Vec3();
  this.tan = new Vec3();
  this.bin = new Vec3();
  this.norU1 = new Vec3();
  this.tanU1 = new Vec3();
  this.binU1 = new Vec3();
  this.norU2 = new Vec3();
  this.tanU2 = new Vec3();
  this.binU2 = new Vec3();
  this.norT1 = new Vec3();
  this.tanT1 = new Vec3();
  this.binT1 = new Vec3();
  this.norT2 = new Vec3();
  this.tanT2 = new Vec3();
  this.binT2 = new Vec3();
  this.norTU1 = new Vec3();
  this.tanTU1 = new Vec3();
  this.binTU1 = new Vec3();
  this.norTU2 = new Vec3();
  this.tanTU2 = new Vec3();
  this.binTU2 = new Vec3();
  this.norImp = 0;
  this.tanImp = 0;
  this.binImp = 0;
  this.norDen = 0;
  this.tanDen = 0;
  this.binDen = 0;
  this.norTar = 0;
  this.next = null;
  this.last = false;
}
/**
* ...
* @author saharan
*/


function ContactConstraint(manifold) {
  Constraint.call(this); // The contact manifold of the constraint.

  this.manifold = manifold; // The coefficient of restitution of the constraint.

  this.restitution = NaN; // The coefficient of friction of the constraint.

  this.friction = NaN;
  this.p1 = null;
  this.p2 = null;
  this.lv1 = null;
  this.lv2 = null;
  this.av1 = null;
  this.av2 = null;
  this.i1 = null;
  this.i2 = null; //this.ii1 = null;
  //this.ii2 = null;

  this.tmp = new Vec3();
  this.tmpC1 = new Vec3();
  this.tmpC2 = new Vec3();
  this.tmpP1 = new Vec3();
  this.tmpP2 = new Vec3();
  this.tmplv1 = new Vec3();
  this.tmplv2 = new Vec3();
  this.tmpav1 = new Vec3();
  this.tmpav2 = new Vec3();
  this.m1 = NaN;
  this.m2 = NaN;
  this.num = 0;
  this.ps = manifold.points;
  this.cs = new ContactPointDataBuffer();
  this.cs.next = new ContactPointDataBuffer();
  this.cs.next.next = new ContactPointDataBuffer();
  this.cs.next.next.next = new ContactPointDataBuffer();
}

ContactConstraint.prototype = Object.assign(Object.create(Constraint.prototype), {
  constructor: ContactConstraint,
  // Attach the constraint to the bodies.
  attach: function () {
    this.p1 = this.body1.position;
    this.p2 = this.body2.position;
    this.lv1 = this.body1.linearVelocity;
    this.av1 = this.body1.angularVelocity;
    this.lv2 = this.body2.linearVelocity;
    this.av2 = this.body2.angularVelocity;
    this.i1 = this.body1.inverseInertia;
    this.i2 = this.body2.inverseInertia;
  },
  // Detach the constraint from the bodies.
  detach: function () {
    this.p1 = null;
    this.p2 = null;
    this.lv1 = null;
    this.lv2 = null;
    this.av1 = null;
    this.av2 = null;
    this.i1 = null;
    this.i2 = null;
  },
  preSolve: function (timeStep, invTimeStep) {
    this.m1 = this.body1.inverseMass;
    this.m2 = this.body2.inverseMass;
    var m1m2 = this.m1 + this.m2;
    this.num = this.manifold.numPoints;
    var c = this.cs;
    var p, rvn, len, norImp, norTar, sepV, i1, i2;

    for (var i = 0; i < this.num; i++) {
      p = this.ps[i];
      this.tmpP1.sub(p.position, this.p1);
      this.tmpP2.sub(p.position, this.p2);
      this.tmpC1.crossVectors(this.av1, this.tmpP1);
      this.tmpC2.crossVectors(this.av2, this.tmpP2);
      c.norImp = p.normalImpulse;
      c.tanImp = p.tangentImpulse;
      c.binImp = p.binormalImpulse;
      c.nor.copy(p.normal);
      this.tmp.set(this.lv2.x + this.tmpC2.x - (this.lv1.x + this.tmpC1.x), this.lv2.y + this.tmpC2.y - (this.lv1.y + this.tmpC1.y), this.lv2.z + this.tmpC2.z - (this.lv1.z + this.tmpC1.z));
      rvn = _Math.dotVectors(c.nor, this.tmp);
      c.tan.set(this.tmp.x - rvn * c.nor.x, this.tmp.y - rvn * c.nor.y, this.tmp.z - rvn * c.nor.z);
      len = _Math.dotVectors(c.tan, c.tan);

      if (len <= 0.04) {
        c.tan.tangent(c.nor);
      }

      c.tan.normalize();
      c.bin.crossVectors(c.nor, c.tan);
      c.norU1.scale(c.nor, this.m1);
      c.norU2.scale(c.nor, this.m2);
      c.tanU1.scale(c.tan, this.m1);
      c.tanU2.scale(c.tan, this.m2);
      c.binU1.scale(c.bin, this.m1);
      c.binU2.scale(c.bin, this.m2);
      c.norT1.crossVectors(this.tmpP1, c.nor);
      c.tanT1.crossVectors(this.tmpP1, c.tan);
      c.binT1.crossVectors(this.tmpP1, c.bin);
      c.norT2.crossVectors(this.tmpP2, c.nor);
      c.tanT2.crossVectors(this.tmpP2, c.tan);
      c.binT2.crossVectors(this.tmpP2, c.bin);
      i1 = this.i1;
      i2 = this.i2;
      c.norTU1.copy(c.norT1).applyMatrix3(i1, true);
      c.tanTU1.copy(c.tanT1).applyMatrix3(i1, true);
      c.binTU1.copy(c.binT1).applyMatrix3(i1, true);
      c.norTU2.copy(c.norT2).applyMatrix3(i2, true);
      c.tanTU2.copy(c.tanT2).applyMatrix3(i2, true);
      c.binTU2.copy(c.binT2).applyMatrix3(i2, true);
      /*c.norTU1.mulMat( this.i1, c.norT1 );
      c.tanTU1.mulMat( this.i1, c.tanT1 );
      c.binTU1.mulMat( this.i1, c.binT1 );
       c.norTU2.mulMat( this.i2, c.norT2 );
      c.tanTU2.mulMat( this.i2, c.tanT2 );
      c.binTU2.mulMat( this.i2, c.binT2 );*/

      this.tmpC1.crossVectors(c.norTU1, this.tmpP1);
      this.tmpC2.crossVectors(c.norTU2, this.tmpP2);
      this.tmp.add(this.tmpC1, this.tmpC2);
      c.norDen = 1 / (m1m2 + _Math.dotVectors(c.nor, this.tmp));
      this.tmpC1.crossVectors(c.tanTU1, this.tmpP1);
      this.tmpC2.crossVectors(c.tanTU2, this.tmpP2);
      this.tmp.add(this.tmpC1, this.tmpC2);
      c.tanDen = 1 / (m1m2 + _Math.dotVectors(c.tan, this.tmp));
      this.tmpC1.crossVectors(c.binTU1, this.tmpP1);
      this.tmpC2.crossVectors(c.binTU2, this.tmpP2);
      this.tmp.add(this.tmpC1, this.tmpC2);
      c.binDen = 1 / (m1m2 + _Math.dotVectors(c.bin, this.tmp));

      if (p.warmStarted) {
        norImp = p.normalImpulse;
        this.lv1.addScaledVector(c.norU1, norImp);
        this.av1.addScaledVector(c.norTU1, norImp);
        this.lv2.subScaledVector(c.norU2, norImp);
        this.av2.subScaledVector(c.norTU2, norImp);
        c.norImp = norImp;
        c.tanImp = 0;
        c.binImp = 0;
        rvn = 0; // disable bouncing
      } else {
        c.norImp = 0;
        c.tanImp = 0;
        c.binImp = 0;
      }

      if (rvn > -1) rvn = 0; // disable bouncing

      norTar = this.restitution * -rvn;
      sepV = -(p.penetration + 0.005) * invTimeStep * 0.05; // allow 0.5cm error

      if (norTar < sepV) norTar = sepV;
      c.norTar = norTar;
      c.last = i == this.num - 1;
      c = c.next;
    }
  },
  solve: function () {
    this.tmplv1.copy(this.lv1);
    this.tmplv2.copy(this.lv2);
    this.tmpav1.copy(this.av1);
    this.tmpav2.copy(this.av2);
    var oldImp1, newImp1, oldImp2, newImp2, rvn, norImp, tanImp, binImp, max, len;
    var c = this.cs;

    while (true) {
      norImp = c.norImp;
      tanImp = c.tanImp;
      binImp = c.binImp;
      max = -norImp * this.friction;
      this.tmp.sub(this.tmplv2, this.tmplv1);
      rvn = _Math.dotVectors(this.tmp, c.tan) + _Math.dotVectors(this.tmpav2, c.tanT2) - _Math.dotVectors(this.tmpav1, c.tanT1);
      oldImp1 = tanImp;
      newImp1 = rvn * c.tanDen;
      tanImp += newImp1;
      rvn = _Math.dotVectors(this.tmp, c.bin) + _Math.dotVectors(this.tmpav2, c.binT2) - _Math.dotVectors(this.tmpav1, c.binT1);
      oldImp2 = binImp;
      newImp2 = rvn * c.binDen;
      binImp += newImp2; // cone friction clamp

      len = tanImp * tanImp + binImp * binImp;

      if (len > max * max) {
        len = max / _Math.sqrt(len);
        tanImp *= len;
        binImp *= len;
      }

      newImp1 = tanImp - oldImp1;
      newImp2 = binImp - oldImp2; //

      this.tmp.set(c.tanU1.x * newImp1 + c.binU1.x * newImp2, c.tanU1.y * newImp1 + c.binU1.y * newImp2, c.tanU1.z * newImp1 + c.binU1.z * newImp2);
      this.tmplv1.addEqual(this.tmp);
      this.tmp.set(c.tanTU1.x * newImp1 + c.binTU1.x * newImp2, c.tanTU1.y * newImp1 + c.binTU1.y * newImp2, c.tanTU1.z * newImp1 + c.binTU1.z * newImp2);
      this.tmpav1.addEqual(this.tmp);
      this.tmp.set(c.tanU2.x * newImp1 + c.binU2.x * newImp2, c.tanU2.y * newImp1 + c.binU2.y * newImp2, c.tanU2.z * newImp1 + c.binU2.z * newImp2);
      this.tmplv2.subEqual(this.tmp);
      this.tmp.set(c.tanTU2.x * newImp1 + c.binTU2.x * newImp2, c.tanTU2.y * newImp1 + c.binTU2.y * newImp2, c.tanTU2.z * newImp1 + c.binTU2.z * newImp2);
      this.tmpav2.subEqual(this.tmp); // restitution part

      this.tmp.sub(this.tmplv2, this.tmplv1);
      rvn = _Math.dotVectors(this.tmp, c.nor) + _Math.dotVectors(this.tmpav2, c.norT2) - _Math.dotVectors(this.tmpav1, c.norT1);
      oldImp1 = norImp;
      newImp1 = (rvn - c.norTar) * c.norDen;
      norImp += newImp1;
      if (norImp > 0) norImp = 0;
      newImp1 = norImp - oldImp1;
      this.tmplv1.addScaledVector(c.norU1, newImp1);
      this.tmpav1.addScaledVector(c.norTU1, newImp1);
      this.tmplv2.subScaledVector(c.norU2, newImp1);
      this.tmpav2.subScaledVector(c.norTU2, newImp1);
      c.norImp = norImp;
      c.tanImp = tanImp;
      c.binImp = binImp;
      if (c.last) break;
      c = c.next;
    }

    this.lv1.copy(this.tmplv1);
    this.lv2.copy(this.tmplv2);
    this.av1.copy(this.tmpav1);
    this.av2.copy(this.tmpav2);
  },
  postSolve: function () {
    var c = this.cs,
        p;
    var i = this.num;

    while (i--) {
      //for(var i=0;i<this.num;i++){
      p = this.ps[i];
      p.normal.copy(c.nor);
      p.tangent.copy(c.tan);
      p.binormal.copy(c.bin);
      p.normalImpulse = c.norImp;
      p.tangentImpulse = c.tanImp;
      p.binormalImpulse = c.binImp;
      p.normalDenominator = c.norDen;
      p.tangentDenominator = c.tanDen;
      p.binormalDenominator = c.binDen;
      c = c.next;
    }
  }
});
/**
* A contact is a pair of shapes whose axis-aligned bounding boxes are overlapping.
* @author saharan
*/

function Contact() {
  // The first shape.
  this.shape1 = null; // The second shape.

  this.shape2 = null; // The first rigid body.

  this.body1 = null; // The second rigid body.

  this.body2 = null; // The previous contact in the world.

  this.prev = null; // The next contact in the world.

  this.next = null; // Internal

  this.persisting = false; // Whether both the rigid bodies are sleeping or not.

  this.sleeping = false; // The collision detector between two shapes.

  this.detector = null; // The contact constraint of the contact.

  this.constraint = null; // Whether the shapes are touching or not.

  this.touching = false; // shapes is very close and touching 

  this.close = false;
  this.dist = _Math.INF;
  this.b1Link = new ContactLink(this);
  this.b2Link = new ContactLink(this);
  this.s1Link = new ContactLink(this);
  this.s2Link = new ContactLink(this); // The contact manifold of the contact.

  this.manifold = new ContactManifold();
  this.buffer = [new ImpulseDataBuffer(), new ImpulseDataBuffer(), new ImpulseDataBuffer(), new ImpulseDataBuffer()];
  this.points = this.manifold.points;
  this.constraint = new ContactConstraint(this.manifold);
}

Object.assign(Contact.prototype, {
  Contact: true,
  mixRestitution: function (restitution1, restitution2) {
    return _Math.sqrt(restitution1 * restitution2);
  },
  mixFriction: function (friction1, friction2) {
    return _Math.sqrt(friction1 * friction2);
  },

  /**
  * Update the contact manifold.
  */
  updateManifold: function () {
    this.constraint.restitution = this.mixRestitution(this.shape1.restitution, this.shape2.restitution);
    this.constraint.friction = this.mixFriction(this.shape1.friction, this.shape2.friction);
    var numBuffers = this.manifold.numPoints;
    var i = numBuffers;

    while (i--) {
      //for(var i=0;i<numBuffers;i++){
      var b = this.buffer[i];
      var p = this.points[i];
      b.lp1X = p.localPoint1.x;
      b.lp1Y = p.localPoint1.y;
      b.lp1Z = p.localPoint1.z;
      b.lp2X = p.localPoint2.x;
      b.lp2Y = p.localPoint2.y;
      b.lp2Z = p.localPoint2.z;
      b.impulse = p.normalImpulse;
    }

    this.manifold.numPoints = 0;
    this.detector.detectCollision(this.shape1, this.shape2, this.manifold);
    var num = this.manifold.numPoints;

    if (num == 0) {
      this.touching = false;
      this.close = false;
      this.dist = _Math.INF;
      return;
    }

    if (this.touching || this.dist < 0.001) this.close = true;
    this.touching = true;
    i = num;

    while (i--) {
      //for(i=0; i<num; i++){
      p = this.points[i];
      var lp1x = p.localPoint1.x;
      var lp1y = p.localPoint1.y;
      var lp1z = p.localPoint1.z;
      var lp2x = p.localPoint2.x;
      var lp2y = p.localPoint2.y;
      var lp2z = p.localPoint2.z;
      var index = -1;
      var minDistance = 0.0004;
      var j = numBuffers;

      while (j--) {
        //for(var j=0;j<numBuffers;j++){
        b = this.buffer[j];
        var dx = b.lp1X - lp1x;
        var dy = b.lp1Y - lp1y;
        var dz = b.lp1Z - lp1z;
        var distance1 = dx * dx + dy * dy + dz * dz;
        dx = b.lp2X - lp2x;
        dy = b.lp2Y - lp2y;
        dz = b.lp2Z - lp2z;
        var distance2 = dx * dx + dy * dy + dz * dz;

        if (distance1 < distance2) {
          if (distance1 < minDistance) {
            minDistance = distance1;
            index = j;
          }
        } else {
          if (distance2 < minDistance) {
            minDistance = distance2;
            index = j;
          }
        }

        if (minDistance < this.dist) this.dist = minDistance;
      }

      if (index != -1) {
        var tmp = this.buffer[index];
        this.buffer[index] = this.buffer[--numBuffers];
        this.buffer[numBuffers] = tmp;
        p.normalImpulse = tmp.impulse;
        p.warmStarted = true;
      } else {
        p.normalImpulse = 0;
        p.warmStarted = false;
      }
    }
  },

  /**
  * Attach the contact to the shapes.
  * @param   shape1
  * @param   shape2
  */
  attach: function (shape1, shape2) {
    this.shape1 = shape1;
    this.shape2 = shape2;
    this.body1 = shape1.parent;
    this.body2 = shape2.parent;
    this.manifold.body1 = this.body1;
    this.manifold.body2 = this.body2;
    this.constraint.body1 = this.body1;
    this.constraint.body2 = this.body2;
    this.constraint.attach();
    this.s1Link.shape = shape2;
    this.s1Link.body = this.body2;
    this.s2Link.shape = shape1;
    this.s2Link.body = this.body1;
    if (shape1.contactLink != null) (this.s1Link.next = shape1.contactLink).prev = this.s1Link;else this.s1Link.next = null;
    shape1.contactLink = this.s1Link;
    shape1.numContacts++;
    if (shape2.contactLink != null) (this.s2Link.next = shape2.contactLink).prev = this.s2Link;else this.s2Link.next = null;
    shape2.contactLink = this.s2Link;
    shape2.numContacts++;
    this.b1Link.shape = shape2;
    this.b1Link.body = this.body2;
    this.b2Link.shape = shape1;
    this.b2Link.body = this.body1;
    if (this.body1.contactLink != null) (this.b1Link.next = this.body1.contactLink).prev = this.b1Link;else this.b1Link.next = null;
    this.body1.contactLink = this.b1Link;
    this.body1.numContacts++;
    if (this.body2.contactLink != null) (this.b2Link.next = this.body2.contactLink).prev = this.b2Link;else this.b2Link.next = null;
    this.body2.contactLink = this.b2Link;
    this.body2.numContacts++;
    this.prev = null;
    this.next = null;
    this.persisting = true;
    this.sleeping = this.body1.sleeping && this.body2.sleeping;
    this.manifold.numPoints = 0;
  },

  /**
  * Detach the contact from the shapes.
  */
  detach: function () {
    var prev = this.s1Link.prev;
    var next = this.s1Link.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.shape1.contactLink == this.s1Link) this.shape1.contactLink = next;
    this.s1Link.prev = null;
    this.s1Link.next = null;
    this.s1Link.shape = null;
    this.s1Link.body = null;
    this.shape1.numContacts--;
    prev = this.s2Link.prev;
    next = this.s2Link.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.shape2.contactLink == this.s2Link) this.shape2.contactLink = next;
    this.s2Link.prev = null;
    this.s2Link.next = null;
    this.s2Link.shape = null;
    this.s2Link.body = null;
    this.shape2.numContacts--;
    prev = this.b1Link.prev;
    next = this.b1Link.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.body1.contactLink == this.b1Link) this.body1.contactLink = next;
    this.b1Link.prev = null;
    this.b1Link.next = null;
    this.b1Link.shape = null;
    this.b1Link.body = null;
    this.body1.numContacts--;
    prev = this.b2Link.prev;
    next = this.b2Link.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.body2.contactLink == this.b2Link) this.body2.contactLink = next;
    this.b2Link.prev = null;
    this.b2Link.next = null;
    this.b2Link.shape = null;
    this.b2Link.body = null;
    this.body2.numContacts--;
    this.manifold.body1 = null;
    this.manifold.body2 = null;
    this.constraint.body1 = null;
    this.constraint.body2 = null;
    this.constraint.detach();
    this.shape1 = null;
    this.shape2 = null;
    this.body1 = null;
    this.body2 = null;
  }
});
/**
* The class of rigid body.
* Rigid body has the shape of a single or multiple collision processing,
* I can set the parameters individually.
* @author saharan
* @author lo-th
*/

function RigidBody(Position, Rotation) {
  this.position = Position || new Vec3();
  this.orientation = Rotation || new Quat();
  this.scale = 1;
  this.invScale = 1; // possible link to three Mesh;

  this.mesh = null;
  this.id = NaN;
  this.name = ""; // The maximum number of shapes that can be added to a one rigid.
  //this.MAX_SHAPES = 64;//64;

  this.prev = null;
  this.next = null; // I represent the kind of rigid body.
  // Please do not change from the outside this variable.
  // If you want to change the type of rigid body, always
  // Please specify the type you want to set the arguments of setupMass method.

  this.type = BODY_NULL;
  this.massInfo = new MassInfo();
  this.newPosition = new Vec3();
  this.controlPos = false;
  this.newOrientation = new Quat();
  this.newRotation = new Vec3();
  this.currentRotation = new Vec3();
  this.controlRot = false;
  this.controlRotInTime = false;
  this.quaternion = new Quat();
  this.pos = new Vec3(); // Is the translational velocity.

  this.linearVelocity = new Vec3(); // Is the angular velocity.

  this.angularVelocity = new Vec3(); //--------------------------------------------
  //  Please do not change from the outside this variables.
  //--------------------------------------------
  // It is a world that rigid body has been added.

  this.parent = null;
  this.contactLink = null;
  this.numContacts = 0; // An array of shapes that are included in the rigid body.

  this.shapes = null; // The number of shapes that are included in the rigid body.

  this.numShapes = 0; // It is the link array of joint that is connected to the rigid body.

  this.jointLink = null; // The number of joints that are connected to the rigid body.

  this.numJoints = 0; // It is the world coordinate of the center of gravity in the sleep just before.

  this.sleepPosition = new Vec3(); // It is a quaternion that represents the attitude of sleep just before.

  this.sleepOrientation = new Quat(); // I will show this rigid body to determine whether it is a rigid body static.

  this.isStatic = false; // I indicates that this rigid body to determine whether it is a rigid body dynamic.

  this.isDynamic = false;
  this.isKinematic = false; // It is a rotation matrix representing the orientation.

  this.rotation = new Mat33(); //--------------------------------------------
  // It will be recalculated automatically from the shape, which is included.
  //--------------------------------------------
  // This is the weight.

  this.mass = 0; // It is the reciprocal of the mass.

  this.inverseMass = 0; // It is the inverse of the inertia tensor in the world system.

  this.inverseInertia = new Mat33(); // It is the inertia tensor in the initial state.

  this.localInertia = new Mat33(); // It is the inverse of the inertia tensor in the initial state.

  this.inverseLocalInertia = new Mat33();
  this.tmpInertia = new Mat33(); // I indicates rigid body whether it has been added to the simulation Island.

  this.addedToIsland = false; // It shows how to sleep rigid body.

  this.allowSleep = true; // This is the time from when the rigid body at rest.

  this.sleepTime = 0; // I shows rigid body to determine whether it is a sleep state.

  this.sleeping = false;
}

Object.assign(RigidBody.prototype, {
  setParent: function (world) {
    this.parent = world;
    this.scale = this.parent.scale;
    this.invScale = this.parent.invScale;
    this.id = this.parent.numRigidBodies;
    if (!this.name) this.name = this.id;
    this.updateMesh();
  },

  /**
   * I'll add a shape to rigid body.
   * If you add a shape, please call the setupMass method to step up to the start of the next.
   * @param   shape shape to Add
   */
  addShape: function (shape) {
    if (shape.parent) {
      printError("RigidBody", "It is not possible that you add a shape which already has an associated body.");
    }

    if (this.shapes != null) (this.shapes.prev = shape).next = this.shapes;
    this.shapes = shape;
    shape.parent = this;
    if (this.parent) this.parent.addShape(shape);
    this.numShapes++;
  },

  /**
   * I will delete the shape from the rigid body.
   * If you delete a shape, please call the setupMass method to step up to the start of the next.
   * @param shape {Shape} to delete
   * @return void
   */
  removeShape: function (shape) {
    var remove = shape;
    if (remove.parent != this) return;
    var prev = remove.prev;
    var next = remove.next;
    if (prev != null) prev.next = next;
    if (next != null) next.prev = prev;
    if (this.shapes == remove) this.shapes = next;
    remove.prev = null;
    remove.next = null;
    remove.parent = null;
    if (this.parent) this.parent.removeShape(remove);
    this.numShapes--;
  },
  remove: function () {
    this.dispose();
  },
  dispose: function () {
    this.parent.removeRigidBody(this);
  },
  checkContact: function (name) {
    this.parent.checkContact(this.name, name);
  },

  /**
   * Calulates mass datas(center of gravity, mass, moment inertia, etc...).
   * If the parameter type is set to BODY_STATIC, the rigid body will be fixed to the space.
   * If the parameter adjustPosition is set to true, the shapes' relative positions and
   * the rigid body's position will be adjusted to the center of gravity.
   * @param type
   * @param adjustPosition
   * @return void
   */
  setupMass: function (type, AdjustPosition) {
    var adjustPosition = AdjustPosition !== undefined ? AdjustPosition : true;
    this.type = type || BODY_STATIC;
    this.isDynamic = this.type === BODY_DYNAMIC;
    this.isStatic = this.type === BODY_STATIC;
    this.mass = 0;
    this.localInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    var tmpM = new Mat33();
    var tmpV = new Vec3();

    for (var shape = this.shapes; shape !== null; shape = shape.next) {
      shape.calculateMassInfo(this.massInfo);
      var shapeMass = this.massInfo.mass;
      tmpV.addScaledVector(shape.relativePosition, shapeMass);
      this.mass += shapeMass;
      this.rotateInertia(shape.relativeRotation, this.massInfo.inertia, tmpM);
      this.localInertia.add(tmpM); // add offset inertia

      this.localInertia.addOffset(shapeMass, shape.relativePosition);
    }

    this.inverseMass = 1 / this.mass;
    tmpV.scaleEqual(this.inverseMass);

    if (adjustPosition) {
      this.position.add(tmpV);

      for (shape = this.shapes; shape !== null; shape = shape.next) {
        shape.relativePosition.subEqual(tmpV);
      } // subtract offset inertia


      this.localInertia.subOffset(this.mass, tmpV);
    }

    this.inverseLocalInertia.invert(this.localInertia); //}

    if (this.type === BODY_STATIC) {
      this.inverseMass = 0;
      this.inverseLocalInertia.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    this.syncShapes();
    this.awake();
  },

  /**
   * Awake the rigid body.
   */
  awake: function () {
    if (!this.allowSleep || !this.sleeping) return;
    this.sleeping = false;
    this.sleepTime = 0; // awake connected constraints

    var cs = this.contactLink;

    while (cs != null) {
      cs.body.sleepTime = 0;
      cs.body.sleeping = false;
      cs = cs.next;
    }

    var js = this.jointLink;

    while (js != null) {
      js.body.sleepTime = 0;
      js.body.sleeping = false;
      js = js.next;
    }

    for (var shape = this.shapes; shape != null; shape = shape.next) {
      shape.updateProxy();
    }
  },

  /**
   * Sleep the rigid body.
   */
  sleep: function () {
    if (!this.allowSleep || this.sleeping) return;
    this.linearVelocity.set(0, 0, 0);
    this.angularVelocity.set(0, 0, 0);
    this.sleepPosition.copy(this.position);
    this.sleepOrientation.copy(this.orientation);
    this.sleepTime = 0;
    this.sleeping = true;

    for (var shape = this.shapes; shape != null; shape = shape.next) {
      shape.updateProxy();
    }
  },
  testWakeUp: function () {
    if (this.linearVelocity.testZero() || this.angularVelocity.testZero() || this.position.testDiff(this.sleepPosition) || this.orientation.testDiff(this.sleepOrientation)) this.awake(); // awake the body
  },

  /**
   * Get whether the rigid body has not any connection with others.
   * @return {void}
   */
  isLonely: function () {
    return this.numJoints == 0 && this.numContacts == 0;
  },

  /**
   * The time integration of the motion of a rigid body, you can update the information such as the shape.
   * This method is invoked automatically when calling the step of the World,
   * There is no need to call from outside usually.
   * @param  timeStep time
   * @return {void}
   */
  updatePosition: function (timeStep) {
    switch (this.type) {
      case BODY_STATIC:
        this.linearVelocity.set(0, 0, 0);
        this.angularVelocity.set(0, 0, 0); // ONLY FOR TEST

        if (this.controlPos) {
          this.position.copy(this.newPosition);
          this.controlPos = false;
        }

        if (this.controlRot) {
          this.orientation.copy(this.newOrientation);
          this.controlRot = false;
        }
        /*this.linearVelocity.x=0;
        this.linearVelocity.y=0;
        this.linearVelocity.z=0;
        this.angularVelocity.x=0;
        this.angularVelocity.y=0;
        this.angularVelocity.z=0;*/


        break;

      case BODY_DYNAMIC:
        if (this.isKinematic) {
          this.linearVelocity.set(0, 0, 0);
          this.angularVelocity.set(0, 0, 0);
        }

        if (this.controlPos) {
          this.linearVelocity.subVectors(this.newPosition, this.position).multiplyScalar(1 / timeStep);
          this.controlPos = false;
        }

        if (this.controlRot) {
          this.angularVelocity.copy(this.getAxis());
          this.orientation.copy(this.newOrientation);
          this.controlRot = false;
        }

        this.position.addScaledVector(this.linearVelocity, timeStep);
        this.orientation.addTime(this.angularVelocity, timeStep);
        this.updateMesh();
        break;

      default:
        printError("RigidBody", "Invalid type.");
    }

    this.syncShapes();
    this.updateMesh();
  },
  getAxis: function () {
    return new Vec3(0, 1, 0).applyMatrix3(this.inverseLocalInertia, true).normalize();
  },
  rotateInertia: function (rot, inertia, out) {
    this.tmpInertia.multiplyMatrices(rot, inertia);
    out.multiplyMatrices(this.tmpInertia, rot, true);
  },
  syncShapes: function () {
    this.rotation.setQuat(this.orientation);
    this.rotateInertia(this.rotation, this.inverseLocalInertia, this.inverseInertia);

    for (var shape = this.shapes; shape != null; shape = shape.next) {
      shape.position.copy(shape.relativePosition).applyMatrix3(this.rotation, true).add(this.position); // add by QuaziKb

      shape.rotation.multiplyMatrices(this.rotation, shape.relativeRotation);
      shape.updateProxy();
    }
  },
  //---------------------------------------------
  // APPLY IMPULSE FORCE
  //---------------------------------------------
  applyImpulse: function (position, force) {
    this.linearVelocity.addScaledVector(force, this.inverseMass);
    var rel = new Vec3().copy(position).sub(this.position).cross(force).applyMatrix3(this.inverseInertia, true);
    this.angularVelocity.add(rel);
  },
  //---------------------------------------------
  // SET DYNAMIQUE POSITION AND ROTATION
  //---------------------------------------------
  setPosition: function (pos) {
    this.newPosition.copy(pos).multiplyScalar(this.invScale);
    this.controlPos = true;
    if (!this.isKinematic) this.isKinematic = true;
  },
  setQuaternion: function (q) {
    this.newOrientation.set(q.x, q.y, q.z, q.w);
    this.controlRot = true;
    if (!this.isKinematic) this.isKinematic = true;
  },
  setRotation: function (rot) {
    this.newOrientation = new Quat().setFromEuler(rot.x * _Math.degtorad, rot.y * _Math.degtorad, rot.y * _Math.degtorad); //this.rotationVectToQuad( rot );

    this.controlRot = true;
  },
  //---------------------------------------------
  // RESET DYNAMIQUE POSITION AND ROTATION
  //---------------------------------------------
  resetPosition: function (x, y, z) {
    this.linearVelocity.set(0, 0, 0);
    this.angularVelocity.set(0, 0, 0);
    this.position.set(x, y, z).multiplyScalar(this.invScale); //this.position.set( x*OIMO.WorldScale.invScale, y*OIMO.WorldScale.invScale, z*OIMO.WorldScale.invScale );

    this.awake();
  },
  resetQuaternion: function (q) {
    this.angularVelocity.set(0, 0, 0);
    this.orientation = new Quat(q.x, q.y, q.z, q.w);
    this.awake();
  },
  resetRotation: function (x, y, z) {
    this.angularVelocity.set(0, 0, 0);
    this.orientation = new Quat().setFromEuler(x * _Math.degtorad, y * _Math.degtorad, z * _Math.degtorad); //this.rotationVectToQuad( new Vec3(x,y,z) );

    this.awake();
  },
  //---------------------------------------------
  // GET POSITION AND ROTATION
  //---------------------------------------------
  getPosition: function () {
    return this.pos;
  },
  getQuaternion: function () {
    return this.quaternion;
  },
  //---------------------------------------------
  // AUTO UPDATE THREE MESH
  //---------------------------------------------
  connectMesh: function (mesh) {
    this.mesh = mesh;
    this.updateMesh();
  },
  updateMesh: function () {
    this.pos.scale(this.position, this.scale);
    this.quaternion.copy(this.orientation);
    if (this.mesh === null) return;
    this.mesh.position.copy(this.getPosition());
    this.mesh.quaternion.copy(this.getQuaternion());
  }
});
/**
* A pair of shapes that may collide.
* @author saharan
*/

function Pair(s1, s2) {
  // The first shape.
  this.shape1 = s1 || null; // The second shape.

  this.shape2 = s2 || null;
}
/**
* The broad-phase is used for collecting all possible pairs for collision.
*/


function BroadPhase() {
  this.types = BR_NULL;
  this.numPairChecks = 0;
  this.numPairs = 0;
  this.pairs = [];
}

Object.assign(BroadPhase.prototype, {
  BroadPhase: true,
  // Create a new proxy.
  createProxy: function (shape) {
    printError("BroadPhase", "Inheritance error.");
  },
  // Add the proxy into the broad-phase.
  addProxy: function (proxy) {
    printError("BroadPhase", "Inheritance error.");
  },
  // Remove the proxy from the broad-phase.
  removeProxy: function (proxy) {
    printError("BroadPhase", "Inheritance error.");
  },
  // Returns whether the pair is available or not.
  isAvailablePair: function (s1, s2) {
    var b1 = s1.parent;
    var b2 = s2.parent;

    if (b1 == b2 || // same parents
    !b1.isDynamic && !b2.isDynamic || // static or kinematic object
    (s1.belongsTo & s2.collidesWith) == 0 || (s2.belongsTo & s1.collidesWith) == 0 // collision filtering
    ) {
        return false;
      }

    var js;
    if (b1.numJoints < b2.numJoints) js = b1.jointLink;else js = b2.jointLink;

    while (js !== null) {
      var joint = js.joint;

      if (!joint.allowCollision && (joint.body1 == b1 && joint.body2 == b2 || joint.body1 == b2 && joint.body2 == b1)) {
        return false;
      }

      js = js.next;
    }

    return true;
  },
  // Detect overlapping pairs.
  detectPairs: function () {
    // clear old
    this.pairs = [];
    this.numPairs = 0;
    this.numPairChecks = 0;
    this.collectPairs();
  },
  collectPairs: function () {
    Error("BroadPhase", "Inheritance error.");
  },
  addPair: function (s1, s2) {
    var pair = new Pair(s1, s2);
    this.pairs.push(pair);
    this.numPairs++;
  }
});
var count$1 = 0;

function ProxyIdCount() {
  return count$1++;
}
/**
 * A proxy is used for broad-phase collecting pairs that can be colliding.
 *
 * @author lo-th
 */


function Proxy(shape) {
  //The parent shape.
  this.shape = shape; //The axis-aligned bounding box.

  this.aabb = shape.aabb;
}

Object.assign(Proxy.prototype, {
  Proxy: true,
  // Update the proxy. Must be inherited by a child.
  update: function () {
    printError("Proxy", "Inheritance error.");
  }
});
/**
* A basic implementation of proxies.
*
* @author saharan
*/

function BasicProxy(shape) {
  Proxy.call(this, shape);
  this.id = ProxyIdCount();
}

BasicProxy.prototype = Object.assign(Object.create(Proxy.prototype), {
  constructor: BasicProxy,
  update: function () {}
});
/**
* A broad-phase algorithm with brute-force search.
* This always checks for all possible pairs.
*/

function BruteForceBroadPhase() {
  BroadPhase.call(this);
  this.types = BR_BRUTE_FORCE; //this.numProxies=0;
  ///this.maxProxies = 256;

  this.proxies = []; //this.proxies.length = 256;
}

BruteForceBroadPhase.prototype = Object.assign(Object.create(BroadPhase.prototype), {
  constructor: BruteForceBroadPhase,
  createProxy: function (shape) {
    return new BasicProxy(shape);
  },
  addProxy: function (proxy) {
    /*if(this.numProxies==this.maxProxies){
        //this.maxProxies<<=1;
        this.maxProxies*=2;
        var newProxies=[];
        newProxies.length = this.maxProxies;
        var i = this.numProxies;
        while(i--){
        //for(var i=0, l=this.numProxies;i<l;i++){
            newProxies[i]=this.proxies[i];
        }
        this.proxies=newProxies;
    }*/
    //this.proxies[this.numProxies++] = proxy;
    this.proxies.push(proxy); //this.numProxies++;
  },
  removeProxy: function (proxy) {
    var n = this.proxies.indexOf(proxy);

    if (n > -1) {
      this.proxies.splice(n, 1); //this.numProxies--;
    }
    /*var i = this.numProxies;
    while(i--){
    //for(var i=0, l=this.numProxies;i<l;i++){
        if(this.proxies[i] == proxy){
            this.proxies[i] = this.proxies[--this.numProxies];
            this.proxies[this.numProxies] = null;
            return;
        }
    }*/

  },
  collectPairs: function () {
    var i = 0,
        j,
        p1,
        p2;
    var px = this.proxies;
    var l = px.length; //this.numProxies;
    //var ar1 = [];
    //var ar2 = [];
    //for( i = px.length ; i-- ; ar1[ i ] = px[ i ] ){};
    //for( i = px.length ; i-- ; ar2[ i ] = px[ i ] ){};
    //var ar1 = JSON.parse(JSON.stringify(this.proxies))
    //var ar2 = JSON.parse(JSON.stringify(this.proxies))

    this.numPairChecks = l * (l - 1) >> 1; //this.numPairChecks=this.numProxies*(this.numProxies-1)*0.5;

    while (i < l) {
      p1 = px[i++];
      j = i + 1;

      while (j < l) {
        p2 = px[j++];
        if (p1.aabb.intersectTest(p2.aabb) || !this.isAvailablePair(p1.shape, p2.shape)) continue;
        this.addPair(p1.shape, p2.shape);
      }
    }
  }
});
/**
 * A projection axis for sweep and prune broad-phase.
 * @author saharan
 */

function SAPAxis() {
  this.numElements = 0;
  this.bufferSize = 256;
  this.elements = [];
  this.elements.length = this.bufferSize;
  this.stack = new Float32Array(64);
}

Object.assign(SAPAxis.prototype, {
  SAPAxis: true,
  addElements: function (min, max) {
    if (this.numElements + 2 >= this.bufferSize) {
      //this.bufferSize<<=1;
      this.bufferSize *= 2;
      var newElements = [];
      var i = this.numElements;

      while (i--) {
        //for(var i=0, l=this.numElements; i<l; i++){
        newElements[i] = this.elements[i];
      }
    }

    this.elements[this.numElements++] = min;
    this.elements[this.numElements++] = max;
  },
  removeElements: function (min, max) {
    var minIndex = -1;
    var maxIndex = -1;

    for (var i = 0, l = this.numElements; i < l; i++) {
      var e = this.elements[i];

      if (e == min || e == max) {
        if (minIndex == -1) {
          minIndex = i;
        } else {
          maxIndex = i;
          break;
        }
      }
    }

    for (i = minIndex + 1, l = maxIndex; i < l; i++) {
      this.elements[i - 1] = this.elements[i];
    }

    for (i = maxIndex + 1, l = this.numElements; i < l; i++) {
      this.elements[i - 2] = this.elements[i];
    }

    this.elements[--this.numElements] = null;
    this.elements[--this.numElements] = null;
  },
  sort: function () {
    var count = 0;
    var threshold = 1;

    while (this.numElements >> threshold != 0) threshold++;

    threshold = threshold * this.numElements >> 2;
    count = 0;
    var giveup = false;
    var elements = this.elements;

    for (var i = 1, l = this.numElements; i < l; i++) {
      // try insertion sort
      var tmp = elements[i];
      var pivot = tmp.value;
      var tmp2 = elements[i - 1];

      if (tmp2.value > pivot) {
        var j = i;

        do {
          elements[j] = tmp2;
          if (--j == 0) break;
          tmp2 = elements[j - 1];
        } while (tmp2.value > pivot);

        elements[j] = tmp;
        count += i - j;

        if (count > threshold) {
          giveup = true; // stop and use quick sort

          break;
        }
      }
    }

    if (!giveup) return;
    count = 2;
    var stack = this.stack;
    stack[0] = 0;
    stack[1] = this.numElements - 1;

    while (count > 0) {
      var right = stack[--count];
      var left = stack[--count];
      var diff = right - left;

      if (diff > 16) {
        // quick sort
        //var mid=left+(diff>>1);
        var mid = left + _Math.floor(diff * 0.5);

        tmp = elements[mid];
        elements[mid] = elements[right];
        elements[right] = tmp;
        pivot = tmp.value;
        i = left - 1;
        j = right;

        while (true) {
          var ei;
          var ej;

          do {
            ei = elements[++i];
          } while (ei.value < pivot);

          do {
            ej = elements[--j];
          } while (pivot < ej.value && j != left);

          if (i >= j) break;
          elements[i] = ej;
          elements[j] = ei;
        }

        elements[right] = elements[i];
        elements[i] = tmp;

        if (i - left > right - i) {
          stack[count++] = left;
          stack[count++] = i - 1;
          stack[count++] = i + 1;
          stack[count++] = right;
        } else {
          stack[count++] = i + 1;
          stack[count++] = right;
          stack[count++] = left;
          stack[count++] = i - 1;
        }
      } else {
        for (i = left + 1; i <= right; i++) {
          tmp = elements[i];
          pivot = tmp.value;
          tmp2 = elements[i - 1];

          if (tmp2.value > pivot) {
            j = i;

            do {
              elements[j] = tmp2;
              if (--j == 0) break;
              tmp2 = elements[j - 1];
            } while (tmp2.value > pivot);

            elements[j] = tmp;
          }
        }
      }
    }
  },
  calculateTestCount: function () {
    var num = 1;
    var sum = 0;

    for (var i = 1, l = this.numElements; i < l; i++) {
      if (this.elements[i].max) {
        num--;
      } else {
        sum += num;
        num++;
      }
    }

    return sum;
  }
});
/**
 * An element of proxies.
 * @author saharan
 */

function SAPElement(proxy, max) {
  // The parent proxy
  this.proxy = proxy; // The pair element.

  this.pair = null; // The minimum element on other axis.

  this.min1 = null; // The maximum element on other axis.

  this.max1 = null; // The minimum element on other axis.

  this.min2 = null; // The maximum element on other axis.

  this.max2 = null; // Whether the element has maximum value or not.

  this.max = max; // The value of the element.

  this.value = 0;
}
/**
 * A proxy for sweep and prune broad-phase.
 * @author saharan
 * @author lo-th
 */


function SAPProxy(sap, shape) {
  Proxy.call(this, shape); // Type of the axis to which the proxy belongs to. [0:none, 1:dynamic, 2:static]

  this.belongsTo = 0; // The maximum elements on each axis.

  this.max = []; // The minimum elements on each axis.

  this.min = [];
  this.sap = sap;
  this.min[0] = new SAPElement(this, false);
  this.max[0] = new SAPElement(this, true);
  this.min[1] = new SAPElement(this, false);
  this.max[1] = new SAPElement(this, true);
  this.min[2] = new SAPElement(this, false);
  this.max[2] = new SAPElement(this, true);
  this.max[0].pair = this.min[0];
  this.max[1].pair = this.min[1];
  this.max[2].pair = this.min[2];
  this.min[0].min1 = this.min[1];
  this.min[0].max1 = this.max[1];
  this.min[0].min2 = this.min[2];
  this.min[0].max2 = this.max[2];
  this.min[1].min1 = this.min[0];
  this.min[1].max1 = this.max[0];
  this.min[1].min2 = this.min[2];
  this.min[1].max2 = this.max[2];
  this.min[2].min1 = this.min[0];
  this.min[2].max1 = this.max[0];
  this.min[2].min2 = this.min[1];
  this.min[2].max2 = this.max[1];
}

SAPProxy.prototype = Object.assign(Object.create(Proxy.prototype), {
  constructor: SAPProxy,
  // Returns whether the proxy is dynamic or not.
  isDynamic: function () {
    var body = this.shape.parent;
    return body.isDynamic && !body.sleeping;
  },
  update: function () {
    var te = this.aabb.elements;
    this.min[0].value = te[0];
    this.min[1].value = te[1];
    this.min[2].value = te[2];
    this.max[0].value = te[3];
    this.max[1].value = te[4];
    this.max[2].value = te[5];

    if (this.belongsTo == 1 && !this.isDynamic() || this.belongsTo == 2 && this.isDynamic()) {
      this.sap.removeProxy(this);
      this.sap.addProxy(this);
    }
  }
});
/**
 * A broad-phase collision detection algorithm using sweep and prune.
 * @author saharan
 * @author lo-th
 */

function SAPBroadPhase() {
  BroadPhase.call(this);
  this.types = BR_SWEEP_AND_PRUNE;
  this.numElementsD = 0;
  this.numElementsS = 0; // dynamic proxies

  this.axesD = [new SAPAxis(), new SAPAxis(), new SAPAxis()]; // static or sleeping proxies

  this.axesS = [new SAPAxis(), new SAPAxis(), new SAPAxis()];
  this.index1 = 0;
  this.index2 = 1;
}

SAPBroadPhase.prototype = Object.assign(Object.create(BroadPhase.prototype), {
  constructor: SAPBroadPhase,
  createProxy: function (shape) {
    return new SAPProxy(this, shape);
  },
  addProxy: function (proxy) {
    var p = proxy;

    if (p.isDynamic()) {
      this.axesD[0].addElements(p.min[0], p.max[0]);
      this.axesD[1].addElements(p.min[1], p.max[1]);
      this.axesD[2].addElements(p.min[2], p.max[2]);
      p.belongsTo = 1;
      this.numElementsD += 2;
    } else {
      this.axesS[0].addElements(p.min[0], p.max[0]);
      this.axesS[1].addElements(p.min[1], p.max[1]);
      this.axesS[2].addElements(p.min[2], p.max[2]);
      p.belongsTo = 2;
      this.numElementsS += 2;
    }
  },
  removeProxy: function (proxy) {
    var p = proxy;
    if (p.belongsTo == 0) return;
    /*else if ( p.belongsTo == 1 ) {
        this.axesD[0].removeElements( p.min[0], p.max[0] );
        this.axesD[1].removeElements( p.min[1], p.max[1] );
        this.axesD[2].removeElements( p.min[2], p.max[2] );
        this.numElementsD -= 2;
    } else if ( p.belongsTo == 2 ) {
        this.axesS[0].removeElements( p.min[0], p.max[0] );
        this.axesS[1].removeElements( p.min[1], p.max[1] );
        this.axesS[2].removeElements( p.min[2], p.max[2] );
        this.numElementsS -= 2;
    }*/

    switch (p.belongsTo) {
      case 1:
        this.axesD[0].removeElements(p.min[0], p.max[0]);
        this.axesD[1].removeElements(p.min[1], p.max[1]);
        this.axesD[2].removeElements(p.min[2], p.max[2]);
        this.numElementsD -= 2;
        break;

      case 2:
        this.axesS[0].removeElements(p.min[0], p.max[0]);
        this.axesS[1].removeElements(p.min[1], p.max[1]);
        this.axesS[2].removeElements(p.min[2], p.max[2]);
        this.numElementsS -= 2;
        break;
    }

    p.belongsTo = 0;
  },
  collectPairs: function () {
    if (this.numElementsD == 0) return;
    var axis1 = this.axesD[this.index1];
    var axis2 = this.axesD[this.index2];
    axis1.sort();
    axis2.sort();
    var count1 = axis1.calculateTestCount();
    var count2 = axis2.calculateTestCount();
    var elementsD;
    var elementsS;

    if (count1 <= count2) {
      // select the best axis
      axis2 = this.axesS[this.index1];
      axis2.sort();
      elementsD = axis1.elements;
      elementsS = axis2.elements;
    } else {
      axis1 = this.axesS[this.index2];
      axis1.sort();
      elementsD = axis2.elements;
      elementsS = axis1.elements;
      this.index1 ^= this.index2;
      this.index2 ^= this.index1;
      this.index1 ^= this.index2;
    }

    var activeD;
    var activeS;
    var p = 0;
    var q = 0;

    while (p < this.numElementsD) {
      var e1;
      var dyn;

      if (q == this.numElementsS) {
        e1 = elementsD[p];
        dyn = true;
        p++;
      } else {
        var d = elementsD[p];
        var s = elementsS[q];

        if (d.value < s.value) {
          e1 = d;
          dyn = true;
          p++;
        } else {
          e1 = s;
          dyn = false;
          q++;
        }
      }

      if (!e1.max) {
        var s1 = e1.proxy.shape;
        var min1 = e1.min1.value;
        var max1 = e1.max1.value;
        var min2 = e1.min2.value;
        var max2 = e1.max2.value;

        for (var e2 = activeD; e2 != null; e2 = e2.pair) {
          // test for dynamic
          var s2 = e2.proxy.shape;
          this.numPairChecks++;
          if (min1 > e2.max1.value || max1 < e2.min1.value || min2 > e2.max2.value || max2 < e2.min2.value || !this.isAvailablePair(s1, s2)) continue;
          this.addPair(s1, s2);
        }

        if (dyn) {
          for (e2 = activeS; e2 != null; e2 = e2.pair) {
            // test for static
            s2 = e2.proxy.shape;
            this.numPairChecks++;
            if (min1 > e2.max1.value || max1 < e2.min1.value || min2 > e2.max2.value || max2 < e2.min2.value || !this.isAvailablePair(s1, s2)) continue;
            this.addPair(s1, s2);
          }

          e1.pair = activeD;
          activeD = e1;
        } else {
          e1.pair = activeS;
          activeS = e1;
        }
      } else {
        var min = e1.pair;

        if (dyn) {
          if (min == activeD) {
            activeD = activeD.pair;
            continue;
          } else {
            e1 = activeD;
          }
        } else {
          if (min == activeS) {
            activeS = activeS.pair;
            continue;
          } else {
            e1 = activeS;
          }
        }

        do {
          e2 = e1.pair;

          if (e2 == min) {
            e1.pair = e2.pair;
            break;
          }

          e1 = e2;
        } while (e1 != null);
      }
    }

    this.index2 = (this.index1 | this.index2) ^ 3;
  }
});
/**
* A node of the dynamic bounding volume tree.
* @author saharan
*/

function DBVTNode() {
  // The first child node of this node.
  this.child1 = null; // The second child node of this node.

  this.child2 = null; //  The parent node of this tree.

  this.parent = null; // The proxy of this node. This has no value if this node is not leaf.

  this.proxy = null; // The maximum distance from leaf nodes.

  this.height = 0; // The AABB of this node.

  this.aabb = new AABB();
}
/**
 * A dynamic bounding volume tree for the broad-phase algorithm.
 *
 * @author saharan
 * @author lo-th
 */


function DBVT() {
  // The root of the tree.
  this.root = null;
  this.freeNodes = [];
  this.freeNodes.length = 16384;
  this.numFreeNodes = 0;
  this.aabb = new AABB();
}

Object.assign(DBVT.prototype, {
  DBVT: true,
  moveLeaf: function (leaf) {
    this.deleteLeaf(leaf);
    this.insertLeaf(leaf);
  },
  insertLeaf: function (leaf) {
    if (this.root == null) {
      this.root = leaf;
      return;
    }

    var lb = leaf.aabb;
    var sibling = this.root;
    var oldArea;
    var newArea;

    while (sibling.proxy == null) {
      // descend the node to search the best pair
      var c1 = sibling.child1;
      var c2 = sibling.child2;
      var b = sibling.aabb;
      var c1b = c1.aabb;
      var c2b = c2.aabb;
      oldArea = b.surfaceArea();
      this.aabb.combine(lb, b);
      newArea = this.aabb.surfaceArea();
      var creatingCost = newArea * 2;
      var incrementalCost = (newArea - oldArea) * 2; // cost of creating a new pair with the node

      var discendingCost1 = incrementalCost;
      this.aabb.combine(lb, c1b);

      if (c1.proxy != null) {
        // leaf cost = area(combined aabb)
        discendingCost1 += this.aabb.surfaceArea();
      } else {
        // node cost = area(combined aabb) - area(old aabb)
        discendingCost1 += this.aabb.surfaceArea() - c1b.surfaceArea();
      }

      var discendingCost2 = incrementalCost;
      this.aabb.combine(lb, c2b);

      if (c2.proxy != null) {
        // leaf cost = area(combined aabb)
        discendingCost2 += this.aabb.surfaceArea();
      } else {
        // node cost = area(combined aabb) - area(old aabb)
        discendingCost2 += this.aabb.surfaceArea() - c2b.surfaceArea();
      }

      if (discendingCost1 < discendingCost2) {
        if (creatingCost < discendingCost1) {
          break; // stop descending
        } else {
          sibling = c1; // descend into first child
        }
      } else {
        if (creatingCost < discendingCost2) {
          break; // stop descending
        } else {
          sibling = c2; // descend into second child
        }
      }
    }

    var oldParent = sibling.parent;
    var newParent;

    if (this.numFreeNodes > 0) {
      newParent = this.freeNodes[--this.numFreeNodes];
    } else {
      newParent = new DBVTNode();
    }

    newParent.parent = oldParent;
    newParent.child1 = leaf;
    newParent.child2 = sibling;
    newParent.aabb.combine(leaf.aabb, sibling.aabb);
    newParent.height = sibling.height + 1;
    sibling.parent = newParent;
    leaf.parent = newParent;

    if (sibling == this.root) {
      // replace root
      this.root = newParent;
    } else {
      // replace child
      if (oldParent.child1 == sibling) {
        oldParent.child1 = newParent;
      } else {
        oldParent.child2 = newParent;
      }
    } // update whole tree


    do {
      newParent = this.balance(newParent);
      this.fix(newParent);
      newParent = newParent.parent;
    } while (newParent != null);
  },
  getBalance: function (node) {
    if (node.proxy != null) return 0;
    return node.child1.height - node.child2.height;
  },
  deleteLeaf: function (leaf) {
    if (leaf == this.root) {
      this.root = null;
      return;
    }

    var parent = leaf.parent;
    var sibling;

    if (parent.child1 == leaf) {
      sibling = parent.child2;
    } else {
      sibling = parent.child1;
    }

    if (parent == this.root) {
      this.root = sibling;
      sibling.parent = null;
      return;
    }

    var grandParent = parent.parent;
    sibling.parent = grandParent;

    if (grandParent.child1 == parent) {
      grandParent.child1 = sibling;
    } else {
      grandParent.child2 = sibling;
    }

    if (this.numFreeNodes < 16384) {
      this.freeNodes[this.numFreeNodes++] = parent;
    }

    do {
      grandParent = this.balance(grandParent);
      this.fix(grandParent);
      grandParent = grandParent.parent;
    } while (grandParent != null);
  },
  balance: function (node) {
    var nh = node.height;

    if (nh < 2) {
      return node;
    }

    var p = node.parent;
    var l = node.child1;
    var r = node.child2;
    var lh = l.height;
    var rh = r.height;
    var balance = lh - rh;
    var t; // for bit operation
    //          [ N ]
    //         /     \
    //    [ L ]       [ R ]
    //     / \         / \
    // [L-L] [L-R] [R-L] [R-R]
    // Is the tree balanced?

    if (balance > 1) {
      var ll = l.child1;
      var lr = l.child2;
      var llh = ll.height;
      var lrh = lr.height; // Is L-L higher than L-R?

      if (llh > lrh) {
        // set N to L-R
        l.child2 = node;
        node.parent = l; //          [ L ]
        //         /     \
        //    [L-L]       [ N ]
        //     / \         / \
        // [...] [...] [ L ] [ R ]
        // set L-R

        node.child1 = lr;
        lr.parent = node; //          [ L ]
        //         /     \
        //    [L-L]       [ N ]
        //     / \         / \
        // [...] [...] [L-R] [ R ]
        // fix bounds and heights

        node.aabb.combine(lr.aabb, r.aabb);
        t = lrh - rh;
        node.height = lrh - (t & t >> 31) + 1;
        l.aabb.combine(ll.aabb, node.aabb);
        t = llh - nh;
        l.height = llh - (t & t >> 31) + 1;
      } else {
        // set N to L-L
        l.child1 = node;
        node.parent = l; //          [ L ]
        //         /     \
        //    [ N ]       [L-R]
        //     / \         / \
        // [ L ] [ R ] [...] [...]
        // set L-L

        node.child1 = ll;
        ll.parent = node; //          [ L ]
        //         /     \
        //    [ N ]       [L-R]
        //     / \         / \
        // [L-L] [ R ] [...] [...]
        // fix bounds and heights

        node.aabb.combine(ll.aabb, r.aabb);
        t = llh - rh;
        node.height = llh - (t & t >> 31) + 1;
        l.aabb.combine(node.aabb, lr.aabb);
        t = nh - lrh;
        l.height = nh - (t & t >> 31) + 1;
      } // set new parent of L


      if (p != null) {
        if (p.child1 == node) {
          p.child1 = l;
        } else {
          p.child2 = l;
        }
      } else {
        this.root = l;
      }

      l.parent = p;
      return l;
    } else if (balance < -1) {
      var rl = r.child1;
      var rr = r.child2;
      var rlh = rl.height;
      var rrh = rr.height; // Is R-L higher than R-R?

      if (rlh > rrh) {
        // set N to R-R
        r.child2 = node;
        node.parent = r; //          [ R ]
        //         /     \
        //    [R-L]       [ N ]
        //     / \         / \
        // [...] [...] [ L ] [ R ]
        // set R-R

        node.child2 = rr;
        rr.parent = node; //          [ R ]
        //         /     \
        //    [R-L]       [ N ]
        //     / \         / \
        // [...] [...] [ L ] [R-R]
        // fix bounds and heights

        node.aabb.combine(l.aabb, rr.aabb);
        t = lh - rrh;
        node.height = lh - (t & t >> 31) + 1;
        r.aabb.combine(rl.aabb, node.aabb);
        t = rlh - nh;
        r.height = rlh - (t & t >> 31) + 1;
      } else {
        // set N to R-L
        r.child1 = node;
        node.parent = r; //          [ R ]
        //         /     \
        //    [ N ]       [R-R]
        //     / \         / \
        // [ L ] [ R ] [...] [...]
        // set R-L

        node.child2 = rl;
        rl.parent = node; //          [ R ]
        //         /     \
        //    [ N ]       [R-R]
        //     / \         / \
        // [ L ] [R-L] [...] [...]
        // fix bounds and heights

        node.aabb.combine(l.aabb, rl.aabb);
        t = lh - rlh;
        node.height = lh - (t & t >> 31) + 1;
        r.aabb.combine(node.aabb, rr.aabb);
        t = nh - rrh;
        r.height = nh - (t & t >> 31) + 1;
      } // set new parent of R


      if (p != null) {
        if (p.child1 == node) {
          p.child1 = r;
        } else {
          p.child2 = r;
        }
      } else {
        this.root = r;
      }

      r.parent = p;
      return r;
    }

    return node;
  },
  fix: function (node) {
    var c1 = node.child1;
    var c2 = node.child2;
    node.aabb.combine(c1.aabb, c2.aabb);
    node.height = c1.height < c2.height ? c2.height + 1 : c1.height + 1;
  }
});
/**
* A proxy for dynamic bounding volume tree broad-phase.
* @author saharan
*/

function DBVTProxy(shape) {
  Proxy.call(this, shape); // The leaf of the proxy.

  this.leaf = new DBVTNode();
  this.leaf.proxy = this;
}

DBVTProxy.prototype = Object.assign(Object.create(Proxy.prototype), {
  constructor: DBVTProxy,
  update: function () {}
});
/**
 * A broad-phase algorithm using dynamic bounding volume tree.
 *
 * @author saharan
 * @author lo-th
 */

function DBVTBroadPhase() {
  BroadPhase.call(this);
  this.types = BR_BOUNDING_VOLUME_TREE;
  this.tree = new DBVT();
  this.stack = [];
  this.leaves = [];
  this.numLeaves = 0;
}

DBVTBroadPhase.prototype = Object.assign(Object.create(BroadPhase.prototype), {
  constructor: DBVTBroadPhase,
  createProxy: function (shape) {
    return new DBVTProxy(shape);
  },
  addProxy: function (proxy) {
    this.tree.insertLeaf(proxy.leaf);
    this.leaves.push(proxy.leaf);
    this.numLeaves++;
  },
  removeProxy: function (proxy) {
    this.tree.deleteLeaf(proxy.leaf);
    var n = this.leaves.indexOf(proxy.leaf);

    if (n > -1) {
      this.leaves.splice(n, 1);
      this.numLeaves--;
    }
  },
  collectPairs: function () {
    if (this.numLeaves < 2) return;
    var leaf,
        margin = 0.1,
        i = this.numLeaves;

    while (i--) {
      leaf = this.leaves[i];

      if (leaf.proxy.aabb.intersectTestTwo(leaf.aabb)) {
        leaf.aabb.copy(leaf.proxy.aabb, margin);
        this.tree.deleteLeaf(leaf);
        this.tree.insertLeaf(leaf);
        this.collide(leaf, this.tree.root);
      }
    }
  },
  collide: function (node1, node2) {
    var stackCount = 2;
    var s1, s2, n1, n2, l1, l2;
    this.stack[0] = node1;
    this.stack[1] = node2;

    while (stackCount > 0) {
      n1 = this.stack[--stackCount];
      n2 = this.stack[--stackCount];
      l1 = n1.proxy != null;
      l2 = n2.proxy != null;
      this.numPairChecks++;

      if (l1 && l2) {
        s1 = n1.proxy.shape;
        s2 = n2.proxy.shape;
        if (s1 == s2 || s1.aabb.intersectTest(s2.aabb) || !this.isAvailablePair(s1, s2)) continue;
        this.addPair(s1, s2);
      } else {
        if (n1.aabb.intersectTest(n2.aabb)) continue;
        /*if(stackCount+4>=this.maxStack){// expand the stack
            //this.maxStack<<=1;
            this.maxStack*=2;
            var newStack = [];// vector
            newStack.length = this.maxStack;
            for(var i=0;i<stackCount;i++){
                newStack[i] = this.stack[i];
            }
            this.stack = newStack;
        }*/

        if (l2 || !l1 && n1.aabb.surfaceArea() > n2.aabb.surfaceArea()) {
          this.stack[stackCount++] = n1.child1;
          this.stack[stackCount++] = n2;
          this.stack[stackCount++] = n1.child2;
          this.stack[stackCount++] = n2;
        } else {
          this.stack[stackCount++] = n1;
          this.stack[stackCount++] = n2.child1;
          this.stack[stackCount++] = n1;
          this.stack[stackCount++] = n2.child2;
        }
      }
    }
  }
});

function CollisionDetector() {
  this.flip = false;
}

Object.assign(CollisionDetector.prototype, {
  CollisionDetector: true,
  detectCollision: function (shape1, shape2, manifold) {
    printError("CollisionDetector", "Inheritance error.");
  }
});
/**
 * A collision detector which detects collisions between two boxes.
 * @author saharan
 */

function BoxBoxCollisionDetector() {
  CollisionDetector.call(this);
  this.clipVertices1 = new Float32Array(24); // 8 vertices x,y,z

  this.clipVertices2 = new Float32Array(24);
  this.used = new Float32Array(8);
  this.INF = 1 / 0;
}

BoxBoxCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: BoxBoxCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    // What you are doing 
    // · I to prepare a separate axis of the fifteen 
    //-Six in each of three normal vectors of the xyz direction of the box both 
    // · Remaining nine 3x3 a vector perpendicular to the side of the box 2 and the side of the box 1 
    // · Calculate the depth to the separation axis 
    // Calculates the distance using the inner product and put the amount of embedment 
    // · However a vertical separation axis and side to weight a little to avoid vibration 
    // And end when there is a separate axis that is remote even one 
    // · I look for separation axis with little to dent most 
    // Men and if separation axis of the first six - end collision 
    // Heng If it separate axis of nine other - side collision 
    // Heng - case of a side collision 
    // · Find points of two sides on which you made ​​the separation axis 
    // Calculates the point of closest approach of a straight line consisting of separate axis points obtained, and the collision point 
    //-Surface - the case of the plane crash 
    //-Box A, box B and the other a box of better made ​​a separate axis 
    // • The surface A and the plane that made the separation axis of the box A, and B to the surface the face of the box B close in the opposite direction to the most isolated axis 
    // When viewed from the front surface A, and the cut part exceeding the area of the surface A is a surface B 
    //-Plane B becomes the 3-8 triangle, I a candidate for the collision point the vertex of surface B 
    // • If more than one candidate 5 exists, scraping up to four 
    // For potential collision points of all, to examine the distance between the surface A 
    // • If you were on the inside surface of A, and the collision point
    var b1;
    var b2;

    if (shape1.id < shape2.id) {
      b1 = shape1;
      b2 = shape2;
    } else {
      b1 = shape2;
      b2 = shape1;
    }

    var V1 = b1.elements;
    var V2 = b2.elements;
    var D1 = b1.dimentions;
    var D2 = b2.dimentions;
    var p1 = b1.position;
    var p2 = b2.position;
    var p1x = p1.x;
    var p1y = p1.y;
    var p1z = p1.z;
    var p2x = p2.x;
    var p2y = p2.y;
    var p2z = p2.z; // diff

    var dx = p2x - p1x;
    var dy = p2y - p1y;
    var dz = p2z - p1z; // distance

    var w1 = b1.halfWidth;
    var h1 = b1.halfHeight;
    var d1 = b1.halfDepth;
    var w2 = b2.halfWidth;
    var h2 = b2.halfHeight;
    var d2 = b2.halfDepth; // direction
    // ----------------------------
    // 15 separating axes
    // 1~6: face
    // 7~f: edge
    // http://marupeke296.com/COL_3D_No13_OBBvsOBB.html
    // ----------------------------

    var a1x = D1[0];
    var a1y = D1[1];
    var a1z = D1[2];
    var a2x = D1[3];
    var a2y = D1[4];
    var a2z = D1[5];
    var a3x = D1[6];
    var a3y = D1[7];
    var a3z = D1[8];
    var d1x = D1[9];
    var d1y = D1[10];
    var d1z = D1[11];
    var d2x = D1[12];
    var d2y = D1[13];
    var d2z = D1[14];
    var d3x = D1[15];
    var d3y = D1[16];
    var d3z = D1[17];
    var a4x = D2[0];
    var a4y = D2[1];
    var a4z = D2[2];
    var a5x = D2[3];
    var a5y = D2[4];
    var a5z = D2[5];
    var a6x = D2[6];
    var a6y = D2[7];
    var a6z = D2[8];
    var d4x = D2[9];
    var d4y = D2[10];
    var d4z = D2[11];
    var d5x = D2[12];
    var d5y = D2[13];
    var d5z = D2[14];
    var d6x = D2[15];
    var d6y = D2[16];
    var d6z = D2[17];
    var a7x = a1y * a4z - a1z * a4y;
    var a7y = a1z * a4x - a1x * a4z;
    var a7z = a1x * a4y - a1y * a4x;
    var a8x = a1y * a5z - a1z * a5y;
    var a8y = a1z * a5x - a1x * a5z;
    var a8z = a1x * a5y - a1y * a5x;
    var a9x = a1y * a6z - a1z * a6y;
    var a9y = a1z * a6x - a1x * a6z;
    var a9z = a1x * a6y - a1y * a6x;
    var aax = a2y * a4z - a2z * a4y;
    var aay = a2z * a4x - a2x * a4z;
    var aaz = a2x * a4y - a2y * a4x;
    var abx = a2y * a5z - a2z * a5y;
    var aby = a2z * a5x - a2x * a5z;
    var abz = a2x * a5y - a2y * a5x;
    var acx = a2y * a6z - a2z * a6y;
    var acy = a2z * a6x - a2x * a6z;
    var acz = a2x * a6y - a2y * a6x;
    var adx = a3y * a4z - a3z * a4y;
    var ady = a3z * a4x - a3x * a4z;
    var adz = a3x * a4y - a3y * a4x;
    var aex = a3y * a5z - a3z * a5y;
    var aey = a3z * a5x - a3x * a5z;
    var aez = a3x * a5y - a3y * a5x;
    var afx = a3y * a6z - a3z * a6y;
    var afy = a3z * a6x - a3x * a6z;
    var afz = a3x * a6y - a3y * a6x; // right or left flags

    var right1;
    var right2;
    var right3;
    var right4;
    var right5;
    var right6;
    var right7;
    var right8;
    var right9;
    var righta;
    var rightb;
    var rightc;
    var rightd;
    var righte;
    var rightf; // overlapping distances

    var overlap1;
    var overlap2;
    var overlap3;
    var overlap4;
    var overlap5;
    var overlap6;
    var overlap7;
    var overlap8;
    var overlap9;
    var overlapa;
    var overlapb;
    var overlapc;
    var overlapd;
    var overlape;
    var overlapf; // invalid flags

    var invalid7 = false;
    var invalid8 = false;
    var invalid9 = false;
    var invalida = false;
    var invalidb = false;
    var invalidc = false;
    var invalidd = false;
    var invalide = false;
    var invalidf = false; // temporary variables

    var len;
    var len1;
    var len2;
    var dot1;
    var dot2;
    var dot3; // try axis 1

    len = a1x * dx + a1y * dy + a1z * dz;
    right1 = len > 0;
    if (!right1) len = -len;
    len1 = w1;
    dot1 = a1x * a4x + a1y * a4y + a1z * a4z;
    dot2 = a1x * a5x + a1y * a5y + a1z * a5z;
    dot3 = a1x * a6x + a1y * a6y + a1z * a6z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len2 = dot1 * w2 + dot2 * h2 + dot3 * d2;
    overlap1 = len - len1 - len2;
    if (overlap1 > 0) return; // try axis 2

    len = a2x * dx + a2y * dy + a2z * dz;
    right2 = len > 0;
    if (!right2) len = -len;
    len1 = h1;
    dot1 = a2x * a4x + a2y * a4y + a2z * a4z;
    dot2 = a2x * a5x + a2y * a5y + a2z * a5z;
    dot3 = a2x * a6x + a2y * a6y + a2z * a6z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len2 = dot1 * w2 + dot2 * h2 + dot3 * d2;
    overlap2 = len - len1 - len2;
    if (overlap2 > 0) return; // try axis 3

    len = a3x * dx + a3y * dy + a3z * dz;
    right3 = len > 0;
    if (!right3) len = -len;
    len1 = d1;
    dot1 = a3x * a4x + a3y * a4y + a3z * a4z;
    dot2 = a3x * a5x + a3y * a5y + a3z * a5z;
    dot3 = a3x * a6x + a3y * a6y + a3z * a6z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len2 = dot1 * w2 + dot2 * h2 + dot3 * d2;
    overlap3 = len - len1 - len2;
    if (overlap3 > 0) return; // try axis 4

    len = a4x * dx + a4y * dy + a4z * dz;
    right4 = len > 0;
    if (!right4) len = -len;
    dot1 = a4x * a1x + a4y * a1y + a4z * a1z;
    dot2 = a4x * a2x + a4y * a2y + a4z * a2z;
    dot3 = a4x * a3x + a4y * a3y + a4z * a3z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len1 = dot1 * w1 + dot2 * h1 + dot3 * d1;
    len2 = w2;
    overlap4 = (len - len1 - len2) * 1.0;
    if (overlap4 > 0) return; // try axis 5

    len = a5x * dx + a5y * dy + a5z * dz;
    right5 = len > 0;
    if (!right5) len = -len;
    dot1 = a5x * a1x + a5y * a1y + a5z * a1z;
    dot2 = a5x * a2x + a5y * a2y + a5z * a2z;
    dot3 = a5x * a3x + a5y * a3y + a5z * a3z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len1 = dot1 * w1 + dot2 * h1 + dot3 * d1;
    len2 = h2;
    overlap5 = (len - len1 - len2) * 1.0;
    if (overlap5 > 0) return; // try axis 6

    len = a6x * dx + a6y * dy + a6z * dz;
    right6 = len > 0;
    if (!right6) len = -len;
    dot1 = a6x * a1x + a6y * a1y + a6z * a1z;
    dot2 = a6x * a2x + a6y * a2y + a6z * a2z;
    dot3 = a6x * a3x + a6y * a3y + a6z * a3z;
    if (dot1 < 0) dot1 = -dot1;
    if (dot2 < 0) dot2 = -dot2;
    if (dot3 < 0) dot3 = -dot3;
    len1 = dot1 * w1 + dot2 * h1 + dot3 * d1;
    len2 = d2;
    overlap6 = (len - len1 - len2) * 1.0;
    if (overlap6 > 0) return; // try axis 7

    len = a7x * a7x + a7y * a7y + a7z * a7z;

    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      a7x *= len;
      a7y *= len;
      a7z *= len;
      len = a7x * dx + a7y * dy + a7z * dz;
      right7 = len > 0;
      if (!right7) len = -len;
      dot1 = a7x * a2x + a7y * a2y + a7z * a2z;
      dot2 = a7x * a3x + a7y * a3y + a7z * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * h1 + dot2 * d1;
      dot1 = a7x * a5x + a7y * a5y + a7z * a5z;
      dot2 = a7x * a6x + a7y * a6y + a7z * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * h2 + dot2 * d2;
      overlap7 = len - len1 - len2;
      if (overlap7 > 0) return;
    } else {
      right7 = false;
      overlap7 = 0;
      invalid7 = true;
    } // try axis 8


    len = a8x * a8x + a8y * a8y + a8z * a8z;

    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      a8x *= len;
      a8y *= len;
      a8z *= len;
      len = a8x * dx + a8y * dy + a8z * dz;
      right8 = len > 0;
      if (!right8) len = -len;
      dot1 = a8x * a2x + a8y * a2y + a8z * a2z;
      dot2 = a8x * a3x + a8y * a3y + a8z * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * h1 + dot2 * d1;
      dot1 = a8x * a4x + a8y * a4y + a8z * a4z;
      dot2 = a8x * a6x + a8y * a6y + a8z * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * d2;
      overlap8 = len - len1 - len2;
      if (overlap8 > 0) return;
    } else {
      right8 = false;
      overlap8 = 0;
      invalid8 = true;
    } // try axis 9


    len = a9x * a9x + a9y * a9y + a9z * a9z;

    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      a9x *= len;
      a9y *= len;
      a9z *= len;
      len = a9x * dx + a9y * dy + a9z * dz;
      right9 = len > 0;
      if (!right9) len = -len;
      dot1 = a9x * a2x + a9y * a2y + a9z * a2z;
      dot2 = a9x * a3x + a9y * a3y + a9z * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * h1 + dot2 * d1;
      dot1 = a9x * a4x + a9y * a4y + a9z * a4z;
      dot2 = a9x * a5x + a9y * a5y + a9z * a5z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * h2;
      overlap9 = len - len1 - len2;
      if (overlap9 > 0) return;
    } else {
      right9 = false;
      overlap9 = 0;
      invalid9 = true;
    } // try axis 10


    len = aax * aax + aay * aay + aaz * aaz;

    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      aax *= len;
      aay *= len;
      aaz *= len;
      len = aax * dx + aay * dy + aaz * dz;
      righta = len > 0;
      if (!righta) len = -len;
      dot1 = aax * a1x + aay * a1y + aaz * a1z;
      dot2 = aax * a3x + aay * a3y + aaz * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * d1;
      dot1 = aax * a5x + aay * a5y + aaz * a5z;
      dot2 = aax * a6x + aay * a6y + aaz * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * h2 + dot2 * d2;
      overlapa = len - len1 - len2;
      if (overlapa > 0) return;
    } else {
      righta = false;
      overlapa = 0;
      invalida = true;
    } // try axis 11


    len = abx * abx + aby * aby + abz * abz;

    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      abx *= len;
      aby *= len;
      abz *= len;
      len = abx * dx + aby * dy + abz * dz;
      rightb = len > 0;
      if (!rightb) len = -len;
      dot1 = abx * a1x + aby * a1y + abz * a1z;
      dot2 = abx * a3x + aby * a3y + abz * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * d1;
      dot1 = abx * a4x + aby * a4y + abz * a4z;
      dot2 = abx * a6x + aby * a6y + abz * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * d2;
      overlapb = len - len1 - len2;
      if (overlapb > 0) return;
    } else {
      rightb = false;
      overlapb = 0;
      invalidb = true;
    } // try axis 12


    len = acx * acx + acy * acy + acz * acz;

    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      acx *= len;
      acy *= len;
      acz *= len;
      len = acx * dx + acy * dy + acz * dz;
      rightc = len > 0;
      if (!rightc) len = -len;
      dot1 = acx * a1x + acy * a1y + acz * a1z;
      dot2 = acx * a3x + acy * a3y + acz * a3z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * d1;
      dot1 = acx * a4x + acy * a4y + acz * a4z;
      dot2 = acx * a5x + acy * a5y + acz * a5z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * h2;
      overlapc = len - len1 - len2;
      if (overlapc > 0) return;
    } else {
      rightc = false;
      overlapc = 0;
      invalidc = true;
    } // try axis 13


    len = adx * adx + ady * ady + adz * adz;

    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      adx *= len;
      ady *= len;
      adz *= len;
      len = adx * dx + ady * dy + adz * dz;
      rightd = len > 0;
      if (!rightd) len = -len;
      dot1 = adx * a1x + ady * a1y + adz * a1z;
      dot2 = adx * a2x + ady * a2y + adz * a2z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * h1;
      dot1 = adx * a5x + ady * a5y + adz * a5z;
      dot2 = adx * a6x + ady * a6y + adz * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * h2 + dot2 * d2;
      overlapd = len - len1 - len2;
      if (overlapd > 0) return;
    } else {
      rightd = false;
      overlapd = 0;
      invalidd = true;
    } // try axis 14


    len = aex * aex + aey * aey + aez * aez;

    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      aex *= len;
      aey *= len;
      aez *= len;
      len = aex * dx + aey * dy + aez * dz;
      righte = len > 0;
      if (!righte) len = -len;
      dot1 = aex * a1x + aey * a1y + aez * a1z;
      dot2 = aex * a2x + aey * a2y + aez * a2z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * h1;
      dot1 = aex * a4x + aey * a4y + aez * a4z;
      dot2 = aex * a6x + aey * a6y + aez * a6z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * d2;
      overlape = len - len1 - len2;
      if (overlape > 0) return;
    } else {
      righte = false;
      overlape = 0;
      invalide = true;
    } // try axis 15


    len = afx * afx + afy * afy + afz * afz;

    if (len > 1e-5) {
      len = 1 / _Math.sqrt(len);
      afx *= len;
      afy *= len;
      afz *= len;
      len = afx * dx + afy * dy + afz * dz;
      rightf = len > 0;
      if (!rightf) len = -len;
      dot1 = afx * a1x + afy * a1y + afz * a1z;
      dot2 = afx * a2x + afy * a2y + afz * a2z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len1 = dot1 * w1 + dot2 * h1;
      dot1 = afx * a4x + afy * a4y + afz * a4z;
      dot2 = afx * a5x + afy * a5y + afz * a5z;
      if (dot1 < 0) dot1 = -dot1;
      if (dot2 < 0) dot2 = -dot2;
      len2 = dot1 * w2 + dot2 * h2;
      overlapf = len - len1 - len2;
      if (overlapf > 0) return;
    } else {
      rightf = false;
      overlapf = 0;
      invalidf = true;
    } // boxes are overlapping


    var depth = overlap1;
    var depth2 = overlap1;
    var minIndex = 0;
    var right = right1;

    if (overlap2 > depth2) {
      depth = overlap2;
      depth2 = overlap2;
      minIndex = 1;
      right = right2;
    }

    if (overlap3 > depth2) {
      depth = overlap3;
      depth2 = overlap3;
      minIndex = 2;
      right = right3;
    }

    if (overlap4 > depth2) {
      depth = overlap4;
      depth2 = overlap4;
      minIndex = 3;
      right = right4;
    }

    if (overlap5 > depth2) {
      depth = overlap5;
      depth2 = overlap5;
      minIndex = 4;
      right = right5;
    }

    if (overlap6 > depth2) {
      depth = overlap6;
      depth2 = overlap6;
      minIndex = 5;
      right = right6;
    }

    if (overlap7 - 0.01 > depth2 && !invalid7) {
      depth = overlap7;
      depth2 = overlap7 - 0.01;
      minIndex = 6;
      right = right7;
    }

    if (overlap8 - 0.01 > depth2 && !invalid8) {
      depth = overlap8;
      depth2 = overlap8 - 0.01;
      minIndex = 7;
      right = right8;
    }

    if (overlap9 - 0.01 > depth2 && !invalid9) {
      depth = overlap9;
      depth2 = overlap9 - 0.01;
      minIndex = 8;
      right = right9;
    }

    if (overlapa - 0.01 > depth2 && !invalida) {
      depth = overlapa;
      depth2 = overlapa - 0.01;
      minIndex = 9;
      right = righta;
    }

    if (overlapb - 0.01 > depth2 && !invalidb) {
      depth = overlapb;
      depth2 = overlapb - 0.01;
      minIndex = 10;
      right = rightb;
    }

    if (overlapc - 0.01 > depth2 && !invalidc) {
      depth = overlapc;
      depth2 = overlapc - 0.01;
      minIndex = 11;
      right = rightc;
    }

    if (overlapd - 0.01 > depth2 && !invalidd) {
      depth = overlapd;
      depth2 = overlapd - 0.01;
      minIndex = 12;
      right = rightd;
    }

    if (overlape - 0.01 > depth2 && !invalide) {
      depth = overlape;
      depth2 = overlape - 0.01;
      minIndex = 13;
      right = righte;
    }

    if (overlapf - 0.01 > depth2 && !invalidf) {
      depth = overlapf;
      minIndex = 14;
      right = rightf;
    } // normal


    var nx = 0;
    var ny = 0;
    var nz = 0; // edge line or face side normal

    var n1x = 0;
    var n1y = 0;
    var n1z = 0;
    var n2x = 0;
    var n2y = 0;
    var n2z = 0; // center of current face

    var cx = 0;
    var cy = 0;
    var cz = 0; // face side

    var s1x = 0;
    var s1y = 0;
    var s1z = 0;
    var s2x = 0;
    var s2y = 0;
    var s2z = 0; // swap b1 b2

    var swap = false; //_______________________________________

    if (minIndex == 0) {
      // b1.x * b2
      if (right) {
        cx = p1x + d1x;
        cy = p1y + d1y;
        cz = p1z + d1z;
        nx = a1x;
        ny = a1y;
        nz = a1z;
      } else {
        cx = p1x - d1x;
        cy = p1y - d1y;
        cz = p1z - d1z;
        nx = -a1x;
        ny = -a1y;
        nz = -a1z;
      }

      s1x = d2x;
      s1y = d2y;
      s1z = d2z;
      n1x = -a2x;
      n1y = -a2y;
      n1z = -a2z;
      s2x = d3x;
      s2y = d3y;
      s2z = d3z;
      n2x = -a3x;
      n2y = -a3y;
      n2z = -a3z;
    } else if (minIndex == 1) {
      // b1.y * b2
      if (right) {
        cx = p1x + d2x;
        cy = p1y + d2y;
        cz = p1z + d2z;
        nx = a2x;
        ny = a2y;
        nz = a2z;
      } else {
        cx = p1x - d2x;
        cy = p1y - d2y;
        cz = p1z - d2z;
        nx = -a2x;
        ny = -a2y;
        nz = -a2z;
      }

      s1x = d1x;
      s1y = d1y;
      s1z = d1z;
      n1x = -a1x;
      n1y = -a1y;
      n1z = -a1z;
      s2x = d3x;
      s2y = d3y;
      s2z = d3z;
      n2x = -a3x;
      n2y = -a3y;
      n2z = -a3z;
    } else if (minIndex == 2) {
      // b1.z * b2
      if (right) {
        cx = p1x + d3x;
        cy = p1y + d3y;
        cz = p1z + d3z;
        nx = a3x;
        ny = a3y;
        nz = a3z;
      } else {
        cx = p1x - d3x;
        cy = p1y - d3y;
        cz = p1z - d3z;
        nx = -a3x;
        ny = -a3y;
        nz = -a3z;
      }

      s1x = d1x;
      s1y = d1y;
      s1z = d1z;
      n1x = -a1x;
      n1y = -a1y;
      n1z = -a1z;
      s2x = d2x;
      s2y = d2y;
      s2z = d2z;
      n2x = -a2x;
      n2y = -a2y;
      n2z = -a2z;
    } else if (minIndex == 3) {
      // b2.x * b1
      swap = true;

      if (!right) {
        cx = p2x + d4x;
        cy = p2y + d4y;
        cz = p2z + d4z;
        nx = a4x;
        ny = a4y;
        nz = a4z;
      } else {
        cx = p2x - d4x;
        cy = p2y - d4y;
        cz = p2z - d4z;
        nx = -a4x;
        ny = -a4y;
        nz = -a4z;
      }

      s1x = d5x;
      s1y = d5y;
      s1z = d5z;
      n1x = -a5x;
      n1y = -a5y;
      n1z = -a5z;
      s2x = d6x;
      s2y = d6y;
      s2z = d6z;
      n2x = -a6x;
      n2y = -a6y;
      n2z = -a6z;
    } else if (minIndex == 4) {
      // b2.y * b1
      swap = true;

      if (!right) {
        cx = p2x + d5x;
        cy = p2y + d5y;
        cz = p2z + d5z;
        nx = a5x;
        ny = a5y;
        nz = a5z;
      } else {
        cx = p2x - d5x;
        cy = p2y - d5y;
        cz = p2z - d5z;
        nx = -a5x;
        ny = -a5y;
        nz = -a5z;
      }

      s1x = d4x;
      s1y = d4y;
      s1z = d4z;
      n1x = -a4x;
      n1y = -a4y;
      n1z = -a4z;
      s2x = d6x;
      s2y = d6y;
      s2z = d6z;
      n2x = -a6x;
      n2y = -a6y;
      n2z = -a6z;
    } else if (minIndex == 5) {
      // b2.z * b1
      swap = true;

      if (!right) {
        cx = p2x + d6x;
        cy = p2y + d6y;
        cz = p2z + d6z;
        nx = a6x;
        ny = a6y;
        nz = a6z;
      } else {
        cx = p2x - d6x;
        cy = p2y - d6y;
        cz = p2z - d6z;
        nx = -a6x;
        ny = -a6y;
        nz = -a6z;
      }

      s1x = d4x;
      s1y = d4y;
      s1z = d4z;
      n1x = -a4x;
      n1y = -a4y;
      n1z = -a4z;
      s2x = d5x;
      s2y = d5y;
      s2z = d5z;
      n2x = -a5x;
      n2y = -a5y;
      n2z = -a5z;
    } else if (minIndex == 6) {
      // b1.x * b2.x
      nx = a7x;
      ny = a7y;
      nz = a7z;
      n1x = a1x;
      n1y = a1y;
      n1z = a1z;
      n2x = a4x;
      n2y = a4y;
      n2z = a4z;
    } else if (minIndex == 7) {
      // b1.x * b2.y
      nx = a8x;
      ny = a8y;
      nz = a8z;
      n1x = a1x;
      n1y = a1y;
      n1z = a1z;
      n2x = a5x;
      n2y = a5y;
      n2z = a5z;
    } else if (minIndex == 8) {
      // b1.x * b2.z
      nx = a9x;
      ny = a9y;
      nz = a9z;
      n1x = a1x;
      n1y = a1y;
      n1z = a1z;
      n2x = a6x;
      n2y = a6y;
      n2z = a6z;
    } else if (minIndex == 9) {
      // b1.y * b2.x
      nx = aax;
      ny = aay;
      nz = aaz;
      n1x = a2x;
      n1y = a2y;
      n1z = a2z;
      n2x = a4x;
      n2y = a4y;
      n2z = a4z;
    } else if (minIndex == 10) {
      // b1.y * b2.y
      nx = abx;
      ny = aby;
      nz = abz;
      n1x = a2x;
      n1y = a2y;
      n1z = a2z;
      n2x = a5x;
      n2y = a5y;
      n2z = a5z;
    } else if (minIndex == 11) {
      // b1.y * b2.z
      nx = acx;
      ny = acy;
      nz = acz;
      n1x = a2x;
      n1y = a2y;
      n1z = a2z;
      n2x = a6x;
      n2y = a6y;
      n2z = a6z;
    } else if (minIndex == 12) {
      // b1.z * b2.x
      nx = adx;
      ny = ady;
      nz = adz;
      n1x = a3x;
      n1y = a3y;
      n1z = a3z;
      n2x = a4x;
      n2y = a4y;
      n2z = a4z;
    } else if (minIndex == 13) {
      // b1.z * b2.y
      nx = aex;
      ny = aey;
      nz = aez;
      n1x = a3x;
      n1y = a3y;
      n1z = a3z;
      n2x = a5x;
      n2y = a5y;
      n2z = a5z;
    } else if (minIndex == 14) {
      // b1.z * b2.z
      nx = afx;
      ny = afy;
      nz = afz;
      n1x = a3x;
      n1y = a3y;
      n1z = a3z;
      n2x = a6x;
      n2y = a6y;
      n2z = a6z;
    } //__________________________________________
    //var v;


    if (minIndex > 5) {
      if (!right) {
        nx = -nx;
        ny = -ny;
        nz = -nz;
      }

      var distance;
      var maxDistance;
      var vx;
      var vy;
      var vz;
      var v1x;
      var v1y;
      var v1z;
      var v2x;
      var v2y;
      var v2z; //vertex1;

      v1x = V1[0];
      v1y = V1[1];
      v1z = V1[2];
      maxDistance = nx * v1x + ny * v1y + nz * v1z; //vertex2;

      vx = V1[3];
      vy = V1[4];
      vz = V1[5];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      } //vertex3;


      vx = V1[6];
      vy = V1[7];
      vz = V1[8];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      } //vertex4;


      vx = V1[9];
      vy = V1[10];
      vz = V1[11];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      } //vertex5;


      vx = V1[12];
      vy = V1[13];
      vz = V1[14];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      } //vertex6;


      vx = V1[15];
      vy = V1[16];
      vz = V1[17];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      } //vertex7;


      vx = V1[18];
      vy = V1[19];
      vz = V1[20];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      } //vertex8;


      vx = V1[21];
      vy = V1[22];
      vz = V1[23];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance > maxDistance) {
        maxDistance = distance;
        v1x = vx;
        v1y = vy;
        v1z = vz;
      } //vertex1;


      v2x = V2[0];
      v2y = V2[1];
      v2z = V2[2];
      maxDistance = nx * v2x + ny * v2y + nz * v2z; //vertex2;

      vx = V2[3];
      vy = V2[4];
      vz = V2[5];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      } //vertex3;


      vx = V2[6];
      vy = V2[7];
      vz = V2[8];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      } //vertex4;


      vx = V2[9];
      vy = V2[10];
      vz = V2[11];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      } //vertex5;


      vx = V2[12];
      vy = V2[13];
      vz = V2[14];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      } //vertex6;


      vx = V2[15];
      vy = V2[16];
      vz = V2[17];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      } //vertex7;


      vx = V2[18];
      vy = V2[19];
      vz = V2[20];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      } //vertex8;


      vx = V2[21];
      vy = V2[22];
      vz = V2[23];
      distance = nx * vx + ny * vy + nz * vz;

      if (distance < maxDistance) {
        maxDistance = distance;
        v2x = vx;
        v2y = vy;
        v2z = vz;
      }

      vx = v2x - v1x;
      vy = v2y - v1y;
      vz = v2z - v1z;
      dot1 = n1x * n2x + n1y * n2y + n1z * n2z;
      var t = (vx * (n1x - n2x * dot1) + vy * (n1y - n2y * dot1) + vz * (n1z - n2z * dot1)) / (1 - dot1 * dot1);
      manifold.addPoint(v1x + n1x * t + nx * depth * 0.5, v1y + n1y * t + ny * depth * 0.5, v1z + n1z * t + nz * depth * 0.5, nx, ny, nz, depth, false);
      return;
    } // now detect face-face collision...
    // target quad


    var q1x;
    var q1y;
    var q1z;
    var q2x;
    var q2y;
    var q2z;
    var q3x;
    var q3y;
    var q3z;
    var q4x;
    var q4y;
    var q4z; // search support face and vertex

    var minDot = 1;
    var dot = 0;
    var minDotIndex = 0;

    if (swap) {
      dot = a1x * nx + a1y * ny + a1z * nz;

      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 0;
      }

      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 1;
      }

      dot = a2x * nx + a2y * ny + a2z * nz;

      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 2;
      }

      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 3;
      }

      dot = a3x * nx + a3y * ny + a3z * nz;

      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 4;
      }

      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 5;
      }

      if (minDotIndex == 0) {
        // x+ face
        q1x = V1[0];
        q1y = V1[1];
        q1z = V1[2]; //vertex1

        q2x = V1[6];
        q2y = V1[7];
        q2z = V1[8]; //vertex3

        q3x = V1[9];
        q3y = V1[10];
        q3z = V1[11]; //vertex4

        q4x = V1[3];
        q4y = V1[4];
        q4z = V1[5]; //vertex2
      } else if (minDotIndex == 1) {
        // x- face
        q1x = V1[15];
        q1y = V1[16];
        q1z = V1[17]; //vertex6

        q2x = V1[21];
        q2y = V1[22];
        q2z = V1[23]; //vertex8

        q3x = V1[18];
        q3y = V1[19];
        q3z = V1[20]; //vertex7

        q4x = V1[12];
        q4y = V1[13];
        q4z = V1[14]; //vertex5
      } else if (minDotIndex == 2) {
        // y+ face
        q1x = V1[12];
        q1y = V1[13];
        q1z = V1[14]; //vertex5

        q2x = V1[0];
        q2y = V1[1];
        q2z = V1[2]; //vertex1

        q3x = V1[3];
        q3y = V1[4];
        q3z = V1[5]; //vertex2

        q4x = V1[15];
        q4y = V1[16];
        q4z = V1[17]; //vertex6
      } else if (minDotIndex == 3) {
        // y- face
        q1x = V1[21];
        q1y = V1[22];
        q1z = V1[23]; //vertex8

        q2x = V1[9];
        q2y = V1[10];
        q2z = V1[11]; //vertex4

        q3x = V1[6];
        q3y = V1[7];
        q3z = V1[8]; //vertex3

        q4x = V1[18];
        q4y = V1[19];
        q4z = V1[20]; //vertex7
      } else if (minDotIndex == 4) {
        // z+ face
        q1x = V1[12];
        q1y = V1[13];
        q1z = V1[14]; //vertex5

        q2x = V1[18];
        q2y = V1[19];
        q2z = V1[20]; //vertex7

        q3x = V1[6];
        q3y = V1[7];
        q3z = V1[8]; //vertex3

        q4x = V1[0];
        q4y = V1[1];
        q4z = V1[2]; //vertex1
      } else if (minDotIndex == 5) {
        // z- face
        q1x = V1[3];
        q1y = V1[4];
        q1z = V1[5]; //vertex2
        //2x=V1[6]; q2y=V1[7]; q2z=V1[8];//vertex4 !!!

        q2x = V2[9];
        q2y = V2[10];
        q2z = V2[11]; //vertex4

        q3x = V1[21];
        q3y = V1[22];
        q3z = V1[23]; //vertex8

        q4x = V1[15];
        q4y = V1[16];
        q4z = V1[17]; //vertex6
      }
    } else {
      dot = a4x * nx + a4y * ny + a4z * nz;

      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 0;
      }

      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 1;
      }

      dot = a5x * nx + a5y * ny + a5z * nz;

      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 2;
      }

      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 3;
      }

      dot = a6x * nx + a6y * ny + a6z * nz;

      if (dot < minDot) {
        minDot = dot;
        minDotIndex = 4;
      }

      if (-dot < minDot) {
        minDot = -dot;
        minDotIndex = 5;
      } //______________________________________________________


      if (minDotIndex == 0) {
        // x+ face
        q1x = V2[0];
        q1y = V2[1];
        q1z = V2[2]; //vertex1

        q2x = V2[6];
        q2y = V2[7];
        q2z = V2[8]; //vertex3

        q3x = V2[9];
        q3y = V2[10];
        q3z = V2[11]; //vertex4

        q4x = V2[3];
        q4y = V2[4];
        q4z = V2[5]; //vertex2
      } else if (minDotIndex == 1) {
        // x- face
        q1x = V2[15];
        q1y = V2[16];
        q1z = V2[17]; //vertex6

        q2x = V2[21];
        q2y = V2[22];
        q2z = V2[23]; //vertex8

        q3x = V2[18];
        q3y = V2[19];
        q3z = V2[20]; //vertex7

        q4x = V2[12];
        q4y = V2[13];
        q4z = V2[14]; //vertex5
      } else if (minDotIndex == 2) {
        // y+ face
        q1x = V2[12];
        q1y = V2[13];
        q1z = V2[14]; //vertex5

        q2x = V2[0];
        q2y = V2[1];
        q2z = V2[2]; //vertex1

        q3x = V2[3];
        q3y = V2[4];
        q3z = V2[5]; //vertex2

        q4x = V2[15];
        q4y = V2[16];
        q4z = V2[17]; //vertex6
      } else if (minDotIndex == 3) {
        // y- face
        q1x = V2[21];
        q1y = V2[22];
        q1z = V2[23]; //vertex8

        q2x = V2[9];
        q2y = V2[10];
        q2z = V2[11]; //vertex4

        q3x = V2[6];
        q3y = V2[7];
        q3z = V2[8]; //vertex3

        q4x = V2[18];
        q4y = V2[19];
        q4z = V2[20]; //vertex7
      } else if (minDotIndex == 4) {
        // z+ face
        q1x = V2[12];
        q1y = V2[13];
        q1z = V2[14]; //vertex5

        q2x = V2[18];
        q2y = V2[19];
        q2z = V2[20]; //vertex7

        q3x = V2[6];
        q3y = V2[7];
        q3z = V2[8]; //vertex3

        q4x = V2[0];
        q4y = V2[1];
        q4z = V2[2]; //vertex1
      } else if (minDotIndex == 5) {
        // z- face
        q1x = V2[3];
        q1y = V2[4];
        q1z = V2[5]; //vertex2

        q2x = V2[9];
        q2y = V2[10];
        q2z = V2[11]; //vertex4

        q3x = V2[21];
        q3y = V2[22];
        q3z = V2[23]; //vertex8

        q4x = V2[15];
        q4y = V2[16];
        q4z = V2[17]; //vertex6
      }
    } // clip vertices


    var numClipVertices;
    var numAddedClipVertices;
    var index;
    var x1;
    var y1;
    var z1;
    var x2;
    var y2;
    var z2;
    this.clipVertices1[0] = q1x;
    this.clipVertices1[1] = q1y;
    this.clipVertices1[2] = q1z;
    this.clipVertices1[3] = q2x;
    this.clipVertices1[4] = q2y;
    this.clipVertices1[5] = q2z;
    this.clipVertices1[6] = q3x;
    this.clipVertices1[7] = q3y;
    this.clipVertices1[8] = q3z;
    this.clipVertices1[9] = q4x;
    this.clipVertices1[10] = q4y;
    this.clipVertices1[11] = q4z;
    numAddedClipVertices = 0;
    x1 = this.clipVertices1[9];
    y1 = this.clipVertices1[10];
    z1 = this.clipVertices1[11];
    dot1 = (x1 - cx - s1x) * n1x + (y1 - cy - s1y) * n1y + (z1 - cz - s1z) * n1z; //var i = 4;
    //while(i--){

    for (var i = 0; i < 4; i++) {
      index = i * 3;
      x2 = this.clipVertices1[index];
      y2 = this.clipVertices1[index + 1];
      z2 = this.clipVertices1[index + 2];
      dot2 = (x2 - cx - s1x) * n1x + (y2 - cy - s1y) * n1y + (z2 - cz - s1z) * n1z;

      if (dot1 > 0) {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices2[index] = x2;
          this.clipVertices2[index + 1] = y2;
          this.clipVertices2[index + 2] = z2;
        } else {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices2[index] = x1 + (x2 - x1) * t;
          this.clipVertices2[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices2[index + 2] = z1 + (z2 - z1) * t;
        }
      } else {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices2[index] = x1 + (x2 - x1) * t;
          this.clipVertices2[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices2[index + 2] = z1 + (z2 - z1) * t;
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices2[index] = x2;
          this.clipVertices2[index + 1] = y2;
          this.clipVertices2[index + 2] = z2;
        }
      }

      x1 = x2;
      y1 = y2;
      z1 = z2;
      dot1 = dot2;
    }

    numClipVertices = numAddedClipVertices;
    if (numClipVertices == 0) return;
    numAddedClipVertices = 0;
    index = (numClipVertices - 1) * 3;
    x1 = this.clipVertices2[index];
    y1 = this.clipVertices2[index + 1];
    z1 = this.clipVertices2[index + 2];
    dot1 = (x1 - cx - s2x) * n2x + (y1 - cy - s2y) * n2y + (z1 - cz - s2z) * n2z; //i = numClipVertices;
    //while(i--){

    for (i = 0; i < numClipVertices; i++) {
      index = i * 3;
      x2 = this.clipVertices2[index];
      y2 = this.clipVertices2[index + 1];
      z2 = this.clipVertices2[index + 2];
      dot2 = (x2 - cx - s2x) * n2x + (y2 - cy - s2y) * n2y + (z2 - cz - s2z) * n2z;

      if (dot1 > 0) {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices1[index] = x2;
          this.clipVertices1[index + 1] = y2;
          this.clipVertices1[index + 2] = z2;
        } else {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices1[index] = x1 + (x2 - x1) * t;
          this.clipVertices1[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices1[index + 2] = z1 + (z2 - z1) * t;
        }
      } else {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices1[index] = x1 + (x2 - x1) * t;
          this.clipVertices1[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices1[index + 2] = z1 + (z2 - z1) * t;
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices1[index] = x2;
          this.clipVertices1[index + 1] = y2;
          this.clipVertices1[index + 2] = z2;
        }
      }

      x1 = x2;
      y1 = y2;
      z1 = z2;
      dot1 = dot2;
    }

    numClipVertices = numAddedClipVertices;
    if (numClipVertices == 0) return;
    numAddedClipVertices = 0;
    index = (numClipVertices - 1) * 3;
    x1 = this.clipVertices1[index];
    y1 = this.clipVertices1[index + 1];
    z1 = this.clipVertices1[index + 2];
    dot1 = (x1 - cx + s1x) * -n1x + (y1 - cy + s1y) * -n1y + (z1 - cz + s1z) * -n1z; //i = numClipVertices;
    //while(i--){

    for (i = 0; i < numClipVertices; i++) {
      index = i * 3;
      x2 = this.clipVertices1[index];
      y2 = this.clipVertices1[index + 1];
      z2 = this.clipVertices1[index + 2];
      dot2 = (x2 - cx + s1x) * -n1x + (y2 - cy + s1y) * -n1y + (z2 - cz + s1z) * -n1z;

      if (dot1 > 0) {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices2[index] = x2;
          this.clipVertices2[index + 1] = y2;
          this.clipVertices2[index + 2] = z2;
        } else {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices2[index] = x1 + (x2 - x1) * t;
          this.clipVertices2[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices2[index + 2] = z1 + (z2 - z1) * t;
        }
      } else {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices2[index] = x1 + (x2 - x1) * t;
          this.clipVertices2[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices2[index + 2] = z1 + (z2 - z1) * t;
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices2[index] = x2;
          this.clipVertices2[index + 1] = y2;
          this.clipVertices2[index + 2] = z2;
        }
      }

      x1 = x2;
      y1 = y2;
      z1 = z2;
      dot1 = dot2;
    }

    numClipVertices = numAddedClipVertices;
    if (numClipVertices == 0) return;
    numAddedClipVertices = 0;
    index = (numClipVertices - 1) * 3;
    x1 = this.clipVertices2[index];
    y1 = this.clipVertices2[index + 1];
    z1 = this.clipVertices2[index + 2];
    dot1 = (x1 - cx + s2x) * -n2x + (y1 - cy + s2y) * -n2y + (z1 - cz + s2z) * -n2z; //i = numClipVertices;
    //while(i--){

    for (i = 0; i < numClipVertices; i++) {
      index = i * 3;
      x2 = this.clipVertices2[index];
      y2 = this.clipVertices2[index + 1];
      z2 = this.clipVertices2[index + 2];
      dot2 = (x2 - cx + s2x) * -n2x + (y2 - cy + s2y) * -n2y + (z2 - cz + s2z) * -n2z;

      if (dot1 > 0) {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices1[index] = x2;
          this.clipVertices1[index + 1] = y2;
          this.clipVertices1[index + 2] = z2;
        } else {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices1[index] = x1 + (x2 - x1) * t;
          this.clipVertices1[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices1[index + 2] = z1 + (z2 - z1) * t;
        }
      } else {
        if (dot2 > 0) {
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          t = dot1 / (dot1 - dot2);
          this.clipVertices1[index] = x1 + (x2 - x1) * t;
          this.clipVertices1[index + 1] = y1 + (y2 - y1) * t;
          this.clipVertices1[index + 2] = z1 + (z2 - z1) * t;
          index = numAddedClipVertices * 3;
          numAddedClipVertices++;
          this.clipVertices1[index] = x2;
          this.clipVertices1[index + 1] = y2;
          this.clipVertices1[index + 2] = z2;
        }
      }

      x1 = x2;
      y1 = y2;
      z1 = z2;
      dot1 = dot2;
    }

    numClipVertices = numAddedClipVertices;

    if (swap) {
      var tb = b1;
      b1 = b2;
      b2 = tb;
    }

    if (numClipVertices == 0) return;
    var flipped = b1 != shape1;

    if (numClipVertices > 4) {
      x1 = (q1x + q2x + q3x + q4x) * 0.25;
      y1 = (q1y + q2y + q3y + q4y) * 0.25;
      z1 = (q1z + q2z + q3z + q4z) * 0.25;
      n1x = q1x - x1;
      n1y = q1y - y1;
      n1z = q1z - z1;
      n2x = q2x - x1;
      n2y = q2y - y1;
      n2z = q2z - z1;
      var index1 = 0;
      var index2 = 0;
      var index3 = 0;
      var index4 = 0;
      var maxDot = -this.INF;
      minDot = this.INF; //i = numClipVertices;
      //while(i--){

      for (i = 0; i < numClipVertices; i++) {
        this.used[i] = false;
        index = i * 3;
        x1 = this.clipVertices1[index];
        y1 = this.clipVertices1[index + 1];
        z1 = this.clipVertices1[index + 2];
        dot = x1 * n1x + y1 * n1y + z1 * n1z;

        if (dot < minDot) {
          minDot = dot;
          index1 = i;
        }

        if (dot > maxDot) {
          maxDot = dot;
          index3 = i;
        }
      }

      this.used[index1] = true;
      this.used[index3] = true;
      maxDot = -this.INF;
      minDot = this.INF; //i = numClipVertices;
      //while(i--){

      for (i = 0; i < numClipVertices; i++) {
        if (this.used[i]) continue;
        index = i * 3;
        x1 = this.clipVertices1[index];
        y1 = this.clipVertices1[index + 1];
        z1 = this.clipVertices1[index + 2];
        dot = x1 * n2x + y1 * n2y + z1 * n2z;

        if (dot < minDot) {
          minDot = dot;
          index2 = i;
        }

        if (dot > maxDot) {
          maxDot = dot;
          index4 = i;
        }
      }

      index = index1 * 3;
      x1 = this.clipVertices1[index];
      y1 = this.clipVertices1[index + 1];
      z1 = this.clipVertices1[index + 2];
      dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
      if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
      index = index2 * 3;
      x1 = this.clipVertices1[index];
      y1 = this.clipVertices1[index + 1];
      z1 = this.clipVertices1[index + 2];
      dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
      if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
      index = index3 * 3;
      x1 = this.clipVertices1[index];
      y1 = this.clipVertices1[index + 1];
      z1 = this.clipVertices1[index + 2];
      dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
      if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
      index = index4 * 3;
      x1 = this.clipVertices1[index];
      y1 = this.clipVertices1[index + 1];
      z1 = this.clipVertices1[index + 2];
      dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
      if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
    } else {
      //i = numClipVertices;
      //while(i--){
      for (i = 0; i < numClipVertices; i++) {
        index = i * 3;
        x1 = this.clipVertices1[index];
        y1 = this.clipVertices1[index + 1];
        z1 = this.clipVertices1[index + 2];
        dot = (x1 - cx) * nx + (y1 - cy) * ny + (z1 - cz) * nz;
        if (dot < 0) manifold.addPoint(x1, y1, z1, nx, ny, nz, dot, flipped);
      }
    }
  }
});

function BoxCylinderCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
}

BoxCylinderCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: BoxCylinderCollisionDetector,
  getSep: function (c1, c2, sep, pos, dep) {
    var t1x;
    var t1y;
    var t1z;
    var t2x;
    var t2y;
    var t2z;
    var sup = new Vec3();
    var len;
    var p1x;
    var p1y;
    var p1z;
    var p2x;
    var p2y;
    var p2z;
    var v01x = c1.position.x;
    var v01y = c1.position.y;
    var v01z = c1.position.z;
    var v02x = c2.position.x;
    var v02y = c2.position.y;
    var v02z = c2.position.z;
    var v0x = v02x - v01x;
    var v0y = v02y - v01y;
    var v0z = v02z - v01z;
    if (v0x * v0x + v0y * v0y + v0z * v0z == 0) v0y = 0.001;
    var nx = -v0x;
    var ny = -v0y;
    var nz = -v0z;
    this.supportPointB(c1, -nx, -ny, -nz, sup);
    var v11x = sup.x;
    var v11y = sup.y;
    var v11z = sup.z;
    this.supportPointC(c2, nx, ny, nz, sup);
    var v12x = sup.x;
    var v12y = sup.y;
    var v12z = sup.z;
    var v1x = v12x - v11x;
    var v1y = v12y - v11y;
    var v1z = v12z - v11z;

    if (v1x * nx + v1y * ny + v1z * nz <= 0) {
      return false;
    }

    nx = v1y * v0z - v1z * v0y;
    ny = v1z * v0x - v1x * v0z;
    nz = v1x * v0y - v1y * v0x;

    if (nx * nx + ny * ny + nz * nz == 0) {
      sep.set(v1x - v0x, v1y - v0y, v1z - v0z).normalize();
      pos.set((v11x + v12x) * 0.5, (v11y + v12y) * 0.5, (v11z + v12z) * 0.5);
      return true;
    }

    this.supportPointB(c1, -nx, -ny, -nz, sup);
    var v21x = sup.x;
    var v21y = sup.y;
    var v21z = sup.z;
    this.supportPointC(c2, nx, ny, nz, sup);
    var v22x = sup.x;
    var v22y = sup.y;
    var v22z = sup.z;
    var v2x = v22x - v21x;
    var v2y = v22y - v21y;
    var v2z = v22z - v21z;

    if (v2x * nx + v2y * ny + v2z * nz <= 0) {
      return false;
    }

    t1x = v1x - v0x;
    t1y = v1y - v0y;
    t1z = v1z - v0z;
    t2x = v2x - v0x;
    t2y = v2y - v0y;
    t2z = v2z - v0z;
    nx = t1y * t2z - t1z * t2y;
    ny = t1z * t2x - t1x * t2z;
    nz = t1x * t2y - t1y * t2x;

    if (nx * v0x + ny * v0y + nz * v0z > 0) {
      t1x = v1x;
      t1y = v1y;
      t1z = v1z;
      v1x = v2x;
      v1y = v2y;
      v1z = v2z;
      v2x = t1x;
      v2y = t1y;
      v2z = t1z;
      t1x = v11x;
      t1y = v11y;
      t1z = v11z;
      v11x = v21x;
      v11y = v21y;
      v11z = v21z;
      v21x = t1x;
      v21y = t1y;
      v21z = t1z;
      t1x = v12x;
      t1y = v12y;
      t1z = v12z;
      v12x = v22x;
      v12y = v22y;
      v12z = v22z;
      v22x = t1x;
      v22y = t1y;
      v22z = t1z;
      nx = -nx;
      ny = -ny;
      nz = -nz;
    }

    var iterations = 0;

    while (true) {
      if (++iterations > 100) {
        return false;
      }

      this.supportPointB(c1, -nx, -ny, -nz, sup);
      var v31x = sup.x;
      var v31y = sup.y;
      var v31z = sup.z;
      this.supportPointC(c2, nx, ny, nz, sup);
      var v32x = sup.x;
      var v32y = sup.y;
      var v32z = sup.z;
      var v3x = v32x - v31x;
      var v3y = v32y - v31y;
      var v3z = v32z - v31z;

      if (v3x * nx + v3y * ny + v3z * nz <= 0) {
        return false;
      }

      if ((v1y * v3z - v1z * v3y) * v0x + (v1z * v3x - v1x * v3z) * v0y + (v1x * v3y - v1y * v3x) * v0z < 0) {
        v2x = v3x;
        v2y = v3y;
        v2z = v3z;
        v21x = v31x;
        v21y = v31y;
        v21z = v31z;
        v22x = v32x;
        v22y = v32y;
        v22z = v32z;
        t1x = v1x - v0x;
        t1y = v1y - v0y;
        t1z = v1z - v0z;
        t2x = v3x - v0x;
        t2y = v3y - v0y;
        t2z = v3z - v0z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        continue;
      }

      if ((v3y * v2z - v3z * v2y) * v0x + (v3z * v2x - v3x * v2z) * v0y + (v3x * v2y - v3y * v2x) * v0z < 0) {
        v1x = v3x;
        v1y = v3y;
        v1z = v3z;
        v11x = v31x;
        v11y = v31y;
        v11z = v31z;
        v12x = v32x;
        v12y = v32y;
        v12z = v32z;
        t1x = v3x - v0x;
        t1y = v3y - v0y;
        t1z = v3z - v0z;
        t2x = v2x - v0x;
        t2y = v2y - v0y;
        t2z = v2z - v0z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        continue;
      }

      var hit = false;

      while (true) {
        t1x = v2x - v1x;
        t1y = v2y - v1y;
        t1z = v2z - v1z;
        t2x = v3x - v1x;
        t2y = v3y - v1y;
        t2z = v3z - v1z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        len = 1 / _Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx *= len;
        ny *= len;
        nz *= len;

        if (nx * v1x + ny * v1y + nz * v1z >= 0 && !hit) {
          var b0 = (v1y * v2z - v1z * v2y) * v3x + (v1z * v2x - v1x * v2z) * v3y + (v1x * v2y - v1y * v2x) * v3z;
          var b1 = (v3y * v2z - v3z * v2y) * v0x + (v3z * v2x - v3x * v2z) * v0y + (v3x * v2y - v3y * v2x) * v0z;
          var b2 = (v0y * v1z - v0z * v1y) * v3x + (v0z * v1x - v0x * v1z) * v3y + (v0x * v1y - v0y * v1x) * v3z;
          var b3 = (v2y * v1z - v2z * v1y) * v0x + (v2z * v1x - v2x * v1z) * v0y + (v2x * v1y - v2y * v1x) * v0z;
          var sum = b0 + b1 + b2 + b3;

          if (sum <= 0) {
            b0 = 0;
            b1 = (v2y * v3z - v2z * v3y) * nx + (v2z * v3x - v2x * v3z) * ny + (v2x * v3y - v2y * v3x) * nz;
            b2 = (v3y * v2z - v3z * v2y) * nx + (v3z * v2x - v3x * v2z) * ny + (v3x * v2y - v3y * v2x) * nz;
            b3 = (v1y * v2z - v1z * v2y) * nx + (v1z * v2x - v1x * v2z) * ny + (v1x * v2y - v1y * v2x) * nz;
            sum = b1 + b2 + b3;
          }

          var inv = 1 / sum;
          p1x = (v01x * b0 + v11x * b1 + v21x * b2 + v31x * b3) * inv;
          p1y = (v01y * b0 + v11y * b1 + v21y * b2 + v31y * b3) * inv;
          p1z = (v01z * b0 + v11z * b1 + v21z * b2 + v31z * b3) * inv;
          p2x = (v02x * b0 + v12x * b1 + v22x * b2 + v32x * b3) * inv;
          p2y = (v02y * b0 + v12y * b1 + v22y * b2 + v32y * b3) * inv;
          p2z = (v02z * b0 + v12z * b1 + v22z * b2 + v32z * b3) * inv;
          hit = true;
        }

        this.supportPointB(c1, -nx, -ny, -nz, sup);
        var v41x = sup.x;
        var v41y = sup.y;
        var v41z = sup.z;
        this.supportPointC(c2, nx, ny, nz, sup);
        var v42x = sup.x;
        var v42y = sup.y;
        var v42z = sup.z;
        var v4x = v42x - v41x;
        var v4y = v42y - v41y;
        var v4z = v42z - v41z;
        var separation = -(v4x * nx + v4y * ny + v4z * nz);

        if ((v4x - v3x) * nx + (v4y - v3y) * ny + (v4z - v3z) * nz <= 0.01 || separation >= 0) {
          if (hit) {
            sep.set(-nx, -ny, -nz);
            pos.set((p1x + p2x) * 0.5, (p1y + p2y) * 0.5, (p1z + p2z) * 0.5);
            dep.x = separation;
            return true;
          }

          return false;
        }

        if ((v4y * v1z - v4z * v1y) * v0x + (v4z * v1x - v4x * v1z) * v0y + (v4x * v1y - v4y * v1x) * v0z < 0) {
          if ((v4y * v2z - v4z * v2y) * v0x + (v4z * v2x - v4x * v2z) * v0y + (v4x * v2y - v4y * v2x) * v0z < 0) {
            v1x = v4x;
            v1y = v4y;
            v1z = v4z;
            v11x = v41x;
            v11y = v41y;
            v11z = v41z;
            v12x = v42x;
            v12y = v42y;
            v12z = v42z;
          } else {
            v3x = v4x;
            v3y = v4y;
            v3z = v4z;
            v31x = v41x;
            v31y = v41y;
            v31z = v41z;
            v32x = v42x;
            v32y = v42y;
            v32z = v42z;
          }
        } else {
          if ((v4y * v3z - v4z * v3y) * v0x + (v4z * v3x - v4x * v3z) * v0y + (v4x * v3y - v4y * v3x) * v0z < 0) {
            v2x = v4x;
            v2y = v4y;
            v2z = v4z;
            v21x = v41x;
            v21y = v41y;
            v21z = v41z;
            v22x = v42x;
            v22y = v42y;
            v22z = v42z;
          } else {
            v1x = v4x;
            v1y = v4y;
            v1z = v4z;
            v11x = v41x;
            v11y = v41y;
            v11z = v41z;
            v12x = v42x;
            v12y = v42y;
            v12z = v42z;
          }
        }
      }
    } //return false;

  },
  supportPointB: function (c, dx, dy, dz, out) {
    var rot = c.rotation.elements;
    var ldx = rot[0] * dx + rot[3] * dy + rot[6] * dz;
    var ldy = rot[1] * dx + rot[4] * dy + rot[7] * dz;
    var ldz = rot[2] * dx + rot[5] * dy + rot[8] * dz;
    var w = c.halfWidth;
    var h = c.halfHeight;
    var d = c.halfDepth;
    var ox;
    var oy;
    var oz;
    if (ldx < 0) ox = -w;else ox = w;
    if (ldy < 0) oy = -h;else oy = h;
    if (ldz < 0) oz = -d;else oz = d;
    ldx = rot[0] * ox + rot[1] * oy + rot[2] * oz + c.position.x;
    ldy = rot[3] * ox + rot[4] * oy + rot[5] * oz + c.position.y;
    ldz = rot[6] * ox + rot[7] * oy + rot[8] * oz + c.position.z;
    out.set(ldx, ldy, ldz);
  },
  supportPointC: function (c, dx, dy, dz, out) {
    var rot = c.rotation.elements;
    var ldx = rot[0] * dx + rot[3] * dy + rot[6] * dz;
    var ldy = rot[1] * dx + rot[4] * dy + rot[7] * dz;
    var ldz = rot[2] * dx + rot[5] * dy + rot[8] * dz;
    var radx = ldx;
    var radz = ldz;
    var len = radx * radx + radz * radz;
    var rad = c.radius;
    var hh = c.halfHeight;
    var ox;
    var oy;
    var oz;

    if (len == 0) {
      if (ldy < 0) {
        ox = rad;
        oy = -hh;
        oz = 0;
      } else {
        ox = rad;
        oy = hh;
        oz = 0;
      }
    } else {
      len = c.radius / _Math.sqrt(len);

      if (ldy < 0) {
        ox = radx * len;
        oy = -hh;
        oz = radz * len;
      } else {
        ox = radx * len;
        oy = hh;
        oz = radz * len;
      }
    }

    ldx = rot[0] * ox + rot[1] * oy + rot[2] * oz + c.position.x;
    ldy = rot[3] * ox + rot[4] * oy + rot[5] * oz + c.position.y;
    ldz = rot[6] * ox + rot[7] * oy + rot[8] * oz + c.position.z;
    out.set(ldx, ldy, ldz);
  },
  detectCollision: function (shape1, shape2, manifold) {
    var b;
    var c;

    if (this.flip) {
      b = shape2;
      c = shape1;
    } else {
      b = shape1;
      c = shape2;
    }

    var sep = new Vec3();
    var pos = new Vec3();
    var dep = new Vec3();
    if (!this.getSep(b, c, sep, pos, dep)) return;
    var pbx = b.position.x;
    var pby = b.position.y;
    var pbz = b.position.z;
    var pcx = c.position.x;
    var pcy = c.position.y;
    var pcz = c.position.z;
    var bw = b.halfWidth;
    var bh = b.halfHeight;
    var bd = b.halfDepth;
    var ch = c.halfHeight;
    var r = c.radius;
    var D = b.dimentions;
    var nwx = D[0]; //b.normalDirectionWidth.x;

    var nwy = D[1]; //b.normalDirectionWidth.y;

    var nwz = D[2]; //b.normalDirectionWidth.z;

    var nhx = D[3]; //b.normalDirectionHeight.x;

    var nhy = D[4]; //b.normalDirectionHeight.y;

    var nhz = D[5]; //b.normalDirectionHeight.z;

    var ndx = D[6]; //b.normalDirectionDepth.x;

    var ndy = D[7]; //b.normalDirectionDepth.y;

    var ndz = D[8]; //b.normalDirectionDepth.z;

    var dwx = D[9]; //b.halfDirectionWidth.x;

    var dwy = D[10]; //b.halfDirectionWidth.y;

    var dwz = D[11]; //b.halfDirectionWidth.z;

    var dhx = D[12]; //b.halfDirectionHeight.x;

    var dhy = D[13]; //b.halfDirectionHeight.y;

    var dhz = D[14]; //b.halfDirectionHeight.z;

    var ddx = D[15]; //b.halfDirectionDepth.x;

    var ddy = D[16]; //b.halfDirectionDepth.y;

    var ddz = D[17]; //b.halfDirectionDepth.z;

    var ncx = c.normalDirection.x;
    var ncy = c.normalDirection.y;
    var ncz = c.normalDirection.z;
    var dcx = c.halfDirection.x;
    var dcy = c.halfDirection.y;
    var dcz = c.halfDirection.z;
    var nx = sep.x;
    var ny = sep.y;
    var nz = sep.z;
    var dotw = nx * nwx + ny * nwy + nz * nwz;
    var doth = nx * nhx + ny * nhy + nz * nhz;
    var dotd = nx * ndx + ny * ndy + nz * ndz;
    var dotc = nx * ncx + ny * ncy + nz * ncz;
    var right1 = dotw > 0;
    var right2 = doth > 0;
    var right3 = dotd > 0;
    var right4 = dotc > 0;
    if (!right1) dotw = -dotw;
    if (!right2) doth = -doth;
    if (!right3) dotd = -dotd;
    if (!right4) dotc = -dotc;
    var state = 0;

    if (dotc > 0.999) {
      if (dotw > 0.999) {
        if (dotw > dotc) state = 1;else state = 4;
      } else if (doth > 0.999) {
        if (doth > dotc) state = 2;else state = 4;
      } else if (dotd > 0.999) {
        if (dotd > dotc) state = 3;else state = 4;
      } else state = 4;
    } else {
      if (dotw > 0.999) state = 1;else if (doth > 0.999) state = 2;else if (dotd > 0.999) state = 3;
    }

    var cbx;
    var cby;
    var cbz;
    var ccx;
    var ccy;
    var ccz;
    var r00;
    var r01;
    var r02;
    var r10;
    var r11;
    var r12;
    var r20;
    var r21;
    var r22;
    var px;
    var py;
    var pz;
    var pd;
    var dot;
    var len;
    var tx;
    var ty;
    var tz;
    var td;
    var dx;
    var dy;
    var dz;
    var d1x;
    var d1y;
    var d1z;
    var d2x;
    var d2y;
    var d2z;
    var sx;
    var sy;
    var sz;
    var sd;
    var ex;
    var ey;
    var ez;
    var ed;
    var dot1;
    var dot2;
    var t1;
    var dir1x;
    var dir1y;
    var dir1z;
    var dir2x;
    var dir2y;
    var dir2z;
    var dir1l;
    var dir2l;

    if (state == 0) {
      //manifold.addPoint(pos.x,pos.y,pos.z,nx,ny,nz,dep.x,b,c,0,0,false);
      manifold.addPoint(pos.x, pos.y, pos.z, nx, ny, nz, dep.x, this.flip);
    } else if (state == 4) {
      if (right4) {
        ccx = pcx - dcx;
        ccy = pcy - dcy;
        ccz = pcz - dcz;
        nx = -ncx;
        ny = -ncy;
        nz = -ncz;
      } else {
        ccx = pcx + dcx;
        ccy = pcy + dcy;
        ccz = pcz + dcz;
        nx = ncx;
        ny = ncy;
        nz = ncz;
      }

      var v1x;
      var v1y;
      var v1z;
      var v2x;
      var v2y;
      var v2z;
      var v3x;
      var v3y;
      var v3z;
      var v4x;
      var v4y;
      var v4z;
      dot = 1;
      state = 0;
      dot1 = nwx * nx + nwy * ny + nwz * nz;

      if (dot1 < dot) {
        dot = dot1;
        state = 0;
      }

      if (-dot1 < dot) {
        dot = -dot1;
        state = 1;
      }

      dot1 = nhx * nx + nhy * ny + nhz * nz;

      if (dot1 < dot) {
        dot = dot1;
        state = 2;
      }

      if (-dot1 < dot) {
        dot = -dot1;
        state = 3;
      }

      dot1 = ndx * nx + ndy * ny + ndz * nz;

      if (dot1 < dot) {
        dot = dot1;
        state = 4;
      }

      if (-dot1 < dot) {
        dot = -dot1;
        state = 5;
      }

      var v = b.elements;

      switch (state) {
        case 0:
          //v=b.vertex1;
          v1x = v[0]; //v.x;

          v1y = v[1]; //v.y;

          v1z = v[2]; //v.z;
          //v=b.vertex3;

          v2x = v[6]; //v.x;

          v2y = v[7]; //v.y;

          v2z = v[8]; //v.z;
          //v=b.vertex4;

          v3x = v[9]; //v.x;

          v3y = v[10]; //v.y;

          v3z = v[11]; //v.z;
          //v=b.vertex2;

          v4x = v[3]; //v.x;

          v4y = v[4]; //v.y;

          v4z = v[5]; //v.z;

          break;

        case 1:
          //v=b.vertex6;
          v1x = v[15]; //v.x;

          v1y = v[16]; //v.y;

          v1z = v[17]; //v.z;
          //v=b.vertex8;

          v2x = v[21]; //v.x;

          v2y = v[22]; //v.y;

          v2z = v[23]; //v.z;
          //v=b.vertex7;

          v3x = v[18]; //v.x;

          v3y = v[19]; //v.y;

          v3z = v[20]; //v.z;
          //v=b.vertex5;

          v4x = v[12]; //v.x;

          v4y = v[13]; //v.y;

          v4z = v[14]; //v.z;

          break;

        case 2:
          //v=b.vertex5;
          v1x = v[12]; //v.x;

          v1y = v[13]; //v.y;

          v1z = v[14]; //v.z;
          //v=b.vertex1;

          v2x = v[0]; //v.x;

          v2y = v[1]; //v.y;

          v2z = v[2]; //v.z;
          //v=b.vertex2;

          v3x = v[3]; //v.x;

          v3y = v[4]; //v.y;

          v3z = v[5]; //v.z;
          //v=b.vertex6;

          v4x = v[15]; //v.x;

          v4y = v[16]; //v.y;

          v4z = v[17]; //v.z;

          break;

        case 3:
          //v=b.vertex8;
          v1x = v[21]; //v.x;

          v1y = v[22]; //v.y;

          v1z = v[23]; //v.z;
          //v=b.vertex4;

          v2x = v[9]; //v.x;

          v2y = v[10]; //v.y;

          v2z = v[11]; //v.z;
          //v=b.vertex3;

          v3x = v[6]; //v.x;

          v3y = v[7]; //v.y;

          v3z = v[8]; //v.z;
          //v=b.vertex7;

          v4x = v[18]; //v.x;

          v4y = v[19]; //v.y;

          v4z = v[20]; //v.z;

          break;

        case 4:
          //v=b.vertex5;
          v1x = v[12]; //v.x;

          v1y = v[13]; //v.y;

          v1z = v[14]; //v.z;
          //v=b.vertex7;

          v2x = v[18]; //v.x;

          v2y = v[19]; //v.y;

          v2z = v[20]; //v.z;
          //v=b.vertex3;

          v3x = v[6]; //v.x;

          v3y = v[7]; //v.y;

          v3z = v[8]; //v.z;
          //v=b.vertex1;

          v4x = v[0]; //v.x;

          v4y = v[1]; //v.y;

          v4z = v[2]; //v.z;

          break;

        case 5:
          //v=b.vertex2;
          v1x = v[3]; //v.x;

          v1y = v[4]; //v.y;

          v1z = v[5]; //v.z;
          //v=b.vertex4;

          v2x = v[9]; //v.x;

          v2y = v[10]; //v.y;

          v2z = v[11]; //v.z;
          //v=b.vertex8;

          v3x = v[21]; //v.x;

          v3y = v[22]; //v.y;

          v3z = v[23]; //v.z;
          //v=b.vertex6;

          v4x = v[15]; //v.x;

          v4y = v[16]; //v.y;

          v4z = v[17]; //v.z;

          break;
      }

      pd = nx * (v1x - ccx) + ny * (v1y - ccy) + nz * (v1z - ccz);
      if (pd <= 0) manifold.addPoint(v1x, v1y, v1z, -nx, -ny, -nz, pd, this.flip);
      pd = nx * (v2x - ccx) + ny * (v2y - ccy) + nz * (v2z - ccz);
      if (pd <= 0) manifold.addPoint(v2x, v2y, v2z, -nx, -ny, -nz, pd, this.flip);
      pd = nx * (v3x - ccx) + ny * (v3y - ccy) + nz * (v3z - ccz);
      if (pd <= 0) manifold.addPoint(v3x, v3y, v3z, -nx, -ny, -nz, pd, this.flip);
      pd = nx * (v4x - ccx) + ny * (v4y - ccy) + nz * (v4z - ccz);
      if (pd <= 0) manifold.addPoint(v4x, v4y, v4z, -nx, -ny, -nz, pd, this.flip);
    } else {
      switch (state) {
        case 1:
          if (right1) {
            cbx = pbx + dwx;
            cby = pby + dwy;
            cbz = pbz + dwz;
            nx = nwx;
            ny = nwy;
            nz = nwz;
          } else {
            cbx = pbx - dwx;
            cby = pby - dwy;
            cbz = pbz - dwz;
            nx = -nwx;
            ny = -nwy;
            nz = -nwz;
          }

          dir1x = nhx;
          dir1y = nhy;
          dir1z = nhz;
          dir1l = bh;
          dir2x = ndx;
          dir2y = ndy;
          dir2z = ndz;
          dir2l = bd;
          break;

        case 2:
          if (right2) {
            cbx = pbx + dhx;
            cby = pby + dhy;
            cbz = pbz + dhz;
            nx = nhx;
            ny = nhy;
            nz = nhz;
          } else {
            cbx = pbx - dhx;
            cby = pby - dhy;
            cbz = pbz - dhz;
            nx = -nhx;
            ny = -nhy;
            nz = -nhz;
          }

          dir1x = nwx;
          dir1y = nwy;
          dir1z = nwz;
          dir1l = bw;
          dir2x = ndx;
          dir2y = ndy;
          dir2z = ndz;
          dir2l = bd;
          break;

        case 3:
          if (right3) {
            cbx = pbx + ddx;
            cby = pby + ddy;
            cbz = pbz + ddz;
            nx = ndx;
            ny = ndy;
            nz = ndz;
          } else {
            cbx = pbx - ddx;
            cby = pby - ddy;
            cbz = pbz - ddz;
            nx = -ndx;
            ny = -ndy;
            nz = -ndz;
          }

          dir1x = nwx;
          dir1y = nwy;
          dir1z = nwz;
          dir1l = bw;
          dir2x = nhx;
          dir2y = nhy;
          dir2z = nhz;
          dir2l = bh;
          break;
      }

      dot = nx * ncx + ny * ncy + nz * ncz;
      if (dot < 0) len = ch;else len = -ch;
      ccx = pcx + len * ncx;
      ccy = pcy + len * ncy;
      ccz = pcz + len * ncz;

      if (dotc >= 0.999999) {
        tx = -ny;
        ty = nz;
        tz = nx;
      } else {
        tx = nx;
        ty = ny;
        tz = nz;
      }

      len = tx * ncx + ty * ncy + tz * ncz;
      dx = len * ncx - tx;
      dy = len * ncy - ty;
      dz = len * ncz - tz;
      len = _Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (len == 0) return;
      len = r / len;
      dx *= len;
      dy *= len;
      dz *= len;
      tx = ccx + dx;
      ty = ccy + dy;
      tz = ccz + dz;

      if (dot < -0.96 || dot > 0.96) {
        r00 = ncx * ncx * 1.5 - 0.5;
        r01 = ncx * ncy * 1.5 - ncz * 0.866025403;
        r02 = ncx * ncz * 1.5 + ncy * 0.866025403;
        r10 = ncy * ncx * 1.5 + ncz * 0.866025403;
        r11 = ncy * ncy * 1.5 - 0.5;
        r12 = ncy * ncz * 1.5 - ncx * 0.866025403;
        r20 = ncz * ncx * 1.5 - ncy * 0.866025403;
        r21 = ncz * ncy * 1.5 + ncx * 0.866025403;
        r22 = ncz * ncz * 1.5 - 0.5;
        px = tx;
        py = ty;
        pz = tz;
        pd = nx * (px - cbx) + ny * (py - cby) + nz * (pz - cbz);
        tx = px - pd * nx - cbx;
        ty = py - pd * ny - cby;
        tz = pz - pd * nz - cbz;
        sd = dir1x * tx + dir1y * ty + dir1z * tz;
        ed = dir2x * tx + dir2y * ty + dir2z * tz;
        if (sd < -dir1l) sd = -dir1l;else if (sd > dir1l) sd = dir1l;
        if (ed < -dir2l) ed = -dir2l;else if (ed > dir2l) ed = dir2l;
        tx = sd * dir1x + ed * dir2x;
        ty = sd * dir1y + ed * dir2y;
        tz = sd * dir1z + ed * dir2z;
        px = cbx + tx;
        py = cby + ty;
        pz = cbz + tz;
        manifold.addPoint(px, py, pz, nx, ny, nz, pd, this.flip);
        px = dx * r00 + dy * r01 + dz * r02;
        py = dx * r10 + dy * r11 + dz * r12;
        pz = dx * r20 + dy * r21 + dz * r22;
        px = (dx = px) + ccx;
        py = (dy = py) + ccy;
        pz = (dz = pz) + ccz;
        pd = nx * (px - cbx) + ny * (py - cby) + nz * (pz - cbz);

        if (pd <= 0) {
          tx = px - pd * nx - cbx;
          ty = py - pd * ny - cby;
          tz = pz - pd * nz - cbz;
          sd = dir1x * tx + dir1y * ty + dir1z * tz;
          ed = dir2x * tx + dir2y * ty + dir2z * tz;
          if (sd < -dir1l) sd = -dir1l;else if (sd > dir1l) sd = dir1l;
          if (ed < -dir2l) ed = -dir2l;else if (ed > dir2l) ed = dir2l;
          tx = sd * dir1x + ed * dir2x;
          ty = sd * dir1y + ed * dir2y;
          tz = sd * dir1z + ed * dir2z;
          px = cbx + tx;
          py = cby + ty;
          pz = cbz + tz; //manifold.addPoint(px,py,pz,nx,ny,nz,pd,b,c,2,0,false);

          manifold.addPoint(px, py, pz, nx, ny, nz, pd, this.flip);
        }

        px = dx * r00 + dy * r01 + dz * r02;
        py = dx * r10 + dy * r11 + dz * r12;
        pz = dx * r20 + dy * r21 + dz * r22;
        px = (dx = px) + ccx;
        py = (dy = py) + ccy;
        pz = (dz = pz) + ccz;
        pd = nx * (px - cbx) + ny * (py - cby) + nz * (pz - cbz);

        if (pd <= 0) {
          tx = px - pd * nx - cbx;
          ty = py - pd * ny - cby;
          tz = pz - pd * nz - cbz;
          sd = dir1x * tx + dir1y * ty + dir1z * tz;
          ed = dir2x * tx + dir2y * ty + dir2z * tz;
          if (sd < -dir1l) sd = -dir1l;else if (sd > dir1l) sd = dir1l;
          if (ed < -dir2l) ed = -dir2l;else if (ed > dir2l) ed = dir2l;
          tx = sd * dir1x + ed * dir2x;
          ty = sd * dir1y + ed * dir2y;
          tz = sd * dir1z + ed * dir2z;
          px = cbx + tx;
          py = cby + ty;
          pz = cbz + tz; //manifold.addPoint(px,py,pz,nx,ny,nz,pd,b,c,3,0,false);

          manifold.addPoint(px, py, pz, nx, ny, nz, pd, this.flip);
        }
      } else {
        sx = tx;
        sy = ty;
        sz = tz;
        sd = nx * (sx - cbx) + ny * (sy - cby) + nz * (sz - cbz);
        sx -= sd * nx;
        sy -= sd * ny;
        sz -= sd * nz;

        if (dot > 0) {
          ex = tx + dcx * 2;
          ey = ty + dcy * 2;
          ez = tz + dcz * 2;
        } else {
          ex = tx - dcx * 2;
          ey = ty - dcy * 2;
          ez = tz - dcz * 2;
        }

        ed = nx * (ex - cbx) + ny * (ey - cby) + nz * (ez - cbz);
        ex -= ed * nx;
        ey -= ed * ny;
        ez -= ed * nz;
        d1x = sx - cbx;
        d1y = sy - cby;
        d1z = sz - cbz;
        d2x = ex - cbx;
        d2y = ey - cby;
        d2z = ez - cbz;
        tx = ex - sx;
        ty = ey - sy;
        tz = ez - sz;
        td = ed - sd;
        dotw = d1x * dir1x + d1y * dir1y + d1z * dir1z;
        doth = d2x * dir1x + d2y * dir1y + d2z * dir1z;
        dot1 = dotw - dir1l;
        dot2 = doth - dir1l;

        if (dot1 > 0) {
          if (dot2 > 0) return;
          t1 = dot1 / (dot1 - dot2);
          sx = sx + tx * t1;
          sy = sy + ty * t1;
          sz = sz + tz * t1;
          sd = sd + td * t1;
          d1x = sx - cbx;
          d1y = sy - cby;
          d1z = sz - cbz;
          dotw = d1x * dir1x + d1y * dir1y + d1z * dir1z;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        } else if (dot2 > 0) {
          t1 = dot1 / (dot1 - dot2);
          ex = sx + tx * t1;
          ey = sy + ty * t1;
          ez = sz + tz * t1;
          ed = sd + td * t1;
          d2x = ex - cbx;
          d2y = ey - cby;
          d2z = ez - cbz;
          doth = d2x * dir1x + d2y * dir1y + d2z * dir1z;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        }

        dot1 = dotw + dir1l;
        dot2 = doth + dir1l;

        if (dot1 < 0) {
          if (dot2 < 0) return;
          t1 = dot1 / (dot1 - dot2);
          sx = sx + tx * t1;
          sy = sy + ty * t1;
          sz = sz + tz * t1;
          sd = sd + td * t1;
          d1x = sx - cbx;
          d1y = sy - cby;
          d1z = sz - cbz;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        } else if (dot2 < 0) {
          t1 = dot1 / (dot1 - dot2);
          ex = sx + tx * t1;
          ey = sy + ty * t1;
          ez = sz + tz * t1;
          ed = sd + td * t1;
          d2x = ex - cbx;
          d2y = ey - cby;
          d2z = ez - cbz;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        }

        dotw = d1x * dir2x + d1y * dir2y + d1z * dir2z;
        doth = d2x * dir2x + d2y * dir2y + d2z * dir2z;
        dot1 = dotw - dir2l;
        dot2 = doth - dir2l;

        if (dot1 > 0) {
          if (dot2 > 0) return;
          t1 = dot1 / (dot1 - dot2);
          sx = sx + tx * t1;
          sy = sy + ty * t1;
          sz = sz + tz * t1;
          sd = sd + td * t1;
          d1x = sx - cbx;
          d1y = sy - cby;
          d1z = sz - cbz;
          dotw = d1x * dir2x + d1y * dir2y + d1z * dir2z;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        } else if (dot2 > 0) {
          t1 = dot1 / (dot1 - dot2);
          ex = sx + tx * t1;
          ey = sy + ty * t1;
          ez = sz + tz * t1;
          ed = sd + td * t1;
          d2x = ex - cbx;
          d2y = ey - cby;
          d2z = ez - cbz;
          doth = d2x * dir2x + d2y * dir2y + d2z * dir2z;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          td = ed - sd;
        }

        dot1 = dotw + dir2l;
        dot2 = doth + dir2l;

        if (dot1 < 0) {
          if (dot2 < 0) return;
          t1 = dot1 / (dot1 - dot2);
          sx = sx + tx * t1;
          sy = sy + ty * t1;
          sz = sz + tz * t1;
          sd = sd + td * t1;
        } else if (dot2 < 0) {
          t1 = dot1 / (dot1 - dot2);
          ex = sx + tx * t1;
          ey = sy + ty * t1;
          ez = sz + tz * t1;
          ed = sd + td * t1;
        }

        if (sd < 0) {
          //manifold.addPoint(sx,sy,sz,nx,ny,nz,sd,b,c,1,0,false);
          manifold.addPoint(sx, sy, sz, nx, ny, nz, sd, this.flip);
        }

        if (ed < 0) {
          //manifold.addPoint(ex,ey,ez,nx,ny,nz,ed,b,c,4,0,false);
          manifold.addPoint(ex, ey, ez, nx, ny, nz, ed, this.flip);
        }
      }
    }
  }
});

function CylinderCylinderCollisionDetector() {
  CollisionDetector.call(this);
}

CylinderCylinderCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: CylinderCylinderCollisionDetector,
  getSep: function (c1, c2, sep, pos, dep) {
    var t1x;
    var t1y;
    var t1z;
    var t2x;
    var t2y;
    var t2z;
    var sup = new Vec3();
    var len;
    var p1x;
    var p1y;
    var p1z;
    var p2x;
    var p2y;
    var p2z;
    var v01x = c1.position.x;
    var v01y = c1.position.y;
    var v01z = c1.position.z;
    var v02x = c2.position.x;
    var v02y = c2.position.y;
    var v02z = c2.position.z;
    var v0x = v02x - v01x;
    var v0y = v02y - v01y;
    var v0z = v02z - v01z;
    if (v0x * v0x + v0y * v0y + v0z * v0z == 0) v0y = 0.001;
    var nx = -v0x;
    var ny = -v0y;
    var nz = -v0z;
    this.supportPoint(c1, -nx, -ny, -nz, sup);
    var v11x = sup.x;
    var v11y = sup.y;
    var v11z = sup.z;
    this.supportPoint(c2, nx, ny, nz, sup);
    var v12x = sup.x;
    var v12y = sup.y;
    var v12z = sup.z;
    var v1x = v12x - v11x;
    var v1y = v12y - v11y;
    var v1z = v12z - v11z;

    if (v1x * nx + v1y * ny + v1z * nz <= 0) {
      return false;
    }

    nx = v1y * v0z - v1z * v0y;
    ny = v1z * v0x - v1x * v0z;
    nz = v1x * v0y - v1y * v0x;

    if (nx * nx + ny * ny + nz * nz == 0) {
      sep.set(v1x - v0x, v1y - v0y, v1z - v0z).normalize();
      pos.set((v11x + v12x) * 0.5, (v11y + v12y) * 0.5, (v11z + v12z) * 0.5);
      return true;
    }

    this.supportPoint(c1, -nx, -ny, -nz, sup);
    var v21x = sup.x;
    var v21y = sup.y;
    var v21z = sup.z;
    this.supportPoint(c2, nx, ny, nz, sup);
    var v22x = sup.x;
    var v22y = sup.y;
    var v22z = sup.z;
    var v2x = v22x - v21x;
    var v2y = v22y - v21y;
    var v2z = v22z - v21z;

    if (v2x * nx + v2y * ny + v2z * nz <= 0) {
      return false;
    }

    t1x = v1x - v0x;
    t1y = v1y - v0y;
    t1z = v1z - v0z;
    t2x = v2x - v0x;
    t2y = v2y - v0y;
    t2z = v2z - v0z;
    nx = t1y * t2z - t1z * t2y;
    ny = t1z * t2x - t1x * t2z;
    nz = t1x * t2y - t1y * t2x;

    if (nx * v0x + ny * v0y + nz * v0z > 0) {
      t1x = v1x;
      t1y = v1y;
      t1z = v1z;
      v1x = v2x;
      v1y = v2y;
      v1z = v2z;
      v2x = t1x;
      v2y = t1y;
      v2z = t1z;
      t1x = v11x;
      t1y = v11y;
      t1z = v11z;
      v11x = v21x;
      v11y = v21y;
      v11z = v21z;
      v21x = t1x;
      v21y = t1y;
      v21z = t1z;
      t1x = v12x;
      t1y = v12y;
      t1z = v12z;
      v12x = v22x;
      v12y = v22y;
      v12z = v22z;
      v22x = t1x;
      v22y = t1y;
      v22z = t1z;
      nx = -nx;
      ny = -ny;
      nz = -nz;
    }

    var iterations = 0;

    while (true) {
      if (++iterations > 100) {
        return false;
      }

      this.supportPoint(c1, -nx, -ny, -nz, sup);
      var v31x = sup.x;
      var v31y = sup.y;
      var v31z = sup.z;
      this.supportPoint(c2, nx, ny, nz, sup);
      var v32x = sup.x;
      var v32y = sup.y;
      var v32z = sup.z;
      var v3x = v32x - v31x;
      var v3y = v32y - v31y;
      var v3z = v32z - v31z;

      if (v3x * nx + v3y * ny + v3z * nz <= 0) {
        return false;
      }

      if ((v1y * v3z - v1z * v3y) * v0x + (v1z * v3x - v1x * v3z) * v0y + (v1x * v3y - v1y * v3x) * v0z < 0) {
        v2x = v3x;
        v2y = v3y;
        v2z = v3z;
        v21x = v31x;
        v21y = v31y;
        v21z = v31z;
        v22x = v32x;
        v22y = v32y;
        v22z = v32z;
        t1x = v1x - v0x;
        t1y = v1y - v0y;
        t1z = v1z - v0z;
        t2x = v3x - v0x;
        t2y = v3y - v0y;
        t2z = v3z - v0z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        continue;
      }

      if ((v3y * v2z - v3z * v2y) * v0x + (v3z * v2x - v3x * v2z) * v0y + (v3x * v2y - v3y * v2x) * v0z < 0) {
        v1x = v3x;
        v1y = v3y;
        v1z = v3z;
        v11x = v31x;
        v11y = v31y;
        v11z = v31z;
        v12x = v32x;
        v12y = v32y;
        v12z = v32z;
        t1x = v3x - v0x;
        t1y = v3y - v0y;
        t1z = v3z - v0z;
        t2x = v2x - v0x;
        t2y = v2y - v0y;
        t2z = v2z - v0z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        continue;
      }

      var hit = false;

      while (true) {
        t1x = v2x - v1x;
        t1y = v2y - v1y;
        t1z = v2z - v1z;
        t2x = v3x - v1x;
        t2y = v3y - v1y;
        t2z = v3z - v1z;
        nx = t1y * t2z - t1z * t2y;
        ny = t1z * t2x - t1x * t2z;
        nz = t1x * t2y - t1y * t2x;
        len = 1 / _Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx *= len;
        ny *= len;
        nz *= len;

        if (nx * v1x + ny * v1y + nz * v1z >= 0 && !hit) {
          var b0 = (v1y * v2z - v1z * v2y) * v3x + (v1z * v2x - v1x * v2z) * v3y + (v1x * v2y - v1y * v2x) * v3z;
          var b1 = (v3y * v2z - v3z * v2y) * v0x + (v3z * v2x - v3x * v2z) * v0y + (v3x * v2y - v3y * v2x) * v0z;
          var b2 = (v0y * v1z - v0z * v1y) * v3x + (v0z * v1x - v0x * v1z) * v3y + (v0x * v1y - v0y * v1x) * v3z;
          var b3 = (v2y * v1z - v2z * v1y) * v0x + (v2z * v1x - v2x * v1z) * v0y + (v2x * v1y - v2y * v1x) * v0z;
          var sum = b0 + b1 + b2 + b3;

          if (sum <= 0) {
            b0 = 0;
            b1 = (v2y * v3z - v2z * v3y) * nx + (v2z * v3x - v2x * v3z) * ny + (v2x * v3y - v2y * v3x) * nz;
            b2 = (v3y * v2z - v3z * v2y) * nx + (v3z * v2x - v3x * v2z) * ny + (v3x * v2y - v3y * v2x) * nz;
            b3 = (v1y * v2z - v1z * v2y) * nx + (v1z * v2x - v1x * v2z) * ny + (v1x * v2y - v1y * v2x) * nz;
            sum = b1 + b2 + b3;
          }

          var inv = 1 / sum;
          p1x = (v01x * b0 + v11x * b1 + v21x * b2 + v31x * b3) * inv;
          p1y = (v01y * b0 + v11y * b1 + v21y * b2 + v31y * b3) * inv;
          p1z = (v01z * b0 + v11z * b1 + v21z * b2 + v31z * b3) * inv;
          p2x = (v02x * b0 + v12x * b1 + v22x * b2 + v32x * b3) * inv;
          p2y = (v02y * b0 + v12y * b1 + v22y * b2 + v32y * b3) * inv;
          p2z = (v02z * b0 + v12z * b1 + v22z * b2 + v32z * b3) * inv;
          hit = true;
        }

        this.supportPoint(c1, -nx, -ny, -nz, sup);
        var v41x = sup.x;
        var v41y = sup.y;
        var v41z = sup.z;
        this.supportPoint(c2, nx, ny, nz, sup);
        var v42x = sup.x;
        var v42y = sup.y;
        var v42z = sup.z;
        var v4x = v42x - v41x;
        var v4y = v42y - v41y;
        var v4z = v42z - v41z;
        var separation = -(v4x * nx + v4y * ny + v4z * nz);

        if ((v4x - v3x) * nx + (v4y - v3y) * ny + (v4z - v3z) * nz <= 0.01 || separation >= 0) {
          if (hit) {
            sep.set(-nx, -ny, -nz);
            pos.set((p1x + p2x) * 0.5, (p1y + p2y) * 0.5, (p1z + p2z) * 0.5);
            dep.x = separation;
            return true;
          }

          return false;
        }

        if ((v4y * v1z - v4z * v1y) * v0x + (v4z * v1x - v4x * v1z) * v0y + (v4x * v1y - v4y * v1x) * v0z < 0) {
          if ((v4y * v2z - v4z * v2y) * v0x + (v4z * v2x - v4x * v2z) * v0y + (v4x * v2y - v4y * v2x) * v0z < 0) {
            v1x = v4x;
            v1y = v4y;
            v1z = v4z;
            v11x = v41x;
            v11y = v41y;
            v11z = v41z;
            v12x = v42x;
            v12y = v42y;
            v12z = v42z;
          } else {
            v3x = v4x;
            v3y = v4y;
            v3z = v4z;
            v31x = v41x;
            v31y = v41y;
            v31z = v41z;
            v32x = v42x;
            v32y = v42y;
            v32z = v42z;
          }
        } else {
          if ((v4y * v3z - v4z * v3y) * v0x + (v4z * v3x - v4x * v3z) * v0y + (v4x * v3y - v4y * v3x) * v0z < 0) {
            v2x = v4x;
            v2y = v4y;
            v2z = v4z;
            v21x = v41x;
            v21y = v41y;
            v21z = v41z;
            v22x = v42x;
            v22y = v42y;
            v22z = v42z;
          } else {
            v1x = v4x;
            v1y = v4y;
            v1z = v4z;
            v11x = v41x;
            v11y = v41y;
            v11z = v41z;
            v12x = v42x;
            v12y = v42y;
            v12z = v42z;
          }
        }
      }
    } //return false;

  },
  supportPoint: function (c, dx, dy, dz, out) {
    var rot = c.rotation.elements;
    var ldx = rot[0] * dx + rot[3] * dy + rot[6] * dz;
    var ldy = rot[1] * dx + rot[4] * dy + rot[7] * dz;
    var ldz = rot[2] * dx + rot[5] * dy + rot[8] * dz;
    var radx = ldx;
    var radz = ldz;
    var len = radx * radx + radz * radz;
    var rad = c.radius;
    var hh = c.halfHeight;
    var ox;
    var oy;
    var oz;

    if (len == 0) {
      if (ldy < 0) {
        ox = rad;
        oy = -hh;
        oz = 0;
      } else {
        ox = rad;
        oy = hh;
        oz = 0;
      }
    } else {
      len = c.radius / _Math.sqrt(len);

      if (ldy < 0) {
        ox = radx * len;
        oy = -hh;
        oz = radz * len;
      } else {
        ox = radx * len;
        oy = hh;
        oz = radz * len;
      }
    }

    ldx = rot[0] * ox + rot[1] * oy + rot[2] * oz + c.position.x;
    ldy = rot[3] * ox + rot[4] * oy + rot[5] * oz + c.position.y;
    ldz = rot[6] * ox + rot[7] * oy + rot[8] * oz + c.position.z;
    out.set(ldx, ldy, ldz);
  },
  detectCollision: function (shape1, shape2, manifold) {
    var c1;
    var c2;

    if (shape1.id < shape2.id) {
      c1 = shape1;
      c2 = shape2;
    } else {
      c1 = shape2;
      c2 = shape1;
    }

    var p1 = c1.position;
    var p2 = c2.position;
    var p1x = p1.x;
    var p1y = p1.y;
    var p1z = p1.z;
    var p2x = p2.x;
    var p2y = p2.y;
    var p2z = p2.z;
    var h1 = c1.halfHeight;
    var h2 = c2.halfHeight;
    var n1 = c1.normalDirection;
    var n2 = c2.normalDirection;
    var d1 = c1.halfDirection;
    var d2 = c2.halfDirection;
    var r1 = c1.radius;
    var r2 = c2.radius;
    var n1x = n1.x;
    var n1y = n1.y;
    var n1z = n1.z;
    var n2x = n2.x;
    var n2y = n2.y;
    var n2z = n2.z;
    var d1x = d1.x;
    var d1y = d1.y;
    var d1z = d1.z;
    var d2x = d2.x;
    var d2y = d2.y;
    var d2z = d2.z;
    var dx = p1x - p2x;
    var dy = p1y - p2y;
    var dz = p1z - p2z;
    var len;
    var c1x;
    var c1y;
    var c1z;
    var c2x;
    var c2y;
    var c2z;
    var tx;
    var ty;
    var tz;
    var sx;
    var sy;
    var sz;
    var ex;
    var ey;
    var ez;
    var depth1;
    var depth2;
    var dot;
    var t1;
    var t2;
    var sep = new Vec3();
    var pos = new Vec3();
    var dep = new Vec3();
    if (!this.getSep(c1, c2, sep, pos, dep)) return;
    var dot1 = sep.x * n1x + sep.y * n1y + sep.z * n1z;
    var dot2 = sep.x * n2x + sep.y * n2y + sep.z * n2z;
    var right1 = dot1 > 0;
    var right2 = dot2 > 0;
    if (!right1) dot1 = -dot1;
    if (!right2) dot2 = -dot2;
    var state = 0;

    if (dot1 > 0.999 || dot2 > 0.999) {
      if (dot1 > dot2) state = 1;else state = 2;
    }

    var nx;
    var ny;
    var nz;
    var depth = dep.x;
    var r00;
    var r01;
    var r02;
    var r10;
    var r11;
    var r12;
    var r20;
    var r21;
    var r22;
    var px;
    var py;
    var pz;
    var pd;
    var a;
    var b;
    var e;
    var f;
    nx = sep.x;
    ny = sep.y;
    nz = sep.z;

    switch (state) {
      case 0:
        manifold.addPoint(pos.x, pos.y, pos.z, nx, ny, nz, depth, false);
        break;

      case 1:
        if (right1) {
          c1x = p1x + d1x;
          c1y = p1y + d1y;
          c1z = p1z + d1z;
          nx = n1x;
          ny = n1y;
          nz = n1z;
        } else {
          c1x = p1x - d1x;
          c1y = p1y - d1y;
          c1z = p1z - d1z;
          nx = -n1x;
          ny = -n1y;
          nz = -n1z;
        }

        dot = nx * n2x + ny * n2y + nz * n2z;
        if (dot < 0) len = h2;else len = -h2;
        c2x = p2x + len * n2x;
        c2y = p2y + len * n2y;
        c2z = p2z + len * n2z;

        if (dot2 >= 0.999999) {
          tx = -ny;
          ty = nz;
          tz = nx;
        } else {
          tx = nx;
          ty = ny;
          tz = nz;
        }

        len = tx * n2x + ty * n2y + tz * n2z;
        dx = len * n2x - tx;
        dy = len * n2y - ty;
        dz = len * n2z - tz;
        len = _Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (len == 0) break;
        len = r2 / len;
        dx *= len;
        dy *= len;
        dz *= len;
        tx = c2x + dx;
        ty = c2y + dy;
        tz = c2z + dz;

        if (dot < -0.96 || dot > 0.96) {
          r00 = n2x * n2x * 1.5 - 0.5;
          r01 = n2x * n2y * 1.5 - n2z * 0.866025403;
          r02 = n2x * n2z * 1.5 + n2y * 0.866025403;
          r10 = n2y * n2x * 1.5 + n2z * 0.866025403;
          r11 = n2y * n2y * 1.5 - 0.5;
          r12 = n2y * n2z * 1.5 - n2x * 0.866025403;
          r20 = n2z * n2x * 1.5 - n2y * 0.866025403;
          r21 = n2z * n2y * 1.5 + n2x * 0.866025403;
          r22 = n2z * n2z * 1.5 - 0.5;
          px = tx;
          py = ty;
          pz = tz;
          pd = nx * (px - c1x) + ny * (py - c1y) + nz * (pz - c1z);
          tx = px - pd * nx - c1x;
          ty = py - pd * ny - c1y;
          tz = pz - pd * nz - c1z;
          len = tx * tx + ty * ty + tz * tz;

          if (len > r1 * r1) {
            len = r1 / _Math.sqrt(len);
            tx *= len;
            ty *= len;
            tz *= len;
          }

          px = c1x + tx;
          py = c1y + ty;
          pz = c1z + tz;
          manifold.addPoint(px, py, pz, nx, ny, nz, pd, false);
          px = dx * r00 + dy * r01 + dz * r02;
          py = dx * r10 + dy * r11 + dz * r12;
          pz = dx * r20 + dy * r21 + dz * r22;
          px = (dx = px) + c2x;
          py = (dy = py) + c2y;
          pz = (dz = pz) + c2z;
          pd = nx * (px - c1x) + ny * (py - c1y) + nz * (pz - c1z);

          if (pd <= 0) {
            tx = px - pd * nx - c1x;
            ty = py - pd * ny - c1y;
            tz = pz - pd * nz - c1z;
            len = tx * tx + ty * ty + tz * tz;

            if (len > r1 * r1) {
              len = r1 / _Math.sqrt(len);
              tx *= len;
              ty *= len;
              tz *= len;
            }

            px = c1x + tx;
            py = c1y + ty;
            pz = c1z + tz;
            manifold.addPoint(px, py, pz, nx, ny, nz, pd, false);
          }

          px = dx * r00 + dy * r01 + dz * r02;
          py = dx * r10 + dy * r11 + dz * r12;
          pz = dx * r20 + dy * r21 + dz * r22;
          px = (dx = px) + c2x;
          py = (dy = py) + c2y;
          pz = (dz = pz) + c2z;
          pd = nx * (px - c1x) + ny * (py - c1y) + nz * (pz - c1z);

          if (pd <= 0) {
            tx = px - pd * nx - c1x;
            ty = py - pd * ny - c1y;
            tz = pz - pd * nz - c1z;
            len = tx * tx + ty * ty + tz * tz;

            if (len > r1 * r1) {
              len = r1 / _Math.sqrt(len);
              tx *= len;
              ty *= len;
              tz *= len;
            }

            px = c1x + tx;
            py = c1y + ty;
            pz = c1z + tz;
            manifold.addPoint(px, py, pz, nx, ny, nz, pd, false);
          }
        } else {
          sx = tx;
          sy = ty;
          sz = tz;
          depth1 = nx * (sx - c1x) + ny * (sy - c1y) + nz * (sz - c1z);
          sx -= depth1 * nx;
          sy -= depth1 * ny;
          sz -= depth1 * nz;

          if (dot > 0) {
            ex = tx + n2x * h2 * 2;
            ey = ty + n2y * h2 * 2;
            ez = tz + n2z * h2 * 2;
          } else {
            ex = tx - n2x * h2 * 2;
            ey = ty - n2y * h2 * 2;
            ez = tz - n2z * h2 * 2;
          }

          depth2 = nx * (ex - c1x) + ny * (ey - c1y) + nz * (ez - c1z);
          ex -= depth2 * nx;
          ey -= depth2 * ny;
          ez -= depth2 * nz;
          dx = c1x - sx;
          dy = c1y - sy;
          dz = c1z - sz;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          a = dx * dx + dy * dy + dz * dz;
          b = dx * tx + dy * ty + dz * tz;
          e = tx * tx + ty * ty + tz * tz;
          f = b * b - e * (a - r1 * r1);
          if (f < 0) break;
          f = _Math.sqrt(f);
          t1 = (b + f) / e;
          t2 = (b - f) / e;

          if (t2 < t1) {
            len = t1;
            t1 = t2;
            t2 = len;
          }

          if (t2 > 1) t2 = 1;
          if (t1 < 0) t1 = 0;
          tx = sx + (ex - sx) * t1;
          ty = sy + (ey - sy) * t1;
          tz = sz + (ez - sz) * t1;
          ex = sx + (ex - sx) * t2;
          ey = sy + (ey - sy) * t2;
          ez = sz + (ez - sz) * t2;
          sx = tx;
          sy = ty;
          sz = tz;
          len = depth1 + (depth2 - depth1) * t1;
          depth2 = depth1 + (depth2 - depth1) * t2;
          depth1 = len;
          if (depth1 < 0) manifold.addPoint(sx, sy, sz, nx, ny, nz, pd, false);
          if (depth2 < 0) manifold.addPoint(ex, ey, ez, nx, ny, nz, pd, false);
        }

        break;

      case 2:
        if (right2) {
          c2x = p2x - d2x;
          c2y = p2y - d2y;
          c2z = p2z - d2z;
          nx = -n2x;
          ny = -n2y;
          nz = -n2z;
        } else {
          c2x = p2x + d2x;
          c2y = p2y + d2y;
          c2z = p2z + d2z;
          nx = n2x;
          ny = n2y;
          nz = n2z;
        }

        dot = nx * n1x + ny * n1y + nz * n1z;
        if (dot < 0) len = h1;else len = -h1;
        c1x = p1x + len * n1x;
        c1y = p1y + len * n1y;
        c1z = p1z + len * n1z;

        if (dot1 >= 0.999999) {
          tx = -ny;
          ty = nz;
          tz = nx;
        } else {
          tx = nx;
          ty = ny;
          tz = nz;
        }

        len = tx * n1x + ty * n1y + tz * n1z;
        dx = len * n1x - tx;
        dy = len * n1y - ty;
        dz = len * n1z - tz;
        len = _Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (len == 0) break;
        len = r1 / len;
        dx *= len;
        dy *= len;
        dz *= len;
        tx = c1x + dx;
        ty = c1y + dy;
        tz = c1z + dz;

        if (dot < -0.96 || dot > 0.96) {
          r00 = n1x * n1x * 1.5 - 0.5;
          r01 = n1x * n1y * 1.5 - n1z * 0.866025403;
          r02 = n1x * n1z * 1.5 + n1y * 0.866025403;
          r10 = n1y * n1x * 1.5 + n1z * 0.866025403;
          r11 = n1y * n1y * 1.5 - 0.5;
          r12 = n1y * n1z * 1.5 - n1x * 0.866025403;
          r20 = n1z * n1x * 1.5 - n1y * 0.866025403;
          r21 = n1z * n1y * 1.5 + n1x * 0.866025403;
          r22 = n1z * n1z * 1.5 - 0.5;
          px = tx;
          py = ty;
          pz = tz;
          pd = nx * (px - c2x) + ny * (py - c2y) + nz * (pz - c2z);
          tx = px - pd * nx - c2x;
          ty = py - pd * ny - c2y;
          tz = pz - pd * nz - c2z;
          len = tx * tx + ty * ty + tz * tz;

          if (len > r2 * r2) {
            len = r2 / _Math.sqrt(len);
            tx *= len;
            ty *= len;
            tz *= len;
          }

          px = c2x + tx;
          py = c2y + ty;
          pz = c2z + tz;
          manifold.addPoint(px, py, pz, -nx, -ny, -nz, pd, false);
          px = dx * r00 + dy * r01 + dz * r02;
          py = dx * r10 + dy * r11 + dz * r12;
          pz = dx * r20 + dy * r21 + dz * r22;
          px = (dx = px) + c1x;
          py = (dy = py) + c1y;
          pz = (dz = pz) + c1z;
          pd = nx * (px - c2x) + ny * (py - c2y) + nz * (pz - c2z);

          if (pd <= 0) {
            tx = px - pd * nx - c2x;
            ty = py - pd * ny - c2y;
            tz = pz - pd * nz - c2z;
            len = tx * tx + ty * ty + tz * tz;

            if (len > r2 * r2) {
              len = r2 / _Math.sqrt(len);
              tx *= len;
              ty *= len;
              tz *= len;
            }

            px = c2x + tx;
            py = c2y + ty;
            pz = c2z + tz;
            manifold.addPoint(px, py, pz, -nx, -ny, -nz, pd, false);
          }

          px = dx * r00 + dy * r01 + dz * r02;
          py = dx * r10 + dy * r11 + dz * r12;
          pz = dx * r20 + dy * r21 + dz * r22;
          px = (dx = px) + c1x;
          py = (dy = py) + c1y;
          pz = (dz = pz) + c1z;
          pd = nx * (px - c2x) + ny * (py - c2y) + nz * (pz - c2z);

          if (pd <= 0) {
            tx = px - pd * nx - c2x;
            ty = py - pd * ny - c2y;
            tz = pz - pd * nz - c2z;
            len = tx * tx + ty * ty + tz * tz;

            if (len > r2 * r2) {
              len = r2 / _Math.sqrt(len);
              tx *= len;
              ty *= len;
              tz *= len;
            }

            px = c2x + tx;
            py = c2y + ty;
            pz = c2z + tz;
            manifold.addPoint(px, py, pz, -nx, -ny, -nz, pd, false);
          }
        } else {
          sx = tx;
          sy = ty;
          sz = tz;
          depth1 = nx * (sx - c2x) + ny * (sy - c2y) + nz * (sz - c2z);
          sx -= depth1 * nx;
          sy -= depth1 * ny;
          sz -= depth1 * nz;

          if (dot > 0) {
            ex = tx + n1x * h1 * 2;
            ey = ty + n1y * h1 * 2;
            ez = tz + n1z * h1 * 2;
          } else {
            ex = tx - n1x * h1 * 2;
            ey = ty - n1y * h1 * 2;
            ez = tz - n1z * h1 * 2;
          }

          depth2 = nx * (ex - c2x) + ny * (ey - c2y) + nz * (ez - c2z);
          ex -= depth2 * nx;
          ey -= depth2 * ny;
          ez -= depth2 * nz;
          dx = c2x - sx;
          dy = c2y - sy;
          dz = c2z - sz;
          tx = ex - sx;
          ty = ey - sy;
          tz = ez - sz;
          a = dx * dx + dy * dy + dz * dz;
          b = dx * tx + dy * ty + dz * tz;
          e = tx * tx + ty * ty + tz * tz;
          f = b * b - e * (a - r2 * r2);
          if (f < 0) break;
          f = _Math.sqrt(f);
          t1 = (b + f) / e;
          t2 = (b - f) / e;

          if (t2 < t1) {
            len = t1;
            t1 = t2;
            t2 = len;
          }

          if (t2 > 1) t2 = 1;
          if (t1 < 0) t1 = 0;
          tx = sx + (ex - sx) * t1;
          ty = sy + (ey - sy) * t1;
          tz = sz + (ez - sz) * t1;
          ex = sx + (ex - sx) * t2;
          ey = sy + (ey - sy) * t2;
          ez = sz + (ez - sz) * t2;
          sx = tx;
          sy = ty;
          sz = tz;
          len = depth1 + (depth2 - depth1) * t1;
          depth2 = depth1 + (depth2 - depth1) * t2;
          depth1 = len;

          if (depth1 < 0) {
            manifold.addPoint(sx, sy, sz, -nx, -ny, -nz, depth1, false);
          }

          if (depth2 < 0) {
            manifold.addPoint(ex, ey, ez, -nx, -ny, -nz, depth2, false);
          }
        }

        break;
    }
  }
});
/**
 * A collision detector which detects collisions between sphere and box.
 * @author saharan
 */

function SphereBoxCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
}

SphereBoxCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: SphereBoxCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var s;
    var b;

    if (this.flip) {
      s = shape2;
      b = shape1;
    } else {
      s = shape1;
      b = shape2;
    }

    var D = b.dimentions;
    var ps = s.position;
    var psx = ps.x;
    var psy = ps.y;
    var psz = ps.z;
    var pb = b.position;
    var pbx = pb.x;
    var pby = pb.y;
    var pbz = pb.z;
    var rad = s.radius;
    var hw = b.halfWidth;
    var hh = b.halfHeight;
    var hd = b.halfDepth;
    var dx = psx - pbx;
    var dy = psy - pby;
    var dz = psz - pbz;
    var sx = D[0] * dx + D[1] * dy + D[2] * dz;
    var sy = D[3] * dx + D[4] * dy + D[5] * dz;
    var sz = D[6] * dx + D[7] * dy + D[8] * dz;
    var cx;
    var cy;
    var cz;
    var len;
    var invLen;
    var overlap = 0;

    if (sx > hw) {
      sx = hw;
    } else if (sx < -hw) {
      sx = -hw;
    } else {
      overlap = 1;
    }

    if (sy > hh) {
      sy = hh;
    } else if (sy < -hh) {
      sy = -hh;
    } else {
      overlap |= 2;
    }

    if (sz > hd) {
      sz = hd;
    } else if (sz < -hd) {
      sz = -hd;
    } else {
      overlap |= 4;
    }

    if (overlap == 7) {
      // center of sphere is in the box
      if (sx < 0) {
        dx = hw + sx;
      } else {
        dx = hw - sx;
      }

      if (sy < 0) {
        dy = hh + sy;
      } else {
        dy = hh - sy;
      }

      if (sz < 0) {
        dz = hd + sz;
      } else {
        dz = hd - sz;
      }

      if (dx < dy) {
        if (dx < dz) {
          len = dx - hw;

          if (sx < 0) {
            sx = -hw;
            dx = D[0];
            dy = D[1];
            dz = D[2];
          } else {
            sx = hw;
            dx = -D[0];
            dy = -D[1];
            dz = -D[2];
          }
        } else {
          len = dz - hd;

          if (sz < 0) {
            sz = -hd;
            dx = D[6];
            dy = D[7];
            dz = D[8];
          } else {
            sz = hd;
            dx = -D[6];
            dy = -D[7];
            dz = -D[8];
          }
        }
      } else {
        if (dy < dz) {
          len = dy - hh;

          if (sy < 0) {
            sy = -hh;
            dx = D[3];
            dy = D[4];
            dz = D[5];
          } else {
            sy = hh;
            dx = -D[3];
            dy = -D[4];
            dz = -D[5];
          }
        } else {
          len = dz - hd;

          if (sz < 0) {
            sz = -hd;
            dx = D[6];
            dy = D[7];
            dz = D[8];
          } else {
            sz = hd;
            dx = -D[6];
            dy = -D[7];
            dz = -D[8];
          }
        }
      }

      cx = pbx + sx * D[0] + sy * D[3] + sz * D[6];
      cy = pby + sx * D[1] + sy * D[4] + sz * D[7];
      cz = pbz + sx * D[2] + sy * D[5] + sz * D[8];
      manifold.addPoint(psx + rad * dx, psy + rad * dy, psz + rad * dz, dx, dy, dz, len - rad, this.flip);
    } else {
      cx = pbx + sx * D[0] + sy * D[3] + sz * D[6];
      cy = pby + sx * D[1] + sy * D[4] + sz * D[7];
      cz = pbz + sx * D[2] + sy * D[5] + sz * D[8];
      dx = cx - ps.x;
      dy = cy - ps.y;
      dz = cz - ps.z;
      len = dx * dx + dy * dy + dz * dz;

      if (len > 0 && len < rad * rad) {
        len = _Math.sqrt(len);
        invLen = 1 / len;
        dx *= invLen;
        dy *= invLen;
        dz *= invLen;
        manifold.addPoint(psx + rad * dx, psy + rad * dy, psz + rad * dz, dx, dy, dz, len - rad, this.flip);
      }
    }
  }
});

function SphereCylinderCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
}

SphereCylinderCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: SphereCylinderCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var s;
    var c;

    if (this.flip) {
      s = shape2;
      c = shape1;
    } else {
      s = shape1;
      c = shape2;
    }

    var ps = s.position;
    var psx = ps.x;
    var psy = ps.y;
    var psz = ps.z;
    var pc = c.position;
    var pcx = pc.x;
    var pcy = pc.y;
    var pcz = pc.z;
    var dirx = c.normalDirection.x;
    var diry = c.normalDirection.y;
    var dirz = c.normalDirection.z;
    var rads = s.radius;
    var radc = c.radius;
    var rad2 = rads + radc;
    var halfh = c.halfHeight;
    var dx = psx - pcx;
    var dy = psy - pcy;
    var dz = psz - pcz;
    var dot = dx * dirx + dy * diry + dz * dirz;
    if (dot < -halfh - rads || dot > halfh + rads) return;
    var cx = pcx + dot * dirx;
    var cy = pcy + dot * diry;
    var cz = pcz + dot * dirz;
    var d2x = psx - cx;
    var d2y = psy - cy;
    var d2z = psz - cz;
    var len = d2x * d2x + d2y * d2y + d2z * d2z;
    if (len > rad2 * rad2) return;

    if (len > radc * radc) {
      len = radc / _Math.sqrt(len);
      d2x *= len;
      d2y *= len;
      d2z *= len;
    }

    if (dot < -halfh) dot = -halfh;else if (dot > halfh) dot = halfh;
    cx = pcx + dot * dirx + d2x;
    cy = pcy + dot * diry + d2y;
    cz = pcz + dot * dirz + d2z;
    dx = cx - psx;
    dy = cy - psy;
    dz = cz - psz;
    len = dx * dx + dy * dy + dz * dz;
    var invLen;

    if (len > 0 && len < rads * rads) {
      len = _Math.sqrt(len);
      invLen = 1 / len;
      dx *= invLen;
      dy *= invLen;
      dz *= invLen; ///result.addContactInfo(psx+dx*rads,psy+dy*rads,psz+dz*rads,dx,dy,dz,len-rads,s,c,0,0,false);

      manifold.addPoint(psx + dx * rads, psy + dy * rads, psz + dz * rads, dx, dy, dz, len - rads, this.flip);
    }
  }
});
/**
 * A collision detector which detects collisions between two spheres.
 * @author saharan
 */

function SphereSphereCollisionDetector() {
  CollisionDetector.call(this);
}

SphereSphereCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: SphereSphereCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var s1 = shape1;
    var s2 = shape2;
    var p1 = s1.position;
    var p2 = s2.position;
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    var dz = p2.z - p1.z;
    var len = dx * dx + dy * dy + dz * dz;
    var r1 = s1.radius;
    var r2 = s2.radius;
    var rad = r1 + r2;

    if (len > 0 && len < rad * rad) {
      len = _Math.sqrt(len);
      var invLen = 1 / len;
      dx *= invLen;
      dy *= invLen;
      dz *= invLen;
      manifold.addPoint(p1.x + dx * r1, p1.y + dy * r1, p1.z + dz * r1, dx, dy, dz, len - rad, false);
    }
  }
});
/**
 * A collision detector which detects collisions between two spheres.
 * @author saharan 
 * @author lo-th
 */

function SpherePlaneCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
  this.n = new Vec3();
  this.p = new Vec3();
}

SpherePlaneCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: SpherePlaneCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var n = this.n;
    var p = this.p;
    var s = this.flip ? shape2 : shape1;
    var pn = this.flip ? shape1 : shape2;
    var rad = s.radius;
    var len;
    n.sub(s.position, pn.position); //var h = _Math.dotVectors( pn.normal, n );

    n.x *= pn.normal.x; //+ rad;

    n.y *= pn.normal.y;
    n.z *= pn.normal.z; //+ rad;

    var len = n.lengthSq();

    if (len > 0 && len < rad * rad) {
      //&& h > rad*rad ){
      len = _Math.sqrt(len); //len = _Math.sqrt( h );

      n.copy(pn.normal).negate(); //n.scaleEqual( 1/len );
      //(0, -1, 0)
      //n.normalize();

      p.copy(s.position).addScaledVector(n, rad);
      manifold.addPointVec(p, n, len - rad, this.flip);
    }
  }
});
/**
 * A collision detector which detects collisions between two spheres.
 * @author saharan 
 * @author lo-th
 */

function BoxPlaneCollisionDetector(flip) {
  CollisionDetector.call(this);
  this.flip = flip;
  this.n = new Vec3();
  this.p = new Vec3();
  this.dix = new Vec3();
  this.diy = new Vec3();
  this.diz = new Vec3();
  this.cc = new Vec3();
  this.cc2 = new Vec3();
}

BoxPlaneCollisionDetector.prototype = Object.assign(Object.create(CollisionDetector.prototype), {
  constructor: BoxPlaneCollisionDetector,
  detectCollision: function (shape1, shape2, manifold) {
    var n = this.n;
    var p = this.p;
    var cc = this.cc;
    var b = this.flip ? shape2 : shape1;
    var pn = this.flip ? shape1 : shape2;
    var D = b.dimentions;
    var hw = b.halfWidth;
    var hh = b.halfHeight;
    var hd = b.halfDepth;
    var len;
    var overlap = 0;
    this.dix.set(D[0], D[1], D[2]);
    this.diy.set(D[3], D[4], D[5]);
    this.diz.set(D[6], D[7], D[8]);
    n.sub(b.position, pn.position);
    n.x *= pn.normal.x; //+ rad;

    n.y *= pn.normal.y;
    n.z *= pn.normal.z; //+ rad;

    cc.set(_Math.dotVectors(this.dix, n), _Math.dotVectors(this.diy, n), _Math.dotVectors(this.diz, n));
    if (cc.x > hw) cc.x = hw;else if (cc.x < -hw) cc.x = -hw;else overlap = 1;
    if (cc.y > hh) cc.y = hh;else if (cc.y < -hh) cc.y = -hh;else overlap |= 2;
    if (cc.z > hd) cc.z = hd;else if (cc.z < -hd) cc.z = -hd;else overlap |= 4;

    if (overlap === 7) {
      // center of sphere is in the box
      n.set(cc.x < 0 ? hw + cc.x : hw - cc.x, cc.y < 0 ? hh + cc.y : hh - cc.y, cc.z < 0 ? hd + cc.z : hd - cc.z);

      if (n.x < n.y) {
        if (n.x < n.z) {
          len = n.x - hw;

          if (cc.x < 0) {
            cc.x = -hw;
            n.copy(this.dix);
          } else {
            cc.x = hw;
            n.subEqual(this.dix);
          }
        } else {
          len = n.z - hd;

          if (cc.z < 0) {
            cc.z = -hd;
            n.copy(this.diz);
          } else {
            cc.z = hd;
            n.subEqual(this.diz);
          }
        }
      } else {
        if (n.y < n.z) {
          len = n.y - hh;

          if (cc.y < 0) {
            cc.y = -hh;
            n.copy(this.diy);
          } else {
            cc.y = hh;
            n.subEqual(this.diy);
          }
        } else {
          len = n.z - hd;

          if (cc.z < 0) {
            cc.z = -hd;
            n.copy(this.diz);
          } else {
            cc.z = hd;
            n.subEqual(this.diz);
          }
        }
      }

      p.copy(pn.position).addScaledVector(n, 1);
      manifold.addPointVec(p, n, len, this.flip);
    }
  }
}); //import { TetraShape } from '../collision/shape/TetraShape';

/**
 * The class of physical computing world.
 * You must be added to the world physical all computing objects
 *
 * @author saharan
 * @author lo-th
 */
// timestep, broadphase, iterations, worldscale, random, stat

function World(o) {
  if (!(o instanceof Object)) o = {}; // this world scale defaut is 0.1 to 10 meters max for dynamique body

  this.scale = o.worldscale || 1;
  this.invScale = 1 / this.scale; // The time between each step

  this.timeStep = o.timestep || 0.01666; // 1/60;

  this.timerate = this.timeStep * 1000;
  this.timer = null;
  this.preLoop = null; //function(){};

  this.postLoop = null; //function(){};
  // The number of iterations for constraint solvers.

  this.numIterations = o.iterations || 8; // It is a wide-area collision judgment that is used in order to reduce as much as possible a detailed collision judgment.

  switch (o.broadphase || 2) {
    case 1:
      this.broadPhase = new BruteForceBroadPhase();
      break;

    case 2:
    default:
      this.broadPhase = new SAPBroadPhase();
      break;

    case 3:
      this.broadPhase = new DBVTBroadPhase();
      break;
  }

  this.Btypes = ['None', 'BruteForce', 'Sweep & Prune', 'Bounding Volume Tree'];
  this.broadPhaseType = this.Btypes[o.broadphase || 2]; // This is the detailed information of the performance.

  this.performance = null;
  this.isStat = o.info === undefined ? false : o.info;
  if (this.isStat) this.performance = new InfoDisplay(this);
  /**
   * Whether the constraints randomizer is enabled or not.
   *
   * @property enableRandomizer
   * @type {Boolean}
   */

  this.enableRandomizer = o.random !== undefined ? o.random : true; // The rigid body list

  this.rigidBodies = null; // number of rigid body

  this.numRigidBodies = 0; // The contact list

  this.contacts = null;
  this.unusedContacts = null; // The number of contact

  this.numContacts = 0; // The number of contact points

  this.numContactPoints = 0; //  The joint list

  this.joints = null; // The number of joints.

  this.numJoints = 0; // The number of simulation islands.

  this.numIslands = 0; // The gravity in the world.

  this.gravity = new Vec3(0, -9.8, 0);
  if (o.gravity !== undefined) this.gravity.fromArray(o.gravity);
  var numShapeTypes = 5; //4;//3;

  this.detectors = [];
  this.detectors.length = numShapeTypes;
  var i = numShapeTypes;

  while (i--) {
    this.detectors[i] = [];
    this.detectors[i].length = numShapeTypes;
  }

  this.detectors[SHAPE_SPHERE][SHAPE_SPHERE] = new SphereSphereCollisionDetector();
  this.detectors[SHAPE_SPHERE][SHAPE_BOX] = new SphereBoxCollisionDetector(false);
  this.detectors[SHAPE_BOX][SHAPE_SPHERE] = new SphereBoxCollisionDetector(true);
  this.detectors[SHAPE_BOX][SHAPE_BOX] = new BoxBoxCollisionDetector(); // CYLINDER add

  this.detectors[SHAPE_CYLINDER][SHAPE_CYLINDER] = new CylinderCylinderCollisionDetector();
  this.detectors[SHAPE_CYLINDER][SHAPE_BOX] = new BoxCylinderCollisionDetector(true);
  this.detectors[SHAPE_BOX][SHAPE_CYLINDER] = new BoxCylinderCollisionDetector(false);
  this.detectors[SHAPE_CYLINDER][SHAPE_SPHERE] = new SphereCylinderCollisionDetector(true);
  this.detectors[SHAPE_SPHERE][SHAPE_CYLINDER] = new SphereCylinderCollisionDetector(false); // PLANE add

  this.detectors[SHAPE_PLANE][SHAPE_SPHERE] = new SpherePlaneCollisionDetector(true);
  this.detectors[SHAPE_SPHERE][SHAPE_PLANE] = new SpherePlaneCollisionDetector(false);
  this.detectors[SHAPE_PLANE][SHAPE_BOX] = new BoxPlaneCollisionDetector(true);
  this.detectors[SHAPE_BOX][SHAPE_PLANE] = new BoxPlaneCollisionDetector(false); // TETRA add
  //this.detectors[SHAPE_TETRA][SHAPE_TETRA] = new TetraTetraCollisionDetector();

  this.randX = 65535;
  this.randA = 98765;
  this.randB = 123456789;
  this.islandRigidBodies = [];
  this.islandStack = [];
  this.islandConstraints = [];
}

Object.assign(World.prototype, {
  World: true,
  play: function () {
    if (this.timer !== null) return;

    var _this = this;

    this.timer = setInterval(function () {
      _this.step();
    }, this.timerate); //this.timer = setInterval( this.loop.bind(this) , this.timerate );
  },
  stop: function () {
    if (this.timer === null) return;
    clearInterval(this.timer);
    this.timer = null;
  },
  setGravity: function (ar) {
    this.gravity.fromArray(ar);
  },
  getInfo: function () {
    return this.isStat ? this.performance.show() : '';
  },
  // Reset the world and remove all rigid bodies, shapes, joints and any object from the world.
  clear: function () {
    this.stop();
    this.preLoop = null;
    this.postLoop = null;
    this.randX = 65535;

    while (this.joints !== null) {
      this.removeJoint(this.joints);
    }

    while (this.contacts !== null) {
      this.removeContact(this.contacts);
    }

    while (this.rigidBodies !== null) {
      this.removeRigidBody(this.rigidBodies);
    }
  },

  /**
  * I'll add a rigid body to the world.
  * Rigid body that has been added will be the operands of each step.
  * @param  rigidBody  Rigid body that you want to add
  */
  addRigidBody: function (rigidBody) {
    if (rigidBody.parent) {
      printError("World", "It is not possible to be added to more than one world one of the rigid body");
    }

    rigidBody.setParent(this); //rigidBody.awake();

    for (var shape = rigidBody.shapes; shape !== null; shape = shape.next) {
      this.addShape(shape);
    }

    if (this.rigidBodies !== null) (this.rigidBodies.prev = rigidBody).next = this.rigidBodies;
    this.rigidBodies = rigidBody;
    this.numRigidBodies++;
  },

  /**
  * I will remove the rigid body from the world.
  * Rigid body that has been deleted is excluded from the calculation on a step-by-step basis.
  * @param  rigidBody  Rigid body to be removed
  */
  removeRigidBody: function (rigidBody) {
    var remove = rigidBody;
    if (remove.parent !== this) return;
    remove.awake();
    var js = remove.jointLink;

    while (js != null) {
      var joint = js.joint;
      js = js.next;
      this.removeJoint(joint);
    }

    for (var shape = rigidBody.shapes; shape !== null; shape = shape.next) {
      this.removeShape(shape);
    }

    var prev = remove.prev;
    var next = remove.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.rigidBodies == remove) this.rigidBodies = next;
    remove.prev = null;
    remove.next = null;
    remove.parent = null;
    this.numRigidBodies--;
  },
  getByName: function (name) {
    var body = this.rigidBodies;

    while (body !== null) {
      if (body.name === name) return body;
      body = body.next;
    }

    var joint = this.joints;

    while (joint !== null) {
      if (joint.name === name) return joint;
      joint = joint.next;
    }

    return null;
  },

  /**
  * I'll add a shape to the world..
  * Add to the rigid world, and if you add a shape to a rigid body that has been added to the world,
  * Shape will be added to the world automatically, please do not call from outside this method.
  * @param  shape  Shape you want to add
  */
  addShape: function (shape) {
    if (!shape.parent || !shape.parent.parent) {
      printError("World", "It is not possible to be added alone to shape world");
    }

    shape.proxy = this.broadPhase.createProxy(shape);
    shape.updateProxy();
    this.broadPhase.addProxy(shape.proxy);
  },

  /**
  * I will remove the shape from the world.
  * Add to the rigid world, and if you add a shape to a rigid body that has been added to the world,
  * Shape will be added to the world automatically, please do not call from outside this method.
  * @param  shape  Shape you want to delete
  */
  removeShape: function (shape) {
    this.broadPhase.removeProxy(shape.proxy);
    shape.proxy = null;
  },

  /**
  * I'll add a joint to the world.
  * Joint that has been added will be the operands of each step.
  * @param  shape Joint to be added
  */
  addJoint: function (joint) {
    if (joint.parent) {
      printError("World", "It is not possible to be added to more than one world one of the joint");
    }

    if (this.joints != null) (this.joints.prev = joint).next = this.joints;
    this.joints = joint;
    joint.setParent(this);
    this.numJoints++;
    joint.awake();
    joint.attach();
  },

  /**
  * I will remove the joint from the world.
  * Joint that has been added will be the operands of each step.
  * @param  shape Joint to be deleted
  */
  removeJoint: function (joint) {
    var remove = joint;
    var prev = remove.prev;
    var next = remove.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (this.joints == remove) this.joints = next;
    remove.prev = null;
    remove.next = null;
    this.numJoints--;
    remove.awake();
    remove.detach();
    remove.parent = null;
  },
  addContact: function (s1, s2) {
    var newContact;

    if (this.unusedContacts !== null) {
      newContact = this.unusedContacts;
      this.unusedContacts = this.unusedContacts.next;
    } else {
      newContact = new Contact();
    }

    newContact.attach(s1, s2);
    newContact.detector = this.detectors[s1.type][s2.type];
    if (this.contacts) (this.contacts.prev = newContact).next = this.contacts;
    this.contacts = newContact;
    this.numContacts++;
  },
  removeContact: function (contact) {
    var prev = contact.prev;
    var next = contact.next;
    if (next) next.prev = prev;
    if (prev) prev.next = next;
    if (this.contacts == contact) this.contacts = next;
    contact.prev = null;
    contact.next = null;
    contact.detach();
    contact.next = this.unusedContacts;
    this.unusedContacts = contact;
    this.numContacts--;
  },
  getContact: function (b1, b2) {
    b1 = b1.constructor === RigidBody ? b1.name : b1;
    b2 = b2.constructor === RigidBody ? b2.name : b2;
    var n1, n2;
    var contact = this.contacts;

    while (contact !== null) {
      n1 = contact.body1.name;
      n2 = contact.body2.name;

      if (n1 === b1 && n2 === b2 || n2 === b1 && n1 === b2) {
        if (contact.touching) return contact;else return null;
      } else contact = contact.next;
    }

    return null;
  },
  checkContact: function (name1, name2) {
    var n1, n2;
    var contact = this.contacts;

    while (contact !== null) {
      n1 = contact.body1.name || ' ';
      n2 = contact.body2.name || ' ';

      if (n1 == name1 && n2 == name2 || n2 == name1 && n1 == name2) {
        if (contact.touching) return true;else return false;
      } else contact = contact.next;
    } //return false;

  },
  callSleep: function (body) {
    if (!body.allowSleep) return false;
    if (body.linearVelocity.lengthSq() > 0.04) return false;
    if (body.angularVelocity.lengthSq() > 0.25) return false;
    return true;
  },

  /**
  * I will proceed only time step seconds time of World.
  */
  step: function () {
    var stat = this.isStat;
    if (stat) this.performance.setTime(0);
    var body = this.rigidBodies;

    while (body !== null) {
      body.addedToIsland = false;
      if (body.sleeping) body.testWakeUp();
      body = body.next;
    } //------------------------------------------------------
    //   UPDATE BROADPHASE CONTACT
    //------------------------------------------------------


    if (stat) this.performance.setTime(1);
    this.broadPhase.detectPairs();
    var pairs = this.broadPhase.pairs;
    var i = this.broadPhase.numPairs; //do{

    while (i--) {
      //for(var i=0, l=numPairs; i<l; i++){
      var pair = pairs[i];
      var s1;
      var s2;

      if (pair.shape1.id < pair.shape2.id) {
        s1 = pair.shape1;
        s2 = pair.shape2;
      } else {
        s1 = pair.shape2;
        s2 = pair.shape1;
      }

      var link;
      if (s1.numContacts < s2.numContacts) link = s1.contactLink;else link = s2.contactLink;
      var exists = false;

      while (link) {
        var contact = link.contact;

        if (contact.shape1 == s1 && contact.shape2 == s2) {
          contact.persisting = true;
          exists = true; // contact already exists

          break;
        }

        link = link.next;
      }

      if (!exists) {
        this.addContact(s1, s2);
      }
    } // while(i-- >0);


    if (stat) this.performance.calcBroadPhase(); //------------------------------------------------------
    //   UPDATE NARROWPHASE CONTACT
    //------------------------------------------------------
    // update & narrow phase

    this.numContactPoints = 0;
    contact = this.contacts;

    while (contact !== null) {
      if (!contact.persisting) {
        if (contact.shape1.aabb.intersectTest(contact.shape2.aabb)) {
          /*var aabb1=contact.shape1.aabb;
          var aabb2=contact.shape2.aabb;
          if(
           aabb1.minX>aabb2.maxX || aabb1.maxX<aabb2.minX ||
           aabb1.minY>aabb2.maxY || aabb1.maxY<aabb2.minY ||
           aabb1.minZ>aabb2.maxZ || aabb1.maxZ<aabb2.minZ
          ){*/
          var next = contact.next;
          this.removeContact(contact);
          contact = next;
          continue;
        }
      }

      var b1 = contact.body1;
      var b2 = contact.body2;
      if (b1.isDynamic && !b1.sleeping || b2.isDynamic && !b2.sleeping) contact.updateManifold();
      this.numContactPoints += contact.manifold.numPoints;
      contact.persisting = false;
      contact.constraint.addedToIsland = false;
      contact = contact.next;
    }

    if (stat) this.performance.calcNarrowPhase(); //------------------------------------------------------
    //   SOLVE ISLANDS
    //------------------------------------------------------

    var invTimeStep = 1 / this.timeStep;
    var joint;
    var constraint;

    for (joint = this.joints; joint !== null; joint = joint.next) {
      joint.addedToIsland = false;
    } // clear old island array


    this.islandRigidBodies = [];
    this.islandConstraints = [];
    this.islandStack = [];
    if (stat) this.performance.setTime(1);
    this.numIslands = 0; // build and solve simulation islands

    for (var base = this.rigidBodies; base !== null; base = base.next) {
      if (base.addedToIsland || base.isStatic || base.sleeping) continue; // ignore

      if (base.isLonely()) {
        // update single body
        if (base.isDynamic) {
          base.linearVelocity.addScaledVector(this.gravity, this.timeStep);
          /*base.linearVelocity.x+=this.gravity.x*this.timeStep;
          base.linearVelocity.y+=this.gravity.y*this.timeStep;
          base.linearVelocity.z+=this.gravity.z*this.timeStep;*/
        }

        if (this.callSleep(base)) {
          base.sleepTime += this.timeStep;
          if (base.sleepTime > 0.5) base.sleep();else base.updatePosition(this.timeStep);
        } else {
          base.sleepTime = 0;
          base.updatePosition(this.timeStep);
        }

        this.numIslands++;
        continue;
      }

      var islandNumRigidBodies = 0;
      var islandNumConstraints = 0;
      var stackCount = 1; // add rigid body to stack

      this.islandStack[0] = base;
      base.addedToIsland = true; // build an island

      do {
        // get rigid body from stack
        body = this.islandStack[--stackCount];
        this.islandStack[stackCount] = null;
        body.sleeping = false; // add rigid body to the island

        this.islandRigidBodies[islandNumRigidBodies++] = body;
        if (body.isStatic) continue; // search connections

        for (var cs = body.contactLink; cs !== null; cs = cs.next) {
          var contact = cs.contact;
          constraint = contact.constraint;
          if (constraint.addedToIsland || !contact.touching) continue; // ignore
          // add constraint to the island

          this.islandConstraints[islandNumConstraints++] = constraint;
          constraint.addedToIsland = true;
          var next = cs.body;
          if (next.addedToIsland) continue; // add rigid body to stack

          this.islandStack[stackCount++] = next;
          next.addedToIsland = true;
        }

        for (var js = body.jointLink; js !== null; js = js.next) {
          constraint = js.joint;
          if (constraint.addedToIsland) continue; // ignore
          // add constraint to the island

          this.islandConstraints[islandNumConstraints++] = constraint;
          constraint.addedToIsland = true;
          next = js.body;
          if (next.addedToIsland || !next.isDynamic) continue; // add rigid body to stack

          this.islandStack[stackCount++] = next;
          next.addedToIsland = true;
        }
      } while (stackCount != 0); // update velocities


      var gVel = new Vec3().addScaledVector(this.gravity, this.timeStep);
      /*var gx=this.gravity.x*this.timeStep;
      var gy=this.gravity.y*this.timeStep;
      var gz=this.gravity.z*this.timeStep;*/

      var j = islandNumRigidBodies;

      while (j--) {
        //or(var j=0, l=islandNumRigidBodies; j<l; j++){
        body = this.islandRigidBodies[j];

        if (body.isDynamic) {
          body.linearVelocity.addEqual(gVel);
          /*body.linearVelocity.x+=gx;
          body.linearVelocity.y+=gy;
          body.linearVelocity.z+=gz;*/
        }
      } // randomizing order


      if (this.enableRandomizer) {
        //for(var j=1, l=islandNumConstraints; j<l; j++){
        j = islandNumConstraints;

        while (j--) {
          if (j !== 0) {
            var swap = (this.randX = this.randX * this.randA + this.randB & 0x7fffffff) / 2147483648.0 * j | 0;
            constraint = this.islandConstraints[j];
            this.islandConstraints[j] = this.islandConstraints[swap];
            this.islandConstraints[swap] = constraint;
          }
        }
      } // solve contraints


      j = islandNumConstraints;

      while (j--) {
        //for(j=0, l=islandNumConstraints; j<l; j++){
        this.islandConstraints[j].preSolve(this.timeStep, invTimeStep); // pre-solve
      }

      var k = this.numIterations;

      while (k--) {
        //for(var k=0, l=this.numIterations; k<l; k++){
        j = islandNumConstraints;

        while (j--) {
          //for(j=0, m=islandNumConstraints; j<m; j++){
          this.islandConstraints[j].solve(); // main-solve
        }
      }

      j = islandNumConstraints;

      while (j--) {
        //for(j=0, l=islandNumConstraints; j<l; j++){
        this.islandConstraints[j].postSolve(); // post-solve

        this.islandConstraints[j] = null; // gc
      } // sleeping check


      var sleepTime = 10;
      j = islandNumRigidBodies;

      while (j--) {
        //for(j=0, l=islandNumRigidBodies;j<l;j++){
        body = this.islandRigidBodies[j];

        if (this.callSleep(body)) {
          body.sleepTime += this.timeStep;
          if (body.sleepTime < sleepTime) sleepTime = body.sleepTime;
        } else {
          body.sleepTime = 0;
          sleepTime = 0;
          continue;
        }
      }

      if (sleepTime > 0.5) {
        // sleep the island
        j = islandNumRigidBodies;

        while (j--) {
          //for(j=0, l=islandNumRigidBodies;j<l;j++){
          this.islandRigidBodies[j].sleep();
          this.islandRigidBodies[j] = null; // gc
        }
      } else {
        // update positions
        j = islandNumRigidBodies;

        while (j--) {
          //for(j=0, l=islandNumRigidBodies;j<l;j++){
          this.islandRigidBodies[j].updatePosition(this.timeStep);
          this.islandRigidBodies[j] = null; // gc
        }
      }

      this.numIslands++;
    } //------------------------------------------------------
    //   END SIMULATION
    //------------------------------------------------------


    if (stat) this.performance.calcEnd();
    if (this.postLoop !== null) this.postLoop();
  },
  // remove someting to world
  remove: function (obj) {},
  // add someting to world
  add: function (o) {
    o = o || {};
    var type = o.type || "box";
    if (type.constructor === String) type = [type];
    var isJoint = type[0].substring(0, 5) === 'joint' ? true : false;
    if (isJoint) return this.initJoint(type[0], o);else return this.initBody(type, o);
  },
  initBody: function (type, o) {
    var invScale = this.invScale; // body dynamic or static

    var move = o.move || false;
    var kinematic = o.kinematic || false; // POSITION
    // body position

    var p = o.pos || [0, 0, 0];
    p = p.map(function (x) {
      return x * invScale;
    }); // shape position

    var p2 = o.posShape || [0, 0, 0];
    p2 = p2.map(function (x) {
      return x * invScale;
    }); // ROTATION
    // body rotation in degree

    var r = o.rot || [0, 0, 0];
    r = r.map(function (x) {
      return x * _Math.degtorad;
    }); // shape rotation in degree

    var r2 = o.rotShape || [0, 0, 0];
    r2 = r.map(function (x) {
      return x * _Math.degtorad;
    }); // SIZE
    // shape size

    var s = o.size === undefined ? [1, 1, 1] : o.size;

    if (s.length === 1) {
      s[1] = s[0];
    }

    if (s.length === 2) {
      s[2] = s[0];
    }

    s = s.map(function (x) {
      return x * invScale;
    }); // body physics settings

    var sc = new ShapeConfig(); // The density of the shape.

    if (o.density !== undefined) sc.density = o.density; // The coefficient of friction of the shape.

    if (o.friction !== undefined) sc.friction = o.friction; // The coefficient of restitution of the shape.

    if (o.restitution !== undefined) sc.restitution = o.restitution; // The bits of the collision groups to which the shape belongs.

    if (o.belongsTo !== undefined) sc.belongsTo = o.belongsTo; // The bits of the collision groups with which the shape collides.

    if (o.collidesWith !== undefined) sc.collidesWith = o.collidesWith;

    if (o.config !== undefined) {
      if (o.config[0] !== undefined) sc.density = o.config[0];
      if (o.config[1] !== undefined) sc.friction = o.config[1];
      if (o.config[2] !== undefined) sc.restitution = o.config[2];
      if (o.config[3] !== undefined) sc.belongsTo = o.config[3];
      if (o.config[4] !== undefined) sc.collidesWith = o.config[4];
    }
    /* if(o.massPos){
         o.massPos = o.massPos.map(function(x) { return x * invScale; });
         sc.relativePosition.set( o.massPos[0], o.massPos[1], o.massPos[2] );
     }
     if(o.massRot){
         o.massRot = o.massRot.map(function(x) { return x * _Math.degtorad; });
         var q = new Quat().setFromEuler( o.massRot[0], o.massRot[1], o.massRot[2] );
         sc.relativeRotation = new Mat33().setQuat( q );//_Math.EulerToMatrix( o.massRot[0], o.massRot[1], o.massRot[2] );
     }*/


    var position = new Vec3(p[0], p[1], p[2]);
    var rotation = new Quat().setFromEuler(r[0], r[1], r[2]); // rigidbody

    var body = new RigidBody(position, rotation); //var body = new RigidBody( p[0], p[1], p[2], r[0], r[1], r[2], r[3], this.scale, this.invScale );
    // SHAPES

    var shape, n;

    for (var i = 0; i < type.length; i++) {
      n = i * 3;
      if (p2[n] !== undefined) sc.relativePosition.set(p2[n], p2[n + 1], p2[n + 2]);
      if (r2[n] !== undefined) sc.relativeRotation.setQuat(new Quat().setFromEuler(r2[n], r2[n + 1], r2[n + 2]));

      switch (type[i]) {
        case "sphere":
          shape = new Sphere(sc, s[n]);
          break;

        case "cylinder":
          shape = new Cylinder(sc, s[n], s[n + 1]);
          break;

        case "box":
          shape = new Box(sc, s[n], s[n + 1], s[n + 2]);
          break;

        case "plane":
          shape = new Plane(sc);
          break;
      }

      body.addShape(shape);
    } // body can sleep or not


    if (o.neverSleep || kinematic) body.allowSleep = false;else body.allowSleep = true;
    body.isKinematic = kinematic; // body static or dynamic

    if (move) {
      if (o.massPos || o.massRot) body.setupMass(BODY_DYNAMIC, false);else body.setupMass(BODY_DYNAMIC, true); // body can sleep or not
      //if( o.neverSleep ) body.allowSleep = false;
      //else body.allowSleep = true;
    } else {
      body.setupMass(BODY_STATIC);
    }

    if (o.name !== undefined) body.name = o.name; //else if( move ) body.name = this.numRigidBodies;
    // finaly add to physics world

    this.addRigidBody(body); // force sleep on not

    if (move) {
      if (o.sleep) body.sleep();else body.awake();
    }

    return body;
  },
  initJoint: function (type, o) {
    //var type = type;
    var invScale = this.invScale;
    var axe1 = o.axe1 || [1, 0, 0];
    var axe2 = o.axe2 || [1, 0, 0];
    var pos1 = o.pos1 || [0, 0, 0];
    var pos2 = o.pos2 || [0, 0, 0];
    pos1 = pos1.map(function (x) {
      return x * invScale;
    });
    pos2 = pos2.map(function (x) {
      return x * invScale;
    });
    var min, max;

    if (type === "jointDistance") {
      min = o.min || 0;
      max = o.max || 10;
      min = min * invScale;
      max = max * invScale;
    } else {
      min = o.min || 57.29578;
      max = o.max || 0;
      min = min * _Math.degtorad;
      max = max * _Math.degtorad;
    }

    var limit = o.limit || null;
    var spring = o.spring || null;
    var motor = o.motor || null; // joint setting

    var jc = new JointConfig();
    jc.scale = this.scale;
    jc.invScale = this.invScale;
    jc.allowCollision = o.collision || false;
    jc.localAxis1.set(axe1[0], axe1[1], axe1[2]);
    jc.localAxis2.set(axe2[0], axe2[1], axe2[2]);
    jc.localAnchorPoint1.set(pos1[0], pos1[1], pos1[2]);
    jc.localAnchorPoint2.set(pos2[0], pos2[1], pos2[2]);
    var b1 = null;
    var b2 = null;
    if (o.body1 === undefined || o.body2 === undefined) return printError('World', "Can't add joint if attach rigidbodys not define !");

    if (o.body1.constructor === String) {
      b1 = this.getByName(o.body1);
    } else if (o.body1.constructor === Number) {
      b1 = this.getByName(o.body1);
    } else if (o.body1.constructor === RigidBody) {
      b1 = o.body1;
    }

    if (o.body2.constructor === String) {
      b2 = this.getByName(o.body2);
    } else if (o.body2.constructor === Number) {
      b2 = this.getByName(o.body2);
    } else if (o.body2.constructor === RigidBody) {
      b2 = o.body2;
    }

    if (b1 === null || b2 === null) return printError('World', "Can't add joint attach rigidbodys not find !");
    jc.body1 = b1;
    jc.body2 = b2;
    var joint;

    switch (type) {
      case "jointDistance":
        joint = new DistanceJoint(jc, min, max);
        if (spring !== null) joint.limitMotor.setSpring(spring[0], spring[1]);
        if (motor !== null) joint.limitMotor.setMotor(motor[0], motor[1]);
        break;

      case "jointHinge":
      case "joint":
        joint = new HingeJoint(jc, min, max);
        if (spring !== null) joint.limitMotor.setSpring(spring[0], spring[1]); // soften the joint ex: 100, 0.2

        if (motor !== null) joint.limitMotor.setMotor(motor[0], motor[1]);
        break;

      case "jointPrisme":
        joint = new PrismaticJoint(jc, min, max);
        break;

      case "jointSlide":
        joint = new SliderJoint(jc, min, max);
        break;

      case "jointBall":
        joint = new BallAndSocketJoint(jc);
        break;

      case "jointWheel":
        joint = new WheelJoint(jc);
        if (limit !== null) joint.rotationalLimitMotor1.setLimit(limit[0], limit[1]);
        if (spring !== null) joint.rotationalLimitMotor1.setSpring(spring[0], spring[1]);
        if (motor !== null) joint.rotationalLimitMotor1.setMotor(motor[0], motor[1]);
        break;
    }

    joint.name = o.name || ''; // finaly add to physics world

    this.addJoint(joint);
    return joint;
  }
}); // test version
//export { RigidBody } from './core/RigidBody_X.js';
//export { World } from './core/World_X.js';
},{}],"BbxC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OimoHelper = void 0;

var oimo = _interopRequireWildcard(require("oimo"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BOX = 2;
var CYLINDER = 3;

var OimoHelper =
/*#__PURE__*/
function () {
  function OimoHelper(worldObjects, floor) {
    var _this = this;

    _classCallCheck(this, OimoHelper);

    // pass them in at the beginning?
    this.worldObjects = worldObjects;
    this.floor = floor;
    print(this.floor);
    this.world = new oimo.World({
      timestep: 1 / 20,
      iterations: 8,
      broadphase: 3,
      // 1 brute force, 2 sweep and prune, 3 volume tree
      worldscale: 1,
      // scale full world
      random: true,
      // randomize sample
      info: false,
      // calculate statistic or not
      gravity: [0, -19.8, 0]
    });
    this.worldObjects.forEach(function (worldObject, i) {
      // add into the physics world
      _this.worldObjects[i].physicsObject = _this.world.add(worldObject.physicsObject); // sync the physics scale to snap

      _this.syncScale(_this.worldObjects[i].sceneObject, _this.worldObjects[i].physicsObject);
    });

    if (this.floor) {
      this.floor.physicsObject = this.world.add(this.floor.physicsObject); // this.syncBody(this.floor.sceneObject, this.floor.physicsObject)

      this.syncScale(this.floor.sceneObject, this.floor.physicsObject);
      this.syncPos(this.floor.sceneObject, this.floor.physicsObject);
    }
  }

  _createClass(OimoHelper, [{
    key: "bodyPos",
    value: function bodyPos(oimoBody) {
      var pos = oimoBody.getPosition();
      return new vec3(pos.x, pos.y, pos.z);
    }
  }, {
    key: "bodyScale",
    value: function bodyScale(oimoBody) {
      var shape = oimoBody.shapes;
      if (shape.type == CYLINDER) return new vec3(shape.radius, shape.height, shape.radius);
      return new vec3(shape.width, shape.height, shape.depth);
    }
  }, {
    key: "bodyRot",
    value: function bodyRot(oimoBody) {
      var rotation = oimoBody.getQuaternion();
      return new quat(rotation.w, rotation.x, rotation.y, rotation.z);
    }
  }, {
    key: "syncPos",
    value: function syncPos(SceneObject, oimoBody) {
      var transform = SceneObject.getTransform();
      var newPos = this.bodyPos(oimoBody); // transform.setLocalPosition(newPos)

      transform.setWorldPosition(newPos);
      var rotation = this.bodyRot(oimoBody); // transform.setLocalRotation(rotation)

      transform.setWorldRotation(rotation);
    }
  }, {
    key: "syncScale",
    value: function syncScale(SceneObject, oimoBody) {
      var transform = SceneObject.getTransform();
      var physicsSize = this.bodyScale(oimoBody);
      transform.setWorldScale(physicsSize);
    }
  }, {
    key: "syncBody",
    value: function syncBody(sceneObj, physicsObj) {
      syncScale(sceneObj, physicsObj);
      syncPos(sceneObj, physicsObj);
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      this.world.step();
      this.worldObjects.forEach(function (worldObject) {
        _this2.syncPos(worldObject.sceneObject, worldObject.physicsObject);
      });
    }
  }], [{
    key: "makeBox",
    value: function makeBox(size, position, rotation) {
      return {
        type: 'box',
        // type of shape : sphere, box, cylinder
        size: [1, 2, 1],
        // size of shape
        pos: [0, 40, 0],
        // start position
        rot: [0, 0, 0],
        // start rotation in degree
        move: true,
        // dynamic or statique
        density: 0.1,
        friction: 1,
        restitution: 1,
        belongsTo: 1,
        // The bits of the collision groups to which the shape belongs.
        collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.

      };
    }
  }, {
    key: "makeFloor",
    value: function makeFloor(size, position, rotation) {
      return {
        type: 'box',
        // type of shape : sphere, box, cylinder
        size: [10, 1, 10],
        // size of shape
        pos: [0, -1, 0],
        // start position
        rot: [0, 0, 0],
        // start rotation in degree
        move: false,
        // dynamic or static
        density: 100,
        friction: 0.2,
        restitution: 0.2,
        //bouncyness
        belongsTo: 1,
        // The bits of the collision groups to which the shape belongs.
        collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.

      };
    }
  }, {
    key: "makeSphere",
    value: function makeSphere(size, position, rotation) {
      return {
        type: 'sphere',
        // type of shape : sphere, box, cylinder
        size: [3, 3, 3],
        // size of shape
        pos: [0, 10, 10],
        // start position
        rot: [90, 0, 0],
        // start rotation in degree
        move: true,
        // dynamic or statique
        density: 10,
        friction: 0.2,
        restitution: 0.2,
        belongsTo: 1,
        // The bits of the collision groups to which the shape belongs.
        collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.

      };
    }
  }]);

  return OimoHelper;
}(); // ------------------------------- example world
// global.pins.forEach(function(pin, i) {
//   var physicsPin = world.add({
//     type: 'cylinder', // type of shape : sphere, box, cylinder
//     size: [10, 55, 10], // size of shape
//     pos: pinsPositions[i], // start position in degree
//     rot: [0, 0, 0], // start rotation in degree
//     move: true, // dynamic or statique
//     density: 0.1,
//     friction: 1,
//     restitution: 1,
//     belongsTo: 1, // The bits of the collision groups to which the shape belongs.
//     collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
//   })
//   global.physicsPins.push(physicsPin)
//   syncPos(pin, physicsPin)
// })
// global.rim.forEach(function(pin, i) {
//   var physicsPin = world.add({
//     type: 'box', // type of shape : sphere, box, cylinder
//     size: [1, 5.5, 1], // size of shape
//     pos: rimPositions[i], // start position in degree
//     rot: [0, 0, 0], // start rotation in degree
//     move: true, // dynamic or statique
//     density: 0.1,
//     friction: 1,
//     restitution: 1,
//     belongsTo: 1, // The bits of the collision groups to which the shape belongs.
//     collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
//   })
//   global.physicsRim.push(physicsPin)
//   syncPos(pin, physicsPin)
// })
// global.ball = world.add({
//   type: 'sphere', // type of shape : sphere, box, cylinder
//   size: [3, 3, 3], // size of shape
//   pos: [0, 10, 10], // start position in degree
//   rot: [90, 0, 0], // start rotation in degree
//   move: true, // dynamic or statique
//   density: 10,
//   friction: 0.2,
//   restitution: 0.2,
//   belongsTo: 1, // The bits of the collision groups to which the shape belongs.
//   collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
// })
// global.floor = world.add({
//   type: 'box', // type of shape : sphere, box, cylinder
//   size: [1000, 1, 1000], // size of shape
//   pos: [0, 0, 0], // start position in degree
//   rot: [0, 0, 0], // start rotation in degree
//   move: false, // dynamic or statique
//   density: 100,
//   friction: 0.2,
//   restitution: 0.2, //bouncyness
//   belongsTo: 1, // The bits of the collision groups to which the shape belongs.
//   collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
// })
// // global.getRndInteger = function(min, max) {
// //   return Math.round(Math.random() * (max - min)) + min
// // }
// function reset() {
//   ball.resetPosition(0, 2, 10)
//   ball.resetRotation(90, 0, 0)
//   global.physicsPins.forEach(function(pin, i) {
//     pin.resetPosition(pinsPositions[i][0], pinsPositions[i][1], pinsPositions[i][2])
//     pin.resetRotation(0, 0, 0)
//   })
//   shouldThrow = true
// }
// function throwBall(power, dir) {
//   // var angular = new OIMO.Vec3(7, 2, 2)
//   // var linear = new OIMO.Vec3(0, 30, -20)
//   var angular = new OIMO.Vec3(-2, dir, dir * -1)
//   var linear = new OIMO.Vec3(dir, power, power * -1)
//   var camTransform = script.camera.getTransform()
//   var camPos = camTransform.getWorldPosition()
//   var direction = bodyPos(ball).sub(camPos)
//   var directionNorm = direction.normalize()
//   var scalePower = 50
//   var scaledDirection = directionNorm.uniformScale(scalePower)
//   print(direction)
//   print(directionNorm)
//   print(scaledDirection)
//   scaledDirection.y = 10
//   var finalDirection = scaledDirection
//   print(finalDirection)
//   print('ayya')
//   ball.linearVelocity = new OIMO.Vec3(finalDirection.x, finalDirection.y, finalDirection.z)
//   ball.angularVelocity = angular
//   // impulse is an alternative but didn't seem right for some reason
//   // sphere.applyImpulse(pos, force)
// }


exports.OimoHelper = OimoHelper;
},{"oimo":"36RA"}],"Focm":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cannon = exports.Oimo = exports.objectColour = exports.rotateByDegrees = exports.rotateAroundAxis = exports.rotateByRadians = exports.DegreesToRadians = exports.radiansToDegrees = exports.tweenVec3 = exports.collision2D = exports.updatePosition = exports.removeTimers = exports.createObjectFromPrefab = exports.hide = exports.show = exports.display = exports.timer = exports.updateText = exports.isFrontCam = exports.randomInteger = exports.rangeMap = exports.clamp = exports.onTap = exports.createEvent = exports.updateTexture = exports.saveFrame = void 0;

var _cannonHelper = require("./helpers/cannonHelper");

var _oimoHelper = require("./helpers/oimoHelper");

var saveFrame = function saveFrame(texture) {
  return texture.copyFrame();
};

exports.saveFrame = saveFrame;

var updateTexture = function updateTexture(spriteVisual, texture) {
  spriteVisual.mainPass.baseTex = texture;
};

exports.updateTexture = updateTexture;

var createEvent = function createEvent(eventName) {
  return script.createEvent(eventName);
};

exports.createEvent = createEvent;

var onTap = function onTap(fn) {
  return script.createEvent('TapEvent').bind(fn);
};

exports.onTap = onTap;

var clamp = function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
};

exports.clamp = clamp;

var rangeMap = function rangeMap(input, inLow, inHigh, outLow, outHigh, clampValue) {
  var value = (input - inLow) / (inHigh - inLow) * (outHigh - outLow) + outLow;
  return clampValue ? clamp(value, outLow, outHigh) : value;
};

exports.rangeMap = rangeMap;

var randomInteger = function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};

exports.randomInteger = randomInteger;

var isFrontCam = function isFrontCam() {
  return global.scene.getCameraType() == 'front';
};

exports.isFrontCam = isFrontCam;

var updateText = function updateText(label, text) {
  label.text = text;
};

exports.updateText = updateText;

var timer = function timer(time, onEnd, onStart, loop) {
  if (onStart) onStart();
  var event = script.createEvent('DelayedCallbackEvent');
  event.bind(function () {
    onEnd();
    if (loop) event.reset(time);
  });
  if (event) event.reset(time);
  return event;
};

exports.timer = timer;

var display = function display(obj, show) {
  obj.enabled = show;
};

exports.display = display;

var show = function show(obj) {
  obj.enabled = true;
};

exports.show = show;

var hide = function hide(obj) {
  obj.enabled = false;
};

exports.hide = hide;

var createObjectFromPrefab = function createObjectFromPrefab(prefab, container) {
  return prefab.instantiate(container);
};

exports.createObjectFromPrefab = createObjectFromPrefab;

var removeTimers = function removeTimers(timers) {
  timers.forEach(function (timer) {
    script.removeEvent(timer);
  });
};

exports.removeTimers = removeTimers;

var updatePosition = function updatePosition(sceneObject, pos) {
  var transform = sceneObject.getTransform();
  transform.setLocalPosition(pos);
};

exports.updatePosition = updatePosition;

var collision2D = function collision2D(a, b, distance) {
  var aPos = a.getTransform().getWorldPosition();
  var bPos = b.getTransform().getWorldPosition();
  return Math.abs(aPos.x - bPos.x) <= distance;
};

exports.collision2D = collision2D;

var tweenVec3 = function tweenVec3(sceneObject, startValue, endValue, timeMs, update, complete) {
  var obj = sceneObject;
  var tween = new TWEEN.Tween(startValue).to(endValue, timeMs) // .delay(200)
  // .repeat(Infinity)
  // .yoyo()
  .easing(TWEEN.Easing.Quadratic.Out).onUpdate(update).onComplete(complete).start();
  return tween;
};

exports.tweenVec3 = tweenVec3;

var radiansToDegrees = function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
};

exports.radiansToDegrees = radiansToDegrees;

var DegreesToRadians = function DegreesToRadians(degrees) {
  return degrees * 0.0174533;
}; // rot: vec3


exports.DegreesToRadians = DegreesToRadians;

var rotateByRadians = function rotateByRadians(sceneObject, rot) {
  var transform = sceneObject.getTransform();
  transform.setLocalRotation(quat.fromEulerAngles(rot.x, rot.y, rot.z));
};

exports.rotateByRadians = rotateByRadians;

var rotateAroundAxis = function rotateAroundAxis(sceneObject, vec, speed) {
  var transform = sceneObject.getTransform();
  var rotation = transform.getLocalRotation();
  var rotateBy = quat.angleAxis(Math.PI * getDeltaTime() * speed, vec); // const rotateBy = quat.angleAxis(Math.PI * getDeltaTime() * script.speed, vec3.up())

  var newRotation = rotation.multiply(rotateBy);
  transform.setLocalRotation(newRotation);
};

exports.rotateAroundAxis = rotateAroundAxis;

var rotateByDegrees = function rotateByDegrees(sceneObject, degrees) {
  var oldRotation = sceneObject.getTransform().getLocalRotation().toEulerAngles();
  var newRotation = quat.fromEulerAngles(oldRotation.x, oldRotation.y, DegreesToRadians(degrees));
  sceneObject.getTransform().setLocalRotation(newRotation);
}; // obj: mesh, sprite etc


exports.rotateByDegrees = rotateByDegrees;

var objectColour = function objectColour(obj, colour) {
  obj.mainPass.baseColor = colour;
};

exports.objectColour = objectColour;
var Oimo = _oimoHelper.OimoHelper;
exports.Oimo = Oimo;
var Cannon = _cannonHelper.CannonHelper;
exports.Cannon = Cannon;
},{"./helpers/cannonHelper":"REVM","./helpers/oimoHelper":"BbxC"}]},{},["Focm"], "util")
//# sourceMappingURL=/index.js.map