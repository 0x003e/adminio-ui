function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n  @import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .visible {\n    display: flex !important;\n  }\n\n</style>\n<!-- Navbar -->\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark special-color-dark\">\n\n    <!-- Navbar brand -->\n    <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">Adminio UI </a></mdb-navbar-brand>\n\n    <!-- Collapsible content -->\n    <links>\n\n        <!-- Links -->\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                <a [routerLink]=\"['/']\" class=\"nav-link waves-light\" mdbWavesEffect>Buckets</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                <a [routerLink]=\"['/users']\" class=\"nav-link waves-light\"  mdbWavesEffect>Users</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                <a [routerLink]=\"['/policies']\" class=\"nav-link waves-light\"  mdbWavesEffect>Policies</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                <a [routerLink]=\"['/groups']\" class=\"nav-link waves-light\"  mdbWavesEffect>Groups</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                <a [routerLink]=\"['/server']\" class=\"nav-link waves-light\"  mdbWavesEffect>Server</a>\n            </li>\n        </ul>\n        <!-- Links -->\n    </links>\n    <!-- Collapsible content -->\n\n</mdb-navbar>\n<!--/.Navbar-->\n<app-loading></app-loading>\n<!-- <div class=\"content hidden\" role=\"main\" [routerLink]=\"['/']\" routerLinkActive=\"visible\" [routerLinkActiveOptions]=\"{exact: true}\">\n</div> -->\n\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n<footer class=\"page-footer font-small transparent fixed-bottom\">\n\n  <!-- Copyright -->\n  <div class=\"text-right py-3 transparent\">\n    <a href=\"https://github.com/rzrbld/adminio-ui\">adminio sources</a> | v:0.94 &nbsp;&nbsp;\n  </div>\n  <!-- Copyright -->\n\n</footer>\n<!-- Footer -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/buckets/buckets.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buckets/buckets.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBucketsBucketsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"padding-top: 30px;\">\n    <div class=\"row\">\n        <div class=\"col-9 col-md-9\">\n            <h1>Buckets</h1>\n        </div>\n        <div class=\"col-md-3 col-3 align-right\">\n            <button type=\"button\" mdbBtn gradient=\"aqua\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect rounded=\"true\" data-toggle=\"modal\" data-target=\"#addBucket\" mdbWavesEffect (click)=\"resetForm();addBucketModal.show()\"><mdb-icon fas icon=\"plus\" class=\"mr-1\"></mdb-icon>Add bucket</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12 col-12 mx-auto\">\n          <div class=\"md-form\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" id=\"search\" mdbInput>\n            <label for=\"search\">Search</label>\n          </div>\n        </div>\n    </div>\n\t<table mdbTable calss=\"table\" #tableBuckets=\"mdbTable\" >\n\t  <thead class=\"thead-light\">\n\t    <tr>\n\t      <th>Name</th>\n\t      <th>Creation Date</th>\n\t      <th *ngIf=\"(diskUsageInfo?.bucketsSizes | json) != ({} | json)\">Size</th>\n\t      <th *ngIf=\"serviceInfo?.sqsARN\">Event</th>\n\t      <th>Options</th>\n\t    </tr>\n\t  </thead>\n\t  <tbody *ngIf=\"buckets\">\n\t    <tr mdbTableCol *ngFor=\"let b of objectKeys(buckets); let i = index\">\n\t      <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"><strong>{{buckets[b].name}}</strong></td>\n\t      <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{buckets[b].info.creationDate | date : \"dd/MM/yy HH:mm:ss\" }}</td>\n\t      <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex && (diskUsageInfo?.bucketsSizes | json) != ({} | json)\">\n          <span *ngIf=\"diskUsageInfo?.bucketsSizes\" mdbTooltip=\"{{diskUsageInfo?.bucketsSizes[buckets[b].name]}} bytes\" placement=\"top\">\n            {{(math.round(diskUsageInfo?.bucketsSizes[buckets[b].name]/1024/1024)+'').length > 3 ? math.round(diskUsageInfo?.bucketsSizes[buckets[b].name]/1024/1024/1024)+' Gb' : isNaN(math.round(diskUsageInfo?.bucketsSizes[buckets[b].name]/1024/1024)) ? '&ndash;' : math.round(diskUsageInfo?.bucketsSizes[buckets[b].name]/1024/1024) +' Mb'}}\n          </span>\n        </td>\n\t      <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex && serviceInfo?.sqsARN\">\n          <span *ngIf=\"buckets[b].events.LambdaConfigs?.length\">\n            Lambda:\n            <span *ngFor=\"let c of buckets[b].events?.LambdaConfigs\">\n              {{c.Lambda}}<br/>\n              <ul class=\"type-none\">\n                <li *ngFor=\"let e of c?.Events\">\n                  {{e}}\n                </li>\n              </ul>\n            </span>\n          </span>\n          <span *ngIf=\"buckets[b].events.TopicConfigs?.length\">\n          Topic:\n          <span *ngFor=\"let c of buckets[b].events?.TopicConfigs\">\n             {{c.Topic}} <br/>\n              <ul class=\"type-none\">\n                <li *ngFor=\"let e of c?.Events\">\n                  {{e}}\n                </li>\n              </ul>\n            </span>\n          </span>\n          <span *ngIf=\"buckets[b].events.QueueConfigs?.length\">\n          Queue:\n            <span *ngFor=\"let c of buckets[b].events?.QueueConfigs\">\n              {{c.Queue}} <br/>\n              <ul class=\"type-none\">\n                <li *ngFor=\"let e of c?.Events\">\n                  {{e}}\n                </li>\n              </ul>\n            </span>\n          </span>\n        </td>\n\t  \t  <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t  \t  \t<a *ngIf=\"serviceInfo?.sqsARN\" mdbTooltip=\"Update Bucket Events\" placement=\"top\" (click)=\"updateBucketPrepare(buckets[b].name); editBucketModal.show()\"><mdb-icon fas icon=\"pencil-alt\" size=\"1x\" class=\"green-text pr-1\" aria-hidden=\"true\"></mdb-icon></a><span class=\"pr-1\">&nbsp;</span>\n\t  \t  \t<a mdbTooltip=\"Remove Bucket\" placement=\"top\" (click)=\"deleteBucketPrepare(buckets[b].name); deleteApproveModal.show()\"><mdb-icon fas icon=\"trash-alt\" size=\"1x\" class=\"red-text pr-1\" aria-hidden=\"true\"></mdb-icon></a><span class=\"pr-1\">&nbsp;</span>\n\t  \t  \t<a mdbTooltip=\"Bucket Lifecycyle\" placement=\"top\" (click)=\"bucketLifecycle(buckets[b].name); downloadLifecycle(buckets[b].name); resetLifecycleForm(); lifecycyleModal.show()\"><mdb-icon fas icon=\"recycle\" size=\"1x\" class=\"green-text pr-1\" aria-hidden=\"true\"></mdb-icon></a><span class=\"pr-1\">&nbsp;</span>\n\t  \t  \t<a *ngIf=\"buckets[b].events.LambdaConfigs?.length || buckets[b].events.TopicConfigs?.length || buckets[b].events.QueueConfigs?.length\" mdbTooltip=\"Remove Bucket Events\" placement=\"top\" (click)=\"removeBucketNotificationPrepare(buckets[b].name); removeNotificationApproveModal.show()\"><mdb-icon fas icon=\"bell-slash\" size=\"1x\" class=\"red-text pr-1\" aria-hidden=\"true\"></mdb-icon></a>\n\t  \t  </td>\n\t    </tr>\n\t  </tbody>\n      <tfoot class=\"grey lighten-5 w-100\">\n        <tr>\n          <td colspan=\"100%\">\n            <mdb-table-pagination [tableEl]=\"tableBuckets\" [searchDataSource]=\"buckets\"></mdb-table-pagination>\n          </td>\n        </tr>\n      </tfoot>\n\t</table>\n</div>\n<br/>\n<br/>\n\n<!-- lifecycyle modal -->\n\n<div mdbModal #lifecycyleModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"lifecycyleModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Bucket Lifecycyle</h4>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 col-12 mx-auto\">\n                  <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"downloadLifecycleAvailable == 1\" >\n                    <mdb-icon fas icon=\"info-circle\" class=\"mr-1\"></mdb-icon>This bucket already have a lifecycyle policy, you can dowload it by clicking on \"dowload icon\" >\n                    <a mdbTooltip=\"Download Lifecycle\" placement=\"top\" [href]=\"downloadJsonHref\" download=\"{{lifecycleBucketName}}-lifecycle.xml\"><mdb-icon fas icon=\"download\" size=\"1x\" class=\"green-text pr-1\" aria-hidden=\"true\"></mdb-icon></a>\n                    <br/>\n                    Or override it by upload a new lifecycle policy.\n                  </div>\n                  <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"downloadLifecycleAvailable == 0\" >\n                    <mdb-icon fas icon=\"info-circle\" class=\"mr-1\"></mdb-icon>Lifecycle policy is structrured xml file. You can use examples from Minio\n                    <a href=\"https://docs.min.io/docs/java-client-api-reference.html#setBucketLifeCycle\" target=\"_blank\">documentation</a>. Or use an AWS S3 documentation\n                    <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\" target=\"_blank\">Object Lifecycle Management</a>\n                  </div>\n                  <div class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"custom-file\">\n\t\t\t\t\t\t\t\t\t\t  <input type=\"file\" accept=\".lifecycle,.xml\" class=\"custom-file-input\" (change)=\"fileChanged($event)\" #uploadLifecycleFile name=\"uploadLifecycleFile\">\n\t\t\t\t\t\t\t\t\t\t  <label class=\"custom-file-label\" for=\"customFileLang\">{{uploadLifecycleFileName == \"\" ? \"Choose .lifecycle or .xml file\" : uploadLifecycleFileName}}</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn gradient=\"peach\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect (click)=\"uploadLifecycle();lifecycyleModal.hide()\">Upload</button>\n            </div>\n        </div>\n    </div >\n</div >\n\n<!-- delete approve modal -->\n\n<div mdbModal #deleteApproveModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteApproveModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Remove Bucket</h4>\n            </div>\n            <div class=\"modal-body\">\n                Are you shure? <br/> After you click on <strong>\"Delete\"</strong> button bucket <strong>{{bucketToDelete}}</strong> will be removed.\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn color=\"success\" class=\"waves-light\" aria-label=\"Close\" (click)=\"deleteApproveModal.hide()\" mdbWavesEffect>Cancel</button>\n                <button type=\"button\" mdbBtn color=\"danger\" class=\"relative waves-light\" mdbWavesEffect (click)=\"deleteBucket(); deleteApproveModal.hide()\">Delete</button>\n            </div>\n        </div>\n    </div >\n</div >\n\n<!-- remove notify approve modal -->\n\n<div mdbModal #removeNotificationApproveModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"removeNotificationApproveModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Remove Bucket Notifications</h4>\n            </div>\n            <div class=\"modal-body\">\n                Are you shure? <br/> After you click on <strong>\"remove\"</strong> button bucket <strong>{{bucketToDelete}}</strong> notifications will be removed.\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn color=\"success\" class=\"waves-light\" aria-label=\"Close\" (click)=\"removeNotificationApproveModal.hide()\" mdbWavesEffect>Cancel</button>\n                <button type=\"button\" mdbBtn color=\"danger\" class=\"relative waves-light\" mdbWavesEffect (click)=\"removeBucketEvents(); removeNotificationApproveModal.hide()\">Remove</button>\n            </div>\n        </div>\n    </div >\n</div >\n\n\n<!-- create modal -->\n\n<div mdbModal #addBucketModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"addBucketModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Create Bucket</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"d-flex justify-content-around mb-3 text-center\">\n        \t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Bucket Name\" [(ngModel)]=\"newBucketName\" name=\"newBucketName\"  aria-label=\"bucketName\" aria-describedby=\"basic-addon1\" autofocus>\n        \t\t\t\t</div>\n                <div class=\"alert alert-info\" role=\"alert\">\n                  <mdb-icon fas icon=\"info-circle\" class=\"mr-1\"></mdb-icon>  You can pass multiple names with \",\" delimiter\n                </div>\n                <div class=\"mb-3\" *ngIf=\"serviceInfo?.sqsARN\">\n                  <div class=\"separator\">Events section</div>\n                  <select class=\"browser-default custom-select\" [(ngModel)]=\"newBucketEventARN\" title=\"Enable notifications\">\n                    <option value=\"\" disabled selected>Select sqsARN</option>\n                    <option [value]=\"eventARN\" *ngFor=\"let eventARN of serviceInfo?.sqsARN\">{{eventARN}}</option>\n                  </select><br/><br/>\n                  <div id=\"eventTypeSelector\" class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n  \t\t\t\t\t\t\t\t\t<angular2-multiselect [data]=\"dropdownEventTypesList\" [(ngModel)]=\"selectedEventTypes\"\n  \t\t\t\t\t\t\t\t    [settings]=\"dropdownEventTypesSettings\"\n  \t\t\t\t\t\t\t\t    (onSelect)=\"onEventTypesItemSelect($event)\"\n  \t\t\t\t\t\t\t\t    (onDeSelect)=\"onEventTypesItemDeSelect($event)\"\n  \t\t\t\t\t\t\t\t    (onSelectAll)=\"onEventTypesSelectAll($event)\"\n  \t\t\t\t\t\t\t\t    (onDeSelectAll)=\"onEventTypesDeSelectAll($event)\"></angular2-multiselect>\n  \t\t\t\t\t\t\t\t</div>\n                  <div class=\"d-flex justify-content-around mb-3 text-center\">\n          \t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Filter Prefix\" [(ngModel)]=\"newBucketEventFilterPrefix\" name=\"newBucketEventFilterPrefix\"  aria-label=\"bucketName\" aria-describedby=\"basic-addon1\">\n          \t\t\t\t</div>\n                  <div class=\"d-flex justify-content-around mb-3 text-center\">\n          \t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Filter Suffix\" [(ngModel)]=\"newBucketEventFilterSuffix\" name=\"newBucketEventFilterSuffix\"  aria-label=\"bucketName\" aria-describedby=\"basic-addon1\">\n          \t\t\t\t</div>\n                  <br/>\n                </div>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn gradient=\"peach\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect (click)=\"createBucket(); addBucketModal.hide()\">Create</button>\n            </div>\n        </div>\n    </div >\n</div >\n\n<!-- edit modal -->\n\n<div mdbModal #editBucketModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"editBucketModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Update Bucket</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"d-flex justify-content-around mb-3 text-center\">\n        \t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Bucket Name\" [(ngModel)]=\"editBucketName\" name=\"editBucketName\"  aria-label=\"bucketName\" aria-describedby=\"basic-addon1\" disabled>\n        \t\t\t\t</div>\n                <div class=\"mb-3\" *ngIf=\"serviceInfo?.sqsARN\">\n                  <div class=\"separator\">Events section</div>\n                  <select class=\"browser-default custom-select\" [(ngModel)]=\"updateBucketEventARN\" title=\"Enable notifications\">\n                    <option value=\"\" disabled selected>Select sqsARN</option>\n                    <option [value]=\"eventARN\" *ngFor=\"let eventARN of serviceInfo?.sqsARN\">{{eventARN}}</option>\n                  </select><br/><br/>\n                  <div id=\"eventTypeSelector\" class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n  \t\t\t\t\t\t\t\t\t<angular2-multiselect [data]=\"dropdownEventTypesList\" [(ngModel)]=\"selectedEventTypes\"\n  \t\t\t\t\t\t\t\t    [settings]=\"dropdownEventTypesSettings\"\n  \t\t\t\t\t\t\t\t    (onSelect)=\"onEventTypesItemSelect($event)\"\n  \t\t\t\t\t\t\t\t    (onDeSelect)=\"onEventTypesItemDeSelect($event)\"\n  \t\t\t\t\t\t\t\t    (onSelectAll)=\"onEventTypesSelectAll($event)\"\n  \t\t\t\t\t\t\t\t    (onDeSelectAll)=\"onEventTypesDeSelectAll($event)\"></angular2-multiselect>\n  \t\t\t\t\t\t\t\t</div>\n                  <div class=\"d-flex justify-content-around mb-3 text-center\">\n          \t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Filter Prefix\" [(ngModel)]=\"updateBucketEventFilterPrefix\" name=\"updateBucketEventFilterPrefix\"  aria-label=\"bucketName\" aria-describedby=\"basic-addon1\">\n          \t\t\t\t</div>\n                  <div class=\"d-flex justify-content-around mb-3 text-center\">\n          \t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Filter Suffix\" [(ngModel)]=\"updateBucketEventFilterSuffix\" name=\"updateBucketEventFilterSuffix\"  aria-label=\"bucketName\" aria-describedby=\"basic-addon1\">\n          \t\t\t\t</div>\n                  <br/>\n                </div>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn gradient=\"peach\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect (click)=\"updateBucket(); editBucketModal.hide(); resetUpdateForm();\">Update</button>\n            </div>\n        </div>\n    </div >\n</div >\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupsGroupsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"padding-top: 30px;\">\n    <div class=\"row\">\n        <div class=\"col-9 col-md-9\">\n            <h1>Groups</h1>\n        </div>\n        <div class=\"col-md-3 col-3 align-right\">\n            <button type=\"button\" mdbBtn gradient=\"aqua\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect rounded=\"true\" data-toggle=\"modal\" data-target=\"#addGroup\" mdbWavesEffect (click)=\"isEditMode(false);resetForm();addGroupModal.show()\"><mdb-icon fas icon=\"plus\" class=\"mr-1\"></mdb-icon>Add group</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12 col-12 mx-auto\">\n          <div class=\"md-form\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" id=\"search\" mdbInput>\n            <label for=\"search\">Search</label>\n          </div>\n        </div>\n    </div>\n\t<table mdbTable calss=\"table\" #tableGroups=\"mdbTable\" >\n\t  <thead class=\"thead-light\">\n\t    <tr>\n\t      <th>Name</th>\n\t      <th>Policy</th>\n\t      <th>Status</th>\n\t      <th>Members</th>\n\t      <th>Options</th>\n\t    </tr>\n\t  </thead>\n\t  <tbody *ngIf=\"groups\">\n\t    <tr mdbTableCol *ngFor=\"let g of objectKeys(groups); let i = index\">\n\t      <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"><strong>{{groups[i].name}}</strong></td>\n\t      <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"><a *ngIf=\"groups[i].policy\" (click)=\"rawPrepare(groups[i].policy); rawViewModal.show()\"  mdbTooltip=\"View Raw JSON\" placement=\"top\">{{groups[i].policy}}</a></td>\n\t      <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{groups[i].status}}</td>\n\t      <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">{{commaToBr(groups[i].members)}}</td>\n\t  \t  <td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t  \t  \t<a mdbTooltip=\"Edit Group\" placement=\"top\" (click)=\"resetForm();getGroupDescription(groups[i].name);addGroupModal.show()\"><mdb-icon fas icon=\"pencil-alt\" size=\"1x\" class=\"red-text pr-1\" aria-hidden=\"true\"></mdb-icon></a>\n\t  \t  </td>\n\t    </tr>\n\t  </tbody>\n      <tfoot class=\"grey lighten-5 w-100\">\n        <tr>\n          <td colspan=\"5\">\n            <mdb-table-pagination [tableEl]=\"tableGroups\" [searchDataSource]=\"groups\"></mdb-table-pagination>\n          </td>\n        </tr>\n      </tfoot>\n\t</table>\n</div>\n<br/>\n<br/>\n\n<!-- create modal -->\n\n<div mdbModal #addGroupModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"addGroupModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{modalCreateEditTitle}}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Group Name\" [(ngModel)]=\"newGroupName\" name=\"newGroupName\"  aria-label=\"groupName\" aria-describedby=\"basic-addon1\" autofocus>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t<angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\"\n\t\t\t\t    [settings]=\"dropdownSettings\"\n\t\t\t\t    (onSelect)=\"onItemSelect($event)\"\n\t\t\t\t    (onDeSelect)=\"OnItemDeSelect($event)\"\n\t\t\t\t    (onSelectAll)=\"onSelectAll($event)\"\n\t\t\t\t    (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"md-form mb-4\">\n\t\t\t\t  <select class=\"browser-default custom-select\" [(ngModel)]=\"newGroupPolicy\" title=\"select policy\">\n\t\t\t\t\t\t<option value=\"\" disabled selected>Select policy</option>\n\t\t\t\t\t\t<option [value]=\"policy\" *ngFor=\"let policy of policies\">{{policy}}</option>\n\t\t\t\t  </select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"md-form mb-4\">\n\t\t\t\t  <select class=\"browser-default custom-select\" [(ngModel)]=\"newGroupStatus\" title=\"select status\">\n\t\t\t\t\t\t<option value=\"\" disabled selected>Select status</option>\n\t\t\t\t\t\t<option [value]=\"updateStatusVal\" *ngFor=\"let updateStatusVal of updateStatusValues\">{{updateStatusVal}}</option>\n\t\t\t\t  </select>\n\t\t\t\t</div>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn gradient=\"peach\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect (click)=\"createGroup(); addGroupModal.hide()\">{{modalCreateEditButtonText}}</button>\n            </div>\n        </div>\n    </div >\n</div >\n\n<div mdbModal #rawViewModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"rawViewModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"rawViewModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Raw Policy</h4>\n            </div>\n            <div class=\"modal-body\">\n            \t<ngx-json-viewer [json]=\"rawView\"></ngx-json-viewer>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"rawViewModal.hide()\" mdbWavesEffect>Close</button>\n            </div>\n        </div>\n    </div >\n</div >\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"progress-loader\" [hidden]=\"!loading\">\n\t<div class=\"loverlay\">\n\t    <br />\n\t</div>\n\n\t<div class=\"lpopup\">\n\t\t<div class=\"spinner-grow text-dark\" role=\"status\">\n\t\t  <span class=\"sr-only\">Loading...</span>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/policies/policies.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/policies/policies.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPoliciesPoliciesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"padding-top: 30px;\">\n\t<div class=\"row\">\n\t\t<div class=\"col-6 col-md-6\">\n\t\t    <h1>Policies</h1>\n\t\t</div>\n\t\t<div class=\"col-md-6 col-6 align-right\">\n\t\t\t<div class=\"btn-group\" role=\"group\">\n\t\t\t\t<button type=\"button\" mdbBtn  gradient=\"purple\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect rounded=\"true\" data-toggle=\"modal\" data-target=\"#uploadPolicy\" (click)=\"this.resetUploadForm(); uploadModal.show()\" mdbWavesEffect>\n\t\t\t\t\t<mdb-icon fas icon=\"upload\" class=\"mr-1\"></mdb-icon>Upload policy\n\t\t\t\t</button>\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t<button type=\"button\" mdbBtn  gradient=\"aqua\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect rounded=\"true\" data-toggle=\"modal\" data-target=\"#addPolicy\" (click)=\"isEditMode(false); resetPloicyForm(true); prepareNewPolicyRaw(); addPolicyModal.show()\" mdbWavesEffect>\n\t\t\t\t\t<mdb-icon fas icon=\"plus\" class=\"mr-1\"></mdb-icon>Build policy\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 col-12 mx-auto\">\n\t\t\t<div class=\"md-form\">\n\t\t\t  <!-- <input type=\"text\" class=\"form-control\" id=\"search\" mdbInput> -->\n\t\t\t  <input type=\"text\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchItems()\" class=\"form-control\" id=\"search\" mdbInput>\n\t\t\t  <label for=\"search\">Search</label>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<table mdbTable calss=\"table\"  #tablePolicies=\"mdbTable\" >\n\t\t<thead class=\"thead-light\">\n\t\t\t<tr>\n\t\t\t  <th>Name</th>\n\t\t\t  <th>Action</th>\n\t\t\t  <th>Principal</th>\n\t\t\t  <th>Effect</th>\n\t\t\t  <th>Resource</th>\n\t\t\t  <th>Conditions</th>\n\t\t\t  <th>Options</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody *ngIf=\"(policies | json) != ({} | json)\">\n\t\t\t<tr mdbTableCol *ngFor=\"let pol of objectKeys(policies); let i = index\">\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"><strong>{{objectKeys(policies[pol])}}</strong></td>\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t\t\t\t\t<ul class=\"type-none\" >\n\t\t\t\t\t\t<li class=\"type-none\" *ngFor=\"let st of objectValues(policies[pol])[0].Statement\">\n\t\t\t\t\t\t\t\t<ul  class=\"type-none\">\n\t\t\t\t\t\t\t\t\t<li  class=\"type-none\" *ngFor=\"let action of st.Action\">{{action}}</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</td>\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t\t\t\t\t<div *ngIf=\"policies[pol].Statement?.Principal\">\n\t\t\t\t\t\t{{policies[pol].Statement.Principal}}\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t\t\t\t\t<ul class=\"type-none\" >\n\t\t\t\t\t\t<li class=\"type-none\" *ngFor=\"let st of objectValues(policies[pol])[0].Statement\">{{st.Effect}}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</td>\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t\t\t\t\t<ul class=\"type-none\" >\n\t\t\t\t\t\t<li class=\"type-none\" *ngFor=\"let st of objectValues(policies[pol])[0].Statement\">\n\t\t\t\t\t\t\t<ul class=\"type-none\">\n\t\t\t\t\t\t\t\t<li class=\"type-none\" *ngFor=\"let resource of st.Resource\">{{resource}}</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</td>\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t\t\t\t\t<ul class=\"type-none\" >\n\t\t\t\t\t\t<li class=\"type-none\" *ngFor=\"let st of objectValues(policies[pol])[0].Statement\">\n\t\t\t\t\t\t\t<ul class=\"type-none\" *ngIf=\"st?.Condition\">\n\t\t\t\t\t\t\t\t<li class=\"type-none\" *ngFor=\"let condition of objectKeys(st.Condition)\">\n\t\t\t\t\t\t\t\t\t\t{{condition}}\n\t\t\t\t\t\t\t\t\t<ul >\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let con of objectKeys(st.Condition[condition])\">{{con}}\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let conKeyVal of st.Condition[condition][con]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{conKeyVal}}\n\t\t\t\t\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</td>\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t\t\t\t\t<a (click)=\"rawPrepare(objectValues(policies[pol])[0]); rawViewModal.show()\"  mdbTooltip=\"View Raw JSON\" placement=\"top\"><mdb-icon fas icon=\"eye\"  size=\"1x\" class=\"green-text pr-1\" aria-hidden=\"true\"></mdb-icon></a><span class=\"pr-1\">&nbsp;</span>\n\t\t\t\t\t<a mdbTooltip=\"Remove Policy\" placement=\"top\" (click)=\"deletePolicyPrepare(objectKeys(policies[pol])); deleteApproveModal.show()\"><mdb-icon fas icon=\"trash-alt\" size=\"1x\" class=\"red-text pr-1\" aria-hidden=\"true\"></mdb-icon></a><span class=\"pr-1\">&nbsp;</span>\n\t\t  \t\t<a mdbTooltip=\"Edit or Copy Policy\" placement=\"top\" class=\"action-link\" (click)=\"isEditMode(true);updatePolicyPrepare(objectKeys(policies[pol]));addPolicyModal.show()\"><mdb-icon fas icon=\"pencil-alt\" size=\"1x\" class=\"green-text pr-1\" aria-hidden=\"true\"></mdb-icon></a><span class=\"pr-1\">&nbsp;</span>\n\t\t\t\t\t<a mdbTooltip=\"Download Policy\" placement=\"top\" [href]=\"downloadJsonHref\" download=\"{{objectKeys(policies[pol])}}.json\" (click)=\"downloadPolicy(objectValues(policies[pol])[0])\"><mdb-icon fas icon=\"download\" size=\"1x\" class=\"green-text pr-1\" aria-hidden=\"true\"></mdb-icon></a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot class=\"grey lighten-5 w-100\">\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"7\">\n\t\t\t\t  <mdb-table-pagination [tableEl]=\"tablePolicies\" [searchDataSource]=\"policies\"></mdb-table-pagination>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</div>\n<br/>\n<br/>\n\n<!-- delete approve modal -->\n\n<div mdbModal #deleteApproveModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteApproveModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Remove Policy</h4>\n            </div>\n            <div class=\"modal-body\">\n                Are you shure? <br/> After you click on <strong>\"Delete\"</strong> button policy <strong>{{policyToDelete}}</strong> will be removed.\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn color=\"success\" class=\"waves-light\" aria-label=\"Close\" (click)=\"deleteApproveModal.hide()\" mdbWavesEffect>Cancel</button>\n                <button type=\"button\" mdbBtn color=\"danger\" class=\"relative waves-light\" mdbWavesEffect (click)=\"deletePolicy(); deleteApproveModal.hide()\">Delete</button>\n            </div>\n        </div>\n    </div >\n</div >\n\n<!-- Upload -->\n\n<div mdbModal #uploadModal=\"mdbModal\" class=\"modal fade right overflow-auto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"uploadModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"uploadModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Upload Policy</h4>\n            </div>\n            <div class=\"modal-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 ml-auto\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Policy Name\" [(ngModel)]=\"uploadPolicyName\" name=\"uploadPolicyName\"  aria-label=\"policyName\" aria-describedby=\"basic-addon1\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"custom-file\">\n\t\t\t\t\t\t\t\t\t\t  <input type=\"file\" accept=\".policy,.json\" class=\"custom-file-input\" (change)=\"fileChanged($event)\" #uploadPolicyFile name=\"uploadPolicyFile\">\n\t\t\t\t\t\t\t\t\t\t  <label class=\"custom-file-label\" for=\"customFileLang\">{{uploadPolicyFileName == \"\" ? \"Choose .policy or .json file\" : uploadPolicyFileName}}</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"uploadModal.hide()\" mdbWavesEffect>Cancel</button>\n\t\t           \t<button type=\"button\" mdbBtn gradient=\"peach\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect (click)=\"uploadPolicy();uploadModal.hide()\">Upload</button>\n            </div>\n        </div>\n    </div >\n</div >\n\n<!-- Raw view Modal -->\n\n<div mdbModal #rawViewModal=\"mdbModal\" class=\"modal fade right overflow-auto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"rawViewModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"rawViewModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Raw Policy</h4>\n            </div>\n            <div class=\"modal-body\">\n            \t<ngx-json-viewer [json]=\"rawView\"></ngx-json-viewer>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"rawViewModal.hide()\" mdbWavesEffect>Close</button>\n            </div>\n        </div>\n    </div >\n</div >\n\n<!-- Policy build up Modal-->\n\n<div mdbModal #addPolicyModal=\"mdbModal\" class=\"modal fade right overflow-auto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addPolicyModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"addPolicyModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{modalCreateEditTitle}}</h4>\n            </div>\n            <div class=\"modal-body\">\n            \t<!-- <form class=\"text-center\" name=\"newPolicy\"  > -->\n            \t\t<div class=\"row\">\n\t\t\t\t\t    <div class=\"col-md-2 ml-auto\">&nbsp;</div>\n\t\t\t\t\t    <div class=\"col-md-8 ml-auto\">\n\n\t\t\t\t    \t<div class=\"alert alert-info\" role=\"alert\" *ngIf=\"modalEditMode\">\n                <mdb-icon fas icon=\"info-circle\" class=\"mr-1\"></mdb-icon>  In Edit mode you can make a copy of policy - Just rename it!\n              </div>\n\n\n\t\t\t\t\t    <div class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Policy Name\" [(ngModel)]=\"newPolicy.name\" name=\"newPolicyName\"  aria-label=\"policyName\" aria-describedby=\"basic-addon1\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"d-flex justify-content-around p-1 text-center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<!-- Allow -->\n\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" checked class=\"custom-control-input\" id=\"statementAllow\"  value=\"Allow\" [(ngModel)]=\"newPolicy.effect\"  name=\"policyStatementEffect\" mdbInput>\n\t\t\t\t\t\t\t\t\t  <label class=\"custom-control-label\" for=\"statementAllow\">Allow</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<!-- Deny -->\n\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\n\t\t\t\t\t\t\t\t\t  <input type=\"radio\" class=\"custom-control-input\" id=\"statementDeny\" value=\"Deny\" [(ngModel)]=\"newPolicy.effect\" name=\"policyStatementEffect\"  mdbInput>\n\t\t\t\t\t\t\t\t\t  <label class=\"custom-control-label\" for=\"statementDeny\">Deny</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t\t\t\t<angular2-multiselect [data]=\"dropdownActionList\" [(ngModel)]=\"selectedActions\"\n\t\t\t\t\t\t\t    [settings]=\"dropdownActionSettings\"\n\t\t\t\t\t\t\t    (onSelect)=\"onActionItemSelect($event)\"\n\t\t\t\t\t\t\t    (onDeSelect)=\"onActionItemDeSelect($event)\"\n\t\t\t\t\t\t\t    (onSelectAll)=\"onActionSelectAll($event)\"\n\t\t\t\t\t\t\t    (onDeSelectAll)=\"onActionDeSelectAll($event)\"></angular2-multiselect>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t  <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t    <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Principal</span>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" aria-label=\"Principal\" [(ngModel)]=\"newStatement.Principal\" name=\"newPrincipal\" aria-describedby=\"inputGroup-sizing-default\">\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"separator\">Buckets section</div>\n\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-around p-1 mb-1 text-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t\t  <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t\t\t    <span class=\"input-group-text\" id=\"s3-prefix\">arn:aws:s3:::</span>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" placeholder=\"<bucket_name>/<key_name>\" [(ngModel)]=\"newPolicy.bucket\" aria-label=\"Recipient's username\"\n\t\t\t\t\t\t\t\t\t    aria-describedby=\"s3-prefix\">\n\t\t\t\t\t\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t    <button mdbBtn gradient=\"blue\" rounded=\"true\"  outline=\"true\" size=\"md\" class=\"m-0 px-3 py-2\" type=\"button\" id=\"s3-prefix\"\n\t\t\t\t\t\t\t\t\t      mdbWavesEffect (click)=\"addBucketStatement()\">Add bucket</button>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"bucketStatements\">\n\t\t\t\t\t\t\t\t\t<table  mdbTable mdbTableScroll scrollY=\"true\" maxHeight=\"300\"  class=\"table\"  small=\"true\">\n\t\t\t\t\t\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t\t\t\t\t\t<th>Bucket</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Options</th>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let bst of newStatement.Resource; let i = index\" [attr.data-index]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{bst}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><a title=\"Remove bucket statement\" (click)=\"removeBucketStatement(i)\"><mdb-icon fas icon=\"times-circle\"  size=\"1x\" class=\"green-text pr-3\" aria-hidden=\"true\"></mdb-icon></a></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t<div class=\"separator\">Conditions section</div>\n\t\t\t\t\t\t\t\t<div id=\"conditionStatements\" class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t\t\t\t\t<angular2-multiselect [data]=\"dropdownConditionList\" [(ngModel)]=\"selectedCondition\"\n\t\t\t\t\t\t\t\t    [settings]=\"dropdownConditionSettings\"\n\t\t\t\t\t\t\t\t    (onSelect)=\"onConditionItemSelect($event)\"\n\t\t\t\t\t\t\t\t    (onDeSelect)=\"onConditionItemDeSelect($event)\"\n\t\t\t\t\t\t\t\t    (onSelectAll)=\"onConditionSelectAll($event)\"\n\t\t\t\t\t\t\t\t    (onDeSelectAll)=\"onConditionDeSelectAll($event)\"></angular2-multiselect>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"conditionKeyStatements\" class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t\t\t\t\t<angular2-multiselect [data]=\"dropdownConditionKeyList\" [(ngModel)]=\"selectedConditionKey\"\n\t\t\t\t\t\t\t\t    [settings]=\"dropdownConditionKeySettings\"\n\t\t\t\t\t\t\t\t    (onSelect)=\"onConditionKeyItemSelect($event)\"\n\t\t\t\t\t\t\t\t    (onDeSelect)=\"onConditionItemDeSelect($event)\"\n\t\t\t\t\t\t\t\t    (onSelectAll)=\"onConditionKeySelectAll($event)\"\n\t\t\t\t\t\t\t\t    (onDeSelectAll)=\"onConditionKeyDeSelectAll($event)\"></angular2-multiselect>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" placeholder=\"Condition Value\" aria-label=\"Condition Value\" [(ngModel)]=\"newConditionValue\" name=\"newConditionValue\"\n\t\t\t\t\t\t\t\t\t    aria-describedby=\"button-addCondition\">\n\t\t\t\t\t\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t    <button mdbBtn gradient=\"blue\" outline=\"true\" size=\"md\" class=\"m-0 px-3 py-2 relative waves-light\" type=\"button\" id=\"button-addCondition\"  (click)=\"addCondition()\"\n\t\t\t\t\t\t\t\t\t\t\t mdbWavesEffect >Add Condition</button>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"conditionStatementsList\">\n\t\t\t\t\t\t\t\t\t<table  mdbTable mdbTableScroll scrollY=\"true\" maxHeight=\"300\"  class=\"table\"  small=\"true\">\n\t\t\t\t\t\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t\t\t\t\t\t<th>Condition and options</th>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody *ngIf=\"newStatement?.Condition\">\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let condition of objectKeys(newStatement.Condition)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{condition}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let con of objectKeys(newStatement.Condition[condition])\">{{con}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let conKeyVal of newStatement.Condition[condition][con]; let i = index;\" [attr.data-index]=\"i\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{conKeyVal}}&nbsp;&nbsp;<a title=\"Remove condition\" (click)=\"removeCondition(i,con,condition)\"><mdb-icon fas icon=\"times-circle\"  size=\"1x\" class=\"green-text pr-3\" aria-hidden=\"true\"></mdb-icon></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2 ml-auto\">&nbsp;</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"d-flex justify-content-around p-1 mb-3 text-center\">\n\t\t\t\t\t\t<button type=\"button\" mdbBtn gradient=\"purple\" rounded=\"true\" class=\"relative waves-light btn btn-sm\" mdbWavesEffect (click)=\"addStatement()\"><mdb-icon fas icon=\"plus\" class=\"mr-1\"></mdb-icon>Add statement</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"statements\">\n\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t<table  mdbTable mdbTableScroll scrollY=\"true\" maxHeight=\"300\"  class=\"table\"  small=\"true\">\n\t\t\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t\t\t<th>Effect</th>\n\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t<th>Resource</th>\n\t\t\t\t\t\t\t\t<th>Conditions</th>\n\t\t\t\t\t\t\t\t<th>Options</th>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let st of newPolicyRaw.Statement; let i = index\" [attr.data-index]=\"i\">\n\t\t\t\t\t\t\t\t\t<td>{{st.Effect}}</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<ul  class=\"type-none\">\n\t\t\t\t\t\t\t\t\t\t\t<li  class=\"type-none\" *ngFor=\"let action of st.Action\">{{action}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<ul  class=\"type-none\">\n\t\t\t\t\t\t\t\t\t\t\t<li  class=\"type-none\" *ngFor=\"let resource of st.Resource\">{{resource}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"type-none\" *ngIf=\"st?.Condition\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"type-none\" *ngFor=\"let condition of objectKeys(st.Condition)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{condition}}\n\t\t\t\t\t\t\t\t\t\t\t\t<ul >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let con of objectKeys(st.Condition[condition])\">{{con}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let conKeyVal of st.Condition[condition][con]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{conKeyVal}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<a title=\"Remove statement\" (click)=\"removeStatement(i)\"><mdb-icon fas icon=\"times-circle\"  size=\"1x\" class=\"green-text pr-1\" aria-hidden=\"true\"></mdb-icon></a>\n\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t<a title=\"Edit statement\" (click)=\"editStatement(i)\"><mdb-icon fas icon=\"pencil-alt\"  size=\"1x\" class=\"green-text pr-1\" aria-hidden=\"true\"></mdb-icon></a>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\n                <!-- </form> -->\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn gradient=\"peach\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect (click)=\"createPolicy();addPolicyModal.hide()\">{{modalCreateEditButtonText}}</button>\n            </div>\n        </div>\n    </div >\n</div >\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/server/server.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/server/server.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppServerServerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"padding-top: 30px;\" *ngFor=\"let server of serviceInfo?.servers\">\n\t<h1>Server statistics {{server.endpoint}} </h1>\n\t<div class=\"mb-4\">\n\t\t<a (click)=\"rawPrepare(serviceInfo); rawViewModal.show()\"  mdbTooltip=\"View Raw JSON\" placement=\"top\" style=\"text-decoration: underline;\"><mdb-icon fas icon=\"eye\"  size=\"1x\" class=\"green-text pr-1\" aria-hidden=\"true\"></mdb-icon>View Raw JSON</a><span class=\"pr-3\">&nbsp;</span><br/>\n\t\t<strong>minio version:</strong> {{server.version}} <br/>\n\t\t<strong>uptime:</strong> {{math.round(server.uptime/60)}} min. <br/>\n\t\t<strong>network:</strong> {{server.network[server.endpoint]}}\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h3>Storage</h3>\n\t\t\t<div class=\"container\" style=\"padding-top: 10px;\" *ngFor=\"let disk of server.disks\">\n\t\t\t\t<table mdbTable bordered=\"true\" small=\"true\" class=\"table\">\n\t\t\t\t  <thead class=\"thead-light\">\n\t\t\t\t    <tr>\n\t\t\t\t      <th>Total</th>\n\t\t\t\t      <th>Used</th>\n\t\t\t\t      <th>State</th>\n\t\t\t\t      <th>Path</th>\n\t\t\t\t    </tr>\n\t\t\t\t  </thead>\n\t\t\t\t  <tbody *ngIf=\"disk\">\n\t\t\t\t    <tr mdbTableCol>\n\t\t\t\t      <td>{{math.round((disk.totalspace/1024/1024/1024)*100)/100}} Gb</td>\n\t\t\t\t      <td>{{math.round((disk.usedspace/1024/1024/1024)*100)/100}} Gb</td>\n\t\t\t\t      <td>{{disk.state}}</td>\n\t\t\t\t      <td>{{disk.path}}</td>\n\t\t\t\t    </tr>\n\t\t\t\t  </tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<br/>\n\t<br/>\n\t<div class=\"row\" *ngIf=\"diskUsageInfo?.lastUpdate\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h3>Disk usage info</h3>\n\t\t\t<div class=\"container\" style=\"padding-top: 10px;\">\n\t\t\t\t<p>Last update: {{diskUsageInfo?.lastUpdate.split('T').join(' ').split('.')[0]}}</p>\n\t\t\t\t<table  mdbTable bordered=\"true\" small=\"true\" class=\"table\">\n\t\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Objects count</th>\n\t\t\t\t\t\t\t<th>Objects total size</th>\n\t\t\t\t\t\t\t<th>Buckets count</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody *ngIf=\"diskUsageInfo\">\n\t\t\t\t\t\t<tr mdbTableCol>\n\t\t\t\t\t\t\t<td>{{diskUsageInfo.objectsCount}}</td>\n\t\t\t\t\t\t\t<td>{{math.round((diskUsageInfo.objectsTotalSize/1024/1024/1024)*100)/100}} Gb</td>\n\t\t\t\t\t\t\t<td>{{diskUsageInfo.bucketsCount}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<br/>\n\t<br/>\n\t<div class=\"row\" *ngIf=\"diskUsageInfo?.objectsSizesHistogram && szChartDatasets[0].data.length>0\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h3>Bucket sizes chart</h3>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t&nbsp;\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-10\">\n\t\t\t\t\t<div class=\"container\" style=\"padding-top: 10px; display: block;\">\n\t\t\t\t\t\t<canvas mdbChart\n\t\t\t\t\t\t\t\t[chartType]=\"szChartType\"\n\t\t\t\t\t\t\t\t[datasets]=\"szChartDatasets\"\n\t\t\t\t\t\t\t\t[labels]=\"szChartLabels\"\n\t\t\t\t\t\t\t\t[colors]=\"szChartColors\"\n\t\t\t\t\t\t\t\t[options]=\"szChartOptions\"\n\t\t\t\t\t\t\t\t[legend]=\"true\"\n\t\t\t\t\t\t\t\t(chartHover)=\"szChartHovered($event)\"\n\t\t\t\t\t\t\t\t(chartClick)=\"szChartClicked($event)\">\n\t\t\t\t\t\t</canvas>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<br/>\n\t<br/>\n\t<div class=\"row\" *ngIf=\"diskUsageInfo?.objectsSizesHistogram && hgChartDatasets[0].data.length>0\">\n\t\t<div class=\"col-md-12\">\n\t  \t<h3>Object sizes histogram</h3>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t&nbsp;\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<div class=\"container\" style=\"padding-top: 10px; display: block;\">\n\t\t\t\t\t\t<canvas mdbChart\n\t\t\t\t\t\t\t\t[chartType]=\"hgChartType\"\n\t\t\t\t\t\t\t\t[datasets]=\"hgChartDatasets\"\n\t\t\t\t\t\t\t\t[labels]=\"hgChartLabels\"\n\t\t\t\t\t\t\t\t[colors]=\"hgChartColors\"\n\t\t\t\t\t\t\t\t[options]=\"hgChartOptions\"\n\t\t\t\t\t\t\t\t[legend]=\"false\"\n\t\t\t\t\t\t\t\t(chartHover)=\"hgChartHovered($event)\"\n\t\t\t\t\t\t\t\t(chartClick)=\"hgChartClicked($event)\">\n\t\t\t\t\t\t</canvas>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<br/>\n<br/>\n\n<!-- Raw view Modal -->\n\n<div mdbModal #rawViewModal=\"mdbModal\" class=\"modal fade right overflow-auto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"rawViewModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"rawViewModal.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Raw Server Info</h4>\n            </div>\n            <div class=\"modal-body\">\n            \t<ngx-json-viewer [json]=\"rawView\"></ngx-json-viewer>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"rawViewModal.hide()\" mdbWavesEffect>Close</button>\n            </div>\n        </div>\n    </div >\n</div >\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style=\"padding-top: 30px;\">\n\t<div class=\"row\">\n\t<div class=\"col-9 col-md-9\">\n\t\t<h1>List of users</h1>\n\t</div>\n\t<div class=\"col-md-3 col-3 align-right\">\n\t\t<button type=\"button\" mdbBtn  gradient=\"aqua\" rounded=\"true\" class=\"relative waves-light\" mdbWavesEffect rounded=\"true\" data-toggle=\"modal\" data-target=\"#addUser\" (click)=\"resetForm();addUserModal.show()\" mdbWavesEffect><mdb-icon fas icon=\"plus\" class=\"mr-1\"></mdb-icon>Add user</button>\n\t</div>\n\t</div>\n\t<div class=\"row\">\n\t  <div class=\"col-md-12 col-12 mx-auto\">\n\t\t<div class=\"md-form\">\n\t\t  <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" id=\"search\" mdbInput>\n\t\t  <label for=\"search\">Search</label>\n\t\t</div>\n\t  </div>\n  </div>\n\t<table mdbTable class=\"table\"  #tableUsers=\"mdbTable\" >\n\t\t<thead class=\"thead-light\">\n\t\t\t<tr>\n\t\t\t\t<th>User name</th>\n\t\t\t\t<th>Policy</th>\n\t\t\t\t<th>Status</th>\n\t\t\t\t<th>Action</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody *ngIf=\"(users | json) != ({} | json)\">\n\t\t\t<tr mdbTableCol *ngFor=\"let key of objectKeys(users); let i = index\" [ngClass]=\"users[key][objectKeys(users[key])].status == 'disabled' ? 'table-secondary' : 'none' && !users[key][objectKeys(users[key])].policyName ? 'table-warning' : 'none' \">\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"><strong>{{objectKeys(users[key])}}</strong></td>\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\"><span *ngIf=\"objectValues(users[key])[0].policyName\">{{objectValues(users[key])[0].policyName}}</span></td>\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t\t\t\t\t<div class=\"custom-control custom-switch\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch{{objectKeys(users[key])}}\" [ngModel]=\"usersRaw[objectKeys(users[key])].status == 'enabled' ? true : null\" (click)=\"setStatusUser(objectKeys(users[key]),usersRaw[objectKeys(users[key])].status)\">\n\t\t\t\t\t  <label mdbTooltip=\"Enable or Disable User\" placement=\"top\" class=\"custom-control-label\" for=\"customSwitch{{objectKeys(users[key])}}\">&nbsp;{{objectValues(users[key])[0].status}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td *ngIf=\"i+1 >= mdbTablePagination.firstItemIndex && i < mdbTablePagination.lastItemIndex\">\n\t\t\t\t\t<a mdbTooltip=\"Remove User\" placement=\"top\" class=\"action-link\" (click)=\"deleteUserPrepare(objectKeys(users[key])); deleteApproveModal.show()\"><mdb-icon fas icon=\"trash-alt\" size=\"1x\" class=\"red-text pr-1\" aria-hidden=\"true\"></mdb-icon></a><span class=\"pr-1\">&nbsp;</span>\n\t\t  \t\t<a mdbTooltip=\"Edit User\" placement=\"top\" class=\"action-link\" (click)=\"updateUserFrom();updateUserPrepare(objectKeys(users[key])); updateApproveModal.show()\"><mdb-icon fas icon=\"pencil-alt\" size=\"1x\" class=\"red-text pr-1\" aria-hidden=\"true\"></mdb-icon></a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t<tfoot class=\"grey lighten-5 w-100\">\n\t\t<tr>\n\t\t\t<td colspan=\"4\">\n\t\t\t\t<mdb-table-pagination [tableEl]=\"tableUsers\" [searchDataSource]=\"users\"></mdb-table-pagination>\n\t\t\t</td>\n\t  </tr>\n\t</tfoot>\n\t</table>\n</div>\n<br/>\n<br/>\n<!-- delete approve modal -->\n\n<div mdbModal #deleteApproveModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteApproveModal.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">×</span>\n\t\t\t\t</button>\n\t\t\t\t<h4 class=\"modal-title w-100\" id=\"myModalLabel\">Remove User</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tAre you shure? <br/> After you click on <strong>\"Delete\"</strong> button user <strong>{{userToDelete}}</strong> will be removed.\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer justify-content-center\">\n\t\t\t\t<button type=\"button\" mdbBtn color=\"success\" class=\"waves-light\" aria-label=\"Close\" (click)=\"deleteApproveModal.hide()\" mdbWavesEffect>Cancel</button>\n\t\t\t\t<button type=\"button\" mdbBtn color=\"danger\" class=\"relative waves-light\" mdbWavesEffect (click)=\"deleteUser(); deleteApproveModal.hide()\">Delete</button>\n\t\t\t</div>\n\t\t</div>\n\t</div >\n</div >\n\n<!-- update approve modal -->\n\n<div mdbModal #updateApproveModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n   aria-hidden=\"true\" [config]='{backdrop: true, ignoreBackdropClick: true}'>\n\t<div class=\"modal-dialog\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"updateApproveModal.hide()\">\n\t\t\t\t\t<span aria-hidden=\"true\">×</span>\n\t\t\t\t</button>\n\t\t\t\t<h4 class=\"modal-title w-100\" id=\"myModalLabel\">Edit User</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"md-form mb-5\">\n\t\t\t\t\t<input type=\"text\" id=\"Update-access\" class=\"form-control\" [formControl]=\"accessKeyUpdate\"\n\t\t\t\t\t\t mdbInput mdbValidate>\n\t\t\t\t\t<label for=\"Update-access\">Access Key (View Only)</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"md-form mb-4\">\n\t\t\t\t\t<input type=\"text\" id=\"Update-secret\" class=\"form-control\" [formControl]=\"secretKeyUpdate\"\n\t\t\t\t\t\t mdbInput mdbValidate>\n\t\t\t\t\t<label for=\"Update-secret\">Secret key (leave blank if you don't want to change it)</label>\n\t\t\t\t\t<mdb-error\n\t\t\t\t\t*ngIf=\"secretKeyUpdate.invalid && (secretKeyUpdate.dirty || secretKeyUpdate.touched)\">\n\t\t\t\t\tInput invalid\n\t\t\t\t\t</mdb-error>\n\t\t\t\t\t<mdb-success\n\t\t\t\t\t*ngIf=\"secretKeyUpdate.valid && (secretKeyUpdate.dirty || secretKeyUpdate.touched)\">\n\t\t\t\t\tInput valid\n\t\t\t\t\t</mdb-success>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"md-form mb-4\">\n\t\t\t\t  <p class=\"font-small blue-text d-flex justify-content-end\">\n\t\t\t\t\t\t<a class=\"blue-text ml-1\" (click)=\"updateGenNewPassword()\">Generate new secret</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"md-form mb-4\">\n\t\t\t\t  <select class=\"browser-default custom-select\" [formControl]=\"policyUpdate\" title=\"select policy\">\n\t\t\t\t\t\t<option value=\"\" disabled selected>Select policy</option>\n\t\t\t\t\t\t<option [value]=\"policy\" *ngFor=\"let policy of policies\">{{policy}}</option>\n\t\t\t\t  </select>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"md-form mb-4\">\n\t\t\t\t  <select class=\"browser-default custom-select\" [formControl]=\"statusUpdate\" title=\"select status\">\n\t\t\t\t\t\t<option value=\"\" disabled selected>Select status</option>\n\t\t\t\t\t\t<option [value]=\"updateStatusVal\" *ngFor=\"let updateStatusVal of updateStatusValues\">{{updateStatusVal}}</option>\n\t\t\t\t  </select>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer justify-content-center\">\n\t\t\t\t<button type=\"button\" mdbBtn color=\"success\" class=\"waves-light\" aria-label=\"Close\" (click)=\"updateApproveModal.hide()\" mdbWavesEffect>Cancel</button>\n\t\t\t\t<button type=\"button\" mdbBtn color=\"danger\" class=\"relative waves-light\" mdbWavesEffect (click)=\"updateUserSave(); updateApproveModal.hide()\">Update</button>\n\t\t\t</div>\n\t\t</div>\n\t</div >\n</div >\n\n<!-- user create modal -->\n\n<div mdbModal #addUserModal=\"mdbModal\" class=\"modal fade left\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\"\n\t aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n\t<div class=\"modal-content\">\n\t  <div class=\"modal-header text-center\">\n\t\t<h4 class=\"modal-title w-100 font-weight-bold\">Create new user</h4>\n\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"addUserModal.hide()\">\n\t\t  <span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t\t</div>\n\t\t<div class=\"modal-body mx-3\">\n\t\t\t<div class=\"md-form mb-5\">\n\t\t\t  <input type=\"text\" id=\"defaultForm-access\" [formControl]=\"newUserAccess\" class=\"form-control\"\n\t\t\t\t\t mdbInput mdbValidate>\n\t\t\t  <label for=\"defaultForm-access\">Access Key</label>\n\t\t\t  <mdb-error *ngIf=\"newUserAccess.invalid && (newUserAccess.dirty || newUserAccess.touched)\">\n\t\t\t\tInput invalid\n\t\t\t  </mdb-error>\n\t\t\t  <mdb-success *ngIf=\"newUserAccess.valid && (newUserAccess.dirty || newUserAccess.touched)\">\n\t\t\t\tInput valid\n\t\t\t  </mdb-success>\n\t\t\t</div>\n\n\t\t\t<div class=\"md-form mb-4\">\n\t\t\t  <input type=\"text\" id=\"defaultForm-secret\" [formControl]=\"newUserSecret\" class=\"form-control\"\n\t\t\t\t\t mdbInput mdbValidate>\n\t\t\t  <label for=\"defaultForm-secret\">Secret Key</label>\n\t\t\t  <mdb-error *ngIf=\"newUserSecret.invalid && (newUserSecret.dirty || newUserSecret.touched)\">\n\t\t\t\tInput invalid\n\t\t\t  </mdb-error>\n\t\t\t  <mdb-success *ngIf=\"newUserSecret.valid && (newUserSecret.dirty || newUserSecret.touched)\">\n\t\t\t\tInput valid\n\t\t\t  </mdb-success>\n\t\t\t</div>\n\n\t\t\t<div class=\"md-form mb-4\">\n\t\t\t  <select class=\"browser-default custom-select\" [formControl]=\"newUserPolicy\" title=\"select policy\">\n\t\t\t\t\t<option value=\"\" disabled selected>Select policy</option>\n\t\t\t\t\t<option [value]=\"policy\" *ngFor=\"let policy of policies\">{{policy}}</option>\n\t\t\t  </select>\n\t\t\t</div>\n\n\t\t\t<div class=\"md-form mb-4\">\n\t\t\t  <p class=\"font-small blue-text d-flex justify-content-end\">\n\t\t\t\t\t<a class=\"blue-text ml-1\" (click)=\"resetForm()\">Generate new access\\secret pair</a>\n\t\t\t  </p>\n\t\t\t</div>\n\t  </div>\n\t  <div class=\"modal-footer d-flex justify-content-center\">\n\t\t<button mdbBtn gradient=\"peach\" rounded=\"true\" class=\"waves-light\" mdbWavesEffect (click)=\"createUser()\">Create</button>\n\t  </div>\n\t</div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../environments/environment */
    "./src/environments/environment.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
      }

      _createClass(ApiService, [{
        key: "validateAuthInResponse",
        value: function validateAuthInResponse(data) {
          if (data != null && typeof data.oauth != "undefined" && typeof data.auth != "undefined" && data.oauth != false && data.auth != true) {
            window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/auth/?state=' + window.location.href;
          }
        }
      }, {
        key: "serverInfo",
        value: function serverInfo() {
          return this.httpClient.get(this.baseUrl + '/api/v2/server/common-info');
        }
      }, {
        key: "diskInfo",
        value: function diskInfo() {
          return this.httpClient.get(this.baseUrl + '/api/v2/server/disk-info');
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.httpClient.get(this.baseUrl + '/api/v2/users/list');
        }
      }, {
        key: "addUser",
        value: function addUser(access, secret) {
          var form = new FormData();
          form.append('accessKey', access);
          form.append('secretKey', secret);
          return this.httpClient.post(this.baseUrl + '/api/v2/user/create', form);
        }
      }, {
        key: "addUserExtended",
        value: function addUserExtended(access, secret, policy) {
          var form = new FormData();
          form.append('accessKey', access);
          form.append('secretKey', secret);
          form.append('policyName', policy);
          return this.httpClient.post(this.baseUrl + '/api/v2/user/create-extended', form);
        }
      }, {
        key: "updateUser",
        value: function updateUser(access, secret, policy, status) {
          var form = new FormData();
          form.append('accessKey', access);
          form.append('secretKey', secret);
          form.append('policyName', policy);
          form.append('status', status);
          return this.httpClient.post(this.baseUrl + '/api/v2/user/update', form);
        }
      }, {
        key: "setStatusUser",
        value: function setStatusUser(access, status) {
          var form = new FormData();
          form.append('accessKey', access);
          form.append('status', status);
          return this.httpClient.post(this.baseUrl + '/api/v2/user/set-status', form);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(access) {
          var form = new FormData();
          form.append('accessKey', access);
          return this.httpClient.post(this.baseUrl + '/api/v2/user/delete', form);
        }
      }, {
        key: "getPolicies",
        value: function getPolicies() {
          return this.httpClient.get(this.baseUrl + '/api/v2/policies/list');
        }
      }, {
        key: "deletePolicy",
        value: function deletePolicy(policy) {
          var form = new FormData();
          form.append('policyName', policy);
          return this.httpClient.post(this.baseUrl + '/api/v2/policy/delete', form);
        }
      }, {
        key: "addPolicy",
        value: function addPolicy(policyName, policyString) {
          var form = new FormData();
          form.append('policyName', policyName);
          form.append('policyString', policyString);
          return this.httpClient.post(this.baseUrl + '/api/v2/policy/create', form);
        }
      }, {
        key: "getBuckets",
        value: function getBuckets() {
          return this.httpClient.get(this.baseUrl + '/api/v2/buckets/list');
        }
      }, {
        key: "getBucketsExtended",
        value: function getBucketsExtended() {
          return this.httpClient.get(this.baseUrl + '/api/v2/buckets/list-extended');
        }
      }, {
        key: "enableNotificationForBucket",
        value: function enableNotificationForBucket(bucket, stsARN, eventTypes, filterPrefix, filterSuffix) {
          //put,get,delete
          var form = new FormData();
          form.append('bucket', bucket);
          form.append('stsARN', stsARN);
          form.append('eventTypes', eventTypes);
          form.append('filterPrefix', filterPrefix);
          form.append('filterSuffix', filterSuffix);
          return this.httpClient.post(this.baseUrl + '/api/v2/bucket/set-events', form);
        }
      }, {
        key: "getBucketEvents",
        value: function getBucketEvents(bucket) {
          var form = new FormData();
          form.append('bucket', bucket);
          return this.httpClient.post(this.baseUrl + '/api/v2/bucket/get-events', form);
        }
      }, {
        key: "removeBucketEvents",
        value: function removeBucketEvents(bucket) {
          var form = new FormData();
          form.append('bucket', bucket);
          return this.httpClient.post(this.baseUrl + '/api/v2/bucket/remove-events', form);
        }
      }, {
        key: "deleteBucket",
        value: function deleteBucket(bucket) {
          var form = new FormData();
          form.append('bucketName', bucket);
          return this.httpClient.post(this.baseUrl + '/api/v2/bucket/delete', form);
        }
      }, {
        key: "createBucket",
        value: function createBucket(bucket) {
          var form = new FormData();
          form.append('newBucket', bucket);
          return this.httpClient.post(this.baseUrl + '/api/v2/bucket/create', form);
        }
      }, {
        key: "getGroups",
        value: function getGroups() {
          return this.httpClient.get(this.baseUrl + '/api/v2/groups/list');
        }
      }, {
        key: "updateMembersGroup",
        value: function updateMembersGroup(group, members, IsRemove) {
          var form = new FormData();
          form.append('group', group);
          form.append('members', members);
          form.append('IsRemove', IsRemove);
          return this.httpClient.post(this.baseUrl + '/api/v2/group/update-members', form);
        }
      }, {
        key: "getGroupDescription",
        value: function getGroupDescription(group) {
          var form = new FormData();
          form.append('group', group);
          return this.httpClient.post(this.baseUrl + '/api/v2/group/get-description', form);
        }
      }, {
        key: "setStatusGroup",
        value: function setStatusGroup(group, status) {
          var form = new FormData();
          form.append('group', group);
          form.append('status', status);
          return this.httpClient.post(this.baseUrl + '/api/v2/group/set-status', form);
        }
      }, {
        key: "setPolicy",
        value: function setPolicy(policyName, entityName, isGroup) {
          var form = new FormData();
          form.append('policyName', policyName);
          form.append('entityName', entityName);
          form.append('isGroup', isGroup);
          return this.httpClient.post(this.baseUrl + '/api/v2/policy/update', form);
        }
      }, {
        key: "setLifecycle",
        value: function setLifecycle(bucketName, lifecycle) {
          var form = new FormData();
          form.append('bucketName', bucketName);
          form.append('lifecycle', lifecycle);
          return this.httpClient.post(this.baseUrl + '/api/v2/bucket/set-lifecycle', form);
        }
      }, {
        key: "getLifecycle",
        value: function getLifecycle(bucketName) {
          var form = new FormData();
          form.append('bucketName', bucketName);
          return this.httpClient.post(this.baseUrl + '/api/v2/bucket/get-lifecycle', form);
        }
      }, {
        key: "checkAuthStatus",
        value: function checkAuthStatus() {
          return this.httpClient.get(this.baseUrl + '/auth/check');
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _server_server_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./server/server.component */
    "./src/app/server/server.component.ts");
    /* harmony import */


    var _policies_policies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./policies/policies.component */
    "./src/app/policies/policies.component.ts");
    /* harmony import */


    var _buckets_buckets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./buckets/buckets.component */
    "./src/app/buckets/buckets.component.ts");
    /* harmony import */


    var _groups_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./groups/groups.component */
    "./src/app/groups/groups.component.ts");

    var routes = [{
      path: 'users',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    }, {
      path: 'server',
      component: _server_server_component__WEBPACK_IMPORTED_MODULE_4__["ServerComponent"]
    }, {
      path: 'policies',
      component: _policies_policies_component__WEBPACK_IMPORTED_MODULE_5__["PoliciesComponent"]
    }, {
      path: 'groups',
      component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_7__["GroupsComponent"]
    }, {
      path: '',
      component: _buckets_buckets_component__WEBPACK_IMPORTED_MODULE_6__["BucketsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(apiService) {
        _classCallCheck(this, AppComponent);

        this.apiService = apiService;
        this.title = 'Adminio-UI';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkAuthStatus();
        }
      }, {
        key: "checkAuthStatus",
        value: function checkAuthStatus() {
          var _this = this;

          this.apiService.checkAuthStatus().subscribe(function (data) {
            console.log("DATA AUTH>>>", data);

            _this.apiService.validateAuthInResponse(data);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _server_server_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./server/server.component */
    "./src/app/server/server.component.ts");
    /* harmony import */


    var _filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./filter.pipe */
    "./src/app/filter.pipe.ts");
    /* harmony import */


    var _policies_policies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./policies/policies.component */
    "./src/app/policies/policies.component.ts");
    /* harmony import */


    var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-json-viewer */
    "./node_modules/ngx-json-viewer/__ivy_ngcc__/ngx-json-viewer.js");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/loader/loader.component.ts");
    /* harmony import */


    var _loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./loader.service */
    "./src/app/loader.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _loader_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./loader.interceptor */
    "./src/app/loader.interceptor.ts");
    /* harmony import */


    var _buckets_buckets_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./buckets/buckets.component */
    "./src/app/buckets/buckets.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _groups_groups_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./groups/groups.component */
    "./src/app/groups/groups.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], _server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"], _filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"], _policies_policies_component__WEBPACK_IMPORTED_MODULE_10__["PoliciesComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"], _buckets_buckets_component__WEBPACK_IMPORTED_MODULE_17__["BucketsComponent"], _groups_groups_component__WEBPACK_IMPORTED_MODULE_21__["GroupsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_11__["NgxJsonViewerModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["AngularMultiSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot()],
      providers: [_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
        useClass: _loader_interceptor__WEBPACK_IMPORTED_MODULE_16__["LoaderInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/buckets/buckets.component.scss":
  /*!************************************************!*\
    !*** ./src/app/buckets/buckets.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBucketsBucketsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1Y2tldHMvYnVja2V0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/buckets/buckets.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/buckets/buckets.component.ts ***!
    \**********************************************/

  /*! exports provided: BucketsComponent */

  /***/
  function srcAppBucketsBucketsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BucketsComponent", function () {
      return BucketsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var BucketsComponent = /*#__PURE__*/function () {
      function BucketsComponent(apiService, cdRef, toastr, sanitizer) {
        _classCallCheck(this, BucketsComponent);

        this.apiService = apiService;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.math = Math;
        this.objectKeys = Object.keys;
        this.isNaN = Number.isNaN;
        this.buckets = {};
        this.newBucketName = "";
        this.newBucketEventARN = "";
        this.updateBucketEventARN = "";
        this.updateBucketEventFilterPrefix = "";
        this.updateBucketEventFilterSuffix = "";
        this.dropdownEventTypesList = [];
        this.selectedEventTypes = [];
        this.dropdownEventTypesSettings = {};
        this.newBucketEventFilterPrefix = "";
        this.newBucketEventFilterSuffix = "";
        this.downloadLifecycleAvailable = 0;
        this.searchText = '';
      }

      _createClass(BucketsComponent, [{
        key: "oninput",
        value: function oninput() {
          if (event && event['target'] !== undefined && event.target["id"] !== undefined && event.target["id"] == "search") {
            this.searchItems();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBuckets();
          this.getServerInfo();
          this.getDiskInfo();
          this.dropdownEventTypesList = [{
            "id": 1,
            "itemName": "put"
          }, {
            "id": 2,
            "itemName": "get"
          }, {
            "id": 3,
            "itemName": "delete"
          }];
          this.dropdownEventTypesSettings = {
            singleSelection: false,
            text: "Select Event Types",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "dropdownFix"
          };
        } //condition select actions

      }, {
        key: "onEventTypesItemSelect",
        value: function onEventTypesItemSelect(item) {
          console.log(item);
          console.log(this.selectedEventTypes);
        }
      }, {
        key: "onEventTypesItemDeSelect",
        value: function onEventTypesItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedEventTypes);
        }
      }, {
        key: "onEventTypesSelectAll",
        value: function onEventTypesSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onEventTypesDeSelectAll",
        value: function onEventTypesDeSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "getServerInfo",
        value: function getServerInfo() {
          var _this2 = this;

          this.apiService.serverInfo().subscribe(function (data) {
            _this2.apiService.validateAuthInResponse(data);

            _this2.serviceInfo = data;
          });
        }
      }, {
        key: "getDiskInfo",
        value: function getDiskInfo() {
          var _this3 = this;

          this.apiService.diskInfo().subscribe(function (data) {
            _this3.apiService.validateAuthInResponse(data);

            _this3.diskUsageInfo = data;
          });
        }
      }, {
        key: "searchItems",
        value: function searchItems() {
          var prev = this.mdbTable.getDataSource();

          if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.buckets = this.mdbTable.getDataSource();
          }

          if (this.searchText) {
            this.buckets = this.mdbTable.searchLocalDataBy(this.searchText);
            this.mdbTable.setDataSource(prev);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
          this.mdbTablePagination.calculateFirstItemIndex();
          this.mdbTablePagination.calculateLastItemIndex();
          this.cdRef.detectChanges();
        }
      }, {
        key: "getBuckets",
        value: function getBuckets() {
          var _this4 = this;

          this.apiService.getBucketsExtended().subscribe(function (data) {
            _this4.apiService.validateAuthInResponse(data);

            console.log("BUCKETS >>>>>>", data);

            if (data !== null) {
              _this4.buckets = data;
            } else {
              _this4.buckets = {};
            }

            _this4.mdbTable.setDataSource(_this4.buckets);

            _this4.previous = _this4.mdbTable.getDataSource();
          });
        }
      }, {
        key: "deleteBucketPrepare",
        value: function deleteBucketPrepare(bucketName) {
          this.bucketToDelete = bucketName;
        }
      }, {
        key: "removeBucketNotificationPrepare",
        value: function removeBucketNotificationPrepare(bucketName) {
          this.bucketToRemoveNotifications = bucketName;
        }
      }, {
        key: "updateBucketPrepare",
        value: function updateBucketPrepare(bucketName) {
          this.editBucketName = bucketName;
        }
      }, {
        key: "deleteBucket",
        value: function deleteBucket() {
          var _this5 = this;

          this.apiService.deleteBucket(this.bucketToDelete).subscribe(function (data) {
            _this5.apiService.validateAuthInResponse(data);

            console.log(data);

            if (data["Success"]) {
              _this5.toastr.success('Bucket has been deleted', 'Success');
            } else {
              _this5.toastr.error(JSON.stringify(data), 'Error while deleting bucket');
            }

            _this5.getBuckets();
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.newBucketName = "";
          this.newBucketEventARN = "";
          this.newBucketEventFilterPrefix = "";
          this.newBucketEventFilterSuffix = "";
          this.selectedEventTypes = [];
        }
      }, {
        key: "resetUpdateForm",
        value: function resetUpdateForm() {
          this.updateBucketEventARN = "";
          this.selectedEventTypes = [];
          this.updateBucketEventFilterPrefix = "";
          this.updateBucketEventFilterSuffix = "";
        }
      }, {
        key: "createBucket",
        value: function createBucket() {
          if (this.newBucketName.indexOf(',') > -1) {
            var bucketsArr = this.newBucketName.split(',');

            for (var i = 0; i < bucketsArr.length; i++) {
              if (bucketsArr[i] != '') {
                this.createBucketSimple(bucketsArr[i], this.newBucketEventARN);
              }
            }
          } else {
            this.createBucketSimple(this.newBucketName, this.newBucketEventARN);
          }
        }
      }, {
        key: "bucketLifecycle",
        value: function bucketLifecycle(bucket) {
          this.lifecycleBucketName = bucket;
        }
      }, {
        key: "updateBucket",
        value: function updateBucket() {
          this.enableNotificationForBucket(this.editBucketName, this.updateBucketEventARN, this.selectedEventTypes, this.updateBucketEventFilterPrefix, this.updateBucketEventFilterSuffix, true);
        }
      }, {
        key: "enableNotificationForBucket",
        value: function enableNotificationForBucket(bucket, stsARN, eventTypes, filterPrefix, filterSuffix, updateListAfter) {
          var _this6 = this;

          var eventTypesArr = [];

          for (var i = 0; i < eventTypes.length; i++) {
            eventTypesArr.push(eventTypes[i].itemName);
          }

          this.apiService.enableNotificationForBucket(bucket, stsARN, eventTypesArr.join(','), filterPrefix, filterSuffix).subscribe(function (data) {
            _this6.apiService.validateAuthInResponse(data);

            if (data["Success"]) {
              _this6.toastr.success('Events for bucket: ' + bucket + ' has been enabled', 'Success');

              if (updateListAfter) {
                _this6.getBuckets();
              }
            } else {
              _this6.toastr.error(JSON.stringify(data), 'Error while enabling events for bucket' + bucket);
            }
          });
        }
      }, {
        key: "removeBucketEvents",
        value: function removeBucketEvents() {
          var _this7 = this;

          var bucket = this.bucketToRemoveNotifications;
          this.apiService.removeBucketEvents(bucket).subscribe(function (data) {
            _this7.apiService.validateAuthInResponse(data);

            console.log(data);

            if (data["Success"]) {
              _this7.toastr.success('Events for bucket ' + bucket + ' has been removed', 'Success');
            } else {
              _this7.toastr.error(JSON.stringify(data), 'Error while removing bucket events');
            }

            _this7.getBuckets();
          });
        }
      }, {
        key: "createBucketSimple",
        value: function createBucketSimple(bucket, eventARN) {
          var _this8 = this;

          this.apiService.createBucket(bucket).subscribe(function (data) {
            _this8.apiService.validateAuthInResponse(data);

            console.log(data);

            if (data["Success"]) {
              _this8.toastr.success('Bucket: ' + bucket + ' has been created', 'Success');

              if (eventARN != "") {
                _this8.enableNotificationForBucket(bucket, eventARN, _this8.selectedEventTypes, _this8.newBucketEventFilterPrefix, _this8.newBucketEventFilterSuffix, false);
              }
            } else {
              _this8.toastr.error(JSON.stringify(data), 'Error while creating bucket');
            }

            _this8.getBuckets();
          });
        }
      }, {
        key: "fileChanged",
        value: function fileChanged(e) {
          console.log("eventTriggered");
          this.uploadLifecycleFile = e.target.files[0];
          this.uploadLifecycleFileName = e.target.files[0].name;
        }
      }, {
        key: "resetLifecycleForm",
        value: function resetLifecycleForm() {
          this.uploadFileInput.nativeElement.value = "";
          this.uploadLifecycleFile;
          this.uploadLifecycleName = "";
          this.uploadLifecycleFileName = "";
          this.downloadLifecycleAvailable = 0;
        }
      }, {
        key: "downloadLifecycle",
        value: function downloadLifecycle(bucket) {
          var _this9 = this;

          this.apiService.getLifecycle(bucket).subscribe(function (data) {
            _this9.apiService.validateAuthInResponse(data); // console.log(bucket, data);


            if (data["error"]) {
              _this9.toastr.error(JSON.stringify(data), 'Error while getting lifecycle');
            } else {
              if (data == "") {// this.toastr.error("Bucket has no lifecycle", 'Error while getting lifecycle');
              } else {
                _this9.downloadLifecycleAvailable = 1;

                var uri = _this9.sanitizer.bypassSecurityTrustUrl("data:text/xml;charset=UTF-8," + encodeURIComponent(data.toString()));

                _this9.downloadJsonHref = uri;
              }
            }
          });
        }
      }, {
        key: "uploadLifecycle",
        value: function uploadLifecycle() {
          var _this10 = this;

          var fileReader = new FileReader();

          fileReader.onload = function (e) {
            var lifecycleFileString = fileReader.result.toString().replace(/\n/g, ' ').replace(/\r/g, ' ');

            _this10.apiService.setLifecycle(_this10.lifecycleBucketName, lifecycleFileString).subscribe(function (data) {
              _this10.apiService.validateAuthInResponse(data);

              console.log(data);

              if (data["Success"]) {
                _this10.toastr.success('Lifecycyle has been uploaded for bucket: ' + _this10.lifecycleBucketName + '', 'Success');
              } else {
                _this10.toastr.error(JSON.stringify(data), 'Error while uploading lifecycyle');
              }
            });
          };

          fileReader.readAsText(this.uploadLifecycleFile);
        }
      }]);

      return BucketsComponent;
    }();

    BucketsComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTablePaginationComponent"], {
      "static": true
    })], BucketsComponent.prototype, "mdbTablePagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], {
      "static": true
    })], BucketsComponent.prototype, "mdbTable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')], BucketsComponent.prototype, "oninput", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uploadLifecycleFile', {
      "static": true
    })], BucketsComponent.prototype, "uploadFileInput", void 0);
    BucketsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buckets',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buckets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/buckets/buckets.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buckets.component.scss */
      "./src/app/buckets/buckets.component.scss"))["default"]]
    })], BucketsComponent);
    /***/
  },

  /***/
  "./src/app/filter.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/filter.pipe.ts ***!
    \********************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, searchPolicy) {
          if (!items) {
            return [];
          }

          if (!searchPolicy) {
            return items;
          }

          searchPolicy = searchPolicy.toLocaleLowerCase();
          return items.filter(function (it) {
            return it.toLocaleLowerCase().includes(searchPolicy);
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./src/app/groups/groups.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/groups/groups.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupsGroupsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/groups/groups.component.ts":
  /*!********************************************!*\
    !*** ./src/app/groups/groups.component.ts ***!
    \********************************************/

  /*! exports provided: GroupsComponent */

  /***/
  function srcAppGroupsGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupsComponent", function () {
      return GroupsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var GroupsComponent = /*#__PURE__*/function () {
      function GroupsComponent(apiService, cdRef, toastr) {
        _classCallCheck(this, GroupsComponent);

        this.apiService = apiService;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.objectKeys = Object.keys;
        this.jsn = JSON;
        this.groups = {};
        this.groupsWithMembers = [];
        this.users = {};
        this.rawPolicies = {};
        this.groupToUpdate = {};
        this.newGroupName = "";
        this.newGroupPolicy = "";
        this.newGroupStatus = "";
        this.updateStatusValues = ['enabled', 'disabled'];
        this.modalEditMode = false;
        this.rawView = '';
        this.usersToRemove = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.searchText = '';
      }

      _createClass(GroupsComponent, [{
        key: "oninput",
        value: function oninput() {
          if (event && event['target'] !== undefined && event.target["id"] !== undefined && event.target["id"] == "search") {
            this.searchItems();
          }

          if (event && event['target'] !== undefined && event.target["name"] !== undefined && event.target["name"] == "newGroupName") {
            if (this.modalEditMode) {
              if (this.newGroupName == this.groupToUpdate["name"]) {
                console.log('hit');
                this.isEditMode(true);
              } else {
                this.isNowCopyMode();
              }
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getGroups();
          this.getListOfUsers();
          this.getListOfPolicies();
          this.isEditMode(false);
          this.dropdownList = [{
            "id": 1,
            "itemName": "wait! i'm getting policies ASAP"
          }];
          this.dropdownSettings = {
            singleSelection: false,
            text: "Select Members",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true
          };
        }
      }, {
        key: "onItemSelect",
        value: function onItemSelect(item) {
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "OnItemDeSelect",
        value: function OnItemDeSelect(item) {
          this.usersToRemove.push(item["itemName"]);
          console.log(item);
          console.log(this.selectedItems);
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAll",
        value: function onDeSelectAll(items) {
          console.log(items);
          this.selectedItems = [];
        }
      }, {
        key: "searchItems",
        value: function searchItems() {
          var prev = this.mdbTable.getDataSource();

          if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.groups = this.mdbTable.getDataSource();
          }

          if (this.searchText) {
            this.groups = this.mdbTable.searchLocalDataBy(this.searchText);
            this.mdbTable.setDataSource(prev);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
          this.mdbTablePagination.calculateFirstItemIndex();
          this.mdbTablePagination.calculateLastItemIndex();
          this.cdRef.detectChanges();
        }
      }, {
        key: "isEditMode",
        value: function isEditMode(state) {
          this.modalEditMode = state;

          if (state) {
            this.modalCreateEditTitle = "Edit group";
            this.modalCreateEditButtonText = "Update";
          } else {
            this.modalCreateEditTitle = "Create group";
            this.modalCreateEditButtonText = "Create";
          }
        }
      }, {
        key: "isNowCopyMode",
        value: function isNowCopyMode() {
          this.modalCreateEditTitle = "Copy group";
          this.modalCreateEditButtonText = "Copy";
        }
      }, {
        key: "commaToBr",
        value: function commaToBr(arr) {
          // console.log(arr)
          var str = arr.join('\n\r');
          return str;
        }
      }, {
        key: "b64unpack",
        value: function b64unpack(str) {
          // console.log(JSON.parse(atob(str)))
          return JSON.parse(atob(str));
        }
      }, {
        key: "rawPrepare",
        value: function rawPrepare(str) {
          console.log(this.rawPolicies[str]);
          this.rawView = this.b64unpack(this.rawPolicies[str]);
        }
      }, {
        key: "getGroups",
        value: function getGroups() {
          var _this11 = this;

          this.groups = {};
          this.groupsWithMembers = [];
          this.previous = "";
          this.apiService.getGroups().subscribe(function (data) {
            _this11.apiService.validateAuthInResponse(data);

            console.log(data);

            if (data !== null) {
              _this11.groups = data;

              for (var i = 0; i < _this11.objectKeys(data).length; i++) {
                var tempGroupName = data[i];

                _this11.apiService.getGroupDescription(tempGroupName).subscribe(function (data) {
                  if (data !== null) {
                    _this11.groupsWithMembers.push(data);

                    _this11.mdbTable.setDataSource(_this11.groupsWithMembers);

                    _this11.previous = _this11.mdbTable.getDataSource();
                  }
                });
              }

              console.log(_this11.groupsWithMembers);
              _this11.groups = _this11.groupsWithMembers;
            }
          });
        }
      }, {
        key: "getListOfUsers",
        value: function getListOfUsers() {
          var _this12 = this;

          this.apiService.getUsers().subscribe(function (data) {
            _this12.apiService.validateAuthInResponse(data);

            if (data !== null) {
              _this12.dropdownList = Object.entries(data).map(function (e) {
                return {
                  "id": e[0],
                  "itemName": e[0]
                };
              });
            }
          });
        }
      }, {
        key: "getGroupDescription",
        value: function getGroupDescription(group) {
          var _this13 = this;

          this.isEditMode(true);
          console.log(group);
          this.apiService.getGroupDescription(group).subscribe(function (data) {
            if (data !== null) {
              console.log(data);
              _this13.groupToUpdate = data;
              _this13.newGroupName = data["name"];
              _this13.newGroupPolicy = data["policy"];
              _this13.newGroupStatus = data["status"];

              for (var i = 0; i < data["members"].length; i++) {
                var tempMember = data["members"][i];

                _this13.selectedItems.push({
                  "id": tempMember,
                  "itemName": tempMember
                });
              }
            }
          });
        }
      }, {
        key: "getListOfPolicies",
        value: function getListOfPolicies() {
          var _this14 = this;

          this.apiService.getPolicies().subscribe(function (data) {
            _this14.apiService.validateAuthInResponse(data);

            _this14.policies = Object.keys(data);
            _this14.rawPolicies = data;
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.newGroupName = "";
          this.selectedItems = [];
          this.newGroupPolicy = "";
          this.newGroupStatus = "";
        }
      }, {
        key: "wipeGroupMembers",
        value: function wipeGroupMembers() {
          var _this15 = this;

          this.apiService.updateMembersGroup(this.newGroupName, this.usersToRemove, "true").subscribe(function (data) {
            _this15.apiService.validateAuthInResponse(data);

            if (data["Success"]) {
              _this15.toastr.success('Group: ' + _this15.newGroupName + ' members has been removed', 'Success');

              _this15.usersToRemove = [];
            } else {
              _this15.toastr.error(JSON.stringify(data), 'Error while removing members from group');
            }
          });
        }
      }, {
        key: "updatePolicy",
        value: function updatePolicy() {
          var _this16 = this;

          if (this.newGroupPolicy !== null && this.newGroupPolicy != "") {
            this.apiService.setPolicy(this.newGroupPolicy, this.newGroupName, "true").subscribe(function (data) {
              _this16.apiService.validateAuthInResponse(data);

              if (data["Success"]) {
                _this16.toastr.success('Group: ' + _this16.newGroupName + ' policy has been set to ' + _this16.newGroupPolicy, 'Success');
              } else {
                _this16.toastr.error(JSON.stringify(data), 'Error while setting policy to group');
              }
            });
          }
        }
      }, {
        key: "updateStatus",
        value: function updateStatus() {
          var _this17 = this;

          if (this.newGroupStatus !== null && this.newGroupStatus != "") {
            this.apiService.setStatusGroup(this.newGroupName, this.newGroupStatus).subscribe(function (data) {
              _this17.apiService.validateAuthInResponse(data);

              if (data["Success"]) {
                _this17.toastr.success('Group: ' + _this17.newGroupName + ' status has been set to ' + _this17.newGroupStatus, 'Success');
              } else {
                _this17.toastr.error(JSON.stringify(data), 'Error while setting status to group');
              }
            });
          }
        }
      }, {
        key: "createGroup",
        value: function createGroup() {
          var _this18 = this;

          console.log("CREATE GROUP CALLED");
          var newMembers = [];

          for (var i = 0; i < this.selectedItems.length; i++) {
            newMembers.push(this.selectedItems[i].itemName);
          } //remove users from group


          if (this.groupToUpdate !== null && this.groupToUpdate != "" && this.groupToUpdate) {
            if (this.usersToRemove.length > 0) {
              this.wipeGroupMembers();
            }
          } //add all new users to group


          if (newMembers.length > 0) {
            this.apiService.updateMembersGroup(this.newGroupName, newMembers, "false").subscribe(function (data) {
              _this18.apiService.validateAuthInResponse(data);

              if (data["Success"]) {
                _this18.toastr.success('Group: ' + _this18.newGroupName + ' has been created', 'Success');
              } else {
                _this18.toastr.error(JSON.stringify(data), 'Error while creating group');
              }

              _this18.updatePolicy();

              _this18.updateStatus();

              _this18.getGroups();
            });
          } else {
            this.updatePolicy();
            this.updateStatus();
            this.getGroups();
          }

          this.isEditMode(false);
          this.groupToUpdate = {};
        }
      }]);

      return GroupsComponent;
    }();

    GroupsComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbTablePaginationComponent"], {
      "static": true
    })], GroupsComponent.prototype, "mdbTablePagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbTableDirective"], {
      "static": true
    })], GroupsComponent.prototype, "mdbTable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')], GroupsComponent.prototype, "oninput", null);
    GroupsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-groups',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./groups.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./groups.component.scss */
      "./src/app/groups/groups.component.scss"))["default"]]
    })], GroupsComponent);
    /***/
  },

  /***/
  "./src/app/loader.interceptor.ts":
  /*!***************************************!*\
    !*** ./src/app/loader.interceptor.ts ***!
    \***************************************/

  /*! exports provided: LoaderInterceptor */

  /***/
  function srcAppLoaderInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function () {
      return LoaderInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./loader.service */
    "./src/app/loader.service.ts"); // loader.interceptors.ts


    var LoaderInterceptor = /*#__PURE__*/function () {
      function LoaderInterceptor(loaderService) {
        _classCallCheck(this, LoaderInterceptor);

        this.loaderService = loaderService;
        this.requests = [];
      }

      _createClass(LoaderInterceptor, [{
        key: "removeRequest",
        value: function removeRequest(req) {
          var i = this.requests.indexOf(req);

          if (i >= 0) {
            this.requests.splice(i, 1);
          }

          this.loaderService.isLoading.next(this.requests.length > 0);
        }
      }, {
        key: "intercept",
        value: function intercept(req, next) {
          var _this19 = this;

          req = req.clone({
            withCredentials: true
          });
          this.requests.push(req);
          this.loaderService.isLoading.next(true);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var subscription = next.handle(req).subscribe(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this19.removeRequest(req);

                observer.next(event);
              }
            }, function (err) {
              alert('error returned');

              _this19.removeRequest(req);

              observer.error(err);
            }, function () {
              _this19.removeRequest(req);

              observer.complete();
            }); // remove request from queue when cancelled

            return function () {
              _this19.removeRequest(req);

              subscription.unsubscribe();
            };
          });
        }
      }]);

      return LoaderInterceptor;
    }();

    LoaderInterceptor.ctorParameters = function () {
      return [{
        type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }];
    };

    LoaderInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LoaderInterceptor);
    /***/
  },

  /***/
  "./src/app/loader.service.ts":
  /*!***********************************!*\
    !*** ./src/app/loader.service.ts ***!
    \***********************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); //loader.service.ts


    var LoaderService = function LoaderService() {
      _classCallCheck(this, LoaderService);

      this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    };

    LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoaderService);
    /***/
  },

  /***/
  "./src/app/loader/loader.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/loader/loader.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "dialog {\n  width: 300px;\n}\n\ndialog::-webkit-backdrop {\n  background: rgba(0, 0, 0, 0.7);\n}\n\ndialog::backdrop {\n  background: rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yenJibGQvcmVwb3MvYWRtaW5pby11aS9zcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0c7RUFDQyw4QkFBQTtBQ0VKOztBREhHO0VBQ0MsOEJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaWFsb2cge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgIH1cbiAgIGRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgIH0iLCJkaWFsb2cge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/loader/loader.component.ts":
  /*!********************************************!*\
    !*** ./src/app/loader/loader.component.ts ***!
    \********************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../loader.service */
    "./src/app/loader.service.ts"); //loader.interceptor.ts


    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent(loaderService) {
        var _this20 = this;

        _classCallCheck(this, LoaderComponent);

        this.loaderService = loaderService;
        this.loaderService.isLoading.subscribe(function (v) {
          _this20.loading = v;
        });
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ctorParameters = function () {
      return [{
        type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./loader.component.scss */
      "./src/app/loader/loader.component.scss"))["default"]]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/policies/policies.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/policies/policies.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPoliciesPoliciesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljaWVzL3BvbGljaWVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/policies/policies.component.ts":
  /*!************************************************!*\
    !*** ./src/app/policies/policies.component.ts ***!
    \************************************************/

  /*! exports provided: PoliciesComponent */

  /***/
  function srcAppPoliciesPoliciesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function () {
      return PoliciesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var PoliciesComponent = /*#__PURE__*/function () {
      function PoliciesComponent(apiService, cdRef, toastr, sanitizer) {
        _classCallCheck(this, PoliciesComponent);

        this.apiService = apiService;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.objectKeys = Object.keys;
        this.objectValues = Object.values;
        this.policies = {};
        this.policiesRaw = {};
        this.rawView = '';
        this.jsn = JSON;
        this.dropdownActionList = [];
        this.dropdownConditionList = [];
        this.dropdownConditionKeyList = [];
        this.selectedActions = [];
        this.selectedCondition = [];
        this.selectedConditionKey = [];
        this.dropdownActionSettings = {};
        this.dropdownConditionSettings = {};
        this.dropdownConditionKeySettings = {};
        this.newPolicy = {
          name: "",
          effect: "allow",
          bucket: ""
        };
        this.newPolicyRaw = {
          Version: "",
          Statement: []
        };
        this.newStatement = {
          Action: [],
          Effect: "",
          Resource: [],
          Condition: {},
          Principal: ""
        };
        this.newConditionValue = "";
        this.searchText = '';
      }

      _createClass(PoliciesComponent, [{
        key: "oninput",
        value: function oninput() {
          if (event && event['target'] !== undefined && event.target["id"] !== undefined && event.target["id"] == "search") {
            this.searchItems();
          }

          if (event && event['target'] !== undefined && event.target["name"] !== undefined && event.target["name"] == "newPolicyName") {
            if (this.modalEditMode) {
              if (this.newPolicy.name == this.policyToUpdate) {
                this.isEditMode(true);
              } else {
                this.isNowCopyMode();
              }
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPolicies();
          this.dropdownActionList = [{
            "id": 1,
            "itemName": "s3:AbortMultipartUpload"
          }, {
            "id": 2,
            "itemName": "s3:CreateBucket"
          }, {
            "id": 3,
            "itemName": "s3:DeleteBucket"
          }, {
            "id": 4,
            "itemName": "s3:DeleteBucketPolicy"
          }, {
            "id": 5,
            "itemName": "s3:DeleteObject"
          }, {
            "id": 6,
            "itemName": "s3:GetBucketLocation"
          }, {
            "id": 7,
            "itemName": "s3:GetBucketNotification"
          }, {
            "id": 8,
            "itemName": "s3:GetBucketPolicy"
          }, {
            "id": 9,
            "itemName": "s3:GetObject"
          }, {
            "id": 10,
            "itemName": "s3:HeadBucket"
          }, {
            "id": 11,
            "itemName": "s3:ListAllMyBuckets"
          }, {
            "id": 12,
            "itemName": "s3:ListBucket"
          }, {
            "id": 13,
            "itemName": "s3:ListBucketMultipartUploads"
          }, {
            "id": 14,
            "itemName": "s3:ListenBucketNotification"
          }, {
            "id": 15,
            "itemName": "s3:ListMultipartUploadParts"
          }, {
            "id": 16,
            "itemName": "s3:PutBucketNotification"
          }, {
            "id": 17,
            "itemName": "s3:PutBucketPolicy"
          }, {
            "id": 18,
            "itemName": "s3:PutObject"
          }, {
            "id": 19,
            "itemName": "s3:PutBucketLifecycle"
          }, {
            "id": 20,
            "itemName": "s3:GetBucketLifecycle"
          }];
          this.dropdownActionSettings = {
            singleSelection: false,
            text: "Select Actions",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true
          };
          this.dropdownConditionList = [{
            "id": 1,
            "itemName": "ArnEquals"
          }, {
            "id": 2,
            "itemName": "ArnEqualsIfExists"
          }, {
            "id": 3,
            "itemName": "ArnLike"
          }, {
            "id": 4,
            "itemName": "ArnLikeIfExists"
          }, {
            "id": 5,
            "itemName": "ArnNotEquals"
          }, {
            "id": 6,
            "itemName": "ArnNotEqualsIfExists"
          }, {
            "id": 7,
            "itemName": "ArnNotLike"
          }, {
            "id": 8,
            "itemName": "ArnNotLikeIfExists"
          }, {
            "id": 9,
            "itemName": "BinaryEquals"
          }, {
            "id": 10,
            "itemName": "BinaryEqualsIfExists"
          }, {
            "id": 11,
            "itemName": "BinaryNotEquals"
          }, {
            "id": 12,
            "itemName": "BinaryNotEqualsIfExists"
          }, {
            "id": 13,
            "itemName": "Bool"
          }, {
            "id": 14,
            "itemName": "BoolIfExists"
          }, {
            "id": 15,
            "itemName": "DateEquals"
          }, {
            "id": 16,
            "itemName": "DateEqualsIfExists"
          }, {
            "id": 17,
            "itemName": "DateGreaterThan"
          }, {
            "id": 18,
            "itemName": "DateGreaterThanEquals"
          }, {
            "id": 19,
            "itemName": "DateGreaterThanEqualsIfExists"
          }, {
            "id": 20,
            "itemName": "DateGreaterThanIfExists"
          }, {
            "id": 21,
            "itemName": "DateLessThan"
          }, {
            "id": 22,
            "itemName": "DateLessThanEquals"
          }, {
            "id": 23,
            "itemName": "DateLessThanEqualsIfExists"
          }, {
            "id": 24,
            "itemName": "DateLessThanIfExists"
          }, {
            "id": 25,
            "itemName": "DateNotEquals"
          }, {
            "id": 26,
            "itemName": "DateNotEqualsIfExists"
          }, {
            "id": 27,
            "itemName": "IpAddress"
          }, {
            "id": 28,
            "itemName": "IpAddressIfExists"
          }, {
            "id": 29,
            "itemName": "NotIpAddress"
          }, {
            "id": 30,
            "itemName": "NotIpAddressIfExists"
          }, {
            "id": 31,
            "itemName": "Null"
          }, {
            "id": 32,
            "itemName": "NumericEquals"
          }, {
            "id": 33,
            "itemName": "NumericEqualsIfExists"
          }, {
            "id": 34,
            "itemName": "NumericGreaterThan"
          }, {
            "id": 35,
            "itemName": "NumericGreaterThanEquals"
          }, {
            "id": 36,
            "itemName": "NumericGreaterThanEqualsIfExists"
          }, {
            "id": 37,
            "itemName": "NumericGreaterThanIfExists"
          }, {
            "id": 38,
            "itemName": "NumericLessThan"
          }, {
            "id": 39,
            "itemName": "NumericLessThanEquals"
          }, {
            "id": 40,
            "itemName": "NumericLessThanEqualsIfExists"
          }, {
            "id": 41,
            "itemName": "NumericLessThanIfExists"
          }, {
            "id": 42,
            "itemName": "NumericNotEquals"
          }, {
            "id": 43,
            "itemName": "NumericNotEqualsIfExists"
          }, {
            "id": 44,
            "itemName": "StringEquals"
          }, {
            "id": 45,
            "itemName": "StringEqualsIfExists"
          }, {
            "id": 46,
            "itemName": "StringEqualsIgnoreCase"
          }, {
            "id": 47,
            "itemName": "StringEqualsIgnoreCaseIfExists"
          }, {
            "id": 48,
            "itemName": "StringLike"
          }, {
            "id": 49,
            "itemName": "StringLikeIfExists"
          }, {
            "id": 50,
            "itemName": "StringNotEquals"
          }, {
            "id": 51,
            "itemName": "StringNotEqualsIfExists"
          }, {
            "id": 52,
            "itemName": "StringNotEqualsIgnoreCase"
          }, {
            "id": 53,
            "itemName": "StringNotEqualsIgnoreCaseIfExists"
          }, {
            "id": 54,
            "itemName": "StringNotLike"
          }, {
            "id": 55,
            "itemName": "StringNotLikeIfExists"
          }];
          this.dropdownConditionSettings = {
            singleSelection: true,
            text: "Select Condition",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true
          };
          this.dropdownConditionKeyList = [{
            "id": 1,
            "itemName": "aws:CurrentTime"
          }, {
            "id": 2,
            "itemName": "aws:EpochTime"
          }, {
            "id": 3,
            "itemName": "aws:MultiFactorAuthAge"
          }, {
            "id": 4,
            "itemName": "aws:MultiFactorAuthPresent"
          }, {
            "id": 5,
            "itemName": "aws:PrincipalArn"
          }, {
            "id": 6,
            "itemName": "aws:PrincipalOrgID"
          }, {
            "id": 7,
            "itemName": "aws:PrincipalTag/${TagKey}"
          }, {
            "id": 8,
            "itemName": "aws:PrincipalType"
          }, {
            "id": 9,
            "itemName": "aws:Referer"
          }, {
            "id": 10,
            "itemName": "aws:RequestTag/${TagKey}"
          }, {
            "id": 11,
            "itemName": "aws:RequestedRegion"
          }, {
            "id": 12,
            "itemName": "aws:SecureTransport"
          }, {
            "id": 13,
            "itemName": "aws:SourceAccount"
          }, {
            "id": 14,
            "itemName": "aws:SourceArn"
          }, {
            "id": 15,
            "itemName": "aws:SourceIp"
          }, {
            "id": 16,
            "itemName": "aws:SourceVpc"
          }, {
            "id": 17,
            "itemName": "aws:SourceVpce"
          }, {
            "id": 18,
            "itemName": "aws:TagKeys"
          }, {
            "id": 19,
            "itemName": "aws:TokenIssueTime"
          }, {
            "id": 20,
            "itemName": "aws:UserAgent"
          }, {
            "id": 21,
            "itemName": "aws:userid"
          }, {
            "id": 22,
            "itemName": "aws:username"
          }, {
            "id": 23,
            "itemName": "s3:AccessPointNetworkOrigin"
          }, {
            "id": 24,
            "itemName": "s3:DataAccessPointAccount"
          }, {
            "id": 25,
            "itemName": "s3:DataAccessPointArn"
          }, {
            "id": 26,
            "itemName": "s3:ExistingJobOperation"
          }, {
            "id": 27,
            "itemName": "s3:ExistingJobPriority"
          }, {
            "id": 28,
            "itemName": "s3:ExistingObjectTag/<key>"
          }, {
            "id": 29,
            "itemName": "s3:JobSuspendedCause"
          }, {
            "id": 30,
            "itemName": "s3:LocationConstraint"
          }, {
            "id": 31,
            "itemName": "s3:RequestJobOperation"
          }, {
            "id": 32,
            "itemName": "s3:RequestJobPriority"
          }, {
            "id": 33,
            "itemName": "s3:RequestObjectTag/<key>"
          }, {
            "id": 34,
            "itemName": "s3:RequestObjectTagKeys"
          }, {
            "id": 35,
            "itemName": "s3:VersionId"
          }, {
            "id": 36,
            "itemName": "s3:authtype"
          }, {
            "id": 37,
            "itemName": "s3:delimiter"
          }, {
            "id": 38,
            "itemName": "s3:locationconstraint"
          }, {
            "id": 39,
            "itemName": "s3:max-keys"
          }, {
            "id": 40,
            "itemName": "s3:object-lock-legal-hold"
          }, {
            "id": 41,
            "itemName": "s3:object-lock-mode"
          }, {
            "id": 42,
            "itemName": "s3:object-lock-remaining-retention-days"
          }, {
            "id": 43,
            "itemName": "s3:object-lock-retain-until-date"
          }, {
            "id": 44,
            "itemName": "s3:prefix"
          }, {
            "id": 45,
            "itemName": "s3:signatureage"
          }, {
            "id": 46,
            "itemName": "s3:signatureversion"
          }, {
            "id": 47,
            "itemName": "s3:versionid"
          }, {
            "id": 48,
            "itemName": "s3:x-amz-acl"
          }, {
            "id": 49,
            "itemName": "s3:x-amz-content-sha256"
          }, {
            "id": 50,
            "itemName": "s3:x-amz-copy-source"
          }, {
            "id": 51,
            "itemName": "s3:x-amz-grant-full-control"
          }, {
            "id": 52,
            "itemName": "s3:x-amz-grant-read"
          }, {
            "id": 53,
            "itemName": "s3:x-amz-grant-read-acp"
          }, {
            "id": 54,
            "itemName": "s3:x-amz-grant-write"
          }, {
            "id": 55,
            "itemName": "s3:x-amz-grant-write-acp"
          }, {
            "id": 56,
            "itemName": "s3:x-amz-metadata-directive"
          }, {
            "id": 57,
            "itemName": "s3:x-amz-server-side-encryption"
          }, {
            "id": 58,
            "itemName": "s3:x-amz-server-side-encryption-aws-kms-key-id"
          }, {
            "id": 59,
            "itemName": "s3:x-amz-storage-class"
          }, {
            "id": 60,
            "itemName": "s3:x-amz-website-redirect-location"
          }];
          this.dropdownConditionKeySettings = {
            singleSelection: true,
            text: "Select Condition Key",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true
          };
        }
      }, {
        key: "onActionItemSelect",
        value: function onActionItemSelect(item) {
          console.log(item);
          console.log(this.selectedActions);
        }
      }, {
        key: "onActionItemDeSelect",
        value: function onActionItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedActions);
        }
      }, {
        key: "onActionSelectAll",
        value: function onActionSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onActionDeSelectAll",
        value: function onActionDeSelectAll(items) {
          console.log(items);
        } //condition select actions

      }, {
        key: "onConditionItemSelect",
        value: function onConditionItemSelect(item) {
          console.log(item);
          console.log(this.selectedCondition);
        }
      }, {
        key: "onConditionItemDeSelect",
        value: function onConditionItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedCondition);
        }
      }, {
        key: "onConditionSelectAll",
        value: function onConditionSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onConditionDeSelectAll",
        value: function onConditionDeSelectAll(items) {
          console.log(items);
        } //condition key select actions

      }, {
        key: "onConditionKeyItemSelect",
        value: function onConditionKeyItemSelect(item) {
          console.log(item);
          console.log(this.selectedConditionKey);
        }
      }, {
        key: "onConditionKeyItemDeSelect",
        value: function onConditionKeyItemDeSelect(item) {
          console.log(item);
          console.log(this.selectedConditionKey);
        }
      }, {
        key: "onConditionKeySelectAll",
        value: function onConditionKeySelectAll(items) {
          console.log(items);
        }
      }, {
        key: "onConditionKeyDeSelectAll",
        value: function onConditionKeyDeSelectAll(items) {
          console.log(items);
        }
      }, {
        key: "searchItems",
        value: function searchItems() {
          console.log(this.searchText);
          var prev = this.mdbTable.getDataSource();

          if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.policies = this.mdbTable.getDataSource();
          }

          if (this.searchText) {
            this.policies = this.mdbTable.searchLocalDataBy(this.searchText);
            this.mdbTable.setDataSource(prev);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
          this.mdbTablePagination.calculateFirstItemIndex();
          this.mdbTablePagination.calculateLastItemIndex();
          this.cdRef.detectChanges();
        }
      }, {
        key: "resetPloicyForm",
        value: function resetPloicyForm(removeName) {
          console.log(removeName);
          this.selectedActions = [];

          if (!removeName) {
            this.newPolicy.effect = "Allow";
            this.newPolicy.bucket = "";
          } else {
            this.newPolicy.name = "", this.newPolicy.effect = "Allow";
            this.newPolicy.bucket = "";
          }

          this.newStatement = {
            Action: [],
            Effect: "",
            Resource: [],
            Condition: {},
            Principal: ""
          };
        }
      }, {
        key: "getPolicies",
        value: function getPolicies() {
          var _this21 = this;

          this.apiService.getPolicies().subscribe(function (data) {
            _this21.apiService.validateAuthInResponse(data);

            console.log(data);
            _this21.policiesRaw = data;
            var arrayOfPolicies = Object.entries(data).map(function (e) {
              return _defineProperty({}, e[0], _this21.b64unpack(e[1]));
            });
            _this21.policies = arrayOfPolicies;

            _this21.mdbTable.setDataSource(arrayOfPolicies);

            console.log(arrayOfPolicies);
            _this21.previous = _this21.mdbTable.getDataSource();
          });
        }
      }, {
        key: "deletePolicy",
        value: function deletePolicy() {
          var _this22 = this;

          this.apiService.deletePolicy(this.policyToDelete).subscribe(function (data) {
            _this22.apiService.validateAuthInResponse(data);

            console.log(data);

            _this22.getPolicies();

            if (data["Success"]) {
              _this22.toastr.success('Policy ' + _this22.policyToDelete + ' has been deleted', 'Success');
            } else {
              _this22.toastr.error(JSON.stringify(data), 'Error while deleting policy');
            }
          });
        }
      }, {
        key: "downloadPolicy",
        value: function downloadPolicy(jsonObj) {
          var theJSON = JSON.stringify(jsonObj);
          console.log("theJSON>>>>>>>>>>>", theJSON);
          var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
          this.downloadJsonHref = uri;
        }
      }, {
        key: "b64unpack",
        value: function b64unpack(str) {
          // console.log(JSON.parse(atob(str)))
          return JSON.parse(atob(str));
        }
      }, {
        key: "rawPrepare",
        value: function rawPrepare(obj) {
          this.rawView = obj;
        }
      }, {
        key: "deletePolicyPrepare",
        value: function deletePolicyPrepare(policy) {
          this.policyToDelete = policy;
        }
      }, {
        key: "prepareNewPolicyRaw",
        value: function prepareNewPolicyRaw() {
          this.newPolicyRaw = {
            Version: "2012-10-17",
            Statement: []
          };
        }
      }, {
        key: "removeCondition",
        value: function removeCondition(valueId, keyName, conditionName) {
          console.log(this.newStatement);
          console.log(valueId, keyName, conditionName);
          this.newStatement.Condition[conditionName][keyName].splice(valueId, 1);
        }
      }, {
        key: "addCondition",
        value: function addCondition() {
          console.log(this.selectedCondition[0].itemName);
          console.log(this.selectedConditionKey[0].itemName);
          console.log(this.newConditionValue);

          if (!this.newStatement.Condition) {
            this.newStatement.Condition = {};
          }

          if (this.newStatement.Condition[this.selectedCondition[0].itemName]) {
            if (this.newStatement.Condition[this.selectedCondition[0].itemName][this.selectedConditionKey[0].itemName]) {
              this.newStatement.Condition[this.selectedCondition[0].itemName][this.selectedConditionKey[0].itemName].push(this.newConditionValue);
            } else {
              this.newStatement.Condition[this.selectedCondition[0].itemName][this.selectedConditionKey[0].itemName] = [];
              this.newStatement.Condition[this.selectedCondition[0].itemName][this.selectedConditionKey[0].itemName].push(this.newConditionValue);
            }
          } else {
            this.newStatement.Condition[this.selectedCondition[0].itemName] = {};
            this.newStatement.Condition[this.selectedCondition[0].itemName][this.selectedConditionKey[0].itemName] = [];
            this.newStatement.Condition[this.selectedCondition[0].itemName][this.selectedConditionKey[0].itemName].push(this.newConditionValue);
          }

          this.selectedCondition = [];
          this.selectedConditionKey = [];
          this.newConditionValue = "";
          console.log(this.newStatement.Condition);
        }
      }, {
        key: "addStatement",
        value: function addStatement() {
          if (this.selectedActions.length == this.dropdownActionList.length) {
            this.newStatement.Action.push("s3:*");
          } else {
            for (var i = 0; i < this.selectedActions.length; i++) {
              this.newStatement.Action.push(this.selectedActions[i].itemName);
            }
          }

          this.newStatement.Effect = this.newPolicy.effect; // this.newStatement.Resource = "arn:aws:s3:::"+this.newPolicy.bucket

          console.log(this.newStatement);

          if (this.newStatement.Condition && Object.entries(this.newStatement.Condition).length === 0 && this.newStatement.Condition.constructor === Object) {
            console.log("Condition removed cause empty");
            delete this.newStatement.Condition;
          } else {
            if (!this.newStatement.Principal || this.newStatement.Principal == "") {
              console.log("Principal set to * cause condition not empty");
              this.newStatement.Principal = "*";
            }
          }

          this.newPolicyRaw.Statement.push(this.newStatement);
          console.log(this.newPolicyRaw);
          this.resetPloicyForm(false);
        }
      }, {
        key: "editStatement",
        value: function editStatement(i) {
          this.newStatement = this.newPolicyRaw.Statement[i];
          this.newPolicy.effect = this.newPolicyRaw.Statement[i].Effect;

          if (this.newStatement.Action[0] == "s3:*") {
            this.selectedActions = this.dropdownActionList;
          } else {
            for (var g = 0; g < this.newStatement.Action.length; g++) {
              this.selectedActions.push({
                "id": g,
                "itemName": this.newStatement.Action[g]
              });
            }
          }

          this.newStatement.Action = [];
          this.newPolicyRaw.Statement.splice(i, 1);
        }
      }, {
        key: "addBucketStatement",
        value: function addBucketStatement() {
          this.newStatement.Resource.push("arn:aws:s3:::" + this.newPolicy.bucket);
          this.newPolicy.bucket = '';
        }
      }, {
        key: "removeStatement",
        value: function removeStatement(i) {
          this.newPolicyRaw.Statement.splice(i, 1);
        }
      }, {
        key: "removeBucketStatement",
        value: function removeBucketStatement(i) {
          this.newStatement.Resource.splice(i, 1);
        }
      }, {
        key: "fileChanged",
        value: function fileChanged(e) {
          console.log("eventTriggered");
          this.uploadPolicyFile = e.target.files[0];
          this.uploadPolicyFileName = e.target.files[0].name;
        }
      }, {
        key: "uploadPolicy",
        value: function uploadPolicy() {
          var _this23 = this;

          var fileReader = new FileReader();

          fileReader.onload = function (e) {
            console.log(fileReader.result);
            var policyFileString = fileReader.result.toString().replace(/\n/g, ' ').replace(/\r/g, ' ');

            _this23.apiService.addPolicy(_this23.uploadPolicyName, policyFileString).subscribe(function (data) {
              _this23.apiService.validateAuthInResponse(data);

              console.log(data);

              if (data["Success"]) {
                _this23.toastr.success('Policy ' + _this23.newPolicy.name + ' has been created', 'Success');
              } else {
                _this23.toastr.error(JSON.stringify(data), 'Error while creating policy');
              }

              _this23.getPolicies();
            });
          };

          fileReader.readAsText(this.uploadPolicyFile);
        }
      }, {
        key: "resetUploadForm",
        value: function resetUploadForm() {
          this.uploadFileInput.nativeElement.value = "";
          this.uploadPolicyFile;
          this.uploadPolicyName = "";
          this.uploadPolicyFileName = "";
        }
      }, {
        key: "createPolicy",
        value: function createPolicy() {
          var _this24 = this;

          console.log(this.newPolicy, this.newPolicyRaw);
          var policyString = JSON.stringify(this.newPolicyRaw);
          this.apiService.addPolicy(this.newPolicy.name, policyString).subscribe(function (data) {
            _this24.apiService.validateAuthInResponse(data);

            console.log(data);

            if (data["Success"]) {
              _this24.toastr.success('Policy ' + _this24.newPolicy.name + ' has been created', 'Success');
            } else {
              _this24.toastr.error(JSON.stringify(data), 'Error while creating policy');
            }

            _this24.getPolicies();
          });
        }
      }, {
        key: "isEditMode",
        value: function isEditMode(state) {
          this.modalEditMode = state;

          if (state) {
            this.modalCreateEditTitle = "Edit policy";
            this.modalCreateEditButtonText = "Update";
          } else {
            this.modalCreateEditTitle = "Build up new policy";
            this.modalCreateEditButtonText = "Create";
          }
        }
      }, {
        key: "isNowCopyMode",
        value: function isNowCopyMode() {
          this.modalCreateEditTitle = "Copy policy";
          this.modalCreateEditButtonText = "Copy";
        }
      }, {
        key: "updatePolicyPrepare",
        value: function updatePolicyPrepare(policy) {
          this.policyToUpdate = policy;
          this.prepareNewPolicyRaw();
          this.resetPloicyForm(false);
          this.newPolicy.name = policy;
          var oldPolicy = this.b64unpack(this.policiesRaw[policy]);
          this.newPolicyRaw.Statement = oldPolicy.Statement;
        }
      }]);

      return PoliciesComponent;
    }();

    PoliciesComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTablePaginationComponent"], {
      "static": true
    })], PoliciesComponent.prototype, "mdbTablePagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], {
      "static": true
    })], PoliciesComponent.prototype, "mdbTable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')], PoliciesComponent.prototype, "oninput", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uploadPolicyFile', {
      "static": true
    })], PoliciesComponent.prototype, "uploadFileInput", void 0);
    PoliciesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-policies',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./policies.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/policies/policies.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./policies.component.scss */
      "./src/app/policies/policies.component.scss"))["default"]]
    })], PoliciesComponent);
    /***/
  },

  /***/
  "./src/app/server/server.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/server/server.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppServerServerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci9zZXJ2ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/server/server.component.ts":
  /*!********************************************!*\
    !*** ./src/app/server/server.component.ts ***!
    \********************************************/

  /*! exports provided: ServerComponent */

  /***/
  function srcAppServerServerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerComponent", function () {
      return ServerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");

    var ServerComponent = /*#__PURE__*/function () {
      function ServerComponent(apiService) {
        _classCallCheck(this, ServerComponent);

        this.apiService = apiService;
        this.objectKeys = Object.keys;
        this.objectValues = Object.values;
        this.math = Math;
        this.rawView = '';
        this.bucketSizes = [];
        this.hgChartDatasets = [{
          data: [],
          label: 'Number of objects'
        }];
        this.hgChartLabels = [];
        this.hgChartType = 'radar';
        this.hgChartColors = [{
          backgroundColor: 'rgba(151,187,205,0.9)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
        }];
        this.hgChartOptions = {
          responsive: true
        };
        this.szChartDatasets = [{
          data: [],
          label: 'Size of bucket in Bytes'
        }];
        this.szChartLabels = [];
        this.szChartType = 'bar';
        this.szChartColors = [{
          backgroundColor: 'rgba(151,187,205,0.9)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
        }];
        this.szChartOptions = {
          responsive: true
        };
      }

      _createClass(ServerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.serverInfo();
          this.diskInfo();
        }
      }, {
        key: "hgChartClicked",
        value: function hgChartClicked(e) {}
      }, {
        key: "hgChartHovered",
        value: function hgChartHovered(e) {}
      }, {
        key: "szChartClicked",
        value: function szChartClicked(e) {}
      }, {
        key: "szChartHovered",
        value: function szChartHovered(e) {}
      }, {
        key: "serverInfo",
        value: function serverInfo() {
          var _this25 = this;

          this.apiService.serverInfo().subscribe(function (data) {
            _this25.apiService.validateAuthInResponse(data);

            _this25.serviceInfo = data;
          });
        }
      }, {
        key: "diskInfo",
        value: function diskInfo() {
          var _this26 = this;

          this.apiService.diskInfo().subscribe(function (data) {
            _this26.apiService.validateAuthInResponse(data);

            console.log("Disk Usage >>>>>>>>>>>>", data);
            _this26.diskUsageInfo = data;

            if (data.hasOwnProperty('objectsSizesHistogram')) {
              var objectsSizesHistogram = _this26.diskUsageInfo.objectsSizesHistogram;
              var histogramKeysRawArr = Object.keys(objectsSizesHistogram);
              var histogramValsRawArr = Object.values(objectsSizesHistogram);
              _this26.hgChartDatasets[0].data = histogramValsRawArr;
              _this26.hgChartLabels = [];

              for (var i = 0; i < histogramKeysRawArr.length; i++) {
                var histogramLabel = histogramKeysRawArr[i].split('_').join(' ');

                _this26.hgChartLabels.push(histogramLabel);
              }
            }

            if (data.hasOwnProperty('bucketsSizes') && _this26.diskUsageInfo.bucketsSizes != {}) {
              var objectBucketSizes = _this26.diskUsageInfo.bucketsSizes;
              var bucketSizesKeysRawArr = Object.keys(objectBucketSizes);
              var bucketSizesValsRawArr = Object.values(objectBucketSizes);
              _this26.szChartDatasets[0].data = bucketSizesValsRawArr;
              _this26.szChartLabels = bucketSizesKeysRawArr;
            }
          });
        }
      }, {
        key: "rawPrepare",
        value: function rawPrepare(obj) {
          this.rawView = obj;
        }
      }]);

      return ServerComponent;
    }();

    ServerComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    ServerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-server',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./server.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/server/server.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./server.component.scss */
      "./src/app/server/server.component.scss"))["default"]]
    })], ServerComponent);
    /***/
  },

  /***/
  "./src/app/users/users.component.scss":
  /*!********************************************!*\
    !*** ./src/app/users/users.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(apiService, cdRef, toastr) {
        _classCallCheck(this, UsersComponent);

        this.apiService = apiService;
        this.cdRef = cdRef;
        this.toastr = toastr;
        this.users = {};
        this.usersRaw = {};
        this.objectKeys = Object.keys;
        this.objectValues = Object.values;
        this.jsn = JSON;
        this.updateStatusValues = ['enabled', 'disabled'];
        this.searchText = '';
      }

      _createClass(UsersComponent, [{
        key: "oninput",
        value: function oninput() {
          if (event && event['target'] !== undefined && event.target["id"] !== undefined && event.target["id"] == "search") {
            this.searchItems();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getListOfUsers();
          this.getListOfPolicies();
          this.resetForm();
          this.updateUserFrom();
        }
      }, {
        key: "searchItems",
        value: function searchItems() {
          console.log(this.searchText);
          var prev = this.mdbTable.getDataSource();

          if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.users = this.mdbTable.getDataSource();
          }

          if (this.searchText) {
            this.users = this.mdbTable.searchLocalDataBy(this.searchText);
            this.mdbTable.setDataSource(prev);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
          this.mdbTablePagination.calculateFirstItemIndex();
          this.mdbTablePagination.calculateLastItemIndex();
          this.cdRef.detectChanges();
        }
      }, {
        key: "generatePassword",
        value: function generatePassword(length) {
          var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          var retVal = "";

          for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
          }

          return retVal;
        }
      }, {
        key: "updateUserFrom",
        value: function updateUserFrom() {
          this.updateUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            accessKeyUpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
              value: '',
              disabled: true
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            secretKeyUpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            policyUpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            statusUpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.validatingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            newUserAccess: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.generatePassword(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)),
            newUserSecret: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.generatePassword(24), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)),
            newUserPolicy: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(0))
          });
        }
      }, {
        key: "getListOfUsers",
        value: function getListOfUsers() {
          var _this27 = this;

          this.apiService.getUsers().subscribe(function (data) {
            _this27.apiService.validateAuthInResponse(data);

            console.log(data);
            _this27.usersRaw = data;
            var arrayOfUsers = Object.entries(data).map(function (e) {
              return _defineProperty({}, e[0], e[1]);
            });
            _this27.users = arrayOfUsers;

            _this27.mdbTable.setDataSource(arrayOfUsers);

            console.log(arrayOfUsers);
            _this27.previous = _this27.mdbTable.getDataSource();
          });
        }
      }, {
        key: "getListOfPolicies",
        value: function getListOfPolicies() {
          var _this28 = this;

          this.apiService.getPolicies().subscribe(function (data) {
            _this28.apiService.validateAuthInResponse(data);

            _this28.policies = Object.keys(data);
          });
        }
      }, {
        key: "createUser",
        value: function createUser() {
          var _this29 = this;

          var userAccess = this.newUserAccess.value;
          var userSecret = this.newUserSecret.value;
          var userPolicy = this.newUserPolicy.value;
          console.log(userPolicy);

          if (userPolicy != '') {
            this.apiService.addUserExtended(userAccess, userSecret, userPolicy).subscribe(function (data) {
              _this29.apiService.validateAuthInResponse(data);

              console.log(data);

              _this29.getListOfUsers();

              if (data["Success"]) {
                _this29.toastr.success('User: ' + userAccess + ' with policy ' + userPolicy + ' has been created', 'Success');
              } else {
                _this29.toastr.error(JSON.stringify(data), 'Error while creating user');
              }
            });
          } else {
            this.apiService.addUser(userAccess, userSecret).subscribe(function (data) {
              _this29.apiService.validateAuthInResponse(data);

              console.log(data);

              _this29.getListOfUsers();

              if (data["Success"]) {
                _this29.toastr.success('User: ' + userAccess + ' has been created', 'Success');
              } else {
                _this29.toastr.error(JSON.stringify(data), 'Error while creating user');
              }
            });
          }
        }
      }, {
        key: "setStatusUser",
        value: function setStatusUser(accessKey, status) {
          var _this30 = this;

          if (status == 'enabled') {
            status = 'disabled';
          } else {
            status = 'enabled';
          }

          this.apiService.setStatusUser(accessKey, status).subscribe(function (data) {
            _this30.apiService.validateAuthInResponse(data);

            console.log(data);

            if (data["Success"]) {
              _this30.toastr.success('User: ' + accessKey + ' status has changed to ' + status, 'Success');
            } else {
              _this30.toastr.error(JSON.stringify(data), 'Error while changing state for user');
            }

            _this30.getListOfUsers();
          });
        }
      }, {
        key: "deleteUserPrepare",
        value: function deleteUserPrepare(accessKey) {
          this.userToDelete = accessKey;
        }
      }, {
        key: "updateUserPrepare",
        value: function updateUserPrepare(accessKey) {
          this.userToUpdate = accessKey;
          this.updateUser.patchValue({
            'accessKeyUpdate': accessKey
          });

          if (this.usersRaw[accessKey]['policyName']) {
            this.updateUser.patchValue({
              'policyUpdate': this.usersRaw[accessKey]['policyName']
            });
          }

          if (this.usersRaw[accessKey]['status']) {
            this.updateUser.patchValue({
              'statusUpdate': this.usersRaw[accessKey]['status']
            });
          }

          console.log(this.usersRaw[accessKey]);
        }
      }, {
        key: "updateGenNewPassword",
        value: function updateGenNewPassword() {
          this.updateUser.patchValue({
            'secretKeyUpdate': this.generatePassword(24)
          });
        }
      }, {
        key: "updateUserSave",
        value: function updateUserSave() {
          var _this31 = this;

          var updatedSecret = this.updateUser.value.secretKeyUpdate;
          var updatedPolicy = this.updateUser.value.policyUpdate;
          var updatedStatus = this.updateUser.value.statusUpdate;
          this.apiService.updateUser(this.userToUpdate, updatedSecret, updatedPolicy, updatedStatus).subscribe(function (data) {
            _this31.apiService.validateAuthInResponse(data);

            console.log(data);

            _this31.getListOfUsers();

            if (data["Success"]) {
              _this31.toastr.success('User: ' + _this31.userToUpdate + ' has been updated', 'Success');
            } else {
              _this31.toastr.error(JSON.stringify(data), 'Error while updating user');
            }
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {
          var _this32 = this;

          this.apiService.deleteUser(this.userToDelete).subscribe(function (data) {
            _this32.apiService.validateAuthInResponse(data);

            console.log(data);

            if (data["Success"]) {
              _this32.toastr.success('User: ' + _this32.userToDelete + ' has been deleted', 'Success');
            }

            _this32.updateUserFrom();

            _this32.getListOfUsers();
          });
        }
      }, {
        key: "newUserAccess",
        get: function get() {
          return this.validatingForm.get('newUserAccess');
        }
      }, {
        key: "newUserSecret",
        get: function get() {
          return this.validatingForm.get('newUserSecret');
        }
      }, {
        key: "newUserPolicy",
        get: function get() {
          return this.validatingForm.get('newUserPolicy');
        }
      }, {
        key: "accessKeyUpdate",
        get: function get() {
          return this.updateUser.get('accessKeyUpdate');
        }
      }, {
        key: "secretKeyUpdate",
        get: function get() {
          return this.updateUser.get('secretKeyUpdate');
        }
      }, {
        key: "policyUpdate",
        get: function get() {
          return this.updateUser.get('policyUpdate');
        }
      }, {
        key: "statusUpdate",
        get: function get() {
          return this.updateUser.get('statusUpdate');
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTablePaginationComponent"], {
      "static": true
    })], UsersComponent.prototype, "mdbTablePagination", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], {
      "static": true
    })], UsersComponent.prototype, "mdbTable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')], UsersComponent.prototype, "oninput", null);
    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./users.component.scss */
      "./src/app/users/users.component.scss"))["default"]]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      apiBaseUrl: "http://localhost:8080"
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/rzrbld/repos/adminio-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map