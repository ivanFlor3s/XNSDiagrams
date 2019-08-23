var templates = {
	"base": {
		"declaration": {
			"class": "Class",
			"modifiers": "modifiers",
			"type": "type",
			"name": "methodName",
			"arguments": []
		},
		"localVars": [],
		"statements": []
	},
	"parametro": {
		"type": "type",
		"name": "name"
	},
	"variable": {
		"type": "type",
		"name": "name"
	},
	"asignacion": {
		"type": "assignment",
		"data": {
			"variable": "variable",
			"value": "value"
		}
	},
	"salida": {
		"type": "output",
		"data": {
			"message": "value"
		}
	},
	"entrada": {
		"type": "input",
		"data": {
			"variable": "variable"
		}
	},
	"bloque": {
		"type": "block",
		"data": {
			"content": "instruction"
		}
	},
	"invocacion": {
		"type": "call",
		"data": {
			"statement": "object.method()"
		}
	},
	"return": {
		"type": "return",
		"data": {
			"value": "value"
		}
	},
	"if": {
		"type": "if",
		"data": {
			"condition": "condition",
			"then": [],
			"else": []
		}
	},
	"switch": {
		"type": "switch",
		"data": {
			"expression": "variable",
			"options": [{
					"case": "A",
					"statements": []
				},
				{
					"case": "B",
					"statements": []
				},
				{
					"case": "default",
					"statements": []
				}
			]
		}
	},
	"while": {
		"type": "while",
		"data": {
			"condition": "condition",
			"statements": []
		}
	},
	"do-while": {
		"type": "dowhile",
		"data": {
			"condition": "condition",
			"statements": []
		}
	},
	"for": {
		"type": "for",
		"data": {
			"control": {
				"variable": "variable",
				"start": "start",
				"stop": "stop",
				"step": "step"
			},
			"statements": []
		}
	},
	"for-each": {
		"type": "foreach",
		"data": {
			"control": {
				"class": "type",
				"variable": "value",
				"collection": "collection"
			},
			"statements": []
		}
	}
}

var HTMLRenderHead = '<link rel="stylesheet" type="text/css" href="css/bootstrap/bootstrap.min.css" /><link rel="stylesheet" type="text/css" href="css/XNSDEditor.css" /><link rel="stylesheet" type="text/css" href="css/XNSDiagram.css" />';
var HTMLRenderBody = '<script type="application/javascript" src="js/XNS-core/html2canvas.js"></script><script type="application/javascript" src="js/XNS-core/Enumeration.js"></script><script type="application/javascript" src="js/XNS-core/ClassConstructor.js"></script><script type="application/javascript" src="js/XNS-core/BaseDiagram.js"></script><script type="application/javascript" src="js/XNS-core/DiagramObject.js"></script><script type="application/javascript" src="js/XNS-core/XNSDiagram.js"></script>';