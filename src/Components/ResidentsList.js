import React from 'react';

function ResidentsList({Props}) {
	const {residentLists} = Props
	return (
		<div className="pa-10 mt-10 w-75">
			<div 
				className="font-weight-bold text-center"
			>Residents List</div>
			<ul 
				className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList"
			>
				{residentLists.map((list, i) => <li key={i} className="slide-up-fade-in">
					{list.toLowerCase()}
				</li>)}
			</ul>
		</div>
	);
}

export default ResidentsList;
