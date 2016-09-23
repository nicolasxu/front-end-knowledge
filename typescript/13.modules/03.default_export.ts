// JQuery.d.ts

declare let $: JQuery;
export default $;



// App.ts

import $ from "JQuery";
$("button.continue").html( "Next Step..." );


// When import default export file, 
// no need to use {}

