import React from 'react';

function Error({errorMessage}) {
	return errorMessage ? <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{errorMessage}</div> : null
}

export default Error;
