System.register([], function (_export) {
	"use strict";

	_export("pruneOptions", pruneOptions);

	function pruneOptions(options) {

		var returnOptions = {};

		for (var prop in options) {
			if (options.hasOwnProperty(prop) && options[prop] !== null) {
				returnOptions[prop] = options[prop];
			}
		}

		return returnOptions;
	}

	return {
		setters: [],
		execute: function () {}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9vcHRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sVUFBUyxZQUFZLENBQUMsT0FBTyxFQUFFOztBQUtyQyxNQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7O0FBRXZCLE9BQUksSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO0FBQ3hCLE9BQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO0FBQzFELGlCQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDO0dBQ0Q7O0FBRUQsU0FBTyxhQUFhLENBQUM7RUFDckIiLCJmaWxlIjoiY29tbW9uL29wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcHJ1bmVPcHRpb25zKG9wdGlvbnMpIHtcclxuXHQvLyBJbXBsaWNpdGx5IHNldHRpbmcgb3B0aW9ucyB0byBcInVuZGVmaW5lZFwiIGZvciBhIGtlbmRvIGNvbnRyb2wgY2FuIGJyZWFrIHRoaW5ncy5cclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHBydW5lcyB0aGUgc3VwcGxpZWQgb3B0aW9ucyBvYmplY3QgYW5kIHJlbW92ZXMgdmFsdWVzIHRoYXQgXHJcblx0Ly8gYXJlbid0IHNldCB0byBzb21ldGhpbmcgZXhwbGljaXQgKGkuZS4gbm90IG51bGwpXHJcblxyXG5cdHZhciByZXR1cm5PcHRpb25zID0ge307XHJcblxyXG5cdGZvcih2YXIgcHJvcCBpbiBvcHRpb25zKSB7XHJcblx0XHRpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3ApICYmIG9wdGlvbnNbcHJvcF0gIT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuT3B0aW9uc1twcm9wXSA9IG9wdGlvbnNbcHJvcF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmV0dXJuT3B0aW9ucztcdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
