/**
 * Openmoney API
 * Openmoney API
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenmoneyApi);
  }
}(this, function(expect, OpenmoneyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenmoneyApi.StewardsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StewardsApi', function() {
    describe('stewardsDelete', function() {
      it('should call stewardsDelete successfully', function(done) {
        //uncomment below and update the code to test stewardsDelete
        //instance.stewardsDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stewardsForgotPost', function() {
      it('should call stewardsForgotPost successfully', function(done) {
        //uncomment below and update the code to test stewardsForgotPost
        //instance.stewardsForgotPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stewardsGet', function() {
      it('should call stewardsGet successfully', function(done) {
        //uncomment below and update the code to test stewardsGet
        //instance.stewardsGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stewardsList', function() {
      it('should call stewardsList successfully', function(done) {
        //uncomment below and update the code to test stewardsList
        //instance.stewardsList(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stewardsPost', function() {
      it('should call stewardsPost successfully', function(done) {
        //uncomment below and update the code to test stewardsPost
        //instance.stewardsPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stewardsPut', function() {
      it('should call stewardsPut successfully', function(done) {
        //uncomment below and update the code to test stewardsPut
        //instance.stewardsPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stewardsResetPost', function() {
      it('should call stewardsResetPost successfully', function(done) {
        //uncomment below and update the code to test stewardsResetPost
        //instance.stewardsResetPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));