var moment = require('alloy/moment');

exports.definition = {
    //The following data types are accepted and mapped to the appropriate SQLite type: 
    // string, varchar, int, tinyint, smallint, bigint, double, float, decimal, number, date, datetime and boolean
    config: {
        "columns": {
            "date_created": "datetime",
            "subject": "String",
            "assignee": "String",
            "allowed_time": "bigint",
            "date_assigned": "datetime"
        },
        "defaults": {
            "date_assigned": null,
            "assignee": null
        },
        "adapter": {
            "type": "properties",
            "collection_name": "incidents"
        }
    }
    // extendModel: function(Model) {
    //     _.extend(Model.prototype, {
    //         // Extend, override or implement the Backbone.Model methods
    //     });
    //     return Model;
    // },
    // extendCollection: function(Collection) {
    //     _.extend(Collection.prototype, {
    //         // Implement the comparator method.
    //         comparator: function(incident) {
    //             return incident.get('subject');
    //         }
    //     }); // end extend
    //     return Collection;
    // }
}