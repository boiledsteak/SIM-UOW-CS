db.shoppingCart.insert([
	{"_id": "C92378",
	 "CUSTOMER" : { "customerId" : "C92378",
			"customerName" : "Daniel Martin",
			"customerAddress" : { "street" : "718 Main Street",
				      	      "building" : "Idea Tower 1",
				      	      "postalCode" : "468419",
				      	      "country" : "Singapore" },
			"customerEmail" : "C92378@gmail.com",
			"customerPhone" : "92378888",
			"creates" : { 
				"SHOPPINGCART":[
					{ "cartId" : "cart001",
				 	  "dateCreated" : new Date("2024-05-19"),
				 	  "dateClosed" : null,
					  "containsProdList" : [ 
						{ "prodListId" : 1,
					  	  "productId" : "P1002",
					  	  "quantity" : 2 },
						{ "prodListId" : 2,
					  	  "productId" : "P1001",
					  	  "quantity": 1 } ] 
					},
					{ "cartId" : "cart002",
				 	  "dateCreated" : new Date("2024-05-12"),
					  "dateClosed" : new Date("2024-05-19"),
					  "containsProdList" : [ 
						{ "prodListId" :  1,
					  	  "productId" : "P1001",
						  "quantity": 3 } ]
					} ] 
				   }
			}
	},
	{"_id":"C78263",
	 "CUSTOMER" : { "customerId" : "C78263",
			"customerName" : "Andrew Smith",
			"customerAddress" : { "street" : "18 Bukit Timah",
				      	      "building" : "Rose",
				      	      "postalCode" : "589616",
				      	      "country" : "Singapore" },
			"customerEmail" : "C78263@gmail.com",
			"creates" : { 
				"SHOPPINGCART":[
					{ "cartId" : "cart003",
				 	  "dateCreated" : new Date("2024-05-11"),
				 	  "dateClosed" : new Date("2024-05-11"),
					  "containsProdList" : [ 
						{ "prodListId" : 1,
					  	  "productId" : "P1002",
					  	  "quantity" : 2 },
						{ "prodListId" : 2,
					  	  "productId" : "P1003",
					  	  "quantity": 1 } ] 
					},
					{ "cartId" : "cart004",
				 	  "dateCreated" : new Date("2024-05-14"),
					  "dateClosed" : null,
					  "containsProdList" : [ 
						{ "prodListId" :  1,
					  	  "productId" : "P1001",
						  "quantity": 3 } ]
					},
					{ "cartId" : "cart005",
				 	  "dateCreated" : new Date("2024-05-15"),
					  "dateClosed" : null,
					  "containsProdList" : [ 
						{ "prodListId" :  1,
					  	  "productId" : "P1002",
						  "quantity": 1 } ]
					}] 
				   }
			}
	}
]);

db.shoppingCart.insert(
[{ "_id": "P1001",
   "PRODUCT" : { "productId" : "P1001",
		 "productName" : "HD Scanner",
		 "price" : { "unit" : "Dollar",
			     "base" : "Australian",
			     "value" : 800 },
		 "includedIn": ["cart001", "cart002", "cart004"] } },
 { "_id":"P1002",
   "PRODUCT" : { "productId" : "P1002",
		 "productName" : "Red Toner",
		 "price" : { "unit" : "Dollar",
			     "base" : "Singapore",
			     "value" : 90 },
		 "includedIn": ["cart001","cart003","cart005"] } },
 { "_id":"P1003",
   "PRODUCT" : { "productId" : "P1003",
		 "productName" : "Fuji Xerox Printer",
		 "price" : { "unit" : "Dollar",
			     "base" : "US",
			     "value" : 400 },
		 "includedIn": ["cart003"] } },
 { "_id":"P1004",
   "PRODUCT" : { "productId" : "P1004",
		 "productName" : "Huion Tablet",
		 "price" : { "unit" : "Dollar",
			     "base" : "Singapore",
			     "value" : 360 },
		 "includedIn": [null] } } 
]);
