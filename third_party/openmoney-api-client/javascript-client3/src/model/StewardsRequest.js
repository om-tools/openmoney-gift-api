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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenmoneyApi) {
      root.OpenmoneyApi = {};
    }
    root.OpenmoneyApi.StewardsRequest = factory(root.OpenmoneyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StewardsRequest model module.
   * @module model/StewardsRequest
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>StewardsRequest</code>.
   * @alias module:model/StewardsRequest
   * @class
   * @param stewardname {String} 
   */
  var exports = function(stewardname) {
    var _this = this;

    _this['stewardname'] = stewardname;




  };

  /**
   * Constructs a <code>StewardsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StewardsRequest} obj Optional instance to populate.
   * @return {module:model/StewardsRequest} The populated <code>StewardsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stewardname')) {
        obj['stewardname'] = ApiClient.convertToType(data['stewardname'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('publicKey')) {
        obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('email_notifications')) {
        obj['email_notifications'] = ApiClient.convertToType(data['email_notifications'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} stewardname
   */
  exports.prototype['stewardname'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} publicKey
   */
  exports.prototype['publicKey'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} email_notifications
   */
  exports.prototype['email_notifications'] = undefined;



  return exports;
}));

