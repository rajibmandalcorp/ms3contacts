(function () {
    'use strict';

    angular
        .module('contactsApp')
        .service('configService', configService);

    function configService($http, $q, $log) {
        var self = this;
       // var host = "http://sys-api-mysql-ms3.us-e2.cloudhub.io"; cloud
        //var host = "http://localhost:8081"; // local 
       
       self.host = host;
        self.GetContacts = host + "/api/contacts?offset=0&limit=10";
        self.GetFieldDefinitions_API = host + "/api/FieldDefinitions";
        self.GetFieldData_API = host + "/api/FieldData";
        
        self.lastId = 0;
    }
})();