import React from 'react';

function Search({searchProps}) {
	const {txtInput, setTxtInput, dateInput, setDateInput, Add} = searchProps;
	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input 
						id="studentName" data-testid="studentName" type="text" 
						className="mr-30 mt-10"
						value={txtInput}
						onChange={(e)=>setTxtInput(e.target.value)} 
					/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input 
						id="joiningDate" data-testid="joiningDate" type="date" 
						className="mr-30 mt-10" 
						value={dateInput}
						onChange={(e)=>{
							setDateInput(e.target.value)
						}} 
					/>
				</div>
			</label>
			<button 
				type="button" 
				data-testid="addBtn" 
				className="small mb-0"
				onClick={()=>Add()}
			>Add</button>
		</div>
	);
}

export default Search;
