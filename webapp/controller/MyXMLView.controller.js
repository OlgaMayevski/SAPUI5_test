sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.MyXMLView", {

		onCBSelect: function() {
			
			/*@type sap.m.CheckBox */
			var oCheckBox = this.getView().byId("idCheckBox");	
			if (oCheckBox.getSelected()){
				oCheckBox.setText("Yes");
			} else {
				oCheckBox.setText("No");
			}
			
		}

	});
});