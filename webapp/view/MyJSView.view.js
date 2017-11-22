sap.ui.jsview("sap.training.view.MyJSView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.training.view.MyJSView
	 */
	getControllerName: function() {
		return "sap.training.controller.MyJSView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sap.training.view.MyJSView
	 */
	createContent: function(oController) {
	
		var oText = new sap.m.Text({
			text: "Текст из js view"	
		});
	
		var oCheckBox = new sap.m.CheckBox(this.createId("idCheckBox"),{
			text: "No"
		});
		
		oCheckBox.attachSelect(oController.onCBSelect, oController);
		
		return [oText, oCheckBox];
	}

});