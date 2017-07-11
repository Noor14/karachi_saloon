'use strict';

describe('Service: dataUploadService', function () {

  // load the service's module
  beforeEach(module('karachiMenSaloonApp'));

  // instantiate service
  var dataUploadService;
  beforeEach(inject(function (_dataUploadService_) {
    dataUploadService = _dataUploadService_;
  }));

  it('should do something', function () {
    expect(!!dataUploadService).toBe(true);
  });

});
