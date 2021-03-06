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
    define(['ApiClient', 'model/DeleteResponse', 'model/ErrorModel', 'model/CurrenciesGet', 'model/CurrenciesList', 'model/CreateResponse', 'model/CurrenciesRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteResponse'), require('../model/ErrorModel'), require('../model/CurrenciesGet'), require('../model/CurrenciesList'), require('../model/CreateResponse'), require('../model/CurrenciesRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenmoneyApi) {
      root.OpenmoneyApi = {};
    }
    root.OpenmoneyApi.CurrenciesApi = factory(root.OpenmoneyApi.ApiClient, root.OpenmoneyApi.DeleteResponse, root.OpenmoneyApi.ErrorModel, root.OpenmoneyApi.CurrenciesGet, root.OpenmoneyApi.CurrenciesList, root.OpenmoneyApi.CreateResponse, root.OpenmoneyApi.CurrenciesRequest);
  }
}(this, function(ApiClient, DeleteResponse, ErrorModel, CurrenciesGet, CurrenciesList, CreateResponse, CurrenciesRequest) {
  'use strict';

  /**
   * Currencies service.
   * @module api/CurrenciesApi
   * @version 2.0.0
   */

  /**
   * Constructs a new CurrenciesApi. 
   * @alias module:api/CurrenciesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the currenciesDelete operation.
     * @callback module:api/CurrenciesApi~currenciesDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a currency
     * @param {String} stewardname 
     * @param {String} namespace 
     * @param {String} currency Currency name
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {module:api/CurrenciesApi~currenciesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteResponse}
     */
    this.currenciesDelete = function(stewardname, namespace, currency, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling currenciesDelete";
      }

      // verify the required parameter 'namespace' is set
      if (namespace == undefined || namespace == null) {
        throw "Missing the required parameter 'namespace' when calling currenciesDelete";
      }

      // verify the required parameter 'currency' is set
      if (currency == undefined || currency == null) {
        throw "Missing the required parameter 'currency' when calling currenciesDelete";
      }


      var pathParams = {
        'stewardname': stewardname,
        'namespace': namespace,
        'currency': currency
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
        '/stewards/{stewardname}/namespaces/{namespace}/currencies/{currency}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the currenciesGet operation.
     * @callback module:api/CurrenciesApi~currenciesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrenciesGet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a currency by its name
     * @param {String} stewardname 
     * @param {String} namespace 
     * @param {String} currency Name of a currency
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {module:api/CurrenciesApi~currenciesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrenciesGet}
     */
    this.currenciesGet = function(stewardname, namespace, currency, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling currenciesGet";
      }

      // verify the required parameter 'namespace' is set
      if (namespace == undefined || namespace == null) {
        throw "Missing the required parameter 'namespace' when calling currenciesGet";
      }

      // verify the required parameter 'currency' is set
      if (currency == undefined || currency == null) {
        throw "Missing the required parameter 'currency' when calling currenciesGet";
      }


      var pathParams = {
        'stewardname': stewardname,
        'namespace': namespace,
        'currency': currency
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
      var returnType = CurrenciesGet;

      return this.apiClient.callApi(
        '/stewards/{stewardname}/namespaces/{namespace}/currencies/{currency}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the currenciesList operation.
     * @callback module:api/CurrenciesApi~currenciesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrenciesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Listing currencies known by steward.
     * @param {String} stewardname 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {String} opts.namespace 
     * @param {module:api/CurrenciesApi~currenciesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrenciesList}
     */
    this.currenciesList = function(stewardname, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling currenciesList";
      }


      var pathParams = {
        'stewardname': stewardname
      };
      var queryParams = {
        'namespace': opts['namespace']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = ['basicAuthenticationSecurity', 'oauth2PasswordSecurity', 'oauth2ApplicationSecurity', 'oauth2ImplicitSecurity', 'apiKeySecurity', 'oauth2AccessCodeSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/html'];
      var returnType = CurrenciesList;

      return this.apiClient.callApi(
        '/stewards/{stewardname}/currencies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the currenciesPost operation.
     * @callback module:api/CurrenciesApi~currenciesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a currency
     * @param {String} stewardname 
     * @param {String} namespace 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {module:model/CurrenciesRequest} opts.currency 
     * @param {module:api/CurrenciesApi~currenciesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateResponse}
     */
    this.currenciesPost = function(stewardname, namespace, opts, callback) {
      opts = opts || {};
      var postBody = opts['currency'];

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling currenciesPost";
      }

      // verify the required parameter 'namespace' is set
      if (namespace == undefined || namespace == null) {
        throw "Missing the required parameter 'namespace' when calling currenciesPost";
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
        '/stewards/{stewardname}/namespaces/{namespace}/currencies', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the currenciesPut operation.
     * @callback module:api/CurrenciesApi~currenciesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Currency
     * @param {String} stewardname 
     * @param {String} namespace 
     * @param {String} currency Name of a currency
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization Token
     * @param {module:model/CurrenciesRequest} opts.currencies 
     * @param {module:api/CurrenciesApi~currenciesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateResponse}
     */
    this.currenciesPut = function(stewardname, namespace, currency, opts, callback) {
      opts = opts || {};
      var postBody = opts['currencies'];

      // verify the required parameter 'stewardname' is set
      if (stewardname == undefined || stewardname == null) {
        throw "Missing the required parameter 'stewardname' when calling currenciesPut";
      }

      // verify the required parameter 'namespace' is set
      if (namespace == undefined || namespace == null) {
        throw "Missing the required parameter 'namespace' when calling currenciesPut";
      }

      // verify the required parameter 'currency' is set
      if (currency == undefined || currency == null) {
        throw "Missing the required parameter 'currency' when calling currenciesPut";
      }


      var pathParams = {
        'stewardname': stewardname,
        'namespace': namespace,
        'currency': currency
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
        '/stewards/{stewardname}/namespaces/{namespace}/currencies/{currency}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
