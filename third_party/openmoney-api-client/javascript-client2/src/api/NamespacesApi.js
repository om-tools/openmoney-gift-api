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
    define(['ApiClient', 'model/DeleteResponse', 'model/ErrorModel', 'model/NamespacesGet', 'model/NamespacesList', 'model/NamespacesRequest', 'model/CreateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteResponse'), require('../model/ErrorModel'), require('../model/NamespacesGet'), require('../model/NamespacesList'), require('../model/NamespacesRequest'), require('../model/CreateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenmoneyApi) {
      root.OpenmoneyApi = {};
    }
    root.OpenmoneyApi.NamespacesApi = factory(root.OpenmoneyApi.ApiClient, root.OpenmoneyApi.DeleteResponse, root.OpenmoneyApi.ErrorModel, root.OpenmoneyApi.NamespacesGet, root.OpenmoneyApi.NamespacesList, root.OpenmoneyApi.NamespacesRequest, root.OpenmoneyApi.CreateResponse);
  }
}(this, function(ApiClient, DeleteResponse, ErrorModel, NamespacesGet, NamespacesList, NamespacesRequest, CreateResponse) {
  'use strict';

  /**
   * Namespaces service.
   * @module api/NamespacesApi
   * @version 2.0.0
   */

  /**
   * Constructs a new NamespacesApi. 
   * @alias module:api/NamespacesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the spacesDelete operation.
     * @callback module:api/NamespacesApi~spacesDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a namespace
     * @param {String} stewardname 
     * @param {String} namespace namespace name
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {module:api/NamespacesApi~spacesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteResponse}
     */
    this.spacesDelete = function(stewardname, namespace, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling spacesDelete";
      }

      // verify the required parameter 'namespace' is set
      if (namespace == undefined || namespace == null) {
        throw "Missing the required parameter 'namespace' when calling spacesDelete";
      }


      var pathParams = {
        'stewardname': stewardname,
        'namespace': namespace
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = ['basicAuthenticationSecurity', 'oauth2PasswordSecurity', 'oauth2ApplicationSecurity', 'oauth2ImplicitSecurity', 'apiKeySecurity', 'oauth2AccessCodeSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/html'];
      var returnType = DeleteResponse;

      return this.apiClient.callApi(
        '/stewards/{stewardname}/namespaces/{namespace}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spacesGet operation.
     * @callback module:api/NamespacesApi~spacesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NamespacesGet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a namespace by it&#39;s name
     * @param {String} stewardname 
     * @param {String} namespace space name
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {module:api/NamespacesApi~spacesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NamespacesGet}
     */
    this.spacesGet = function(stewardname, namespace, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling spacesGet";
      }

      // verify the required parameter 'namespace' is set
      if (namespace == undefined || namespace == null) {
        throw "Missing the required parameter 'namespace' when calling spacesGet";
      }


      var pathParams = {
        'stewardname': stewardname,
        'namespace': namespace
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = ['basicAuthenticationSecurity', 'oauth2PasswordSecurity', 'oauth2ApplicationSecurity', 'oauth2ImplicitSecurity', 'apiKeySecurity', 'oauth2AccessCodeSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/html'];
      var returnType = NamespacesGet;

      return this.apiClient.callApi(
        '/stewards/{stewardname}/namespaces/{namespace}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spacesList operation.
     * @callback module:api/NamespacesApi~spacesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NamespacesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Listing of namespaces known by steward.
     * @param {String} stewardname 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {String} opts.parentNamespace 
     * @param {module:api/NamespacesApi~spacesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NamespacesList}
     */
    this.spacesList = function(stewardname, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling spacesList";
      }


      var pathParams = {
        'stewardname': stewardname
      };
      var queryParams = {
        'parent_namespace': opts['parentNamespace']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = ['basicAuthenticationSecurity', 'oauth2PasswordSecurity', 'oauth2ApplicationSecurity', 'oauth2ImplicitSecurity', 'apiKeySecurity', 'oauth2AccessCodeSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/html'];
      var returnType = NamespacesList;

      return this.apiClient.callApi(
        '/stewards/{stewardname}/namespaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spacesPost operation.
     * @callback module:api/NamespacesApi~spacesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a namespace
     * @param {String} stewardname 
     * @param {module:model/NamespacesRequest} space 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {module:api/NamespacesApi~spacesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateResponse}
     */
    this.spacesPost = function(stewardname, space, opts, callback) {
      opts = opts || {};
      var postBody = space;

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling spacesPost";
      }

      // verify the required parameter 'space' is set
      if (space == undefined || space == null) {
        throw "Missing the required parameter 'space' when calling spacesPost";
      }


      var pathParams = {
        'stewardname': stewardname
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = ['basicAuthenticationSecurity', 'oauth2PasswordSecurity', 'oauth2ApplicationSecurity', 'oauth2ImplicitSecurity', 'apiKeySecurity', 'oauth2AccessCodeSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/html'];
      var returnType = CreateResponse;

      return this.apiClient.callApi(
        '/stewards/{stewardname}/namespaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the spacesPut operation.
     * @callback module:api/NamespacesApi~spacesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a namespace
     * @param {String} stewardname 
     * @param {String} namespace space name
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {module:model/NamespacesRequest} opts.space 
     * @param {module:api/NamespacesApi~spacesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateResponse}
     */
    this.spacesPut = function(stewardname, namespace, opts, callback) {
      opts = opts || {};
      var postBody = opts['space'];

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling spacesPut";
      }

      // verify the required parameter 'namespace' is set
      if (namespace == undefined || namespace == null) {
        throw "Missing the required parameter 'namespace' when calling spacesPut";
      }


      var pathParams = {
        'stewardname': stewardname,
        'namespace': namespace
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = ['basicAuthenticationSecurity', 'oauth2PasswordSecurity', 'oauth2ApplicationSecurity', 'oauth2ImplicitSecurity', 'apiKeySecurity', 'oauth2AccessCodeSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/html'];
      var returnType = CreateResponse;

      return this.apiClient.callApi(
        '/stewards/{stewardname}/namespaces/{namespace}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
