(function() {
    'use strict';

    angular.module('itemsMock', [])
        .value('CONTACTS_MOCK', [
            {
                _id: 1,
                name: 'Diego Souza',
                address: 'Hudson Street',
                phone: '553188848176'
            },
            {
                _id: 2,
                name: 'Albert Silva',
                address: 'Mkt Street',
                phone: '1456847585'
            },
            {
                _id: 3,
                name: 'John Lima',
                address: 'Street Hunger',
                phone: '2555712'
            }
        ])
        .value('BASE_URL', 'http://localhost:3030');
})();