print('Solution for CSCI235 assignment 3 task2');
print('============================');
print('Student number: 10258663'    );
print('Name: Timothy Mah'         );
print('============================');
print(''); // newline spacing
use('db');
// this file is meant to be run in mongo shell
// i used mongo atlas and compass so my output may be a bit different then using a local mongo db instance
// qn1
print('(1) List the customer"s name, address and the created shopping cart who purchased product P1003');
print(''); // newline spacing
print('db.shoppingCart.aggregate([ { $unwind: "$CUSTOMER.creates.SHOPPINGCART" }, { $match: { "CUSTOMER.creates.SHOPPINGCART.containsProdList.productId": "P1003" } }, { $project: { _id: 0, "Customer Name": "$CUSTOMER.customerName", "Customer Address": "$CUSTOMER.customerAddress", "Shopping Cart": "$CUSTOMER.creates.SHOPPINGCART" } } ]).pretty();');
print(''); // newline spacing
db.shoppingCart.aggregate([
    { $unwind: "$CUSTOMER.creates.SHOPPINGCART" },
    { $match: { "CUSTOMER.creates.SHOPPINGCART.containsProdList.productId": "P1003" } },
    {
      $project: {
        _id: 0,
        "Customer Name": "$CUSTOMER.customerName",
        "Customer Address": "$CUSTOMER.customerAddress",
        "Shopping Cart": "$CUSTOMER.creates.SHOPPINGCART"
      }
    }
  ]).pretty();
print(''); // newline spacing
// qn2
print('(2) List the customer"s name, address, and the created shopping cart of the customer who created a shopping cart on 11 May 2024 (ISODate("2024-05-11T00:00:00Z")). Please do not show the customer id');
print(''); // newline spacing
print('db.shoppingCart.aggregate([ { $unwind: "$CUSTOMER.creates.SHOPPINGCART" }, { $match: { "CUSTOMER.creates.SHOPPINGCART.dateCreated": ISODate("2024-05-11T00:00:00Z") } }, { $project: { _id: 0, "Customer Name": "$CUSTOMER.customerName", "Customer Address": "$CUSTOMER.customerAddress", "Shopping Cart": "$CUSTOMER.creates.SHOPPINGCART" } } ]).pretty();');
print(''); // newline spacing
db.shoppingCart.aggregate([
	{ $unwind: "$CUSTOMER.creates.SHOPPINGCART" },
	{ $match: { "CUSTOMER.creates.SHOPPINGCART.dateCreated": ISODate('2024-05-11T00:00:00Z') } },
	{ $project: 
		{
			_id: 0,
			"Customer Name": "$CUSTOMER.customerName",
			"Customer Address": "$CUSTOMER.customerAddress",
			"Shopping Cart": "$CUSTOMER.creates.SHOPPINGCART"
		} 
	}
]).pretty();
print(''); // newline spacing
// qn3
print('(3) Find the total number of shopping carts created by each customer. For each customer, list his/her email address and the total number of shopping cart created');
print(''); // newline spacing
print('db.shoppingCart.aggregate([ { $match: { "CUSTOMER.creates.SHOPPINGCART": { $exists: true } } }, { $project: { "Customer Email" : "$CUSTOMER.customerEmail", _id: 0, "Total Shopping Carts" : { $size: "$CUSTOMER.creates.SHOPPINGCART" } } } ]).pretty();');
print(''); // newline spacing
db.shoppingCart.aggregate([
	{
	  $match: {
		"CUSTOMER.creates.SHOPPINGCART": { $exists: true }
	  }
	},
	{
		$project: {
			"Customer Email" : "$CUSTOMER.customerEmail",
			_id: 0,
			"Total Shopping Carts" : { $size: "$CUSTOMER.creates.SHOPPINGCART" }
		}
	  }
  ]).pretty();
print(''); // newline spacing
// qn4
print('(4) Find the products that have been included in at least 2 or 3 shopping carts');
print(''); // newline spacing
print('db.shoppingCart.aggregate([ { $match: { "PRODUCT.includedIn": { $exists: true } } }, { $project: { _id: 0, product: "$PRODUCT.productId", includedCount: { $size: "$PRODUCT.includedIn" } } }, { $match: { includedCount: { $gt: 2 } } }, { $project: { product: 1 } } ]).pretty();');
print(''); // newline spacing
db.shoppingCart.aggregate([
	{
	  $match: {
		"PRODUCT.includedIn": { $exists: true }
	  }
	},
	{
	  $project: {
		_id: 0,
		product: "$PRODUCT.productId",
		includedCount: { $size: "$PRODUCT.includedIn" }
	  }
	},
	{
	  $match: {
		includedCount: { $gt: 2 }
	  }
	},
	{
	  $project: {
		product: 1
	  }
	}
  ]).pretty();
print(''); // newline spacing
// qn5
print('(5) For each price base, list the price base and the total number of each price base');
print(''); // newline spacing
print('db.shoppingCart.aggregate([ { $match: { "PRODUCT.price.base": { $exists: true } } }, { $project: { "PRODUCT.price.base": 1, "PRODUCT.price.value": 1, "_id": 0 } }, { $group: { _id: "$PRODUCT.price.base", totalValue: { $sum: "$PRODUCT.price.value" } } } ]).pretty();');
print(''); // newline spacing
db.shoppingCart.aggregate([
	{
	  $match: {
		"PRODUCT.price.base": { $exists: true }
	  }
	},
	{
		$project: {
		  "PRODUCT.price.base": 1,
		  "PRODUCT.price.value": 1,
		  "_id": 0
		}
	},
	{
		$group: {
		  _id: "$PRODUCT.price.base",
		  totalValue: { $sum: "$PRODUCT.price.value" }
		}
	}
  ]).pretty();
print(''); // newline spacing
// qn6
print('(6) Find the customers who have purchased both the products "P1002" and "P1003"');
print(''); // newline spacing
print('db.shoppingCart.aggregate([ { $match: { "CUSTOMER.creates.SHOPPINGCART.containsProdList.productId": { $in: ["P1002", "P1003"] } } } ]).pretty();');
print(''); // newline spacing
db.shoppingCart.aggregate([
	{
	  $match: {
		"CUSTOMER.creates.SHOPPINGCART.containsProdList.productId": { $in: ["P1002", "P1003"] }
	  }
	}
  ]).pretty();
print(''); // newline spacing
// qn7
print('(7) Find the products that have not been included in any of the shopping carts');
print(''); // newline spacing
print('db.shoppingCart.aggregate([ { $match: { "PRODUCT.includedIn": { $exists: true, $in: [null] } } } ]).pretty();');
print(''); // newline spacing
db.shoppingCart.aggregate([
	{
	  $match: {
		"PRODUCT.includedIn": { $exists: true, $in: [null] }
	  }
	}
  ]).pretty();
print(''); // newline spacing
// qn8
print('(8) Find the total number of customers who do not provide his/her telephone number');
print(''); // newline spacing
print('db.shoppingCart.aggregate([ { $match: { "CUSTOMER": { $exists: true }, "CUSTOMER.customerPhone": { $exists: false } } }, { $count: "customer_no_phone" } ]).pretty();');
print(''); // newline spacing
db.shoppingCart.aggregate([
	{
	  $match: {
		"CUSTOMER": { $exists: true },
		"CUSTOMER.customerPhone": { $exists: false }
	  }
	},
	{
	  $count: "customer_no_phone"
	}
  ]).pretty();
print(''); // newline spacing
// qn9
print('(9) Update the closing date (dateClosed) of the cart "cart001" of the customer "C92378" to 15 May 2024.');
print(''); // newline spacing
print('db.shoppingCart.updateOne( { "_id": "C92378", "CUSTOMER.creates.SHOPPINGCART.cartId": "cart001" }, { $set: { "CUSTOMER.creates.SHOPPINGCART.$.dateClosed": new Date("2024-05-15") } } );');
print(''); // newline spacing
db.shoppingCart.updateOne(
	{ 
	  "_id": "C92378", 
	  "CUSTOMER.creates.SHOPPINGCART.cartId": "cart001" 
	},
	{ 
	  $set: { 
		"CUSTOMER.creates.SHOPPINGCART.$.dateClosed": new Date("2024-05-15") 
	  } 
	}
  );
print(''); // newline spacing
// qn10
print('(10) Delete from the collection a shoppingcart (cart005) created by the customer C78263');
print(''); // newline spacing
print('db.shoppingCart.updateOne( { "_id": "C78263" }, { $pull: { "CUSTOMER.creates.SHOPPINGCART": { "cartId": "cart005" } } } );');
print(''); // newline spacing
db.shoppingCart.updateOne(
	{ "_id": "C78263" },
	{ $pull: { "CUSTOMER.creates.SHOPPINGCART": { "cartId": "cart005" } } }
  );
print(''); // newline spacing