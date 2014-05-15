angular.module('itemsMock', [])
.value('CONTACTS_MOCK', [
    {
        name: 'Diego Souza',
        address: 'Hudson Street',
        phone: '553188848176'
    },
    {
        name: 'Albert Silva',
        address: 'Mkt Street',
        phone: '1456847585'
    }
  ])
.value('BASE_URL', 'http://localhost:3000')