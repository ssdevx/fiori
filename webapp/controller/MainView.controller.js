sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("ssdev.invoices.controller.MainView", {
            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("./model/selectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
            },

            onFilter: function (oEvent) {

            },

            onClearFilter: function(oEvent){
                const oModelSS = this.getView().getModel("selectionScreen");
                oModelSS.setProperty("/CountryKey", "");
            }
        });
    });
