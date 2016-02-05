var source = "http://stackoverflow.com/questions/17561022/how-can-i-pass-a-parameter-into-a-backbone-js-view";



 dataTypesView = new DataTypesView({magic:true,el:$('#dataViewSpace'),templateString:'#template'});

 new View([options]);
var doc = documents.first();

new DocumentRow({
  model: doc,
  id: "document-row-" + doc.id
});

 // There are several special options that, if passed,
 // will be attached directly to the view: 
 // model, 
 // collection, 
 // el, 
 // id, 
 // className, 
 // tagName, 
 // attributes and 
 // events.
 
 // The rest of the keys:values will be available at this.options
 (not true!!!)


 // All options will also be passed to your initialize function, if defined.
