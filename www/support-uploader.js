window.support = function(ticketDescription, ticketNumber, contactDetails, success, error) {
	var args = [
		ticketDescription,
		ticketNumber,
		contactDetails
	];
    cordova.exec(success, error, "SupportUpload", "uploadSupport", args);
};