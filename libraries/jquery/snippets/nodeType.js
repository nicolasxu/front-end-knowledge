var source = "https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType";


this.$menu.contents().each(
				function()
				{
					if ( $(this)[ 0 ].nodeType == 3 )
					{	// remove all the text nodes
						$(this).remove();
					}
				}
			);

			// Node.ELEMENT_NODE is	1
			// Node.COMMENT_NODE	8