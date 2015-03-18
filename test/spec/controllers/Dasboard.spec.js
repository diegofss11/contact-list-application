describe('Dashboard', function(){
    var contactService, scope, httpBackend, ctrl, BASE_URL;
         
    beforeEach(module('contactListApp', 'itemsMock'));

    beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$controller_, _ContactService_, _CONTACTS_MOCK_, _BASE_URL_) {
    	contactService = _ContactService_;
        scope = _$rootScope_.$new();
        httpBackend = _$httpBackend_;
        CONTACTS_MOCK = _CONTACTS_MOCK_;
        BASE_URL = _BASE_URL_;

        ctrl = _$controller_('DashboardController', {
            scope: scope
        });

        httpBackend.expectGET(BASE_URL + '/contacts').respond(CONTACTS_MOCK);
        httpBackend.flush();

        scope.$apply();
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe("#init", function(){
        it('should populate `contacts` during controller initialization', function(){
           // expect(contactService.findAll).toHaveBeenCalled();
        });
    });
});