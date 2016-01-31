var source = "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes";

/*
	<article
	  id="electriccars"
	  data-columns="3"
	  data-index-number="12314"
	  data-parent="cars">

	</article>
*/

// 1. Javascript Access
var articleElem = document.getElementById('electriccars');
 
articleElem.dataset.columns // "3"
articleElem.dataset.indexNumber // "12314"
articleElem.dataset.parent // "cars"


// 2. CSS Access
/*
	article::before {
	  content: attr(data-parent);
	}

	article[data-columns='3'] {
	  width: 400px;
	}
	article[data-columns='4'] {
	  width: 600px;
	}
*/