function numento_evaluate(_s){return eval(_s)};
function numento_timeout(_fct,_time,p1,p2,p3){
	
	/*
	if (typeof _fct === "string")
	{
		_fct = numento_evaluate(_fct)
	}
	*/
	
	 /*alert(numento_evaluate(_fct))*/;
	return setTimeout(_fct,_time,p1,p2,p3)
	
	};
