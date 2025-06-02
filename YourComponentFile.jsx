<div className="flex justify-between items-center">
  <div>
    <h1>{company.name}</h1>
  </div>
  
  {isCompanyOwner && (
    <div className="ml-auto">
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleEditClick}
      >
        Edit Company
      </button>
    </div>
  )}
</div> 